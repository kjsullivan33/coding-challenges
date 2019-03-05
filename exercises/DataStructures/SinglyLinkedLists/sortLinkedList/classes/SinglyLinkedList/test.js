const SinglyLinkedList = require('./index');
const Node = require('./index');

const list1 = new SinglyLinkedList();
test('When a new instance of SinklyLinkedList is created, the head is set to null' +
  'the tail is set to null, and the length is set to 0', () => {
    
    expect(list1.head).toBe(null);
    expect(list1.tail).toBe(null);
    expect(list1.length).toBe(0);
  });

test('The result of the push method on an empty list should equal', () => {
  list1.push(10);
  expect(list1.head.val).toBe(10);
  expect(list1.tail.val).toBe(10);
});

test('The result of the push method on an existing list should equal', () => {
  list1.push(20);
  list1.push(30);
  expect(list1.head.val).toBe(10);
  expect(list1.tail.val).toBe(30);
});

test('The result of the sortedInsert method on an existing list should equal', () => {
  const list2 = new SinglyLinkedList();
  const node = new Node(15);
  list2.push(10);
  list2.push(20);
  list2.push(30);
  list2.push(40);
  list2.sortedInsert(node);
  console.log(list2);
  const head = list2.head;
  const secondValue = head.next;
  const thirdValue = secondValue.next;
  const fourthValue = thirdValue.next;
  const tail = fourthValue.next;
  expect(head.val).toEqual(10);
  expect(secondValue.val).toEqual(15);
  expect(thirdValue.val).toEqual(20);
  expect(fourthValue.val).toEqual(30);
  expect(tail.val).toEqual(40);
});