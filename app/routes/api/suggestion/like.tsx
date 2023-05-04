import { ActionFunction, json } from "@remix-run/server-runtime";
import {
  findSuggestionByUserLiked,
  findSuggestionWithMostLikes,
  updateSuggestionLike,
} from "~/model/suggestion";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let Obj = Object.fromEntries(formData);
  let threadId = Obj.id as string;
  let userId = Obj.userId as string;
  const likedUsers = await findSuggestionByUserLiked(threadId, userId);
  try {
    let response = await updateSuggestionLike(
      threadId,
      userId,
      likedUsers === null
    );
    let highestLiked = await findSuggestionWithMostLikes(threadId);
    return json({ ...response, ...highestLiked });
  } catch (e) {
    console.log(e);
  }
  return { success: true };
};
