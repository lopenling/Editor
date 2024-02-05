import { Editor } from '@tiptap/react';
import React from 'react';
import { SearchString } from '~/features/Editor';
import SearchList from './SearchList';

function Search({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  return (
    <div className="flex flex-col flex-1">
      <SearchString editor={editor} />
      <SearchList />
    </div>
  );
}

export default Search;
