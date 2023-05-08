import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByTextId, updateText, updateText } from "~/model/text";

export let loader: LoaderFunction = async ({ request }) => {
  const textId = new URL(request.url).searchParams.get("textId") ?? "";
  const text = await findTextByTextId(parseInt(textId), true);
  return json(text, {
    // headers: {
    //   "cache-control":
    //     "public, max-age=6000, s-maxage=604800, stale-while-revalidate=31540000000",
    // },
  });
};
export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const content = data.get("content") as string;
  const id = data.get("id") as string;
  try {
    const res = await updateText(parseInt(id), content);
    return res;
  } catch (e) {
    return false;
  }
};
