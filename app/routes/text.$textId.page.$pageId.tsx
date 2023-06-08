import { LoaderArgs, LoaderFunction, defer } from '@remix-run/node';
import { Await, Link, Outlet, useFetcher, useLoaderData } from '@remix-run/react';
import { Editor, useEditor } from '@tiptap/react';
import { getPage } from '~/model/page';
import * as Extension from '~/features/Editor/tiptap';
import { motion } from 'framer-motion';
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  showPostContent,
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
export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
  let textId = params.textId as string;
  let order = params.pageId as string;
  let page = await getPage(parseInt(textId), parseInt(order));
  let user = await getUserSession(request);
  const suggestions = await findAllSuggestionByPageId(page?.id!);
  return defer({
    page,
    text: page?.text,
    pageCount: page?.text.Page.length,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
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
  openSuggestion: any;
  suggestionSelected: { id: any };
  editor: Editor | null;
  suggestions: any;
}) {
  return (
    <motion.div
      animate={{
        x: props.openSuggestion || props.suggestionSelected?.id ? 0 : '100%',
      }}
    >
      <SuggestionForm editor={props.editor} />
      <Suspense fallback={<div>loading</div>}>
        <Await resolve={props.suggestions}>
          {(data) => <SuggestionContainer editor={props.editor} suggestions={data} />}
        </Await>
      </Suspense>
    </motion.div>
  );
}

export default function Page() {
  const data = useLoaderData<typeof loader>();
  if (!data.page)
    return (
      <div>
        no page exist <Link to="/">go to home</Link>
      </div>
    );
  const user = data.user;
  let content = data.page.content;
  const [suggestionSelected, suggestionSelector] = useRecoilState(selectedSuggestionThread);
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const setTextName = useSetRecoilState(textInfo);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  const [showTable, setShowTable] = useRecoilState(showTableContent);
  const [showPostSide, setShowPostSide] = useRecoilState(showPostContent);
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
  const saveTextFetcher = useFetcher();
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

  const saveData = async (text: string) => {
    const formData = new FormData();
    formData.append('textId', data.text?.id);
    formData.append('pageId', data.page?.id);
    formData.append('text', text);
    saveTextFetcher.submit(formData, {
      method: 'POST',
      action: '/api/text',
    });
  };
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
      onUpdate: async ({ editor }) => {
        let newContent = editor.getHTML();
        if (newContent.length > 10 && user) saveData(newContent);
      },
      onCreate: async ({ editor }) => {
        setTextName({ name: data?.text.name, id: data?.text.id });
      },
    },
    []
  );
  useEffect(() => {
    if (selectedPost.id || selection.type !== '') {
      setShowPostSide(true);
    } else {
      setShowPostSide(false);
    }
  }, [selectedPost.id, selection.type]);

  useEffect(() => {
    if (!showPostSide) {
      postSelector({ id: '' });
      editor?.commands.setTextSelection(0);
    }
  }, [showPostSide]);

  if (!editor) return null;
  return (
    <>
      <Header editor={editor} />
      <OnlineUsers onlineMembers={onlineMembers} count={onlineMembers.length} />
      <div style={{ height: 70 }}></div>
      <div className="relative flex h-min justify-between gap-4 transition-all">
        <div
          className="hidden w-fit md:block" 
          style={{
            zIndex: 1,
            position: 'sticky',
            top: 70,
            overflowY: 'scroll',
            height: '80vh',
          }}
          id="tableContent"
        >
          <button
            className="absolute rounded-full "
            style={{ top: 20, left: 20, background: '#eee', padding: 10 }}
            onClick={() => setShowTable((p) => !p)}
          >
            <FaListUl size={22} className="cursor-pointer text-gray-500 " />
          </button>
          <motion.div
            animate={{
              x: showTable ? 0 : '-100vw',
            }}
            transition={{ duration: 0.3 }}
            className='rounded-2xl'
          >
            <TableOfContents onClose={() => setShowTable(false)} />
          </motion.div>
        </div>

        <div
          className="max-w-3xl justify-self-center p-2"
          style={{
            overflowX: 'hidden',
            scrollbarWidth: 'none',
            width: '100%',
          }}
          id="textEditorContainer"
        >
          <Pagination pageCount={data.pageCount} />
          <EditorContainer editor={editor} isSaving={false} order={data.page.order} content={content} />
        </div>

        <div
          className="hidden min-w-[350px] md:block"
          style={{
            zIndex: 1,
            position: 'sticky',
            top: 70,
            overflowX: 'hidden',
            height: '90vh',
          }}
          id="postContent"
        >
          <button
            className="absolute rounded-full hover:bg-gray-300"
            style={{ top: 20, right: 20, background: '#eee', padding: 10, zIndex: '-1' }}
            onClick={() => setShowPostSide((p) => !p)}
          >
            <FaRegComments size={22} className="cursor-pointer text-gray-500 " />
          </button>
          {suggestionSelected?.id || openSuggestion ? (
            <SuggestionSidebar
              suggestions={data.suggestions}
              suggestionSelected={suggestionSelected}
              openSuggestion={openSuggestion}
              editor={editor}
            ></SuggestionSidebar>
          ) : (
            <motion.div
              animate={{
                x: showPostSide ? 0 : '100%',
              }}
              transition={{ duration: 0.3 }}
              className={`hidden max-h-[50%]  md:max-h-max min-w-[450px] flex-1 bg-white pt-3  dark:bg-gray-700  md:block md:w-1/4 lg:sticky lg:top-0 lg:h-screen`}
            >
              <PostSidebar
                page={data.page}
                user={user}
                id={selectedPost.id}
                type={selection.type}
                showPostSide={showPostSide}
                editor={editor}
              />
            </motion.div>
          )}
        </div>
      </div>
      {/* for mobile devicess */}
      <Modal
        isOpen={showPostSide || suggestionSelected?.id || openSuggestion}
        onRequestClose={() => setShowPostSide(false)}
        className="modal-content w-full md:hidden"
        overlayClassName="modal-overlay md:hidden"
      >
        {suggestionSelected?.id || openSuggestion ? (
          <div className="absolute bottom-0">
            <SuggestionSidebar
              suggestions={data.suggestions}
              suggestionSelected={suggestionSelected}
              openSuggestion={openSuggestion}
              editor={editor}
            ></SuggestionSidebar>
          </div>
        ) : (
            <div style={
              {
                maxHeight: '50dvh',
                overflowY:'scroll'
              }
            }>

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
