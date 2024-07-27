//task3: create sequence of promises simulating data fetch from server.
//chain promises to log messages in specific order.
function fetchUserName(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("fetched username: Prasanna from server1"), time);
  });
}
function fetchEmail(time) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("fetched email: dummymail@gmail.com from server2"),
      time
    );
  });
}
function fetchAge(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("fetched age: 26 from server3"), time);
  });
}

let time = 2000;
fetchUserName(time)
  .then((msg) => {
    console.log(msg);
    return fetchEmail(time);
  })
  .then((msg) => {
    console.log(msg);
    return fetchAge(time);
  })
  .then((msg) => {
    console.log(msg);
  });
