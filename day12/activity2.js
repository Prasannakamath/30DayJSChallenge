//task3: write a script that includes try-catch and finally blocks.
//log appropriate messages in each of them to observe execution flow.
function divide(a, b) {
  if (b === 0) {
    throw new Error("cannot divide by 0");
  }
  return a / b;
}

try {
  console.log("from try block");
  let div = divide(7, 10);
  console.log(`division result: ${div}`);
} catch (e) {
  //executes only incase of error.
  console.log("from catch block");
  console.log(`Error thrown is: ${e.message}`);
} finally {
  //always executed
  console.log("from finally block");
}
