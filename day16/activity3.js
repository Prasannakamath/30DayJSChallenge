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

//task6: write recursive function to check if string is a palindrome.
//log result for few testcases.
function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
}
console.log(isPalindrome("prasanna"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Eye"));
console.log(isPalindrome("RACECAR"));
