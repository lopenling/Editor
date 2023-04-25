import { ActionFunction } from "@remix-run/server-runtime";
import { createCommentOnSuggestion } from "~/model/suggestionComment";
import { getUserSession } from "~/services/session.server";

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const user = await getUserSession(request);
  let Obj = Object.fromEntries(formData);
  if (request.method === "POST") {
    let comment = Obj.commentContent as string;
    let id = Obj.id as string;
    let createComment = await createCommentOnSuggestion(comment, id, user.id);
    return createComment;
  }
  return null;
};
