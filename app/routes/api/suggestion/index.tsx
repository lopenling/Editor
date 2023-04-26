import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import {
  createSuggestion,
  deleteSuggestion,
  findAllSuggestionByTextId,
  getSuggestionWithThreadId,
} from "~/model/suggestion";

export let loader: LoaderFunction = async ({ request }) => {
  const suggestionId =
    new URL(request.url).searchParams.get("suggestionId") ?? "";
  const suggestion = await getSuggestionWithThreadId(suggestionId);
  return json(suggestion);
};
export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  if (request.method === "POST") {
    const oldValue = Obj.oldValue as string;
    const textId = Obj.textId as string;
    const newValue = Obj.newValue as string;
    const userId = Obj.userId as string;
    const threadId = Obj.threadId as string;
    try {
      let responce = await createSuggestion({
        oldValue,
        newValue,
        textId,
        userId,
        threadId,
      });
      return { responce };
    } catch (e) {
      return { message: e };
    }
  }
  if (request.method === "DELETE") {
    let id = Obj.id as string;
    let res = await deleteSuggestion(id);
    let remainingdata = await findAllSuggestionByTextId(res.textId);
    return {
      deleted: res,
      remain: remainingdata,
    };
  }
  return null;
};
