const findSubstrCount = (string, substring) => {
  //create a variable to store the count of substring occurrences
  let count = 0;
  //loops through string
  for (let i = 0; i<string.length; i++){
    //loops through substring
    for (let j=0; j<substring.length; j++){
      //check if the substring value equals the string value
      if (string[i+j] !== substring[j]){
        break;
      }
      if (j === substring.length - 1) {
        //add 1 to count
        count++;
      }
    }
  }
  //return count
  return count;
}

module.exports = findSubstrCount;