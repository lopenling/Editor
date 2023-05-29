import { timeAgo } from "~/lib/getFormatedDate";
import { SuggestionCommentType } from "~/model/type";
import { AudioPlayer } from "../Media";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useRecoilValue } from "recoil";
import { useFetcher, useOutletContext } from "@remix-run/react";
import { Button, TextArea } from "~/component/UI";

type CommentProps = {
  comments: SuggestionCommentType[];
};

export default function Comments({ comments }: CommentProps) {
  return (
    <>
      {comments.length > 0 &&
        comments.map((comment: SuggestionCommentType, index) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </>
  );
}

const Comment = ({ comment }: { comment: SuggestionCommentType }) => {
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newContent, setNewContent] = useState(comment.text);
  const [checked, setChecked] = useState(comment.type === "support");
  const { user } = useOutletContext();

  const ref = useDetectClickOutside({
    onTriggered: () => setOpenEditMenu(false),
  });
  let color =
    comment.type === "support"
      ? "bg-green-100"
      : comment.type === "reject"
      ? "bg-red-100"
      : null;
  let time = timeAgo(comment.createdAt);
  let fetcher = useFetcher();
  let handleEdit = () => {
    setEdit(true);
  };
  let handleDelete = () => {
    let decision = confirm("do you want to delete the post");
    if (decision) {
      fetcher.submit(
        {
          id: comment.id,
        },
        {
          action: "api/suggestion/comment",
          method: "DELETE",
          encType: "multipart/form-data",
        }
      );
    } else {
      console.log("cancelled");
    }
  };
  const handleSubmit = () => {
    fetcher.submit(
      {
        id: comment.id,
        newContent: newContent,
        type: checked ? "support" : "reject",
      },
      {
        action: "api/suggestion/comment",
        method: "PATCH",
        encType: "multipart/form-data",
      }
    );
    setEdit(false);
  };
  let audioPresent = comment.audioUrl && comment.audioUrl !== "";
  return (
    <div className={`p-2 text-base  rounded-lg dark:bg-gray-700 ${color}`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={comment.author?.avatarUrl}
              alt="author image"
            />
            {comment.author?.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{time}</p>
        </div>
        <div className="relative ml-3" ref={ref}>
          <button
            className=" inline-flex items-center text-sm font-medium text-center text-gray-400  rounded-lg    dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            type="button"
            onClick={() => setOpenEditMenu((p) => !p)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>

          <div
            className={`${
              openEditMenu ? "absolute" : "hidden"
            } right-0 top-1.5 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              {user && user.username === comment?.author.username && (
                <>
                  <li>
                    <div
                      onClick={handleEdit}
                      className="block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={handleDelete}
                      className="block cursor-pointer py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </div>
                  </li>
                </>
              )}
              <li>
                <div className="block py-2 cursor-pointer px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Report
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {edit ? (
        <div className="flex flex-col">
          <TextArea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          ></TextArea>
          <div className="flex justify-between gap-2 mt-2">
            <div className="flex-1 ">
              <label htmlFor={"checkbox" + comment.id} className="mr-2">
                support
              </label>
              <input
                type="checkbox"
                id={"checkbox" + comment.id}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              ></input>
              {audioPresent && <AudioPlayer src={comment.audioUrl} />}
            </div>
            <Button onClick={handleSubmit} label="submit" type="submit" />
            <Button
              onClick={() => setEdit(false)}
              label="cancel"
              type="reset"
            />
          </div>
        </div>
      ) : (
        <>
          {audioPresent && <AudioPlayer src={comment.audioUrl} />}

          <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>
        </>
      )}
    </div>
  );
};
