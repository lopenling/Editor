import { EditorContent } from "@tiptap/react";
import React from "react";
import { DEFAULT_FONT_SIZE } from "~/constants";

function EditorContainer(props) {
  let { editor } = props;

  return <EditorContent editor={editor} className="editor" content={"hello"} />;
}

export default EditorContainer;
