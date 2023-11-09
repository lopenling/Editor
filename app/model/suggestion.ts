import { db } from '~/services/db.server';

export async function findAllSuggestionByPageId(pageId: string, thread: string) {
  try {
    if (!thread) return [];

    let data = await db.suggestion.findMany({
      where: {
        AND: [
          { pageId },
          {
            threadId: thread,
          },
        ],
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
      orderBy: [{ likedBy: { _count: 'desc' } }, { created_at: 'desc' }],
    });
    return data;
  } catch (e) {
    throw new Error('error fetching suggestion' + e);
  }
}

export async function getSuggestionWithThreadId(threadId: string) {
  try {
    let data = await db.suggestion.findMany({
      where: {
        threadId,
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
      orderBy: [{ created_at: 'asc' }, { likedBy: { _count: 'desc' } }],
    });
    return data;
  } catch (e) {
    throw new Error('error fetching suggestion' + e);
  }
}

export async function createSuggestion({ oldValue, newValue, textId, pageId, userId, threadId, audioUrl }) {
  try {
    let data = await db.suggestion.create({
      data: {
        oldValue,
        newValue,
        textId: parseInt(textId),
        pageId: pageId,
        userId,
        threadId,
        audioUrl,
      },
    });
    return data;
  } catch (e) {
    throw new Error('suggestion cannot be created on DB' + e);
  }
}

//update

export async function updateSuggestionLike(id: string, userId: string, payload: boolean) {
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
    throw new Error('update suggestion like error: ' + e.message);
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
    throw new Error('could not find suggestion by userliked' + e.message);
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
    throw new Error('update suggestion like error: ' + e.message);
  }
}
export async function findSuggestionWithMostLikes(id: string) {
  try {
    const mostLikedSuggestion = await db.suggestion.findFirst({
      where: {
        threadId: id,
      },
      orderBy: [
        {
          likedBy: {
            _count: 'desc',
          },
        },
        {
          created_at: 'desc',
        },
      ],
      take: 1,
    });
    return mostLikedSuggestion;
  } catch (e) {
    console.warn(e);
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
    let remaining = await getSuggestionWithThreadId(data.threadId);
    return remaining?.length;
  } catch (e) {
    throw new Error('cannot delete post ', e);
  }
}
