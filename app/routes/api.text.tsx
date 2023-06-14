import { LoaderFunction, ActionFunction } from '@remix-run/server-runtime';
import { json } from 'react-router';
import { findTextByPageId } from '~/model/text';

import pusher from '~/services/pusher.server';
import diffMatchPatch from 'diff-match-patch';
import { getUserSession } from '~/services/session.server';
import { TextType } from '~/model/type';
import { trigerUpdate } from '~/lib';
import { searchPages, updatePage } from '~/model/page';


export let loader: LoaderFunction = async ({ request }) => {
  const searchText = new URL(request.url).searchParams.get('search')?.trim();
  let headers = {
    'Cache-Control': 'max-age=15,stale-while-revalidate=60',
  };
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
  return []
}

export let action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const user = await getUserSession(request);
  const newText = data.get('text') as string;
  const pageId = data.get('pageId') as string;
  try {
    const res = await updatePage(pageId, newText);
    await trigerUpdate(user, pageId);
    return res;
  } catch (e) {
    return false;
  }
};
