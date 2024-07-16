//task5: print numbers from 1 to 5 using do-while loop.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//task6: calculate factorial of a number using do-while loop.
function findFactorialOf(num) {
  let factorial = 1;
  if (num == 0 || num == 1) {
    return factorial;
  } else if (num > 0) {
    do {
      factorial *= num;
      num--;
    } while (num > 1);
    return factorial;
  } else {
    console.log("Cannot find factorial of negative number");
    return;
  }
}

console.log(findFactorialOf(20));
