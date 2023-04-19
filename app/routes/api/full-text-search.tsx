import { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { db } from "~/db.server";
import { findTextByTextId } from "~/model/text";

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const searchString = formData.get("searchString") as string;
  const textId = formData.get("textId") as string;
  if (searchString === "") return json([]);
  let id = parseInt(textId);
  const text = await findTextByTextId(id, true);

  let location = findStringOccurrences(text?.content, searchString);

  const jsonList = location.map((l, index) => {
    return {
      start: l,
      length: searchString.length,
      text: "",
      index: index + 1,
      searchString: searchString,
    };
  });
  return json(jsonList);
};

function findStringOccurrences(text, searchString) {
  const regex = new RegExp(searchString, "gi");
  const matches = text.matchAll(regex);
  const indices = [];
  for (const match of matches) {
    indices.push(match.index);
  }
  return indices;
}
