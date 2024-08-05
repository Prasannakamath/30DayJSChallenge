//task6: function to count frequency of characters in a string.
function calcFreq(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in freq) {
      freq[str[i]]++;
    } else {
      freq[str[i]] = 1;
    }
  }
  return freq;
}

let str = "prasanna";
console.log(calcFreq(str));

//task7: longest substring without repeating characters.
function longSubStr(str) {
  let freq = {};
  let substring = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] in freq) {
      continue;
    } else {
      freq[str[i]] = 1;
      substring += str[i];
    }
  }
  return substring;
}

let str1 = "abcabcbb";
console.log(longSubStr(str1));
