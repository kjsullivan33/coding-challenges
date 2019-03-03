const productOfArray = require('./index');

test('The function productOfArray should exist', () => {
  expect(productOfArray).toBeDefined();
});

test('The result of productOfArray equals', () => {
  expect(productOfArray([1,2,3])).toEqual(6);
});

test('The result of productOfArray equals', () => {
  expect(productOfArray([1,2,3,10])).toEqual(60);
});

test('The result of productOfArray equals', () => {
  expect(productOfArray([])).toEqual(1);
});