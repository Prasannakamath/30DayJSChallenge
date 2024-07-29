//task4: Create a custom error class that extends built-in error class.
//throw an instance of this custom error in a function.
//handle it using try-catch block.
class customError extends Error {
  //node constructor name is constructor.
  constructor(message) {
    super(message); //calling construction of parent(Error class)
    this.name = "customError";
  }
}
try {
  throw new customError("this Error is thrown from custom class");
} catch (err) {
  console.log(err.message);
}
