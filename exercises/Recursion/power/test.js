const power = require('./index');

test('The function power should exist', () => {
  expect(power).toBeDefined();
});

test('The result of power should equal', () => {
  expect(power(2,0)).toEqual(1);
});

test('The result of power should equal', () => {
  expect(power(2,2)).toEqual(4);
});

test('The result of power should equal', () => {
  expect(power(2, 4)).toEqual(16);
});