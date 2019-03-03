const addUpTo1 = require('./index').addUpTo1;
const addUpTo2 = require('./index').addUpTo2;

test('sum all numbers functions exists', () => {
  expect(addUpTo1).toBeDefined();
  expect(addUpTo2).toBeDefined();
});

test('sum of all numbers adds all numbers up to n', () => {
  expect(addUpTo1(6)).toEqual(21);
  expect(addUpTo2(6)).toEqual(21);
});