import { Editor } from '@tiptap/react';

function removeMark(editor: Editor | null, id: string) {
  if (!editor) return null;
  let markID = id;
  const { doc, selection } = editor?.state;
  doc.descendants((node, pos) => {
    if (node.marks) {
      node.marks.forEach((mark) => {
        if (mark.attrs.id === markID) {
          const from = pos;
          const to = pos + node.nodeSize;
          // Select the range
          editor.view.dispatch(
            editor.view.state.tr
              .setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(from)))
              .setSelection(editor.view.state.selection.constructor.near(editor.view.state.doc.resolve(to)))
              .removeMark(from, to, mark.type),
          );
        }
      });
    }
  });
}

function replaceMarkContent(editor: Editor | null, markID: string, content: string) {
  if (!editor) return null;
  const { doc, selection } = editor?.state;

  doc.descendants((node, pos) => {
    if (node.marks && node.marks.length > 0) {
      node.marks.forEach((mark) => {
        if (mark.attrs.id === markID) {
          const from = pos;
          const to = pos + node.nodeSize;
          // Select the range
          let trx = editor.view.state.tr
            .setSelection(editor.view.state.selection.constructor?.near(editor.view.state.doc.resolve(from)))
            .setSelection(editor.view.state.selection.constructor?.near(editor.view.state.doc.resolve(to)));
          const markType = editor.view.state.schema.marks.suggestion;
          if (editor.state.doc.textBetween(from, to, ' ') !== content)
            editor.view.dispatch(
              trx.replaceWith(
                from,
                to,
                editor.view.state.schema.text(content, [
                  markType.create({
                    id: markID,
                  }),
                ]),
              ),
            );
        }
      });
    }
  });
}
export { removeMark, replaceMarkContent };
