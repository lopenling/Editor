import { Form, useLoaderData, useTransition } from "@remix-run/react";
import Document from "@tiptap/extension-document";
import { SearchAndReplace } from "~/tiptap-extension/searchAndReplace";
import TextStyle from "@tiptap/extension-text-style";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Text from "@tiptap/extension-text";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import React, { useEffect } from "react";
// import SelectTextOnRender from "~/extension/selectionOnFirstRender";
import CopyIcon from "~/assets/icon_copy.svg";
import Post from "./Post";
import PostList from "./PostList";
import { FontSize } from "~/tiptap-extension/fontSize";
import EditorSettings from "./EditorSettings";
// import applyAnnotation from "~/tiptap-extension/applyMarks";
import { searchMarks } from "~/tiptap-extension/searchMarks";
import { Button } from "flowbite-react";
import { DEFAULT_FONT_SIZE } from "~/constants";
function Editor() {
  const data = useLoaderData();
  const [showEditorSettings, setShowEditorSettings] = React.useState(false);
  const [showFindText, setShowFindText] = React.useState(false);
  const [showFontSize, setShowFontSize] = React.useState(false);
  const [postInfo, setPostInfo] = React.useState<null | {
    type: string;
    start: number;
    end: number;
    content: string;
  }>(null);
  const [selection, setSelection] = React.useState<null | {
    start: number;
    end: number;
    text: string;
  }>(null);
  const [openFilter, setOpenFilter] = React.useState<boolean>(false);
  let content = React.useMemo(() => {
    return data.text.content;
  }, []);
  const editor = useEditor(
    {
      extensions: [
        Document,
        Paragraph,
        Text,
        Bold,
        TextStyle,
        FontSize,
        searchMarks,
        SearchAndReplace.configure({
          searchResultClass: "search",
          caseSensitive: false,
          disableRegex: false,
        }),
        // SelectTextOnRender,
      ],
      content: content,
      editable: true,
      editorProps: {
        handleDOMEvents: {
          keydown: (value, event) => {
            if (![37, 38, 39, 40].includes(event.keyCode)) {
              event.preventDefault();
              this.blur();
            }
          },
          textInput: (value, evt) => {
            evt.preventDefault();
          },
          drop: (value, e) => {
            e.preventDefault();
          },
          dragstart: (value, e) => {
            e.preventDefault();
          },
        },
        attributes: {
          inputmode: "none",
        },
      },
      onSelectionUpdate: ({ editor }) => {
        let from = editor.state.selection.from;
        let to = editor.state.selection.to;
        setPostInfo(null);
        setSelection({
          start: from,
          end: to,
          text: editor?.state.doc.textBetween(from, to, ""),
        });
      },
    },
    []
  );
  const handleBubbleClick = (type: string) => {
    if (selection.start)
      setPostInfo({
        type: type,
        start: selection.start,
        end: selection.end,
        content: selection.text,
      });
  };
  return (
    <div className="mt-5 flex w-full flex-col gap-5 lg:flex-row  container lg:px-16">
      <div className="relative flex-1 px-5" style={{ maxHeight: "75vh" }}>
        <EditorSettings
          editor={editor}
          showFindText={showFindText}
          showFontSize={showFontSize}
          setShowFindText={setShowFindText}
          setShowFontSize={setShowFontSize}
        />
        <h1
          style={{ fontSize: 24 }}
          className=" my-4 text-center  flex items-center justify-center  text-lg  text-gray-900"
        >
          {data?.text?.name}
        </h1>
        <div className=" max-h-80 overflow-y-scroll lg:max-h-full">
          {editor ? (
            <EditorContent
              editor={editor}
              className="editor"
              style={{
                fontSize: DEFAULT_FONT_SIZE,
                transition: "all ease 0.3s",
              }}
            />
          ) : (
            <div>loading</div>
          )}
        </div>
        {editor && (
          <BubbleMenu
            className="BubbleMenu"
            editor={editor}
            tippyOptions={{ duration: 800, zIndex: 1 }}
          >
            <Button.Group className="rounded ">
              <Button
                size="sm"
                color=""
                className=" bg-white text-green-400 hover:bg-green-200 hover:text-green-500  border-gray-300 border-2"
                onClick={() => handleBubbleClick("comment")}
              >
                Comment
              </Button>
              <Button
                size="sm"
                color=""
                className="bg-white text-green-400 hover:bg-green-200 hover:text-green-500 border-gray-300 border-2"
                onClick={() => handleBubbleClick("question")}
              >
                Question
              </Button>
            </Button.Group>
          </BubbleMenu>
        )}
        <div
          className="absolute bottom-2 right-3 z-40 md:hidden"
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
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.9361 6.76371C5.85308 6.67775 5.75377 6.60919 5.64397 6.56202C5.53417 6.51485 5.41607 6.49003 5.29657 6.48899C5.17706 6.48795 5.05855 6.51072 4.94795 6.55597C4.83734 6.60123 4.73685 6.66805 4.65235 6.75256C4.56785 6.83706 4.50102 6.93755 4.45577 7.04815C4.41051 7.15876 4.38774 7.27727 4.38878 7.39677C4.38982 7.51627 4.41465 7.63437 4.46181 7.74418C4.50898 7.85398 4.57755 7.95329 4.66351 8.03631L7.36351 10.7363C7.53228 10.905 7.76116 10.9998 7.9998 10.9998C8.23845 10.9998 8.46733 10.905 8.6361 10.7363L11.3361 8.03631C11.5 7.86657 11.5908 7.63923 11.5887 7.40325C11.5867 7.16727 11.492 6.94154 11.3251 6.77468C11.1583 6.60781 10.9325 6.51316 10.6966 6.51111C10.4606 6.50906 10.2332 6.59977 10.0635 6.76371L8.89981 7.92741V2.90001H13.3998C13.8772 2.90001 14.335 3.08965 14.6726 3.42722C15.0102 3.76479 15.1998 4.22262 15.1998 4.70001V11C15.1998 11.4774 15.0102 11.9352 14.6726 12.2728C14.335 12.6104 13.8772 12.8 13.3998 12.8H2.5998C2.12242 12.8 1.66458 12.6104 1.32701 12.2728C0.989447 11.9352 0.799805 11.4774 0.799805 11V4.70001C0.799805 4.22262 0.989447 3.76479 1.32701 3.42722C1.66458 3.08965 2.12242 2.90001 2.5998 2.90001H7.0998V7.92741L5.9361 6.76371ZM7.0998 1.10001C7.0998 0.861317 7.19463 0.632399 7.36341 0.463616C7.53219 0.294833 7.76111 0.200012 7.9998 0.200012C8.2385 0.200012 8.46742 0.294833 8.6362 0.463616C8.80498 0.632399 8.89981 0.861317 8.89981 1.10001V2.90001H7.0998V1.10001Z"
                    fill="#6B7280"
                  />
                </svg>
                find in text
              </button>
              <button
                className="bg-white text-gray-700 flex justify-between items-center gap-2 p-1"
                onClick={() => setShowFontSize(true)}
              >
                <img src={CopyIcon} alt="copy" height={16} width={16} />
                font size
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
        </div>
      </div>
      <div className=" relative sm:w-full lg:w-1/3">
        <div className="hidden w-full items-center justify-end md:inline-flex">
          <button
            onClick={() => setOpenFilter((prev) => !prev)}
            className="flex items-center justify-center space-x-2 rounded-lg border border-gray-200 px-3 py-2 mb-3"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.3999 2.89998C2.3999 2.6878 2.48419 2.48432 2.63422 2.33429C2.78425 2.18426 2.98773 2.09998 3.1999 2.09998H12.7999C13.0121 2.09998 13.2156 2.18426 13.3656 2.33429C13.5156 2.48432 13.5999 2.6878 13.5999 2.89998V5.29998C13.5999 5.51213 13.5155 5.71558 13.3655 5.86558L9.5999 9.63117V12.5C9.59986 12.7121 9.51554 12.9156 9.3655 13.0656L7.7655 14.6656C7.65362 14.7774 7.51109 14.8536 7.35593 14.8844C7.20077 14.9153 7.03994 14.8995 6.89378 14.8389C6.74762 14.7784 6.62269 14.6759 6.53478 14.5443C6.44687 14.4128 6.39994 14.2582 6.3999 14.1V9.63117L2.6343 5.86558C2.48426 5.71558 2.39995 5.51213 2.3999 5.29998V2.89998Z"
                fill="#6B7280"
              />
            </svg>
            <span className="text-sm font-medium leading-tight text-gray-500">
              filter by
            </span>
          </button>
        </div>
        <div
          className="fixed bottom-2 right-3 z-40 cursor-pointer md:hidden"
          onClick={() => setOpenFilter((prev) => !prev)}
        >
          <svg
            width="56"
            height="56"
            className=" cursor-pointer"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="56"
              height="56"
              rx="28"
              className="fill-slate-500 hover:fill-slate-700"
            />
            <path
              d="M16.3905 16.3905C16.1405 16.6406 16 16.9797 16 17.3333V20.7813C16.0001 21.1349 16.1406 21.474 16.3907 21.724L24.9427 30.276C25.1927 30.526 25.3333 30.8651 25.3333 31.2187V40L30.6667 34.6667V31.2187C30.6667 30.8651 30.8073 30.526 31.0573 30.276L39.6093 21.724C39.8594 21.474 39.9999 21.1349 40 20.7813V17.3333C40 16.9797 39.8595 16.6406 39.6095 16.3905C39.3594 16.1405 39.0203 16 38.6667 16H17.3333C16.9797 16 16.6406 16.1405 16.3905 16.3905Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Post postInfo={postInfo} setPostInfo={setPostInfo} ref={null} />

        {data.posts.length > 0 && (
          <PostList
            editor={editor}
            setOpenFilter={setOpenFilter}
            openFilter={openFilter}
          />
        )}
      </div>
    </div>
  );
}

export default Editor;
