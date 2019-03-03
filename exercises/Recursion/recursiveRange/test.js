const recursiveRange = require('./index');

test('The function recursiveRange exists', () => {
  expect(recursiveRange).toBeDefined();
});

test('The result of recursiveRange equals', () => {
  expect(recursiveRange(6)).toEqual(21);
});

test('The result of recursiveRange equals', () => {
  expect(recursiveRange(10)).toEqual(55);
});

test('The result of recursiveRange equals', () => {
  expect(recursiveRange(0)).toEqual(0);
});

test('The result of recursiveRange equals', () => {
  expect(recursiveRange(-1)).toEqual(0);
});