import { ActionFunction, json } from "@remix-run/server-runtime";
import {
  findSuggestionByUserLiked,
  updateSuggestionLike,
} from "~/model/suggestion";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  let postId = Obj.id as string;
  let userId = Obj.userId as string;
  const likedUsers = await findSuggestionByUserLiked(postId, userId);
  try {
    let response = await updateSuggestionLike(
      postId,
      userId,
      likedUsers === null
    );
    return json({ likedBy: [...response.likedBy] });
  } catch (e) {
    console.log(e);
  }
  return { success: true };
};
