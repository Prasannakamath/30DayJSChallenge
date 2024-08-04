//task1: implement Quick Sort algorithm.
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [-6, 3, 4, 71, 9, 0];
console.log(quickSort(arr));

//task2: Selection Sort.
function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    if (small !== i) {
      let c = arr[small];
      arr[small] = arr[i];
      arr[i] = c;
    }
  }
  return arr;
}

console.log(SelectionSort(arr));

//task3: bubble sort.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
