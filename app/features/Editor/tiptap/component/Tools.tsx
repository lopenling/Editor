import React from 'react';
import ToolButton from './ToolButton';
import { useLoaderData } from '@remix-run/react';
import { useRecoilState } from 'recoil';
import { showTranslationState } from '~/states';

function Tools({ editor }: any) {
  let { user, translations } = useLoaderData();
  let [showTranslation, setShowTranslation] = useRecoilState(showTranslationState);
  function viewTranslation() {
    //open translation window
    setShowTranslation((p) => !p);
  }

  if (!editor) return null;
  return (
    <div className="flex flex-wrap justify-between bg-gray-200 border-2">
      <div>
        <ToolButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
        >
          H1
        </ToolButton>
        <ToolButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
        >
          H3
        </ToolButton>
        <ToolButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={'ml-2 '}
          isActive={editor.isActive('bold')}
        >
          bold
        </ToolButton>
        <ToolButton
          onClick={() => editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()}
          isActive={editor.isActive('highlight', { color: '#8ce99a' })}
        >
          highlight
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          undo
        </ToolButton>
        <ToolButton onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          redo
        </ToolButton>
      </div>
      <ToolButton
        onClick={viewTranslation}
        disabled={!user}
        title="must be a logged in user"
        isActive={showTranslation}
      >
        translations
      </ToolButton>
    </div>
  );
}

export default Tools;
