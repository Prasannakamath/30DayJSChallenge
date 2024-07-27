//task4: Write an async function that waits for a promise to resolve.
//log the resolved message to console.
function resolvePromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise resolved"), time);
  });
}

async function main() {
  let time = 2000;
  console.log("main function invoked");
  console.log(await resolvePromise(time));
}
main();

//task5: write async function that handles rejected promise using try-catch.
//log error message to console.
function rejectedPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("promise is rejected."), time);
  });
}

async function callfunc() {
  let time = 2000;
  try {
    console.log(await rejectedPromise(time));
  } catch (err) {
    console.log(err);
  }
}
callfunc();
