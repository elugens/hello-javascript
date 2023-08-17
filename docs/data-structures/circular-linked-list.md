---
title: Circular Linked List
description: Step into the realm of Circular Linked List Data Structures. Delve into their unique structure, benefits over linear linked lists, and their practical uses in algorithms. Witness how they facilitate endless and efficient data cycling.
sidebar_position: 6
sidebar_label: Circular Linked List
keywords:
 - Circular Linked List
 - Data Structures
 - Seamless Navigation
 - List Algorithms
 - Data Cycling
 - Computer Science Concepts
 - Linear vs Circular Lists
tags:
 - Circular Linked List
 - Data Structures
 - Seamless Navigation
 - List Algorithms
 - Data Cycling
 - Computer Science Concepts
 - Linear vs Circular Lists
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Circular Linked Lists Explained: Seamless Data Navigation</title>
</head>

**Data Structures: Circular Linked List Data Structure**

## The Definition of a Circular Linked List

A Circular Linked List is similar to a regular linked list, but the last node of the list is connected back to the first node instead of having a `null` reference. This forms a closed loop or circle. It can be both singly and doubly linked, but for this guide, we'll focus on the singly linked version.

---

<AdSense />

---

## Instructions for Creating a Circular Linked List

Here's a step-by-step guide to creating a Circular Linked List:

### 1. Understand the Concept

- A Circular Linked List primarily consists of nodes, where each node has a data element and a reference to the next node.
- The last node's `next` reference points back to the first node.

### 2. Define the Node Structure

Start by defining a simple node structure:

```javascript
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
```

### 3. Define the Circular Linked List Structure

Define the class with a reference to the head node and possibly the tail node for easier insertions.

```javascript
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
```

### 4. Implement the `append` Method

Add an element to the end of the list.

```javascript
// ... Inside CircularLinkedList class

append(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode; // Pointing to itself, as it's the only node
    } else {
        newNode.next = this.tail.next;  // Point to head
        this.tail.next = newNode;
        this.tail = newNode;
    }
}
```

### 5. Implement the `prepend` Method

Add an element to the beginning of the list.

```javascript
// ... Inside CircularLinkedList class

prepend(data) {
    const newNode = new Node(data, this.head);
    this.tail.next = newNode;
    this.head = newNode;
}
```

### 6. Implement the `delete` Method

This method deletes a node based on its value.

```javascript
// ... Inside CircularLinkedList class

delete(data) {
    if (!this.head) return;

    let current = this.head;
    let previous = null;

    while (current.data !== data || previous === null) {
        if (current.next === this.head) break;
        previous = current;
        current = current.next;
    }

    if (current.data === data) {
        if (previous) {
            previous.next = current.next;
            if (this.tail === current) {
                this.tail = previous;
            }
        } else {
            if (this.head.next === this.head) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
        }
    }
}
```

### 7. Implement the `display` Method

This method displays the contents of the list.

```javascript
// ... Inside CircularLinkedList class

display() {
    let nodes = [];
    let current = this.head;
    if (!this.head) return nodes;

    do {
        nodes.push(current.data);
        current = current.next;
    } while (current !== this.head);

    return nodes;
}
```

### 8. Using the Circular Linked List

```javascript
const cll = new CircularLinkedList();

cll.append(1);
cll.append(2);
cll.append(3);
console.log(cll.display());  // [1, 2, 3]

cll.prepend(0);
console.log(cll.display());  // [0, 1, 2, 3]

cll.delete(2);
console.log(cll.display());  // [0, 1, 3]

cll.delete(0);
console.log(cll.display());  // [1, 3]
```

### 9. Possible Extensions

- **find**: Find a node based on its value.
- **insertAfter**: Insert a node after a given node value.
- **length**: Determine the length of the list.

---

:::tip Note
Remember, the key characteristic of a Circular Linked List is that it forms a loop, meaning there's no traditional end to the list. This characteristic can be beneficial in certain use-cases, such as round-robin scheduling or designing algorithms where a cyclic nature is required.
:::

---

### Complexity

A Circular Linked List is a variation of a linked list where the last node of the list points back to the first node instead of having a null reference.

Here's a table for the time and space complexities for common operations on a Circular Linked List:

| Operation                | Time Complexity | Space Complexity           |
|--------------------------|-----------------|----------------------------|
| Insertion (beginning)    | O(1)            | O(1)                       |
| Insertion (end)          | O(n)            | O(1)                       |
| Insertion (middle)       | O(n)            | O(1)                       |
| Deletion (beginning)     | O(1)            | O(1)                       |
| Deletion (end)           | O(n)            | O(1)                       |
| Deletion (middle)        | O(n)            | O(1)                       |
| Search                   | O(n)            | O(1)                       |
| Traverse                 | O(n)            | O(1)                       |

Notes:

1. **Insertion (beginning)**: While inserting at the beginning of a circular linked list, we need to update the next pointer of the last node. But if we maintain a pointer/reference to the last node (common in implementations of circular linked lists), insertion at the beginning can be done in O(1) time.

2. **Insertion (end)**: If we have a reference to the last node, we can insert at the end in O(1) time. Otherwise, it takes O(n) to traverse the list to find the last node.

3. **Insertion (middle) and Deletion (middle)**: For these operations, we might need to traverse the list to find the position, resulting in O(n) time complexity.

4. **Search**: As with most list structures, you need to traverse through potentially all elements to find a match.

5. **Space Complexity**: Most operations on the linked list require creating or deleting nodes but do not require additional space that scales with the size of the list (e.g., no need for a stack or a recursive call). Hence, the space complexity of these operations is constant, O(1).

Keep in mind that the exact complexities can vary based on the specifics of the implementation and any optimizations or additional pointers/references that are maintained.
