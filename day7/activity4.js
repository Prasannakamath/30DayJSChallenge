//task7: add a method to book object that uses this keyword
//to return a string book's title and year, log result to console.
book = {
  title: "Catalyst",
  author: "Prasanna",
  year: 1998,
};

book.fetchDetails = function () {
  return `the book titled ${this.title} was written by ${this.author} in the year ${this.year}`;
};

console.log(book.fetchDetails());
