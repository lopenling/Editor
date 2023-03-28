import { useState, useEffect, memo } from "react";
import {
  useFetcher,
  useSearchParams,
  useOutletContext,
} from "@remix-run/react";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Avatar, Badge, Button, Modal } from "flowbite-react";
import Replies from "./Replies";
import ReplyForm from "./ReplyForm";
import shareIcon from "~/assets/svg/icon_share.svg";
import tickIcon from "~/assets/svg/icon_tick.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedPost as selectedPostState } from "~/states";
type PostType = {
  id: number;
  creatorUser: any;
  time: string;
  postContent: string;
  likedBy: any;
  topicId: number;
  type: "question" | "comment";
  replyCount: any;
  isSolved: boolean;
  isOptimistic: boolean;
  handleSelection: any;
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
  isOptimistic = false,
  handleSelection,
}: PostType) {
  const [openReply, setOpenReply] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [ReplyCount, setReplyCount] = useState(replyCount - 1);
  const likeFetcher = useFetcher();
  const translation = uselitteraTranlation();
  const { user }: { user: any } = useOutletContext();
  const [selectedPost, setSelectedPost] = useRecoilState(selectedPostState);
  const isSelected = selectedPost?.id === id;
  let likedByMe = user
    ? likedBy.some((l) => l.username === user.username)
    : false;
  let likedByMeFromFetcher = likeFetcher.data?.some(
    (l) => l.username === user.username
  );
  function handleLikeClick() {
    likeFetcher.submit(
      {
        id,
        _action: "likePost",
        userId: user.id,
      },
      { method: "post", action: "api/like" }
    );
  }

  const updateReplyCount = () => {
    setReplyCount((p) => p + 1);
  };
  useEffect(() => {
    if (isSelected && postref.current) {
      postref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  const postref = useDetectClickOutside({
    onTriggered: () => {
      setSelectedPost({ id: null, start: null, end: null });
    },
  });
  function handleCopy(url) {
    navigator.clipboard.writeText(url);
    alert("Text copied to clipboard!");
  }
  function getUrl(postId: number) {
    if (postId) {
      const url = window?.location.href.split("?")[0] + "?post=" + postId;
      return url;
    }
  }
  let url = getUrl(id);
  return (
    <>
      <Modal
        show={openShare}
        onClose={() => setOpenShare((p) => !p)}
        dismissible={true}
      >
        <Modal.Header>Share</Modal.Header>
        <div className="container mx-auto my-8 p-3">
          <div className="flex justify-center">
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <svg
                  width={24}
                  height={24}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  id="facebook-logo-2019"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  ></path>
                </svg>
                <div>Facebook</div>
              </a>

              <a
                href={`https://wa.me/?text=${url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 1219.547 1225.016"
                  id="whatsapp"
                >
                  <path
                    fill="#E0E0E0"
                    d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                  ></path>
                  <linearGradient
                    id="a"
                    x1="609.77"
                    x2="609.77"
                    y1="1190.114"
                    y2="21.084"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#20b038"></stop>
                    <stop offset="1" stopColor="#60d66a"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                  ></path>
                  <path
                    fill="#FFF"
                    fillRule="evenodd"
                    d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                  ></path>
                </svg>
                <div>WhatsApp</div>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={url}
                id="copy-text-share"
                className="w-64 p-2 border border-gray-400 rounded-md dark:bg-gray-600 dark:text-black"
                readOnly
              />
              <button
                onClick={() => handleCopy(url)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div
        className={` py-3 px-1 ${
          isSelected
            ? "bg-yellow-50 dark:bg-gray-700 dark:rounded-sm"
            : "bg-transparent"
        }`}
        ref={postref}
        onClick={() => {
          handleSelection();
        }}
      >
        <div className="inline-flex w-full items-center justify-start">
          <div className="flex items-center justify-start space-x-3">
            <Avatar img={creatorUser.avatarUrl} rounded={true} size="xs" />
            <p className="text-base font-medium leading-tight text-gray-900 dark:text-gray-200">
              {creatorUser.name}
            </p>
            {isSolved && <img src={tickIcon} alt="tickIcon" />}
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
            {postContent}
          </div>
          {isOptimistic ? (
            <div className="text-sm text-gray-300 font-sans">posting ...</div>
          ) : (
            <div className="flex w-full flex-1 items-center justify-between ">
              <div className="flex h-full w-64 items-center justify-start space-x-4">
                <button
                  disabled={!user || !!likeFetcher.submission}
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
                      style={{
                        fill:
                          likedByMe | likedByMeFromFetcher
                            ? "rgb(49,196,141)"
                            : "gray",
                      }}
                    />
                  </svg>

                  <div className="  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100">
                    {likeFetcher.data
                      ? likeFetcher.data?.length
                      : likedBy.length}
                  </div>
                </button>
                {ReplyCount > 0 && (
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
                      className=" lowercase text-sm font-medium leading-tight text-gray-500 dark:text-gray-100"
                    >
                      {showReplies && "Hide "}
                      <span className="mr-1">
                        {ReplyCount === 0 ? 0 : ReplyCount}
                      </span>
                      {ReplyCount > 1 ? translation.replies : translation.reply}
                    </button>
                  </div>
                )}

                <div
                  onClick={() => setOpenShare(true)}
                  className="flex items-center justify-start "
                >
                  <img src={shareIcon} alt="alt" />
                  <button
                    type="button"
                    className="text-sm font-medium leading-tight text-gray-500 dark:text-gray-100 hover:text-blue-500"
                  >
                    <span className="mr-1"></span>
                    share
                  </button>
                </div>
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
          updateReplyCount={updateReplyCount}
        />
      )}
      {showReplies && (
        <div className="mt-3">
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
    </>
  );
}

export default Post;
