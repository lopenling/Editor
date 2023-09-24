import { LoaderFunction, ActionFunction } from '@remix-run/server-runtime';
import { deleteText } from '~/model/text';

import { DiffMatchPatch } from '~/lib';
import { getUserSession } from '~/services/session.server';
import { TextType } from '~/model/type';
import { trigerUpdate } from '~/lib';
import { getPageWithId, searchPages, updatePage } from '~/model/page';

export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get('search')?.trim();

  if (searchText) {
    let obj = await searchPages(searchText);
    let textList = Object.keys(obj).map((key) => ({
      name: obj[key].textName,
      results: obj[key].results,
      order: obj[key].order,
      total: obj[key].total,
      extra: obj[key].extra,
      textId: obj[key].textId,
    }));
    return textList;
  }
  return [];
};

export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  if (request.method === 'DELETE') {
    const textId = data.get('textId') as string;
    const res = await deleteText(textId);
    return res;
  }
  if (request.method === 'POST') {
    const user = await getUserSession(request);
    const newContent = data.get('newContent') as string;
    const pageId = data.get('pageId') as string;
    try {
      const res = await updatePage(pageId, newContent);
      await trigerUpdate(user, pageId);
      return res;
    } catch (e) {
      return false;
    }
  }
};
