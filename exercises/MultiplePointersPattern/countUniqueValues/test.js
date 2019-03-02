const countUniqueValues = require('./index');

test('countUniqueValues is a function', () => {
  expect(countUniqueValues).toBeDefined();
});

test('The result of countUniqueValues should equal', () => {
  expect(countUniqueValues([1,1,1,1,1,2])).toEqual(2);
});

test('The result of countUniqueValues should equal', () => {
  expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toEqual(7);
});

test('The result of countUniqueValues should equal', () => {
  expect(countUniqueValues([])).toEqual(0);
});

test('The result of countUniqueValues should equal', () => {
  expect(countUniqueValues([-2,-1,-1,0,1])).toEqual(4);
});

test('The result of countUniqueValues should equal', () => {
  expect(countUniqueValues([9])).toEqual(1);
});
