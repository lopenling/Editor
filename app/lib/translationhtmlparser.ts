export function processHTML(htmlString: string) {
  const parser = new DOMParser();
  let data = formatterString(htmlString);
  const doc = parser.parseFromString(data, 'text/html');
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

export function constructHTML(text: string, annotations) {
  annotations.sort((a, b) => (a.start !== b.start ? a.start - b.start : b.end - a.end));

  let htmlString = '';
  let lastIndex = 0;
  let openTags = [];

  annotations.forEach((annot) => {
    // Close tags that end before this annotation starts
    while (openTags.length > 0 && openTags[openTags.length - 1].end <= annot.start) {
      const lastTag = openTags.pop();
      if (
        lastTag.tagName === 'LI' &&
        openTags.length > 0 &&
        (openTags[openTags.length - 1].tagName === 'OL' || openTags[openTags.length - 1].tagName === 'UL')
      ) {
        // Do not close the list tag here; it will be closed when its end is reached
      } else {
        htmlString += text.substring(lastIndex, lastTag.end) + `</${lastTag.tagName.toLowerCase()}>`;
        lastIndex = lastTag.end;
      }
    }

    // Add text before the current annotation if not already added
    if (lastIndex < annot.start) {
      htmlString += text.substring(lastIndex, annot.start);
      lastIndex = annot.start;
    }

    // Special handling for opening list tags
    if (
      annot.tagName === 'LI' &&
      openTags.length > 0 &&
      openTags[openTags.length - 1].tagName !== 'OL' &&
      openTags[openTags.length - 1].tagName !== 'UL'
    ) {
      // If the last tag is not a list, open a new list tag before the LI
      htmlString += `<ol>`; // Use <ul> or <ol> based on your context or annotation attributes
      openTags.push({ tagName: 'OL', end: annot.end }); // Adjust based on your context
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
    if (
      tag.tagName === 'LI' &&
      openTags.length > 0 &&
      (openTags[openTags.length - 1].tagName === 'OL' || openTags[openTags.length - 1].tagName === 'UL')
    ) {
      // Handle closing of list items differently if needed
    } else {
      htmlString += text.substring(lastIndex, tag.end) + `</${tag.tagName.toLowerCase()}>`;
      lastIndex = tag.end;
    }
  }

  // Add any remaining text after the last tag
  if (lastIndex < text.length) {
    htmlString += text.substring(lastIndex);
  }

  return htmlString;
}

function formatterString(htmlString: string) {
  // Parse the input HTML string
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Initialize a variable to track if we are currently inside an ordered list
  let insideOl = false;

  // Iterate through the child nodes of the body
  Array.from(doc.body.childNodes).forEach((node) => {
    if (node.tagName === 'H1') {
      // If we encounter an H1 tag, we ensure the next list items are wrapped in a new OL
      insideOl = false;
    } else if (node.tagName === 'P') {
      // Replace P tag with LI
      const li = document.createElement('li');
      li.innerHTML = node.innerHTML;

      // If not already inside an OL, create it and append the LI
      if (!insideOl) {
        const ol = document.createElement('ol');
        doc.body.insertBefore(ol, node);
        ol.appendChild(li);
        insideOl = true;
      } else {
        // If already inside an OL, find the last OL and append the LI
        const lastOl = doc.body.getElementsByTagName('ol');
        lastOl[lastOl.length - 1].appendChild(li);
      }

      // Remove the original P node
      node.parentNode.removeChild(node);
    }
  });

  // Serialize the modified document back to an HTML string
  const serializer = new XMLSerializer();
  const newHtmlString = serializer.serializeToString(doc);

  // Return the modified HTML, excluding the doctype, html, and body tags to match the input format
  return newHtmlString.replace(/^<!DOCTYPE html>\s*<html><body>/, '').replace(/<\/body><\/html>$/, '');
}

// Example usage with your provided annotations
