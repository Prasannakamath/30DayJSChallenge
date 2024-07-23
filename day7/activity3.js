//task5: create a nested Object named Library with properties name and books.
//books is an array of objects consisting of several book details.
//log the object to console.
let library = {
  name: "Central Library",
  books: [
    {
      title: "Catalyst",
      author: "Prasanna",
      year: 1998,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert",
      year: 1980,
    },
  ],
};

console.log(library);

//task6: Access and log the name of the library.
//Access and log all the book titles in the library.
console.log(`Name of this library is: ${library.name}`);
library.books.forEach((book) =>
  console.log(`This library contains a book titled: ${book.title}`)
);
