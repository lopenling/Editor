export default function copyToClipboard(text) {
  // create a temporary textarea element to hold the text to copy
  const textarea = document.createElement("textarea");
  textarea.value = text;

  // make sure the textarea is in the document and selectable
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;
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
