//task3: write function to find maximum of 2 numbers and log result to console.
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    console.log("both numbers are equal.");
    return num2;
  }
}
let num1 = 11.99;
let num2 = 12;
console.log(`which is max among ${num1} and ${num2}: ${findMax(num1, num2)}`);

//task4: Concatenate 2 strings and return result using function.
function StrConcatenate(str1, str2) {
  return str1 + str2;
}
let str1 = "PRASANNA";
let str2 = " KAMATH";
console.log(StrConcatenate(str1, str2));
