
//Function accepts and array and a value
const findValueInArray = (array, value) => {
  //if the array is empty, return -1
  if (array.length == 0){
    return -1;
  }
  //loop through the array and check each item against the value argument
  for (let i = 0; i< array.length; i++){
    //if the value in the array matches the value parameter, return the index of the value
    if (array[i] === value){
      return i;
    }
  }
  //after the loop, if no matches were found, return -1
  return -1;
}

module.exports = findValueInArray;