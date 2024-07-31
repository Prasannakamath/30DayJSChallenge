//task1: write a recursive function to calculate factorial.
//log result for few test cases.
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(12));

//task2: write recursive function to calculate nth fibonacci number.
//log result for  few testcases.
function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(3));
console.log(fibonacci(5)); //0 1 1 2 3 5
console.log(fibonacci(10));
console.log(fibonacci(15));
