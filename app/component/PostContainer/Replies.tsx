import { useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Textarea, TextInput } from "flowbite-react";
import React from "react";
import Reply from "./Reply";

type RepliesProps = {
  postId: number;
  topicId: number;
  showReplies: boolean;
  openReply: boolean;
  closeReply: () => void;
  isCreator: boolean;
  type: "question" | "comment";
  replies: any;
};

function Replies({
  postId,
  topicId,
  showReplies,
  openReply,
  closeReply,
  isCreator,
  type,
  replies,
}: RepliesProps) {
  const postFetcher = useFetcher();
  const postListFetcher = useFetcher();
  const loaderData = useLoaderData();
  const inputRef = React.useRef<HTMLInputElement>();
  if (postFetcher.submission && openReply) {
    if (inputRef.current) inputRef.current.value = "";
  }
  React.useEffect(() => {
    if (postFetcher.submission) {
      closeReply();
    }
  }, [postFetcher.submission, loaderData.posts, topicId]);

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
  let postdata = React.useMemo(
    () =>
      replies.posts
        ?.slice(1)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .sort((a, b) => {
          if (a.isAproved === b.isAproved) {
            return 0;
          }
          return a.isAproved ? -1 : 1;
        }),
    [replies.posts]
  );
  const textareaRef = React.useRef(null);
  return (
    <>
      {openReply && (
        <div className="flex justify-between mb-2">
          <div style={{ borderLeft: "6px solid #e5e7eb", height: 180 }}></div>
          <postFetcher.Form
            action="/api/postReply"
            method="post"
            className="flex w-11/12 flex-col justify-center"
          >
            <input hidden defaultValue={topicId} name="topicId" />
            <Textarea
              name="postString"
              required={true}
              placeholder="Write your reply here ..."
              className="flex-1"
              style={{ maxHeight: 108 }}
              autoFocus
              ref={textareaRef}
            />
            <div className="flex justify-end gap-2 mt-2">
              <Button
                color=""
                size="xs"
                onClick={closeReply}
                className="bg-gray-300 text-black"
                type="reset"
              >
                cancel
              </Button>
              <Button
                color=""
                size="xs"
                className="bg-green-400 text-white"
                type="submit"
                disabled={false}
              >
                respond
              </Button>
            </div>
          </postFetcher.Form>
        </div>
      )}
      {showReplies &&
        postdata.map((reply: any, index: number) => {
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
