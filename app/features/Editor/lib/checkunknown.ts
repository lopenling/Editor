function checkUnknown(text: string) {
  const replacementChar = '\ufffd';
  if (text.includes(replacementChar)) {
    const regex = new RegExp(replacementChar, 'g');
    const newStr = text.replace(regex, '');
    // Refresh the data (e.g., reload it from a source)
    return newStr; // Indicates that the data was refreshed
  } else {
    return text; // Indicates that the data was not refreshed
  }
}

export default checkUnknown;
