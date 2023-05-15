import { LoaderFunction, ActionFunction } from "@remix-run/server-runtime";
import { json } from "react-router";
import {
  createSuggestion,
  deleteSuggestion,
  getSuggestionWithThreadId,
  updateSuggestionContent,
} from "~/model/suggestion";
import { uploadAudio } from "~/services/uploadAudio.server";
import type { ActionArgs, UploadHandler } from "@remix-run/node";
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
export let loader: LoaderFunction = async ({ request }) => {
  const suggestionId =
    new URL(request.url).searchParams.get("suggestionId") ?? "";
  const suggestion = await getSuggestionWithThreadId(suggestionId);
  return json(suggestion);
};
export let action: ActionFunction = async ({ request }: ActionArgs) => {
  if (request.method === "POST") {
    const uploadHandler: UploadHandler = composeUploadHandlers(
      uploadAudio,
      createMemoryUploadHandler()
    );
    const formData = await parseMultipartFormData(request, uploadHandler);
    let Obj = Object.fromEntries(formData);
    const oldValue = Obj.oldValue as string;
    const textId = Obj.textId as string;
    const newValue = Obj.newValue as string;
    const userId = Obj.userId as string;
    const threadId = Obj.threadId as string;
    const filepath = Obj.file as string;
    try {
      let responce = await createSuggestion({
        oldValue,
        newValue,
        textId,
        userId,
        threadId,
        audioUrl: filepath,
      });
      return { responce };
    } catch (e) {
      return { message: e };
    }
  } else {
    let formData = await request.formData();
    let Obj = Object.fromEntries(formData);
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
  }
  return null;
};
