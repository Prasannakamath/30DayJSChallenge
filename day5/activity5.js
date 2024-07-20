//task9: Write a higher Order function that takes a function and a number as input.
//And returns the input function as many times as indicated by second input number.
function repeat(num, logOut) {
  while (num !== 0) {
    logOut();
    num--;
  }
}
repeat(10, () => console.log("Inner function called"));
