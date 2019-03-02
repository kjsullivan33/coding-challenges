
// accepts a sorted array of integers
// find the first pair where the sum is zero
// return an array with the pair
// if no pair exists, return undefined
const sumZero = (array) => {
  //loop through the array
  //start by comparing the first number to the last number in the array
  //work to the middle of the array
  
  let left = 0; 
  let right = array.length - 1;
  while (left < right){
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]]
    } else if(sum > 0){
      right--;
    } else {
      left++;
    }
  }
}

module.exports = sumZero;