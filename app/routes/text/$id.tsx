import { getUserSession } from "~/services/session.server";
import { json, MetaFunction, defer } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import {
  useLoaderData,
  useFetcher,
  Link,
  Outlet,
  useLocation,
  Await,
} from "@remix-run/react";
import { useEffect, Suspense } from "react";
import { findTextByTextId, getTextContent } from "~/model/text";
import EditorContainer from "~/component/Editor/EditorContainer";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useEditor } from "@tiptap/react";
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  textName,
} from "~/states";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import HardBreak from "@tiptap/extension-hard-break";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import { Suggestion } from "~/tiptap/tiptap-extension/suggestion";
import PostMark from "~/tiptap/tiptap-extension/postMark";
import SuggestionContainer from "~/component/Suggestion/SuggestionContainer";
import { SearchAndReplace } from "~/tiptap/tiptap-extension/searchAndReplace";
import { MAX_WIDTH_PAGE } from "~/constants";
import { motion } from "framer-motion";
import { findAllSuggestionByTextId } from "~/model/suggestion";
import SuggestionForm from "~/component/Suggestion/SuggestionForm";
import editorProps from "~/tiptap/events";
import { useFlags } from "flagsmith/react";
import Header from "~/component/Layout/Header";

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const loader: LoaderFunction = async ({ request, params }) => {
  let user = await getUserSession(request);
  const text_id = parseInt(params.id);
  const text = await findTextByTextId(text_id, false);
  const suggestions = await findAllSuggestionByTextId(text_id);

  const textContent = getTextContent(text_id);
  if (!text_id) throw new Error("not valid textId");

  return defer({ user, text: text, textContent, suggestions });
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

  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const [suggestionSelected, suggestionSelector] = useRecoilState(
    selectedSuggestionThread
  );
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
  const saveText = useFetcher();
  const saveData = (content: string) => {
    saveText.submit(
      { content, id: data.text?.id },
      { method: "post", action: "/api/text" }
    );
  };
  function suggestionSetter(id: string) {
    suggestionSelector({
      id: id,
    });
  }
  function postSetter(id: string) {
    postSelector({
      id: id,
    });
  }
  const isSaving = !!saveText.formData;
  let editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        FontFamily,
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
      editable: true,
      editorProps: editorProps,
      onSelectionUpdate: ({ editor }) => {
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelectionRange({
          type: "",
          start: from,
          end: to,
          content: editor?.state.doc.textBetween(from, to, ""),
        });
        setOpenSuggestion(false);
        if (!editor.isActive("suggestion")) suggestionSelector({ id: null });
        if (!editor.isActive("post")) postSelector({ id: null });
        // define the mark you want to check for
      },
      onUpdate: ({ editor }) => {
        let content = editor.getHTML();
        if (content.length > 2000) saveData(content);
      },
      onCreate: () => {
        textNameSetter(data?.text?.name);
      },
    },
    []
  );
  const flags = useFlags(["suggestionlocation"]);
  const [selectedThreadId, postSelector] = useRecoilState(selectedPostThread);
  const isSuggestionAtBubble = flags.suggestionlocation.enabled;
  if (data.text === null)
    return (
      <div className="text-red-700 flex gap-2 items-center justify-center capitalize">
        <p>text not available</p>
        <Link className="text-blue-600 underline" to="/">
          go back
        </Link>
      </div>
    );
  const showAside =
    openSuggestion || suggestionSelected?.id || selectedThreadId?.id;
  console.log(showAside);
  return (
    <>
      <Header user={data.user} editor={editor} />

      <main
        className="relative sm:mr-64 grid md:grid-cols-3 gap-6 "
        style={{ maxWidth: 1185, marginInline: "auto" }}
      >
        <div className=" h-full col-span-2 pt-4">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="flex-1 my-auto">
              <Suspense
                fallback={
                  <div className="flex justify-center h-[400px] w-full animate-pulse ">
                    <div className="flex w-full h-full bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                }
              >
                <Await
                  resolve={data.textContent}
                  errorElement={<p>Error fetching content!</p>}
                >
                  <EditorContainer editor={editor} isSaving={isSaving} />
                  <div />
                </Await>
              </Suspense>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-green-200  ">
          <aside
            id="logo-sidebar"
            className={`sticky ${
              showAside
                ? "xs:fixed translate-x-0 xs:w-1/2"
                : "translate-x-full "
            }  top-0 left-0 z-40 w-full  h-screen pt-20 transition-transform sm:translate-x-0  bg-white border-r pr-3 border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
            aria-label="Sidebar"
          >
            {suggestionSelected?.id && <SuggestionContainer editor={editor} />}
            {(openSuggestion || suggestionSelected?.id) &&
            (!isSuggestionAtBubble || suggestionSelected?.id) ? (
              <SuggestionForm editor={editor} />
            ) : (
              <Outlet context={{ user: data.user, editor, text: data.text }} />
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
