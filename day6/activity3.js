//task7: use map method to create new array where each number is doubled.
//log new array to console.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((ele) => ele * 2);
console.log(newArr);

//task8: use filter method to create new array with only even elements and log newarray to console.
let testArr = [2, 3, 5, 6, 7, 8];
let evenArr = testArr.filter((ele) => ele % 2 === 0);
console.log(evenArr);

//task9: use reduce method to calculate sum of all elements in array and log result to console.
let sum = arr.reduce((acc, it) => acc + it, 0);
console.log(sum);
