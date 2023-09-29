import { db } from '~/services/db.server';

export const getUserPage = async (userId: string, versionId: string) => {
  let page = db.userText.findUnique({
    where: { id: parseInt(versionId) },
  });
  return page;
};
export let getAllVersions = async (textId: string, order: string) => {
  try {
    return await db.userText.findMany({
      where: {
        textId: parseInt(textId),
        order: parseInt(order),
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
