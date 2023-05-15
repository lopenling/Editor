import { getUserSession } from "~/services/session.server";
import { defer, MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import {
  useLoaderData,
  useFetcher,
  Link,
  Outlet,
  Await,
} from "@remix-run/react";
import { Suspense, useEffect, useState } from "react";
import { findTextByTextId } from "~/model/text";
import EditorContainer from "~/component/Editor/EditorContainer";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEditor } from "@tiptap/react";
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  textName,
  UserState,
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
import { findAllSuggestionByTextId } from "~/model/suggestion";
import SuggestionForm from "~/component/Suggestion/SuggestionForm";
import editorProps from "~/tiptap/events";
import Header from "~/component/Layout/Header";
import Split from "react-split";
import { isMobile } from "react-device-detect";
import usePusherPresence from "~/component/hooks/usePusherPresence";
import OnlineUsers from "~/component/UI/OnlineUserList";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import DiffMatchPatch from "diff-match-patch";
import { HEADER_HEIGHT } from "~/constants";
export const loader: LoaderFunction = async ({ request, params }) => {
  const text_id = parseInt(params.id);
  if (!text_id) throw new Error("not valid textId");
  const text = await findTextByTextId(text_id, true);
  const suggestions = findAllSuggestionByTextId(text_id);
  return defer({
    text,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
  });
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
  const setTextName = useSetRecoilState(textName);
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const user = useRecoilValue(UserState);
  const [suggestionSelected, suggestionSelector] = useRecoilState(
    selectedSuggestionThread
  );
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);

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
      content: data.text.content,
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
        if (!editor.isActive("suggestion")) suggestionSelector({ id: "" });
        if (!editor.isActive("post")) postSelector({ id: "" });
      },
      onUpdate: async ({ editor }) => {
        const dmp = new DiffMatchPatch();
        let oldContent = data.text.content;
        let newContent = editor.getHTML();
        if (oldContent !== newContent) {
          const changes = dmp.diff_main(oldContent, newContent);
          const patch = dmp.patch_make(changes);
          let query = dmp.patch_toText(patch);
          if (newContent.length > 2000 && user) saveData(query);
        }
      },

      onCreate: async ({ editor }) => {
        setTextName(data.text.name);
      },
    },
    []
  );
  const saveTextFetcher = useFetcher();
  const saveData = async (patch: string) => {
    const formData = new FormData();
    formData.append("id", data.text?.id);
    formData.append("patch", JSON.stringify(patch));
    saveTextFetcher.submit(formData, {
      method: "post",
      action: "/api/text",
    });
  };

  const { onlineMembers } = usePusherPresence(
    `presence-text_${data.text.id}`,
    data.pusher_env.key,
    data.pusher_env.cluster
  );
  if (data.text === null)
    return (
      <div className="text-red-700 flex gap-2 items-center justify-center capitalize">
        <p>text not available</p>
        <Link className="text-blue-600 underline" to="/">
          go back
        </Link>
      </div>
    );
  const [textHeight, setTextHeight] = useState(90);
  useEffect(() => {
    if (isMobile) {
      setTextHeight(40);
    }
  }, [isMobile]);
  let isSaving = !!saveTextFetcher.formData?.get("patch");
  return (
    <div className=" flex flex-col h-screen">
      <Header editor={editor} />
      <OnlineUsers onlineMembers={onlineMembers} count={onlineMembers.length} />
      <div
        className="flex-1  flex max-w-6xl w-full mx-auto "
        style={{
          paddingTop: HEADER_HEIGHT,
        }}
      >
        <Split
          minSize={!isMobile ? 350 : 100}
          maxSize={750}
          className="split flex-1 flex flex-col md:flex-row "
          direction={!isMobile ? "horizontal" : "vertical"}
          sizes={!isMobile ? [65, 35] : [50, 50]}
        >
          <div
            style={{
              maxHeight: `${textHeight}vh`,
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
            id="textEditorContainer"
          >
            {editor ? (
              <EditorContainer editor={editor} isSaving={isSaving} />
            ) : (
              <div className="flex justify-center h-full w-full animate-pulse bg-gray-200 dark:bg-gray-700">
                <div className="flex-1 w-full h-full  "></div>
              </div>
            )}
          </div>
          <div
            className={`md:h-screen pt-3  w-full bg-white dark:bg-gray-700 md:sticky md:top-0 rounded-sm`}
          >
            {(openSuggestion || suggestionSelected?.id) &&
            suggestionSelected?.id ? (
              <SuggestionForm editor={editor} />
            ) : (
              <Outlet context={{ user: user, editor, text: data.text }} />
            )}
            {suggestionSelected?.id ? (
              <Suspense fallback={"loading"}>
                <Await resolve={data.suggestions}>
                  {(data) => (
                    <SuggestionContainer editor={editor} suggestions={data} />
                  )}
                </Await>
              </Suspense>
            ) : null}
          </div>
        </Split>
      </div>
    </div>
  );
}
