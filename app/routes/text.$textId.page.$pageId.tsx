import { LoaderArgs, LoaderFunction, defer, redirect } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
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
import TableContent from '~/features/TableOfContent';
import { EditorContainer } from '~/features/Editor';
import { getUserSession } from '~/services/session.server';
import { findAllSuggestionByPageId } from '~/model/suggestion';
import { HEADER_HEIGHT } from '~/constants';
import { getText } from '~/model/text';
import { Version } from '@prisma/client';
import { useFetcherWithPromise } from '~/component/hooks/useFetcherPromise';
import { CircleSpinnerOverlay } from 'react-spinner-overlay';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import Tools from '~/features/Editor/tiptap/component/Tools';
import Translations from '~/component/Layout/Translations';
import PostContainer from '~/features/PostContainer';
import { getAllTranslations } from '~/model/translation';

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
  const translations = await getAllTranslations(textId, order);
  return defer({
    page,
    user,
    suggestions,
    pusher_env: { key: process.env.key, cluster: process.env.cluster },
    text,
    order,
    versions,
    translations,
  });
};

export default function Page() {
  const data = useLoaderData<typeof loader>();
  const { order, text, page } = data;
  const [suggestionSelected] = useRecoilState(selectedSuggestionThread);
  const [openSuggestion] = useRecoilState(openSuggestionState);
  const [showTranslation] = useRecoilState(showTranslationState);
  const [selectedPost, postSelector] = useRecoilState(selectedPostThread);
  const [selection] = useRecoilState(selectedTextOnEditor);
  const [showPostSide, setShowPostSide] = useRecoilState(showSidebar);
  const createPost = useFetcherWithPromise();
  const saveTextFetcher = useFetcher();

  let editor = useEditorInstance(text?.id, order);

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
      <div className="relative flex justify-between gap-4 transition-all" style={{ paddingTop: HEADER_HEIGHT }}>
        <TableContent editor={editor} />
        <CircleSpinnerOverlay
          message={'updating text'}
          loading={createPost.state !== 'idle' || saveTextFetcher.state !== 'idle'}
        />
        <div
          className={`${!withImage ? 'max-w-4xl' : 'w-full'} justify-self-center p-2 dark:bg-gray-800`}
          id="textEditorContainer"
        >
          <Tools editor={editor} />
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
        {showTranslation && <Translations />}
        <PostContainer editor={editor} createPost={createPost} isMobile={false} />
      </div>
      <PostContainer editor={editor} createPost={createPost} isMobile={true} />
    </>
  );
}
