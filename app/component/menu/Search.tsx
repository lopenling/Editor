import { Editor } from '@tiptap/react';
import { SearchString } from '~/features/Editor';

import { SearchListFromText } from './SearchListFromTexts';
import { useSearchParams } from '@remix-run/react';
import { SearchList } from './SearchList';

function Search({ editor }: { editor: Editor | null }) {
  if (!editor) return null;
  let [param, setParam] = useSearchParams();
  let searchTerm = param.get('s');
  return (
    <div className="flex flex-col  flex-1">
      <SearchString editor={editor} />
      {searchTerm && (
        <>
          <SearchList editor={editor} />
          <SearchListFromText />
          <hr />
        </>
      )}
    </div>
  );
}

export default Search;
