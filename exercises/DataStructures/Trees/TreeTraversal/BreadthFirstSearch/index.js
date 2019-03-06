const util = require('util');

const BinarySearchTree = require('../../BinarySearchTrees/index');

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const breadthFirstSearch = (tree) => {

  // Create a queue(this can be an array) and a variable to store the values of nodes visited
  const queue = [];
  const visited = [];
  // Place the root node in the queue
  let current = tree.root;
  queue.push(current);
  // Loop as long as there is anything in the queue
  while (queue.length) {
    // Dequeue a node from the queue and push the value of the node into the variable that stores
    //   nodes
    current = queue.shift();
    visited.push(current.val);
    
  // If there is a left property on the node dequeued - add it to the queue
    if(current.left){
      queue.push(current.left);
    }
  // If there is a right property on the node dequeued - add it to the queue
    if(current.right){
      queue.push(current.right);
    }
  }
  // Return the variable that stores the values
  return visited;
}

console.log(breadthFirstSearch(tree));
// console.log(util.inspect(tree, false, null, true));
