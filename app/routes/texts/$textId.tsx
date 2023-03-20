import React, { Suspense } from "react";
import { getUserSession } from "~/services/session.server";
import { defer, MetaFunction } from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { useLoaderData, useFetcher, Link } from "@remix-run/react";
import { findPostByTextId, findPostByTextIdDemo } from "~/model/post";
import { findTextByTextId } from "~/model/text";
import Editor from "~/component/EditorContainer/Editor";
import { fetchCategoryData } from "~/services/discourseApi";
import { useEditor } from "@tiptap/react";
import { useRecoilState } from "recoil";
import {
  openFilterState,
  selectedTextOnEditor,
  selectionRangeState,
  showLatest,
} from "~/states";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "~/tiptap-extension/fontSize";
import FontFamily from "@tiptap/extension-font-family";
import { searchMarks } from "~/tiptap-extension/searchMarks";
import { SearchAndReplace } from "~/tiptap-extension/searchAndReplace";
import HardBreak from "@tiptap/extension-hard-break";
import { Dropdown } from "flowbite-react";
import { MAX_WIDTH_PAGE } from "~/constants";
import { uselitteraTranlation } from "~/locales/translations";
import PostForm from "~/component/PostContainer/PostForm";
import Skeleton from "~/component/PostContainer/Skeleton";
import { Await } from "@remix-run/react/dist/components";
import Posts from "~/component/PostContainer/Posts";
import filterIcon from "~/assets/svg/icon_filter.svg";
import sortIcon from "~/assets/svg/icon_sort.svg";
import floatingSortIcon from "~/assets/svg/icon_floatingSortIcon.svg";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const selectedPost = url.searchParams.get("post");
  let user = await getUserSession(request);
  const textId = parseInt(params.textId);
  const text = await findTextByTextId(textId, false);

  if (!textId) throw new Error("not valid textId");

  const CategoryData = await fetchCategoryData();
  const topicList = CategoryData.topic_list.topics;
  const posts = findPostByTextId(textId, topicList);
  return defer({ user, text: text, posts, selectedPost });
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
  React.useEffect(() => {
    if (textFetcher.type === "init")
      textFetcher.load(`/api/text?textId=${data.text?.id}`);
  }, []);
  let content = React.useMemo(() => {
    return textFetcher.data?.content.replace(/\n/g, "<br>");
  }, [textFetcher.data]);
  const [, setSelectionRange] = useRecoilState(selectionRangeState);
  const [selection, setSelection] = useRecoilState(selectedTextOnEditor);
  const [isLatestPost, setIsLatestPost] = useRecoilState(showLatest);
  const [, setOpenFilter] = useRecoilState(openFilterState);
  const translation = uselitteraTranlation();
  const editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        TextStyle,
        FontFamily,
        searchMarks,
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
    },
    [content]
  );

  return (
    <>
      <main className="container m-auto">
        <div
          className="mt-5 mx-auto flex w-full flex-col gap-5 lg:flex-row  container "
          style={{ maxWidth: MAX_WIDTH_PAGE }}
        >
          <Editor content={content} editor={editor} />
          <div className=" relative sm:w-full lg:w-1/3">
            <div className="hidden w-full items-center justify-end md:inline-flex gap-2">
              {/* sort button */}
              <Dropdown
                label={
                  <>
                    <img src={sortIcon} alt="sortIcon" />
                    <span className="ml-2 text-sm font-medium leading-tight text-gray-500">
                      sort By
                    </span>
                  </>
                }
                size="sm"
                color="white"
                className="outline-1 outline-gray-300 outline"
                dismissOnClick={false}
              >
                <Dropdown.Item
                  className={isLatestPost && "bg-green-300"}
                  onClick={() => setIsLatestPost(true)}
                >
                  Latest
                </Dropdown.Item>
                <Dropdown.Item
                  className={!isLatestPost && "bg-green-300"}
                  onClick={() => setIsLatestPost(false)}
                >
                  Earliest
                </Dropdown.Item>
              </Dropdown>
              {/* filter button */}
              <button
                onClick={() => setOpenFilter((prev) => !prev)}
                className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2"
              >
                <img src={filterIcon} alt="filterIcon" />
                <span className="text-sm font-medium leading-tight text-gray-500">
                  {translation.filter}
                </span>
              </button>
            </div>
            <div
              className="fixed bottom-2 right-3 z-40 cursor-pointer md:hidden"
              onClick={() => setOpenFilter((prev) => !prev)}
            >
              <img src={floatingSortIcon} alt="floatingSortIcon" />
            </div>
            <PostForm />

            {/* used differ at loader for post list to fetch posts as a promise */}

            <Suspense fallback={<Skeleton />}>
              <Await resolve={data.posts}>
                {(posts) => <Posts posts={[...posts]} editor={editor} />}
              </Await>
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
