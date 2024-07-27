//task1: create a promise that resolves after 2 seconds timeout with a message.
//log message to console.
function delayMessage(time) {
  return new Promise((resolve, reject) => {
    let message = "Promise is finally resolved.";
    setTimeout(() => resolve(message), time);
  });
}
let time = 2000;
console.log(`Wait for ${time / 1000} seconds for promise to resolve.`);
delayMessage(time).then((msg) => {
  console.log(msg);
});

//task2: create a promise that rejects with error message after 2 second timeout.
//log the message to console.
function rejectPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise is rejected."), time);
  });
}
console.log(`Wait for ${time / 1000} seconds for promise to reject.`);
rejectPromise(time)
  .then((msg) => console.log(msg))
  .catch((msg) => console.log(msg));
