//task7: check if given year is a leapyear, condition: divisible by 4 but not 100,
//if divisible by 100 then it also should be divisible by 400

function isLeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

let year = 1900;
console.log(`is ${year} a leap year? : ${isLeapYear(year)}`);
