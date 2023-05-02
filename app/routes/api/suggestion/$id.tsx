import { LoaderFunction } from "@remix-run/node";
import { getSuggestionWithThreadId } from "~/model/suggestion";

export const loader: LoaderFunction = async ({ request, params }) => {
  let id = params.id;
  let suggestion = await getSuggestionWithThreadId(id);

  return { suggestion, mostLiked: "hello" };
};
