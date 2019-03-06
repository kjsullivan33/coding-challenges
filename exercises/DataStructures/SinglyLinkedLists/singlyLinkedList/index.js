const Node = require('../../Library/Node');


class SinglyLinkedList {
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }

  push(val) {
    //create a new node using the value passed to the function
    let node = new Node(val);
    //If there is no head property, set the head and tail to be the newly created node
    if (!this.head){
      this.head=node;
      this.tail=this.head;
    } else {
      //Otherwise, set the next property on the tail to be the new node and set the tail property 
      // on the list to be the newly created node
      this.tail.next = node;
      this.tail = node;
    }
    //Increment the length by 1
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1){
      this.head=null;
      this.tail=null;
      this.length=0;
    } else {
      //set head to a variable
      let previous = this.head;
      //set the next node to a variable
      let temp = this.head.next;

      //until you get to the end of the list
      while (temp.next !== null) {
        //traverse the node keeping track of the previous node and the current node
        previous = temp;
        temp = temp.next;
      }
      //after you reach the end of the list, set that node as null and set the tail 
      //to the previous node
      this.tail = previous;
      this.tail.next = null;
      this.length--;
      return this.tail;
    }
    }

    shift() {
      if(!this.head) return undefined;
      //remove the node that is the head.
      //move the head over to the next node.
      let next = this.head.next;
      this.head = next;
      this.length--;
      return this.head;
    }
    
    unshift(val) {
      //create a new node
      let node = new Node(val);
      //If there is no head property, set the head and tail to be equal to the new node
      if (!this.head){
        this.head = node;
        this.tail = this.head;
      } else {
        //Otherwise, set the new node's next property to the current head
        node.next = this.head;
        //Set the head property to be equal to the new node.
        this.head = node;
      }
      //Increment length by 1
      this.length++;
    }

    get(index) {
      if (index < 0 || index >= this.length) return null;
      //traverse the list a number of times equal to position
      let current=this.head;
      let i=0;
      while(i < index){
      //return the value at that node
      current=current.next;
      i++;
      }
      return current;
    }

    set(val, index) {
      let foundNode = this.get(index);
      if (foundNode){
        foundNode.val = val;
        return true;
      }
      return false;
    }

    insert(val, index) {
      if (index < 0 || index > this.length) return false;
      //find the node previous to the node at the given index
      if (index === this.length) {
        this.push(val);
        return true;
      }
      if (index === 0) {
        this.unshift(val);
        return true;
      }
      let previous = this.get(index-1);
      let current = previous.next;
      //create a new node with val
      let newNode = new Node(val);
      //set the node after the previous node to point to the newNode
      previous.next = newNode;
      //set the new node's next node to the current node
      newNode.next = current;
      //Increment length by 1
      this.length++;
      return true;
    }

    remove(index){
      //check if index is valid
      if(index <0 || index >= this.length)return false;
      //if index is 0, remove the first node (head) and return it
      if(index===0){
        return this.shift();
      }
      //If index is the last index, return the last node (tail) and return it
      if(index === this.length-1){
        return this.pop();
      
      } //Otherwise, get the previous node and set to a variable.  Set the node to
        //be removed to another variable.  Set the node to the previous node to point 
        //to the node that comes after the removed node
        else {
      let previous = this.get(index-1);
      let removed = previous.next;
      previous.next = removed.next;
      previous.next = next;
      }
      //Decrement the length by 1
      this.length--;
      //return the removed node
      return removed;
    }

    reverse(){
      if(!this.head) return false;
      if(this.length >1){
        //create a variable and set it equal to the head
        let node = this.head;
        //set the head equal to tail
        this.head = this.tail;
        //set the tail equal to the node
        this.tail = node;
        //create a variable previous and set to null
        let previous = null;
        //create a variable next and set to null
        let next;
        //loop through the list
        
        for (let i=0; i< this.length; i++){
          //Set the next to be the next property on whatever node is
          next = node.next;
          //Set the node to point to the previously reversed node
          node.next = previous;
          //Set previous to the node that was just reversed
          previous = node;
          //Set node to the next node to be reversed
          node = next;
        }
        

        }
      
      }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.reverse();

// console.log(list);
// console.log(list.head);
// console.log(list.head.next);
console.log(list);
