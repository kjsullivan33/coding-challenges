const search = (array, num) => {
  //return the index where num is located in array
  //if not found, return -1
  let left=0
  let right = array.length-1;
  while (left <= right){
    let mid = Math.floor((left+right)/2);
  if (array[mid] < num ){
    left=mid+1;
  } else if(array[mid] > num){
    right = mid - 1;
  } else {
      return mid;
  }
}
return -1;
}

module.exports = search;
