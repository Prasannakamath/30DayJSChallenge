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

//task6: regex to capture username and domain from email address.
function decodeEmailAdd(email) {
  let pattern = /^([\w.-]+)@([\w.-]{2,})$/;
  let match = email.match(pattern);
  if (match) {
    return {
      username: match[1],
      domain: match[2],
    };
  }
}
let email = "jhon.doe@gmail-test.com";
console.log(decodeEmailAdd(email));
