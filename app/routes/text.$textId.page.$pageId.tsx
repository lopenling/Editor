import { LoaderArgs, LoaderFunction, defer, redirect } from '@remix-run/node';
import { useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import { getPage, getVersions } from '~/model/page';
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  showSidebar,
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
import { CircleSpinnerOverlay } from 'react-spinner-overlay';
import useEditorInstance from '~/features/Editor/tiptap/useEditorInstance';
import { getAnnotations } from '~/model/annotation';
import { getAllVersions } from '~/model/userText';
import TextHeader from '~/component/Layout/TextHeader';
import Menu from '~/component/menu/Menu';
import { findPostByTextIdAndPage } from '~/model/post';

export const loader: LoaderFunction = async ({ request, params }: LoaderArgs) => {
  const textId = params.textId as string;
  const order = params.pageId as string;
  const url = new URL(request.url);
  const version = url.searchParams.get('version') as Version;
  const searchParamsWith = url.searchParams.get('with') as String;

  const versions = await getVersions(parseInt(textId), parseInt(order));
  if (!version && versions.length > 0) {
    if (!version) {
      return redirect(`${request.url}?version=${versions[0].version}`);
    }
  }

  const text = await getText(textId);
  const page = await getPage(textId, parseInt(order), version);
  const pageId = page?.id;
  const annotations = await getAnnotations(page?.id!);
  const user = await getUserSession(request);
  const user_versions = await getAllVersions(textId, order);
  const threadId = new URL(request.url).searchParams.get('thread') ?? '';
  const suggestions = searchParamsWith === 'Post' ? await findAllSuggestionByPageId(page?.id!) : [];
  const posts =
    searchParamsWith === 'Post' ? await findPostByTextIdAndPage(parseInt(textId), parseInt(order), version) : [];
  return defer({
    page,
    user,
    suggestions,
    text,
    order,
    versions,
    user_versions,
    annotations,
    posts,
    threadId,
    pageId,
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

  let editor = useEditorInstance(page?.content, false);

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
    <div className="flex flex-col ">
      <Header editor={editor} />
      <div className="flex">
        <div className="flex w-full flex-col  flex-1 " style={{ maxHeight: 'calc(100vh - 60px)' }}>
          <TextHeader />
          <div className=" flex justify-between gap-4 transition-all flex-1 overflow-y-auto ">
            <CircleSpinnerOverlay message={'updating text'} loading={saveTextFetcher.state !== 'idle'} />
            <div className="w-full flex gap-2 ">
              <div
                className={`${!withImage ? 'max-w-3xl' : 'w-full'} justify-self-center p-2 dark:bg-gray-800 mx-auto `}
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
