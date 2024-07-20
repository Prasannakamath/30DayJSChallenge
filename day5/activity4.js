//task7: Write a function to calculate product of 2 numbers and return the result.
//Provide some default value to 2nd parameter.
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(3));

//task8: write a function to accept person's name and age as input and return greeting message.
//set some default value for age.
function invitePerson(name, age = 18) {
  return `Hi ${name}, OMG you are already ${age} years old.`;
}
console.log(invitePerson("Prasanna", 25));
