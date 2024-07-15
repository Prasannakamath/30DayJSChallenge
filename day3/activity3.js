//task4: determine day of the week with numbers 1-7 as input and log the day name in console using switch cases.
function findDayOfTheWeek(dayNum) {
  switch (dayNum) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thrusday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid Number";
  }
}

console.log(findDayOfTheWeek(4));
