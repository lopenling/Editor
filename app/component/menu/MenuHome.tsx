import { useSearchParams } from '@remix-run/react';

function MenuHome() {
  let li_className = 'hover:text-gray-500 cursor-pointer';
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="border-l p-3 flex-1">
      <ul className="p-2 text-gray-400 capitalize text-lg">
        <li className={li_className}>
          <button type="button" onClick={() => setSearchParams({ with: 'TableOfContent' })}>
            Table of Contents
          </button>
        </li>
        <li className={li_className}>
          <button type="button" onClick={() => setSearchParams({ with: 'Search' })}>
            Search in Text
          </button>
        </li>
        <li className={li_className}>
          <button type="button" onClick={() => setSearchParams({ with: 'Translations' })}>
            Translations
          </button>
        </li>
        <li className={li_className}>
          <button type="button" onClick={() => setSearchParams({ with: 'Post' })}>
            Post
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuHome;
