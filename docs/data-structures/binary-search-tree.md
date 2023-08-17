---
title: Binary Search Tree
description: Journey through the foundational concepts of Binary Search Tree Data Structures. Understand the mechanics behind node insertion, traversal, and search operations. Delve into its efficiency, applications, and the role it plays in modern computational algorithms.
sidebar_position: 3
sidebar_label: Binary Search Tree
keywords:
 - Binary Search Tree
 - Data Structures
 - Node Traversal
 - Tree Algorithms
 - Computational Efficiency
 - Binary Trees
 - Search Operations
tags:
 - Binary Search Tree
 - Data Structures
 - Node Traversal
 - Tree Algorithms
 - Computational Efficiency
 - Binary Trees
 - Search Operations
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Binary Search Tree Essentials: An In-Depth Exploration</title>
</head>

**Data Structures: Binary Search Tree Data Structure**

## The Definition of a Binary Search Tree

A Binary Search Tree (BST) is a binary tree in which each node contains only one value and has two child nodes, where:

- The value in the left child node is less than the value in the parent node.
- The value in the right child node is greater than the value in the parent node.

---

<AdSense />

---

## Binary Search Tree Creation Instructions

1. **Define Node Structure**:
    - Create a class called `Node` that will represent an individual node in the BST.
    - This class should have three properties:
      - `value`: to store the value of the node.
      - `left`: to store a reference to the left child node.
      - `right`: to store a reference to the right child node.

2. **Define Binary Search Tree Structure**:
    - Create a class called `BinarySearchTree`.
    - Initialize a property `root` within the class set to `null`. This will represent the root node of the BST.

3. **Add Methods to the BinarySearchTree**:

    1. **insert(value)**:
        - This method adds a new value to the BST.
        - Create a new `Node` with the given value.
        - If the BST is empty (i.e., `root` is `null`), assign this new node to the `root`.
        - Otherwise, use a private helper method, typically called `_insertNode(root, newNode)`, to find the correct location to insert the new node.

    2. **search(value)**:
        - This method checks if a value exists in the BST.
        - If the BST is empty, return `false`.
        - Otherwise, use a private helper method, typically called `_searchNode(root, value)`, to check if the value exists.

    3. **remove(value)**:
        - This method removes a value from the BST.
        - If the BST is empty, return `null` or a message indicating the value doesn't exist.
        - Use a private helper method, typically called `_removeNode(root, value)`, to locate the node and remove it.

    4. **inOrderTraversal(callback)**:
        - This method traverses the BST in in-order fashion (left, root, right) and applies a callback function on each node.
        - Use a private helper method, typically called `_inOrderTraversal(node, callback)`, to perform the traversal.

    5. **preOrderTraversal(callback)**, **postOrderTraversal(callback)**:
        - Similarly, add methods for pre-order (root, left, right) and post-order (left, right, root) traversals.

    6. **findMinNode()** and **findMaxNode()**:
        - These methods return the nodes with the minimum and maximum values, respectively.

4. **Consider Adding Additional Utility Methods (Optional)**:
    - Depending on your needs, you might add methods to find the height of the tree, find the depth of a particular node, check if the BST is balanced, etc.

5. **Remember BST Properties**:
    - Ensure that the BST properties are maintained throughout. When inserting, the value should go to the left if it's less than the current node and to the right if it's greater.

6. **Balancing (Advanced)**:
    - A vanilla BST can become skewed or unbalanced, which can deteriorate its performance. Advanced versions like AVL trees or Red-Black trees can automatically balance themselves.

By following these instructions, you can create a basic Binary Search Tree in a structured and organized manner.

### Code Example

Here's a simple implementation of a Binary Search Tree (BST) in JavaScript:

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            return this._searchNode(node.right, value);
        } else {
            return true;  // value is equal to node.value
        }
    }

    // Additional methods like remove, inOrderTraversal, etc., can be added

    // For demonstration, let's add inOrderTraversal:
    inOrderTraversal(callback) {
        this._inOrderTraversal(this.root, callback);
    }

    _inOrderTraversal(node, callback) {
        if (node !== null) {
            this._inOrderTraversal(node.left, callback);
            callback(node.value);
            this._inOrderTraversal(node.right, callback);
        }
    }
}

// Usage:
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(4);
bst.insert(7);
bst.insert(9);

console.log(bst.search(4));  // true
console.log(bst.search(10)); // false

bst.inOrderTraversal(value => console.log(value)); // 1, 3, 4, 5, 7, 8, 9
```

---

:::tip Note
This is a basic implementation and doesn't include all BST functionalities. It serves as a foundation upon which other functionalities (like `remove`, `findMinNode`, etc.) can be added.
:::

---

### Complexity

Here's a table that outlines the time and space complexities for common operations performed on a basic Binary Search Tree (BST). It's worth noting that these complexities can vary depending on the balance of the tree:

| Operation            | Average Time Complexity | Worst Case Time Complexity | Space Complexity |
|----------------------|-------------------------|----------------------------|------------------|
| Insertion            | O(log n)                | O(n)                       | O(log n)         |
| Deletion             | O(log n)                | O(n)                       | O(log n)         |
| Search               | O(log n)                | O(n)                       | O(log n)         |
| Minimum/Maximum      | O(log n)                | O(n)                       | O(log n)         |
| Predecessor/Successor| O(log n)                | O(n)                       | O(log n)         |

Notes:

1. **Insertion, Deletion, and Search**: For a balanced BST (e.g., AVL, Red-Black Tree), the time complexities for these operations are O(log n). However, for an unbalanced BST (e.g., when items are inserted in sorted order), these operations can degrade to O(n).

2. **Minimum/Maximum**: For a balanced tree, finding the minimum or maximum takes O(log n) since it involves traversing down the height of the tree. In an unbalanced tree, this operation could take O(n) in the worst case.

3. **Predecessor/Successor**: Similar to the above, finding the predecessor or successor in a balanced BST is O(log n) on average. In the worst case (unbalanced tree), it can take O(n).

For **Space Complexity**, each operation, especially those involving recursion or a call stack (like search or insertion), will take up space proportional to the height of the tree. In a balanced BST, this is O(log n). In an unbalanced tree, it can be O(n).

It's essential to understand that these complexities, especially the worst-case scenarios, highlight the importance of keeping a BST balanced. Self-balancing trees like AVL or Red-Black Trees address this by ensuring the tree remains approximately balanced after every insert or delete operation.
