import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import React from "react";
import { timeAgo } from "~/utility/getFormatedDate";
import Reply from "./Replies";
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
};

export function links() {
  return [{ rel: "stylesheet", href: ModalStyle, as: "style" }];
}
function Posts(props: PostPropsType) {
  const [animationParent] = useAutoAnimate();
  const data = useLoaderData();
  const [filter, setFilter] = React.useState({
    type: "all",
    date: { startDate: null, endDate: null },
    user: [],
  });
  const [selectedPost, setSelectedPost] = React.useState(null);
  let posts = data.posts?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
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
  }
  function handleSelectPost({ start, end, id }) {
    props.editor
      ?.chain()
      .focus()
      .setTextSelection({ from: start, to: end })
      .run();
    setSelectedPost(id);
  }

  const onClose = () => props.setOpenFilter((prev) => !prev);
  const ref = useDetectClickOutside({
    onTriggered: onClose,
  });

  const translation = uselitteraTranlation();

  return (
    <>
      {props.openFilter && (
        <Modal show={true} onClose={onClose} size="md">
          <div ref={ref}>
            <Modal.Header>{translation.filter}</Modal.Header>
            <FilterPost filter={filter} setFilter={setFilter} close={onClose} />
          </div>
        </Modal>
      )}

      <div
        className="scroll-container flex flex-col"
        ref={animationParent}
        style={{
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
          height: "80vh",
          paddingInline: 10,
        }}
      >
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.creatorUser.username}
            avatar={post.avatar}
            time={timeAgo(post.created_at)!}
            postContent={post.content}
            likedBy={post.likedBy}
            topicId={post.topic_id}
            handleSelection={() => handleSelectPost(post)}
            selectedPost={selectedPost!}
            type={post.type}
            replyCount={post?.replyCount}
          />
        ))}
      </div>
    </>
  );
}

export default React.memo(Posts);
