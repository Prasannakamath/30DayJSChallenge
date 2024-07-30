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
