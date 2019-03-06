const util = require('util');

const BinarySearchTree = require('../../../BinarySearchTrees/index');


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


const preOrder = (tree) => {
  // Create a variable to store the values of nodes visited
  let visited = [];
  
  // Write a helper function which accepts a node
  function traverse(node){
    //Push the value of the node to the variable that stores the values
    visited.push(node.val);
    console.log(visited);
    //If the node has a left property, call the helper function with the left property on the node
    if(node.left) traverse(node.left);
    //If the node has a right property, call the helper function with the left property on the node
    if(node.right) traverse(node.right);
  }
  //Invoke the helper function with the current variable
  traverse(tree.root);
  // return the visited values
  return visited;
}

console.log(preOrder(tree));
console.log(util.inspect(tree, false, null, true));