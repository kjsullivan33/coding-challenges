

const factorial = (num) => {
  // console.log(num);
  if (num === 1){
    return 1;
  }
  if (num ===0){
    return 0;
  } else {
    return num * factorial(num - 1);
  }
  
}

// console.log(factorial(3));

module.exports=factorial;