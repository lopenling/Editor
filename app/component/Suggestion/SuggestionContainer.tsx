import { useRecoilState, useRecoilValue } from "recoil";
import { selectedSuggestionThread, selectedTextOnEditor } from "~/states";
import { useEffect } from "react";
import { Editor } from "@tiptap/react";
import { useRevalidator } from "@remix-run/react";

import Suggestion from "./Suggestion";
function Suggestions({
  editor,
  suggestions,
}: {
  editor: Editor | null;
  suggestions: any;
}) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);
  const revalidator = useRevalidator();

  let list = suggestions.filter((sug) => {
    return sug.threadId === suggestionThread.id;
  });
  useEffect(() => {
    return () => revalidator.revalidate();
  }, []);
  const [suggestionSelector, setSuggestionThread] = useRecoilState(
    selectedSuggestionThread
  );
  const selection = useRecoilValue(selectedTextOnEditor);
  function replaceHandler(replace: string) {
    editor
      .chain()
      .focus()
      .insertContentAt(
        {
          from: selection.start,
          to: selection.end,
        },
        replace
      )
      .run();
    setSuggestionThread({ id: "" });
  }

  const replacer = (char: string) => {
    replaceHandler(char);
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
