import { useEffect } from 'react';
import useEditorInstance from '../Editor/tiptap/useEditorInstance';
import { EditorContent } from '@tiptap/react';
import { generateHtmlFromTextAndAnnotations } from '../Editor/lib/htmlParser';
import Tools from '../Editor/tiptap/component/Tools';

type SourceProps = {
  content: string;
};

function TranslationEditor({ content }: SourceProps) {
  let editor = useEditorInstance(content, true);
  useEffect(() => {
    editor?.on('update', ({ editor }) => {
      console.log(editor.getHTML());
      // The content has changed.
    });
  }, [editor]);
  useEffect(() => {
    let timer = setTimeout(() => {
      let newContent = content.replace(/[\r\n]+/g, '<p/><p>');
      let annotations = [];
      content = generateHtmlFromTextAndAnnotations(newContent, annotations);
      editor?.commands.setContent(content);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [content, editor]);
  return (
    <>
      <Tools editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}

export default TranslationEditor;
