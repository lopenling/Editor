import { Link, useSearchParams } from '@remix-run/react';
import { useSearchAcrossAllText } from '../hooks/searchInstance';
import { Avatar } from 'flowbite-react';

export function SearchListFromText() {
  let { list: data, loading } = useSearchAcrossAllText();
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex max-h-[25vh] mt-2 overflow-y-auto m-2 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-0 ">
      {data.length > 0 && <h3 className="px-2">Related Text:</h3>}
      {data.map((list, index) => (
        <ResultLink key={`id${index}`} list={list} />
      ))}
    </div>
  );
}

function ResultLink({ list }: { list: any }) {
  const { textId, results } = list;
  const result = results[0];
  return (
    <Link
      to={`/text/${textId}/page/1`}
      className="font-monlam  hover:bg-gray-50 pb-2 pt-3 px-2 transition-all duration-75"
      prefetch="intent"
    >
      <div className="flex gap-4 items-center">
        <Avatar img={result.author.avatarUrl} title={result.author.username} />
        <div className="flex-1">
          <div className="text-[8px] md:text-[10px]  leading-normal">{result.name}</div>
          <div className="flex justify-between mt-2">
            {result && result[1]}
            <div className="text-gray-400 text-[10px]">{result.total} matches</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
