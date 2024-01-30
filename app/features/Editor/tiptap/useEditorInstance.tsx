import * as Extension from '~/features/Editor/tiptap';
import { useEditor } from '@tiptap/react';
import { useSetRecoilState } from 'recoil';
import { selectedTextOnEditor } from '~/states';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import convertPTagsToOlAfterH1 from '~/lib/ConvertpToList';
import { useEffect, useLayoutEffect, useMemo } from 'react';
import * as Y from 'yjs';
import { Collaboration } from '@tiptap/extension-collaboration';
import { HocuspocusProvider } from '@hocuspocus/provider';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
let firsttime = true;

type useEditorProps = {
  name: string;
  content?: string;
  isEditable?: boolean;
  paramUpdate?: boolean;
};

const useEditorInstance = ({ name, content, isEditable, paramUpdate = true }: useEditorProps) => {
  const { user } = useLoaderData();
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const [param, setSearchParams] = useSearchParams();
  let documentName = name;
  let provider;
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
  const doc = useMemo(() => {
    return new Y.Doc();
  }, [documentName]);

  useEffect(() => {
    if (user) {
      let url =
        process.env.NODE_ENV === 'development'
          ? 'ws://' + window.location.hostname + ':3000/socket'
          : 'wss://' + window.location.hostname + '/socket';
      provider = new HocuspocusProvider({
        url,
        name,
        document: doc,
      });
    }
  }, []);

  let editor = useEditor(
    {
      extensions: [
        Extension.Document,
        Extension.Heading.configure({
          levels: [1, 2, 3],
        }),
        Extension.Paragraph,
        Extension.Text,
        Extension.Bold,
        Extension.FontFamily,
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
        Extension.History.configure({
          newGroupDelay: 500,
          depth: 100,
        }),
        Extension.OrderedList,
        Extension.ListItem.extend({
          content: 'text*', // allow nested lists
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
        Extension.TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Collaboration.configure({
          document: provider?.document ?? doc,
        }),
      ],
      editable: true,
      editorProps: isEditable ? Extension.editorProps.editable : Extension.editorProps.noneditable,
      onSelectionUpdate: ({ editor }) => {
        if (!paramUpdate) return null;
        // if (!user) return null;
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setSelectionRange({
          type: '',
          start: from,
          end: to,
          content: editor?.state.doc.textBetween(from, to, ''),
        });
        if (!editor?.isActive('suggestion') && !editor?.isActive('post') && !firsttime) {
          if (param.get('with') === 'Suggestion' || param.get('with') === 'Post') {
            setSearchParams((p) => {
              p.delete('thread');
              p.set('with', 'all');
              return p;
            });
          }
        }
        firsttime = false;
      },
      onCreate({ editor }) {
        setTimeout(() => {
          if (editor.getText() === '') {
            if (content) {
              let content_with_list = convertPTagsToOlAfterH1(content);
              editor?.commands.setContent(content_with_list);
            }
          }
        }, 2000);
      },
    },
    [],
  );
  return editor;
};
export default useEditorInstance;
