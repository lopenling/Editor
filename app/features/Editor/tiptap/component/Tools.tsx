import { Editor } from '@tiptap/react';
import ToolButton from './ToolButton';
import convertPTagsToOlAfterH1 from '~/lib/ConvertpToList';
import { FaHighlighter } from 'react-icons/fa';
import { IoMdUndo, IoMdRedo } from 'react-icons/io';
import { FaBold } from 'react-icons/fa';
import { LuHeading1, LuHeading3 } from 'react-icons/lu';
import { MdOutlineFormatIndentDecrease } from 'react-icons/md';
import { CiTextAlignCenter } from 'react-icons/ci';
import { AiFillApi } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useFetcher } from '@remix-run/react';
import TranslationList from './TranslationList';
import { BsGlobeAmericas } from 'react-icons/bs';
function Tools({ editor }: { editor: Editor }) {
  let [translation, setTranslation] = useState<null | string>(null);

  if (!editor) return null;

  function formatEditor() {
    let content = editor?.getHTML();
    let data = convertPTagsToOlAfterH1(content);
    editor?.commands.setContent(data);
  }
  const { from, to } = editor.state.selection;
  const text = editor.state.doc.textBetween(from, to);
  let lengthSelection = text.length;
  let t = null;
  let fetcher = useFetcher();
  async function fetchTranslation() {
    try {
      let url = `/api/translation?text=${text}`;
      fetcher.load(url);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (translation) {
      setTranslation(null);
    }
  }, [from]);
  useEffect(() => {
    if (fetcher.data) {
      setTranslation(fetcher?.data);
    }
  }, [fetcher.data]);
  return (
    <div className="flex flex-col justify-between bg-gray-200 z-10 rounded-md border-2 sticky top-0 w-min">
      <div className="flex">
        <ToolButton
          title="Heading 1"
          onClick={() => {
            if (editor.isActive('orderedList')) {
              replaceListItemWithH3(editor, 1);
            } else {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }
          }}
          isActive={editor.isActive('heading', { level: 1 })}
        >
          <LuHeading1 />
        </ToolButton>

        <ToolButton
          title="Heading 3"
          onClick={() => {
            if (editor.isActive('orderedList')) {
              replaceListItemWithH3(editor, 3);
            } else {
              editor.commands.toggleHeading({ level: 3 });
            }
          }}
          isActive={editor.isActive('heading', { level: 3 })}
        >
          <LuHeading3 />
        </ToolButton>

        <ToolButton
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={'ml-2 '}
          isActive={editor.isActive('bold')}
        >
          <FaBold />
        </ToolButton>
        <ToolButton
          title="Highlight"
          onClick={() => editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()}
          isActive={editor.isActive('highlight', { color: '#8ce99a' })}
        >
          <FaHighlighter />
        </ToolButton>

        <ToolButton title="Format" onClick={formatEditor}>
          <MdOutlineFormatIndentDecrease />
        </ToolButton>
        <ToolButton title="text center" onClick={() => editor.commands.setTextAlign('center')}>
          <CiTextAlignCenter />
        </ToolButton>
        <ToolButton title="undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          <IoMdUndo />
        </ToolButton>
        <ToolButton title="redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          <IoMdRedo />
        </ToolButton>
        <ToolButton title="translator" onClick={fetchTranslation} disabled={lengthSelection <= 1}>
          <BsGlobeAmericas />
        </ToolButton>
      </div>
      <TranslationList translation={translation} fetcher={fetcher} />
    </div>
  );
}

export default Tools;

const replaceListItemWithH3 = (editor: Editor, level: 1 | 3) => {
  if (!editor) {
    console.error('Editor instance is not available.');
    return;
  }
  const { state } = editor;
  const { selection } = state;
  const { $from, $to } = selection;
  // Only proceed if the selection is within a list item
  if ($from.parent.type.name === 'listItem' && $from.depth > 1) {
    // Determine the range of the current list item
    let startPos = $from.before($from.depth);
    let endPos = $to.after($from.depth) - 1;
    // Replace the list item with an H3 heading
    editor
      .chain()
      .focus()
      .deleteRange({ from: startPos, to: endPos })
      .insertContentAt(startPos, { type: 'heading', attrs: { level }, content: $from.parent.content.toJSON() })
      .run();
  }
};
