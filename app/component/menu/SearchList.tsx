import { Link, useSearchParams } from '@remix-run/react';
import searchInstance from '../hooks/searchInstance';
import { useState } from 'react';
import { Editor } from '@tiptap/react';

function SearhList({ editor }: { editor: Editor }) {
  let [param, setParam] = useSearchParams();
  let searchTerm = param.get('s');
  let data = searchInstance();

  const handleSearch = (list) => {
    if (list?.at) editor?.chain().focus().setTextSelection(list.at).scrollIntoView().run();
  };

  return (
    <div className="flex-1 h-full p-2">
      <div>
        {data.map((list, index) => {
          const parts = list.context.split(new RegExp(`(${searchTerm})`, 'gi'));
          return (
            <div key={index} className="p-2 border rounded-md mb-2 cursor-pointer" onClick={() => handleSearch(list)}>
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

export default SearhList;
