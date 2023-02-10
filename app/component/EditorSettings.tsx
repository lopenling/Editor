import { Editor } from "@tiptap/react";
import SearchString from "./SearchText";
function EditorSetting({
  editor,
  setSearchLocation,
  showEditorSettings,
}: {
  editor: Editor | null;
  setSearchLocation: any;
  showEditorSettings: boolean;
}) {
  function handleFontSize(e) {
    let value = e.target.value;
    editor.chain().selectAll().setFontSize(value).run();
  }

  return (
    <div
      style={{ display: showEditorSettings ? "flex" : null }}
      className="hidden items-center gap-3 md:flex"
    >
      <div className="flex-2" style={{ maxHeight: 37, width: 459 }}>
        <SearchString setSearchLocation={setSearchLocation} />
      </div>
      <div
        style={{
          maxWidth: 297,
        }}
        className="inline-flex flex-1 items-center justify-between rounded-full"
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
