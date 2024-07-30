//task5: add a static method to Person class that generates generic greeting message.
//call this static method without creating instance of class and log the message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static greet() {
    console.log(`Hello new user, welcome to LPU`);
  }
}
Person.greet();

//task6: Add static property to student class to keep track of number of students added.
//increment this property in constructor and log total number of students.
class Student extends Person {
  static count = 0;
  constructor(name, age) {
    super(name, age);
    Student.count++;
  }
  static totalAdmittedStudents() {
    return this.count;
  }
}
console.log(Student.totalAdmittedStudents());
const stud1 = new Student("Alice", 30);
const stud2 = new Student("Jhon", 12);
console.log(Student.totalAdmittedStudents());
