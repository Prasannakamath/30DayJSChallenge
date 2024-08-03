//task5: Implement Queue class with methods enqueue, dequeue and front.
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.back = 0;
  }
  enqueue(data) {
    this.queue.push(data);
    this.back++;
  }
  dequeue() {
    if (this.back <= this.front) return "Queue is empty";
    this.back--;
    return this.queue.shift();
  }
  showFront() {
    return this.queue[this.front];
  }
}

let Q = new Queue();
Q.enqueue(3);
Q.enqueue(6);
Q.enqueue(7);
console.log(Q.showFront());
console.log(Q.dequeue());
console.log(Q.showFront());
Q.enqueue(8);
Q.dequeue();
console.log(Q.showFront());
console.log(Q);
