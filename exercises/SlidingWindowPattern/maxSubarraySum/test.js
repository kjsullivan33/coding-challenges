const maxSubarraySum = require('./index');

test('the function maxSubarraySum exists', () => {
  expect(maxSubarraySum).toBeDefined;
});

test('The result of maxSubarraySum should equal', () => {
  expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
});

test('The result of maxSubarraySum should equal', () => {
  expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toEqual(17);
});

test('The result of maxSubarraySum should equal', () => {
  expect(maxSubarraySum([4,2,1,6], 1)).toEqual(6);
});

test('The result of maxSubarraySum should equal', () => {
  expect(maxSubarraySum([4,2,1,6,2], 4)).toEqual(13);
});

test('The result of maxSubarraySum should equal', () => {
  expect(maxSubarraySum([], 4)).toEqual(null);
});

test('The result of maxSubarraySum should equal', () => {
  expect(maxSubarraySum([2,
    1,
    10,
    5,
    9,
    6,
    7,
    8,
    9,
    6,
    9,
    6,
    6,
    2,
    6,
    9,
    8,
    3,
    2,
    6,
    4,
    2,
    5,
    4,
    2,
    9,
    10,
    1,
    6,
    5,
    8,
    4,
    10,
    6,
    4,
    7,
    5,
    8,
    2,
    9,
    8,
    2,
    1,
    5,
    4,
    3,
    9,
    7,
    10,
    5,
    1,
    9,
    7,
    5,
    4,
    7,
    3,
    5,
    1,
    4,
    9,
    7,
    1,
    7,
    3,
    3,
    2,
    4,
    7,
    7,
    3,
    6,
    5,
    1,
    4,
    7,
    5,
    4,
    1,
    8,
    2,
    5,
    9,
    1,
    9,
    8,
    8,
    3,
    3,
    7,
    5,
    2,
    2,
    4,
    7,
    9,
    8,
    9,
    1,
    5], 4)).toEqual(33);
});