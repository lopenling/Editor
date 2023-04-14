import { useLoaderData } from "@remix-run/react";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import copyIcon from "~/assets/svg/icon_copy.svg";
import searchIcon from "~/assets/svg/icon_search.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import EditorSettings from "./EditorSettings";
import { Button } from "flowbite-react";
import { DEFAULT_FONT_SIZE } from "~/constants";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import {
  openSuggestionState,
  selectedPostThread,
  selectedSuggestionThread,
  selectedTextOnEditor,
  selectionRangeState,
} from "~/states";
import floatingSortIcon from "~/assets/svg/icon_floatingSortIcon.svg";
import { scrollIntoView } from "@tiptap/core/dist/packages/core/src/commands";
function Editor({ content, editor }: { content: string; editor: Editor }) {
  const data = useLoaderData();
  const [showEditorSettings, setShowEditorSettings] = useState(false);
  const [showFindText, setShowFindText] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const setSelectionRange = useSetRecoilState(selectionRangeState);
  const [selection, setSelection] = useRecoilState(selectedTextOnEditor);
  const [suggestionSelected, suggestionSelector] = useRecoilState(
    selectedSuggestionThread
  );
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);

  const handleBubbleClick = (type: string) => {
    let length = editor.state.selection.content().size;
    let lengthCheck = length > 5 && length < 244;
    if (!lengthCheck) return null;
    if (selection.start)
      setSelectionRange({
        type: type,
        start: selection.start,
        end: selection.end,
        content: selection.text,
      });
  };
  const translation = uselitteraTranlation();

  function handleSuggestionClick() {
    setOpenSuggestion(true);
  }
  function handleDeleteMark() {
    if (editor.isActive("post")) {
      editor.commands.unsetPost();
    }

    if (editor.isActive("suggestion")) {
      editor.commands.unsetSuggestion();
    }
  }
  let threadId = useRecoilValue(selectedPostThread);
  useEffect(() => {
    if (threadId?.id) {
      let thread = document.getElementById(threadId.id);
      thread.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      }); // window.scroll(0, 0);
      window.getSelection().selectAllChildren(thread);
    }
  }, [threadId.id]);
  return (
    <div className="relative flex-1 textEditorContainer max-h-[70vh] overflow-y-scroll md:overflow-y-auto mb-4 px-4 lg:max-h-max">
      <EditorSettings
        editor={editor}
        showFindText={showFindText}
        showFontSize={showFontSize}
        setShowFindText={setShowFindText}
        setShowFontSize={setShowFontSize}
      />
      <h1 className="text-3xl font-bold  relative top-[-5px] text-light my-4 text-center  flex items-center justify-center  text-gray-900 dark:text-white">
        {data?.text?.name}
      </h1>
      <div className="sticky top-[110px] shadow-textEditor">
        {!content || !editor ? (
          <div className="flex justify-center h-[400px] w-full animate-pulse">
            <div className="flex w-full h-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
        ) : (
          <EditorContent
            editor={editor}
            className="editor"
            style={{
              fontSize: DEFAULT_FONT_SIZE,
            }}
          />
        )}
      </div>
      {editor && (
        <BubbleMenu
          tippyOptions={{
            placement: "top",
          }}
          editor={editor}
        >
          <div className="flex rounded border-gray-300 border-2">
            {!editor.isActive("suggestion") && !editor.isActive("post") ? (
              <>
                <Button
                  size="sm"
                  title="suggestion"
                  color=""
                  className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none border-r-2 border-r-gray-300 "
                  onClick={handleSuggestionClick}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.586 1.586C10.7705 1.39498 10.9912 1.24262 11.2352 1.1378C11.4792 1.03298 11.7416 0.977809 12.0072 0.975501C12.2728 0.973194 12.5361 1.0238 12.7819 1.12436C13.0277 1.22492 13.251 1.37343 13.4388 1.56121C13.6266 1.749 13.7751 1.9723 13.8756 2.21809C13.9762 2.46389 14.0268 2.72725 14.0245 2.9928C14.0222 3.25836 13.967 3.5208 13.8622 3.76481C13.7574 4.00882 13.605 4.22951 13.414 4.414L12.621 5.207L9.793 2.379L10.586 1.586ZM8.379 3.793L0 12.172V15H2.828L11.208 6.621L8.378 3.793H8.379Z"
                      fill="#111928"
                    />
                  </svg>
                </Button>

                <Button
                  size="sm"
                  title="comment"
                  color=""
                  className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none border-r-2 border-r-gray-300"
                  onClick={() => handleBubbleClick("comment")}
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 7C16 10.866 12.418 14 8 14C6.58005 14.006 5.17955 13.6698 3.917 13.02L0 14L1.338 10.877C0.493 9.767 0 8.434 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM5 6H3V8H5V6ZM13 6H11V8H13V6ZM7 6H9V8H7V6Z"
                      fill="#111928"
                    />
                  </svg>
                </Button>
                <Button
                  size="sm"
                  title="question"
                  color=""
                  className="bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none "
                  onClick={() => handleBubbleClick("question")}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.228 7C6.777 5.835 8.258 5 10 5C12.21 5 14 6.343 14 8C14 9.4 12.722 10.575 10.994 10.907C10.452 11.011 10 11.447 10 12M10 15H10.01M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                      stroke="#111928"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </>
            ) : (
              data.user.admin === "true" && (
                <Button
                  size="sm"
                  title="delete"
                  color=""
                  className="bg-white text-green-400 hover:bg-red-200 hover:text-green-500 rounded-none"
                  onClick={() => handleDeleteMark()}
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 0C5.81434 9.91486e-05 5.63237 0.0518831 5.47447 0.149552C5.31658 0.247222 5.18899 0.386919 5.106 0.553L4.382 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4V14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V4C13.2652 4 13.5196 3.89464 13.7071 3.70711C13.8946 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H9.618L8.894 0.553C8.81101 0.386919 8.68342 0.247222 8.52553 0.149552C8.36763 0.0518831 8.18566 9.91486e-05 8 0H6ZM4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C5.26522 5 5.51957 5.10536 5.70711 5.29289C5.89464 5.48043 6 5.73478 6 6V12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12V6ZM9 5C8.73478 5 8.48043 5.10536 8.29289 5.29289C8.10536 5.48043 8 5.73478 8 6V12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12V6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5Z"
                      fill="#111928"
                    />
                  </svg>
                </Button>
              )
            )}
          </div>
        </BubbleMenu>
      )}
      <div
        className="absolute bottom-2 right-3 z-40 md:hidden"
        onClick={() => setShowEditorSettings((prev) => !prev)}
      >
        {showEditorSettings && (
          <div className="bg-white shadow rounded-md absolute bottom-full right-0 w-max p-2">
            <button
              className="bg-white text-gray-700 flex justify-between items-center gap-2 p-1"
              onClick={() => setShowFindText(true)}
            >
              <img src={searchIcon} alt="search" height={16} width={16} />
              {translation.search}
            </button>
            <button
              className="bg-white text-gray-700 flex justify-between items-center gap-2 p-1"
              onClick={() => setShowFontSize(true)}
            >
              <img src={copyIcon} alt="copy" height={16} width={16} />
              {translation.fontSize}
            </button>
          </div>
        )}

        <img src={floatingSortIcon} alt="floatingSortIcon" />
      </div>
    </div>
  );
}

export default Editor;
