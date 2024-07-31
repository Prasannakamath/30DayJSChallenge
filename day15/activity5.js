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
