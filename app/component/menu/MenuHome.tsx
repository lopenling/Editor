import { useSearchParams } from '@remix-run/react';

function MenuHome() {
  let li_className = 'hover:text-gray-500 cursor-pointer';
  const [, setSearchParams] = useSearchParams();
  function handleMenuClick(value: string) {
    setSearchParams((p) => {
      p.set('with', value);
      return p;
    });
  }
  return (
    <div className="border-l p-3 flex-1">
      <ul className="p-2 text-gray-400 capitalize text-lg">
        <li className={li_className}>
          <button type="button" onClick={() => handleMenuClick('TableOfContent')}>
            Table of Contents
          </button>
        </li>
        <li className={li_className}>
          <button type="button" onClick={() => handleMenuClick('Search')}>
            Search in Text
          </button>
        </li>
        <li className={li_className}>
          <button type="button" onClick={() => handleMenuClick('Translations')}>
            Translations
          </button>
        </li>
        <li className={li_className}>
          <button type="button" onClick={() => handleMenuClick('Post')}>
            Post
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MenuHome;
