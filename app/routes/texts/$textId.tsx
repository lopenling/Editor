import { getUserSession } from "~/services/session.server";
import { json, MetaFunction } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/server-runtime";
import {
  useLoaderData,
  useFetcher,
  Link,
  Outlet,
  useLocation,
} from "@remix-run/react";
import { findTextByTextId } from "~/model/text";
import Editor from "~/component/EditorContainer/Editor";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEditor } from "@tiptap/react";
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  selectionRangeState,
  textName,
} from "~/states";
import { useEffect, useMemo } from "react";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import HardBreak from "@tiptap/extension-hard-break";
import Highlight from "@tiptap/extension-highlight";
import FontFamily from "@tiptap/extension-font-family";
import { Suggestion } from "~/tiptap-extension/suggestion";
import PostMark from "~/tiptap-extension/postMark";
import SuggestionContainer, { SuggestionForm } from "~/component/Suggestion";
import { FontSize } from "~/tiptap-extension/fontSize";
import { SearchAndReplace } from "~/tiptap-extension/searchAndReplace";
import { MAX_WIDTH_PAGE } from "~/constants";
import { motion } from "framer-motion";
import { findAllSuggestionByTextId } from "~/model/suggestion";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("post");

  // const selectedPost = postId ? await findPostByPostId(postId) : null;
  let user = await getUserSession(request);
  const textId = parseInt(params.textId);
  const text = await findTextByTextId(textId, false);
  const suggestion = await findAllSuggestionByTextId(textId);
  if (!textId) throw new Error("not valid textId");

  return json({ user, text: text, suggestion });
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
export interface CommentInstance {
  uuid?: string;
  comments?: any[];
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
  let content = textFetcher.data?.content.replace(/\n/g, "<br>");
  const setSelectionRange = useSetRecoilState(selectionRangeState);
  const setSelection = useSetRecoilState(selectedTextOnEditor);
  const [suggestionSelected, suggestionSelector] = useRecoilState(
    selectedSuggestionThread
  );
  const [postSelected, postSelector] = useRecoilState(selectedPostThread);
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
  const saveText = useFetcher();
  const saveData = (content) => {
    saveText.submit(
      { content, id: data.text?.id },
      { method: "post", action: "/api/text" }
    );
  };
  function suggestionSetter(id) {
    suggestionSelector({
      id: id,
    });
  }
  function postSetter(id) {
    postSelector({
      id: id,
    });
  }

  let editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        FontFamily,
        FontSize,
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
            class: "highlight",
          },
        }),
        Suggestion(suggestionSetter).configure({
          HTMLAttributes: {
            class: "suggestion",
          },
        }),
        PostMark(postSetter).configure({
          HTMLAttributes: {
            class: "post",
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
        transformPastedText(text) {
          return "";
        },
        attributes: {
          inputmode: "none",
        },
      },
      onSelectionUpdate: ({ editor }) => {
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelection({
          start: from,
          end: to,
          text: editor?.state.doc.textBetween(from, to, ""),
        });
        setOpenSuggestion(false);
        if (!editor.isActive("suggestion")) suggestionSelector({ id: null });
        if (!editor.isActive("post")) postSelector({ id: null });
        // define the mark you want to check for
        setSelectionRange(null);
      },
      onCreate: ({ editor }) => {
        if (data.selectedPost) {
          // let from = data.selectedPost.start;
          // let to = data.selectedPost.end;
          // editor?.chain().focus().setTextSelection({ from, to }).run();
        }
      },
      onUpdate: ({ editor }) => {
        let content = editor.getHTML();
        if (content.length > 2000) saveData(content);
      },
    },
    [content]
  );

  return (
    <motion.div
      key={useLocation().pathname}
      initial={{ x: "5%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "5%", opacity: 0 }}
    >
      <main
        className="pt-5 container relative lg:mx-auto flex w-full flex-col lg:gap-5 lg:flex-row   "
        style={{ maxWidth: MAX_WIDTH_PAGE }}
      >
        {editor ? <Editor content={content} editor={editor} /> : <div />}
        <div className=" sticky top-[78px] sm:w-full lg:w-1/3 max-h-[80vh]">
          {suggestionSelected.id && <SuggestionContainer editor={editor} />}
          {(openSuggestion || suggestionSelected.id) && (
            <SuggestionForm editor={editor} />
          )}
          <Outlet context={{ user: data.user, editor, text: data.text }} />
        </div>
      </main>
    </motion.div>
  );
}
