import { db } from "~/db.server";

export async function findAllSuggestionByTextId(textId: number) {
  try {
    let data = await db.suggestion.findMany({
      where: {
        textId,
      },
      include: {
        user: true,
        likedBy: true,
        SuggestionComment: {
          include: {
            author: true,
          },
        },
      },
    });
    return data;
  } catch (e) {
    throw new Error("error fetching suggestion" + e);
  }
}

export async function getSuggestionWithThreadId(threadId) {
  try {
    let data = await db.suggestion.findMany({
      where: {
        threadId,
      },
      include: {
        user: true,
        likedBy: true,
        SuggestionComment: true,
      },
    });
    return data;
  } catch (e) {
    throw new Error("error fetching suggestion" + e);
  }
}

export async function createSuggestion({
  oldValue,
  newValue,
  textId,
  userId,
  threadId,
  audioUrl,
}) {
  try {
    let data = await db.suggestion.create({
      data: {
        oldValue,
        newValue,
        textId: parseInt(textId),
        userId,
        threadId,
        audioUrl,
      },
    });
    return data;
  } catch (e) {
    throw new Error("suggestion cannot be created on DB" + e);
  }
}

//update

export async function updateSuggestionLike(
  id: string,
  userId: string,
  payload: boolean
) {
  try {
    let response = await db.suggestion.update({
      data: {
        likedBy: payload
          ? {
              connect: {
                id: userId,
              },
            }
          : {
              disconnect: {
                id: userId,
              },
            },
      },
      where: {
        id,
      },
      select: {
        likedBy: true,
      },
    });
    return response;
  } catch (e) {
    throw new Error("update suggestion like error: " + e.message);
  }
}

export async function findSuggestionByUserLiked(id: string, userId: string) {
  try {
    let f = await db.suggestion.findFirst({
      where: {
        id: id,
        likedBy: {
          some: {
            id: userId,
          },
        },
      },
    });
    return f;
  } catch (e) {
    throw new Error("could not find suggestion by userliked" + e.message);
  }
}

export async function updateSuggestionContent(id: string, newValue: string) {
  try {
    console.log(id);
    let response = await db.suggestion.update({
      where: {
        id,
      },
      data: {
        newValue,
      },
    });
    return response;
  } catch (e) {
    throw new Error("update suggestion like error: " + e.message);
  }
}

//delete suggestion
export async function deleteSuggestion(id: string) {
  try {
    let data = await db.suggestion.delete({
      where: {
        id,
      },
    });
    return data;
  } catch (e) {
    throw new Error("cannot delete post ", e);
  }
}
