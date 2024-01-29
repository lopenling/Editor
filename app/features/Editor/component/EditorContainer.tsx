import { useLoaderData, useSearchParams } from '@remix-run/react';
import { Editor, EditorContent } from '@tiptap/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
// import EditorSettings from "./EditorSettings";
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from '~/constants';
import { selectedTextOnEditor, ImageState } from '~/states';
import { checkUnknown, scrollThreadIntoView } from '../lib';
import Pagination from '~/component/UI/Pagination';
import { saveData } from '../lib/utils';
import { extractTextAndAnnotations, generateHtmlFromTextAndAnnotations } from '../lib/htmlParser';
import _ from 'lodash';
import ImageComponent from './ImageComponent';
import EditorMenu from './EditorMenu';
import { isSmallScreen } from '~/lib';

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
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchString = searchParams.get('s') || '';
  let thread = searchParams.get('thread') || '';
  let saving = saveTextFetcher.state !== 'idle';

  useEffect(() => {
    let newContent = checkUnknown(page.content.replace(/[\r\n]+/g, '<p/><p>'));
    let content = generateHtmlFromTextAndAnnotations(newContent, annotations);
    setTimeout(() => {
      if (editor.getText() === '') editor?.commands.setContent(content);
    }, 2000);
    setImage({ ...Image, url: imageUrl });
  }, [annotations?.length, page.content]);

  useEffect(() => {
    if (!searchString || searchString.length === 0) {
      editor.commands.setSearchTerm('');
    }
  }, [searchString]);

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

  const handleImageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    let height = e.target.height;
    let width = e.target.width;
    setImage({ ...Image, isPortrait: height > width });
  };

  const renderEditorContent = () => (
    <EditorContent
      editor={editor}
      className="editor transition-all"
      style={{
        fontSize: isSmallScreen ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE,
        pointerEvents: isSaving ? 'none' : 'all',
        color: saveTextFetcher.state !== 'idle' ? 'gray' : 'inherit',
      }}
    />
  );

  return (
    <div className=" mb-4  flex  shadow-sm" style={{ flexDirection: Image.isPortrait ? 'row-reverse' : 'column' }}>
      {Image.show && Image.url && <ImageComponent Image={Image} handleImageLoaded={handleImageLoaded} />}

      <div style={{ zIndex: 0 }}>
        <Header isSaving={isSaving} pageCount={pageCount} user={user} />
        {!user && <div>changes won't get saved if you are not logged in</div>}
        {!editor ? <LoadingIndicator /> : renderEditorContent()}
        {editor && (
          <EditorMenu
            editor={editor}
            selection={selection}
            setSelectionRange={setSelectionRange}
            setSearchParams={setSearchParams}
            isPostAllowed={text.allow_post}
          />
        )}
      </div>
    </div>
  );
}

export default EditorContainer;

const LoadingIndicator = () => (
  <div className="flex h-[400px] w-full animate-pulse justify-center">
    <div className="mr-2 h-full flex-1 bg-gray-300 dark:bg-gray-700"></div>
  </div>
);

const Header = ({ isSaving, pageCount, user }) => (
  <div className="text-light z-10 flex items-center justify-between px-2 py-4">
    <div className="flex w-full items-center justify-between gap-2">
      <div
        className="textname flex items-center gap-2"
        style={{ fontSize: 'clamp(18px, 24px, 2.2vw)', fontWeight: 'bold' }}
      >
        {isSaving && <span className="animate-pulse text-sm font-light">saving...</span>}
      </div>
      <Pagination pageCount={pageCount} />
    </div>
  </div>
);
