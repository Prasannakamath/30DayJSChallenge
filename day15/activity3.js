//task5: Write a function that creates array of functions.
//each function should log its index when called. Use closures.
function arrOfFuncs() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(() => {
      console.log(i);
    });
  }
  return result;
}

let funcArr = arrOfFuncs();
funcArr[9](); //9
