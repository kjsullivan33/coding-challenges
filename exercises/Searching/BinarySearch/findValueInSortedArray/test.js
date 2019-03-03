const findValueInSortedArray = require('./index');

test('The function findValueInSortedArray exists', () => {
  expect(findValueInSortedArray).toBeDefined();
});

test('The result of findValueInSortedArray equals', () => {
  expect(findValueInSortedArray([1,3,4,6,8,9,11,12,15,16,17,18,19], 15)).toEqual(8);
});

test('The result of findValueInSortedArray equals', () => {
  expect(findValueInSortedArray(['a','b','c','d','e','f','g'], 'c')).toEqual(2);
});

test('The result of findValueInSortedArray equals', () => {
  expect(findValueInSortedArray(['aac', 'abb', 'abc', 'ced', 'def', 'fhg', 'gij'], 'abc')).toEqual(2);
});