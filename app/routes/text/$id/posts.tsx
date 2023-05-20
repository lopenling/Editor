import { Suspense, useEffect } from "react";
import PostForm from "~/features/Post/PostForm";
import { Await, useOutletContext, useSearchParams } from "@remix-run/react";
import Posts from "~/features/Post/Posts";
import { Dropdown } from "flowbite-react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  openFilterState,
  selectedPostThread as selectedPostThreadState,
  showLatest,
} from "~/states";
import { findPostByTextId } from "~/model/post";
import { LoaderFunction, defer, redirect } from "@remix-run/node";
import { fetchCategoryData } from "~/services/discourseApi";
import { Editor } from "@tiptap/react";
import { useLiveLoader } from "~/lib";

export const loader: LoaderFunction = async ({ request, params }) => {
  const textId = params.id && parseInt(params.id);
  const threadId = new URL(request.url).searchParams.get("thread") ?? "";
  if (textId === "" || !textId) return redirect("/");

  const Categories = await fetchCategoryData();
  const topicList = Categories.topic_list.topics;
  const posts = await findPostByTextId(textId, topicList);
  return defer({ text: { id: textId }, posts, threadId });
};
export const ErrorBoundary = ({ error }) => {
  return <div>{error.message}</div>;
};

export default function PostContainer() {
  let [, setParams] = useSearchParams();
  let [selectedPostThread, setSelectedThread] = useRecoilState(
    selectedPostThreadState
  );
  useEffect(() => {
    let selectedThread = data.threadId;
    if (selectedThread && selectedThread !== "") {
      setTimeout(() => {
        let threadId = "p_" + selectedThread;
        document.getElementById("p_" + selectedThread)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        document.getElementById(selectedThread)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 2000);
      setParams("", { preventScrollReset: true });

      let timer = setTimeout(() => {
        setSelectedThread({ id: selectedThread });
      }, 1000);
      return () => {
        if (timer && selectedPostThread.id) {
          clearTimeout(timer);
        }
      };
    }
  }, []);
  const [isLatestPost, setIsLatestPost] = useRecoilState(showLatest);
  const setOpenFilter = useSetRecoilState(openFilterState);
  const translation = uselitteraTranlation();
  const data = useLiveLoader<typeof loader>();

  const { editor }: { editor: Editor } = useOutletContext();
  return (
    <>
      <div className=" w-full items-center justify-end inline-flex gap-2 mb-4 ">
        <Dropdown
          label={
            <>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H12C12.2652 2 12.5196 1.89464 12.7071 1.70711C12.8946 1.51957 13 1.26522 13 1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0H1ZM1 4C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5C7 4.73478 6.89464 4.48043 6.70711 4.29289C6.51957 4.10536 6.26522 4 6 4H1ZM1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9C0 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10H5C5.26522 10 5.51957 9.89464 5.70711 9.70711C5.89464 9.51957 6 9.26522 6 9C6 8.73478 5.89464 8.48043 5.70711 8.29289C5.51957 8.10536 5.26522 8 5 8H1ZM11 13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V7.414L14.293 8.707C14.4816 8.88916 14.7342 8.98995 14.9964 8.98767C15.2586 8.9854 15.5094 8.88023 15.6948 8.69482C15.8802 8.50941 15.9854 8.2586 15.9877 7.9964C15.99 7.7342 15.8892 7.4816 15.707 7.293L12.707 4.293C12.5195 4.10553 12.2652 4.00021 12 4.00021C11.7348 4.00021 11.4805 4.10553 11.293 4.293L8.293 7.293C8.19749 7.38525 8.12131 7.49559 8.0689 7.6176C8.01649 7.7396 7.9889 7.87082 7.98775 8.0036C7.9866 8.13638 8.0119 8.26806 8.06218 8.39095C8.11246 8.51385 8.18671 8.6255 8.28061 8.71939C8.3745 8.81329 8.48615 8.88754 8.60905 8.93782C8.73194 8.9881 8.86362 9.0134 8.9964 9.01225C9.12918 9.0111 9.2604 8.98351 9.3824 8.9311C9.50441 8.87869 9.61475 8.80251 9.707 8.707L11 7.414V13Z"
                  fill="#6B7280"
                />
              </svg>
              <span className="sort ml-2 text-sm font-medium leading-tight text-gray-500 dark:text-gray-50">
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
            className={
              isLatestPost ? "bg-green-300 dark:bg-gray-300 text-white " : ""
            }
            onClick={() => setIsLatestPost(true)}
          >
            Latest
          </Dropdown.Item>
          <Dropdown.Item
            className={
              !isLatestPost ? "bg-green-300 dark:bg-gray-300 text-white " : ""
            }
            onClick={() => setIsLatestPost(false)}
          >
            Earliest
          </Dropdown.Item>
        </Dropdown>
        <button
          id="filterButton"
          onClick={() => setOpenFilter((prev) => !prev)}
          className="filter flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.3999 2.89998C2.3999 2.6878 2.48419 2.48432 2.63422 2.33429C2.78425 2.18426 2.98773 2.09998 3.1999 2.09998H12.7999C13.0121 2.09998 13.2156 2.18426 13.3656 2.33429C13.5156 2.48432 13.5999 2.6878 13.5999 2.89998V5.29998C13.5999 5.51213 13.5155 5.71558 13.3655 5.86558L9.5999 9.63117V12.5C9.59986 12.7121 9.51554 12.9156 9.3655 13.0656L7.7655 14.6656C7.65362 14.7774 7.51109 14.8536 7.35593 14.8844C7.20077 14.9153 7.03994 14.8995 6.89378 14.8389C6.74762 14.7784 6.62269 14.6759 6.53478 14.5443C6.44687 14.4128 6.39994 14.2582 6.3999 14.1V9.63117L2.6343 5.86558C2.48426 5.71558 2.39995 5.51213 2.3999 5.29998V2.89998Z"
              fill="#6B7280"
            />
          </svg>
          <span className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-50">
            {translation.filter}
          </span>
        </button>
      </div>
      <PostForm />
      <Suspense fallback={<div>loading</div>}>
        <Await resolve={data.posts}>
          <Posts editor={editor} />
        </Await>
      </Suspense>
    </>
  );
}
