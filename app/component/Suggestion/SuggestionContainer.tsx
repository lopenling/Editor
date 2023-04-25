import { useRecoilValue } from "recoil";
import { selectedSuggestionThread } from "~/states";
import { useLoaderData } from "@remix-run/react";

import { Editor } from "@tiptap/react";
import Suggestion from "./Suggestion";

export default function Suggestions({ editor }: { editor: Editor | null }) {
  const suggestionThread = useRecoilValue(selectedSuggestionThread);
  const data = useLoaderData();

  let list = data.suggestion.filter((l) => l.threadId === suggestionThread.id);

  return (
    <div className="p-2 bg-slate-50 shadow-md ">
      <div className="flex flex-col  gap-2 ">
        <h2 className="font-light">Suggestion</h2>
        {list?.length > 0 &&
          list
            .sort((a, b) => b.likedBy.length - a.likedBy.length)
            .map((suggest) => (
              <Suggestion editor={editor} suggest={suggest} key={suggest.id} />
            ))}
      </div>
    </div>
  );
}
