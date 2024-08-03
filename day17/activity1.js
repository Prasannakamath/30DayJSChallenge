//task1: create a Node class that represent node of a linkedlist.
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//task2: create a linkedlist class to add, remove elements from end of linkedlist.
//also write a function to display all nodes of linkedlist.
class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //add elements to end of ll.
  insertLast(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data);
    this.size++;
  }

  //remove elements from end of ll.
  removeLast() {
    if (this.head === null) return "LL is empty";
    if (this.size === 1) {
      this.head = null;
      this.size--;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    console.log(`item removed from LL is ${JSON.stringify(current)}`);
    this.size--;
  }

  //display all elements of ll.
  printLL() {
    if (this.head === null) {
      console.log("No items in LL");
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let ll = new linkedlist();
ll.insertLast(29);
ll.insertLast(30);
ll.insertLast(38);
ll.printLL();
ll.removeLast();
ll.printLL();
