//task1: check if a number is positive, negative or zero and log the result to console.
function checkNum(a) {
  if (a > 0) {
    return `${a} is Positive`;
  } else if (a < 0) {
    return `${a} is Negative`;
  } else {
    return `${a} is Zero.`;
  }
}

console.log(checkNum(10));
