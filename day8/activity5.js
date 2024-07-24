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

//task9: create an object with computed property names based on variables.
//log the object to console.
function objectify(key, value) {
  return {
    [key]: value,
  };
}

console.log(objectify("size", 10));
