const Node = require('../../Library/Node');

class Queue {
  constructor(){
    this.first = null;
    this.last=null;
    this.size = 0;
  }

  //a method to add a node to the end of the queue
  addToQueue(value){
    const node = new Node(value);
    if(!this.last){
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    } 
    return ++this.size;
  }

  //a method to remove the first node from the queue
  removeFromQueue(){
    if (!this.first) return null;
    let removed;
    if (this.length === 1){
      removed = this.first;
      this.first= null;
    } else {
      removed = this.first;
      this.first = removed.next;
    }
      this.size--; 
      return removed.value;
  }

}

const queue = new Queue();

queue.addToQueue(20);
queue.addToQueue(30);
queue.addToQueue(40);
queue.addToQueue(50);
console.log(queue);
queue.removeFromQueue();
console.log(queue);