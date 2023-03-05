import { useFetcher, useLoaderData, useLocation } from "@remix-run/react";
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
};

function Replies({
  postId,
  topicId,
  openReply,
  closeReply,
  isCreator,
  type,
  replyCount,
}: RepliesProps) {
  const [replies, setReplies] = useState([]);
  const postFetcher = useFetcher();
  const postListFetcher = useFetcher();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    let url = "http://localhost:8787" + "/api/replies/" + topicId;
    postListFetcher.submit(
      {},
      { method: "get", action: `/api/replies/${topicId}` }
    );
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReplies(data.posts);
      });
    return () => console.log("hide");
  }, [replyCount]);

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
