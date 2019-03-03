const findValueInArray = require('./index');

test('The function findValueInArray exists', () => {
  expect(findValueInArray).toBeDefined();
});

test('The result of findValueInArray equals', () => {
  expect(findValueInArray([1,2,3,4,5,6,7], 4)).toEqual(3);
});

test('The result of findValueInArray equals', () => {
  expect(findValueInArray([1, 2, 3, 4, 5, 6, 7], 12)).toEqual(-1);
});

test('The result of findValueInArray equals', () => {
  expect(findValueInArray([], 4)).toEqual(-1);
});