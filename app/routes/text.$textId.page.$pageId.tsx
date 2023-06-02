import { LoaderArgs, LoaderFunction, defer } from "@remix-run/node";
import {
  Await,
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useOutletContext,
} from "@remix-run/react";
import { useEditor } from "@tiptap/react";
import { getPage } from "~/model/page";
import * as Extension from "~/features/Editor/tiptap";
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  textInfo,
} from "~/states";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Suspense, useEffect, useState } from "react";
import { isSmallScreen } from "~/lib";
import Header from "~/component/Layout/Header";

import Split from "react-split";
import { isMobile, isTablet } from "react-device-detect";
import { EditorContainer } from "~/features/Editor";
import { SuggestionContainer, SuggestionForm } from "~/features/Suggestion";
import { getUserSession } from "~/services/session.server";
import { findAllSuggestionByPageId } from "~/model/suggestion";
import { OnlineUsers } from "~/component/UI";
import usePusherPresence from "~/component/hooks/usePusherPresence";
import Pagination from "~/component/UI/Pagination";
export const loader: LoaderFunction = async ({
  request,
  params,
}: LoaderArgs) => {
  let textId = params.textId as string;
  let order = params.pageId as string;
  let page = await getPage(parseInt(textId), parseInt(order));
  let user = await getUserSession(request);
  const suggestions = await findAllSuggestionByPageId(page?.id);
  return defer({
    page,
    text: page?.text,
    pageCount: page?.text.Page.length,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
  });
};

export default function Page() {
  const data = useLoaderData<typeof loader>();
  if (!data.page)
    return (
      <div>
        no page exist <Link to="/">go to home</Link>
      </div>
    );
  const { user } = data;
  let content = data.page.content;
  const [suggestionSelected, suggestionSelector] = useRecoilState(
    selectedSuggestionThread
  );
  const postSelector = useSetRecoilState(selectedPostThread);
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const setTextName = useSetRecoilState(textInfo);

  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
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
  const [contentData, setContent] = useState("");
  useEffect(() => {
    setContent(content);
  }, []);
  const { onlineMembers } = usePusherPresence(
    `presence-text_${data?.page?.id}`,
    data.pusher_env.key,
    data.pusher_env.cluster,
    data.user
  );

  const saveTextFetcher = useFetcher();
  const saveData = async (text: string) => {
    const formData = new FormData();
    formData.append("textId", data.text?.id);
    formData.append("pageId", data.page?.id);
    formData.append("text", text);
    saveTextFetcher.submit(formData, {
      method: "POST",
      action: "/api/text",
    });
  };

  let editor = useEditor(
    {
      extensions: [
        Extension.Document,
        Extension.Paragraph,
        Extension.Text,
        Extension.Bold,
        Extension.FontFamily,
        Extension.TextStyle,
        Extension.SearchAndReplace.configure({
          searchResultClass: "search",
          caseSensitive: false,
          disableRegex: false,
        }),
        Extension.HardBreak.configure({
          HTMLAttributes: {
            class: "pageBreak",
          },
        }),
        Extension.Highlight.configure({
          HTMLAttributes: {
            class: "highlight",
          },
        }),
        Extension.Suggestion(suggestionSetter).configure({
          HTMLAttributes: {
            class: "suggestion",
          },
        }),
        Extension.PostMark(postSetter).configure({
          HTMLAttributes: {
            class: "post",
          },
        }),
      ],
      editable: true,
      editorProps: Extension.editorProps,
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
        let newContent = editor.getHTML();
        if (newContent.length > 10 && user) saveData(newContent);
      },
      onCreate: async ({ editor }) => {
        setTextName({ name: data?.text.name, id: data?.text.id });
      },
    },
    []
  );
  const [textHeight, setTextHeight] = useState(90);
  useEffect(() => {
    if (isSmallScreen) {
      setTextHeight(40);
    }
  }, [isSmallScreen]);
  return (
    <>
      <Header editor={editor} />
      <OnlineUsers onlineMembers={onlineMembers} count={onlineMembers.length} />
      <div style={{ height: 70 }}></div>
      <Split
        minSize={isMobile ? 100 : 350}
        maxSize={750}
        className="split flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto"
        direction={isMobile ? "vertical" : "horizontal"}
        sizes={isMobile ? [50, 50] : isTablet ? [60, 40] : [65, 35]}
        gutterStyle={() => ({ height: "90vh", width: "10px" })}
      >
        <div
          style={{
            maxHeight: `${textHeight}vh`,
            overflowY: "scroll",
            overflowX: "hidden",
            scrollbarWidth: "none",
            width: "100%",
          }}
          id="textEditorContainer"
        >
          <Pagination pageCount={data.pageCount} />
          <EditorContainer
            editor={editor}
            isSaving={false}
            content={content}
            order={data.page.order}
          />
        </div>

        <div
          className={`lg:h-screen flex-1 overflow-y-auto pt-3  w-full bg-white dark:bg-gray-700 lg:sticky lg:top-0 rounded-sm`}
        >
          {openSuggestion || suggestionSelected?.id ? (
            <SuggestionForm editor={editor} />
          ) : (
            <Outlet context={{ user: user, editor, text: data.page }} />
          )}
          {suggestionSelected?.id ? (
            <Suspense fallback={<div>loading</div>}>
              <Await resolve={data.suggestions}>
                {(data) => (
                  <SuggestionContainer editor={editor} suggestions={data} />
                )}
              </Await>
            </Suspense>
          ) : null}
        </div>
      </Split>
    </>
  );
}
