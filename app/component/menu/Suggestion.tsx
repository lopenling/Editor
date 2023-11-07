import { Editor } from '@tiptap/react';
import { SuggestionSidebar } from '~/features/Suggestion';

function Suggestion({ editor }: { editor: Editor }) {
  return <SuggestionSidebar editor={editor} />;
}

export default Suggestion;
