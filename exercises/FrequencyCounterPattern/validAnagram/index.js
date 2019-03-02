
/*
Given two strings, write a function to determine if the second string is an
anagram of the first.

Examples:
validAnagram('',''); should be true
validAnagram('aaz','zza'); should be false
validAnagram('anagram', 'nagaram'); should be true
validAnagram('awesome', 'awesom'); should be false
validAnagram('rat', 'car'); should be false
validAnagram('qwerty', 'qeywrt'); should be true
validAnagram('texttwisttime', 'timetwisttext'); should be true
*/

const validAnagram = (str1, str2) => {

  //check if strings are of equal length
  if (str1.length !== str2.length){
    //if false, return false
    return false;
  }
  //create two objects to store the letters in each string as keys and the 
  //values as the frequency of the letters in each string
  const str1Count={};

  //loop through the first string
  for (let letter of str1){
    //check if the letter is a key in str1Count
    if (str1Count[letter]){
       //if it is, add 1 to the value
      str1Count[letter]++;
    } else {
      //if not, add the letter as a key and set the value to 1
      str1Count[letter]=1;
    } 
  }
  //loop through the second string
    
  for (let letter of str2) {
    //check if the letter is not in str1Count
    if (!str1Count[letter]) {
      //if it isn't, return false
      return false;
    } else {
      //if it is, subtract one from the value in str1Count
      str1Count[letter] -= 1;
    }
  }
  
  //return true
  return true;
} 

module.exports = validAnagram;