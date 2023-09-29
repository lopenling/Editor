import { useEffect } from 'react';
import useEditorInstance from '../Editor/tiptap/useEditorInstance';
import { EditorContent } from '@tiptap/react';
import { generateHtmlFromTextAndAnnotations } from '../Editor/lib/htmlParser';
import Tools from '../Editor/tiptap/component/Tools';

type SourceProps = {
  content: string;
};

function SourceEditor({ content }: SourceProps) {
  let editor = useEditorInstance(content);
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

export default SourceEditor;
