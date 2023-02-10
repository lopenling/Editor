import { useFetcher, useLoaderData } from "@remix-run/react";
import { Button, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { timeAgo } from "~/utility/getFormatedDate";

type ReplyProps = {
  postId: number;
  topicId: number;
  showReplies: boolean;
  openReply: boolean;
  closeReply: () => void;
  isCreator: boolean;
  type: "question" | "comment";
};

function Reply(
  {
    postId,
    topicId,
    showReplies,
    openReply,
    closeReply,
    isCreator,
    type,
  }: ReplyProps,
  ref
) {
  const postFetcher = useFetcher();
  const postListFetcher = useFetcher();
  const loaderData = useLoaderData();
  const inputRef = React.useRef<HTMLInputElement>();
  if (postFetcher.submission && openReply) {
    if (inputRef.current) inputRef.current.value = "";
  }
  React.useEffect(() => {
    postListFetcher.submit({}, { method: "get", action: `/api/${topicId}` });
  }, [postFetcher.submission, loaderData.posts]);
  if (postListFetcher.data) {
    ref.current.innerText = postListFetcher.data?.posts?.length - 1;
  }
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
      postListFetcher.data?.posts
        ?.slice(1)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .sort((a, b) => {
          if (a.isAproved === b.isAproved) {
            return 0;
          }
          return a.isAproved ? -1 : 1;
        }),
    [postListFetcher.data]
  );
  return (
    <>
      {openReply && (
        <div className="flex justify-between mb-2">
          <div style={{ borderLeft: "6px solid #e5e7eb", height: 180 }}></div>
          <postFetcher.Form
            action="/api/postReply"
            method="post"
            className="flex w-11/12 flex-col"
          >
            <input hidden defaultValue={topicId} name="topicId" />
            <Textarea
              name="postString"
              required={true}
              placeholder="Write your reply here ..."
              className="flex-1"
              style={{ maxHeight: 108 }}
              autoFocus
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
            <div className="flex" key={reply.id}>
              <EachReply
                reply={reply}
                isCreator={isCreator}
                postId={postId}
                replyList={postListFetcher.data?.replyList.find(
                  (l) => l.id == reply.id
                )}
                type={type}
              />
            </div>
          );
        })}
    </>
  );
}

type EachReplyPropType = {
  reply: any;
  isCreator: boolean;
  postId: number;
  replyList: any;
  type: "question" | "comment";
};

