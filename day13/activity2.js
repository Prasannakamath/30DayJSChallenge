//task3: Create a module that exports multiple functions using named exports.
//Import and use these functions.
import * as math from "./module2.js";
console.log(math);
let a = 3;
let b = 4;
for (let [key, value] of Object.entries(math)) {
  console.log(`${key}(${a},${b})`);
  console.log(value(a, b));
}

//task4: create a module that exports single function as default export.
//import the module and invoke the function.
import df from "./defaultModule.js";
df();
