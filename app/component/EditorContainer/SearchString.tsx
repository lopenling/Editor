import { useFetcher, useLoaderData } from "@remix-run/react";
import { Editor } from "@tiptap/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import searchFullText from "~/utility/searchFullText";

type locationType = {
  start: number;
  length: number;
  text: string;
  index: number;
  searchString: string;
} | null;
export default function SearchString({ editor }: { editor: Editor }) {
  const data = useLoaderData();
  const [index, setIndex] = useState(1);
  const [selectedSearch, setSelectedSearch] = useState<locationType>(null);
  const [searchString, setSearchString] = useState("");
  const [searchState, setSearchState] = useState<null | "searching" | "done">(
    null
  );
  const [searchLocations, setSearchLocation] = useState(null);
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
    setSearchState("searching");
    let content = editor.getText();
    let locations = searchFullText(content, searchString);
    setSearchLocation(locations);
    editor.commands.setSearchTerm(searchString);
    setSearchState("done");
  }
  function handleReset() {
    editor.commands.setSearchTerm("");
    setSearchString("");
    setSearchLocation(null);
  }

  return (
    <div className="items-center flex flex-row space-x-2.5 rounded-lg rounded-bl-lg border border-gray-300 bg-gray-50  ">
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
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="h-full w-full border-none bg-transparent text-sm leading-tight text-gray-500 outline-0 focus:border-transparent focus:ring-0"
          ></input>
        </form>
        <input name="textId" readOnly value={data.text.id} hidden />
        <button type="submit" hidden></button>

        {searchState === "done" && (
          <button
            type="reset"
            onClick={() => {
              handleReset();
              editor.commands.setSearchTerm(null);
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
      {searchState === "searching" ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <p className=" text-sm leading-tight text-gray-500">
          {searchLocations?.length ? selectedSearch?.index : 0}/
          {searchLocations?.length ? searchLocations?.length : 0}
        </p>
      )}
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
    </div>
  );
}
