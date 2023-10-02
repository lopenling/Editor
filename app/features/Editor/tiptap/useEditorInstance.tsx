import * as Extension from '~/features/Editor/tiptap';
import { useEditor } from '@tiptap/react';
import { useSetRecoilState } from 'recoil';
import { openSuggestionState, selectedPostThread, selectedSuggestionThread, selectedTextOnEditor } from '~/states';
import { useSearchParams } from '@remix-run/react';
const useEditorInstance = (content: string, isEditable: boolean) => {
  const postSelector = useSetRecoilState(selectedPostThread);
  const suggestionSelector = useSetRecoilState(selectedSuggestionThread);
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const setOpenSuggestion = useSetRecoilState(openSuggestionState);
  const [, setSearchParams] = useSearchParams();
  function suggestionSetter(id: string) {
    suggestionSelector({
      id: id,
    });
    setSearchParams({ with: 'Post' });
  }

  function postSetter(id: string) {
    postSelector({
      id: id,
    });
    setSearchParams({ with: 'Post' });
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
      editable: true,
      editorProps: isEditable ? Extension.editorProps.editable : Extension.editorProps.noneditable,
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
    },
    [content],
  );
  return editor;
};
export default useEditorInstance;
