import { defer, MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useFetcher, Link, Outlet, Await } from "@remix-run/react";
import { Suspense, useCallback, useEffect, useState } from "react";
import { findTextByTextId } from "~/model/text";
import { EditorContainer } from "~/features/Editor";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEditor } from "@tiptap/react";
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  textInfo,
  UserState,
} from "~/states";
import * as Extension from "~/features/Editor/tiptap";
import { findAllSuggestionByTextId } from "~/model/suggestion";
import { SuggestionForm, SuggestionContainer } from "~/features/Suggestion";
import Header from "~/component/Layout/Header";
import Split from "react-split";
import usePusherPresence from "~/component/hooks/usePusherPresence";
import OnlineUsers from "~/component/ui/OnlineUserList";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HEADER_HEIGHT } from "~/constants";
import { isMobile, DiffMatchPatch, useLiveLoader } from "~/lib";
export const loader: LoaderFunction = async ({ request, params }) => {
  const text_id = parseInt(params.id);
  if (!text_id) throw new Error("not valid textId");
  const text = await findTextByTextId(text_id, false);
  const suggestions = await findAllSuggestionByTextId(text_id);
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

export default function () {
  const data = useLiveLoader() as ReturnType<typeof loader>;
  const setTextName = useSetRecoilState(textInfo);
  const [contentData, setContent] = useState("");
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const user = useRecoilValue(UserState);
  const [suggestionSelected, suggestionSelector] = useRecoilState(
    selectedSuggestionThread
  );

  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
  const postSelector = useSetRecoilState(selectedPostThread);
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
  function fetchUpdateText() {
    fetch(`/api/text?textId=${data.text.id}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.content);
      });
  }
  const { onlineMembers } = usePusherPresence(
    `presence-text_${data.text.id}`,
    data.pusher_env.key,
    data.pusher_env.cluster,
    fetchUpdateText
  );
  useEffect(() => {
    fetchUpdateText();
  }, []);
  const getQuery = useCallback(
    (newContent: string) => {
      let oldContent = contentData;
      const dmp = new DiffMatchPatch();
      if (oldContent !== newContent) {
        const changes = dmp.diff_main(oldContent, newContent);
        const patch = dmp.patch_make(changes);
        let query = dmp.patch_toText(patch);
        return query;
      }
      return null;
    },
    [contentData]
  );
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
        let query = getQuery(newContent);
        if (query && newContent.length > 2000 && user) saveData(query);
      },
      onCreate: async ({ editor }) => {
        setTextName({ name: data?.text.name, id: data?.text.id });
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

  if (!data.text)
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
          sizes={isMobile ? [50, 50] : [65, 35]}
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
            {editor ? (
              <EditorContainer
                editor={editor}
                isSaving={isSaving}
                content={contentData}
              />
            ) : (
              <div />
            )}
          </div>
          <div
            className={`md:h-screen pt-3  w-full bg-white dark:bg-gray-700 md:sticky md:top-0 rounded-sm`}
          >
            {openSuggestion || suggestionSelected?.id ? (
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
