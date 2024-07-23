//task8: Use 'for..in' loop to iterate over properties of object, log each property and its value to console.
let book = {
  title: "Catalyst",
  author: "Prasanna",
  year: 1998,
};

for (let property in book) {
  console.log(
    `this book has property ${property} with value ${book[property]}`
  );
}
