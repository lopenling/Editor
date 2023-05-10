export const fullSearch = (textList, search_term) => {
  const results = [];
  const extract_length = 60;
  const left = parseInt((extract_length - search_term.length) / 2);
  const delimiters = "།་ ";
  const delimiter_regex = new RegExp(`[${delimiters}]`, "g");
  const max_results = 0;

  for (let text of textList) {
    let id = text.id;
    const content_length = text.content.length;
    const textWithNewlines = text.content.replace(
      /<br\s*\/?\s*(class\s*=\s*['"]\S*['"])?\s*>/gi,
      "\n"
    );
    const content = textWithNewlines.replace(/(<([^>]+)>)/gi, "");
    const contentMatch = Array.from(
      content.matchAll(new RegExp(search_term, "g"))
    );
    const titleMatch = Array.from(
      text.name.matchAll(new RegExp(search_term, "g"))
    );

    if (titleMatch.length > 0 || contentMatch.length > 0) {
      const result = {
        id: 0,
        name: text.name,
        results: [],
        total: 0,
        extra: false,
      };

      for (let m of contentMatch) {
        if (
          max_results === 0 ||
          (max_results > 0 && result.total < max_results)
        ) {
          let start = m.index - left;

          if (start < 0) {
            start = 0;
          }
          let end = start + extract_length;
          if (end > content_length) {
            end = content_length;
          }
          let extract = content.substring(start, end);
          const delimiterMatches = Array.from(
            extract.matchAll(delimiter_regex),
            (m) => m.index
          );

          if (delimiterMatches.length > 0) {
            const firstMatch = delimiterMatches[0];
            start += firstMatch;
          }

          if (delimiterMatches.length > 1) {
            const lastMatch = delimiterMatches[delimiterMatches.length - 1];
            end = start + lastMatch - delimiterMatches[0];
          } else {
            end = extract.length;
          }

          extract = extract.substring(0, end);
          result.results.push([m.index, extract]);
          result.total += 1;
          result.id = text.id;
        }

        if (result.total === max_results) {
          result.extra = true;
          break;
        }
      }

      results.push(result);
    }
  }
  // Sort the array by the 'total' property in descending order

  results.sort((a, b) => b.total - a.total);
  console.log(results);
  return results;
};
