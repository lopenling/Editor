import { useLoaderData, useAsyncValue } from "@remix-run/react";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import EditorSettings from "./EditorSettings";
import { Button, Spinner } from "flowbite-react";
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from "~/constants";
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
import { useDetectClickOutside } from "react-detect-click-outside";
type EditorContainerProps = {
  editor: Editor | null;
  isSaving: boolean;
  content: string;
};

function EditorContainer({ editor, isSaving, content }: EditorContainerProps) {
  const flags = useFlags(["suggestionlocation"]);
  const isSuggestionAtBubble = flags.suggestionlocation.enabled;
  const data = useLoaderData();
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [fontSize, setFontSize] = useState(
    isMobile ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE
  );
  useEffect(() => {
    editor?.commands.setContent(content);
  }, [content]);
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
    const text = editor?.getText();
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${data?.text?.name}.txt`;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  const ref = useDetectClickOutside({
    onTriggered: () => setOpenEditMenu(false),
  });
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
        postThread.scrollIntoView({
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
  const handleFontSizeChange = (e) => {
    let value = e.target.value;
    setFontSize(value);
    let editorref = document.querySelector(".editor");
    if (editorref) editorref.setAttribute("style", `font-size:${value}px;`);
  };

  return (
    <div className=" relative shadow-sm  mb-4  ">
      <div className=" bg-white dark:bg-gray-700 z-10 shadow-sm text-3xl  font-bold  text-light py-2 px-2  flex items-center justify-between  text-gray-900 dark:text-white">
        <h3 className="textname flex gap-2 text-2xl">
          {data?.text?.name}
          {isSaving && <Spinner size="sm" />}
        </h3>
        <button
          className="inline-flex  p-1 items-center text-sm font-medium text-center text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white"
          type="button"
          onClick={() => setOpenEditMenu((p) => !p)}
        >
          options
        </button>
        <div
          ref={ref}
          className={`${
            openEditMenu ? "absolute" : "hidden"
          } right-0 top-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li
              onClick={handleExport}
              className=" cursor-pointer flex py-2 px-4 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
              </svg>{" "}
              Export
            </li>
            <li className="cursor-pointer flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Font Size{" "}
              <input
                type="number"
                min={10}
                value={fontSize}
                size={2}
                max={40}
                style={{ border: 0, padding: 0 }}
                onChange={handleFontSizeChange}
              />
            </li>
            <li className="block py-2 cursor-pointer px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Report
            </li>
          </ul>
        </div>
      </div>
      {!editor ? (
        <div className="flex justify-center h-[400px] w-full animate-pulse">
          <div className="flex w-full h-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      ) : (
        <EditorContent
          editor={editor}
          className="editor"
          style={{
            fontSize: isMobile ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE,
          }}
        />
      )}
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
    </div>
  );
}

export default EditorContainer;
