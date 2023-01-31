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
      <div className="flex-1" style={{ maxHeight: 29 }}>
        <SearchString setSearchLocation={setSearchLocation} />
      </div>
      <div className="inline-flex h-6 w-full flex-1 items-center justify-between rounded-full">
        <p className="text-sm leading-tight text-gray-500">A-</p>
        <div className="flex h-2 w-full items-center justify-start ">
          <div className=" flex h-2.5 flex-1 items-center justify-start space-x-16">
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
