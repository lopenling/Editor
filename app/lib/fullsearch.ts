export const fullSearch = (textList, search_term) => {
  let results = {};
  const extract_length = 60;
  const left = parseInt((extract_length - search_term.length) / 2);
  const delimiters = "།་ ";

  let delimiter_regex = new RegExp(`[${delimiters}]`, "g");
  const max_results = 0;
  for (let text of textList) {
    const content_length = text.content.length;
    const textWithNewlines = text.content.replace(
      /<br\s*\/?\s*(class\s*=\s*['"]\S*['"])?\s*>/gi,
      "\n"
    );
    let content = textWithNewlines.replace(/(<([^>]+)>)/gi, "");
    let title = text.name;
    let contentMatch = content.matchAll(new RegExp(search_term, "g"));
    let titleMatch = title.matchAll(new RegExp(search_term, "g"));
    for (let m of titleMatch)
      if (!results[text.id]) {
        results[text.id] = {
          name: text.name,
          results: [],
          total: 0,
          extra: false,
        };
      }
    for (let m of contentMatch) {
      if (!results[text.id]) {
        results[text.id] = {
          name: text.name,
          results: [],
          total: 0,
          extra: false,
        };
      }
      if (
        max_results == 0 ||
        (max_results > 0 && results[text.id]["total"] < max_results)
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
        let delimter_matches = Array.from(
          extract.matchAll(delimiter_regex),
          (m) => m.index
        );

        if (delimter_matches.length > 0) {
          const first_match = delimter_matches[0];
          start += first_match;
        }

        if (delimter_matches.length > 1) {
          const last_match = delimter_matches[delimter_matches.length - 1];
          end = start + last_match - delimter_matches[0];
        } else {
          end = extract.length;
        }

        extract = extract.substring(0, end);
        results[text.id]["results"].push([m.index, extract]);
        results[text.id]["total"] += 1;
      }

      if (results[text.id]["total"] == max_results) {
        results[text.id]["extra"] = true;
        break;
      }
    }
  }
  return results;
};
