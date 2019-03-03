An algorithm is a process or set of steps to accomplish a certain task

### Steps to take
1. Devise a plan for solving problems
2. Master common problem solving patterns

## Problem Solving
  * Understand the problem
  * Explore Concrete Examples
  * Break it Down
  * Solve/Simplify
  * Look Back and Refactor

### Understand the Problem
  * Can I restate the problem in my own words?
  * What are the inputs that go into the problems?
  * What are the outputs that should come grom the solution to the problem?
  * Can the outputs be determined from the inputs? (Do I have enough information to 
    solve the problem?)
  * How should I label the important pieces of data that are a part of the problem?

### Explore Concrete Examples
  * Start with simple examples
  * Progress to more complex examples
  * Explore examples with empty inputs
  * Explore examples with invalid inputs

### Break It Down
  * Explicity write out the steps you need to take

### Solve/Simplify
  * Find the core difficulty in what you're trying to do
  * Temporarily ignore that difficulty 
  * Write a simplified solution
  * Then incorporate that difficulty back in

### Look Back and Refactor
  * Can you check the result?
  * Can you derive the result differently?
  * Can you understand it at a glance?
  * Can you use the result or method for some other problem?
  * Can you improve the performance of your solution?
  * Can you think of other ways to refactor?
  * How have other people solved this problem?

## Problem Solving Patterns
  * Frequency Counter
  * Multiple Pointers
  * Sliding Window
  * Divide and Conquer
  * Dynamic Programming
  * Greedy Algorithms
  * Backtracking
  * Etc...

### Frequency Counters
  * Uses objects or sets to collect values/ frequencies of values
  * This can often avoid the need for nested loops or O(n^2) operations w/ arrays/strings

### Multiple Pointers
  * Creating pointers or values that correspond to an index or position and move towards the 
    beginning, end, or middle based on a certain condition
  * Very efficient for solving problems with minimal space complexity

### Sliding Window 
  * Creating a window which can either be an array or number from one position to another
  * Depending on a certain condition, the window either increases or closes 
    (and a new window is created)
  * Very useful for keeping track of a subset of data in an array/string etc.

### Divide and Conquer 
  * Dividing a data set into smaller chunks and then repeating a process with a subset of data
  * Can tremendously decrease time complexity

##Recursion
 Once upon a time, there was Martin and a dragon.  One day, Martin is talking to a wizard
 who gives him a list of numbers and tasks him with talking to the dragon. Come back to me and tell me if any of the numbers are odd. Excuse me, Mr. Dragon.  Are any of these numbers odd?  (3142 5798 6550 5914) The dragon says, sorry I'll only tell you if the first number in that list is odd. Ok fine, what about the first number in this list? Not odd! Martin leaves and comes back. Okay, what about the first number in this list? (5798 6550 5914) Not odd! He does it again! 
 (6550 5914) Not odd! Once more! (5914) Not odd! What about this list () It's empty, there's no number in there. So all the number are even in the list!
  * Define what recursion is and how it can be used
  * Understand the two essential components of a recursive function
  * Visualize the call stack to better debug and understand recursive functions
  * Use helper method recursion and pure recursion to solve more difficult problems

### Why use Recursion?
  * Recursion is a process (a function for example) that calls itself
  * It's everywhere (JSON.parse/JSON.stringify)
  * Object traversal
  * Will see it with more complex data structures like trees
  * It's sometimes a cleaner alternative to iteration

### The Call Stack
  * A data structure
  * Any time a function is invoked it is placed (pushed) on top of the call stack
  * When JavaScript sees the return keyword, or when the function ends, the compiler
    will remove (pop)

### How Recursive Functions Work
  * Invoke the same function with a different input until you reach the base case
  * The base case is the condition when the recursion ends

### Common Recursion Pitfalls
  * No base case or wrong base case





