import { useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import { useState, useEffect, memo } from "react";
import { searchSingleText } from "../lib";
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
  const [selectedSearch, setSelectedSearch] = useState<locationType>(null);
  const [searchString, setSearchString] = useState("");
  const [searchState, setSearchState] = useState<null | "searching" | "done">(
    null
  );
  const [searchLocations, setSearchLocation] = useState<locationType[]>([]);
  function nextSearch() {
    if (
      index > -1 &&
      searchLocations?.length &&
      index < searchLocations?.length
    ) {
      setIndex((prev) => prev + 1);
    }
  }
  function prevSearch() {
    if (index > 1 && searchLocations?.length) {
      setIndex((prev) => prev - 1);
    }
  }
  useEffect(() => {
    setIndex(1);
  }, [searchLocations]);
  useEffect(() => {
    if (searchLocations?.length) {
      setSelectedSearch(searchLocations[index - 1]);
    }
  }, [index, searchLocations]);
  useEffect(() => {
    if (selectedSearch?.start)
      editor
        ?.chain()
        .focus()
        .setTextSelection(selectedSearch.start)
        .scrollIntoView()
        .run();
  }, [selectedSearch]);
  function handleSearch() {
    if (searchString.length > 0) {
      setSearchState("searching");
      let content = editor.getText();
      let locations = searchSingleText(content, searchString);
      setSearchLocation(locations);
      editor.commands.setSearchTerm(searchString);
      setSearchState("done");
    }
  }
  function handleReset() {
    editor.commands.setSearchTerm("");
    setSearchString("");
    setSearchLocation([]);
  }

  return (
    <div
      className={`searchForm items-center p-2 flex flex-row space-x-2.5 rounded-lg rounded-bl-lg border  
     `}
    >
      <div className="flex w-full">
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
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className={` h-full w-full border-1 bg-transparent text-sm leading-tight text-gray-500 outline-1 focus:border-transparent focus:ring-1`}
          ></input>
        </form>
        <input name="textId" readOnly value={data.page.id} hidden />
        <button type="submit" hidden></button>

        {searchState === "done" && searchString && searchString !== "" && (
          <button
            type="reset"
            onClick={() => {
              handleReset();
              editor.commands.setSearchTerm("");
            }}
          >
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.36123 2.57575C2.46437 2.46327 2.60424 2.40008 2.75008 2.40008C2.89592 2.40008 3.03579 2.46327 3.13893 2.57575L5.50008 5.15155L7.86123 2.57575C7.91196 2.51845 7.97265 2.47274 8.03976 2.44129C8.10686 2.40984 8.17903 2.39329 8.25206 2.3926C8.32509 2.39191 8.39751 2.40709 8.4651 2.43726C8.5327 2.46743 8.5941 2.51198 8.64574 2.56831C8.69739 2.62465 8.73823 2.69164 8.76588 2.76538C8.79353 2.83912 8.80745 2.91812 8.80682 2.99779C8.80618 3.07746 8.79101 3.15619 8.76218 3.22939C8.73336 3.3026 8.69146 3.3688 8.63893 3.42415L6.27778 5.99995L8.63893 8.57575C8.73911 8.68891 8.79455 8.84047 8.7933 8.99779C8.79205 9.15511 8.7342 9.3056 8.63223 9.41684C8.53025 9.52809 8.39231 9.59119 8.2481 9.59256C8.10389 9.59392 7.96496 9.53345 7.86123 9.42415L5.50008 6.84835L3.13893 9.42415C3.0352 9.53345 2.89627 9.59392 2.75206 9.59256C2.60785 9.59119 2.4699 9.52809 2.36793 9.41684C2.26595 9.3056 2.20811 9.15511 2.20686 8.99779C2.2056 8.84047 2.26104 8.68891 2.36123 8.57575L4.72238 5.99995L2.36123 3.42415C2.25812 3.31163 2.2002 3.15905 2.2002 2.99995C2.2002 2.84085 2.25812 2.68827 2.36123 2.57575Z"
                fill="#9CA3AF"
              />
            </svg>
          </button>
        )}
      </div>
      {searchLocations?.length > 0 ? (
        <>
          <p className=" text-sm leading-tight text-gray-500">
            {searchLocations?.length ? selectedSearch?.index : 0}/
            {searchLocations?.length ? searchLocations?.length : 0}
          </p>
          <div className="flex gap-2 rounded-md shadow-sm" role="group">
            <div className="cursor-pointer" onClick={prevSearch}>
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6665 7.50001L7.49984 1.66667L13.3332 7.50001"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="cursor-pointer mr-3" onClick={nextSearch}>
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3332 1.5L7.49984 7.33333L1.6665 1.5"
                  stroke="#6B7280"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
