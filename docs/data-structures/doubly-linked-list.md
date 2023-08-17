---
title: Doubly Linked List
description: Step into the world of Doubly Linked List Data Structures. Understand their two-way node connections, facilitating forward and backward traversals. Discover the advantages of Doubly Linked Lists in data manipulation and their prominence in advanced algorithms.
sidebar_position: 10
sidebar_label: Doubly Linked List
tags:
 - Doubly Linked List
 - Data Structures
 - Bidirectional Traversal
 - Node Connections
 - Data Manipulation
 - Advanced Algorithms
 - List Operations
keywords:
 - Doubly Linked List
 - Data Structures
 - Bidirectional Traversal
 - Node Connections
 - Data Manipulation
 - Advanced Algorithms
 - List Operations
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Doubly Linked Lists Deciphered: Bidirectional Navigation</title>
</head>

**Data Structures: Doubly Linked List Data Structure**

## The Definition of a Doubly Linked List

A doubly-linked list is an extension of the singly-linked list wherein each node contains a value and two references: one to the next node and one to the previous node. This allows for two-way traversal.

---

<AdSense />

---

## Instructions for Creating a Doubly-Linked List

1. **Define the Node Structure**:
    - Each node should have:
      - A value (to store data).
      - A reference to the next node (`next`).
      - A reference to the previous node (`prev`), which is initially set to null.

2. **Initialize the Doubly-Linked List**:
    - The list should have a `head` (reference to the first node) and a `tail` (reference to the last node). Both are initially set to null.
    - A `length` or `size` attribute should be maintained to quickly know the number of nodes in the list. Set this initially to 0.

3. **Add Methods to the Doubly-Linked List**:

    a. **Append (Add to the end)**:
      - If the list is empty, create a new node and set both the head and tail to this new node.
      - If the list is not empty, create a new node, set the `prev` reference of the new node to the current tail, set the `next` reference of the current tail to this new node, and update the tail to this new node.
      - Increment the length.

    b. **Prepend (Add to the beginning)**:
      - Create a new node and set its `next` reference to the current head.
      - If the list is not empty, set the `prev` reference of the current head to this new node.
      - Update the head to the new node.
      - If the list was empty, set the tail to this new node.
      - Increment the length.

    c. **Delete (Remove a node)**:
      - To delete the first node, set the head reference to the next node and update the `prev` reference of the new head to null. If the list becomes empty, also set the tail to null.
      - To delete the last node, set the tail reference to the previous node and update the `next` reference of the new tail to null.
      - For a node in the middle, adjust its previous node's `next` reference and its next node's `prev` reference to bypass the node being deleted.
      - Decrement the length after deletion.

    d. **Search or Lookup**:
      - Given the two-way traversal ability, you can start from either the head or the tail, depending on which is closer to the desired value (optional optimization).
      - Traverse the list and check each node's value against the value you're searching for.

    e. **Traversal**:
      - You can start from either the head and move forward using the `next` reference or from the tail and move backward using the `prev` reference.

4. **Maintain List Integrity**:
    - Always ensure that the head, tail, and length attributes accurately reflect the current state of the list, especially after operations that modify the list.

5. **Test the List Operations**:
    - Ensure all operations behave correctly, testing edge cases like deleting from an empty list or appending to an empty list.

### Summary

1. Define the node structure.
2. Initialize list attributes (head, tail, length).
3. Implement essential list methods (append, prepend, delete, search).
4. Implement bidirectional traversal.
5. Maintain list integrity.
6. Thoroughly test operations.

### Code Example

Here's an implementation of a doubly-linked list in JavaScript:

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
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
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    delete(value) {
        if (!this.head) return;

        let currentNode = this.head;

        // If head needs to be deleted
        if (currentNode.value === value) {
            this.head = currentNode.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
            this.length--;
            return;
        }

        // If any middle node or tail needs to be deleted
        while (currentNode) {
            if (currentNode.value === value) {
                if (currentNode.prev) currentNode.prev.next = currentNode.next;
                if (currentNode.next) currentNode.next.prev = currentNode.prev;
                else this.tail = currentNode.prev;
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
        return null; // if not found
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
const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.delete(20);
list.printList(); // Outputs: [5, 10, 30]
console.log(list.search(10)); // Outputs Node with value 10
```

---

:::note
This is a foundational implementation. Depending on use cases, one might add more methods like inserting at a particular index, reversing the list, etc. The advantage of a doubly-linked list over a singly-linked one is the ability to traverse in both directions, which can be particularly useful in certain algorithms and operations.
:::

---

### Complexity

A Doubly Linked List is a type of linked list in which each node contains a data part and two pointers. One pointer points to the next node in the list, and the other points to the previous node, thus making it "double-linked."

Here's a table for the time and space complexities for common operations on a Doubly Linked List:

| Operation               | Time Complexity | Space Complexity |
|-------------------------|-----------------|------------------|
| Insertion (at beginning) | O(1)            | O(1)             |
| Insertion (at end)       | O(1)            | O(1)             |
| Insertion (in middle)    | O(n)            | O(1)             |
| Deletion (at beginning)  | O(1)            | O(1)             |
| Deletion (at end)        | O(1)            | O(1)             |
| Deletion (in middle)     | O(n)            | O(1)             |
| Search                  | O(n)            | O(1)             |
| Access (by index)        | O(n)            | O(1)             |

Notes:

1. **Insertion (at beginning)**: Since you have a reference to the head of the list, you can insert a new node at the beginning in constant time.

2. **Insertion (at end)**: If you maintain a tail pointer, adding an element to the end is also constant time. Without a tail pointer, it's O(n) as you'd have to traverse the list to find the end.

3. **Insertion (in middle)**: In the worst case, you might have to traverse the list to find the insertion point.

4. **Deletion (at beginning)**: Removing the first element is a constant time operation.

5. **Deletion (at end)**: With a tail pointer and a reference to the previous node in each node (because it's a doubly linked list), you can delete the last node in constant time. Without these, it would take O(n) time to find the penultimate node.

6. **Deletion (in middle)**: You'd generally need to find the node first, which in the worst case requires traversing half the list on average.

7. **Search**: You need to traverse the list to find an element, making it O(n) in the worst case.

8. **Access (by index)**: To access a node by its index, you'd have to traverse the list from the head until you reach the desired position.

9. **Space Complexity**: The space complexity for operations is O(1) because these operations don't use additional space that scales with the size of the list. However, note that the space requirement for the list itself is O(n), where n is the number of nodes.

This structure provides more flexibility than a singly linked list, at the cost of increased memory usage due to the additional previous pointer in each node.
