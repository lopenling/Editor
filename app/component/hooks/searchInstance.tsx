import { useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { checkUnknown } from '~/features/Editor/lib';

export function useSearchInstance() {
  let { page } = useLoaderData();
  let [list, setList] = useState([]);
  let fullText = checkUnknown(page.content.replace(/[\r\n]+/g, '<p/><p>'));
  let [param, setParam] = useSearchParams();
  let searchTerm = param.get('s');
  useEffect(() => {
    if (searchTerm) {
      let data = findOccurrencesWithContext(fullText, searchTerm);
      setList(data);
    }
  }, [searchTerm]);
  return list;
}
function findOccurrencesWithContext(fullText: string, targetString: string | null, contextRange = 20) {
  const occurrences = [];
  // Check if fullText or targetString is undefined or null
  if (!fullText || !targetString) {
    console.error(fullText, targetString);
    return occurrences;
  }
  const targetLength = targetString.length;

  let index = fullText.indexOf(targetString);
  while (index !== -1) {
    const start = Math.max(0, index);
    const end = Math.min(fullText.length, index + targetLength + contextRange);
    const at = fullText.indexOf(targetString, index);

    const occurrence = {
      start,
      end,
      at,
      context: fullText.substring(start, end),
    };

    occurrences.push(occurrence);
    index = fullText.indexOf(targetString, index + 1);
  }

  return occurrences;
}

export function useSearchAcrossAllText() {
  let { text } = useLoaderData();
  let [param, setParam] = useSearchParams();
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(false);
  let searchTerm = param.get('s');
  let fetcher = useFetcher();
  useEffect(() => {
    if (searchTerm) {
      fetcher.load(`/api/text?search=${searchTerm}`);
      setLoading(true);
    }
  }, [searchTerm]);
  useEffect(() => {
    if (fetcher.data) {
      let data = fetcher.data as [];
      const filteredData = data.filter((item) => item.results[0].name !== text.name);

      setList(filteredData);
    } else {
      setList([]);
    }
    setLoading(false);
  }, [fetcher.data]);

  return { list, loading };
}
