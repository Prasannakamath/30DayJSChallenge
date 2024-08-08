//task8: rotate array by k positions.
function swapKelements(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

function rotateArray(arr, k) {
  k = k % arr.length; //if k greater than array length, total rotation will function of modulus.
  swapKelements(arr.reverse(), 0, k - 1);
  swapKelements(arr, k, arr.length - 1);
  return arr;
}

let k = 3;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(rotateArray(arr, 5));

//task9: merge 2 sorted array into one sorted array.
let arr1 = [2, 3, 4, 6, 8];
let arr2 = [4, 7, 8, 9, 10, 11];
//arr3 = [2,3,4,4,6,7,8,8,9,10,11];

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else if (arr1[i] === arr2[j]) {
      arr3.push(arr1[i]);
      arr3.push(arr2[j]);
      i++;
      j++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
  }
  return arr3;
}

console.log(mergeArrays(arr1, arr2));
