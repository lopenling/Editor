import React, { useState } from 'react';
import { useEditor, EditorContent } from "@tiptap/react";
import * as Extension from '~/features/Editor/tiptap';

const ContentEditableDiv = (props) => {
   let editor;
   if (typeof document !== 'undefined') {
     editor = useEditor({
       extensions: [
         Extension.Document,
         Extension.Paragraph,
         Extension.Text,
         Extension.Bold,
         Extension.FontFamily,
         Extension.TextStyle,
         Extension.Italic,
         Extension.Underline,
         Extension.Placeholder.configure({
           placeholder: ({ node }) => {
             return props.placeholder;
           },
         }),
         Extension.HardBreak.configure({
           HTMLAttributes: {
             class: 'pageBreak',
           },
         }),
         Extension.Highlight.configure({
           HTMLAttributes: {
             class: 'highlight',
           },
         }),
        
       ],
       editable: true,
       onUpdate: async ({ editor }) => {
         let newContent = editor.getHTML();
         props.onChange(newContent);
       },
     });
   }

    return (
      <>
        {editor ? <EditorContent editor={editor} /> : null}
      </>
    );
};

export default ContentEditableDiv;