import { useFetcher, useLoaderData, useSearchParams } from '@remix-run/react';
import { BubbleMenu, Editor, EditorContent } from '@tiptap/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
// import EditorSettings from "./EditorSettings";
import { Button } from '~/component/UI';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from '~/constants';
import { selectedTextOnEditor, ImageState } from '~/states';
import { isSmallScreen } from '~/lib';
import { checkUnknown, scrollThreadIntoView } from '../lib';
import Pagination from '~/component/UI/Pagination';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Controls from './Controls';
import { saveData } from '../lib/utils';
import { extractTextAndAnnotations, generateHtmlFromTextAndAnnotations } from '../lib/htmlParser';
import _ from 'lodash';
type EditorContainerProps = {
  editor: Editor;
  isSaving: boolean;
  page: any;
  saveTextFetcher: any;
};
function EditorContainer({ editor, isSaving, page, saveTextFetcher }: EditorContainerProps) {
  const imageUrl = page.imageUrl;
  const pageCount = page?.text.Page.length;
  const pageId = page.id;
  const { annotations, user, text } = useLoaderData();
  const [Image, setImage] = useRecoilState(ImageState);
  const isPostAllowed = text.allow_post;
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchString = searchParams.get('s') || '';
  let thread = searchParams.get('thread') || '';
  let saving = saveTextFetcher.state !== 'idle';
  useEffect(() => {
    let timer = scrollThreadIntoView(thread, `p_${thread}`);
    editor.on('update', async ({ editor }) => {
      let newContent = editor.getHTML();
      let { text, annotations } = extractTextAndAnnotations(newContent);
      if (text?.length > 100 && user) saveData(text, annotations, pageId, saveTextFetcher);
    });
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [editor, thread]);
  useEffect(() => {
    let timer = setTimeout(() => {
      let newContent = checkUnknown(page.content.replace(/[\r\n]+/g, '<p/><p>'));
      let content = generateHtmlFromTextAndAnnotations(newContent, annotations);
      editor?.commands.setContent(content);
    }, 100);
    setImage({ ...Image, url: imageUrl });
    return () => {
      clearTimeout(timer);
    };
  }, [page?.content, editor]);
  useEffect(() => {
    if (!searchString || searchString.length === 0) {
      editor.commands.setSearchTerm('');
    }
  }, [searchString]);
  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setSelectionRange({
        ...selection,
        type,
      });
    setSearchParams({ with: 'Post' });
  };
  function handleSuggestionClick() {
    setSelectionRange({
      ...selection,
      type: '',
    });
    setSearchParams({ with: 'Suggestion' });
  }
  function handleDeleteMark() {
    if (editor.isActive('post')) {
      editor.commands.unsetPost();
    }
    if (editor.isActive('suggestion')) {
      editor.commands.unsetSuggestion();
    }
    editor.commands.setTextSelection(0);
  }
  const handleImageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    let height = e.target.height;
    let width = e.target.width;
    setImage({ ...Image, isPortrait: height > width });
  };

  return (
    <div className=" mb-4  flex  shadow-sm" style={{ flexDirection: Image.isPortrait ? 'row-reverse' : 'column' }}>
      {Image.show && Image.url && (
        <div
          className=" relative flex w-full max-w-full justify-center bg-gray-100"
          onMouseDown={(e) => (e.target.style.cursor = 'grabbing')}
          onMouseUp={(e) => (e.target.style.cursor = 'grab')}
        >
          <TransformWrapper>
            {(utils) => (
              <>
                <Controls {...utils} url={Image.url} />
                <TransformComponent
                  wrapperStyle={{ zIndex: 10, width: '100%', maxHeight: '40vh', cursor: 'grab' }}
                  contentStyle={{
                    width: '100%',
                    maxHeight: '100%',
                  }}
                >
                  <img
                    alt="Text Image"
                    src={Image.url}
                    className="text-image  border-2 border-gray-200"
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                    onLoad={handleImageLoaded}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
      <div style={{ zIndex: 0 }}>
        <div className=" text-light z-10 flex  items-center  justify-between   px-2 py-4  ">
          <div className=" flex w-full items-center justify-between gap-2">
            <div
              className="textname flex items-center gap-2"
              style={{ fontSize: 'clamp(18px, 24px, 2.2vw)', fontWeight: 'bold' }}
            >
              {isSaving && <span className="animate-pulse text-sm font-light">saving...</span>}
            </div>
            <Pagination pageCount={pageCount} />
          </div>
        </div>
        {!user && <div>changes won't get saved if you are not logged in</div>}
        {!editor ? (
          <div className="flex h-[400px] w-full animate-pulse justify-center">
            <div className="mr-2 h-full flex-1 bg-gray-300 dark:bg-gray-700"></div>
          </div>
        ) : (
          <EditorContent
            editor={editor}
            className="editor transition-all "
            style={{
              fontSize: isSmallScreen ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE,
              pointerEvents: isSaving ? 'none' : 'all',
              color: saving ? 'gray' : 'inherit',
            }}
          />
        )}

        {editor && (
          <BubbleMenu
            shouldShow={({ editor }) => {
              const postmarkType = editor.schema.marks.post;
              const suggestmarkType = editor.schema.marks.suggestion;

              // check if the mark is partially included in the selection
              const selection = editor.state.selection;
              if (editor.isActive('suggestion') || editor.isActive('post')) {
                return true;
              } else if (
                editor.state.doc.rangeHasMark(selection.$from.pos, selection.$to.pos, postmarkType) ||
                editor.state.doc.rangeHasMark(selection.$from.pos, selection.$to.pos, suggestmarkType)
              ) {
                return false;
              } else {
                return true;
              }
            }}
            editor={editor}
            tippyOptions={{
              appendTo: 'parent',
              placement: isSmallScreen ? 'bottom' : 'top',
            }}
          >
            <div className="inline-flex rounded-md shadow-sm" role="group">
              {!editor.isActive('suggestion') && !editor.isActive('post') ? (
                selection.content.length > 0 &&
                selection.content.length < 239 && (
                  <>
                    <Button
                      title="suggestion"
                      type="button"
                      color="gray"
                      className={`bg-white rounded-l-lg ${
                        !isPostAllowed && 'rounded-r-lg'
                      } border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10    hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white  dark:hover:bg-gray-600 dark:hover:text-white `}
                      onClick={() => handleSuggestionClick()}
                      label="Suggestion"
                    />
                    {isPostAllowed && (
                      <>
                        <Button
                          title="comment"
                          color="gray"
                          className=" border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900  focus:z-10   hover:bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:hover:bg-gray-600 dark:hover:text-white "
                          onClick={() => handleBubbleClick('comment')}
                          label="Comment"
                          type="button"
                        />
                        <Button
                          type="button"
                          title="question"
                          color="gray"
                          className="rounded-r-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10  focus:ring-2 hover:bg-gray-100   dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white  dark:hover:bg-gray-600 dark:hover:text-white "
                          onClick={() => handleBubbleClick('question')}
                          label="Question"
                        />
                      </>
                    )}
                  </>
                )
              ) : user?.admin === 'true' || text.userId == user?.id ? (
                <Button
                  title="delete"
                  type="button"
                  color="gray"
                  className=" rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:text-white dark:focus:ring-blue-500 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleDeleteMark()}
                  label="Delete"
                />
              ) : null}
            </div>
          </BubbleMenu>
        )}
      </div>
    </div>
  );
}

export default EditorContainer;
