import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import { Avatar, Modal, Spinner } from "flowbite-react";
import FilterPost from "./FilterPost";
import ModalStyle from "react-responsive-modal/styles.css";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { uselitteraTranlation } from "~/locales/translations";
import Post from "./Post";
type PostPropsType = {
  editor: Editor | null;
  openFilter: boolean;
  setOpenFilter: any;
  isLatestPost: boolean;
};

export function links() {
  return [{ rel: "stylesheet", href: ModalStyle, as: "style" }];
}
function Posts({
  editor,
  openFilter,
  isLatestPost,
  setOpenFilter,
}: PostPropsType) {
  const data = useLoaderData();
  const [filter, setFilter] = React.useState({
    type: "all",
    date: { startDate: null, endDate: null },
    user: [],
    solved: "both",
  });
  let posts = data.posts;
  const [selectedPost, setSelectedPost] = React.useState(data.selectedPost);
  if (!posts && !posts.length) return null;
  posts = posts?.sort((a, b) => {
    if (isLatestPost) return new Date(b.created_at) - new Date(a.created_at);
    else return new Date(a.created_at) - new Date(b.created_at);
  });
  if (filter) {
    if (filter.type && filter.type !== "all")
      posts = posts.filter((l) => {
        return l.type === filter.type;
      });
    if (filter.user?.length)
      posts = posts.filter((l) => {
        return filter.user?.includes(l.creatorUser.username);
      });
    if (filter.date?.startDate)
      posts = posts.filter((l) => {
        return (
          new Date(l.created_at).getTime() >
            new Date(filter.date.startDate).getTime() &&
          new Date(l.created_at).getTime() <
            new Date(filter.date.endDate).getTime()
        );
      });
    if (filter.solved && filter.solved !== "both")
      posts = posts.filter((l) => {
        return l.isSolved === (filter.solved === "solved");
      });
  }
  function handleSelectPost({ start, end, id }) {
    editor?.chain().focus().setTextSelection({ from: start, to: end }).run();
    setSelectedPost(id);
  }

  const onClose = () => setOpenFilter((prev) => !prev);
  const ref = useDetectClickOutside({
    onTriggered: onClose,
  });

  const translation = uselitteraTranlation();
  if (!editor) return null;

  return (
    <>
      {openFilter && (
        <Modal show={true} onClose={onClose} size="md">
          <div ref={ref}>
            <Modal.Header>{translation.filter}</Modal.Header>
            <FilterPost filter={filter} setFilter={setFilter} close={onClose} />
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
        {posts?.map((post) => {
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
              selectedPost={selectedPost!}
              type={post.type}
              replyCount={post?.replyCount}
              isSolved={post?.isSolved}
            />
          );
        })}
      </div>
    </>
  );
}

export default React.memo(Posts);
