import { db } from '~/services/db.server';
import { getText } from './text';
import { getPage } from './page';

export let createUserPage = async (textId: string, order: string, user: any) => {
  let text = await getText(textId);
  let page = await getPage(textId, parseInt(order), {});

  let check = await db.userText.findFirst({
    where: {
      textId: parseInt(text?.id),
      name: text.name,
      userId: user.id,
      order: parseInt(order),
    },
  });
  if (check) return check;

  try {
    let created_page = await db.userText.create({
      data: {
        content: page?.content,
        name: text?.name,
        textId: parseInt(text?.id),
        userId: user.id,
        order: parseInt(order),
      },
    });
    return created_page;
  } catch (e) {
    console.log(e);
  }
};
//get list of translations for a text
export let getAllTranslations = async (textId: string, order: string) => {
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
