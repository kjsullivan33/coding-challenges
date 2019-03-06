## Data Structures

### Singly Linked Lists
  * A data structure that contains a hear, tail, and length property
  * Consists of nodes, and each node has a value and a pointer to another
    node or null
  * To access nodes, you need to start at the beginning and traverse by calling 'next'
    until you reach the tail (null)
  * Each node is only connected in one direction to the next node
  * No indexes, random access not allowed
  * Quick Insertion and Deletion for long data sets (when you don't need random access)

### Stacks and Queues
  * Stack
    * A LIFO data structure
    * The last element added will be the first element removed
    * Used for managing function invocations, Undo/Redo, Routing (history of pages viewed)
  * Queue
    * A FIFO data structure
    * Background tasks, uploading resources, printing/task processing

### Trees
  * Trees
    * A data structure that consists of nodes in a parent/child relationship
    * Nonlinear
    * Terminology
      * Root: top node 
      * Child: a node directly connected to another node when moving away from the root
      * Parent: converse notion of a child
      * Siblings: A group of nodes with the same parent
      * Leaf: a node with no children
      * Edge: the connection between one node and another
      * Branch: a node that is not the root and has children
    * Uses
      * HTML DOM
      * Network Routing
      * Abstract Syntax Trees
      * Artificial Intelligence (Decision trees)
      * Folders in Operating Systems
      * JSON object
  * Binary Trees
    * Each node can only have at most two child nodes (left and right)
  * Binary Search Trees
    * Special Binary Tree
    * Sorted
      * Left child is less than parent
      * Right child is greater than parent
    * Why?
      * Quick to insert and search
      
