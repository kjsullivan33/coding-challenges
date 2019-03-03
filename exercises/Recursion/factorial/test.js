const factorial = require('./index');

test('The function factorial exists', () => {
  expect(factorial).toBeDefined();
});

test('The result of factorial equals', () => {
  expect(factorial(0)).toEqual(0);
});

test('The result of factorial equals', () => {
  expect(factorial(3)).toEqual(6);
  
});

test('The result of factorial equals', () => {
  expect(factorial(30)).toEqual(2.6525285981219103E32);
});

