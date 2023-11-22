import { Editor } from '@tiptap/react';
import { PostSidebar } from '~/features/Post';

function Post({ editor }: { editor: Editor | null }) {
  return (
    <div
      className={` hidden w-full md:flex transition-all duration-75 z-[1] `}
      style={{ maxHeight: 'calc(100% - 60px)' }}
    >
      <PostSidebar editor={editor} />;
    </div>
  );
}

export default Post;
