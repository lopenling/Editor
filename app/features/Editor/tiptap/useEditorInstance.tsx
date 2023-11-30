import * as Extension from '~/features/Editor/tiptap';
import { useEditor } from '@tiptap/react';
import { useSetRecoilState } from 'recoil';
import { selectedTextOnEditor } from '~/states';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import convertPTagsToOlAfterH1 from '~/lib/ConvertpToList';
import { useEffect, useRef } from 'react';
import { HocuspocusProvider, WebSocketStatus } from '@hocuspocus/provider';
import * as Y from 'yjs';
import { Collaboration } from '@tiptap/extension-collaboration';
import { TiptapCollabProvider } from '@hocuspocus/provider';
let firsttime = true;

type useEditorProps = {
  name?: string;
  content?: string;
  isEditable?: boolean;
  paramUpdate?: boolean;
};
const useEditorInstance = ({ name, content, isEditable, paramUpdate = true }: useEditorProps) => {
  const setSelectionRange = useSetRecoilState(selectedTextOnEditor);
  const doc = new Y.Doc();
  const [param, setSearchParams] = useSearchParams();

  let documentName = name ?? 'default';
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

  useEffect(() => {
    const provider = new TiptapCollabProvider({
      name: documentName, // any identifier - all connections sharing the same identifier will be synced
      appId: '7j9y6m10', // replace with YOUR_APP_ID
      token: 'notoken', // replace with your JWT
      document: doc,
    });
    return () => {
      provider.destroy();
    };
  }, [documentName]);

  let editor = useEditor({
    extensions: [
      Extension.Document,
      Extension.Heading.configure({
        levels: [1, 2, 3],
      }),
      Extension.Paragraph,
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
      }), // postmark
      Extension.TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Collaboration.configure({
        document: doc,
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
  });
  useEffect(() => {
    if (content) {
      let content_with_list = convertPTagsToOlAfterH1(content);
      editor?.commands.setContent(content_with_list);
    }
    return () => editor?.destroy();
  }, [content, editor]);

  return editor;
};
export default useEditorInstance;
