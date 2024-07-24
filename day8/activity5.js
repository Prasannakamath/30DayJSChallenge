//task8: use enhanced object literals to create object with methods and properties.
//log the object to console.
let name = "Prasanna";
let age = 27;
let gender = "male";
function updateAge(age) {
  this.age = age;
}

let Person = { name, age, gender, updateAge };
Person.updateAge(30);
console.log(Person);
