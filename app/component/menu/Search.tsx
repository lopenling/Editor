import { Editor } from '@tiptap/react';
import React from 'react';
import { SearchString } from '~/features/Editor';

function Search({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  return (
    <div className="flex flex-col flex-1">
      <SearchString editor={editor} />
      <div className="bg-green-200 flex-1 h-full">intext</div>
    </div>
  );
}

export default Search;
