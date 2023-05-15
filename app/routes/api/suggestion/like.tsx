import { ActionFunction, json } from "@remix-run/server-runtime";
import {
  findSuggestionByUserLiked,
  findSuggestionWithMostLikes,
  updateSuggestionLike,
} from "~/model/suggestion";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  let id = Obj.id as string;
  let userId = Obj.userId as string;
  let threadId = Obj.threadId as string;

  const likedUsers = await findSuggestionByUserLiked(id, userId);
  try {
    let update = await updateSuggestionLike(id, userId, likedUsers === null);
    if (update) {
      let highestLiked = await findSuggestionWithMostLikes(threadId);
      return {
        highestLiked: highestLiked[0],
        likedBy: update,
      };
    }
    return true;
  } catch (e) {
    console.log(e);
  }
  return { success: true };
};
