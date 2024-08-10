//task3: regex to match all words starting with capital letter.
function MatchCapitalCase(string) {
  let regex = /[A-Z]\w*/g;
  console.log(string.match(regex));
}
let string = "Abc Apple uncle Ball bat Ten";
MatchCapitalCase(string);

//task4: match all sequences of one or more digits in a string.
function matchDigitSequences(string) {
  let regex = /\d+/g; //+ --> match atleast one character.
  console.log(string.match(regex));
}
let str = "123 Abc 678 8";
matchDigitSequences(str);
