//task7: regex to match a word only if its at the beginning of the string.
function matchWordAtBegining(str) {
  let regex = /^(\w+)/g;
  let match = str.match(regex);
  return match;
}
let str = "1First word of string";
console.log(matchWordAtBegining(str));

//task8: regex to match a word only if its at end of string.
function matchWordAtEnd(str) {
  let regex1 = /(\w+)$/g;
  let match = str.match(regex1);
  return match;
}
console.log(matchWordAtEnd(str));
