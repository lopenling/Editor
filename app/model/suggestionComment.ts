import { db } from "~/db.server";

//create comment on suggestion

export async function createCommentOnSuggestion(
  text: string,
  suggestionId: string,
  userId: string,
  audioUrl: string
) {
  const comment = await db.suggestionComment.create({
    data: {
      text,
      suggestionId,
      userId,
      audioUrl,
    },
  });
  return comment;
}
