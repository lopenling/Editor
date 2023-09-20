import { useFetcher } from '@remix-run/react';
import { useState, useMemo, useEffect } from 'react';
import Reply from './Reply.client';

type replyType = {
  is_approved: boolean;
};

type RepliesProps = {
  postId: string;
  topicId: number;
  isCreator: boolean;
  type: 'question' | 'comment';
  replyCount: number;
  setReplyCount: any;
};
function Replies({ postId, topicId, isCreator, type, replyCount, setReplyCount }: RepliesProps) {
  const [replies, setReplies] = useState<replyType[]>([]);
  const postListFetcher = useFetcher();
  useEffect(() => {
    postListFetcher.load(`/api/reply/${topicId}`);
  }, []);
  let data = postListFetcher.data;
  useEffect(() => {
    if (data) {
      data.posts.shift();
      let replies = data.posts;
      setReplies(replies);
      setReplyCount(replies.length);
    }
  }, [data]);

  if (!data) return null;
  return (
    <>
      {replies.length < 1 && <div className="text-gray-500 text-sm mb-2 ">no reply yet</div>}
      {replies.map((reply: any, index: number) => {
        return (
          <Reply
            key={reply.id}
            reply={reply}
            isCreator={isCreator}
            postId={postId}
            type={type}
            showDivider={replies.length <= index + 1}
          />
        );
      })}
    </>
  );
}

export default Replies;
