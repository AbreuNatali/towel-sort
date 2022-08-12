function towelSort(matrix) {
  let result = [];
    for (let i=0; i<matrix.length; i++) {
    let matrixItem = matrix[i];
    if (i%2 === 0) {
      result = result.concat(matrix[i]);        
      }       
    else {
        result = result.concat(matrix[i].reverse());        
      }  
}
return result;
}

/*
console.log(towelSort([
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
]));
*/

module.exports = function towelSort (matrix) {
  return [];
}
