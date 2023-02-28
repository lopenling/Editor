import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import Reply from "./Reply";
import { Avatar, Modal, Spinner } from "flowbite-react";
import FilterPost from "./FilterPost";
import ModalStyle from "react-responsive-modal/styles.css";
import { useDetectClickOutside } from "react-detect-click-outside";
import { ViewportList } from "react-viewport-list";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useLittera } from "@assembless/react-littera";
import translations from "~/locales/translations";
type QuestionProps = {
  editor: Editor | null;
  openFilter: boolean;
  setOpenFilter: any;
};

export function links() {
  return [{ rel: "stylesheet", href: ModalStyle, as: "style" }];
}
function PostList(props: QuestionProps) {
  const [animationParent] = useAutoAnimate();
  const data = useLoaderData();
  const [filter, setFilter] = React.useState({
    type: "all",
    date: { startDate: null, endDate: null },
    user: [],
  });
  const [selectedPost, setSelectedPost] = React.useState(null);
  let posts = data.posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  if (filter) {
    if (filter.type && filter.type !== "all")
      posts = posts.filter((l) => {
        return l.type === filter.type;
      });
    if (filter.user?.length)
      posts = posts.filter((l) => {
        return filter.user?.includes(l.creatorUser.username);
      });
    if (filter.date?.startDate)
      posts = posts.filter((l) => {
        return (
          new Date(l.created_at).getTime() >
            new Date(filter.date.startDate).getTime() &&
          new Date(l.created_at).getTime() <
            new Date(filter.date.endDate).getTime()
        );
      });
  }
  function handleSelectPost({ start, end, id }) {
    props.editor
      ?.chain()
      .focus()
      .setTextSelection({ from: start, to: end })
      .run();
    setSelectedPost(id);
  }
  const clickOutside = React.useCallback(() => {
    setSelectedPost(null);
  }, []);
  const ref = useDetectClickOutside({
    onTriggered: clickOutside,
  });

  const onClose = () => props.setOpenFilter((prev) => !prev);
  const translation = useLittera(translations);

  return (
    <>
      {props.openFilter && (
        <Modal show={true} onClose={onClose} size="md">
          <Modal.Header>{translation.filter}</Modal.Header>
          <FilterPost filter={filter} setFilter={setFilter} close={onClose} />
        </Modal>
      )}

      <div
        className="scroll-container flex flex-col"
        ref={animationParent}
        style={{
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
          height: "80vh",
          paddingInline: 10,
        }}
      >
        {posts?.map((post, index) => (
          <div key={index} className={`item${index % 2 === 0 ? "" : " odd"}`}>
            <EachPost
              id={post.id}
              name={post.creatorUser.username}
              avatar={post.avatar}
              time={timeAgo(post.created_at)!}
              postContent={post.content}
              likedBy={post.likedBy}
              topic_id={post.topic_id}
              handleSelection={() => handleSelectPost(post)}
              selectedPost={selectedPost!}
              type={post.type}
            />
            <div className="w-full bg-gray-200" />
          </div>
        ))}
      </div>
    </>
  );
}

export default React.memo(PostList);

type EachPostType = {
  id: number;
  name: string;
  avatar: string;
  time: string;
  postContent: string;
  likedBy: number;
  topic_id: number;
  handleSelection: () => void;
  selectedPost: number;
  type: "question" | "comment";
};

