import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import React from "react";
export default function SearchString({
  setSearchLocation,
}: {
  setSearchLocation: (list: any) => void;
}) {
  const data = useLoaderData();
  const fullTextSearch = useFetcher();
  const inputRef = React.useRef();
  if (fullTextSearch.data) setSearchLocation(fullTextSearch.data);
  return (
    <div
      style={{
        maxHeight: "inherit",
      }}
      className="inline-flex items-center justify-start space-x-2.5 rounded-lg rounded-bl-lg border border-gray-300 bg-gray-50  "
    >
      {" "}
      <div className="flex items-center justify-between space-x-2.5">
        <fullTextSearch.Form
          className="flex w-full"
          method="post"
          action="/api/full-text-search"
        >
          <input
            ref={inputRef}
            name="searchString"
            type="text"
            placeholder="type here"
            style={{ minWidth: 40, width: "fit-content" }}
            className="h-full border-none bg-transparent text-sm leading-tight text-gray-500 outline-0 focus:border-transparent focus:ring-0"
          ></input>
          <input name="textId" readOnly value={data.text.id} hidden />
          <button type="submit" hidden></button>
          <button type="reset">
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
        </fullTextSearch.Form>
      </div>
      <p className="pr-3 text-sm leading-tight text-gray-500">
        0/{fullTextSearch.data?.length ? fullTextSearch.data?.length : 0}
      </p>
    </div>
  );
}

// <p >|</p>
