//task3: Write a function that generates unique Ids.
//create a closure function that keeps track of last generated Id.
//increment Id with each call;
function generateUniqueId() {
  let idNum = 0;
  return {
    generate: function () {
      return ++idNum;
    },
    getLastGenNum: function () {
      return idNum;
    },
  };
}

let studentId = generateUniqueId();

let id1 = studentId.generate();
console.log(id1);
console.log(studentId.getLastGenNum());

//task4: create closure that capture's username.
//returns function that greets user by name.
function captureUser(username) {
  return function () {
    console.log(`Hello ${username}, welcome to closure.`);
  };
}

let user1 = captureUser("Jhon");
user1();
