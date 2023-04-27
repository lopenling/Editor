import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import {
  createSuggestion,
  deleteSuggestion,
  getSuggestionWithThreadId,
  updateSuggestionContent,
} from "~/model/suggestion";
import { uploadAudio } from "~/services/uploadAudio";

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
    const file = Obj.file;
    let audioUrl = null;
    if (file) {
      try {
        audioUrl = await uploadAudio(formData);
      } catch (e) {
        throw new Error(e.message);
      }
    } else {
      audioUrl = "";
    }
    try {
      let responce = await createSuggestion({
        oldValue,
        newValue,
        textId,
        userId,
        threadId,
        audioUrl,
      });
      return { responce };
    } catch (e) {
      return { message: e };
    }
  }
  if (request.method === "DELETE") {
    let id = Obj.id as string;
    let res = await deleteSuggestion(id);
    let remainingdata = await getSuggestionWithThreadId(res.threadId);
    return {
      deleted: res,
      remain: remainingdata?.length,
    };
  }
  if (request.method === "PATCH") {
    let id = Obj.id as string;
    let newValue = Obj.newValue as string;
    let res = await updateSuggestionContent(id, newValue);
    return res;
  }
  return null;
};
