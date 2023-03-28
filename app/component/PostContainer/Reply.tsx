import { useOutletContext } from "@remix-run/react";
import { useFetcher, useLoaderData } from "@remix-run/react/dist/components";
import { Button } from "flowbite-react";
import { timeAgo } from "~/utility/getFormatedDate";

type ReplyPropType = {
  reply: any;
  isCreator: boolean;
  postId: number;
  replyList: any;
  type: "question" | "comment";
};

function Reply({ reply, isCreator, postId, replyList, type }: ReplyPropType) {
  const replyLikeFetcher = useFetcher();
  const approvedFetcher = useFetcher();
  const { user }: { user: any } = useOutletContext();
  const likedByMe = user
    ? replyList?.likedBy?.some((d) => d.username == user.username)
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
  let avatar_img = ("http://lopenling.org" + reply?.avatar_template).replace(
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
        likedBy: user?.id,
        id: reply?.id,
        create: replyList ? "update" : "create",
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
          <p className=" text-base font-medium leading-tight text-gray-900 dark:text-gray-300">
            {reply?.username}
          </p>
        </div>
        <div className=" text-right text-sm  text-gray-500 dark:text-gray-200">
          {timeAgo(reply?.created_at)}
        </div>
      </div>
      <p
        className=" w-full py-3 text-base leading-normal text-gray-500 dark:text-gray-100"
        dangerouslySetInnerHTML={innerHtml()}
      ></p>
      <div className="flex justify-between">
        <button
          disabled={!!replyLikeFetcher.submission || !user}
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
            <path
              style={{
                fill: likedByMe ? "rgb(49,196,141)" : "gray",
              }}
              d="M0 8.5C-2.93527e-09 8.30302 0.0387987 8.10796 0.114181 7.92597C0.189563 7.74399 0.300052 7.57863 0.43934 7.43934C0.578628 7.30005 0.743986 7.18956 0.925975 7.11418C1.10796 7.0388 1.30302 7 1.5 7C1.69698 7 1.89204 7.0388 2.07403 7.11418C2.25601 7.18956 2.42137 7.30005 2.56066 7.43934C2.69995 7.57863 2.81044 7.74399 2.88582 7.92597C2.9612 8.10796 3 8.30302 3 8.5V14.5C3 14.8978 2.84196 15.2794 2.56066 15.5607C2.27936 15.842 1.89782 16 1.5 16C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 5.92805e-09 14.8978 0 14.5V8.5ZM4 8.333V13.763C3.99983 14.1347 4.10322 14.499 4.29858 14.8152C4.49394 15.1314 4.77353 15.3869 5.106 15.553L5.156 15.578C5.71089 15.8553 6.32267 15.9998 6.943 16H12.359C12.8215 16.0002 13.2698 15.84 13.6276 15.5469C13.9853 15.2537 14.2303 14.8456 14.321 14.392L15.521 8.392C15.579 8.10187 15.5719 7.80249 15.5002 7.51544C15.4285 7.22839 15.294 6.96082 15.1065 6.73201C14.9189 6.50321 14.6829 6.31887 14.4155 6.19229C14.148 6.0657 13.8559 6.00003 13.56 6H10V2C10 1.46957 9.78929 0.960859 9.41421 0.585786C9.03914 0.210714 8.53043 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V1.667C7 2.53248 6.71929 3.37462 6.2 4.067L4.8 5.933C4.28071 6.62538 4 7.46752 4 8.333Z"
            />
          </svg>
          <div className=" disabled:text-slate-300 text-sm font-medium leading-tight text-gray-500 dark:text-gray-200">
            {like_Count}
          </div>
        </button>
        {like_Count > 0 && type === "question" && (
          <div className="cursor-pointer">
            {!solved ? (
              isCreator && (
                <button
                  onClick={handleAproved}
                  style={{ borderRadius: 7 }}
                  className="flex gap-2 p-2  cursor-pointer text-xs font-medium leading-none text-green-700 border-green-700 border-2 dark:text-green-400 dark:border-green-400"
                >
                  {approvedFetcher.state !== "idle" ? (
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
              <Button
                disabled={!isCreator}
                onClick={handleAproved}
                color="success"
                size="xs"
              >
                {approvedFetcher.state !== "idle" ? (
                  <>loading</>
                ) : (
                  <>
                    <SolvedLogo isSolved={solved} />
                    <div className="ml-2">Solved</div>
                  </>
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function SolvedLogo({ isSolved }: { isSolved: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.0131 1.76399C4.5277 1.7229 5.01623 1.52049 5.4091 1.18559C5.85283 0.807658 6.41664 0.600098 6.9995 0.600098C7.58236 0.600098 8.14617 0.807658 8.5899 1.18559C8.98277 1.52049 9.47129 1.7229 9.9859 1.76399C10.567 1.81043 11.1126 2.06236 11.5249 2.4746C11.9371 2.88684 12.1891 3.43244 12.2355 4.01359C12.2763 4.52799 12.4787 5.01679 12.8139 5.40959C13.1918 5.85332 13.3994 6.41713 13.3994 6.99999C13.3994 7.58284 13.1918 8.14666 12.8139 8.59039C12.479 8.98326 12.2766 9.47178 12.2355 9.98639C12.1891 10.5675 11.9371 11.1131 11.5249 11.5254C11.1126 11.9376 10.567 12.1895 9.9859 12.236C9.47129 12.2771 8.98277 12.4795 8.5899 12.8144C8.14617 13.1923 7.58236 13.3999 6.9995 13.3999C6.41664 13.3999 5.85283 13.1923 5.4091 12.8144C5.01623 12.4795 4.5277 12.2771 4.0131 12.236C3.43195 12.1895 2.88635 11.9376 2.47411 11.5254C2.06187 11.1131 1.80994 10.5675 1.7635 9.98639C1.72241 9.47178 1.52 8.98326 1.1851 8.59039C0.80717 8.14666 0.599609 7.58284 0.599609 6.99999C0.599609 6.41713 0.80717 5.85332 1.1851 5.40959C1.52 5.01672 1.72241 4.52819 1.7635 4.01359C1.80994 3.43244 2.06187 2.88684 2.47411 2.4746C2.88635 2.06236 3.43195 1.81043 4.0131 1.76399ZM9.9651 5.96559C10.1108 5.8147 10.1915 5.61262 10.1896 5.40286C10.1878 5.19311 10.1037 4.99246 9.95535 4.84413C9.80703 4.6958 9.60638 4.61167 9.39662 4.60985C9.18686 4.60802 8.98478 4.68866 8.8339 4.83439L6.1995 7.46879L5.1651 6.43439C5.01422 6.28866 4.81213 6.20802 4.60238 6.20985C4.39262 6.21167 4.19197 6.2958 4.04364 6.44413C3.89532 6.59246 3.81118 6.79311 3.80936 7.00286C3.80753 7.21262 3.88817 7.4147 4.0339 7.56559L5.6339 9.16559C5.78392 9.31556 5.98737 9.39981 6.1995 9.39981C6.41163 9.39981 6.61508 9.31556 6.7651 9.16559L9.9651 5.96559Z"
        className={
          isSolved ? "fill-white" : `fill-green-700 dark:fill-green-300`
        }
      />
    </svg>
  );
}
export default Reply;
