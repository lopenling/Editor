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
    if (create === "create") {
      await createReply(id, post_id, likedBy);
    }
    if (create === "update") {
      const alreadyLiked = await findReply(id, likedBy);
      const actionPromise = updateReply(id, likedBy, !alreadyLiked);
      await actionPromise;
    }
  }
  if (_action === "likePost") {
    let postId = Obj.id as string;
    let userId = Obj.userId as string;
    const likedUsers = await findPostByUserLiked(postId, userId);
    try {
      let response = await updatePostLike(postId, userId, likedUsers === null);
      return response.likedBy;
    } catch (e) {
      console.log(e);
    }
  }
  return { success: true };
};
