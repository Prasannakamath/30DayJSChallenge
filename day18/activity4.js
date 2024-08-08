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
