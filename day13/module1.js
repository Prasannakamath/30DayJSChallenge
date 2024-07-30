//task1: export a function that adds two numbers and returns sum.
export function add(a, b) {
  return a + b;
}

//export Person Object with properties and methods.
export let Person = {
  name: "Prasanna",
  age: 30,
  gender: "male",
  updateAge() {
    ++this.age;
  },
};
