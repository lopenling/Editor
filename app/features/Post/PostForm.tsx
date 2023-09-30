import { useLoaderData, useOutletContext } from '@remix-run/react';
import Post from './Post';
import { selectedTextOnEditor, showSidebar } from '~/states';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MustLoggedIn as LogInMessage } from '~/component/UI';
import { FormWithAudio } from './component/FormWithAudio';
import { GrClose } from 'react-icons/gr';

const PostForm = ({ createPost }: any) => {
  const { user } = useLoaderData();
  const selection = useRecoilValue(selectedTextOnEditor);
  let isPosting = createPost.formData && createPost.formData.get('body') !== '';
  const [, setShowPostSide] = useRecoilState(showSidebar);
  if (selection.type === '') return null;
  if (isPosting) {
    return (
      <Post
        post={{
          audioUrl: '',
          creatorUser: user,
          created_at: new Date(Date.now()),
          likedBy: [],
          replyCount: 0,
          id: 'random',
          isSolved: false,
          content: createPost?.formData?.get('body') as string,
          topic_id: 0,
          type: createPost?.formData?.get('type') as 'question' | 'comment',
          threadId: '',
        }}
        isOptimistic={true}
      />
    );
  }
  return (
    <>
      <div className="flex justify-between p-6">
        <div
          style={{ lineHeight: '24px', color: 'rbg(41,41,41)', fontSize: 20, fontWeight: '500' }}
          className="mb-3 font-serif capitalize leading-tight text-gray-900 dark:text-gray-300"
        >
          {selection.type === 'question' ? 'ask question' : 'new comment'}
        </div>
        <button onClick={() => setShowPostSide(false)} className="mr-2">
          <GrClose size={14} className="cursor-pointer text-gray-500" />
        </button>
      </div>
      <section className=" m-3 rounded py-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 8px 0px' }}>
        {user ? (
          <>
            <div className="flex items-start justify-between">
              <div className="mb-1 flex items-center gap-2 px-4">
                <img className="h-8 w-8 rounded-full" src={user?.avatarUrl} alt="avatar"></img>
                <div className="font-serif text-sm font-medium leading-tight text-gray-900 dark:text-gray-200">
                  {user?.name}
                </div>
              </div>
            </div>
            <div aria-label="Default tabs" className="px-4 pt-4" style={{ lineHeight: '14px' }}>
              <FormWithAudio fetcher={createPost} type="post" post={null} />
            </div>
          </>
        ) : (
          <LogInMessage />
        )}
      </section>
    </>
  );
};

export default PostForm;
