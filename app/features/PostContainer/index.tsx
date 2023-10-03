import { useRecoilState } from 'recoil';
import { openSuggestionState, selectedPostThread, selectedSuggestionThread, selectedTextOnEditor } from '~/states';
import { Outlet, useLoaderData } from '@remix-run/react';
import { Editor } from '@tiptap/react';
import { SuggestionContainer, SuggestionForm } from '../Suggestion';
import PostSidebar from './PostSidebar';
type PropsType = {
  editor: Editor | null;
  createPost: any;
  isMobile: boolean;
};

function PostContainer({ editor, createPost, isMobile }: PropsType) {
  const [suggestionSelected, suggestionSelector] = useRecoilState(selectedSuggestionThread);
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const [selection] = useRecoilState(selectedTextOnEditor);

  const data = useLoaderData();
  let user = data?.user;
  let page = data.page;
  if (isMobile)
    return (
      <>
        {suggestionSelected?.id || openSuggestion ? (
          <div className="absolute bottom-0 w-full bg-white max-h-[50dvh] overflow-y-scroll ">
            <SuggestionSidebar
              suggestions={data.suggestions}
              suggestionSelected={suggestionSelected}
              editor={editor}
              page={page}
            ></SuggestionSidebar>
          </div>
        ) : (
          <div className="max-h-[50dvh] overflow-y-scroll]">
            <PostSidebar
              page={page}
              user={user}
              id={selectedPost.id}
              type={selection.type}
              editor={editor}
              createPost={createPost}
            />
          </div>
        )}
      </>
    );
  return (
    <div
      className={` hidden w-full md:flex transition-all duration-75 z-[1] `}
      style={{ maxHeight: 'calc(100% - 60px)' }}
    >
      <PostSidebar createPost={createPost} editor={editor} />;
    </div>
  );
}

export default PostContainer;
