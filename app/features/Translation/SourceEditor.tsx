import { useEffect } from 'react';
import useEditorInstance from '../Editor/tiptap/useEditorInstance';
import { EditorContent } from '@tiptap/react';
import { generateHtmlFromTextAndAnnotations } from '../Editor/lib/htmlParser';
import Tools from '../Editor/tiptap/component/Tools';
import { useFetcher, useLoaderData } from '@remix-run/react';

function SourceEditor() {
  let { source } = useLoaderData();
  let content = source.content;
  let editor = useEditorInstance({ content, isEditable: true });
  let saveFetcher = useFetcher();
  useEffect(() => {
    editor?.on('update', ({ editor }) => {
      let text = editor.getHTML();
      if (text.length > 200)
        saveFetcher.submit(
          {
            action_: 'updateSource',
            id: source.id,
            content: text.trim(),
          },
          {
            method: 'POST',
          },
        );
    });
  }, [editor]);

  useEffect(() => {
    let timer = setTimeout(() => {
      let newContent = content.replace(/[\r\n]+/g, '<p/><p>');
      editor?.commands.setContent(newContent);
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
