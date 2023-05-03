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
import { isMobile } from "react-device-detect";

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
  useEffect(() => {
    if (suggestionSelected.id || openSuggestion || selectedThread.id) {
      if (isMobile) sidebarBtnRef.current?.click();
    }
  }, [suggestionSelected?.id, openSuggestion, selectedThread.id]);

  return (
    <>
      <Header user={data.user} editor={editor} />

      <div
        className="flex mx-auto relative "
        style={{ paddingTop: 78, maxWidth: MAX_WIDTH_PAGE }}
      >
        <div className="sm:w-full md:w-4/6 px-4  ">
          <button
            className="hidden bg-gray-800  text-white px-3 py-1 rounded-sm"
            ref={sidebarBtnRef}
            aria-hidden="true"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
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
        <aside
          id="logo-sidebar"
          className="fixed sm:hidden top-0 left-0 z-40 w-full h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
          aria-hidden="true"
        >
          <button
            className="md:hidden bg-gray-800  text-white px-3 py-1 rounded-sm"
            onClick={closesidebar}
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
          >
            close
          </button>
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            {suggestionSelected?.id && <SuggestionContainer editor={editor} />}
            {(openSuggestion || suggestionSelected?.id) &&
            (!isSuggestionAtBubble || suggestionSelected?.id) ? (
              <SuggestionForm editor={editor} />
            ) : (
              <Outlet context={{ user: data.user, editor, text: data.text }} />
            )}
          </div>
        </aside>
        {/* Sidebar */}
        <aside
          className={`hidden md:block sticky top-0 bg-white max-h-screen w-max px-4 py-6 `}
          style={{ width: "35%" }}
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
    </>
  );
}
