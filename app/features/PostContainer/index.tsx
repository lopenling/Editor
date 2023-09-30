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
    <div className={` hidden w-full md:flex transition-all duration-75 z-[1] flex-1 `}>
      {suggestionSelected?.id || openSuggestion ? (
        <SuggestionSidebar
          suggestions={data.suggestions}
          suggestionSelected={suggestionSelected}
          page={page}
          editor={editor}
        />
      ) : (
        <div
          className={`hidden w-full flex-col  bg-white  shadow-md dark:bg-gray-700  md:flex   md:h-full md:max-h-full  lg:sticky lg:top-0 lg:h-screen`}
          style={{
            transition: 'opacity ease 0.4s',
            maxHeight: `calc(100vh - 120px)`,
          }}
        >
          <PostSide
            page={page}
            user={user}
            id={selectedPost.id}
            type={selection.type}
            editor={editor}
            createPost={createPost}
          />
        </div>
      )}
    </div>
  );
}

export default PostContainer;

function PostSide(props: { id: any; type: string; user: any; editor: any; page: any; createPost: any }) {
  return <PostSidebar createPost={props.createPost} />;
}

function SuggestionSidebar(props: {
  suggestionSelected: { id: any };
  editor: Editor | null;
  suggestions: any;
  page: any;
}) {
  return (
    <div className="z-20 w-full border-l">
      <SuggestionForm editor={props.editor} page={props.page} />
      <SuggestionContainer editor={props.editor} suggestions={props.suggestions} />
    </div>
  );
}
