import { useFetcher } from "@remix-run/react";
import { Spinner } from "flowbite-react";
import { useState, useMemo, useEffect } from "react";
import Reply from "./Reply";

type RepliesProps = {
  postId: number;
  topicId: number;
  openReply: boolean;
  closeReply: () => void;
  isCreator: boolean;
  type: "question" | "comment";
  replyCount: number;
  setReplyCount: any;
};
function Replies({
  postId,
  topicId,
  isCreator,
  type,
  replyCount,
  setReplyCount,
}: RepliesProps) {
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(false);
  const postFetcher = useFetcher();
  const postListFetcher = useFetcher();
  useEffect(() => {
    setLoading(true);
    postListFetcher.submit(
      {},
      { method: "get", action: `/api/reply/${topicId}` }
    );
  }, []);
  useEffect(() => {
    let data = postListFetcher.data;
    if (data) {
      setReplies(data.posts);
      setReplyCount(data.posts.length);
      setLoading(false);
    }
  }, [replyCount, postListFetcher.data]);

  const handleDelete = (id, TopicId) => {
    postFetcher.submit(
      {
        postId: id,
        topicId: TopicId,
      },
      {
        method: "delete",
        action: "/api/postReply",
      }
    );
  };
  let postdata = useMemo(
    () =>
      replies
        ?.slice(1)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .sort((a, b) => {
          if (a.isAproved === b.isAproved) {
            return 0;
          }
          return a.isAproved ? -1 : 1;
        }),
    [replies]
  );
  if (loading)
    return (
      <div className="flex my-2 justify-center items-center">
        <Spinner />
      </div>
    );
  if (!postListFetcher.data) return null;
  return (
    <>
      {postdata.map((reply: any, index: number) => {
        return (
          <Reply
            key={reply.id}
            reply={reply}
            isCreator={isCreator}
            postId={postId}
            replyList={postListFetcher.data?.replyList.find(
              (l) => l.id == reply.id
            )}
            type={type}
          />
        );
      })}
    </>
  );
}

export default Replies;
