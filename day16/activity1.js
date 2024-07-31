//task1: write a recursive function to calculate factorial.
//log result for few test cases.
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(12));
