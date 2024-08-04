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
