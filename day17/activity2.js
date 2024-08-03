//task3: Implement Stack class with Push, Pop and Peek methods.
class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(data) {
    this.stack.push(data);
    this.top++;
  }
  pop() {
    if (this.top === -1) return "Stack is empty";
    this.top--;
    return this.stack.pop();
  }
  peek() {
    if (this.top === -1) return "Stack is empty";
    return this.stack[this.top];
  }
}

let st = new Stack();
st.push(1);
st.push(3);
console.log(st.peek());
console.log(st.pop());
console.log(st.peek());
console.log(st.pop());
console.log(st.peek());
console.log(st.pop());

//task4: reverse a String using stack.
let str = "Prasanna";
let stac = new Stack();
for (let i = 0; i < str.length; i++) {
  stac.push(str[i]);
}

let reverseString = "";
while (stac.top !== -1) {
  reverseString += stac.pop();
}

console.log(reverseString);
