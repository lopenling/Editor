import Paragraph from '@tiptap/extension-paragraph';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import HardBreak from '@tiptap/extension-hard-break';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Italic from '@tiptap/extension-italic';
import Heading from '@tiptap/extension-heading';
import { Suggestion } from '~/features/Editor/tiptap/tiptap-extension/suggestion';
import PostMark from '~/features/Editor/tiptap/tiptap-extension/postMark';
import { SearchAndReplace } from '~/features/Editor/tiptap/tiptap-extension/searchAndReplace';
import editorProps from './events';
import History from '@tiptap/extension-history';
import TextAlign from '@tiptap/extension-text-align';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
export {
  Heading,
  Paragraph,
  History,
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
  Placeholder,
  Italic,
  Underline,
  ListItem,
  OrderedList,
  TextAlign,
};
