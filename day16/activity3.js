//task5: Write recursive function to reverse a string.
//log result for few testcases.
function reverseString(str) {
  if (str.length === 1) {
    return str[0];
  }
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}
console.log(reverseString("prasanna"));
console.log(reverseString("Eye"));
console.log(reverseString("String"));
