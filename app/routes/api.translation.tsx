import { User } from '@prisma/client';
import { ActionFunction } from '@remix-run/node';
import { languageOptionsType } from '~/constants';
import { createTranslation, deleteTranslation } from '~/model/translation';
import { getUser } from '~/model/user';
import { getUserSession } from '~/services/session.server';

export const action: ActionFunction = async ({ request }) => {
  let formdata = await request.formData();
  let user_session = await getUserSession(request);
  let user = (await getUser(user_session.username)) as User;
  let content = formdata.get('content') as string;
  let textId = formdata.get('textId') as string;
  let order = formdata.get('pageId') as string;
  let name = formdata.get('name') as string;
  let language = formdata.get('language') as languageOptionsType;
  let method = request.method;

  switch (method) {
    case 'POST':
      let userId = user?.id;
      return await createTranslation(parseInt(textId), parseInt(order), language, content, userId, name);

    case 'DELETE':
      let id = formdata.get('id') as string;
      return await deleteTranslation(parseInt(id));
  }

  return null;
};
