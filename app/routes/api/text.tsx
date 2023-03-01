import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByTextId } from "~/model/text";

export let loader: LoaderFunction = async ({ request }) => {
  const textId = new URL(request.url).searchParams.get("textId") ?? "";
  const text = await findTextByTextId(parseInt(textId), true);
  return json(text);
};
