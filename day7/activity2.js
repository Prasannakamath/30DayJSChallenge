//task3: write a method in book object to return title and author as a string.
//log the result to console.
let book = {
  title: "Catalyst",
  author: "Prasanna",
  year: 2020,
};
book.anonymousFunction = function () {
  console.log(
    `This book titled ${this.title} is written by author ${this.author}`
  );
};

book.arrowFunction = () => {
  console.log(
    `This book titled ${this.title} is written by author ${this.author}`
  );
};

console.log("anonymous function Output");
book.anonymousFunction();
console.log("arrow function output");
book.arrowFunction(); // returns undefined because arrow functions do not have 'this' keywords.
//reference: https://javascript.info/arrow-functions

//task4: write a method to book Object that takes year as a parameter and updates the year property of book.
//log updated Object to console.

book.updateYear = function (newYear) {
  this.year = newYear;
};

book.updateYear(1998);
console.log(book);
