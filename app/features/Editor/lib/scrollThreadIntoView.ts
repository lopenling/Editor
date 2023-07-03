export function scrollThreadIntoView(thread: string, thread2: string) {
  if (!thread || !thread2) return null;
  let doc = document.getElementById(thread);
  let doc2 = document.getElementById(thread2);
  if (doc && doc2)
    setTimeout(() => {
      scrollElementsIntoView(doc, doc2);
    },400)
  return doc;
}

function scrollElementsIntoView(element1: HTMLElement, element2: HTMLElement) {
  // Scroll the first element into view
  Promise.all([
    element2.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    element1.scrollIntoView({ block: 'center',inline: 'center' }),
  ]);

  // Delay the scrolling of the second element to ensure it is within the view

  setTimeout(() => {
    window.getSelection().selectAllChildren(element1);
  }, 100);
}
