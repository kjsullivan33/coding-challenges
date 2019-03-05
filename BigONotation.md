### Counting Operations
* Count the number of simple operations the computer has to perform (sumNumbersToN).
  * ```javascript return n * (n + 1) / 2;```
    * 1 multiplication
    * 1 addition
    * 1 division
    * O(1)
  * ``` javascript for (let i = 1; i<=n; i++){total += i;}return total; ```
    * 2 additions times n (i++ total += i)
    * 2 assignments times n (i++ total +=i)
    * 2 assignments (total = 0, i = 0)
    * 1 comparison times n (i<=n>)
    * Number of operations grows roughly proportionally with n
    * O(n)
### Time Complexities
* Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
* O(f(n)) if the number of simple operations the computer has to do is eventually less than 
  a constant times f(n), as n increases
    * f(n) could be linear (f(n) = n) - For loop as an example
    * f(n) could be quadratic (f(n) = n^2) - Nested for loop as an example
    * f(n) could be constant (f(n) = 1) - simple operation with no loops
    * f(n) could be something entirely different
* Big O Shorthands
  1. Arithmetic Operations are constant
  2. Variable assignment is constant
  3. Accessing elements in an array (by index) or object (by key) is constant
  4. In a loop, the complexity is the length of the loop times the complexity of whatever happens    inside the loop.
* Most Common Big O Expressions
  1. O(n^2)
  2. O(nlog n)
  3. O(n)
  4. O(log n)
  5. O(1)
### Space Complexity
  How much additional memory do we need to allocate in order to run the code in our algorithm
  * Most primitives (booleans, numbers, undefined, null) are constant space
  * String require O(n) space (where n is the string length)
  * Reference types are generally O(n), where n is the length (for arrays) or the number of keys
    (for objects)
### Logarithms O(log(n))
  * Searching Algorithms
  * Efficient sorting algorithms
  * Recursion sometimes involves logartihmic space complexity
### Objects: Unordered, key value pairs
  * Don't need order
  * When you need fast access/insertion and removal
  * Insertion - O(1)
  * Removal - O(1)
  * Searching - O(N)
  * Access - O(1)
  * Methods: 
    * Object.key - O(n)
    * Object.values - O(n)
    * Object.entries - O(n)
    * hasOwnProperty - O(1)
### Arrays: Ordered Lists
  * When you need order
  * When you need fast access/insertion and removal (sort of...)
  * Insertion - It depends...
  * Removal - It depends...
  * Searching - O(n)
  * Access - O(1)
  * Methods: 
    * push O(1)
    * pop O(1)
    * shift O(n)
    * unshift O(n)
    * concat O(n)
    * slice O(n)
    * splice O(n)
    * sort O(nlog(n))
    * forEach/map/filter/reduce O(n)

### Singly Linked Lists
  * Insertion - O(1)
  * Removal - It depends... O(1) or O(n)
  * Searching O(n)
  * Access - O(n)

### Stacks
  * Insertion - O(1)
  * Removal - O(1)
  * Searching - O(n)
  * Access - O(n)

### Queues
  * Insertion - O(1)
  * Removal - O(1)
  * Searching - O(n)
  * Access - O(n)