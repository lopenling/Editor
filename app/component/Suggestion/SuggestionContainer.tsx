import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSuggestionThread, selectedTextOnEditor } from "~/states";
import { Editor } from "@tiptap/react";

import Suggestion from "./Suggestion";
import { SuggestionType } from "~/model/type";
function Suggestions({
  editor,
  suggestions,
}: {
  editor: Editor | null;
  suggestions: SuggestionType[];
}) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);

  let list = suggestions.filter((sug) => {
    return sug.threadId === suggestionThread.id;
  });
  return (
    <div
      className="p-2 bg-slate-50 dark:bg-gray-700 shadow-md mt-4 max-h-[70vh] overflow-y-auto"
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
          />
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
