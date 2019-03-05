const createArrayFromList = require('./createArrayFromList/index');
const createList = require('./createList');
// const list = createList([29, 23, 82, 11]);
// const head = list.head;

const sortLinkedList = (list) => {

  const array = createArrayFromList(list).sort();
  // console.log(array);

  return createList(array);
};

// console.log(sortLinkedList(list));
module.exports = sortLinkedList;







