import { Editor } from '@tiptap/react';
import PostContainer from '~/features/PostContainer';
import { useFetcherWithPromise } from '../hooks/useFetcherPromise';

function Post({ editor }: { editor: Editor | null }) {
  const createPost = useFetcherWithPromise();
  return <PostContainer editor={editor} createPost={createPost} isMobile={false} />;
}

export default Post;
