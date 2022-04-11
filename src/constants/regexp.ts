export const AppRegExp = {
  booleanOnly: /^(true|false)$/,
  integerOnly: /^[-]?[0-9]+$/,
  floatOnly: /^[-]?([0-9]+[.])?[0-9]+$/,
  anyString: /[\s\S]*/,

  // alphabet, number, - only
  custom1: /^[A-Z|a-z|0-9|\-|]+$/,

  // alphabet, korean, number, - only
  custom2: /^[A-Z|a-z|0-9|ㄱ-ㅎ|가-힣|ㅏ-ㅣ|\-|\n|\s]+$/,

  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};
