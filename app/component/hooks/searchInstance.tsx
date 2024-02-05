import { useLoaderData, useSearchParams } from '@remix-run/react';
import { checkUnknown } from '~/features/Editor/lib';

function searchInstance() {
  let { page } = useLoaderData();
  let fullText = checkUnknown(page.content.replace(/[\r\n]+/g, '<p/><p>'));
  let [param, setParam] = useSearchParams();
  let searchTerm = param.get('s');
  if (searchTerm !== null) {
    let data = findOccurrencesWithContext(fullText, searchTerm);
    return data;
  }
  return [];
}

export default searchInstance;

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
    const start = Math.max(0, index - contextRange);
    const end = Math.min(fullText.length, index + targetLength + contextRange);

    const occurrence = {
      start,
      end,
      context: fullText.substring(start, end),
    };

    occurrences.push(occurrence);
    index = fullText.indexOf(targetString, index + 1);
  }

  return occurrences;
}
