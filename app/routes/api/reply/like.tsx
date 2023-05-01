import { ActionFunction, json } from "@remix-run/server-runtime";
import { findPostByUserLiked, updatePostLike } from "~/model/post";
import { createReply, findReply, updateReply } from "~/model/reply";
import {
  findSuggestionByUserLiked,
  updateSuggestionLike,
} from "~/model/suggestion";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);

  let post_id = Obj.post_id as string;
  let likedBy = Obj.likedBy as string;
  let id = Obj.id as string;
  let create = Obj.create as string;
  //check if user already like it
  if (create === "create") {
    await createReply(id, post_id, likedBy);
  }
  if (create === "update") {
    const alreadyLiked = await findReply(id, likedBy);
    const actionPromise = updateReply(id, likedBy, !alreadyLiked);
    await actionPromise;
  }
  return { success: true };
};
