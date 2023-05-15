import { Editor } from "@tiptap/react";
import { memo } from "react";
import { timeAgo } from "~/lib/getFormatedDate";
import Filter from "./Filter";
import Post from "./Post";
import { useRecoilValue } from "recoil";
import { filterDataState, showLatest } from "~/states";
import { FilterType, ReplyType, UserType } from "~/model/type";
export type PostType = {
  Reply: ReplyType[];
  audioUrl: string;
  avatar: string;
  content: string;
  creatorUser_id: string;
  id: string;
  isSolved: boolean;
  post_id: number;
  replyCount: number;
  textId: number;
  threadId: string;
  topic_id: number;
  type: "comment" | "question";
  created_at: string;
  likedBy: [];
  creatorUser: UserType;
};
type PostPropsType = {
  editor: Editor | null;
  posts: PostType[];
};

function Posts({ editor, posts }: PostPropsType) {
  if (!posts || posts?.length < 1) return null;
  if (!editor) return null;
  let filters = useRecoilValue(filterDataState);
  let isLatest = useRecoilValue(showLatest);
  let lists = applyFilter(posts, filters, isLatest);
  return (
    <>
      <Filter />
      <div
        className=" flex flex-col relative pr-2"
        style={{
          height: "min-content",
          maxHeight: "80vh",
        }}
      >
        {lists?.length > 0 &&
          lists?.map((post: PostType) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                isOptimistic={false}
                creatorUser={post.creatorUser}
                time={timeAgo(post.created_at)!}
                postContent={post.content}
                likedBy={post.likedBy}
                topicId={post.topic_id}
                type={post.type}
                replyCount={post?.replyCount}
                isSolved={post?.isSolved}
                threadId={post?.threadId}
                audioUrl={post?.audioUrl}
              />
            );
          })}
      </div>
    </>
  );
}

function applyFilter(list: PostType[], filter: FilterType, isLatest: boolean) {
  if (filter.type && filter.type !== "all")
    list = list.filter((l) => {
      return l.type === filter.type;
    });
  if (filter.user?.length)
    list = list.filter((l) => {
      return filter.user?.includes(l?.creatorUser?.username);
    });
  if (filter.date.startDate)
    list = list.filter((l) => {
      const startDate = filter.date.startDate
        ? new Date(filter.date.startDate)
        : null;
      const endDate = filter.date.endDate
        ? new Date(filter.date.endDate)
        : null;

      if (startDate && endDate) {
        const createdAt = new Date(l.created_at);
        return createdAt > startDate && createdAt < endDate;
      }

      return false;
    });
  if (filter.solved && filter.solved !== "both")
    list = list.filter((l) => {
      return l.isSolved === (filter.solved === "solved");
    });
  if (list.length > 0) {
    list.sort(function (a, b) {
      let c: Date = new Date(a.created_at);
      let d: Date = new Date(b.created_at);
      return !isLatest ? c.getTime() - d.getTime() : d.getTime() - c.getTime();
    });
  }
  return list;
}

export default memo(Posts);
