const Node = require('./index');

test('When an instance is created the Node constructore sets val and next remains null', () => {
  const node = new Node(20);
  expect(node.val).toBe(20);
  expect(node.next).toBe(null);
});
