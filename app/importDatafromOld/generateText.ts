import data from "~/importDatafromOld/data.json";
import { textData } from "~/importDatafromOld/text.js";
export default function generateText() {
  const text = textData;
  let newText = text;

  for (const tag of data) {
    const startTag = `<post class="post" id="${tag.id}">`;
    const endTag = `</post>`;
    const startIndex = tag.start;
    const endIndex = tag.end + startTag.length;

    newText =
      newText.slice(0, startIndex) +
      startTag +
      newText.slice(startIndex, endIndex) +
      endTag +
      newText.slice(endIndex);
  }
  return newText;
}
