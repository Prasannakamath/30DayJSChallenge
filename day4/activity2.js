//task3: calculate sum of numbers from 1 to 10 using while loop and log the result to console.
function calculateSumOfNumbersUpto(endNum) {
  let i = 1;
  let sum = 0;
  while (i <= endNum) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(calculateSumOfNumbersUpto(10));

//task4: Print numbers 10 to 1 using while loop
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
