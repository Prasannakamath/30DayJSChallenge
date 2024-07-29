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
