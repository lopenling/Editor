import { LoaderArgs, LoaderFunction, defer, redirect } from '@remix-run/node';
import { useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import { getPage, getVersions } from '~/model/page';
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  showSidebar,
  showTranslationState,
} from '~/states';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import Header from '~/component/Layout/Header';
import TableContent from '~/component/menu/TableOfContent';
import { EditorContainer } from '~/features/Editor';
import { getUserSession } from '~/services/session.server';
import { findAllSuggestionByPageId } from '~/model/suggestion';
import { getText } from '~/model/text';
import { Version } from '@prisma/client';
import { useFetcherWithPromise } from '~/component/hooks/useFetcherPromise';
import { CircleSpinnerOverlay } from 'react-spinner-overlay';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getAnnotations } from '~/model/annotation';
import { getAllVersions } from '~/model/userText';
import TextHeader from '~/component/Layout/TextHeader';
import Menu from '~/component/menu/Menu';

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
  const textId = params.textId as string;
  const order = params.pageId as string;
  const url = new URL(request.url);
  const version = url.searchParams.get('version') as Version;
  const versions = await getVersions(parseInt(textId), parseInt(order));
  if (!version && versions.length > 0) {
    if (!version) {
      return redirect(`${request.url}?version=${versions[0].version}`);
    }
  }

  const text = await getText(textId);
  const page = await getPage(parseInt(textId), parseInt(order), version);
  const user = await getUserSession(request);
  const suggestions = await findAllSuggestionByPageId(page?.id!);
  const user_versions = await getAllVersions(textId, order);
  const annotations = await getAnnotations(page?.id);
  return defer({
    page,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
    text,
    order,
    versions,
    user_versions,
    annotations,
  });
};

export default function Page() {
  const data = useLoaderData<typeof loader>();
  const { page } = data;
  const [suggestionSelected] = useRecoilState(selectedSuggestionThread);
  const [openSuggestion] = useRecoilState(openSuggestionState);
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const [selection] = useRecoilState(selectedTextOnEditor);
  const [showPostSide, setShowPostSide] = useRecoilState(showSidebar);
  const saveTextFetcher = useFetcher();

  let editor = useEditorInstance(page?.content);

  useEffect(() => {
    if (!!selectedPost.id || selection.type !== '' || !!suggestionSelected?.id || openSuggestion) {
      setShowPostSide(true);
    } else {
      setShowPostSide(false);
    }
  }, [selectedPost.id, selection.type, suggestionSelected?.id, openSuggestion]);
  useEffect(() => {
    if (!showPostSide) {
      postSelector({ id: '' });
      editor?.commands.setTextSelection(0);
    }
  }, [showPostSide]);
  const withImage = !data.text.allow_post;
  return (
    <>
      <Header editor={editor} />
      <div className="flex w-full">
        <div className="flex-1">
          <TextHeader />
          <div className="relative flex justify-between gap-4 transition-all">
            <CircleSpinnerOverlay message={'updating text'} loading={saveTextFetcher.state !== 'idle'} />

            <div className="w-full flex gap-2">
              <div
                className={`${!withImage ? 'max-w-3xl' : 'w-full'} justify-self-center p-2 dark:bg-gray-800 mx-auto`}
                id="textEditorContainer"
              >
                {editor && (
                  <EditorContainer
                    editor={editor!}
                    isSaving={false}
                    order={page.order}
                    content={page.content}
                    pageCount={page?.text.Page.length}
                    imageUrl={page.imageUrl}
                    pageId={page.id}
                    versions={data.versions}
                    saveTextFetcher={saveTextFetcher}
                  />
                )}
              </div>
            </div>

            {/* <PostContainer editor={editor} createPost={createPost} isMobile={false} /> */}
          </div>
        </div>
        <Menu editor={editor} />
      </div>
    </>
  );
}
