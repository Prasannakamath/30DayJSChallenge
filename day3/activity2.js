//task3: use nested If conditions to find the largest among 3 numbers and log the result to console.
function returnLargestNum(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(
  `which is largest number among 299,499 and 929? : ${returnLargestNum(
    299,
    499,
    929
  )}`
);
