const START_OF_CONFIGURATION = '//';
const END_OF_CONFIGURATION = '/';
const DEFAULT_SEPARATOR = ',';

export function stringCalculator(input: string | null) {
  if (input === '' || input === null) return 0;

  const separator = getSeparator(input);
  const sanitizedInput = deleteConfiguration(input);

  return sanitizedInput
    .split(separator)
    .reduce((accumulated, element) => sumIfElementIsNumeric(accumulated, element), 0);
}

function getSeparator(input: string) {
  if (input.startsWith(START_OF_CONFIGURATION))
    return input.substring(input.indexOf(START_OF_CONFIGURATION) + 2, input.lastIndexOf(END_OF_CONFIGURATION));
  return DEFAULT_SEPARATOR;
}

function deleteConfiguration(input: string) {
  if (input.startsWith(START_OF_CONFIGURATION)) return input.substring(input.lastIndexOf(END_OF_CONFIGURATION) + 1);
  return input;
}

function sumIfElementIsNumeric(accumulated: number, element: string) {
  return isNaN(Number(element)) ? accumulated : accumulated + Number(element);
}
