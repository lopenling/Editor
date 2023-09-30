import { Editor } from '@tiptap/react';
import React from 'react';
import { SearchString } from '~/features/Editor';

function Search({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  return (
    <div>
      <SearchString editor={editor} />
    </div>
  );
}

export default Search;
