import capitalize from './modules/capitalize';
import reverseString from './modules/reverseString';
import calculator from './modules/calculator';
import caesarCipher from './modules/caesarCipher';
import analyzeArray from './modules/analyzeArray';

test('capitalize first character', () => {
  expect(capitalize('interconnection')).toMatch(/[A-Z]\w+/);
});

test('reverse a string', () => {
  expect(reverseString('interconnection')).toBe('noitcennocretni');
});

test('basic operations', () => {
  expect(calculator.sum(2, 2)).toEqual(4);
  expect(calculator.subtract(4, 2)).toEqual(2);
  expect(calculator.divide(8, 2)).toEqual(4);
  expect(calculator.multiply(5, 5)).toEqual(25);
});

test('characters shift', () => {
  expect(caesarCipher('this message, now is encrypted!', 10)).toBe(
    'DRSC WOCCKQO, XYG SC OXMBIZDON!'
  );
});

test('array of numbers', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
