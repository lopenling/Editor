import { useLoaderData } from '@remix-run/react';
import { Editor } from '@tiptap/core';
import { BubbleMenu } from '@tiptap/react';
import { Button } from 'flowbite-react';
import React from 'react';
import ButtonGroup from '~/component/UI/ButtonGroups';
import { isSmallScreen } from '~/lib';

type EditorMenuProps = {
  editor: Editor;
  selection: any;
  setSelectionRange: any;
  setSearchParams: any;
  isPostAllowed?: boolean;
};

function EditorMenu({ editor, selection, setSelectionRange, setSearchParams, isPostAllowed }: EditorMenuProps) {
  const { user, text } = useLoaderData();
  function handleSuggestionClick() {
    setSelectionRange({
      ...selection,
      type: '',
    });
    setSearchParams((p) => {
      p.set('with', 'Suggestion');
      return p;
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

  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setSelectionRange({
        ...selection,
        type,
      });
    setSearchParams((p) => {
      p.set('with', 'Post');
      return p;
    });
  };

  const InSelectionLimit = selection.content.length > 0 && selection.content.length < 239;
  const isTextAdmin = text.userId !== user?.id;
  return (
    <>
      {editor && user && (
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
          {!editor.isActive('suggestion') && !editor.isActive('post') ? (
            InSelectionLimit && (
              <ButtonGroup>
                <Button
                  title="suggestion"
                  type="button"
                  color="gray"
                  onClick={() => handleSuggestionClick()}
                  label="Suggestion"
                  className="pr-4 pl-2"
                />
                <Button
                  title="comment"
                  color="gray"
                  onClick={() => handleBubbleClick('comment')}
                  label="Comment"
                  type="button"
                  hidden={!isPostAllowed}
                  className="px-2"
                />
                <Button
                  type="button"
                  title="question"
                  color="gray"
                  onClick={() => handleBubbleClick('question')}
                  label="Question"
                  hidden={!isPostAllowed}
                  className="pr-4"
                />
              </ButtonGroup>
            )
          ) : (
            <Button
              title="delete"
              type="button"
              color="gray"
              onClick={() => handleDeleteMark()}
              label="Delete"
              className={`disabled:opacity-50 disabled:cursor-not-allowed ${isTextAdmin && 'hidden'}`}
            />
          )}
        </BubbleMenu>
      )}
    </>
  );
}

export default EditorMenu;
