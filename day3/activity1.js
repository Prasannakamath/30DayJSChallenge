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

//task2: check if a person is eligible to vote(age>=18) and log the result to console.
function isEligibleToVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let age = 12;
console.log(
  `Person with age ${age} is Eligible to Vote? : ${isEligibleToVote(age)}`
);
