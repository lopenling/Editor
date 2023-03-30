import { getUserSession } from "~/services/session.server";
import { json, MetaFunction } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData, useFetcher, Link, Outlet } from "@remix-run/react";
import { findTextByTextId } from "~/model/text";
import Editor from "~/component/EditorContainer/Editor";
import { useSetRecoilState } from "recoil";
import { useEditor } from "@tiptap/react";
import { selectedTextOnEditor, selectionRangeState, textName } from "~/states";
import { useEffect, useMemo } from "react";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import TextStyle from "@tiptap/extension-text-style";
import HardBreak from "@tiptap/extension-hard-break";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import { FontSize } from "~/tiptap-extension/fontSize";
import { SearchAndReplace } from "~/tiptap-extension/searchAndReplace";
import { MAX_WIDTH_PAGE } from "~/constants";
import { findPostByPostId } from "~/model/post";
export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("post");

  const selectedPost = postId ? await findPostByPostId(postId) : null;
  let user = await getUserSession(request);
  const textId = parseInt(params.textId);
  const text = await findTextByTextId(textId, false);
  if (!textId) throw new Error("not valid textId");

  return json({ user, text: text, selectedPost });
};

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>ohh Snap! There is an error</div>;
}
export const meta: MetaFunction = ({ data }) => {
  let dataName = data?.text?.name;
  let title = dataName ? dataName : "text";
  return {
    title,
  };
};
export function links() {
  return [
    {
      rel: "icon",
      href: "https://lopenling-app.openpecha.workers.dev/favicon.png",
      type: "image/png",
    },
  ];
}
export default function () {
  const data = useLoaderData();
  const textNameSetter = useSetRecoilState(textName);
  if (data.text === null)
    return (
      <div className="text-red-700 flex gap-2 items-center justify-center capitalize">
        <p>text not available</p>
        <Link className="text-blue-600 underline" to="/">
          go back
        </Link>
      </div>
    );
  const textFetcher = useFetcher();
  useEffect(() => {
    textNameSetter(data.text?.name);
    if (textFetcher.type === "init")
      textFetcher.load(`/api/text?textId=${data.text?.id}`);
  }, []);
  let content = useMemo(() => {
    return textFetcher.data?.content.replace(/\n/g, "<br>");
  }, [textFetcher.data]);
  const setSelectionRange = useSetRecoilState(selectionRangeState);
  const setSelection = useSetRecoilState(selectedTextOnEditor);

  const editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        FontFamily,
        FontSize,
        TextStyle,
        SearchAndReplace.configure({
          searchResultClass: "search",
          caseSensitive: false,
          disableRegex: false,
        }),
        HardBreak.configure({
          HTMLAttributes: {
            class: "pageBreak",
          },
        }),
        Highlight.configure({
          HTMLAttributes: {
            class: "my-custom-class",
          },
        }),
      ],
      content: content,
      editable: true,
      editorProps: {
        handleDOMEvents: {
          keydown: (v, event) => {
            let charCode = String.fromCharCode(event.which).toLowerCase();
            let copyPressed =
              (event.ctrlKey || event.metaKey) && charCode === "c";
            if (![37, 38, 39, 40].includes(event.keyCode) && !copyPressed) {
              event.preventDefault();
            }
          },
          textInput: (v, evt) => {
            evt.preventDefault();
          },
          drop: (v, e) => {
            e.preventDefault();
          },
          dragstart: (v, e) => {
            e.preventDefault();
          },
        },
        attributes: {
          inputmode: "none",
        },
      },
      onSelectionUpdate: ({ editor }) => {
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelectionRange(null);
        setSelection({
          start: from,
          end: to,
          text: editor?.state.doc.textBetween(from, to, ""),
        });
      },
      onCreate: ({ editor }) => {
        if (data.selectedPost) {
          let from = data.selectedPost.start;
          let to = data.selectedPost.end;
          editor?.chain().focus().setTextSelection({ from, to }).run();
        }
      },
    },
    [content]
  );
  return (
    <main
      className="pt-5 container relative lg:mx-auto flex w-full flex-col lg:gap-5 lg:flex-row   "
      style={{ maxWidth: MAX_WIDTH_PAGE }}
    >
      <Editor content={content} editor={editor} />
      <Outlet context={{ user: data.user, editor, text: data.text }} />
    </main>
  );
}
