export type annotationType = {
  id: string | null;
  start: number;
  end: number;
  type: string;
  content: string | null;
};

export function extractTextAndAnnotations(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  let text = '';
  const annotations: annotationType[] = [];
  const walk = (node) => {
    if (node.nodeType === 3) {
      // Text node
      const content = node.textContent || '';
      if (node.parentNode.classList.contains('post') || node.parentNode.classList.contains('suggestion')) {
        const start = text.length;
        const end = start + content.length;
        const type = node.parentNode.classList.contains('post')
          ? 'P'
          : node.parentNode.classList.contains('suggestion')
          ? 'S'
          : '';
        const id = node.parentNode.getAttribute('id');
        annotations.push({
          start,
          end,
          type,
          id,
          content,
        });
      }
      text += content;
    } else {
      for (let child of node.childNodes) {
        walk(child);
      }
    }
  };
  walk(doc.body);
  return { text, annotations };
}

export function generateHtmlFromTextAndAnnotations(text: string, annotations: annotationType[]) {
  let html = text;
  annotations.sort((a, b) => b.start - a.start); // Sort annotations in descending order

  annotations.forEach((annotation) => {
    let tagType;
    switch (annotation.type) {
      case 'P':
        tagType = 'post';
        break;
      case 'S':
        tagType = 'suggestion';
        break;
    }
    const tagStart = `<${tagType} class="${tagType}" id="${annotation.id}">`;
    const tagEnd = `</${tagType}>`;

    html = html.slice(0, annotation.start) + tagStart + annotation.content + tagEnd + html.slice(annotation.end);
  });

  html = '<p>' + html + '</p>'; // Wrap the modified html with <p> tags
  return html;
}
