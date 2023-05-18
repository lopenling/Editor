export function changeFont(size: string) {
  let editorref = document.querySelector(".editor");
  if (editorref) editorref.setAttribute("style", `font-size:${size}px;`);
  return editorref;
}
