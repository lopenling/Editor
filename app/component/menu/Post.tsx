import { Outlet } from '@remix-run/react';
import { Editor } from '@tiptap/react';
import React from 'react';
import { useFetcher } from 'react-router-dom';
import PostContainer from '~/features/PostContainer';
import { useFetcherWithPromise } from '../hooks/useFetcherPromise';

function Post({ editor }: { editor: Editor }) {
  const createPost = useFetcherWithPromise();

  return <PostContainer editor={editor} createPost={createPost} isMobile={false} />;
}

export default Post;
