import capitalize from './modules/capitalize';
import reverseString from './modules/reverseString';
import calculator from './modules/calculator';

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
