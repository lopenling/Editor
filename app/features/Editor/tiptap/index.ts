import Paragraph from '@tiptap/extension-paragraph';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import HardBreak from '@tiptap/extension-hard-break';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import { Suggestion } from '~/features/Editor/tiptap/tiptap-extension/suggestion';
import PostMark from '~/features/Editor/tiptap/tiptap-extension/postMark';
import { SearchAndReplace } from '~/features/Editor/tiptap/tiptap-extension/searchAndReplace';
import editorProps from './events';
export {
  Paragraph,
  Document,
  Text,
  Bold,
  HardBreak,
  Highlight,
  TextStyle,
  FontFamily,
  Suggestion,
  PostMark,
  SearchAndReplace,
  editorProps,
};
