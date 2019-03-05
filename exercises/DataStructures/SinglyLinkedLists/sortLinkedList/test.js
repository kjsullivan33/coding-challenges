const createList = require('../sortLinkedList/createList/index');
const sortLinkedList = require('./index');

test('The function sortLinkedList exists', () => {
  expect(sortLinkedList).toBeDefined();
});

test('The result of sortLinkedList should equal', () => {
  const list = createList([40,20,10,15]);
  const sortedList = sortLinkedList(list);
  expect(sortedList.head.val).toBe(10);
  expect(sortedList.tail.val).toBe(40);
});