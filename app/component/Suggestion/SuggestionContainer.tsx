import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedSuggestionThread, selectedTextOnEditor } from "~/states";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Editor } from "@tiptap/react";
import Suggestion from "./Suggestion";

function Suggestions({ editor }: { editor: Editor | null }) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);
  let data = useLoaderData();
  let list = data.suggestions.filter((sug) => {
    return sug.threadId === suggestionThread.id;
  });
  const suggestionSelector = useSetRecoilState(selectedSuggestionThread);
  const selection = useRecoilValue(selectedTextOnEditor);
  const replaceRef = useRef(list[0]?.id);

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
    suggestionSelector({ id: null });
  }

  useEffect(() => {
    if (list[0] && replaceRef.current !== list[0].id) {
      replaceHandler(list[0].newValue);
    }
  }, [list[0]?.id]);
  return (
    <div className="p-2 bg-slate-50 shadow-md mt-4  max-h-[70vh] overflow-y-auto">
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

export default memo(Suggestions);
