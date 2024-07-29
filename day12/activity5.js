//task8: use 'fetch' API to fetch data from invalid url.
//handle the error using .catch() method.
fetch("InvalidUrl").catch((err) => console.log(err.message));

//task9: use fetch API to request data from invalid url within async function
//handle error using try catch block.
async function handleError() {
  try {
    await fetch("INvalidUrl");
  } catch (err) {
    console.log(err.message);
  }
}
handleError();
