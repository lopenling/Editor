import { useAsyncValue, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import { useEffect } from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import Filter from "./Filter";
import Post from "./Post";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filteredPost as filteredValue, postslist } from "~/states";
type PostPropsType = {
  editor: Editor | null;
  posts: any;
};

function Posts({ editor, posts }: PostPropsType) {
  const data = useLoaderData();
  const setPostList = useSetRecoilState(postslist);

  if (!posts && !posts.length) return null;
  useEffect(() => {
    setPostList(posts);
  }, [posts]);
  const filteredPost = useRecoilValue(filteredValue);

  if (!editor) return null;
  return (
    <>
      <Filter />
      <div
        className="scroll-container flex flex-col overflow-x-hidden overflow-y-scroll relative pr-2"
        style={{
          height: "80vh",
        }}
      >
        <div id="temporaryPost"></div>

        {filteredPost?.length > 0 &&
          filteredPost?.map((post) => {
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
              />
            );
          })}
      </div>
    </>
  );
}

export default Posts;
