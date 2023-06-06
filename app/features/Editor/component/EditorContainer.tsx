import { useLoaderData } from '@remix-run/react';
import { BubbleMenu, Editor, EditorContent } from '@tiptap/react';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
// import EditorSettings from "./EditorSettings";
import { Button } from '~/component/UI';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from '~/constants';
import { openSuggestionState, selectedPostThread, selectedTextOnEditor, showImageState } from '~/states';
import { isSmallScreen } from '~/lib';
import { scrollThreadIntoView } from '../lib';
type EditorContainerProps = {
  editor: Editor;
  isSaving: boolean;
  order: number;
  content: string;
};
function EditorContainer({ editor, isSaving, order, content }: EditorContainerProps) {
  const data = useLoaderData();
  const user = data.user;
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  let thread = useRecoilValue(selectedPostThread);

  useEffect(() => {
    let d = scrollThreadIntoView(thread.id, `p_${thread.id}`);
  }, [thread.id]);

  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setSelectionRange({
        ...selection,
        type,
      });
    setOpenSuggestion(false);
  };

  function handleSuggestionClick() {
    setOpenSuggestion(!openSuggestion);
    setSelectionRange({
      ...selection,
      type: '',
    });
  }
  function handleDeleteMark() {
    if (editor.isActive('post')) {
      editor.commands.unsetPost();
    }

    if (editor.isActive('suggestion')) {
      editor.commands.unsetSuggestion();
    }
    editor.commands.setTextSelection(0);
  }
  useEffect(() => {
    setTimeout(() => {
      editor?.commands.setContent(content);
    }, 100);
  }, [content, editor]);

  const showImage = useRecoilValue(showImageState);

  return (
    <div className=" relative mb-4  shadow-sm">
      <div className=" text-light z-10 flex  items-center  justify-between  bg-white px-2 py-4  text-3xl font-bold text-gray-900  dark:bg-gray-700 dark:text-white">
        <h3 className="textname flex gap-2 text-2xl">
          <div className="flex items-center gap-2">
            {data.text.name} ({order}){isSaving && <span className="animate-pulse text-sm font-light">saving...</span>}
          </div>
        </h3>
      </div>
      <div className="flex w-full max-w-full justify-center">
        {showImage && (
          <img
            alt="Text Image"
            src={'https://lopenling.org/uploads/default/original/1X/481de39a3a7e504767bbce6443099766a149d260.jpeg'}
            className="object-contain p-2"
            style={{ border: '1px solid gray' }}
          />
        )}
      </div>
      {!editor ? (
        <div className="flex h-[400px] w-full animate-pulse justify-center">
          <div className="mr-2 h-full flex-1 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      ) : (
        <EditorContent
          editor={editor}
          className="editor transition-all "
          style={{
            fontSize: isSmallScreen ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE,
            pointerEvents: isSaving ? 'none' : 'all',
          }}
        />
      )}

      {editor && (
        <BubbleMenu
          shouldShow={({ editor }) => {
            const postmarkType = editor.schema.marks.post;
            const suggestmarkType = editor.schema.marks.suggestion;

            // check if the mark is partially included in the selection
            const selection = editor.state.selection;
            if (editor.isActive('suggestion') || editor.isActive('post')) {
              return true;
            } else if (
              editor.state.doc.rangeHasMark(selection.$from.pos, selection.$to.pos, postmarkType) ||
              editor.state.doc.rangeHasMark(selection.$from.pos, selection.$to.pos, suggestmarkType)
            ) {
              return false;
            } else {
              return true;
            }
          }}
          editor={editor}
          tippyOptions={{
            appendTo: 'parent',
            placement: isSmallScreen ? 'bottom' : 'top',
          }}
        >
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {!editor.isActive('suggestion') && !editor.isActive('post') ? (
              selection.content.length > 0 &&
              selection.content.length < 239 && (
                <>
                  <Button
                    title="suggestion"
                    type="button"
                    color="gray"
                    className={`${
                      openSuggestion ? 'bg-green-400 text-white' : 'bg-white '
                    } rounded-l-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10  focus:ring-2 focus:ring-blue-700 hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white `}
                    onClick={() => handleSuggestionClick()}
                    label="Suggestion"
                  />
                  <Button
                    title="comment"
                    color="gray"
                    className=" border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900  focus:z-10  focus:ring-2 focus:ring-blue-700 hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white "
                    onClick={() => handleBubbleClick('comment')}
                    label="Comment"
                    type="button"
                  />
                  <Button
                    type="button"
                    title="question"
                    color="gray"
                    className="rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10  focus:ring-2 hover:bg-gray-100   dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white "
                    onClick={() => handleBubbleClick('question')}
                    label="Question"
                  />
                </>
              )
            ) : data?.user?.admin === 'true' || data.text.userId == user?.id ? (
              <Button
                title="delete"
                type="button"
                color="gray"
                className=" rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleDeleteMark()}
                label="Delete"
              />
            ) : null}
          </div>
        </BubbleMenu>
      )}
    </div>
  );
}

export default EditorContainer;
