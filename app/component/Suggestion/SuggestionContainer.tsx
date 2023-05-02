import { useRecoilValue } from "recoil";
import { selectedSuggestionThread } from "~/states";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { memo, useEffect } from "react";
import { Editor } from "@tiptap/react";
import Suggestion from "./Suggestion";

function Suggestions({ editor }: { editor: Editor | null }) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);
  const suggestionFetcher = useFetcher();

  useEffect(() => {
    suggestionFetcher.load(`/api/suggestion/${suggestionThread.id}`);
  }, [suggestionThread]);
  let list = suggestionFetcher.data ?? [];
  return (
    <div className="p-2 bg-slate-50 shadow-md mt-4  max-h-[70vh] overflow-y-auto">
      <div className="flex flex-col  gap-2 ">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Suggestion
        </h2>
        {suggestionFetcher.state === "loading" ? (
          <div>loading</div>
        ) : (
          list
            .sort((a, b) => b.likedBy.length - a.likedBy.length)
            .map((suggest) => (
              <Suggestion editor={editor} suggest={suggest} key={suggest.id} />
            ))
        )}
      </div>
    </div>
  );
}

export default memo(Suggestions);
