// task2: Create a module that exports multiple functions using named exports.
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function pow(a, b) {
  return a ** b;
}

function mod(a, b) {
  return a % b;
}

export { add, sub, mul, div, pow, mod };
