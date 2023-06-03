import {
  useFetcher,
  useLoaderData,
  useOutlet,
  useOutletContext,
} from "@remix-run/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { openSuggestionState, selectedSuggestionThread } from "~/states";
import { v4 as uuidv4 } from "uuid";
import { Editor } from "@tiptap/react";
import { Button, TextArea, MustLoggedIn as LogInMessage } from "~/component/UI";
import Suggestion from "./Suggestion";
import { useFetcherWithPromise } from "~/lib";
import { AudioPlayer, AudioRecorder } from "../Media";

type SuggestionFormProps = {
  editor: Editor | null;
};

export default function SuggestionForm({ editor }: SuggestionFormProps) {
  const data = useLoaderData();
  let { user } = data;
  const [suggestionInput, setSuggestionInput] = useState("");
  const [error, setError] = useState<null | string>(null);
  const addSuggestion = useFetcherWithPromise();
  const setSelectedSuggestion = useSetRecoilState(selectedSuggestionThread);
  const setOpenSuggestion = useSetRecoilState(openSuggestionState);
  const [audio, setAudio] = useState({ tempUrl: "", blob: null });
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
    let item = {
      oldValue: originalText,
      textId: data.text.id,
      pageId: data.page.id,
      newValue: suggestionInput,
      userId: user?.id,
      threadId: id,
    };
    let blob = audio.blob;
    var form_data = new FormData();
    if (blob) {
      form_data.append("file", blob, `text-${data?.text?.id}-${uuidv4()}.wav`);
    }
    for (var key in item) {
      form_data.append(key, item[key]);
    }
    let awaitdata = await addSuggestion.submit(form_data, {
      action: "/api/suggestion",
      method: "POST",
      encType: "multipart/form-data",
    });
    if (!awaitdata?.message) {
      editor.commands.setSuggestion({
        id: id,
        original: originalText,
      });
      setError(null);
      setSuggestionInput("");
      setAudio({
        blob: null,
        tempUrl: "",
      });
    }
  };
  const handleSuggestionCancel = () => {
    setSelectedSuggestion({
      id: "",
    });
    setOpenSuggestion(false);
  };
  let isPosting = addSuggestion.formData;
  if (!user) return <LogInMessage />;
  if (isPosting)
    return (
      <div className="p-2 bg-slate-50 dark:bg-gray-700 shadow-md ">
        <div className="flex flex-col gap-2 ">
          <Suggestion
            editor={null}
            optimistic={true}
            suggest={{
              created_at: new Date(),
              id: "",
              likedBy: [],
              newValue: addSuggestion.formData?.get("newValue") as string,
              oldValue: addSuggestion.formData?.get("oldValue") as string,
              textId: parseInt(addSuggestion.formData?.get("textId") as string),
              threadId: addSuggestion.formData?.get("threadId") as string,
              updatedAt: new Date(),
              user: user,
              suggestionComments: [],
              userId: "",
              text: data.text.id,
              audioUrl: "",
            }}
          />
        </div>
      </div>
    );
  return (
    <div className="p-2 ml-2 bg-slate-50 dark:bg-gray-700 shadow-md mb-2">
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
      {audio.tempUrl !== "" ? (
        <>
          <div className="w-full flex items-center gap-3 mt-2">
            <AudioPlayer src={audio.tempUrl} />
            <div onClick={() => setAudio({ tempUrl: "", blob: null })}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 2C8.81434 2.0001 8.63237 2.05188 8.47447 2.14955C8.31658 2.24722 8.18899 2.38692 8.106 2.553L7.382 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5C3 5.26522 3.10536 5.51957 3.29289 5.70711C3.48043 5.89464 3.73478 6 4 6V16C4 16.5304 4.21071 17.0391 4.58579 17.4142C4.96086 17.7893 5.46957 18 6 18H14C14.5304 18 15.0391 17.7893 15.4142 17.4142C15.7893 17.0391 16 16.5304 16 16V6C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H12.618L11.894 2.553C11.811 2.38692 11.6834 2.24722 11.5255 2.14955C11.3676 2.05188 11.1857 2.0001 11 2H9ZM7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V14C9 14.2652 8.89464 14.5196 8.70711 14.7071C8.51957 14.8946 8.26522 15 8 15C7.73478 15 7.48043 14.8946 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14V8ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z"
                  className="fill-gray-200"
                />
              </svg>
            </div>
          </div>
        </>
      ) : null}
      {error && <div className="text-red-400">{error}</div>}
      <div className="flex justify-between">
        {audio.tempUrl === "" ? <AudioRecorder setAudio={setAudio} /> : <div />}
        <div className="flex justify-end mt-3 gap-2">
          <Button
            disabled={addSuggestion.state !== "idle"}
            onClick={handleSuggestionSubmit}
            type="submit"
            label="submit"
          />
          <Button
            onClick={handleSuggestionCancel}
            type="reset"
            label="cancel"
          />
        </div>
      </div>
    </div>
  );
}
