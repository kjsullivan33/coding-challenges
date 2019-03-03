const sameFrequency = (num1, num2) => {
  //check if the two integers have the same frequency of digits

  //convert nums to strings
  const num1String = num1.toString();
  const num2String = num2.toString();
  // console.log(num1String);
  //check if the strings are the same length
  if (num1String.length !== num2String.length){
    //if not, return false
    return false;
  }
  //create new objects to store the frequencies of the digits
  const num1Count={};
  const num2Count={};
  //loop through num1 string
  for (let digit in num1String) {
    // console.log(digit);
    //if the digit is in the frequency counter, add 1 to its value
    if (num1Count[num1String[digit]]){
      num1Count[num1String[digit]]++;
    } else {
      //if not, add the digit to the counter as a key, and set its value to 1
      num1Count[num1String[digit]] =1;
    }
  }
  // console.log(num1Count);
  //repeat for num2 string
  for (let digit in num2String) {
    //if the digit is in the frequency counter, add 1 to its value
    if (num2Count[num2String[digit]]) {
      num2Count[num2String[digit]]++;
    } else {
      //if not, add the digit to the counter as a key, and set its value to 1
      num2Count[num2String[digit]] = 1;
    }
  }
  // console.log(num2Count);
  //compare the frequency counters
    //loop through the num1 frequency counter
    for (let key in num1Count){
      //check if that key exists in frequency counter for num2
      if (!num2Count[key]){
         //if not, return false
         return false;
      }
      //check if that value is equal in frequency counters for the specified key
      if (num1Count[key] !== num2Count[key]){
        //if not, return false
        return false;
      }
        
    }
  // return true;
  return true;
}

console.log(sameFrequency(34,14));

module.exports = sameFrequency;