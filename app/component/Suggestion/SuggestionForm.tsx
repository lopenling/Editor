import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { openSuggestionState, selectedSuggestionThread } from "~/states";
import { v4 as uuidv4 } from "uuid";
import { Editor } from "@tiptap/react";
import TextArea from "../UI/TextArea";
import { Button } from "../UI/Button";

type SuggestionFormProps = {
  editor: Editor | null;
};

export default function SuggestionForm({ editor }: SuggestionFormProps) {
  const data = useLoaderData();
  let user = data.user;
  const [suggestionInput, setSuggestionInput] = useState("");
  const addSuggestion = useFetcher();
  const setSelectedSuggestion = useSetRecoilState(selectedSuggestionThread);
  const setOpenSuggestion = useSetRecoilState(openSuggestionState);
  const handleSuggestionSubmit = () => {
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
    addSuggestion.submit(
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
    editor.commands.setSuggestion({
      id: id,
      original: originalText,
    });
    setSuggestionInput("");
  };
  const handleSuggestionCancel = () => {
    setSelectedSuggestion({
      id: null,
    });
    setOpenSuggestion(false);
    // if (editor.isActive("suggestion")) editor.commands.unsetSuggestion();
  };
  if (!user) return <div className="text-red-600">You must login first !</div>;

  return (
    <div className="p-2 bg-slate-50 shadow-md m-3">
      <TextArea
        placeholder="any suggestion?"
        value={suggestionInput}
        rows={1}
        onChange={(e) => setSuggestionInput(e.target.value)}
      />
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
