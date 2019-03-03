const fib = require('./index');

test('The function fib exists', () => {
  expect(fib).toBeDefined();
});

test('The result of fib equals', () => {
  expect(fib(4)).toEqual(3);
});

test('The result of fib equals', () => {
  expect(fib(10)).toEqual(55);
});

test('The result of fib equals', () => {
  expect(fib(28)).toEqual(317811);
});

test('The result of fib equals', () => {
  expect(fib(35)).toEqual(9227465);
});