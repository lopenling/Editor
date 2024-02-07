import { useLoaderData, useSearchParams } from '@remix-run/react';
import { Editor } from '@tiptap/react';
import { useState, useEffect, memo } from 'react';
import { searchSingleText } from '../lib';
import { RxCross2 } from 'react-icons/rx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
type locationType = {
  start: number;
  length: number;
  text: string;
  index: number;
  searchString: string;
} | null;
function SearchString({ editor }: { editor: Editor }) {
  const data = useLoaderData();
  const [index, setIndex] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get('s') ?? '');
  const [selectedSearch, setSelectedSearch] = useState<locationType>(null);
  const [searchLocations, setSearchLocation] = useState<locationType[]>([]);

  const searchString = searchParams.get('s') || '';

  function nextSearch() {
    if (index > -1 && searchLocations?.length && index < searchLocations?.length) {
      setIndex((prev) => prev + 1);
    }
  }
  function prevSearch() {
    if (index > 1 && searchLocations?.length) {
      setIndex((prev) => prev - 1);
    }
  }
  useEffect(() => {
    if (searchLocations?.length) {
      setSelectedSearch(searchLocations[index - 1]);
    }
  }, [index, searchLocations]);
  useEffect(() => {
    if (selectedSearch?.start) editor?.chain().focus().setTextSelection(selectedSearch.start).scrollIntoView().run();
  }, [selectedSearch]);
  useEffect(() => {
    if (!searchString || searchString.length === 0) {
      handleReset();
    } else {
      handleSearch();
    }
  }, [searchString]);
  function handleSearch() {
    if (input.length > 0) {
      setSearchParams((prev) => {
        prev.set('s', input);
        return prev;
      });

      let content = editor.getText();
      let locations = searchSingleText(content, input);
      setSearchLocation(locations);
      setIndex(1);
      editor.commands.setSearchTerm(input);
    }
  }
  function handleReset() {
    editor.commands.setSearchTerm('');
    setSearchParams((prev) => {
      prev.delete('s');
      return prev;
    });
    setInput('');
    setSearchLocation([]);
  }

  return (
    <div
      className={`searchForm flex flex-row items-center space-x-2.5 border p-2 sticky top-0 bg-white dark:bg-gray-800 z-10`}
    >
      <div className="flex w-full space-x-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex-1"
        >
          <input
            name="searchString"
            type="text"
            placeholder="search"
            autoFocus={true}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={` border-1 rounded-md h-full w-full bg-transparent text-sm leading-tight text-gray-500 dark:text-white outline-1 focus:border-transparent focus:ring-1`}
          ></input>
          <input name="textId" readOnly value={data.page.id} hidden />
          <button type="submit" hidden></button>
        </form>

        {searchString && (
          <button
            type="reset"
            onClick={() => {
              handleReset();
              editor.commands.setSearchTerm('');
            }}
          >
            <RxCross2 />
          </button>
        )}
      </div>
      {searchLocations?.length > 0 ? (
        <>
          <p className=" text-sm leading-tight text-gray-500">
            {searchLocations?.length ? selectedSearch?.index : 0}/
            {searchLocations?.length ? searchLocations?.length : 0}
          </p>
          <div className="flex gap-2 rounded-md " role="group">
            <div className="cursor-pointer" onClick={prevSearch}>
              <FaAngleUp />
            </div>
            <div className="mr-3 cursor-pointer" onClick={nextSearch}>
              <FaAngleDown />
            </div>
          </div>
        </>
      ) : (
        <div className="pr-3 text-gray-400" onClick={handleSearch}></div>
      )}
    </div>
  );
}

export default memo(SearchString);
