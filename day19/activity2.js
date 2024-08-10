//task3: regex to match all words starting with capital letter.
function MatchCapitalCase(string) {
  let regex = /[A-Z]\w*/g;
  console.log(string.match(regex));
}
let string = "Abc Apple uncle Ball bat Ten";
MatchCapitalCase(string);
