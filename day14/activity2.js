//task3: define a class Student that extends Person class.
//Add a property studentId and method that returns studentId.
//create instance of Student class and log the student Id.
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    console.log(`Hello ${this.name}, welcome to LPU.`);
  }
}
class Student extends Person {
  #code = 1110;
  constructor(name, age, gender) {
    super(name, age, gender);
    this.studentId = this.#generateStudentId();
  }
  #generateStudentId() {
    return ++this.#code;
  }
}

const student1 = new Student("Prasanna", 26, "male");
console.log(student1.studentId);
