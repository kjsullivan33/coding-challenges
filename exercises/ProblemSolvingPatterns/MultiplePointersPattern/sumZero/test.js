const sumZero = require('./index');

test('sumZero is a function', () => {
  expect(sumZero).toBeDefined();
});

test('The result of sumZero should equal', () => {
  expect(sumZero([-3,-2,-1,0,1,2,3])).toEqual([-3,3]);
});

test('The result of sumZero should equal', () => {
  expect(sumZero([-2, 0, 1, 3])).toEqual(undefined);
});

test('The result of sumZero should equal', () => {
  expect(sumZero([1, 2, 3])).toEqual(undefined);
});