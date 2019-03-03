var groupAnagrams = function (strs) {
  let anagramArray=[];
  // create an array with the strings sorted
  
  while(strs.length>0){
    let subArray=[];
    subArray.push(strs[0]);
    // console.log(subArray);
    strs.splice(0, 1);
    for (let j = 0; j<strs.length; j++){
      // console.log(`string1: ${strs[j]}`);
      if (strs[j].split('').sort().join('') === subArray[0].split('').sort().join('')){
        subArray.push(strs[j]);
        strs.splice(strs.indexOf(strs[j]), 1);
        j--;
      }
    }
    anagramArray.push(subArray);
    // console.log(subArray);
  }
  console.log(anagramArray);
  return anagramArray;
  // remove the first string and place in a subarray.  if the next one matches, repeat
  // if the first letter doesn't match continue
  // if it matches, push the unsorted string into a new subArray
  // at the end of the loop push that subarray to a new array

};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

module.exports = groupAnagrams;