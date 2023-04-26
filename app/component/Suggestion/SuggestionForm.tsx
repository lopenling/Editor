import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { openSuggestionState, selectedSuggestionThread } from "~/states";
import { v4 as uuidv4 } from "uuid";
import { Editor } from "@tiptap/react";
import TextArea from "../UI/TextArea";
import { Button } from "../UI/Button";
import Suggestion from "./Suggestion";
import useFetcherWithPromise from "~/utility/useFetcher";

type SuggestionFormProps = {
  editor: Editor | null;
};

export default function SuggestionForm({ editor }: SuggestionFormProps) {
  const data = useLoaderData();
  let user = data.user;
  const [suggestionInput, setSuggestionInput] = useState("");
  const [error, setError] = useState<null | string>(null);
  const addSuggestion = useFetcherWithPromise();
  const setSelectedSuggestion = useSetRecoilState(selectedSuggestionThread);
  const setOpenSuggestion = useSetRecoilState(openSuggestionState);
  const handleSuggestionSubmit = async () => {
    if (suggestionInput === "") {
      setError("suggestion cannot be empty");
      return null;
    }
    const { state } = editor;
    const { from, to } = state.selection;
    const originalText = state.doc.textBetween(from, to, " ");
    let id = null;

    if (!editor.isActive("suggestion")) {
      id = uuidv4();
    } else {
      id = editor.getAttributes("suggestion").id;
    }
    setSelectedSuggestion({
      id: id,
    });
    let oldValue = originalText;
    let awaitdata = await addSuggestion.submit(
      {
        oldValue,
        textId: data.text.id,
        newValue: suggestionInput,
        userId: data.user.id,
        threadId: id,
      },
      {
        action: "/api/suggestion",
        method: "post",
      }
    );
    if (!awaitdata?.message) {
      editor.commands.setSuggestion({
        id: id,
        original: originalText,
      });
      setError(null);
      setSuggestionInput("");
    }
  };
  const handleSuggestionCancel = () => {
    setSelectedSuggestion({
      id: null,
    });
    setOpenSuggestion(false);
  };
  let isPosting = addSuggestion.formData;
  if (!user) return <div className="text-red-600">You must login first !</div>;
  if (isPosting)
    return (
      <div className="p-2 bg-slate-50 shadow-md ">
        <div className="flex flex-col gap-2 ">
          <Suggestion
            editor={null}
            optimistic={true}
            suggest={{
              created_at: Date.now(),
              id: "",
              likedBy: [],
              newValue: addSuggestion.formData?.get("newValue") as string,
              oldValue: addSuggestion.formData?.get("oldValue") as string,
              textId: parseInt(addSuggestion.formData?.get("textId") as string),
              threadId: addSuggestion.formData?.get("threadId") as string,
              updated_at: "",
              user: user,
            }}
          />
        </div>
      </div>
    );
  return (
    <div className="p-2 bg-slate-50 shadow-md mb-2">
      {addSuggestion.data?.message && (
        <div className="font-sm text-red-500">
          {addSuggestion.data?.message}
        </div>
      )}
      <TextArea
        placeholder="any suggestion?"
        value={suggestionInput}
        rows={1}
        onChange={(e) => setSuggestionInput(e.target.value)}
      />
      {error && <div className="text-red-400">{error}</div>}
      <div className="flex justify-end mt-3 gap-2">
        <Button
          disabled={addSuggestion.state !== "idle"}
          onClick={handleSuggestionSubmit}
          type="submit"
          label="submit"
        />
        <Button onClick={handleSuggestionCancel} type="reset" label="cancel" />
      </div>
    </div>
  );
}
