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

it('test 1', () => {
  expect(deepComparison(testObj_one, testObj_two)).toEqual(true);
});

it('test 2', () => {
  expect(deepComparison(testObj_one, testObj_tree)).toEqual(false);
});
