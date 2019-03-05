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