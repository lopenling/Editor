import { LoaderFunction, ActionFunction } from '@remix-run/server-runtime';
import { deleteText } from '~/model/text';

import { getUserSession } from '~/services/session.server';
import { searchPages, updatePage } from '~/model/page';
import { updateAnnotations } from '~/model/annotation';

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
    const newContent = data.get('content') as string;
    const annotations = data.get('annotations') as string;
    const pageId = data.get('pageId') as string;
    try {
      const page_return = await updatePage(pageId, newContent);
      const annotation_return = await updateAnnotations(pageId, annotations);
      return { page_return, annotation_return };
    } catch (e) {
      return false;
    }
  }
};
