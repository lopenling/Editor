import { ActionArgs, ActionFunction, LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Header from '~/component/Layout/Header';
import { HEADER_HEIGHT } from '~/constants';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import SourceEditor from '~/features/Translation/SourceEditor';
import TranslationEditor from '~/features/Translation/TranslationEditor';
import { getUserPage, updateSource } from '~/model/userText';
import { getUserSession } from '~/services/session.server';
export const loader = async ({ request, params }: LoaderArgs) => {
  let url = new URL(request.url);
  let versionId = params.versionId as string;
  //check if user has a copy of this page for translation
  //if not create a new page
  let user = await getUserSession(request);
  let source = await getUserPage(user?.id, versionId);
  let translations = source?.translations;
  return { source, translation: translations[0] };
};
export const action = async ({ request }: ActionArgs) => {
  let formdata = await request.formData();
  let id = formdata.get('id') as string;
  let content = formdata.get('content') as string;
  let action = formdata.get('action_') as string;
  switch (action) {
    case 'updateSource':
      return updateSource(id, content);
    case 'updateTranslation':
    // return updateTranslation(id, content);
  }
  return null;
};
function Translation() {
  return (
    <>
      <Header editor={null} />
      <div
        style={{
          padding: HEADER_HEIGHT,
        }}
      >
        <div className="flex p-2 border-2 xl:mx-10 h-[80vh] gap-2">
          <div className="w-[50%]">
            <SourceEditor />
          </div>
          <div className="w-[50%]">
            <TranslationEditor />
          </div>
        </div>
      </div>
    </>
  );
}

export default Translation;
