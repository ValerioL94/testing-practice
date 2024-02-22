import capitalize from './modules/capitalize';

test('capitalize first character', () => {
  expect(capitalize('interconnection')).toMatch(/[A-Z]\w+/);
});
