//task7: write recursive function for binary search on sorted array.
//log result for few testcases.
function binarySearch(arr, ele, low, high) {
  let mid = Math.floor((low + high) / 2);
  if (low > high) return -1;
  if (arr[mid] === ele) {
    return mid;
  }
  return arr[mid] > ele
    ? binarySearch(arr, ele, low, mid - 1)
    : binarySearch(arr, ele, mid + 1, high);
}
let arr = [2, 3, 5, 6, 9];
console.log(binarySearch(arr, 3, 0, arr.length));
console.log(binarySearch(arr, 9, 0, arr.length));
console.log(binarySearch(arr, 0, 0, arr.length));

//task8: recursive function to count frequency of target element in an array.
//log result for few testcases.
function freq(arr, ele) {
  if (arr.length === 0) return 0;
  return arr[0] === ele
    ? 1 + freq(arr.splice(1, arr.length - 1), ele)
    : freq(arr.splice(1, arr.length - 1), ele);
}
console.log(freq([2, 2, 2, 4, 5, 6], 2));
console.log(freq([2, 2, 2, 4, 5, 6], 6));
console.log(freq([2, 2, 2, 4, 5, 6], 61));
