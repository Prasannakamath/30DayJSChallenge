//task5: regex to match area code, central office code and line number from mobile number.
//ex: (123) 456-7890.
function splitMobileNumber(mobNo) {
  let pattern = /^\((\d+)\)\s+(\d+)-(\d+)$/; //grouping with parenthesis ()
  let match = mobNo.match(pattern);
  if (match) {
    return {
      areaCode: match[1],
      centralOfficeCode: match[2],
      lineNumber: match[3],
    };
  }
}
let str = "(123) 4567-8901";
console.log(splitMobileNumber(str));
