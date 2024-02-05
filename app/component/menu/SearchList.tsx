import { Link } from '@remix-run/react';

const lists = [
  { range: 'hello is there', search: 'hello', textName: 'golden' },
  { range: 'maybe this is one', search: 'this', textName: '' },
  { range: 'one day we will', search: 'day', textName: 'merry' },
  { range: 'there goes the man', search: 'goes', textName: '' },
];

function SearhList() {
  return (
    <div className="flex-1 h-full p-2">
      <div className="">
        {lists.map((list, index) => {
          const parts = list.range.split(new RegExp(`(${list.search})`, 'gi'));
          return (
            <div key={index} className="p-2 border rounded-md mb-2">
              {parts.map((part, partIndex) => {
                // Check if the part is the search text
                const isSearchText = part.toLowerCase() === list.search.toLowerCase();
                return (
                  <Link to={''} key={partIndex}>
                    {isSearchText ? (
                      // Wrap search text with spaces in a <strong> tag
                      <strong>&nbsp;{part}&nbsp;</strong>
                    ) : (
                      // Render non-search text normally
                      <span>{part}</span>
                    )}
                  </Link>
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
