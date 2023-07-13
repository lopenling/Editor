import { Suspense, useEffect } from 'react';
import PostForm from '~/features/Post/PostForm';
import { Await,  useSearchParams } from '@remix-run/react';
import Posts from '~/features/Post/Posts';
import uselitteraTranlation from '~/locales/useLitteraTranslations';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openFilterState, selectedPostThread as selectedPostThreadState, showLatest, showSidebar } from '~/states';
import { findPostByTextIdAndPage } from '~/model/post';
import { LoaderFunction, defer } from '@remix-run/node';
import { useLiveLoader } from '~/lib';
import { Skeleton } from '~/component/UI';
import { GrClose } from 'react-icons/gr';
import { FaFilter } from 'react-icons/fa';

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
  let [, setParams] = useSearchParams();
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
              <FaFilter className='text-gray-500'/>
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
            <Skeleton height={90} number={5}/>
          </div>
        }
      >
        <Await resolve={data.posts}>{(data) => <Posts posts={data} />}</Await>
      </Suspense>
    </>
  );
}

const LatestFilter = () => {
  const [isLatest, setIsLatestPost] = useRecoilState(showLatest);
  const options = ['Latest', 'Earliest']
  const toggleLatest = () => { 
    setIsLatestPost((prev) => !prev);
  }
  return <div className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-50 p-3 cursor-pointer" onClick={toggleLatest}>
    {isLatest?options[0]:options[1]}
  </div>;
};

