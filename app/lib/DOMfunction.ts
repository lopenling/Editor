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
