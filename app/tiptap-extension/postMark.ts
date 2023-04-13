import { getMarkRange, Mark, mergeAttributes } from "@tiptap/core";
import { Plugin, TextSelection } from "prosemirror-state";
export interface SuggestionOptions {
  multicolor: boolean;
  HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    post: {
      /**
       * Set a highlight mark
       */
      setPost: (attributes?: { color: string }) => ReturnType;
      /**
       * Toggle a highlight mark
       */
      togglePost: (attributes?: { color: string }) => ReturnType;
      /**
       * Unset a highlight mark
       */
      unsetPost: () => ReturnType;
    };
  }
}

const PostMark = (setter) =>
  Mark.create({
    name: "post",

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
          parseHTML: (element) =>
            element.getAttribute("data-color") || element.style.backgroundColor,
          renderHTML: (attributes) => {
            if (!attributes.color) {
              return {};
            }

            return {
              "data-color": attributes.color,
              style: `background-color: ${attributes.color}; color: inherit`,
            };
          },
        },
        id: {
          default: null,
          parseHTML: (element) => element.getAttribute("id"),
          renderHTML: (attributes) => {
            return {
              id: attributes.id,
            };
          },
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: "post",
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return [
        "post",
        mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
        0,
      ];
    },

    addCommands() {
      return {
        setPost:
          (attributes) =>
          ({ commands }) => {
            return commands.setMark(this.name, attributes);
          },
        togglePost:
          (attributes) =>
          ({ commands }) => {
            return commands.toggleMark(this.name, attributes);
          },
        unsetPost:
          () =>
          ({ commands }) => {
            return commands.unsetMark(this.name);
          },
      };
    },
    addProseMirrorPlugins(this) {
      return [
        new Plugin({
          props: {
            handleClick(view, pos, event) {
              const { schema, doc, tr } = view.state;
              const range = getMarkRange(doc.resolve(pos), schema.marks.post);
              if (!range) return false;
              const clickedNode = event.target;
              setter(clickedNode?.id, "post");
              const [$start, $end] = [
                doc.resolve(range.from),
                doc.resolve(range.to),
              ];
              view.dispatch(tr.setSelection(new TextSelection($start, $end)));

              return true;
            },
          },
        }),
      ];
    },
  });

export default PostMark;
