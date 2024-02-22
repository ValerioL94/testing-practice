import capitalize from './modules/capitalize';
import reverseString from './modules/reverseString';
test('capitalize first character', () => {
  expect(capitalize('interconnection')).toMatch(/[A-Z]\w+/);
});

test('reverse a string', () => {
  expect(reverseString('interconnection')).toBe('noitcennocretni');
});
