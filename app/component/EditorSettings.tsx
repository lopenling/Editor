import { Editor } from "@tiptap/react";
import crossIcon from "~/file/icon_cross.svg";
import SearchString from "./SearchText";
function EditorSetting({
  editor,
  setSearchLocation,
  showFindText,
  showFontSize,
  setShowFindText,
  setShowFontSize,
}: {
  editor: Editor | null;
  setSearchLocation: any;
  showFindText: boolean;
  showFontSize: boolean;
  setShowFindText: any;
  setShowFontSize: any;
}) {
  function handleFontSize(e) {
    let value = e.target.value;
    editor.chain().selectAll().setFontSize(value).run();
  }
  if (showFindText || showFontSize)
    return (
      <>
        {showFindText && (
          <div
            style={{ maxWidth: 300, margin: "0 auto" }}
            className="flex items-center gap-2"
          >
            <SearchString
              setSearchLocation={setSearchLocation}
              editor={editor}
            />
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
                    defaultValue={16}
                    onChange={handleFontSize}
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
        <SearchString setSearchLocation={setSearchLocation} editor={editor} />
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
              defaultValue={16}
              onChange={handleFontSize}
            ></input>
          </div>
        </div>
        <p className="text-sm leading-tight text-gray-500">A+</p>
      </div>
    </div>
  );
}
export default EditorSetting;
