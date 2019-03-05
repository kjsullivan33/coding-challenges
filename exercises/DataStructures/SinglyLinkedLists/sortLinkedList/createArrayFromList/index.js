const createArrayFromList = (list) => {
  //takes in a linked list as a value and returns an array of the list values
  let current = list.head;
  let array = [];
  while (current){
    array.push(current.val);
    current = current.next;
  }

  return array;

}

module.exports = createArrayFromList;