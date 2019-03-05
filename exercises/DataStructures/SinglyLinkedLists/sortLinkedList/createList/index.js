const SinglyLinkedList = require('../classes/SinglyLinkedList');

const createList = (array) => {
  const list = new SinglyLinkedList();

  for (let i = 0; i < array.length; i++) {
    list.push(array[i]);
  }
  return list;
}

module.exports = createList;