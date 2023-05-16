import { useLoaderData } from "@remix-run/react";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// import EditorSettings from "./EditorSettings";
import { FaWrench } from "react-icons/fa";
import { Button } from "../UI/Button";
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from "~/constants";
import {
  UserState,
  openSuggestionState,
  selectedPostThread,
  selectedTextOnEditor,
} from "~/states";
import { isMobile } from "react-device-detect";
import { useDetectClickOutside } from "react-detect-click-outside";
import { changeFont, exportDoc, scrollThreadIntoView } from "~/lib/DOMfunction";
import Spinner from "../UI/Spinner";
type EditorContainerProps = {
  editor: Editor;
  isSaving: boolean;
  content: string;
};
function EditorContainer({ editor, isSaving, content }: EditorContainerProps) {
  const data = useLoaderData();
  const user = useRecoilValue(UserState);
  const [openSuggestion, setOpenSuggestion] =
    useRecoilState(openSuggestionState);
  const [selection, setSelectionRange] = useRecoilState(selectedTextOnEditor);
  let thread = useRecoilValue(selectedPostThread);

  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [fontSize, setFontSize] = useState(
    isMobile ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE
  );
  useEffect(() => {
    editor.commands.setContent(content);
  }, [content]);
  useEffect(() => {
    if (thread?.id) {
      let d = scrollThreadIntoView(thread.id);
      scrollThreadIntoView(`p_${thread.id}`);
      setTimeout(() => {
        window.getSelection().selectAllChildren(d);
      }, 100);
    }
  }, [thread.id]);

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
    exportDoc(text, data.text.name);
  }
  const ref = useDetectClickOutside({
    onTriggered: () => setOpenEditMenu(false),
  });

  const handleFontSizeChange = (e) => {
    let value = e.target.value;
    setFontSize(value);
    changeFont(value);
  };

  return (
    <div className=" relative shadow-sm  mb-4  ">
      <div className=" bg-white dark:bg-gray-700 z-10 shadow-sm text-3xl  font-bold  text-light py-4 px-2  flex items-center justify-between  text-gray-900 dark:text-white">
        <h3 className="textname flex gap-2 text-2xl">
          {data?.text?.name} {isSaving && <Spinner />}
        </h3>
        <button
          className="inline-flex text-gray-800 hover:text-white p-2 items-center text-sm font-medium text-center  bg-gray-300  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white"
          type="button"
          onClick={() => setOpenEditMenu((p) => !p)}
        >
          <FaWrench color="inherit" />
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
          className="editor transition-all"
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
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {!editor.isActive("suggestion") && !editor.isActive("post") ? (
              <>
                {selection.content.length > 1 && (
                  <Button
                    title="suggestion"
                    type="button"
                    color="gray"
                    className={`${
                      openSuggestion ? "bg-green-400" : "bg-white "
                    } px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white `}
                    onClick={() => handleSuggestionClick()}
                    label="Edit"
                  />
                )}
                {selection.content.length > 5 &&
                  selection.content.length < 245 && (
                    <>
                      <Button
                        title="comment"
                        color="gray"
                        className=" px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white "
                        onClick={() => handleBubbleClick("comment")}
                        label="Comment"
                        type="button"
                      />
                      <Button
                        type="button"
                        title="question"
                        color="gray"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white "
                        onClick={() => handleBubbleClick("question")}
                        label="Question"
                      />
                    </>
                  )}
              </>
            ) : data?.user?.admin === "true" || data.text.userId == user?.id ? (
              <Button
                title="delete"
                type="button"
                color="gray"
                className=" px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={() => handleDeleteMark()}
                label="Delete"
              />
            ) : null}
          </div>
        </BubbleMenu>
      )}
    </div>
  );
}

export default EditorContainer;
