import { db } from "~/services/db.server";

//create comment on suggestion

export async function createCommentOnSuggestion(
  text: string,
  suggestionId: string,
  userId: string,
  audioUrl: string,
  type: "support" | "reject" | null
) {
  const comment = await db.suggestionComment.create({
    data: {
      text,
      suggestionId,
      userId,
      audioUrl,
      type,
    },
  });
  return comment;
}

export async function deleteCommentOnSuggestion(id: number) {
  const comment = await db.suggestionComment.delete({
    where: {
      id,
    },
  });
  return comment;
}
export async function updateCommentOnSuggestion(
  id: number,
  newContent: string,
  type: string
) {
  const comment = await db.suggestionComment.update({
    where: {
      id,
    },
    data: {
      text: newContent,
      type,
    },
  });
  return comment;
}
