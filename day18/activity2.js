//task4: linear search.
function linearSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) {
      return i;
    }
  }
  return "not found";
}

let arr = [2, 3, 4, 5, 6, 10];
console.log(linearSearch(arr, 10));

//task5: binary search
function binarySearch(arr, data) {
  function search(arr, data, low, high) {
    if (low > high) return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === data) {
      return mid;
    } else if (arr[mid] < data) {
      return search(arr, data, mid + 1, high);
    } else {
      return search(arr, data, low, mid - 1);
    }
  }
  return search(arr, data, 0, arr.length - 1);
}
console.log(binarySearch(arr, 10));
