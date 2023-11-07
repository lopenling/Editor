import SuggestionContainer from './SuggestionContainer';
import SuggestionForm from './SuggestionForm';
import Comment from './Comment';
import Suggestion from './Suggestion';
import { Editor } from '@tiptap/react';

export { SuggestionContainer, Comment, Suggestion, SuggestionForm };

export function SuggestionSidebar({ editor }: { editor: Editor }) {
  return (
    <div className="z-20 w-full border-l">
      <SuggestionForm editor={editor} />
      <SuggestionContainer editor={editor} />
    </div>
  );
}
