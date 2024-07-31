//task7: Write a function that memoizes the results of another function.
//use closure to store results of previous computations.
function memoize() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("returning from cache");
      console.log(cache);
      return cache[num];
    }
    cache[num] = num * 10;
    return cache[num];
  };
}

let mulBy10 = memoize();
console.log(mulBy10(4));
console.log(mulBy10(8));
console.log(mulBy10(4));

//task8: create memoized version of function that calculates factorial.
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
function memoizeFact(fn) {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("returning from cache");
      return cache[num];
    }
    cache[num] = fn(num);
    return cache[num];
  };
}

let factorMem = memoizeFact(factorial);
console.log(factorMem(10));
console.log(factorMem(10));
