function findStringOccurrences(text, searchString) {
  const regex = new RegExp(searchString, "gi");
  const matches = text.matchAll(regex);
  const indices = [];
  for (const match of matches) {
    indices.push(match.index);
  }
  return indices;
}

function searchSingleText(fullText, searchString) {
  let location = findStringOccurrences(fullText, searchString);
  const jsonList = location.map((l, index) => {
    return {
      start: l,
      length: searchString.length,
      text: "",
      index: index + 1,
      searchString: searchString,
    };
  });
  return jsonList;
}
export default searchSingleText;
