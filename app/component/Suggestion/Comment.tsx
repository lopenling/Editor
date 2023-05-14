import { timeAgo } from "~/lib/getFormatedDate";
import { SuggestionCommentType } from "~/model/type";
import AudioPlayer from "../Media/AudioPlayer";

type CommentProps = {
  comments: SuggestionCommentType[];
};

export default function Comment({ comments }: CommentProps) {
  return (
    <>
      {comments.length > 0 &&
        comments.map((comment: SuggestionCommentType, index) => {
          let color =
            comment.type === "support"
              ? "bg-green-100"
              : comment.type === "reject"
              ? "bg-red-100"
              : null;
          let time = timeAgo(comment.createdAt);
          return (
            <div
              className={`p-2 text-base  rounded-lg dark:bg-gray-700 ${color}`}
              key={comment?.id}
            >
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {time}
                  </p>
                </div>
              </div>
              {comment.audioUrl && comment.audioUrl !== "" && (
                <AudioPlayer src={comment.audioUrl} />
              )}
              <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>
            </div>
          );
        })}
    </>
  );
}
