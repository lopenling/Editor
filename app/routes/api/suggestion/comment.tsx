import { ActionFunction } from "@remix-run/server-runtime";
import { createCommentOnSuggestion } from "~/model/suggestionComment";
import { getUserSession } from "~/services/session.server";
import { uploadAudio } from "~/services/uploadAudio";

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const user = await getUserSession(request);
  let Obj = Object.fromEntries(formData);
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
  if (request.method === "POST") {
    let comment = Obj.commentContent as string;
    let id = Obj.id as string;
    let createComment = await createCommentOnSuggestion(
      comment,
      id,
      user.id,
      audioUrl
    );
    return createComment;
  }
  return null;
};
