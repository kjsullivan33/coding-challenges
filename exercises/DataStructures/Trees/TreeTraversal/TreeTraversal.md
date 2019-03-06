## Traversing a Tree

Visit every node once

### Breadth-first Search
  * Starting at the root, and working across the tree (left to right)
  * Create a queue (this can be an array) and a variable to store the values of nodes visited
  * Place the root node in the queue
  * Loop as long as there is anything in the queue
    * Dequeue a node from the queue and push the value of the node into the variable that stores
      nodes
    * If there is a left property on the node dequeued - add it to the queue
    * If there is a right property on the node dequeued - add it to the queue
  * Return the variable that stores the values

### Depth-first Search
  * Working down the tree
  * InOrder
  * PreOrder
  * PostOrder

### When to use BFS and DFS
  * Depends on the tree
    * If the tree is quite large
      * BFS would have to keep track of a bunch of data in the queue
        (greater space complexity)
      * DFS doesn't have to store those nodes in a queue 
        (less space complexity)
  * DFS
    * InOrder
      * Need to obtain the values sorted
    * PreOrder
      * Used to "export" a tree structure so that it is easily reconstructed or copied
    * PostOrder
      * 

