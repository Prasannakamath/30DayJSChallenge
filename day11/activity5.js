//task8: use 'promise.all' to wait for multiple promises to resolve and log there result.
function promise1(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1 resolved");
    }, time);
  });
}

function promise2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise2 resolved");
    }, time + 1000);
  });
}

function promise3(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise3 resolved");
    }, time + 2000);
  });
}

let time = 2000;
Promise.all([promise1(time), promise2(time), promise3(time)]).then(
  (returnArray) => {
    console.log(returnArray);
  }
);

//task9: use 'promise.race' to log value of first promise that was resolved,
//among multiple promises.
console.log("promise.race called");
Promise.race([promise1(time), promise2(time), promise3(time)]).then((value) =>
  console.log(value)
);
