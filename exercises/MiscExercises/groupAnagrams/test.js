const groupAnagrams = require('./index');

test('groupAnagram function exists', () => {
  expect(groupAnagrams).toBeDefined();

});

test('groupAnagrams result should equal', () => {
  expect(groupAnagrams(['eat', 'tea', 'ate', 'tan', 'nat','bat'])).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
});