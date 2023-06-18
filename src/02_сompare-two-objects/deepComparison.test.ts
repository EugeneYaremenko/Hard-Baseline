import { deepComparison } from './deepComparison';

export const testObj_one = {
  email: 'test_email_1@mail.com',
  password: 'qwerty_1',
  test: {
    a: 1,
    b: 2,
  },
};

export const testObj_two = {
  email: 'test_email_1@mail.com',
  password: 'qwerty_1',
  test: {
    a: 1,
    b: 2,
  },
};

export const testObj_tree = {
  email: 'test_email_3@mail.com',
  password: 'qwerty_3',
  test: {
    a: 1,
  },
};

export const testArray = [1, 2, 3];

it('deepComparison: Equal objects', () => {
  expect(deepComparison(testObj_one, testObj_two)).toEqual(true);
});

it('deepComparison: Not Equal Objects', () => {
  expect(deepComparison(testObj_one, testObj_tree)).toEqual(false);
});

it('deepComparison: Object and null', () => {
  expect(deepComparison(testObj_one, null)).toEqual(false);
});

it('deepComparison: Object and empty Object', () => {
  expect(deepComparison(testObj_one, {})).toEqual(false);
});

it('deepComparison: Object and Array', () => {
  expect(deepComparison(testObj_one, testArray)).toEqual(false);
});

it('deepComparison: Object and Date', () => {
  expect(deepComparison(testObj_one, new Date())).toEqual(false);
});

it('deepComparison: Object and 0', () => {
  expect(deepComparison(testObj_one, 0)).toEqual(false);
});
