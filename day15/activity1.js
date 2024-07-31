//task1: write a function that returns another function.
//inner function access a variable of outer function and log the result to console.
function outFunc(x) {
  return function inFunc() {
    console.log(`parameter passed in outer function is ${x}`);
  };
}

let funcCall = outFunc(20);
funcCall();
