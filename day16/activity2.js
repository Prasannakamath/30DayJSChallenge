//task3: write recursive function to find sum of all elements in an array.
//log the result for few testcases.
function sumAll(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumAll(arr.splice(1, arr.length));
}
console.log(sumAll([1, 2, 3, 4, 5]));
console.log(sumAll([4, 6, 29]));
