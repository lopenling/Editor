import { Editor } from "@tiptap/react";
import { useEffect } from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import Filter from "./Filter";
import Post from "./Post";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredPost as filteredValue, postslist } from "~/states";
export type PostType = {
  Reply: [];
  audioUrl: string;
  avatar: string;
  content: string;
  creatorUser_id: string;
  id: string;
  isSolved: boolean;
  post_id: number;
  replyCount: number;
  textId: number;
  thread_id: string;
  topic_id: number;
  type: "comment" | "question";
  created_at: string;
  likedBy: [];
  creatorUser: any;
};
type PostPropsType = {
  editor: Editor | null;
  posts: PostType[];
};

function Posts({ editor, posts }: PostPropsType) {
  const setPostList = useSetRecoilState(postslist);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);
  if (!posts && !posts?.length) return null;
  const filteredPost = useRecoilValue(filteredValue);

  if (!editor) return null;
  return (
    <>
      <Filter />
      <div
        className="scroll-container flex flex-col overflow-x-hidden overflow-y-scroll relative pr-2"
        style={{
          height: "min-content",
          maxHeight: "80vh",
        }}
      >
        {filteredPost?.length > 0 &&
          filteredPost?.map((post: PostType) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                creatorUser={post.creatorUser}
                time={timeAgo(post.created_at)!}
                postContent={post.content}
                likedBy={post.likedBy}
                topicId={post.topic_id}
                type={post.type}
                replyCount={post?.replyCount}
                isSolved={post?.isSolved}
                isOptimistic={false}
                threadId={post?.thread_id}
                audioUrl={post?.audioUrl}
              />
            );
          })}
      </div>
    </>
  );
}

export default Posts;
