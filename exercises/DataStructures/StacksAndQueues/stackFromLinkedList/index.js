const Node = require('../../Library/Node');

class Stack {
  constructor(){
    this.bottom = null;
    this.top = null;
    this.size = 0;
  }

  //a method to add a value to the top of the stack
  push(value) {
    const node = new Node(value);
    if (!this.top){
      this.top=node;
      this.bottom=this.top;
    } else {
      let temp = this.top;
      this.top = node;
      node.next= temp;
    }
    return this.size++;
  }

  //a method to remove the value at the top of the stack
  pop() {
    let popped;
    if(!this) return null;
    if(this.length === 1){
      popped = this.top;
      this.top = null;
    }
      popped = this.top;
      this.top = popped.next;
      this.size--;
      return popped.value;
  }
}

const stack = new Stack();
stack.push(15);
stack.push(20);

console.log(stack);
const popped = stack.pop();
console.log(stack);
console.log(popped);