---
title: Singly Linked List
description: Delve deep into the world of Singly Linked List Data Structures. Understand their inherent simplicity, where each node points to the next, facilitating dynamic memory allocation. Learn how they become the foundation for numerous algorithms, data storage systems, and tasks demanding linear and sequential data management.
sidebar_position: 20
sidebar_label: Singly Linked List
tags:
 - Singly Linked List
 - Data Structures
 - Linear Data
 - Dynamic Memory Allocation
 - Sequential Data Management
 - Node Connections
 - Data Storage
keywords:
 - Singly Linked List
 - Data Structures
 - Linear Data
 - Dynamic Memory Allocation
 - Sequential Data Management
 - Node Connections
 - Data Storage
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Singly Linked Lists Demystified: Navigating Linear Connections</title>
</head>

**Data Structures: Singly Linked List Data Structure**

## The Definition of a Singly Linked List

A singly-linked list is a data structure composed of nodes. Each node contains a value and a reference (link) to the next node in the sequence. Here's a step-by-step guide to create a singly-linked list:

---

<AdSense />

---

## Instructions for Creating a Singly-Linked List

1. **Define the Node Structure**:
    - Each node should have:
      - A value (this can store various data types: integers, strings, objects, etc.)
      - A reference to the next node (initially set to null).

2. **Initialize the Singly-Linked List**:
    - The list itself should have a head (reference to the first node) and often a tail (reference to the last node). Both are initially set to null.
    - A length or size attribute can also be maintained to quickly know the number of nodes. Initially, this is set to 0.

3. **Add Methods to the Singly-Linked List**:

    a. **Append (Add to the end)**:
      - If the list is empty (head is null), create a new node and set both the head and tail to this new node.
      - If the list is not empty, create a new node, set the next reference of the current tail to this new node, and then update the tail reference to this new node.
      - Increment the length or size attribute.

    b. **Prepend (Add to the beginning)**:
      - Create a new node and set its next reference to the current head.
      - Update the head to be this new node.
      - If the list was empty, also set the tail to this new node.
      - Increment the length or size attribute.

    c. **Delete (Remove a node)**:
      - To delete the first node, set the head reference to the next node in the list. If the list becomes empty, also set the tail to null.
      - To delete a node in the middle, you'll need to traverse the list until you find the node just before the one you want to delete. Adjust its next reference to bypass the node you're deleting.
      - Decrement the length or size attribute after deletion.

    d. **Search or Lookup**:
      - Start from the head and traverse the list, checking each node's value against the value you're searching for.

    e. **Traversal**:
      - Begin from the head and move through each node, using the next reference until you reach the end of the list (where the next reference is null).

4. **Additional Methods**:
    - You can add more methods as needed, such as `insertAt(index, value)` to insert a node at a specific position, `reverse()` to reverse the list, etc.

5. **Maintain List Integrity**:
    - Always ensure that the head, tail, and length (or size) attributes are accurate and reflect the current state of the list, especially after operations that modify the list.

6. **Ensure Correctness**:
    - Test your list operations thoroughly. For example, test edge cases like deleting from an empty list or appending to an empty list.

### Summary

1. Define the node structure.
2. Initialize list attributes (head, tail, length/size).
3. Implement essential list methods (append, prepend, delete, search).
4. Maintain list integrity after operations.
5. Test all operations to ensure correct behavior.

### Code Example

Here's a basic implementation of a singly-linked list in JavaScript:

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    delete(value) {
        if (!this.head) return null;

        // If the head node needs to be deleted
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            if (!this.head) this.tail = null; // if the list becomes empty
            return;
        }

        // Start from the head
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                if (!currentNode.next) this.tail = currentNode; // update tail if last node was removed
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }
        return null; // not found
    }

    printList() {
        const values = [];
        let currentNode = this.head;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(values);
    }
}

// Usage
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.delete(20);
list.printList(); // Outputs: [5, 10, 30]
console.log(list.search(10)); // Outputs Node with value 10
```

---

:::tip Note
This is a simple implementation. In a more advanced scenario, you might add error handling, more utility methods, or implement a doubly-linked list to navigate in both directions.
:::

---

### Complexity

Here's a table that outlines the average and worst-case time and space complexities for common operations performed on a singly linked list:

| Operation          | Average Case Time Complexity | Worst Case Time Complexity | Space Complexity |
|--------------------|-----------------------------|----------------------------|------------------|
| Access (by index)  | O(n)                        | O(n)                       | O(1)             |
| Insertion (begin)  | O(1)                        | O(1)                       | O(1)             |
| Insertion (end)    | O(n)                        | O(n)                       | O(1)             |
| Insertion (middle) | O(n)                        | O(n)                       | O(1)             |
| Deletion (begin)   | O(1)                        | O(1)                       | O(1)             |
| Deletion (end)     | O(n)                        | O(n)                       | O(1)             |
| Deletion (middle)  | O(n)                        | O(n)                       | O(1)             |
| Search             | O(n)                        | O(n)                       | O(1)             |

Notes:

1. **Access:** Direct access by index is O(n) because, in the worst case, you might have to traverse the entire list to find the desired node.
2. **Insertion at the beginning:** It's constant time, O(1), as you just change a few pointers.
3. **Insertion at the end:** This requires traversal to the end of the list in the worst-case scenario.
4. **Insertion in the middle:** You might need to traverse the list until you find the correct spot, making it O(n).
5. **Deletion:** Similar reasoning to insertion.
6. **Search:** Requires traversal of the list in the worst case.

The space complexity for these operations is generally O(1) because they often involve rearranging pointers and not typically allocating new significant space (except when adding elements, but that space is for the data, not the operation itself).
