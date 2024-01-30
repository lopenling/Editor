export function processHTML(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const body = doc.body;
  const annotations = [];
  let textContent = '';

  function getAttributes(node) {
    const attributes = {};
    Array.from(node.attributes).forEach((attr) => {
      attributes[attr.name] = attr.value;
    });
    return attributes;
  }

  function walkNodes(node, index = 0, openTags = []) {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const content = child.textContent;
        const start = index;
        const end = start + content.length;
        textContent += content;

        openTags.forEach((tag) => {
          tag.end = end; // Update the end position for all open tags
        });

        index = end;
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        const tagAnnotation = {
          tagName: child.tagName,
          attributes: getAttributes(child),
          start: index,
          end: index, // Temporary end value, will be updated
          content: '',
        };
        openTags.push(tagAnnotation);
        annotations.push(tagAnnotation);

        index = walkNodes(child, index, openTags);

        openTags.pop(); // Remove the tag from the stack once its children have been processed
      }
    });

    return index;
  }

  walkNodes(body);

  return {
    text: textContent,
    annotations: annotations,
  };
}

export function constructHTML(text, annotations) {
  // Sort annotations by their start position, and in case of a tie, by end position in reverse
  annotations.sort((a, b) => (a.start !== b.start ? a.start - b.start : b.end - a.end));

  let htmlString = '';
  let lastIndex = 0;
  let openTags = [];

  annotations.forEach((annot, idx) => {
    // Close tags that end before this annotation starts
    while (openTags.length > 0 && openTags[openTags.length - 1].end <= annot.start) {
      const lastTag = openTags.pop();
      htmlString += text.substring(lastIndex, lastTag.end) + `</${lastTag.tagName.toLowerCase()}>`;
      lastIndex = lastTag.end;
    }

    // Add text before the current annotation if not already added
    if (lastIndex < annot.start) {
      htmlString += text.substring(lastIndex, annot.start);
      lastIndex = annot.start;
    }

    // Open the tag with attributes
    let attributesString = '';
    for (const [key, value] of Object.entries(annot.attributes)) {
      attributesString += ` ${key}="${value}"`;
    }
    htmlString += `<${annot.tagName.toLowerCase()}${attributesString}>`;

    // Add the tag to the stack of open tags
    openTags.push(annot);
  });

  // Close any remaining open tags
  while (openTags.length > 0) {
    const tag = openTags.pop();
    htmlString += text.substring(lastIndex, tag.end) + `</${tag.tagName.toLowerCase()}>`;
    lastIndex = tag.end;
  }

  // Add any remaining text after the last tag
  if (lastIndex < text.length) {
    htmlString += text.substring(lastIndex);
  }

  return htmlString;
}

// Example usage with your provided annotations
