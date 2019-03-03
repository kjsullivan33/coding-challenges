const findSubstrCount = require('./index');

test('The function findSubstrCount exists', () => {
  expect(findSubstrCount).toBeDefined();
});

test('The result of findSubstrCount equals', () => {
  expect(findSubstrCount('abcwowcedwow', 'wow')).toEqual(2);
});