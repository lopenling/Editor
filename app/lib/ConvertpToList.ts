function convertPTagsToOlAfterH1(htmlText) {
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlText;

  var h1Tags = tempDiv.getElementsByTagName('h1');

  for (var i = 0; i < h1Tags.length; i++) {
    var olElement = document.createElement('ol');
    // Check if there is a <p> tag after the current <h1>
    var nextElement = h1Tags[i].nextElementSibling;
    if (nextElement && nextElement.tagName.toLowerCase() === 'p') {
      while (nextElement && nextElement.tagName.toLowerCase() === 'p') {
        // Move the content of the <p> to a new <li> in the <ol>
        var liElement = document.createElement('li');
        liElement.appendChild(document.createTextNode(nextElement?.textContent));
        olElement.appendChild(liElement);
        // Remove the original <p> tag
        nextElement.parentNode.removeChild(nextElement);
        // Update the nextElement for the next iteration
        nextElement = h1Tags[i].nextElementSibling;
      }

      // Insert the <ol> after the <h1>
      h1Tags[i].parentNode.insertBefore(olElement, nextElement);
    }
  }

  return tempDiv.innerHTML;
}

export default convertPTagsToOlAfterH1;
