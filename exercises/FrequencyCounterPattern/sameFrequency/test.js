const sameFrequency = require('./index');

test('The function sameFrequncy exists', () => {
  expect(sameFrequency).toBeDefined();
});

test('The result of sameFrequency equals', () => {
  expect(sameFrequency(182,281)).toBe(true);
});

test('The result of sameFrequency equals', () => {
  expect(sameFrequency(34,14)).toBe(false);
});

test('The result of sameFrequency equals', () => {
  expect(sameFrequency(3589578,5879385)).toBe(true);
});

test('The result of sameFrequency equals', () => {
  expect(sameFrequency(22,222)).toBe(false);
});