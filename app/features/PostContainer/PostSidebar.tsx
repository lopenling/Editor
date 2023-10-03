import { useEffect } from 'react';
import PostForm from '~/features/Post/PostForm';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import Posts from '~/features/Post/Posts';
import uselitteraTranlation from '~/locales/useLitteraTranslations';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { openFilterState, selectedPostThread as selectedPostThreadState, showLatest, showSidebar } from '~/states';
import { FaFilter } from 'react-icons/fa';

export default function PostSidebar({ createPost, editor }: { createPost: any; editor: any }) {
  const data = useLoaderData();
  let [params, setParams] = useSearchParams();
  let selectedId = params.get('thread') as string;
  useEffect(() => {
    if (selectedId && selectedId !== '') {
      setTimeout(() => {
        document.getElementById('p_' + selectedId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        document.getElementById(selectedId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 2000);
    }
  }, []);
  const setOpenFilter = useSetRecoilState(openFilterState);

  const translation = uselitteraTranlation();

  if (data.posts?.error) return <div className="mt-2 p-3 text-red-700">Error:{data.posts.error}</div>;
  return (
    <div className="flex flex-col w-full flex-1">
      <PostForm createPost={createPost} editor={editor} />

      <div className="sticky top-0 z-50  flex  w-full items-center justify-between gap-2 bg-white dark:bg-gray-700 ">
        <div className="z-30 flex flex-1 items-center  justify-between  py-2">
          <div className="flex">
            <LatestFilter />
            <button
              id="filterButton"
              onClick={() => setOpenFilter((prev) => !prev)}
              className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2 filter"
            >
              <FaFilter className="text-gray-500" />
              <span className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-50">
                {translation.filter}
              </span>
            </button>
          </div>
        </div>
      </div>
      <hr />

      <Posts posts={data.posts} />
    </div>
  );
}

const LatestFilter = () => {
  const [isLatest, setIsLatestPost] = useRecoilState(showLatest);
  const options = ['Latest', 'Earliest'];
  const toggleLatest = () => {
    setIsLatestPost((prev) => !prev);
  };
  return (
    <div
      className="cursor-pointer p-3 text-sm font-medium leading-tight text-gray-500 dark:text-gray-50"
      onClick={toggleLatest}
    >
      {isLatest ? options[0] : options[1]}
    </div>
  );
};
