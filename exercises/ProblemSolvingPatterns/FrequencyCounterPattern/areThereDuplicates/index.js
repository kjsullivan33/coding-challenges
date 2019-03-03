const areThereDuplicates = (arg1, arg2, arg3) => {
  const args = [arg1, arg2, arg3];
  //create an object to store frequencies
  const obj = {}
  //loop through the arguments
  for (let i=0; i<args.length; i++){
    // console.log(arguments[i]);
    // console.log(obj);
    //if the argument is in the object, return true
    if (obj[args[i]]){
      return true;
    } else {
      //if not, add it as a key and set the value to one
      obj[args[i]] = 1;
    }
    
  }

  //return false
  return false;

}

// const setArguments = () => {
//   console.log(arguments.length);
//   areThereDuplicates.apply(this, arguments);
// }
// console.log(setArguments(1));
console.log(areThereDuplicates(1,2,2));
module.exports = areThereDuplicates;