import { useFetcher, useLoaderData, useLocation, useNavigation, useSearchParams } from '@remix-run/react';
import { BubbleMenu, Editor, EditorContent } from '@tiptap/react';
import { useEffect,useCallback} from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// import EditorSettings from "./EditorSettings";
import { Button } from '~/component/UI';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE, ForumLink, HEADER_HEIGHT } from '~/constants';
import { openSuggestionState, selectedPostThread, selectedTextOnEditor, ImageState, textInfo } from '~/states';
import { DiffMatchPatch, isSmallScreen } from '~/lib';
import { scrollThreadIntoView } from '../lib';
import Pagination from '~/component/UI/Pagination';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Controls from './Controls';
type EditorContainerProps = {
  pageId: string;
  editor: Editor;
  isSaving: boolean;
  order: number;
  content: string;
  pageCount: number;
  imageUrl: string;
  versions: string[];
};
function EditorContainer({ pageId, editor, isSaving, order, content, imageUrl,pageCount,versions }: EditorContainerProps) {
  const data = useLoaderData();
  const user = data.user;
    let fetcher = useFetcher();
  const saveTextFetcher = useFetcher();
  const [Image, setImage] = useRecoilState(ImageState);
  const isPostAllowed = data.text.allow_post;
  const [openSuggestion, setOpenSuggestion] = useRecoilState(openSuggestionState);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  let thread = useRecoilValue(selectedPostThread);
  const [params,] = useSearchParams();
  const location = useLocation();


  const getQuery = (newContent: string) => {
    let oldContent = content;
    const dmp = new DiffMatchPatch();
    if (oldContent !== newContent) {
      const changes = dmp.diff_main(oldContent, newContent);
      const patch = dmp.patch_make(changes);
      let query = dmp.patch_toText(patch);
      return query;
    }
    return null;
  };
  const saveData = async (patch: string) => {
    const formData = new FormData();
    formData.append('textId', data.text?.id);
    formData.append('pageId', pageId);
    formData.append('patch', patch);
    saveTextFetcher.submit(formData, {
      method: 'POST',
      action: '/api/text',
    });
  };
  useEffect(() => {
    let timer = scrollThreadIntoView(thread.id, `p_${thread.id}`);
    editor.on('update', async ({ editor }) => {
      
      let newContent = editor.getHTML();
      let query = getQuery(newContent);
      if (query && newContent.length > 100 && user) saveData(query);
    });
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [thread.id]);

  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setSelectionRange({
        ...selection,
        type,
      });
    setOpenSuggestion(false);
  };

  function handleSuggestionClick() {
    setOpenSuggestion(!openSuggestion);
    setSelectionRange({
      ...selection,
      type: '',
    });
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
  useEffect(() => {
    let timer = setTimeout(() => {
      let newContent = content.replace(/[\r\n]+/g, '<br/>');
      editor?.commands.setContent(newContent);
    }, 100);
    setImage({ ...Image, url: imageUrl });
    return () => {
      clearTimeout(timer)
    };
  }, [content, editor]);
  const handleImageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    let height = e.target.height;
    let width = e.target.width;
    setImage({ ...Image, isPortrait: height > width });
  };
  const hangleVersionChange = (e:{target:HTMLSelectElement}) => {
    let value = e.target.value;
    let url = location.pathname + '?version=' + value;
    fetcher.submit({url}, {
      method: 'post',
    })
  }
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
            <div className="textname flex items-center gap-2  text-2xl font-bold">
              {data.text.name} {order > 1 && order}
              {isSaving && <span className="animate-pulse text-sm font-light">saving...</span>}
            </div>
            <Pagination pageCount={pageCount} />
          </div>
        </div>
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
                      className={`${openSuggestion ? 'bg-green-400 text-white' : 'bg-white '} rounded-l-lg ${
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
              ) : user?.admin === 'true' || data.text.userId == user?.id ? (
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
