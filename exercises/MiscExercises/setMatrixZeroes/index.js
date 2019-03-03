let setZeroes = function (matrix) {

  let indexes = [];

  for (let i=0; i< matrix.length; i++){
    for (let j=0; j< matrix[i].length; j++){
      // console.log(matrix[i][j]);
      if (matrix[i][j] === 0){
        indexes.push({row: i, col: j});
      }
    }
  }

  // console.log(indexes);
  for (let index = 0; index< indexes.length; index++){
    // console.log(indexes[index].row);
    let k = 0;
    while (k < matrix[0].length){
      // console.log(matrix[indexes[index].row][k]);
      matrix[indexes[index].row][k] = 0;
      k++
    }
     k=0;
    while (k < matrix.length){
      // console.log(matrix[k][indexes[index].col]);
      matrix[k][indexes[index].col] = 0;
      k++;
    } 
  }
    return matrix;
  }
  

setZeroes([
  
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  
]);

module.exports=setZeroes;