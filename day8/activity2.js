//task3: use array destructuring to extract first and second element from an array of numbers.
//log them to console.
let arr = [1, 2, 3, 4, 5];
[firstEle, secondEle] = [arr[0], arr[1]];
console.log(`first Element: ${firstEle}.
Second Element: ${secondEle}`);

//task4: use Object destructuring to extract title and author from Book object.
//log them to console.
let book = {
  title: "Harry Potter",
  author: "PK",
  year: 1990,
};

let { title, author } = book;
console.log(`title: ${title}.
Author: ${author}`);
