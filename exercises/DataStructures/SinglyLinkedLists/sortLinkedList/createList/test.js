const createList = require('./index');

test('The function createList exists', () => {
  expect(createList).toBeDefined();
});

test('The result of createList', () => {
  const list = createList([29, 23, 82, 11]);
  const headValue = list.head.val;
  const secondValue = list.head.next.val;
  const thirdValue = list.head.next.next.val;
  const tailValue = list.tail.val;
  expect(headValue).toEqual(29);
  expect(secondValue).toEqual(23);
  expect(thirdValue).toEqual(82);
  expect(tailValue).toEqual(11);
});