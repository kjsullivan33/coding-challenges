
//Function accepts a sorted array and a value
//The function returns the index of the value within the array
//If the value is not in the array, the function returns -1

const findValueInSortedArray = (array, value) => {
  //set the min index value to zero
  let min = 0;
  //set the maximum index value to the last index in the array
  let max = array.length-1;

  //loop while minimum < maximum
  while (min <= max){
    //set a midpoint index
    let mid = Math.floor((min+max)/2);
    //check if the midpoint equals the value  
    // console.log(array[mid]);
    // console.log(value);
    if (array[mid] === value){
      //if true, return then return the midpoint
      return mid;
    }
    //if the midpoint is greater than the value
    if (array[mid] > value){
      //set the maximum index to equal the midpoint index-1
      max = mid-1;
    }
    //if the midpoint is less than the value
    if (array[mid] < value){
      //set the minimum index to equal the midpoint index+1
      min = mid+1;
    }
  }
  //If the value was not found, return -1
  return -1;
}

// findValueInSortedArray([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15);

module.exports=findValueInSortedArray;