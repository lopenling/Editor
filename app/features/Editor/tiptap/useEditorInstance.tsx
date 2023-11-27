import * as Extension from '~/features/Editor/tiptap';
import { mergeAttributes, useEditor } from '@tiptap/react';
import { useSetRecoilState } from 'recoil';
import { selectedTextOnEditor } from '~/states';
import { useSearchParams } from '@remix-run/react';
import convertPTagsToOlAfterH1 from '~/lib/ConvertpToList';
import { useEffect } from 'react';

let firsttime = true;

const useEditorInstance = (content: string | undefined, isEditable: boolean, paramUpdate: boolean = true) => {
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const [param, setSearchParams] = useSearchParams();
  function suggestionSetter(id: string) {
    setSearchParams((p) => {
      p.set('with', 'Suggestion');
      p.set('thread', id);
      return p;
    });
  }
  function postSetter(id: string) {
    setSearchParams((p) => {
      p.set('with', 'Post');
      p.set('thread', id);
      return p;
    });
  }
  let editor = useEditor(
    {
      extensions: [
        Extension.Document,
        Extension.Heading.configure({
          levels: [1, 2, 3],
        }),
        Extension.Paragraph,
        Extension.OrderedList,
        Extension.ListItem,
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
        if (!paramUpdate) return null;

        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelectionRange({
          type: '',
          start: from,
          end: to,
          content: editor?.state.doc.textBetween(from, to, ''),
        });
        if (!editor.isActive('suggestion') && !editor.isActive('post') && !firsttime) {
          if (param.get('with') !== 'all') {
            setSearchParams((p) => {
              p.delete('thread');
              return p;
            });
          }
        }
        firsttime = false;
      },
    },
    [],
  );

  useEffect(() => {
    if (content) {
      let content_with_list = convertPTagsToOlAfterH1(content);
      editor?.commands.setContent(content_with_list);
    }
  }, [content, editor]);

  return editor;
};
export default useEditorInstance;
