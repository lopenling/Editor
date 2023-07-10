import { LoaderArgs, LoaderFunction, defer } from '@remix-run/node';
import { Await, Link, Outlet, useFetcher, useLoaderData } from '@remix-run/react';
import { Editor,  useEditor } from '@tiptap/react';
import { getPage } from '~/model/page';
import * as Extension from '~/features/Editor/tiptap';
import { motion } from 'framer-motion';
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  showSidebar,
  showTableContent,
  textInfo,
} from '~/states';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Suspense, useEffect } from 'react';
import Header from '~/component/Layout/Header';

import { EditorContainer } from '~/features/Editor';
import { SuggestionContainer, SuggestionForm } from '~/features/Suggestion';
import { getUserSession } from '~/services/session.server';
import { findAllSuggestionByPageId } from '~/model/suggestion';
import { OnlineUsers } from '~/component/UI';
import usePusherPresence from '~/component/hooks/usePusherPresence';
import Pagination from '~/component/UI/Pagination';
import { FaListUl, FaRegComments } from 'react-icons/fa';
import TableOfContents from '~/features/Editor/component/TableOfContent';
import Modal from 'react-modal';
import { HEADER_HEIGHT } from '~/constants';
import { getText } from '~/model/text';
export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
  const textId = params.textId as string;
  const order = params.pageId as string;
  const text = await getText(textId);
  const page =  getPage(parseInt(textId), parseInt(order));
  const user = await getUserSession(request);
  const suggestions = await findAllSuggestionByPageId(page?.id);
  return defer({
    page,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
    text,
  });
};

function PostSidebar(props: { id: any; showPostSide: any; type: string; user: any; editor: any; page: any }) {
  return (
    <Outlet
      context={{
        user: props.user,
        editor: props.editor,
        text: props.page,
      }}
    />
  );
}

