import { db } from '~/services/db.server';
import { getText } from './text';
import { getPage, getPageContent } from './page';
import { createUserText } from './userText';
import { languageOptionsType } from '~/constants';

//get list of translations for a text
export let listTranslations = async (textId: string, pageId: string) => {
  return await db.translation.findMany({
    where: {
      textId: parseInt(textId),
      pageId,
    },
    include: {
      userText: {
        select: {
          name: true,
        },
      },
    },
  });
};

export let getTranslation = async (id: number) => {
  return await db.translation.findUnique({
    where: {
      id,
    },
  });
};

//create translation
export let createTranslation = async (
  textId: string,
  order: string,
  language: languageOptionsType,
  content: string,
  userId: string,
  name: string,
) => {
  let page = await getPageContent(textId, parseInt(order));
  //generate a copy of text/page in userText

  let new_userPage = await createUserText(textId, page?.id, userId, page?.content, name);
  //link it to Translation when creating

  let new_translation = await db.translation.create({
    data: {
      language,
      content,
      userTextId: new_userPage.id,
      textId,
      pageId: page?.id,
    },
  });
  return new_translation;
};

export let deleteTranslation = async (id: number) => {
  let deleted = await db.translation.delete({
    where: { id },
  });
  return await db.userText.delete({
    where: { id: deleted.userTextId },
  });
};
