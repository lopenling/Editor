import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Header from '~/component/Layout/Header';
import { HEADER_HEIGHT } from '~/constants';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import SourceEditor from '~/features/Translation/SourceEditor';
import { createUserPage } from '~/model/translation';
import { getUserPage } from '~/model/userText';
import { getUserSession } from '~/services/session.server';

export const loader = async ({ request, params }: LoaderArgs) => {
  let url = new URL(request.url);
  let versionId = params.versionId as string;
  //check if user has a copy of this page for translation
  //if not create a new page
  let user = await getUserSession(request);
  let source = await getUserPage(user.id, versionId);
  return { source };
};
function Translation() {
  let { source } = useLoaderData();
  let editor = useEditorInstance(source?.id, source?.order);

  return (
    <>
      <Header editor={editor} />
      <div
        style={{
          padding: HEADER_HEIGHT,
        }}
      >
        <div className="flex p-2 border-2 xl:mx-10 h-[80vh]">
          <div className="w-[50%]">
            <SourceEditor content={source?.content} />
          </div>
          <div className="w-[50%]">translation</div>
        </div>
      </div>
    </>
  );
}

export default Translation;
