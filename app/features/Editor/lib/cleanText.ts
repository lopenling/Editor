function removeReplacementCharacter(text:string) {
  var cleanedText = text.replace(/\ufffd/g, '');
  return cleanedText;
}

export default removeReplacementCharacter;
