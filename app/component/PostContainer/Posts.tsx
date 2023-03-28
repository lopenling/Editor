import { useAsyncValue, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React, { useEffect } from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import { Modal } from "flowbite-react";
import Filter from "./Filter";
import ModalStyle from "react-responsive-modal/styles.css";
import { useDetectClickOutside } from "react-detect-click-outside";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import Post from "./Post";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filteredPost as filteredValue,
  openFilterState,
  postslist,
  selectedPost as selectedPostState,
} from "~/states";
type PostPropsType = {
  editor: Editor | null;
  posts: any;
};
function scrollToSelection(editor: Editor): void {
  const { node } = editor.view.domAtPos(editor.state.selection.anchor);
  if (node.parentElement) {
    (node.parentElement as any).scrollIntoView();
  }
}
export function links() {
  return [{ rel: "stylesheet", href: ModalStyle, as: "style" }];
}
function Posts({ editor, posts }: PostPropsType) {
  const data = useLoaderData();
  const [openFilter, setOpenFilter] = useRecoilState(openFilterState);
  const setPostList = useSetRecoilState(postslist);
  const [selectedPost, setSelectedPost] = useRecoilState(selectedPostState);

  if (!posts && !posts.length) return null;
  useEffect(() => {
    setPostList(posts);
  }, [posts]);
  useEffect(() => {
    setSelectedPost(data.selectedPost);
  }, [data.selectedPost]);
  const filteredPost = useRecoilValue(filteredValue);
  let timeout;
  function handleSelectPost({ start, end, id }) {
    setSelectedPost({ start, end, id });
    window.scroll(0, 0);
    editor?.chain().focus().setTextSelection({ from: start, to: end }).run();
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      let r = document.querySelector(".ProseMirror");
      let position = r.getBoundingClientRect();
      if (position.top < 80) {
        window.scrollBy(0, 200);
      }
    }, 0);
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
            <Filter close={closeFilter} />
          </div>
        </Modal>
      )}
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
                handleSelection={() => handleSelectPost(post)}
                type={post.type}
                replyCount={post?.replyCount}
                isSolved={post?.isSolved}
                isOptimistic={false}
              />
            );
          })}
      </div>
    </>
  );
}

export default React.memo(Posts);
