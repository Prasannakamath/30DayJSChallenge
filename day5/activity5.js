//task9: Write a higher Order function that takes a function and a number as input.
//And returns the input function as many times as indicated by second input number.
function repeat(num, logOut) {
  while (num !== 0) {
    logOut();
    num--;
  }
}
repeat(10, () => console.log("Inner function called"));

//task10: write a higher order function that takes 2 functions and a value in input.
//apply first function to the input value, then apply second function to result.
function higherOrder(a, func1, func2) {
  let result = func1(a);
  func2(result);
}

higherOrder(
  3,
  (a) => a ** 2,
  (a) => console.log(a)
);
