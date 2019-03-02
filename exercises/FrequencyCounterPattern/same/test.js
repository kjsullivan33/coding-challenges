const same = require('./index');

test('same function exists', () => {
  expect(same).toBeDefined();

});

test('same result should equal', () => {
  expect(same([1,2,3],[4,1,9])).toBe(true);
});

test('same result should equal', () => {
  expect(same([1, 2, 3], [1, 9])).toBe(false);
});

test('same result should equal', () => {
  expect(same([1, 2, 1], [4, 4, 1])).toBe(false);
});

test('same result should equal', () => {
  expect(same([1, 2, 3], [4, 1, 9, 5])).toBe(false);
});

test('same result should equal', () => {
  expect(same([0],[0])).toBe(true);
});
