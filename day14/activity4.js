//task7: Add getter method to class Person to return full name.
//create an instance of class and log fullname using getter method.
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
const p1 = new Person("ALice", "Gupta");
console.log(p1.getFullName());

//task8: Add a setter method to Person class to update martialStatus property.
//update the martial status using setter and log same to console.
Person.prototype.setMartialStatus = function (martialStatus) {
  this.martialStatus = martialStatus;
};

Person.prototype.getMartialStatus = function () {
  return this.martialStatus;
};

p1.setMartialStatus("unmarried");
console.log(p1.getMartialStatus());
