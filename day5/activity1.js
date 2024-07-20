//task1: write a function to determine a number is even or odd and log the result to console.
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
let num = 5;
console.log(`is ${num} Even? : ${isEven(num)}`);

//task2: write a function to return square of a number and log the result to console.
function findSquare(num) {
  return num ** 2;
}
let num1 = 12;
console.log(`Square of ${num1} is: ${findSquare(num1)}`);
