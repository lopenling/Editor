import { Editor } from "@tiptap/react";

type ActionType = "delete" | "update";
function markAction(editor: Editor, id: string, action: ActionType) {
  let markID = id;
  const { doc, selection } = editor?.state;
  if (action === "delete")
    doc.descendants((node, pos) => {
      if (node.marks) {
        node.marks.forEach((mark) => {
          if (mark.attrs.id === markID) {
            const from = pos;
            const to = pos + node.nodeSize;
            // Select the range
            editor.view.dispatch(
              editor.view.state.tr
                .setSelection(
                  editor.view.state.selection.constructor.near(
                    editor.view.state.doc.resolve(from)
                  )
                )
                .setSelection(
                  editor.view.state.selection.constructor.near(
                    editor.view.state.doc.resolve(to)
                  )
                )
                .removeMark(from, to, mark.type)
            );
          }
        });
      }
    });
}
export default markAction;
