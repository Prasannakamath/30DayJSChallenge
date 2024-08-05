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
