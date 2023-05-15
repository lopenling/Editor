import { ActionFunction } from "@remix-run/server-runtime";
import { createCommentOnSuggestion } from "~/model/suggestionComment";
import { getUserSession } from "~/services/session.server";

import { uploadAudio } from "~/services/uploadAudio.server";
import type { ActionArgs, UploadHandler } from "@remix-run/node";
import {
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
export let action: ActionFunction = async ({ request }: ActionArgs) => {
  const user = await getUserSession(request);
  const uploadHandler: UploadHandler = composeUploadHandlers(
    uploadAudio,
    createMemoryUploadHandler()
  );
  const formData = await parseMultipartFormData(request, uploadHandler);
  let Obj = Object.fromEntries(formData);
  if (request.method === "POST") {
    let comment = Obj.commentContent as string;
    let id = Obj.id as string;
    let audioUrl = Obj.file as string;
    let type = Obj.type as "support" | "reject" | null;
    let createComment = await createCommentOnSuggestion(
      comment,
      id,
      user.id,
      audioUrl,
      type
    );
    return createComment;
  }
  return null;
};
