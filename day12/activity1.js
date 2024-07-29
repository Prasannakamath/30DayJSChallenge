//task1: write a function that throws error on purpose.
//capture the error using try-catch block and display appropriate message.
function dummyError() {
  throw new Error("Error thrown from function");
}
try {
  dummyError();
} catch (e) {
  console.log(e.message);
}

//task2: create a function that divides 2 numbers.
//function must throw error if denominator is 0.
//handle it using try-catch and log error to console.
function divideNums(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  } else {
    return a / b;
  }
}
try {
  divideNums(3, 0);
} catch (e) {
  console.log(e.message);
}
