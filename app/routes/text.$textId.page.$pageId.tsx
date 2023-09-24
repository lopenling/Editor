import { LoaderArgs, LoaderFunction, defer, redirect } from '@remix-run/node';
import { Await, Link, Outlet, useFetcher, useLoaderData } from '@remix-run/react';
import { Editor, useEditor } from '@tiptap/react';
import { getPage, getVersions } from '~/model/page';
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  showSidebar,
} from '~/states';
import { useRecoilState } from 'recoil';
import { Suspense, useEffect } from 'react';
import Header from '~/component/Layout/Header';
import TableContent from '~/features/TableOfContent';
import { EditorContainer } from '~/features/Editor';
import { SuggestionContainer, SuggestionForm } from '~/features/Suggestion';
import { getUserSession } from '~/services/session.server';
import { findAllSuggestionByPageId } from '~/model/suggestion';
import { FaRegComments } from 'react-icons/fa';
import Modal from 'react-modal';
import { HEADER_HEIGHT, RIGHT_SIDEBAR_WIDTH } from '~/constants';
import { getText } from '~/model/text';
import { Version } from '@prisma/client';
import { useFetcherWithPromise } from '~/component/hooks/useFetcherPromise';
import { LineLoaderOverlay, CircleSpinnerOverlay } from 'react-spinner-overlay';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
  const textId = params.textId as string;
  const order = params.pageId as string;
  const url = new URL(request.url);
  const version = url.searchParams.get('version') as Version;
  const versions = await getVersions(parseInt(textId), parseInt(order));
  if (!version && versions.length > 0) {
    if (!version) {
      return redirect(`${request.url}?version=${versions[0].version}`);
    }
  }

  const text = await getText(textId);
  const page = await getPage(parseInt(textId), parseInt(order), version);
  const user = await getUserSession(request);
  const suggestions = await findAllSuggestionByPageId(page?.id!);
  return defer({
    page,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
    text,
    order,
    versions,
  });
};

function PostSidebar(props: {
  id: any;
  showPostSide: any;
  type: string;
  user: any;
  editor: any;
  page: any;
  createPost: any;
}) {
  return (
    <Outlet
      context={{
        user: props.user,
        editor: props.editor,
        text: props.page,
        createPost: props.createPost,
      }}
    />
  );
}

function SuggestionSidebar(props: {
  suggestionSelected: { id: any };
  editor: Editor | null;
  suggestions: any;
  page: any;
}) {
  return (
    <div className="z-20 w-full">
      <SuggestionForm editor={props.editor} page={props.page} />
      <Suspense fallback={<div>loading</div>}>
        <Await resolve={props.suggestions}>
          {(data) => <SuggestionContainer editor={props.editor} suggestions={data} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default function Page() {
  const data = useLoaderData<typeof loader>();
  const { user, order, text, page } = data;
  const [suggestionSelected, suggestionSelector] = useRecoilState(selectedSuggestionThread);
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const [selection] = useRecoilState(selectedTextOnEditor);
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
  const [showPostSide, setShowPostSide] = useRecoilState(showSidebar);
  const createPost = useFetcherWithPromise();
  const saveTextFetcher = useFetcher();

  let editor = useEditorInstance(text?.id, order);

  useEffect(() => {
    if (!!selectedPost.id || selection.type !== '' || !!suggestionSelected?.id || openSuggestion) {
      setShowPostSide(true);
    } else {
      setShowPostSide(false);
    }
  }, [selectedPost.id, selection.type, suggestionSelected?.id, openSuggestion]);
  useEffect(() => {
    if (!showPostSide) {
      postSelector({ id: '' });
      editor?.commands.setTextSelection(0);
    }
  }, [showPostSide]);
  const withImage = !data.text.allow_post;
  return (
    <>
      <Header editor={editor} />
      <div className="relative flex justify-between gap-4 transition-all" style={{ paddingTop: HEADER_HEIGHT }}>
        <TableContent editor={editor} />
        <CircleSpinnerOverlay
          message={'updating text'}
          loading={createPost.state !== 'idle' || saveTextFetcher.state !== 'idle'}
        />
        <div
          className={`${!withImage ? 'max-w-4xl' : 'w-full'} justify-self-center p-2 dark:bg-gray-800`}
          id="textEditorContainer"
        >
          {editor && (
            <EditorContainer
              editor={editor!}
              isSaving={false}
              order={page.order}
              content={page.content}
              pageCount={page?.text.Page.length}
              imageUrl={page.imageUrl}
              pageId={page.id}
              versions={data.versions}
              saveTextFetcher={saveTextFetcher}
            />
          )}
        </div>

        <div
          style={{
            width: showPostSide ? RIGHT_SIDEBAR_WIDTH : 0,
            top: HEADER_HEIGHT,
          }}
          className="sticky hidden w-full md:flex transition-all duration-75 z-[1] "
          id="postContent"
        >
          <Suspense fallback={<div>loading</div>}>
            <Await resolve={data.page} errorElement={<p>Error loading package location!</p>}>
              {(page) => {
                return (
                  <>
                    {data.text.allow_post && (
                      <button
                        className="absolute rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
                        style={{ top: 10, opacity: 1, right: 20, padding: 10 }}
                        onClick={() => setShowPostSide((p) => !p)}
                      >
                        <FaRegComments size={22} className="cursor-pointer text-gray-500 " />
                      </button>
                    )}
                    {suggestionSelected?.id || openSuggestion ? (
                      <SuggestionSidebar
                        suggestions={data.suggestions}
                        suggestionSelected={suggestionSelected}
                        page={page}
                        editor={editor}
                      />
                    ) : (
                      <div
                        className={`hidden w-full min-w-[450px] flex-col  bg-white  shadow-md dark:bg-gray-700  md:flex   md:h-full md:max-h-full  lg:sticky lg:top-0 lg:h-screen`}
                        style={{
                          opacity: showPostSide ? 1 : 0,
                          transition: 'opacity ease 0.4s',
                        }}
                      >
                        <PostSidebar
                          page={page}
                          user={user}
                          id={selectedPost.id}
                          type={selection.type}
                          showPostSide={showPostSide}
                          editor={editor}
                          createPost={createPost}
                        />
                      </div>
                    )}
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      {/* for mobile devicess */}
      <Suspense fallback={<div>loading</div>}>
        <Await resolve={data.page} errorElement={<p>Error loading package location!</p>}>
          {(page) => {
            return (
              <Modal
                isOpen={showPostSide || !!suggestionSelected?.id || openSuggestion}
                onRequestClose={() => {
                  setShowPostSide(false);
                  setOpenSuggestion(false);
                  suggestionSelector({ id: '' });
                }}
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
                className="modal-content pointer-events: auto; z-50 w-full overflow-y-scroll md:hidden"
                overlayClassName="modal-overlay"
              >
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
                      showPostSide={showPostSide}
                      editor={editor}
                      createPost={createPost}
                    />
                  </div>
                )}
              </Modal>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
