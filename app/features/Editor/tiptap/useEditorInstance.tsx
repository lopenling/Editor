import * as Extension from '~/features/Editor/tiptap';
import { useEditor } from '@tiptap/react';
import { useSetRecoilState } from 'recoil';
import { selectedTextOnEditor } from '~/states';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import convertPTagsToOlAfterH1 from '~/lib/ConvertpToList';
import { useEffect, useMemo } from 'react';
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
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const [param, setSearchParams] = useSearchParams();
  let documentName = name;
  const { user } = useLoaderData();
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

  let provider;

  useEffect(() => {
    if (user && name) {
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

    return () => {
      doc.destroy();
    };
  }, [documentName]);

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
        // CollaborationCursor.configure({
        //   provider: provider,
        // }),
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
      onCreate({ editor }) {
        setTimeout(() => {
          if (editor.getText() === '') {
            if (content) {
              let content_with_list = convertPTagsToOlAfterH1(content);
              editor?.commands.setContent(content_with_list);
              editor.chain().focus().updateUser({ name: user.username, color: '#F98181' }).run();
            }
          }
        }, 2000);
      },
    },
    [provider],
  );

  useEffect(() => {
    if (editor && user?.username) {
      let currentUser = { name: user?.username, color: '#F98181' };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }

    return () => {
      editor?.destroy();
    };
  }, [editor, user?.username]);

  return editor;
};
export default useEditorInstance;
