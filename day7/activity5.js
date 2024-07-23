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

//task9: use Object.Keys and Object.Values method to log all keys and values of book object to console.
console.log(`Book object has these keys: ${Object.keys(book)}`);
console.log(`These are the values present in book: ${Object.values(book)}`);
