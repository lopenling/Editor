import { useFetcher, useLoaderData } from '@remix-run/react/dist/components';
import { timeAgo } from '~/lib';
import { useState } from 'react';
import { AudioPlayer } from '../Media';
import { ForumLink } from '~/constants';
import { AiFillLike } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';
type ReplyPropType = {
  reply: any;
  isCreator: boolean;
  postId: string;
  type: 'question' | 'comment';
  showDivider: boolean;
};

function Reply({ reply, isCreator, postId, type, showDivider }: ReplyPropType) {
  const replyLikeFetcher = useFetcher();
  const approvedFetcher = useFetcher();
  const [effect, setEffect] = useState(false);
  const { user } = useLoaderData();
  let likedByMe = user ? reply?.likedBy?.some((d) => d.username == user.username) : false;
  const solved = reply?.is_approved;
  let like_Count = reply?.likedBy?.length || 0;
  let likeInFetcher = replyLikeFetcher?.formData?.get('like');

  if (likeInFetcher === 'true') {
    likedByMe = true;
    like_Count++;
  }
  if (likeInFetcher === 'false') {
    likedByMe = false;
    like_Count--;
  }
  const extractAudioInfo = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const audioElement = doc.querySelector('audio');
    const sourceElement = audioElement?.querySelector('source');
    let sourceURL = sourceElement?.getAttribute('src');
    if (!sourceURL) return { text: html };
    let textElement = doc.querySelectorAll('p');
    let text = textElement[1].textContent;

    if (sourceURL.startsWith('/')) {
      sourceURL = ForumLink + sourceURL;
    }
    return {
      source: sourceURL,
      text: text,
    };
  };

  let avatar_img = (ForumLink + reply?.avatar_template).replace('{size}', '30');

  function handleAproved() {
    approvedFetcher.submit(
      {
        action: 'approve',
        id: reply?.id,
        isSolved: reply?.is_approved ?? false,
      },
      {
        method: 'PATCH',
        action: '/api/reply',
      },
    );
  }
  function handleLikeReply() {
    setEffect(true);
    replyLikeFetcher.submit(
      {
        action: 'like',
        post_id: postId,
        id: reply?.id,
        like: !likedByMe ? 'true' : 'false',
      },
      {
        method: 'PATCH',
        action: '/api/reply',
      },
    );
  }
  const deleteFetcher = useFetcher();
  async function deletePost() {
    let decision = confirm('do you want to delete the post');
    if (decision) {
      deleteFetcher.submit(
        {
          postId: reply.id,
        },
        {
          action: '/api/reply',
          method: 'DELETE',
        },
      );
    } else {
      console.log('cancel');
    }
  }
  return (
    <div className="w-full flex-col border-l-4 py-2 pl-5">
      <div className="flex justify-between ">
        <div className="flex">
          <img className="mr-2 h-6 w-6 rounded-full" src={avatar_img} alt="reply-pic" />
          <p className=" text-base font-medium leading-tight text-gray-900 dark:text-gray-300">{reply?.username}</p>
        </div>
        <div className=" text-right text-sm  text-gray-500 dark:text-gray-200">{timeAgo(reply?.created_at)}</div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: extractAudioInfo(reply.cooked).text }}
        className=" max-w-full py-3 text-base leading-normal text-gray-500 dark:text-gray-100"
      ></div>
      <AudioPlayer src={extractAudioInfo(reply.cooked)?.source} />
      <div className="mb-2 mt-3 flex justify-between">
        <div className="flex gap-2">
          <button
            disabled={!!replyLikeFetcher.formData || !user}
            onClick={handleLikeReply}
            className={`${effect && 'animate-wiggle'} flex cursor-pointer items-center`}
            onAnimationEnd={() => setEffect(false)}
          >
            <AiFillLike
              style={{
                fill: likedByMe ? 'rgb(49,196,141)' : 'gray',
              }}
            />
            <div className=" text-sm font-medium leading-tight text-gray-500 disabled:text-slate-300 dark:text-gray-200">
              {like_Count > 0 && like_Count}
            </div>
          </button>
          {user && user.username === reply?.username && (
            <div
              onClick={deletePost}
              title="delete"
              className="flex items-center justify-start gap-2 fill-gray-400 text-gray-400 transition-all hover:fill-red-400 hover:text-blue-400 dark:text-gray-200 hover:dark:text-blue-400"
            >
              <MdDelete />
            </div>
          )}
        </div>

        {type === 'question' && (
          <div className="cursor-pointer">
            {!solved ? (
              isCreator &&
              like_Count > 0 && (
                <button
                  disabled={replyLikeFetcher.state !== 'idle'}
                  onClick={handleAproved}
                  style={{ borderRadius: 7 }}
                  className="flex cursor-pointer gap-2  border-2 border-green-700 p-2 text-xs font-medium leading-none text-green-700 dark:border-green-400 dark:text-green-400"
                >
                  {approvedFetcher.state !== 'idle' ? (
                    <>loading</>
                  ) : (
                    <>
                      <SolvedLogo isSolved={solved} />
                      Mark as Solved
                    </>
                  )}
                </button>
              )
            ) : (
              <button
                disabled={!isCreator}
                onClick={handleAproved}
                className="flex rounded-lg bg-green-500 px-3 py-2 text-center text-xs font-medium text-white focus:outline-none focus:ring-4 focus:ring-green-300 hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:hover:bg-green-700"
              >
                {approvedFetcher.state !== 'idle' ? (
                  <>loading</>
                ) : (
                  <>
                    <SolvedLogo isSolved={solved} />
                    <div className="ml-2">Solved</div>
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
      {showDivider && <hr />}
    </div>
  );
}

export function SolvedLogo({ isSolved }: { isSolved: boolean }) {
  return <TiTickOutline className={isSolved ? 'fill-white' : `fill-green-700 dark:fill-green-300`} />;
}
export default Reply;
