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

//task4: write recursive function to find maximum element in an array.
//log result for few testcases.
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], findMax(arr.splice(1, arr.length)));
}
console.log(findMax([4, 3, 6, 2, 1, 9]));
console.log(findMax([3, 3, 3, 3]));
console.log(findMax([2, 3, 6, 4, 5]));
