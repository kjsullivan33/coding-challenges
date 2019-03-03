const threeSum = require('./index');

test('threeSum function exists', () => {
  expect(threeSum).toBeDefined();
  
});

test('threeSum result shold equal', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2],[-1,0,1]]);
});