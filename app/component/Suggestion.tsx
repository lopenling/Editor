import { useRecoilState, useRecoilValue } from "recoil";
import { selectedThread } from "~/states";
import { useEffect, useState } from "react";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Avatar, Button, Spinner, TextInput } from "flowbite-react";
import { v4 as uuidv4 } from "uuid";

export default function Suggestion({ editor }) {
  const [suggestionInput, setSuggestionInput] = useState("");
  const suggestionFetcher = useFetcher();

  const [suggestionThread, setSelectedSuggestion] =
    useRecoilState(selectedThread);
  const addSuggestion = useFetcher();
  const data = useLoaderData();
  useEffect(() => {
    if (suggestionThread?.id && suggestionThread.type === "suggestion")
      suggestionFetcher.load(
        `/api/suggestion?suggestionId=${suggestionThread.id}`
      );
  }, [suggestionThread.id]);
  let list = suggestionFetcher.data;

  const handleSuggestionSubmit = () => {
    const { state } = editor;
    const { from, to } = state.selection;
    const originalText = state.doc.textBetween(from, to, " ");
    let id = null;
    if (!editor.isActive("suggestion")) {
      id = uuidv4();
      editor.commands.setSuggestion({
        id: id,
        original: originalText,
      });
    } else {
      id = editor.getAttributes("suggestion").id;
    }
    setSelectedSuggestion({
      type: "suggestion",
      id: id,
    });
    let oldValue = document
      .getElementById(suggestionThread?.id)
      .getAttribute("original");
    addSuggestion.submit(
      {
        oldValue,
        textId: data.text.id,
        newValue: suggestionInput,
        userId: data.user.id,
        threadId: suggestionThread?.id,
      },
      {
        action: "/api/suggestion",
        method: "post",
      }
    );
  };
  const handleSuggestionCancel = () => {
    console.log("cancel");
    if (editor.isActive("suggestion")) editor.commands.unsetSuggestion();
  };

  return (
    <div className="p-2 bg-slate-50 shadow-md m-3">
      <div className="flex flex-col  gap-2 ">
        {list?.length > 0 &&
          list.map((suggest) => (
            <EachSuggestion suggest={suggest} key={suggest.id} />
          ))}
      </div>
      <div className="flex justify-evenly">
        <TextInput
          type="text"
          placeholder="what is suggestion?"
          value={suggestionInput}
          onChange={(e) => setSuggestionInput(e.target.value)}
        />
        <Button
          color="primary"
          className="bg-green-400 text-slate-800"
          disabled={addSuggestion.state !== "idle"}
          onClick={handleSuggestionSubmit}
        >
          submit
        </Button>
        <Button
          color="primary"
          className="bg-red-400 text-slate-800"
          onClick={handleSuggestionCancel}
        >
          cancel
        </Button>
      </div>
    </div>
  );
}

function EachSuggestion({ suggest }) {
  const likeFetcher = useFetcher();
  const data = useLoaderData();
  const [effect, setEffect] = useState(false);

  let likedByMe = data.user
    ? suggest.likedBy.some((l) => l.username === data.user.username)
    : false;
  let likeInFetcher = likeFetcher?.submission?.formData?.get("like");

  let likeCount = likeFetcher.data
    ? likeFetcher.data?.length
    : suggest.likedBy.length;
  if (likeInFetcher === "true") {
    likedByMe = true;
    if (likeFetcher.type === "actionSubmission") likeCount++;
  }
  if (likeInFetcher === "false") {
    likedByMe = false;
    if (likeFetcher.type === "actionSubmission") likeCount--;
  }
  const handleLike = (id) => {
    setEffect(true);

    likeFetcher.submit(
      {
        id,
        _action: "likeSuggestion",
        userId: data.user.id,
        like: !likedByMe ? "true" : "false",
      },
      { method: "post", action: "api/like" }
    );
  };
  return (
    <div key={suggest.id} className=" p-3">
      <div className="flex justify-between mb-2">
        <div className="flex gap-3">
          <Avatar
            rounded={true}
            size="xs"
            img={suggest.user.avatarUrl}
            alt="avataruser"
          />
          <p className="text-base font-medium leading-tight text-gray-900 dark:text-gray-200">
            {suggest.user.name}
          </p>
        </div>
        <button
          disabled={likeFetcher.state === "submitting"}
          onClick={() => handleLike(suggest.id)}
          className={`${
            effect && "animate-wiggle"
          } flex cursor-pointer items-center justify-start space-x-1.5`}
          onAnimationEnd={() => setEffect(false)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={!likedByMe ? { fill: "gray" } : { fill: "lightgreen" }}
              d="M0.800049 7.95005C0.800049 7.77276 0.834968 7.59722 0.902812 7.43343C0.970655 7.26964 1.0701 7.12081 1.19545 6.99545C1.32081 6.8701 1.46964 6.77066 1.63343 6.70281C1.79722 6.63497 1.97276 6.60005 2.15005 6.60005C2.32733 6.60005 2.50288 6.63497 2.66667 6.70281C2.83046 6.77066 2.97928 6.8701 3.10464 6.99545C3.23 7.12081 3.32944 7.26964 3.39729 7.43343C3.46513 7.59722 3.50005 7.77276 3.50005 7.95005V13.35C3.50005 13.7081 3.35782 14.0515 3.10464 14.3046C2.85147 14.5578 2.50809 14.7 2.15005 14.7C1.79201 14.7 1.44863 14.5578 1.19545 14.3046C0.942281 14.0515 0.800049 13.7081 0.800049 13.35V7.95005ZM4.40005 7.79975V12.6867C4.39989 13.0212 4.49295 13.3492 4.66877 13.6337C4.84459 13.9183 5.09623 14.1482 5.39545 14.2977L5.44045 14.3202C5.93985 14.5698 6.49045 14.6999 7.04875 14.7H11.9231C12.3394 14.7002 12.7429 14.5561 13.0648 14.2922C13.3868 14.0284 13.6074 13.6611 13.6889 13.2528L14.7689 7.85285C14.8211 7.59173 14.8147 7.32229 14.7502 7.06395C14.6857 6.8056 14.5647 6.56478 14.3959 6.35886C14.227 6.15293 14.0146 5.98703 13.774 5.87311C13.5333 5.75918 13.2703 5.70008 13.004 5.70005H9.80005V2.10005C9.80005 1.62266 9.61041 1.16482 9.27284 0.827257C8.93528 0.489691 8.47744 0.300049 8.00005 0.300049C7.76135 0.300049 7.53244 0.39487 7.36365 0.563653C7.19487 0.732435 7.10005 0.961354 7.10005 1.20005V1.80035C7.10005 2.57928 6.84741 3.3372 6.38005 3.96035L5.12005 5.63975C4.65269 6.2629 4.40005 7.02082 4.40005 7.79975V7.79975Z"
            ></path>
          </svg>
          <div className="  text-sm font-medium leading-tight text-gray-500 dark:text-gray-100">
            {likeCount > 0 && likeCount}
          </div>
        </button>
      </div>
      <div className=" w-full text-base leading-normal text-black">
        <span className="font-bold ">Replace :</span>
        <span className="text-gray-500 dark:text-gray-100">
          "{suggest.oldValue}"
        </span>
        <span className="font-bold "> with :</span>
        <span className="text-gray-500 dark:text-gray-100">
          "{suggest.newValue}"
        </span>
      </div>
    </div>
  );
}
