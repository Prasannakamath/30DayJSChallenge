//task9: regex to match simple password
function validatePassword(password) {
  let rules =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[\w\d!@#$%^&*()]{8,}/;
  //(?=.*[pattern]) is used for checking a pattern anywhere in the word/string.
  let match = password.match(rules);
  console.log(match);
  if (match) {
    return true;
  } else {
    return false;
  }
}

let pass = "Abc123@1";
console.log(`password: ${pass} is valid? ${validatePassword(pass)}`);
