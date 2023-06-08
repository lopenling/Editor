import { getMarkRange, Mark, mergeAttributes } from '@tiptap/core';
import { Editor } from '@tiptap/react';
import { Plugin, TextSelection } from 'prosemirror-state';
export interface SuggestionOptions {
  multicolor: boolean;
  HTMLAttributes: Record<string, any>;
}
declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    suggestion: {
      /**
       * Set a highlight mark
       */
      setSuggestion: (attributes?: { color: string }) => ReturnType;
      /**
       * Toggle a highlight mark
       */
      toggleSuggestion: (attributes?: { color: string }) => ReturnType;
      /**
       * Unset a highlight mark
       */
      unsetSuggestion: () => ReturnType;
      replaceSuggestion: (term: string) => ReturnType;
    };
  }
}
export const replace = (replace, editor, dispatch) => {
  dispatch(editor.state.tr.insertText(replace, 1, 3));
};
export const Suggestion = (setter) =>
  Mark.create({
    name: 'suggestion',

    addOptions() {
      return {
        multicolor: false,
        HTMLAttributes: {},
      };
    },

    addAttributes() {
      return {
        color: {
          default: null,
          parseHTML: (element) => element.getAttribute('data-color') || element.style.backgroundColor,
          renderHTML: (attributes) => {
            if (!attributes.color) {
              return {};
            }

            return {
              'data-color': attributes.color,
              style: `background-color: ${attributes.color}; color: inherit`,
            };
          },
        },
        id: {
          default: null,
          parseHTML: (element) => element.getAttribute('id'),
          renderHTML: (attributes) => {
            return {
              id: attributes.id,
            };
          },
        },
        original: {
          default: null,
          parseHTML: (element) => element.getAttribute('original'),
          renderHTML: (attributes) => {
            return {
              original: attributes.original,
            };
          },
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: 'suggestion',
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return ['suggestion', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },

    addCommands() {
      return {
        setSuggestion:
          (attributes) =>
          ({ commands }) => {
            return commands.setMark(this.name, attributes);
          },
        toggleSuggestion:
          (attributes) =>
          ({ commands }) => {
            return commands.toggleMark(this.name, attributes);
          },
        unsetSuggestion:
          () =>
          ({ commands }) => {
            return commands.unsetMark(this.name);
          },
        replaceSuggestion:
          (term) =>
          ({ editor, dispatch }) => {
            replace(term, editor, dispatch);
            return false;
          },
      };
    },
    addProseMirrorPlugins(this) {
      return [
        new Plugin({
          props: {
            handleClick(view, pos, event) {
              const { schema, doc, tr } = view.state;
              const range = getMarkRange(doc.resolve(pos), schema.marks.suggestion);
              if (!range) return false;
              const clickedNode = event.target;
              setter(clickedNode?.id);

              const [$start, $end] = [doc.resolve(range.from), doc.resolve(range.to)];
              view.dispatch(tr.setSelection(new TextSelection($start, $end)));

              return true;
            },
          },
        }),
      ];
    },
  });
export declare const Highlight: Mark<SuggestionOptions, any>;
