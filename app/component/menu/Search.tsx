import { Editor } from '@tiptap/react';
import { SearchString } from '~/features/Editor';

import SearchList from './SearchList';

function Search({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <SearchString editor={editor} />
      <SearchList editor={editor} />
    </div>
  );
}

export default Search;
