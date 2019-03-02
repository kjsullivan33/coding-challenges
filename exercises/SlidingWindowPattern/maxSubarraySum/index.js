
const maxSubarraySum = (array, n) => {
  if (n > array.length){
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i< n; i++){
    maxSum += array[i];
  }
  tempSum=maxSum;
  for (let i = n; i < array.length; i++){
    tempSum = tempSum - array[i-n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
// }
// const exampleArray = new Array(100);
// for (let i=0; i<exampleArray.length; i++){
//   exampleArray[i]=getRandomIntInclusive(1,10);
// }
// console.log(exampleArray);


module.exports = maxSubarraySum;