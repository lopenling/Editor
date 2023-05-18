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
