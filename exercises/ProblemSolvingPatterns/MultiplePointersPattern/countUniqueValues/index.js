
const countUniqueValues = (array) => {
  if (array.length <= 0){
    return 0;
  }
  let i = 0;
  for (let j=1; j<array.length; j++){
    if (array[i] !== array[j]){
      i++;
      array[i] = array[j];
    }
  }
  return i+1;
}

countUniqueValues([-2, -1, -1, 0, 1]);
module.exports = countUniqueValues;