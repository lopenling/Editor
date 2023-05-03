import { useState, Suspense, useEffect } from "react";
import PostForm from "~/component/Post/PostForm";
import Skeleton from "~/component/UI/Skeleton";
import {
  Await,
  useLoaderData,
  useOutletContext,
  useSearchParams,
} from "@remix-run/react";
import Posts from "~/component/Post/Posts";
import { Dropdown } from "flowbite-react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  openFilterState,
  selectedPostThread as selectedPostThreadState,
  showLatest,
} from "~/states";
import { findPostByTextId } from "~/model/post";
import { LoaderFunction, defer, json, redirect } from "@remix-run/node";
import { fetchCategoryData } from "~/services/discourseApi";
import { Editor } from "@tiptap/react";

export const loader: LoaderFunction = async ({ request, params }) => {
  const textId = params.id && parseInt(params.id);
  const threadId = new URL(request.url).searchParams.get("thread") ?? "";
  if (textId === "" || !textId) return redirect("/");

  const CategoryData = await fetchCategoryData();
  const topicList = CategoryData.topic_list.topics;
  const posts = findPostByTextId(textId, topicList);
  return defer({ text: { id: textId }, posts, threadId });
};
export const ErrorBoundary = ({ error }) => {
  return <div>{error.message}</div>;
};

export default function PostContainer() {
  let [params, setParams] = useSearchParams();
  let [selectedPostThread, setSelectedThread] = useRecoilState(
    selectedPostThreadState
  );
  useEffect(() => {
    let selectedThread = data.threadId;
    if (selectedThread && selectedThread !== "") {
      setTimeout(() => {
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
  const data = useLoaderData<typeof loader>();

  const { editor }: { editor: Editor } = useOutletContext();

  return (
    <div>
      <div className="hidden w-full items-center justify-end md:inline-flex gap-2 mb-4 ">
        {/* sort button */}
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
        {/* filter button */}
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
      <div
        className="filter fixed bottom-2 right-3 z-40 cursor-pointer md:hidden"
        onClick={() => setOpenFilter((prev) => !prev)}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z"
            fill="#9CA3AF"
            stroke="#9CA3AF"
          />
        </svg>
      </div>
      <PostForm />

      {/* used differ at loader for post list to fetch posts as a promise */}
      <Suspense fallback={<Skeleton number={4} height={80} />}>
        <Await resolve={data.posts}>
          {(posts) => {
            return <Posts posts={posts} editor={editor} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
