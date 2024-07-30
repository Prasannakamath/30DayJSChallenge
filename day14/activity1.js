//task1: create a class named Person with properties name, age and method to return greeting message.
//create instance of the class and call the method.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const prasanna = new Person("Prasanna", 26);
prasanna.greet();