function SuggestionSidebar(props: {
  suggestionSelected: { id: any };
  editor: Editor | null;
  suggestions: any;
}) {
  return (
    <div className='z-20 w-full'>
      <SuggestionForm editor={props.editor} />
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
  const user = data.user;
  const [suggestionSelected, suggestionSelector] = useRecoilState(selectedSuggestionThread);
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  const [showTable, setShowTable] = useRecoilState(showTableContent);
  const [showPostSide, setShowPostSide] = useRecoilState(showSidebar);
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
  const setTextName = useSetRecoilState(textInfo);

  function suggestionSetter(id: string) {
    suggestionSelector({
      id: id,
    });
  }
  function postSetter(id: string) {
    postSelector({
      id: id,
    });
    
  }
  const { onlineMembers } = usePusherPresence(
    `presence-text_${data?.page?.id}`,
    data.pusher_env.key,
    data.pusher_env.cluster,
    data.user
  );
 
 
  let editor = useEditor(
    {
      extensions: [
        Extension.Document,
        Extension.Paragraph,
        Extension.Text,
        Extension.Bold,
        Extension.FontFamily,
        Extension.TextStyle,
        Extension.SearchAndReplace.configure({
          searchResultClass: 'search',
          caseSensitive: false,
          disableRegex: false,
        }),
        Extension.HardBreak.configure({
          HTMLAttributes: {
            class: 'pageBreak',
          },
        }),
        Extension.Highlight.configure({
          HTMLAttributes: {
            class: 'highlight',
          },
        }),
        Extension.Suggestion(suggestionSetter).configure({
          HTMLAttributes: {
            class: 'suggestion',
          },
        }),
        Extension.PostMark(postSetter).configure({
          HTMLAttributes: {
            class: 'post',
          },
        }),
      ],
      editable: true,
      editorProps: Extension.editorProps,
      onSelectionUpdate: ({ editor }) => {
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelectionRange({
          type: '',
          start: from,
          end: to,
          content: editor?.state.doc.textBetween(from, to, ''),
        });
        setOpenSuggestion(false);
        if (!editor.isActive('suggestion')) suggestionSelector({ id: '' });
        if (!editor.isActive('post')) postSelector({ id: '' });
      },
      onCreate: async ({ editor }) => {
        setTextName({ name: data?.text.name, id: data?.text.id });
      },
    },
    []
  );
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
  const topDistance = HEADER_HEIGHT;
  const tableSidebarWidth = 272;
  const postSidebarWidth = 400;
const withImage=data.pageCount>1;
  return (
    <>
      <Header editor={editor} />
      <OnlineUsers onlineMembers={onlineMembers} count={onlineMembers.length} />
      <div
        style={{
          height: topDistance,
        }}
      ></div>

      <div className="relative flex justify-between gap-4 transition-all">
        <div
          style={{
            top: topDistance,
            width: showTable ? tableSidebarWidth : 50,
          }}
          id="tableContent"
          className="sticky hidden md:flex"
        >
          <button
            className="absolute rounded-full "
            style={{ top: 10, left: 10, background: '#eee', padding: 10, height: 40, width: 40 }}
            onClick={() => setShowTable((p) => !p)}
          >
            <FaListUl size={22} className="cursor-pointer text-gray-500 " />
          </button>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: showTable ? 0 : '-100%' }}
            transition={{ duration: 0.5 }}
            className="z-10 w-full overflow-hidden rounded-2xl"
          >
            <TableOfContents editor={editor} onClose={() => setShowTable(false)} />
          </motion.div>
        </div>
        <div
          className={`${!withImage ? 'max-w-4xl' : 'w-full'} justify-self-center p-2`}
          style={{
            overflowX: 'hidden',
            scrollbarWidth: 'none',
            flex: 1,
          }}
          id="textEditorContainer"
        >{editor &&
            <Suspense fallback={<div>loading</div>}>
              <Await resolve={data.page} errorElement={<p>Error loading package location!</p>}>
                {(page) =>
                  <EditorContainer
                    editor={editor!}
                    isSaving={false}
                    order={page.order}
                    content={page.content}
                    pageCount={page?.text.Page.length}
                    imageUrl={page.imageUrl}
                    pageId={page.id}
                  />
                }
              </Await>
            </Suspense>}
        </div>
        <div
          style={{
            width: showPostSide ? postSidebarWidth : 0,
            top: topDistance,
            transition: 'all ease 0.4s',
            zIndex: 1,
          }}
          className="sticky hidden w-full md:flex "
          id="postContent"
        >
             <Suspense fallback={<div>loading</div>}>
              <Await resolve={data.page} errorElement={<p>Error loading package location!</p>}>
              {(page) => {
               if (page.Post.length<1 || !page.Post) return null;
                return <button
                  className="absolute rounded-full"
                  style={{ top: 20, opacity: 1, right: 20, background: '#eee', padding: 10 }}
                  onClick={() => setShowPostSide((p) => !p)}
                >
                  <FaRegComments size={22} className="cursor-pointer text-gray-500 " />
                </button>
              }}
            </Await>
            </Suspense>
          {suggestionSelected?.id || openSuggestion ? (
            <SuggestionSidebar suggestions={data.suggestions} suggestionSelected={suggestionSelected} editor={editor} />
          ) :
            <div
              className={`hidden w-full min-w-[450px]  bg-white  shadow-md dark:bg-gray-700  md:flex   md:h-full md:max-h-full  lg:sticky lg:top-0 lg:h-screen`}
              style={{
                flexDirection: 'column',
                opacity: showPostSide ? 1 : 0,
                transition: 'opacity ease 0.4s',
              }}
            >
              <PostSidebar
                page={data.page}
                user={user}
                id={selectedPost.id}
                type={selection.type}
                showPostSide={showPostSide}
                editor={editor}
              />
            </div>
          }
        </div>
      </div>
      {/* for mobile devicess */}
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
          <div className="absolute bottom-0 w-full bg-white " style={{ maxHeight: '50dvh', overflow: 'scroll' }}>
            <SuggestionSidebar
              suggestions={data.suggestions}
              suggestionSelected={suggestionSelected}
              editor={editor}
            ></SuggestionSidebar>
          </div>
        ) : (
          <div
            style={{
              maxHeight: '50dvh',
              overflowY: 'scroll',
            }}
          >
            <PostSidebar
              page={data.page}
              user={user}
              id={selectedPost.id}
              type={selection.type}
              showPostSide={showPostSide}
              editor={editor}
            />
          </div>
        )}
      </Modal>
    </>
  );
}
