//task1: write a program to add two numbers and log the result to console.
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

//task2: write a program to substact two numbers and log the result to console.
function substract(a, b) {
  return a - b;
}

console.log(substract(5, 2));

//task3: write a program to multiply two numbers and log the result to console.
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 4));

//task4: write a program to divide two numbers and log the result to console.
function divide(a, b) {
  return a / b;
}

console.log(divide(4, 0.01));

//task5: write a program to find remainder when one number is divided by another and log the result to console.
function returnRemainder(a, b) {
  return a % b;
}

console.log(returnRemainder(10, 9));

//task6: add a number to a variable using '+=' operator and log the result to console.
let num1 = 12;
let num2 = 4;
num1 += num2;
console.log(num1);

//task7: substract a number from a variable using '-=' operator and log the result to console.
num1 -= num2;
console.log(num1);

//task8: compare two numbers using '>' and '<' and log the results in console.
console.log(`is ${num1} greater than ${num2} ? : ${num1 > num2}`);
console.log(`is ${num1} lesser than ${num2} ? : ${num1 < num2}`);

//task9: compare two numbers using '<=' and '>=' operators and log the results in console
console.log(`${num1} >= ${num2} : ${num1 >= num2}`);
console.log(`${num1} <= ${num2} : ${num1 <= num2}`);

//task10: compare two numbers using '==' and '===' and log the results in console.
let num3 = 2;
let num4 = "2";
console.log(`${num3} == ${num4} : ${num3 == num4}`);
console.log(`${num3} === ${num4} : ${num3 === num4}`);

//task11: use '&&' operator to combine result of two conditions and log the result to console.
console.log(
  `is num4 a number and its value equal to 2? : ${
    num4 == 2 && typeof num4 == "number"
  }`
);

//task12: use '||' operator to combine result of two conditions and log the result to console.
console.log(
  `is num4 a number or its value equal to 2? : ${
    num4 == 2 || typeof num4 == "number"
  }`
);

//task13: use '!' operator to negate a condition and log the result to console.
let num5 = null;
console.log(`is num4 contain null value? : ${!num5}`);

//task14: use ternary operator to check if a number is positive or negative and log the result to console.
function isPositive(a) {
  return a >= 0 ? true : false;
}

console.log(`is -4 positive? : ${isPositive(-4)}`);
