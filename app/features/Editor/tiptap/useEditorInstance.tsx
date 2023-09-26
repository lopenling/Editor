import * as Extension from '~/features/Editor/tiptap';
import { useEditor } from '@tiptap/react';
import { useRecoilState } from 'recoil';
import { openSuggestionState, selectedPostThread, selectedSuggestionThread, selectedTextOnEditor } from '~/states';
const useEditorInstance = (textId = null, order = null) => {
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const [suggestionSelected, suggestionSelector] = useRecoilState(selectedSuggestionThread);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
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
    },
    [order, textId],
  );
  return editor;
};
export default useEditorInstance;
