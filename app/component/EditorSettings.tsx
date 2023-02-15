import { Editor } from "@tiptap/react";
import crossIcon from "~/file/icon_cross.svg";
import SearchString from "./SearchString";
import React from "react";
import { DEFAULT_FONT_SIZE } from "~/constants";

function EditorSetting({
  editor,
  showFindText,
  showFontSize,
  setShowFindText,
  setShowFontSize,
}: {
  editor: Editor | null;
  showFindText: boolean;
  showFontSize: boolean;
  setShowFindText: any;
  setShowFontSize: any;
}) {
  if (showFindText || showFontSize)
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
            <div className="inline-flex flex-1 items-center justify-between rounded-full">
              <p className="text-sm leading-tight text-gray-500">A-</p>
              <div className="flex w-full items-center justify-start ">
                <div className=" flex  flex-1 items-center justify-start ">
                  <input
                    type="range"
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                    min={12}
                    step={1}
                    max={24}
                    defaultValue={DEFAULT_FONT_SIZE}
                    onChange={(e) =>
                      editor
                        .chain()
                        .selectAll()
                        .setFontSize(e.target.value)
                        .run()
                    }
                  ></input>
                </div>
              </div>
              <p className="text-sm leading-tight text-gray-500">A+</p>
            </div>
            <div onClick={() => setShowFontSize(false)}>
              <img src={crossIcon} alt="cross"></img>
            </div>
          </div>
        )}
      </>
    );
  return (
    <div className="hidden items-center gap-4 md:flex md:justify-between">
      <div style={{ maxHeight: 37, flex: 2.3 }}>
        <SearchString editor={editor} />
      </div>
      <div
        style={{
          maxWidth: 297,
          flex: 1,
        }}
        className="inline-flex items-center justify-between rounded-full"
      >
        <p className="text-sm leading-tight text-gray-500">A-</p>
        <div className="flex w-full items-center justify-start ">
          <div className=" flex  flex-1 items-center justify-start ">
            <input
              type="range"
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              min={12}
              step={1}
              max={24}
              defaultValue={DEFAULT_FONT_SIZE}
              onChange={(e) =>
                editor.chain().selectAll().setFontSize(e.target.value).run()
              }
            ></input>
          </div>
        </div>
        <p className="text-sm leading-tight text-gray-500">A+</p>
      </div>
    </div>
  );
}
export default EditorSetting;
