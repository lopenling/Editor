import { Editor } from "@tiptap/react";
import crossIcon from "~/assets/svg/icon_cross.svg";
import SearchString from "./SearchString";
import React, { useState, useCallback } from "react";
import { DEFAULT_FONT_SIZE } from "~/constants";

interface Props {
  editor: Editor | null;
  showFindText: boolean;
  showFontSize: boolean;
  setShowFindText: (value: boolean) => void;
  setShowFontSize: (value: boolean) => void;
}

function EditorSetting({
  editor,
  showFindText,
  showFontSize,
  setShowFindText,
  setShowFontSize,
}: Props) {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const changeFontSize = useCallback(
    (value: number) => {
      setFontSize(value);
      editor?.chain()?.selectAll()?.setFontSize(value)?.run();
    },
    [editor]
  );
  const handleRangeHover = useCallback(
    (event) => {
      event.target.title = fontSize;
    },
    [fontSize]
  );
  const FontSizeComponent = () => (
    <>
      <div className="inline-flex flex-1 items-center justify-between rounded-full">
        <p className="text-sm leading-tight text-gray-500">A-</p>
        <div className="flex w-full items-center justify-start ">
          <div className=" flex  flex-1 items-center justify-start ">
            <input
              type="range"
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              min={18}
              step={1}
              max={32}
              value={fontSize}
              onChange={(e) => changeFontSize(Number(e.target.value))}
              onMouseOver={handleRangeHover}
            ></input>
          </div>
        </div>
        <p className="text-sm leading-tight text-gray-500">A+</p>
      </div>
    </>
  );

  return (
    <>
      {showFindText && (
        <div
          style={{ maxWidth: 300, margin: "0 auto" }}
          className="flex items-center gap-2"
        >
          <SearchString editor={editor} />
          <div onClick={() => setShowFindText(false)}>
            <img src={crossIcon} alt="cross"></img>
          </div>
        </div>
      )}
      {showFontSize && (
        <div
          style={{ maxWidth: 300, margin: "0 auto" }}
          className="flex items-center gap-2"
        >
          <FontSizeComponent />
          <div onClick={() => setShowFontSize(false)}>
            <img src={crossIcon} alt="cross"></img>
          </div>
        </div>
      )}
      {!showFindText && !showFontSize && (
        <div className="hidden items-center gap-4 md:flex md:justify-between">
          <div style={{ maxHeight: 37, flex: 2.3 }}>
            <SearchString editor={editor} />
          </div>
          <div
            style={{ maxWidth: 297, flex: 1 }}
            className="inline-flex items-center justify-between rounded-full"
          >
            <FontSizeComponent />
          </div>
        </div>
      )}
    </>
  );
}
export default EditorSetting;
