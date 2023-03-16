import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React, { useState, useEffect } from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import { Avatar, Badge, Modal, Spinner } from "flowbite-react";
import FilterPost from "./FilterPost";
import ModalStyle from "react-responsive-modal/styles.css";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { uselitteraTranlation } from "~/locales/translations";
import Post from "./Post";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filteredPost as filteredValue,
  openFilterState,
  postslist,
} from "~/states";
type PostPropsType = {
  posts: any;
  editor: Editor | null;
};

export function links() {
  return [{ rel: "stylesheet", href: ModalStyle, as: "style" }];
}
function Posts({ posts, editor }: PostPropsType) {
  const data = useLoaderData();
  const [openFilter, setOpenFilter] = useRecoilState(openFilterState);
  const setPostList = useSetRecoilState(postslist);
  const [selectedPost, setSelectedPost] = useState(data.selectedPost);
  if (!posts && !posts.length) return null;
  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const filteredPost = useRecoilValue(filteredValue);
  function handleSelectPost({ start, end, id }) {
    editor?.chain().focus().setTextSelection({ from: start, to: end }).run();
    setSelectedPost(id);
  }

  const closeFilter = () => setOpenFilter((prev) => !prev);
  const ref = useDetectClickOutside({
    onTriggered: closeFilter,
  });

  const translation = uselitteraTranlation();
  if (!editor) return null;
  return (
    <>
      {openFilter && (
        <Modal show={true} onClose={closeFilter} size="md">
          <div ref={ref}>
            <Modal.Header>{translation.filter}</Modal.Header>
            <FilterPost close={closeFilter} />
          </div>
        </Modal>
      )}
      <div
        className="scroll-container flex flex-col overflow-x-hidden overflow-y-auto relative pr-2"
        style={{
          height: "80vh",
        }}
      >
        <div id="temporaryPost"></div>

        {filteredPost?.length > 0 &&
          filteredPost?.map((post) => {
            return (
              <>
                <Post
                  key={post.id}
                  id={post.id}
                  creatorUser={post.creatorUser}
                  time={timeAgo(post.created_at)!}
                  postContent={post.content}
                  likedBy={post.likedBy}
                  topicId={post.topic_id}
                  handleSelection={() => handleSelectPost(post)}
                  selectedPost={selectedPost!}
                  type={post.type}
                  replyCount={post?.replyCount}
                  isSolved={post?.isSolved}
                />
              </>
            );
          })}
      </div>
    </>
  );
}

export default React.memo(Posts);
