import { useState, useCallback } from "react";
import { useFetcher, useOutletContext } from "@remix-run/react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import Replies from "./Replies";
import ReplyForm from "./ReplyForm";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserState, selectedPostThread } from "~/states";
import { Editor } from "@tiptap/react";
import AudioPlayer from "../Media/AudioPlayer";
import useFetcherWithPromise from "~/lib/useFetcherPromise";
import { removeMark } from "~/tiptap/markAction";
import { PostType, UserType } from "~/model/type";
import copyToClipboard from "~/lib/DOMfunction";
type PostPropType = {
  id: string;
  creatorUser: UserType;
  time: string;
  postContent: string;
  likedBy: UserType[];
  topicId: number;
  type: "question" | "comment";
  replyCount: number;
  isSolved: boolean;
  isOptimistic: boolean;
  threadId: string;
  audioUrl: string;
};

function Post({
  id,
  creatorUser,
  time,
  postContent,
  likedBy,
  topicId,
  type,
  replyCount,
  isSolved,
  isOptimistic,
  threadId,
  audioUrl,
}: PostPropType) {
  const [openReply, setOpenReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [effect, setEffect] = useState(false);
  const [ReplyCount, setReplyCount] = useState(replyCount);
  const likeFetcher = useFetcher();
  const deleteFetcher = useFetcherWithPromise();
  const { editor }: { editor: Editor } = useOutletContext();
  const translation = uselitteraTranlation();
  const user = useRecoilValue(UserState);
  const [selectedThreadId, setSelectedThreadId] =
    useRecoilState(selectedPostThread);
  const isSelected = selectedThreadId.id === threadId;
  let likedByMe = user
    ? likedBy.some((l) => l && l.username === user.username)
    : false;
  let likeInFetcher = likeFetcher?.formData?.get("like");
  const handleSelectPost = useCallback(
    (id: string) => {
      setSelectedThreadId({
        id,
      });
    },
    [threadId]
  );
  let likeCount = likeFetcher.data ? likeFetcher.data?.length : likedBy.length;
  if (likeInFetcher === "true") {
    likedByMe = true;
    if (likeFetcher.state === "submitting") likeCount++;
  }
  if (likeInFetcher === "false") {
    likedByMe = false;
    if (likeFetcher.state === "submitting") likeCount--;
  }
  function handleLikeClick() {
    setEffect(true);
    if (user) {
      likeFetcher.submit(
        {
          id,
          userId: user.id,
          like: !likedByMe ? "true" : "false",
        },
        { method: "post", action: "api/post/like" }
      );
    }
  }
  interface DeleteResponse {
    deleted: PostType;
  }
  async function deletePost(): Promise<void> {
    let decision = confirm("do you want to delete the post");
    if (decision) {
      let res: DeleteResponse | undefined = await deleteFetcher.submit(
        {
          id,
        },
        {
          action: "api/post",
          method: "delete",
        }
      );
      if (typeof res !== "undefined" && "deleted" in res) {
        const { deleted } = res as DeleteResponse;
        if (deleted.threadId) {
          removeMark(editor, deleted.threadId);
        }
      }
    } else {
      console.log("cancelled");
    }
  }
  function handleShare() {
    let url = window.location.href + "?thread=" + threadId;
    copyToClipboard(url);
    alert("url coppied on clipboard");
  }
  let content = postContent.replace(/\n/g, "<br>");
  return (
    <div
      className={`${deleteFetcher.formData && "hidden"} `}
      id={`p_${threadId}`}
    >
      <div
        className={`px-2 py-3 ml-2 rounded-md shadow-md transition-all ${
          isSelected
            ? "bg-yellow-50 dark:bg-gray-500 "
            : "bg-gray-50 dark:bg-gray-700"
        } `}
        onClick={() => handleSelectPost(threadId)}
      >
        <div className="inline-flex w-full items-center justify-start">
          <div className="flex items-center justify-start space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={creatorUser.avatarUrl}
              alt="Extra small avatar"
            ></img>
            <a
              href={`https://lopenling.org/t/${topicId}`}
              target="_blank"
              className="text-base font-medium leading-tight text-gray-900 dark:text-gray-200"
            >
              {creatorUser.name}
            </a>
            {isSolved && (
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.707 0.293031C13.8945 0.480558 13.9998 0.734866 13.9998 1.00003C13.9998 1.26519 13.8945 1.5195 13.707 1.70703L5.70704 9.70703C5.51951 9.8945 5.26521 9.99982 5.00004 9.99982C4.73488 9.99982 4.48057 9.8945 4.29304 9.70703L0.293041 5.70703C0.110883 5.51843 0.0100885 5.26583 0.0123669 5.00363C0.0146453 4.74143 0.119814 4.49062 0.305222 4.30521C0.490631 4.1198 0.741443 4.01464 1.00364 4.01236C1.26584 4.01008 1.51844 4.11087 1.70704 4.29303L5.00004 7.58603L12.293 0.293031C12.4806 0.10556 12.7349 0.000244141 13 0.000244141C13.2652 0.000244141 13.5195 0.10556 13.707 0.293031Z"
                  fill="#046C4E"
                />
              </svg>
            )}
          </div>
          <p className="flex-1 text-right text-sm leading-tight text-gray-500 dark:text-gray-200">
            {time}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start space-y-4">
          <div className=" w-full text-base leading-normal text-gray-500 dark:text-gray-100">
            <div className="w-full flex items-center justify-end font-light text-xs italic uppercase">
              {type}
            </div>
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          {audioUrl?.length > 0 && <AudioPlayer src={audioUrl} />}
          {isOptimistic ? (
            <div className="text-sm text-gray-300 font-sans">posting ...</div>
          ) : (
            <div className="flex w-full flex-1 items-center justify-between ">
              <div className="flex h-full w-64 items-center justify-start gap-4">
                <button
                  disabled={!user || !!likeFetcher.formData}
                  className={`${
                    effect && "animate-wiggle"
                  } flex cursor-pointer items-center justify-start gap-1 `}
                  onClick={handleLikeClick}
                  onAnimationEnd={() => setEffect(false)}
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
                      style={{
                        fill: likedByMe ? "rgb(49,196,141)" : "gray",
                      }}
                    />
                  </svg>

                  <div className="  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100">
                    {likeCount > 0 && likeCount}
                  </div>
                </button>

                <div
                  className={`${
                    ReplyCount < 1 && "hidden"
                  } flex items-center justify-start`}
                  onClick={() => setShowReplies((prev) => !prev)}
                >
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
                    className={`lowercase text-sm font-medium leading-tight text-gray-500 dark:text-gray-100`}
                  >
                    <span className="ml-2">
                      {showReplies ? "hide" : ReplyCount}
                    </span>
                  </button>
                </div>

                <div
                  onClick={handleShare}
                  title="share"
                  className="fill-gray-400 text-gray-400 dark:text-gray-200 transition-all flex gap-2 items-center justify-start hover:text-blue-400 hover:dark:text-blue-400 hover:fill-blue-400"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0001 6C13.6092 6.00002 14.2039 5.8146 14.7051 5.4684C15.2064 5.1222 15.5903 4.63162 15.8059 4.06191C16.0215 3.49219 16.0586 2.87034 15.9122 2.27903C15.7658 1.68773 15.4429 1.15501 14.9864 0.7517C14.5299 0.348392 13.9614 0.0936137 13.3565 0.0212462C12.7517 -0.0511213 12.1392 0.062351 11.6004 0.346574C11.0616 0.630796 10.6221 1.0723 10.3404 1.61237C10.0586 2.15245 9.94792 2.7655 10.0231 3.37L5.08305 5.84C4.65928 5.43135 4.12465 5.15642 3.54574 5.04944C2.96684 4.94247 2.36926 5.00819 1.82744 5.2384C1.28561 5.46862 0.823499 5.85316 0.498659 6.34413C0.173819 6.8351 0.000610352 7.4108 0.000610352 7.9995C0.000610352 8.5882 0.173819 9.1639 0.498659 9.65487C0.823499 10.1458 1.28561 10.5304 1.82744 10.7606C2.36926 10.9908 2.96684 11.0565 3.54574 10.9496C4.12465 10.8426 4.65928 10.5676 5.08305 10.159L10.0231 12.629C9.93555 13.3312 10.0991 14.0418 10.4848 14.6351C10.8706 15.2284 11.4536 15.6663 12.1309 15.8713C12.8082 16.0763 13.5362 16.0353 14.1862 15.7555C14.8362 15.4757 15.3664 14.9751 15.683 14.3422C15.9996 13.7093 16.0823 12.9849 15.9165 12.2969C15.7506 11.6089 15.3469 11.0017 14.7767 10.5826C14.2065 10.1635 13.5065 9.9595 12.8004 10.0066C12.0943 10.0537 11.4276 10.3489 10.9181 10.84L5.97805 8.37C6.00832 8.12426 6.00832 7.87574 5.97805 7.63L10.9181 5.16C11.4561 5.68 12.1901 6 13.0001 6Z"
                      className="fill-inherit"
                    />
                  </svg>
                </div>
                {user && user.username === creatorUser.username && (
                  <div
                    onClick={deletePost}
                    title="delete"
                    className="fill-gray-400 text-gray-400 dark:text-gray-200 transition-all flex gap-2 items-center justify-start hover:text-blue-400 hover:dark:text-blue-400 hover:fill-red-400"
                  >
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 0C5.81434 9.91486e-05 5.63237 0.0518831 5.47447 0.149552C5.31658 0.247222 5.18899 0.386919 5.106 0.553L4.382 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4V14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V4C13.2652 4 13.5196 3.89464 13.7071 3.70711C13.8946 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H9.618L8.894 0.553C8.81101 0.386919 8.68342 0.247222 8.52553 0.149552C8.36763 0.0518831 8.18566 9.91486e-05 8 0H6ZM4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C5.26522 5 5.51957 5.10536 5.70711 5.29289C5.89464 5.48043 6 5.73478 6 6V12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12V6ZM9 5C8.73478 5 8.48043 5.10536 8.29289 5.29289C8.10536 5.48043 8 5.73478 8 6V12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12V6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5Z"
                        fill="inherit"
                      />
                    </svg>
                  </div>
                )}
              </div>
              {user && (
                <div
                  onClick={() => setOpenReply((prev) => !prev)}
                  className="flex items-start justify-start space-x-1.5"
                >
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    className="fill-gray-500 dark:fill-gray-100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.13858 7.95584L5.67917 8.15319C5.65821 8.10438 5.62774 8.06025 5.58953 8.02335L5.58328 8.01731L5.58334 8.01726L3.51964 5.95356L2.66608 5.1H3.87319H8.90059C10.2267 5.1 11.4984 5.62679 12.4361 6.56447C13.3738 7.50215 13.9006 8.77392 13.9006 10.1V11.9C13.9006 12.0061 13.9427 12.1078 14.0177 12.1828C14.0928 12.2579 14.1945 12.3 14.3006 12.3C14.4067 12.3 14.5084 12.2579 14.5834 12.1828C14.6584 12.1078 14.7006 12.0061 14.7006 11.9V10.1C14.7006 8.56175 14.0895 7.08649 13.0018 5.99878C11.9141 4.91107 10.4388 4.3 8.90059 4.3H3.87319H2.66608L3.51964 3.44645L5.58328 1.3828C5.5833 1.38279 5.58332 1.38277 5.58334 1.38275C5.65829 1.30774 5.7004 1.20604 5.7004 1.1C5.7004 0.993988 5.65831 0.892311 5.58339 0.817309C5.58335 0.817274 5.58332 0.817239 5.58328 0.817203M6.13858 7.95584L4.66429 0.463703C4.83306 0.294979 5.06194 0.200195 5.30059 0.200195C5.53924 0.200195 5.76811 0.294979 5.93689 0.463703L5.58328 0.817203M6.13858 7.95584L5.67917 8.15319C5.70014 8.20199 5.71117 8.25448 5.71163 8.30759C5.7121 8.3607 5.70197 8.41337 5.68186 8.46253C5.66175 8.51169 5.63205 8.55635 5.59449 8.59391C5.55693 8.63146 5.51227 8.66116 5.46312 8.68128C5.41396 8.70139 5.36128 8.71151 5.30817 8.71105C5.25506 8.71059 5.20257 8.69955 5.15377 8.67859C5.10497 8.65763 5.06083 8.62715 5.02393 8.58895L5.02399 8.58889L5.01784 8.58275L1.4179 4.9828C1.34291 4.90779 1.30078 4.80607 1.30078 4.7C1.30078 4.59396 1.34289 4.49226 1.41784 4.41726C1.41786 4.41724 1.41788 4.41722 1.4179 4.4172L5.01779 0.81731L6.13858 7.95584ZM5.58328 0.817203C5.50828 0.742282 5.40661 0.700195 5.30059 0.700195C5.19455 0.700195 5.09285 0.742302 5.01784 0.817256L5.58328 0.817203Z" />
                  </svg>
                  <button className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-100">
                    {openReply ? "Close" : translation.reply}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {openReply && (
        <ReplyForm
          topicId={topicId}
          closeReply={() => setOpenReply(false)}
          updateReplyCount={() => setReplyCount((p) => p + 1)}
        />
      )}
      {showReplies && (
        <div className="mt-3 ml-3">
          <Replies
            postId={id}
            topicId={topicId}
            isCreator={user?.username === creatorUser.username}
            type={type}
            setReplyCount={setReplyCount}
            replyCount={ReplyCount}
          />
        </div>
      )}
      <hr className="my-5" />
    </div>
  );
}

export default Post;
