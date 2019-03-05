const Node = require('../Node/index');
const createList = require('../../createList/index');


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //create a method to add a node to the beginning of a list
  push(val) {
    //create a new node using the value passed to the function
    let node = new Node(val);
    //If there is no head property, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      //Otherwise, set the next property on the tail to be the new node and set the tail property 
      // on the list to be the newly created node
      this.tail.next = node;
      this.tail = node;
    }
    //Increment the length by 1
    this.length++;
  }
  
  sortedInsert(node){
    //if the list is empty, set the node as the head
    if (this.length === 0){
      this.head = node;
     
    } else {
      //If the node is less than the list's head, push the node to the front
      //Otherwise, set the current node as the head of the list
      let current = this.head;
      if (node.val < current.val) {
        this.push(node.val);
      } else {
        let previous = current;
        current = current.next;
        //While current is less than the node 
        while (current.val < node.val) {
          previous = current;
          current = current.next;
          // console.log(current);
        }
        previous.next = node;
        node.next = current;
      }
      }
    }
    
}

// const list = new SinglyLinkedList();
// list.push(10);
// list.push(20);
// list.push(30);
// list.push(40);
// const node = new Node(15);
// list.sortedInsert(node)

// console.log(list);

module.exports = SinglyLinkedList;