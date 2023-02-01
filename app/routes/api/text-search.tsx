import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { db } from "~/db.server";
import { searchTextWithName } from "~/model/text";

export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get("textSearch") ?? "";

  if (searchText === "") return json([]);
  try {
    let textList = await searchTextWithName(searchText);

    return json(textList);
  } catch (e) {
    return e;
  }
};
