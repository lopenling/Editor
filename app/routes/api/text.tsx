import { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import { findTextByTextId } from "~/model/text";

export let loader: LoaderFunction = async ({ request }) => {
  const textId = new URL(request.url).searchParams.get("textId") ?? "";
  const text = await findTextByTextId(parseInt(textId), true);
  return json(text, {
    headers: {
      "cache-control":
        "public, max-age=600, s-maxage=604800, stale-while-revalidate=31540000000",
    },
  });
};
