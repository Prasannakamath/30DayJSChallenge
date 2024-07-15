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

//task5: derive grades from A to F based on scores provided and log the result to console.
function deriveGrade(score) {
  switch (true) {
    case score >= 80 && score <= 100:
      return "A";
    case score >= 60 && score < 80:
      return "B";
    case score >= 40 && score < 60:
      return "C";
    case score >= 20 && score < 40:
      return "D";
    case score < 20:
      return "F";
    default:
      return "X";
  }
}
let score = 199;
let grade = deriveGrade(score);
if (grade !== "X") {
  console.log(`Grade derived for score of ${score} is ${grade}`);
} else {
  console.log(`Grade cannot be derived for the given score of ${score}`);
}
