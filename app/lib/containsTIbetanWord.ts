function containTibetanletter(str: string) {
  const tibetanRegex = /[\u0F00-\u0FFF]/;
  return tibetanRegex.test(str);
}

export default containTibetanletter;
