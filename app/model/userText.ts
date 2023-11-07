import { db } from '~/services/db.server';

export const getUserPage = async (id: number | undefined) => {
  let page = db.userText.findUnique({
    where: { id },
    include: {
      translations: true,
    },
  });
  return page;
};
export let listUserText = async (textId: string, pageId: string) => {
  try {
    return await db.userText.findMany({
      where: {
        textId: parseInt(textId),
        pageId,
      },
      select: {
        id: true,
        name: true,
        user: true,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};
export const updateSource = async (id: string, content: string) => {
  return db.userText.update({
    where: { id: parseInt(id) },
    data: {
      content,
    },
  });
};

export const createUserText = async (textId, pageId, userId, content, name) => {
  return await db.userText.create({
    data: {
      textId,
      pageId,
      userId,
      content,
      name,
    },
  });
};
