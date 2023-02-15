import { Mark, mergeAttributes } from "@tiptap/core";

export const searchMarks = Mark.create({
  name: "span",

  addOptions() {
    return {
      HTMLAttributes: {
        class: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
      },
    ];
  },
  addAttributes() {
    return {
      id: {
        parseHTML: (element) => element.id,
      },
      class: {
        parseHTML: (element) => element.className,
      },
    };
  },
  renderHTML({ HTMLAttributes }) {
    const elem = document.createElement("span");
    Object.entries(
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ).forEach(([attr, val]) => elem.setAttribute(attr, val));

    return elem;
  },
});
