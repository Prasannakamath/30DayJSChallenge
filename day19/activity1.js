//task1: write regex to match all occurances of word "Javascript" in a string.
function matchRegex(string) {
  let regex = /Javascript/g;
  console.log(string.match(regex));
}
let string = "test match";
let string1 = "Javascript regex JS match Javascript";
matchRegex(string);
matchRegex(string1);

//task2: match all digits in a string.
function matchDigits(string) {
  let regex = /[0-9]/g;
  console.log(string.match(regex));
}

let string2 = "11223344556677Test String";
matchDigits(string2);
