import { LoaderFunction, json, redirect } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { getPage, getVersions } from '~/model/page';

import Header from '~/component/Layout/Header';
import { EditorContainer } from '~/features/Editor';
import { getUserSession } from '~/services/session.server';
import { findAllSuggestionByPageId } from '~/model/suggestion';
import { getText } from '~/model/text';
import { Version } from '@prisma/client';
import { CircleSpinnerOverlay } from 'react-spinner-overlay';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getAnnotations } from '~/model/annotation';
import TextHeader from '~/component/Layout/TextHeader';
import Menu from '~/component/menu/Menu';
import { findPostByTextIdAndPage } from '~/model/post';
import { listTranslations } from '~/model/translation';

export const loader: LoaderFunction = async ({ request, params }) => {
  const textId = parseInt(params.textId as string);
  const order = parseInt(params.pageId as string);
  const url = new URL(request.url);
  const version = url.searchParams.get('version') as Version;
  const searchParamsWith = url.searchParams.get('with') as String;
  const thread = url.searchParams.get('thread') as string;
  const versions = await getVersions(textId, order);
  if (!version && versions?.length > 0) {
    const currentSearchParams = new URL(request.url).searchParams;
    if (!currentSearchParams.has('version')) {
      currentSearchParams.append('version', versions[0].version);
    }
    return redirect(`${url.pathname}?${currentSearchParams.toString()}`);
  }

  const text = await getText(textId);
  const page = await getPage(textId, order, version);
  const annotations = await getAnnotations(page?.id!);
  const user = await getUserSession(request);
  const translations = searchParamsWith === 'Translations' ? await listTranslations(textId, page?.id!) : [];
  const suggestions = searchParamsWith === 'Suggestion' ? await findAllSuggestionByPageId(page?.id!, thread) : [];
  const posts = searchParamsWith === 'Post' ? await findPostByTextIdAndPage(textId, order, version) : [];
  return json({
    page,
    user,
    suggestions,
    text,
    order,
    versions,
    translations,
    annotations,
    posts,
    pageId: page?.id,
  });
};

export default function Page() {
  const data = useLoaderData<typeof loader>();
  const { text, page } = data;
  const saveTextFetcher = useFetcher();

  let editor = useEditorInstance({ name: 'text' + text.id + 'page' + page.id, content: undefined, isEditable: false });
  const withImage = !data.text.allow_post;

  return (
    <div className="flex flex-col">
      <Header editor={editor} />
      <div className="flex">
        <div className="relative md:static flex w-full flex-col flex-1" style={{ maxHeight: 'calc(100vh - 60px)' }}>
          <TextHeader />
          <div className=" flex justify-between gap-4 transition-all flex-1 overflow-y-auto">
            <CircleSpinnerOverlay message={'updating text'} loading={saveTextFetcher.state !== 'idle'} />
            <div className="w-full flex gap-2">
              <div
                className={`${
                  !withImage ? 'max-w-3xl' : 'w-full'
                } justify-self-center p-2 dark:bg-gray-800 mx-auto font-monlam`}
                id="textEditorContainer"
              >
                {editor && (
                  <EditorContainer editor={editor!} isSaving={false} page={page} saveTextFetcher={saveTextFetcher} />
                )}
              </div>
            </div>
          </div>
        </div>
        <Menu editor={editor} />
      </div>
    </div>
  );
}
