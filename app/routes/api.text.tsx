import { LoaderFunction, ActionFunction } from '@remix-run/server-runtime';
import { json } from 'react-router';
import { findTextByPageId } from '~/model/text';

import pusher from '~/services/pusher.server';
import diffMatchPatch from 'diff-match-patch';
import { getUserSession } from '~/services/session.server';
import { TextType } from '~/model/type';
import { trigerUpdate } from '~/lib';
import { updatePage } from '~/model/page';

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
