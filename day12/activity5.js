//task8: use 'fetch' API to fetch data from invalid url.
//handle the error using .catch() method.
fetch("InvalidUrl").catch((err) => console.log(err.message));
