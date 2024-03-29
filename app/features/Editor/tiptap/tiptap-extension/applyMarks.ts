import { Extension } from '@tiptap/core';
import { Editor } from '@tiptap/react';
import React from 'react';
export const applyAnnotationFunction = (
  editor: Editor,
  annotation: any,
  pageBreaker: [],
  searchLocation: [],
  updateContent = null
) => {
  let content: string = `${editor.getText()}`;
  if (updateContent) {
    content = updateContent;
  }
  let annotations: any = annotation;
  let html = '<p>';

  let allkeys: string[] = [];
  let searchKey = [];
  let allPageBreakerStart: string[] = [];
  if (annotations)
    for (const [key, value] of Object.entries(annotations)) {
      allkeys.push(key);
    }
  if (pageBreaker)
    for (let startid of pageBreaker) {
      allPageBreakerStart.push(startid?.start);
    }
  if (searchLocation) {
    searchKey = searchLocation.map((l) => l.start);
  }

  let skiplength: any = [];
  [...content].forEach((c, i: number) => {
    if (searchKey.includes(i)) {
      let s = searchLocation.find((p) => p.start === i);
      let text = '';
      let length = s?.searchString?.length;
      for (let j = i; j < i + length; j++) {
        text += content[j];
        skiplength.push(j);
      }

      html += getBoldOnHighlight(text);
    }
    if (allPageBreakerStart.includes(i) && i !== 0) {
      html += '</p><p>';
      html +=
        "<img src='https://iiif.bdrc.io/bdr:I2KG210156::I2KG2101560003.jpg/full/full/0/default.jpg' alt='Pecha Image'/>";
    }

    if (allkeys.includes(i.toString()) && !skiplength.includes(i)) {
      html += `<span id="` + i + `" class='v_annotations'>`;
      let annotate = annotations[i];
      let length = annotate[0]?.length;
      for (let j = i; j < i + length; j++) {
        html += content[j];
        skiplength.push(j);
      }
      html += '</span>';
    } else {
      if (skiplength.includes(i)) {
        return;
      }
      html += `<span id='s_${i}'>${c}</span>`;
    }
  });
  html += '</p>';
  editor.commands.setContent(html);
  html = '';
};

const applyAnnotation = (annotation: [], pageBreaker: any, searchLocation: any) =>
  Extension.create({
    name: 'v_annotation',
    addStorage() {
      return {
        v_annotation: annotation,
      };
    },
    onCreate(this: { editor: Editor }) {
      applyAnnotationFunction(this.editor, annotation, pageBreaker, searchLocation);
      if (searchLocation.length) {
        let d = searchLocation[0];
        this.editor
          .chain()
          .focus()
          .setTextSelection(d.start + d.length)
          .run();
      }
    },
  });

function getBoldOnHighlight(highlight: string) {
  // Split text on highlight term, include term itself into parts, ignore case

  return `<search class='search-term'>${highlight}</search>`;
}

export default applyAnnotation;
