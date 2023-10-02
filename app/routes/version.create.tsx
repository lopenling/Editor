import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Header from '~/component/Layout/Header';
import { HEADER_HEIGHT } from '~/constants';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { createUserPage } from '~/model/translation';
import { getUserSession } from '~/services/session.server';
import { useEffect } from 'react';
export const loader = async ({ request, params }: LoaderArgs) => {
  let url = new URL(request.url);
  let textId = url.searchParams.get('text') as string;
  let pageId = url.searchParams.get('page') as string;
  //check if user has a copy of this page for translation
  //if not create a new page
  let user = await getUserSession(request);
  let source = await createUserPage(textId, pageId, user);
  return { source };
};
function Translation() {
  let { source } = useLoaderData();
  let editor = useEditorInstance(source?.content, true);
  useEffect(() => {
    editor?.on('update', () => {
      console.log(editor?.getHTML());
    });
  }, [editor]);
  return (
    <>
      <Header editor={editor} />
      <div
        style={{
          padding: HEADER_HEIGHT,
        }}
      >
        <div className="flex p-2 border-2 xl:mx-10">
          <div className="max-w-2xl">{source.content}</div>
          <div className="max-w-2xl">translation</div>
        </div>
      </div>
    </>
  );
}

export default Translation;
