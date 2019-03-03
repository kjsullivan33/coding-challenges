
/*
-Write a function called same
-Accepts two arrays
-returns true is every value in the first array has it's corresponding square in the second array
-Frequency values must be the same

Examples:
same([1,2,3], [4,1,9]) should equal true;
same([1,2,3], [1,9]) should equal false;
same([1,2,1], [4,4,1]) should equal false;
same([1,2,3], [4,1,9,5]) should equal false because the array are not the same length;
same([0], [0] should true);
*/
const same = (arr1, arr2) => {
  //check if the arrays are equal length
  if (arr1.length !== arr2.length){
    //if not equal, return false
    return false;
  }
  // create two objects to store the frequency of values in both arrays
  const frequencyCounter1 = {};
  const frequencyCounter2 = {}; 

  // loop through the first array
  for (let i = 0; i< arr1.length; i++){
    // check if a the value is in frequencyCounter1
        if (frequencyCounter1[arr1[i]]){
        // If true, add 1 to its value
          frequencyCounter1[arr1[i]]++;
        } else {
          //If false, add the array number as a key to the object and set the value to 1
          frequencyCounter1[arr1[i]]=1;
        }
      }
  // loop through the second array
  for (let i = 0; i < arr1.length; i++) {
    // check if a the value is in frequencyCounter1
    if (frequencyCounter2[arr2[i]]) {
      // If true, add 1 to its value
      frequencyCounter2[arr2[i]]++;
    } else {
      //If false, add the array number as a key to the object and set the value to 1
      frequencyCounter2[arr2[i]] = 1;
    }
  }   

  // console.log(frequencyCounter1);
  // console.log(frequencyCounter2);
  // Check that the keys squared in frequencyCounter1 equals the keys in freqencyCounter2
  // Check that the values of the key squared in frequencyCounter1 equals the values of the keys
  // in frequencyCounter2
  for (let key in frequencyCounter1){
    //if not true, return false
    if (! (key**2 in frequencyCounter2)){
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  // Check that all values in the object equal each other
  return true;
}



module.exports = same;