//task7: Implement Binary tree class
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertElement(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      let searchNode = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            searchNode(node.left);
          }
        } else {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            searchNode(node.right);
          }
        }
      };
      return searchNode(node);
    }
  }

  //find minimum
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let level = 0;
    let current = this.root;
    let side = null;
    if (data === current.data) {
      side = "root";
      return { level, side };
    } else {
      while (current !== null || current.data !== data) {
        if (data < current.data) {
          level++;
          side = "left";
          current = current.left;
        } else if (data > current.data) {
          level++;
          side = "right";
          current = current.right;
        } else if (data === current.data) {
          return { level, side };
        }
      }
    }
  }
  inorderTraversal() {
    const root = this.root;
    const traverse = function (node) {
      if (node !== null) {
        traverse(node.left);
        console.log(node.data);
        traverse(node.right);
      }
    };
    traverse(root);
  }
}

let bst = new BinaryTree();
bst.insertElement(4);
bst.insertElement(6);
bst.insertElement(8);
bst.insertElement(7);
bst.insertElement(5);
bst.insertElement(9);
console.log(JSON.stringify(bst));
// console.log(bst.find(10));
bst.inorderTraversal();
