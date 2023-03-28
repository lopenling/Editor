import { useLoaderData } from "@remix-run/react";
import { BubbleMenu, EditorContent } from "@tiptap/react";
import { useState } from "react";
import copyIcon from "~/assets/svg/icon_copy.svg";
import searchIcon from "~/assets/svg/icon_search.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import EditorSettings from "./EditorSettings";
import { Button } from "flowbite-react";
import { DEFAULT_FONT_SIZE } from "~/constants";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import {
  selectedPost as selectedPostState,
  selectedTextOnEditor,
  selectionRangeState,
} from "~/states";
import floatingSortIcon from "~/assets/svg/icon_floatingSortIcon.svg";
import { ClientOnly } from "remix-utils";

function Editor({ content, editor }) {
  const data = useLoaderData();
  const [showEditorSettings, setShowEditorSettings] = useState(false);
  const [showFindText, setShowFindText] = useState(false);
  const [showFontSize, setShowFontSize] = useState(false);
  const setSelectionRange = useSetRecoilState(selectionRangeState);
  const [selection] = useRecoilState(selectedTextOnEditor);
  const selectedPost = useRecoilValue(selectedPostState);

  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setSelectionRange({
        type: type,
        start: selection.start,
        end: selection.end,
        content: selection.text,
      });
  };
  const translation = uselitteraTranlation();
  return (
    <div className="relative flex-1 textEditorContainer max-h-[70vh] overflow-y-scroll md:overflow-y-auto mb-4 px-4 lg:max-h-max">
      <EditorSettings
        editor={editor}
        showFindText={showFindText}
        showFontSize={showFontSize}
        setShowFindText={setShowFindText}
        setShowFontSize={setShowFontSize}
      />
      <div className="text-3xl font-bold  relative top-[-5px] text-light my-4 text-center  flex items-center justify-center  text-gray-900 dark:text-white">
        {data?.text?.name}
      </div>
      <ClientOnly fallback={<>loading</>}>
        {() => (
          <div className="sticky top-[110px] shadow-textEditor">
            {!content || !editor ? (
              <></>
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
        )}
      </ClientOnly>

      {editor && (
        <BubbleMenu
          shouldShow={({ state }) => {
            let length = state.selection.content().size;
            let lengthCheck = length > 5 && length < 244;
            return lengthCheck;
          }}
          editor={editor}
        >
          {!selectedPost?.id && (
            <Button.Group className="rounded ">
              <Button
                size="sm"
                color=""
                className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500  border-gray-300 border-2"
                onClick={() => handleBubbleClick("comment")}
              >
                {translation.comment}
              </Button>
              <Button
                size="sm"
                color=""
                className="bg-white text-green-400 hover:bg-green-200 hover:text-green-500 border-gray-300 border-2"
                onClick={() => handleBubbleClick("question")}
              >
                {translation.question}
              </Button>
            </Button.Group>
          )}
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
