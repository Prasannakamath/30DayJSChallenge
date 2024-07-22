//task12: create a 2-dimensional array and log entire array to console.
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr);

//task13: access and log specific element from 2D array to console.

function printMatrix(arr) {
  let matrix = [];
  for (let i = 0; i < arr.length; i++) {
    let colObj = {};
    for (let j = 0; j < arr[i].length; j++) {
      colObj[j] = arr[i][j];
    }
    matrix.push(colObj);
  }
  console.table(matrix);
}
printMatrix(arr);