function EachReply({
  reply,
  isCreator,
  postId,
  replyList,
  type,
}: EachReplyPropType) {
  const replyLikeFetcher = useFetcher();
  const approvedFetcher = useFetcher();
  const data = useLoaderData();
  const likedByMe = data.user
    ? replyList?.likedBy?.some((d) => d.username == data.user.username)
    : false;
  const solved = replyList?.isAproved;
  const like_Count = replyList?.likedBy?.length || 0;
  const innerHtml = () => {
    let html = "";
    if (reply?.cooked) {
      let doc = new DOMParser().parseFromString(reply.cooked, "text/xml");
      let p = doc.getElementsByTagName("p")[0];
      let audio = p.querySelectorAll("audio");

      if (!audio.length) return { __html: reply.cooked };
      if (audio?.length > 0) {
        audio.forEach((l) => {
          let originalsrc = l
            .getElementsByTagName("source")[0]
            .getAttribute("src");
          let newUrl = "https://lopenling.org" + originalsrc;
          l.getElementsByTagName("source")[0].setAttribute("src", newUrl);
        });
      }
      html = p.outerHTML;
    }
    return { __html: html };
  };
  let avatar_img = ("http://lopenling.org" + reply.avatar_template).replace(
    "{size}",
    "30"
  );
  function handleAproved() {
    approvedFetcher.submit(
      {
        id: reply?.id,
      },
      {
        method: "post",
        action: "/api/approve-reply",
      }
    );
  }
  function handleLikeReply() {
    replyLikeFetcher.submit(
      {
        _action: "likeReply",
        post_id: postId,
        likedBy: data?.user?.id,
        id: reply?.id,
        create: replyList ? 1 : 0,
      },
      {
        method: "post",
        action: "api/like",
      }
    );
  }
  return (
    <div className="w-full flex-col border-l-4 py-2 pl-5">
      <div className="flex justify-between ">
        <div className="flex">
          <img
            className="mr-2 h-6 w-6 rounded-full"
            src={avatar_img}
            alt="reply-pic"
          />
          <p className=" text-base font-medium leading-tight text-gray-900">
            {reply?.username}
          </p>
        </div>
        <div className=" text-right text-sm  text-gray-500">
          {timeAgo(reply?.created_at)}
        </div>
      </div>
      <p
        className=" w-full py-3 text-base leading-normal text-gray-500"
        dangerouslySetInnerHTML={innerHtml()}
      ></p>
      <div className="flex justify-between">
        <button
          disabled={!!replyLikeFetcher.submission || !data.user}
          onClick={handleLikeReply}
          className="flex cursor-pointer items-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className=" mr-2 fill-gray-500"
          >
            <path d="M0 8.5C-2.93527e-09 8.30302 0.0387987 8.10796 0.114181 7.92597C0.189563 7.74399 0.300052 7.57863 0.43934 7.43934C0.578628 7.30005 0.743986 7.18956 0.925975 7.11418C1.10796 7.0388 1.30302 7 1.5 7C1.69698 7 1.89204 7.0388 2.07403 7.11418C2.25601 7.18956 2.42137 7.30005 2.56066 7.43934C2.69995 7.57863 2.81044 7.74399 2.88582 7.92597C2.9612 8.10796 3 8.30302 3 8.5V14.5C3 14.8978 2.84196 15.2794 2.56066 15.5607C2.27936 15.842 1.89782 16 1.5 16C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 5.92805e-09 14.8978 0 14.5V8.5ZM4 8.333V13.763C3.99983 14.1347 4.10322 14.499 4.29858 14.8152C4.49394 15.1314 4.77353 15.3869 5.106 15.553L5.156 15.578C5.71089 15.8553 6.32267 15.9998 6.943 16H12.359C12.8215 16.0002 13.2698 15.84 13.6276 15.5469C13.9853 15.2537 14.2303 14.8456 14.321 14.392L15.521 8.392C15.579 8.10187 15.5719 7.80249 15.5002 7.51544C15.4285 7.22839 15.294 6.96082 15.1065 6.73201C14.9189 6.50321 14.6829 6.31887 14.4155 6.19229C14.148 6.0657 13.8559 6.00003 13.56 6H10V2C10 1.46957 9.78929 0.960859 9.41421 0.585786C9.03914 0.210714 8.53043 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V1.667C7 2.53248 6.71929 3.37462 6.2 4.067L4.8 5.933C4.28071 6.62538 4 7.46752 4 8.333Z" />
          </svg>
          <div className=" disabled:text-slate-300 text-sm font-medium leading-tight text-gray-500">
            {replyLikeFetcher.submission
              ? likedByMe
                ? like_Count - 1
                : like_Count + 1
              : like_Count
              ? like_Count
              : 0}
          </div>
        </button>
        {like_Count > 0 && type === "question" && (
          <div className="cursor-pointer">
            {!solved ? (
              isCreator && (
                <button
                  onClick={handleAproved}
                  className=" cursor-pointer text-xs font-medium leading-none text-green-700"
                >
                  {approvedFetcher.state !== "idle" ? (
                    <>loading</>
                  ) : (
                    <>Mark as Solved</>
                  )}
                </button>
              )
            ) : (
              <Button
                disabled={!isCreator}
                onClick={handleAproved}
                color="success"
                size="xs"
              >
                {approvedFetcher.state !== "idle" ? <>loading</> : <>Solved</>}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.forwardRef(Reply);
