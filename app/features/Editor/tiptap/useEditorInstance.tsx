import * as Extension from '~/features/Editor/tiptap';
import { useEditor } from '@tiptap/react';
import { useSetRecoilState } from 'recoil';
import { selectedTextOnEditor } from '~/states';
import { useSearchParams } from '@remix-run/react';
const useEditorInstance = (content: string, isEditable: boolean, paramUpdate: boolean = true) => {
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const [param, setSearchParams] = useSearchParams();
  function suggestionSetter(id: string) {
    setSearchParams({ with: 'Suggestion', thread: id });
  }

  function postSetter(id: string) {
    setSearchParams({ with: 'Post', thread: id });
  }
  let editor = useEditor(
    {
      extensions: [
        Extension.Document,
        Extension.Heading.configure({
          levels: [1, 2, 3],
        }),
        Extension.Paragraph.configure({}),
        Extension.Text,
        Extension.Bold,
        Extension.FontFamily,
        Extension.History.configure({
          newGroupDelay: 500,
          depth: 100,
        }),
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
          multicolor: true,
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
      content: content ? content : undefined,
      editable: true,
      editorProps: isEditable ? Extension.editorProps.editable : Extension.editorProps.noneditable,
      onSelectionUpdate: ({ editor }) => {
        if (!paramUpdate) return null;

        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelectionRange({
          type: '',
          start: from,
          end: to,
          content: editor?.state.doc.textBetween(from, to, ''),
        });
        if (!editor.isActive('suggestion') && !editor.isActive('post')) {
          if (param.get('with') !== 'all') setSearchParams({ with: 'all' });
        }
      },
    },
    [],
  );
  return editor;
};
export default useEditorInstance;