function EachPost({
  id,
  name,
  avatar,
  time,
  postContent,
  likedBy,
  topic_id,
  handleSelection,
  selectedPost,
  type,
}: EachPostType) {
  const [openReply, setOpenReply] = React.useState(false);
  const [showReplies, setShowReplies] = React.useState(false);
  const reply_count_ref = React.useRef(null);
  const likeFetcher = useFetcher();
  const data = useLoaderData();
  const translation = useLittera(translations);
  const likedByMe = data.user
    ? likedBy.some((l) => l.username === data.user.username)
    : false;
  function handleLikeClick() {
    likeFetcher.submit(
      {
        id,
        _action: "likePost",
        userId: data.user.id,
      },
      { method: "post", action: "api/like" }
    );
  }
  let avatar_img = ("http://lopenling.org" + avatar).replace("{size}", "30");

  return (
    <>
      <div
        style={{
          backgroundColor: selectedPost === id ? "#FDFDEA" : "transparent",
        }}
        className="md:px-3"
        onClick={handleSelection}
      >
        <div className="mt-3 inline-flex w-full items-start justify-start">
          <div className="flex items-center justify-start space-x-3">
            <Avatar img={avatar_img} rounded={true} size="xs" />
            <p className="text-base font-medium leading-tight text-gray-900">
              {name}
            </p>
          </div>
          <p className="flex-1 text-right text-sm leading-tight text-gray-500">
            {time}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start space-y-4">
          <p className="text-base leading-normal text-gray-500">
            {postContent}
          </p>
          <div className="flex w-full flex-1 items-center justify-between pb-3">
            <div className="flex h-full w-64 items-center justify-start space-x-4">
              <button
                disabled={likeFetcher.state !== "idle" || !data.user}
                className="flex cursor-pointer items-center justify-start space-x-1.5"
                onClick={handleLikeClick}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z"
                    style={{ fill: likedByMe ? "rgb(49,196,141)" : "gray" }}
                  />
                </svg>

                <div className="  text-sm font-medium leading-tight text-gray-500">
                  {likeFetcher.submission
                    ? likedByMe
                      ? likedBy.length - 1
                      : likedBy.length + 1
                    : likedBy.length}
                </div>
              </button>
              <div className="flex items-center justify-start space-x-1.5">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  className="fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2008 9.19995V1.99995C15.2008 1.52256 15.0111 1.06472 14.6736 0.727159C14.336 0.389593 13.8782 0.199951 13.4008 0.199951H2.60078C2.12339 0.199951 1.66555 0.389593 1.32799 0.727159C0.990424 1.06472 0.800781 1.52256 0.800781 1.99995V9.19995C0.800781 9.67734 0.990424 10.1352 1.32799 10.4727C1.66555 10.8103 2.12339 11 2.60078 11H5.30078L8.00078 13.7L10.7008 11H13.4008C13.8782 11 14.336 10.8103 14.6736 10.4727C15.0111 10.1352 15.2008 9.67734 15.2008 9.19995ZM3.50078 3.79995C3.50078 3.56126 3.5956 3.33234 3.76439 3.16356C3.93317 2.99477 4.16209 2.89995 4.40078 2.89995H11.6008C11.8395 2.89995 12.0684 2.99477 12.2372 3.16356C12.406 3.33234 12.5008 3.56126 12.5008 3.79995C12.5008 4.03865 12.406 4.26756 12.2372 4.43635C12.0684 4.60513 11.8395 4.69995 11.6008 4.69995H4.40078C4.16209 4.69995 3.93317 4.60513 3.76439 4.43635C3.5956 4.26756 3.50078 4.03865 3.50078 3.79995ZM4.40078 6.49995C4.16209 6.49995 3.93317 6.59477 3.76439 6.76356C3.5956 6.93234 3.50078 7.16126 3.50078 7.39995C3.50078 7.63865 3.5956 7.86756 3.76439 8.03635C3.93317 8.20513 4.16209 8.29995 4.40078 8.29995H7.10078C7.33948 8.29995 7.56839 8.20513 7.73718 8.03635C7.90596 7.86756 8.00078 7.63865 8.00078 7.39995C8.00078 7.16126 7.90596 6.93234 7.73718 6.76356C7.56839 6.59477 7.33948 6.49995 7.10078 6.49995H4.40078Z"
                  />
                </svg>

                <button
                  onClick={() => setShowReplies((prev) => !prev)}
                  className="text-sm font-medium leading-tight text-gray-500"
                >
                  <span ref={reply_count_ref} className="mr-1">
                    0
                  </span>
                  {showReplies ? "Hide reply" : translation.reply}
                </button>
              </div>
            </div>
            {data.user && (
              <div className="flex items-start justify-start space-x-1.5">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  className="fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z" />
                </svg>

                <button
                  onClick={() => setOpenReply((prev) => !prev)}
                  className="text-sm font-medium leading-tight text-gray-500"
                >
                  {openReply ? "Close" : translation.reply}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Reply
        postId={id}
        topicId={topic_id}
        showReplies={showReplies}
        openReply={openReply}
        closeReply={() => setOpenReply(false)}
        ref={reply_count_ref}
        isCreator={data?.user?.username === name}
        type={type}
      />
      <hr />
    </>
  );
}
