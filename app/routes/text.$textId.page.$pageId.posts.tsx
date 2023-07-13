import { Suspense, useEffect } from 'react';
import PostForm from '~/features/Post/PostForm';
import { Await, useOutletContext, useSearchParams } from '@remix-run/react';
import Posts from '~/features/Post/Posts';
import uselitteraTranlation from '~/locales/useLitteraTranslations';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openFilterState, selectedPostThread as selectedPostThreadState, selectedTextOnEditor, showLatest, showSidebar } from '~/states';
import { findPostByTextIdAndPage } from '~/model/post';
import { LoaderFunction, defer, redirect } from '@remix-run/node';
import { Editor } from '@tiptap/react';
import { useLiveLoader } from '~/lib';
import { Skeleton, Dropdown, DropdownItem } from '~/component/UI';
import { getPage, getPageId } from '~/model/page';
import { GrClose } from 'react-icons/gr';

export const loader: LoaderFunction = async ({ request, params }) => {
  const textId = params.textId as string;
  const order = params.pageId as string;
  const threadId = new URL(request.url).searchParams.get('thread') ?? '';
  const version= new URL(request.url).searchParams.get('version') ?? null;
  const posts = await findPostByTextIdAndPage(parseInt(textId), parseInt(order), version);
  return defer({ text: { id: textId }, posts, threadId });
};
export const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error?.message}</div>;
};

export default function PostContainer() {
  const data = useLiveLoader<typeof loader>();
  let [param, setParams] = useSearchParams();
  let [selectedPostThread, setSelectedThread] = useRecoilState(selectedPostThreadState);
  useEffect(() => {
    let selectedThread = data.threadId;
    if (selectedThread && selectedThread !== '') {
      setTimeout(() => {
        document.getElementById('p_' + selectedThread)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        document.getElementById(selectedThread)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 2000);
      setParams('', { preventScrollReset: true });

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
  const setOpenFilter = useSetRecoilState(openFilterState);
  const setOpenContent = useSetRecoilState(showSidebar);

  const translation = uselitteraTranlation();
  const handleClose = () => { 
    setOpenContent(false);
  }
  if (data.posts?.error) return <div className='p-3 mt-2 text-red-700'>Error:{data.posts.error}</div>
  return (
    <>
      <PostForm />

      <div className="sticky top-0 z-50  flex  w-full items-center justify-between gap-2 bg-white ">
        <div className="z-30 flex flex-1 items-center  justify-between  py-2">
          <div className="flex">
            <LatestFilter />
            <button
              id="filterButton"
              onClick={() => setOpenFilter((prev) => !prev)}
              className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2 filter"
            >
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <button onClick={handleClose} className="mr-2">
            <GrClose size={14} className="cursor-pointer text-gray-500" />
          </button>
        </div>
      </div>
      <hr />
      <Suspense
        fallback={
          <div className="mx-2">
            <Skeleton height={90} number={5} />
          </div>
        }
      >
        <Await resolve={data.posts}>{(data) => <Posts posts={data} />}</Await>
      </Suspense>
    </>
  );
}

const LatestFilter = () => {
  const [isLatestPost, setIsLatestPost] = useRecoilState(showLatest);

  return (
    <select className="font-bold gray-500 focus:border-transparent focus:outline-none active:text-green-300  focus:ring-0 focus:ring-gray-100 dark:border-gray-600  dark:bg-transparent dark:text-white dark:focus:ring-gray-700">
      <option onClick={() => setIsLatestPost(true)}>Latest</option>
      <option onClick={() => setIsLatestPost(false)}>Earliest</option>
    </select>
  );
};

