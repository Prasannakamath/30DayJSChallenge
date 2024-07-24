//task5: Use SPread operator to create new array that includes all elements of old array.
//new array must include additional elements too.
//log new array to console.
let arr = [1, 2, 3, 4, 5];

let newArr = [...arr, 6, 7];
console.log(newArr);

//task6: use the rest operator in function to accept an arbitary number of arguments,
//sum them and return the result.
function sum(...values) {
  return values.reduce((acc, it) => acc + it, 0);
}

console.log(sum(4, 5, 6, 7));
