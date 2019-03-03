const validAnagram = require('./index');

test('validAnagram function should exist',() => {
  expect(validAnagram).toBeDefined();
});

test('validAnagram result should equal',() => {
  expect(validAnagram('', '')).toBe(true);
});

test('validAnagram result should equal',() => {
  expect(validAnagram('aaz', 'zza')).toBe(false);
});

test('validAnagram result should equal', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});

test('validAnagram result should equal',() => {
  expect(validAnagram('awesome', 'awesom')).toBe(false);
});

test('validAnagram result should equal',() => {
  expect(validAnagram('rat', 'car')).toBe(false);
});

test('validAnagram result should equal', () => {
  expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
});

test('validAnagram result should equal',() => {
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
});