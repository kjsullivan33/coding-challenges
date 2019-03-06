const util = require('util');
const Node = require('../../Library/Node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root){
      this.root = node;
      return;
    } 
    let current = this.root;
    while (current){
        if (value === current.val){
          // could add a could to keep track of frequency
          return;
        }
        if (value < current.val){
          // console.log(current.value);
          // console.log(node.value);
          if (!current.left){
            current.left = node;
            break;
          } else{
            current = current.left;
          }
        } else {
          if (!current.right){
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  

  find(value) {
    if (!this.root){
      return -1;
    }
    let current = this.root;
    while (current){
        if (value === current.val){
          return current;
        } else if (value < current.val){
          current = current.left;
        } else {
          current = current.right;
        } 
      }
      return -1;
    }
}

// const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.insert(7);
// tree.insert(15);
// tree.insert(3);
// tree.insert(35);
// tree.insert(9);
// tree.insert(9);

// console.log(util.inspect(tree, false, null, true));
// console.log(util.inspect(tree.find(10), false, null, true));

module.exports = BinarySearchTree;