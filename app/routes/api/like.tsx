import { ActionFunction, json } from "@remix-run/server-runtime";
import { findPostByUserLiked, updatePostLike } from "~/model/post";
import { createReply, findReply, updateReply } from "~/model/reply";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  let _action = Obj._action as string;

  if (_action === "likeReply") {
    let post_id = Obj.post_id as string;
    let likedBy = Obj.likedBy as string;
    let id = Obj.id as string;
    let create = Obj.create as string;
    //check if user already like it

    if (create === "0") {
      await createReply(id, post_id, likedBy);
    } else {
      const alreadyLiked = await findReply(id, likedBy);
      if (!alreadyLiked) {
        await updateReply(id, likedBy, true);
      } else {
        await updateReply(id, likedBy, false);
      }
    }
  }
  if (_action === "likePost") {
    let id = Obj.id as string;
    let userId = Obj.userId as string;
    const likedUsers = await findPostByUserLiked(id, userId);
    try {
      if (!likedUsers) {
        await updatePostLike(id, userId, true);
      } else {
        await updatePostLike(id, userId, false);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return { success: true };
};
