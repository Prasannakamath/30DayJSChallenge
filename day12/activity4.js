//task6: create a promise that randomly resolves or rejects.
//use .catch to handle rejection and log appropriate message to console.
function promise1() {
  return new Promise((resolve, reject) => {
    let rand = Math.round(Math.random() * 100);
    console.log(rand);
    if (rand % 2 === 0) {
      resolve("Promise resolved.");
    } else {
      reject("Promise rejected.");
    }
  });
}

promise1()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

//task7: use try-catch with async function to handle errors from Promise that randomly resolves/rejects.
//log the error message
async function handlePromise() {
  try {
    console.log(await promise1());
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
