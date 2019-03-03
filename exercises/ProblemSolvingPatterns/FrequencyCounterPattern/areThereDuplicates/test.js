const areThereDuplicates = require('./index');

test('The function areThereDuplicates exists', () => {
});expect(areThereDuplicates).toBeDefined();

test('The result of areThereDuplicates equals', () => {
  expect(areThereDuplicates(1,2,3)).toBe(false);
});

test('The result of areThereDuplicates equals', () => {
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
});

test('The result of areThereDuplicates equals', () => {
  expect(areThereDuplicates('a','b','c')).toBe(false);
});