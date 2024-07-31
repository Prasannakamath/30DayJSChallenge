//task6: use closures to create simple module for managing collection of items.
//implement methods to add, remove and list items.
function logger() {
  let items = [];
  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      items = items.filter((it) => it !== item);
    },
    listItems: function () {
      return items;
    },
  };
}

let todo = logger();
todo.addItem("todo item 1");
todo.addItem("todo item 2");
console.log(todo.listItems());
todo.addItem("todo item 3");
console.log(todo.listItems());
todo.removeItem("todo item 2");
console.log(todo.listItems());
