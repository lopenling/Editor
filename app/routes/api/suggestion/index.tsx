import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import {
  createSuggestion,
  getSuggestionWithThreadId,
} from "~/model/suggestion";

export let loader: LoaderFunction = async ({ request }) => {
  const suggestionId =
    new URL(request.url).searchParams.get("suggestionId") ?? "";
  const suggestion = await getSuggestionWithThreadId(suggestionId);
  return json(suggestion);
};
export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const oldValue = data.get("oldValue") as string;
  const textId = data.get("textId") as string;
  const newValue = data.get("newValue") as string;
  const userId = data.get("userId") as string;
  const threadId = data.get("threadId") as string;

  let responce = await createSuggestion({
    oldValue,
    newValue,
    textId,
    userId,
    threadId,
  });
  console.log(responce);
  return null;
};
