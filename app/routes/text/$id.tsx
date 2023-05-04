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
import { useEffect, Suspense, useState, useRef } from "react";
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
import SplitPane, { Pane } from "split-pane-react";

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
  const [selectedThread, postSelector] = useRecoilState(selectedPostThread);
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
  const closesidebar = () => {
    setOpenSuggestion(false);
    suggestionSelector({ id: "" });
    postSelector({ id: "" });
  };

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
  const isSuggestionAtBubble = flags.suggestionlocation.enabled;
  const sidebarBtnRef = useRef();
  if (data.text === null)
    return (
      <div className="text-red-700 flex gap-2 items-center justify-center capitalize">
        <p>text not available</p>
        <Link className="text-blue-600 underline" to="/">
          go back
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen h-screen flex flex-col">
      <Header user={data.user} editor={editor} />

      <div className="flex gap-3 flex-col md:flex-row overflow-y-hidden  max-w-6xl mx-auto pt-16 h-full ">
        <div
          id="textEditorContainer"
          className=" bg-white overflow-y-auto h-full w-full p-2 md:flex-1"
        >
          <Suspense
            fallback={
              <div className="flex justify-center h-[400px] w-full animate-pulse ">
                <div className="flex w-full h-full  dark:bg-gray-700"></div>
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
        <div
          className={`w-1/3 md:h-screen p-2 overflow-y-auto bg-gray-100 `}
          style={{ minWidth: 400 }}
        >
          {(openSuggestion || suggestionSelected?.id) &&
          (!isSuggestionAtBubble || suggestionSelected?.id) ? (
            <SuggestionForm editor={editor} />
          ) : (
            <Outlet context={{ user: data.user, editor, text: data.text }} />
          )}
          {suggestionSelected?.id && <SuggestionContainer editor={editor} />}
        </div>
      </div>
    </div>
  );
}
