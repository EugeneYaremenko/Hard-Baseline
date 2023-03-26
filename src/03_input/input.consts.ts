const DEFAULT_VALIDATION_RULE = '[A-Za-z0-9]+';
const NO_VALIDATION_RULE = undefined;

export const VALIDATION_RULES: Record<React.HTMLInputTypeAttribute, string | undefined> = {
  text: DEFAULT_VALIDATION_RULE,
  email: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
  password: '.{8,}',
  tel: '[0-9]{3}',
  search: '.{3,}',
  date: '(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/d{4}',
  url: 'https?://.+',
  number: DEFAULT_VALIDATION_RULE,
  button: NO_VALIDATION_RULE,
  checkbox: NO_VALIDATION_RULE,
  color: NO_VALIDATION_RULE,
  file: NO_VALIDATION_RULE,
  hidden: NO_VALIDATION_RULE,
  image: NO_VALIDATION_RULE,
  month: NO_VALIDATION_RULE,
  radio: NO_VALIDATION_RULE,
  range: NO_VALIDATION_RULE,
  reset: NO_VALIDATION_RULE,
  submit: NO_VALIDATION_RULE,
  time: NO_VALIDATION_RULE,
  week: NO_VALIDATION_RULE,
  'datetime-local': NO_VALIDATION_RULE,
};
