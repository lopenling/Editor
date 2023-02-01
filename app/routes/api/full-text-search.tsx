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
  const split = text.content?.split(" ").map((l, index) => {
    if (index === text.content.split(" ").length - 1) return l;
    return l + " ";
  });
  let start = 0;
  const jsonList = split.map((l, index) => {
    if (index !== 0) start = start + split[index - 1].length;
    return {
      start,
      length: l.length,
      text: l,
      searchString: searchString,
    };
  });
  let results = jsonList.filter((l) => l.text.includes(searchString));

  return json(results);
};
