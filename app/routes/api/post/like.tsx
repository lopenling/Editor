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

  let postId = Obj.id as string;
  let userId = Obj.userId as string;
  const likedUsers = await findPostByUserLiked(postId, userId);
  try {
    let response = await updatePostLike(postId, userId, likedUsers === null);
    return response.likedBy;
  } catch (e) {
    console.log(e);
  }

  return { success: true };
};
