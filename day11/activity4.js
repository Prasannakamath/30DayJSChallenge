//task4: use 'fetch' to fetch data from public api.
//log the response to console using promises.
let url = `https://fakerapi.it/api/v1/persons`;
fetch(url)
  .then((res) => {
    console.log("fetch was successful.");
    console.log(res);
  })
  .catch((err) => {
    console.log("fetch failed.");
    console.log(err);
  });
