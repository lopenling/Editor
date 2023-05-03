import { useLoaderData, useAsyncValue } from "@remix-run/react";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import EditorSettings from "./EditorSettings";
import { Button, Spinner } from "flowbite-react";
import { DEFAULT_FONT_SIZE } from "~/constants";
import uselitteraTranlation from "~/locales/useLitteraTranslations";
import {
  openSuggestionState,
  selectedPostThread,
  selectedTextOnEditor,
  showFontSizeState,
  showSearchPanelState,
} from "~/states";
import { useFlags } from "flagsmith/react";
import SuggestionForm from "../Suggestion/SuggestionForm";
import { isMobile } from "react-device-detect";
type EditorContainerProps = {
  editor: Editor | null;
  isSaving: boolean;
};

function EditorContainer({ editor, isSaving }: EditorContainerProps) {
  const flags = useFlags(["suggestionlocation"]);
  const AsyncData = useAsyncValue();
  const isSuggestionAtBubble = flags.suggestionlocation.enabled;
  const data = useLoaderData();
  const translation = uselitteraTranlation();
  const [showEditorSettings, setShowEditorSettings] = useState(false);
  const setShowFindText = useSetRecoilState(showSearchPanelState);
  const setShowFontSize = useSetRecoilState(showFontSizeState);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setSelectionRange({
        ...selection,
        type,
      });
    setOpenSuggestion(false);
  };

  function handleSuggestionClick() {
    setOpenSuggestion(!openSuggestion);
    setSelectionRange({
      ...selection,
      type: "",
    });
  }
  function handleDeleteMark() {
    if (editor.isActive("post")) {
      editor.commands.unsetPost();
    }

    if (editor.isActive("suggestion")) {
      editor.commands.unsetSuggestion();
    }
  }
  function handleExport() {
    const __html = editor.getHTML();
    const element = document.createElement("a");
    const textWithNewlines = __html.replace(
      /<br\s*\/?\s*(class\s*=\s*['"]\S*['"])?\s*>/gi,
      "\n"
    );
    let text = textWithNewlines.replace(/(<([^>]+)>)/gi, "");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${data?.text?.name}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  useEffect(() => {
    editor?.commands.setContent(AsyncData.content);
  }, [editor]);
  let thread = useRecoilValue(selectedPostThread);
  useEffect(() => {
    if (thread?.id) {
      let editorThread = document.getElementById(thread.id);
      let postThread = document.getElementById(`p_${thread.id}`);
      if (editorThread && postThread) {
        editorThread.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });

        setTimeout(() => {
          window.getSelection().selectAllChildren(editorThread);
        }, 100);
      }
    }
  }, [thread.id]);
  return (
    <div className="flex gap-3 ">
      <div className="  flex-1 textEditorContainer  mb-4 px-4 lg:max-h-max">
        <div className="text-3xl font-bold  relative top-[-5px] text-light my-4   flex items-center justify-between  text-gray-900 dark:text-white">
          <h3 className="textname flex gap-2 text-2xl">
            {data?.text?.name}
            {isSaving && <Spinner size="sm" />}
          </h3>
          <Button
            onClick={handleExport}
            size="xs"
            color=""
            className="export bg-gray-200 text-gray-600"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293Z"
                className="fill-gray-600"
              />
            </svg>
            export
          </Button>
        </div>
        <div className="sticky top-[110px] shadow-textEditor pt-3 overflow-y-auto md:overflow-hidden">
          {!editor ? (
            <div className="flex justify-center h-[400px] w-full animate-pulse">
              <div className="flex w-full h-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
          ) : (
            <EditorContent
              editor={editor}
              className="editor"
              style={{
                fontSize: DEFAULT_FONT_SIZE,
              }}
            />
          )}
        </div>
        {editor && (
          <BubbleMenu
            shouldShow={({ editor }) => {
              const postmarkType = editor.schema.marks.post;
              const suggestmarkType = editor.schema.marks.suggestion;

              // check if the mark is partially included in the selection
              const selection = editor.state.selection;
              if (editor.isActive("suggestion") || editor.isActive("post")) {
                return true;
              } else if (
                editor.state.doc.rangeHasMark(
                  selection.$from.pos,
                  selection.$to.pos,
                  postmarkType
                ) ||
                editor.state.doc.rangeHasMark(
                  selection.$from.pos,
                  selection.$to.pos,
                  suggestmarkType
                )
              ) {
                return false;
              } else {
                return true;
              }
            }}
            editor={editor}
            tippyOptions={{
              appendTo: "parent",
              placement: isMobile ? "bottom" : "top",
            }}
          >
            <div className="flex flex-col bg-green-200 rounded">
              <Button.Group>
                {!editor.isActive("suggestion") && !editor.isActive("post") ? (
                  <>
                    {selection.content.length > 1 && (
                      <Button
                        size="sm"
                        title="suggestion"
                        color="gray"
                        className={`${
                          openSuggestion
                            ? "bg-green-400 fill-white"
                            : "bg-white fill-green-400"
                        } hover:bg-green-200 hover:text-green-500 rounded-none `}
                        onClick={handleSuggestionClick}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.586 1.586C10.7705 1.39498 10.9912 1.24262 11.2352 1.1378C11.4792 1.03298 11.7416 0.977809 12.0072 0.975501C12.2728 0.973194 12.5361 1.0238 12.7819 1.12436C13.0277 1.22492 13.251 1.37343 13.4388 1.56121C13.6266 1.749 13.7751 1.9723 13.8756 2.21809C13.9762 2.46389 14.0268 2.72725 14.0245 2.9928C14.0222 3.25836 13.967 3.5208 13.8622 3.76481C13.7574 4.00882 13.605 4.22951 13.414 4.414L12.621 5.207L9.793 2.379L10.586 1.586ZM8.379 3.793L0 12.172V15H2.828L11.208 6.621L8.378 3.793H8.379Z"
                            className="fill-inherit"
                          />
                        </svg>
                      </Button>
                    )}
                    {selection.content.length > 5 &&
                      selection.content.length < 245 && (
                        <>
                          <Button
                            size="sm"
                            title="comment"
                            color="gray"
                            className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none "
                            onClick={() => handleBubbleClick("comment")}
                          >
                            <svg
                              width="16"
                              height="14"
                              viewBox="0 0 16 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 7C16 10.866 12.418 14 8 14C6.58005 14.006 5.17955 13.6698 3.917 13.02L0 14L1.338 10.877C0.493 9.767 0 8.434 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM5 6H3V8H5V6ZM13 6H11V8H13V6ZM7 6H9V8H7V6Z"
                                className="fill-green-400"
                              />
                            </svg>
                          </Button>
                          <Button
                            size="sm"
                            title="question"
                            color="gray"
                            className="bg-white text-green-400 hover:bg-green-200 hover:text-green-500 rounded-none "
                            onClick={() => handleBubbleClick("question")}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.228 7C6.777 5.835 8.258 5 10 5C12.21 5 14 6.343 14 8C14 9.4 12.722 10.575 10.994 10.907C10.452 11.011 10 11.447 10 12M10 15H10.01M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="fill-green-400"
                              />
                            </svg>
                          </Button>
                        </>
                      )}
                  </>
                ) : data?.user?.admin === "true" ||
                  data.text.userId == data.user?.id ? (
                  <Button
                    size="sm"
                    title="delete"
                    color="gray"
                    className="bg-white hover:bg-red-300 hover:fill-slate-500 "
                    onClick={() => handleDeleteMark()}
                  >
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 0C5.81434 9.91486e-05 5.63237 0.0518831 5.47447 0.149552C5.31658 0.247222 5.18899 0.386919 5.106 0.553L4.382 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4V14C1 14.5304 1.21071 15.0391 1.58579 15.4142C1.96086 15.7893 2.46957 16 3 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V4C13.2652 4 13.5196 3.89464 13.7071 3.70711C13.8946 3.51957 14 3.26522 14 3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H9.618L8.894 0.553C8.81101 0.386919 8.68342 0.247222 8.52553 0.149552C8.36763 0.0518831 8.18566 9.91486e-05 8 0H6ZM4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5C5.26522 5 5.51957 5.10536 5.70711 5.29289C5.89464 5.48043 6 5.73478 6 6V12C6 12.2652 5.89464 12.5196 5.70711 12.7071C5.51957 12.8946 5.26522 13 5 13C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12V6ZM9 5C8.73478 5 8.48043 5.10536 8.29289 5.29289C8.10536 5.48043 8 5.73478 8 6V12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12V6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5Z"
                        className="fill-gray-400"
                      />
                    </svg>
                  </Button>
                ) : (
                  <div />
                )}
              </Button.Group>
              {openSuggestion && isSuggestionAtBubble && (
                <SuggestionForm editor={editor} />
              )}
            </div>
          </BubbleMenu>
        )}
        {/* <div
            className="absolute  right-3 z-40 md:hidden"
            onClick={() => setShowEditorSettings((prev) => !prev)}
          >
            {showEditorSettings && (
              <div className="bg-white shadow rounded-md absolute bottom-full right-0 w-max p-2">
                <button
                  className="bg-white text-gray-700 flex justify-between items-center gap-2 p-1"
                  onClick={() => setShowFindText(true)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 14.75L10.25 10.25M11.75 6.5C11.75 7.18944 11.6142 7.87213 11.3504 8.50909C11.0865 9.14605 10.6998 9.7248 10.2123 10.2123C9.7248 10.6998 9.14605 11.0865 8.50909 11.3504C7.87213 11.6142 7.18944 11.75 6.5 11.75C5.81056 11.75 5.12787 11.6142 4.49091 11.3504C3.85395 11.0865 3.2752 10.6998 2.78769 10.2123C2.30018 9.7248 1.91347 9.14605 1.64963 8.50909C1.3858 7.87213 1.25 7.18944 1.25 6.5C1.25 5.10761 1.80312 3.77226 2.78769 2.78769C3.77226 1.80312 5.10761 1.25 6.5 1.25C7.89239 1.25 9.22774 1.80312 10.2123 2.78769C11.1969 3.77226 11.75 5.10761 11.75 6.5Z"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {translation.search}
                </button>
                <button
                  className="bg-white text-gray-700 flex justify-between items-center gap-2 p-1"
                  onClick={() => setShowFontSize(true)}
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 115.77 122.88"
                  >
                    <style type="text/css"></style>
                    <g>
                      <path
                        className="st0"
                        d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"
                      />
                    </g>
                  </svg>
                  {translation.fontSize}
                </button>
              </div>
            )}
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#9CA3AF" />
              <path
                d="M17.05 30.4618L17.3 30.3175V30.0288V18.4C17.3 18.1083 17.4159 17.8285 17.6222 17.6222C17.8285 17.4159 18.1083 17.3 18.4 17.3C18.6917 17.3 18.9715 17.4159 19.1778 17.6222C19.3841 17.8285 19.5 18.1083 19.5 18.4V30.0288V30.3175L19.75 30.4618C20.1604 30.6988 20.5012 31.0396 20.7382 31.4501C20.9751 31.8605 21.0999 32.3261 21.0999 32.8C21.0999 33.2739 20.9751 33.7395 20.7382 34.1499C20.5012 34.5604 20.1604 34.9012 19.75 35.1382L19.5 35.2825V35.5712V37.6C19.5 37.8917 19.3841 38.1715 19.1778 38.3778C18.9715 38.5841 18.6917 38.7 18.4 38.7C18.1083 38.7 17.8285 38.5841 17.6222 38.3778C17.4159 38.1715 17.3 37.8917 17.3 37.6V35.5712V35.2825L17.05 35.1382C16.6396 34.9012 16.2988 34.5604 16.0618 34.1499C15.8249 33.7395 15.7001 33.2739 15.7001 32.8C15.7001 32.3261 15.8249 31.8605 16.0618 31.4501C16.2988 31.0396 16.6396 30.6988 17.05 30.4618ZM26.65 20.8618L26.9 20.7175V20.4288V18.4C26.9 18.1083 27.0159 17.8285 27.2222 17.6222C27.4285 17.4159 27.7083 17.3 28 17.3C28.2917 17.3 28.5715 17.4159 28.7778 17.6222C28.9841 17.8285 29.1 18.1083 29.1 18.4V20.4288V20.7175L29.35 20.8618C29.7604 21.0988 30.1012 21.4396 30.3382 21.8501C30.5751 22.2605 30.6999 22.7261 30.6999 23.2C30.6999 23.6739 30.5751 24.1395 30.3382 24.5499C30.1012 24.9604 29.7604 25.3012 29.35 25.5382L29.1 25.6825V25.9712V37.6C29.1 37.8917 28.9841 38.1715 28.7778 38.3778C28.5715 38.5841 28.2917 38.7 28 38.7C27.7083 38.7 27.4285 38.5841 27.2222 38.3778C27.0159 38.1715 26.9 37.8917 26.9 37.6V25.9712V25.6825L26.65 25.5382C26.2396 25.3012 25.8988 24.9604 25.6618 24.5499C25.4249 24.1395 25.3001 23.6739 25.3001 23.2C25.3001 22.7261 25.4249 22.2605 25.6618 21.8501C25.8988 21.4396 26.2396 21.0988 26.65 20.8618ZM38.7 30.0288V30.3175L38.95 30.4618C39.3604 30.6988 39.7012 31.0396 39.9382 31.4501C40.1751 31.8605 40.2999 32.3261 40.2999 32.8C40.2999 33.2739 40.1751 33.7395 39.9382 34.1499C39.7012 34.5604 39.3604 34.9012 38.95 35.1382L38.7 35.2825V35.5712V37.6C38.7 37.8917 38.5841 38.1715 38.3778 38.3778C38.1715 38.5841 37.8917 38.7 37.6 38.7C37.3083 38.7 37.0285 38.5841 36.8222 38.3778C36.6159 38.1715 36.5 37.8917 36.5 37.6V35.5712V35.2825L36.25 35.1382C35.8396 34.9012 35.4988 34.5604 35.2618 34.1499C35.0249 33.7395 34.9001 33.2739 34.9001 32.8C34.9001 32.3261 35.0249 31.8605 35.2618 31.4501C35.4988 31.0396 35.8396 30.6988 36.25 30.4618L36.5 30.3175V30.0288V18.4C36.5 18.1083 36.6159 17.8285 36.8222 17.6222C37.0285 17.4159 37.3083 17.3 37.6 17.3C37.8917 17.3 38.1715 17.4159 38.3778 17.6222C38.5841 17.8285 38.7 18.1083 38.7 18.4V30.0288Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </div> */}
      </div>
    </div>
  );
}

export default EditorContainer;
