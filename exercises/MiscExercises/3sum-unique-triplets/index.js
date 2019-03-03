let threeSum = (nums) => {
  let uniqueTriplets = [];
  nums.sort((a, b) => a - b);
  

  for (let indexA = 0; indexA<nums.length; indexA++){

    let indexB = indexA + 1;
    let indexC = nums.length-1;
    if (nums[indexA] > 0){
      return uniqueTriplets;
    }
    if (indexA > 0 && nums[indexA] === nums[indexA-1]) continue;
    
    while (indexB < indexC){
      let sum = nums[indexA] + nums[indexB] + nums[indexC];

      if (sum < 0) {
        indexB++
      } else if (sum > 0){
        indexC--;
      } else {
        uniqueTriplets.push([nums[indexA], nums[indexB], nums[indexC]]);
        while (nums[indexB] === nums[indexB+1])indexB++;
        while (nums[indexC] === nums[indexC-1])indexC--;
        indexB++;
        indexC--;
      }
    }
}
  // console.log(uniqueTriplets);

}


module.exports = threeSum;