1. Determine the time complexity for the following function

  ``` javascript
  function logUpTo(n) {
    for (var i=1; i<=n; i++) {
      console.log(n)
    }
  
  ```
    * Answer: O(n)

2. Determine the time complexity for the following function

  ``` javascript
    function logAtMost10(n) {
      for (var i = 1; i <= Math.mind(n, 10); i++) {
      }
    }
  ```
    * Answer: O(1)

3. Determine the time complexity for the following function

  ``` javascript
    function logAtLeast10(n) {
      for (var i = 1; i <= Math.max(n,10); i++) {
        console.log(i);
      }
    }
  ```
    * Answer: O(n)

4. Determine the time complexity for the following function

  ``` javascript
    function onlyElementAsEvenIndex(array) {
      var newArray = Array(Math.ceil(array.length / 2));
      for (var i=0; i < array.length; i++){
        if (i%2 ==0) {
          newArray[i/2] = array[i];
        }
      }
      return newArray;
    }
  ```
    * Answer: O(n)

5. Determine the time complexity for the following function

  ``` javascript
    function subtotals(array) {
      var subtotalArray = Array(array.length);
      for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j=0; j <= i; j++){
          subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
      }
      return subtotalArray;
    }
  ```
    * Answer: O(n^2)