const collectOddValues = require('./index');

test('The function collectOddValues exists', () => {
  expect(collectOddValues).toBeDefined();
});

test('The result of collectOddValues equals', () => {
  expect(collectOddValues([1,2,3,4,5,6,7])).toEqual([1,3,5,7]);
});

test('The result of collectOddValues equals', () => {
  expect(collectOddValues([0])).toEqual([]);
});