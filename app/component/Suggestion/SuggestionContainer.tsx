import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSuggestionThread, selectedTextOnEditor } from "~/states";
import { Editor } from "@tiptap/react";

import Suggestion from "./Suggestion";
import markAction from "~/tiptap/markAction";
function Suggestions({
  editor,
  suggestions,
}: {
  editor: Editor | null;
  suggestions: any;
}) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);

  let list = suggestions.filter((sug) => {
    return sug.threadId === suggestionThread.id;
  });
  const [suggestionSelector, setSuggestionThread] = useRecoilState(
    selectedSuggestionThread
  );
  const selection = useRecoilValue(selectedTextOnEditor);
  const replacer = (char: string, id: string) => {
    markAction(editor, id, "update", char);
  };

  return (
    <div
      className="p-2 bg-slate-50 shadow-md mt-4 max-h-[70vh] overflow-y-auto"
      style={{ minWidth: 350 }}
    >
      <div className="flex flex-col  gap-2 ">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Suggestion
        </h2>
        {list.map((suggest) => (
          <Suggestion
            optimistic={false}
            editor={editor}
            suggest={suggest}
            key={suggest.id}
            replacer={replacer}
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
