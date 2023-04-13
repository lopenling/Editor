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
  selectedTextOnEditor,
  selectedThread,
  selectionRangeState,
} from "~/states";
import floatingSortIcon from "~/assets/svg/icon_floatingSortIcon.svg";
import { v4 as uuidv4 } from "uuid";
function Editor({ content, editor }: { content: string; editor: Editor }) {
  const data = useLoaderData();
  const [showEditorSettings, setShowEditorSettings] = useState(false);
  const [showFindText, setShowFindText] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const setSelectionRange = useSetRecoilState(selectionRangeState);
  const [selection, setSelection] = useRecoilState(selectedTextOnEditor);
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
  const handleBubbleClick = (type: string) => {
    let uniqueId = uuidv4();
    if (!editor.isActive("post")) {
      editor.commands.setPost({
        id: uniqueId,
      });
    } else {
      uniqueId = editor.getAttributes("post").id;
    }
    setSelection({ ...selection, thread: uniqueId });
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
          shouldShow={({ state }) => {
            let length = state.selection.content().size;
            let lengthCheck = length > 5 && length < 244;
            return lengthCheck;
          }}
          editor={editor}
        >
          {
            <div className="flex rounded border-gray-300 border-2">
              {!editor.isActive("post") && (
                <>
                  <Button
                    size="sm"
                    color=""
                    className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none border-r-2 border-r-gray-300 "
                    onClick={handleSuggestionClick}
                  >
                    suggestions
                  </Button>
                </>
              )}
              {!editor.isActive("suggestion") && (
                <>
                  <Button
                    size="sm"
                    color=""
                    className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none border-r-2 border-r-gray-300"
                    onClick={() => handleBubbleClick("comment")}
                  >
                    {translation.comment}
                  </Button>
                  <Button
                    size="sm"
                    color=""
                    className="bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none "
                    onClick={() => handleBubbleClick("question")}
                  >
                    {translation.question}
                  </Button>
                </>
              )}
            </div>
          }
          {/* <div className="bg-blue-300 text-center">
                {suggestionList.length > 0 &&
                  selectedSuggestion &&
                  suggestionList
                    .filter((item) => item.thread === selectedSuggestion)
                    .map((suggest, index) => (
                      <div
                        onClick={() => console.log(suggest.thread, suggest.id)}
                        key={suggest.suggestion + index}
                        className="cursor-pointer"
                      >
                        {suggest.suggestion}
                      </div>
                    ))}
              </div> */}
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
