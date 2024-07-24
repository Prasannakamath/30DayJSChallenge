//task7: write a function that takes 2 numbers as arguments and returns their product.
//default the second argument to be 1.
//log the result of function with and without second argument in function call.
function multiply(num1, num2 = 1) {
  return num1 * num2;
}
console.log(`result of multiply when 2nd argument provided: ${multiply(3, 4)}`);
console.log(
  `result of multiply when second argument not passed: ${multiply(4)}`
);
