import { Link, useSearchParams } from '@remix-run/react';
import { useSearchInstance } from '../hooks/searchInstance';

export function SearchList({ editor }: { editor: any }) {
  let [param, setParam] = useSearchParams();
  let searchTerm = param.get('s');
  let data = useSearchInstance();
  function handleScroll(start: number) {
    if (start) editor?.chain().focus().setTextSelection(start).scrollIntoView().run();
  }
  return (
    <div className="flex-1 p-2  max-h-[40vh] overflow-y-scroll ">
      <div className="h-full">
        {data.map((list, index) => {
          const parts = list.context.split(new RegExp(`(${searchTerm})`, 'gi'));
          return (
            <div key={index} onClick={() => handleScroll(list?.start)} className="p-2 border rounded-md mb-2">
              {parts.map((part, partIndex) => {
                // Check if the part is the search text
                const isSearchText = part === searchTerm;
                return (
                  <span key={partIndex}>
                    {isSearchText ? (
                      // Wrap search text with spaces in a <strong> tag
                      <strong>{part}</strong>
                    ) : (
                      // Render non-search text normally
                      <span>{part}</span>
                    )}
                  </span>
                );
              })}
              <div className="text-xs">{list.textName && <span>Text Name:{list.textName}</span>}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
