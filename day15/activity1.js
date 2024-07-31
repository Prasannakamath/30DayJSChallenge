//task1: write a function that returns another function.
//inner function access a variable of outer function and log the result to console.
function outFunc(x) {
  return function inFunc() {
    console.log(`parameter passed in outer function is ${x}`);
  };
}

let funcCall = outFunc(20);
funcCall();

//task2: create a closure that maintains private counter.
//write methods within function to increment and retrieve counter.
function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getCurrCount: function () {
      return count;
    },
  };
}

let counter1 = counter();
console.log(counter1.getCurrCount()); //0
counter1.increment();
console.log(counter1.getCurrCount()); //1
