---
title: AVL Tree Data Structures
description: Unravel the complexities of AVL Tree Data Structures with our in-depth analysis. Grasp the principles of balancing, rotations, and applications in modern computing. Discover how AVL trees optimize search, insert, and delete operations in binary search trees.
sidebar_position: 2
sidebar_label: AVL Tree
tags:
 - AVL Tree
 - Data Structures
 - Balancing
 - Tree Rotations
 - Binary Search Trees
 - Optimized Search
 - Insert Operations
 - Delete Operations
 - AVL Trees
 - Binary Trees
 - Balanced Trees
 - Computing Concepts
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Understanding AVL Tree Data Structures: A Deep Dive</title>
</head>

**Data Structures: AVL Tree Data Structure**

## The Definition of a AVL Tree

An AVL tree is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.

---

<AdSense />

---

## Creating an AVL tree involves

1. Establishing a structure for the tree node.
2. Defining the AVL tree itself.
3. Implementing rotations to keep the tree balanced.

**Let's break down the steps:**

### 1. Define the Node

A node in the AVL tree contains a key, pointers to its left and right children, and a height value to store the height of the node.

```javascript
class AVLNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;  // Height is initially set to 1 for a new node
    }
}
```

### 2. Define the AVL Tree

This tree will have functions for insertion, deletion, searching, and utilities for balancing.

```javascript
class AVLTree {
    constructor() {
        this.root = null;
    }
    
    // Utility function to get height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }
    
    // Utility function to update height of a node
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    
    // Utility function to get balance factor of a node
    getBalance(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
}
```

### 3. Implement Rotations

For the AVL tree to remain balanced, we need four types of rotations:

- **Right Rotation (RR)**
- **Left Rotation (LL)**
- **Left Right Rotation (LR)**
- **Right Left Rotation (RL)**

```javascript
// ... Inside AVLTree class

// Right rotation
rightRotate(y) {
    const x = y.left;
    const T3 = x.right;

    x.right = y;
    y.left = T3;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;  // new root
}

// Left rotation
leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;  // new root
}
```

### 4. Implement Insertion

Insertion in an AVL tree follows similar logic to a regular binary search tree (BST), but after every insertion, we need to check for balance and perform necessary rotations.

```javascript
// ... Inside AVLTree class

insert(root, key) {
    if (!root) {
        return new AVLNode(key);
    }

    if (key < root.key) {
        root.left = this.insert(root.left, key);
    } else if (key > root.key) {
        root.right = this.insert(root.right, key);
    } else {
        return root;  // Duplicate keys are not allowed
    }

    this.updateHeight(root);
    
    const balance = this.getBalance(root);

    // Perform rotations if the node becomes unbalanced
    if (balance > 1) {
        if (key < root.left.key) {
            return this.rightRotate(root);
        } else {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
    }

    if (balance < -1) {
        if (key > root.right.key) {
            return this.leftRotate(root);
        } else {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }
    }

    return root;
}

// Wrapper method for insertion
add(key) {
    this.root = this.insert(this.root, key);
}
```

### 5. Implement Deletion (Optional but Important)

Deleting a node from an AVL tree involves deleting as in a BST followed by rotations to ensure the tree remains balanced.

### 6. Additional Utilities

You might want to implement utilities for searching, in-order traversal, pre-order traversal, etc.

---

:::warning note
The provided structure gives you a basic overview of AVL tree creation in JavaScript. Note that certain complexities arise during node deletion and handling different cases for rotations. Depending on your application and needs, you may need to expand on this foundation.
:::

---

### Complexity

AVL Trees are a type of self-balancing binary search tree, and the balancing ensures that the tree remains approximately balanced, resulting in logarithmic time complexities for most operations. Here's a table for the time and space complexities of common operations in an AVL Tree:

| Operation       | Average Time Complexity | Worst Case Time Complexity | Space Complexity |
|-----------------|-------------------------|----------------------------|------------------|
| Insertion       | O(log n)                | O(log n)                   | O(log n)         |
| Deletion        | O(log n)                | O(log n)                   | O(log n)         |
| Search          | O(log n)                | O(log n)                   | O(log n)         |
| Minimum/Maximum | O(log n)                | O(log n)                   | O(log n)         |
| Predecessor/Successor | O(log n)          | O(log n)                   | O(log n)         |
| Rotation (balancing) | O(1)               | O(1)                       | O(1)             |

Notes:

1. **Insertion, Deletion, and Search**: The AVL tree maintains its balance through rotations after insertions and deletions, ensuring that the height of the tree remains at most logarithmic in relation to the number of nodes. This gives the logarithmic complexities for these operations.
  
2. **Minimum/Maximum**: The minimum (or maximum) is the leftmost (or rightmost) node, which can be found by following left (or right) child pointers from the root, taking O(log n) time in the worst case.

3. **Predecessor/Successor**: Given a node, finding its predecessor or successor involves either going up the tree or down to the left or right subtree. Again, due to the height constraint, it takes O(log n) in the worst case.

4. **Rotation (balancing)**: AVL Trees use simple rotations (single or double) to re-balance the tree after an insertion or deletion. These rotations are constant time operations as they involve just a few pointer updates.

For **Space Complexity**, each operation requires a stack space proportional to the height of the tree, which is O(log n) in the worst case due to the balancing nature of AVL Trees.
