import { getUserSession } from "~/services/session.server";
import { json, MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData, useFetcher, Link, Outlet } from "@remix-run/react";
import { useEffect, useState } from "react";
import { findTextByTextId } from "~/model/text";
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
import { findAllSuggestionByTextId } from "~/model/suggestion";
import SuggestionForm from "~/component/Suggestion/SuggestionForm";
import editorProps from "~/tiptap/events";
import { useFlags } from "flagsmith/react";
import Header from "~/component/Layout/Header";
import Split from "react-split";
import { isMobile } from "react-device-detect";
import usePusherPresence from "~/component/hooks/usePusherPresence";
import OnlineUsers from "~/component/UI/OnlineUserList";
import useFetcherWithPromise from "~/lib/useFetcherPromise";
import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import DiffMatchPatch from "diff-match-patch";
export const loader: LoaderFunction = async ({ request, params }) => {
  let user = await getUserSession(request);

  const text_id = parseInt(params.id);
  if (!text_id) throw new Error("not valid textId");
  const text = await findTextByTextId(text_id, false);
  const suggestions = await findAllSuggestionByTextId(text_id);
  return json({
    user,
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
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function () {
  const data = useLoaderData();
  const setTextName = useSetRecoilState(textName);

  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
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
        let oldContent = swrData?.content;
        let newContent = editor.getHTML();
        if (oldContent !== newContent) {
          const changes = dmp.diff_main(oldContent, newContent);
          const patch = dmp.patch_make(changes);
          let query = dmp.patch_toText(patch);
          if (newContent.length > 2000 && data.user) saveData(query);
        }
      },
    },
    []
  );
  const {
    isLoading,
    data: swrData,
    error,
    mutate,
    isValidating,
  } = useSWR(`/api/text?textId=${data.text.id}`, fetcher, {
    revalidateIfStale: true,
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    onSuccess: (item) => {
      setTextName(data?.text?.name);
      editor?.commands.setContent(item.content);
    },
  });
  const saveData = async (patch: string) => {
    const formData = new FormData();
    formData.append("id", data.text?.id);
    formData.append("patch", JSON.stringify(patch));
    await mutate(
      fetch("/api/text", {
        method: "POST",
        body: formData,
      }),
      {
        rollbackOnError: true,
        revalidate: true,
      }
    );
  };

  const { onlineMembers } = usePusherPresence(
    `presence-text_${data.text.id}`,
    data.pusher_env.key,
    data.pusher_env.cluster,
    mutate
  );
  const flags = useFlags(["suggestionlocation"]);
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
  const [textHeight, setTextHeight] = useState(90);
  useEffect(() => {
    if (isMobile) {
      setTextHeight(40);
    }
  }, [isMobile]);

  return (
    <div className=" flex flex-col h-screen">
      <Header user={data.user} editor={editor} />
      <OnlineUsers onlineMembers={onlineMembers} count={onlineMembers.length} />
      <div className="flex-1  flex max-w-6xl w-full mx-auto pt-16">
        <Split
          minSize={!isMobile ? 350 : 100}
          maxSize={750}
          className="split flex-1 flex flex-col md:flex-row"
          direction={!isMobile ? "horizontal" : "vertical"}
          sizes={!isMobile ? [65, 35] : [50, 50]}
        >
          <div
            style={{
              maxHeight: `${textHeight}vh`,
              overflowY: "scroll",
            }}
            id="textEditorContainer"
          >
            {error && <div>{error}</div>}
            {editor || !isLoading ? (
              <EditorContainer editor={editor} isSaving={isValidating} />
            ) : (
              <div className="flex justify-center h-[400px] w-full animate-pulse ">
                <div className="flex w-full h-full  dark:bg-gray-700"></div>
              </div>
            )}
          </div>
          <div
            className={`md:h-screen p-3 overflow-y-auto w-full bg-white dark:bg-gray-700 md:sticky md:top-0 rounded-sm`}
          >
            {(openSuggestion || suggestionSelected?.id) &&
            (!isSuggestionAtBubble || suggestionSelected?.id) ? (
              <SuggestionForm editor={editor} />
            ) : (
              <Outlet context={{ user: data.user, editor, text: data.text }} />
            )}
            {suggestionSelected?.id && <SuggestionContainer editor={editor} />}
          </div>
        </Split>
      </div>
    </div>
  );
}
