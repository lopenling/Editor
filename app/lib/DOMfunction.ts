export function scrollThreadIntoView(thread: string) {
  let doc = document.getElementById(thread);
  if (doc) {
    doc.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
  return doc;
}

export function changeFont(size: string) {
  let editorref = document.querySelector(".editor");
  if (editorref) editorref.setAttribute("style", `font-size:${size}px;`);
  return editorref;
}

export function exportDoc(text: string, name: string) {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = `${name}.txt`;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

export default function copyToClipboard(text: string) {
  // create a temporary textarea element to hold the text to copy
  const textarea = document.createElement("textarea");
  textarea.value = text;

  // make sure the textarea is in the document and selectable
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    // copy the text to the clipboard
    document.execCommand("copy");
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }

  // remove the temporary textarea
  document.body.removeChild(textarea);
}
