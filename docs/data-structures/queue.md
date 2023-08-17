---
title: Queue
description: Immerse yourself in the sequential world of Queue Data Structures. Understand their First-In-First-Out (FIFO) nature, facilitating organized data processing. Dive into their foundational role in various algorithms, system operations, and tasks that require ordered execution and data management.
sidebar_position: 17
sidebar_label: Queue
tags:
 - Queue
 - Data Structures
 - FIFO
 - Sequential Data
 - Ordered Execution
 - Data Management
 - System Operations
keywords:
 - Queue
 - Data Structures
 - FIFO
 - Sequential Data
 - Ordered Execution
 - Data Management
 - System Operations
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Queues Explained: Sequential Data Handling Essentials</title>
</head>

**Data Structures: Queue Data Structure**

## The Definition of a Queue

A queue is a linear data structure that follows the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first element to be removed. The two main operations for a queue are `enqueue` (to add an item to the end of the queue) and `dequeue` (to remove the item from the front).

---

<AdSense />

---

## Instructions for Creating a Queue Data Structure

1. **Initialization**:
   - Create an empty list (or array) to store the elements of the queue.
   - Optionally, you can define a maximum size for the queue if you want it to have a fixed size.

2. **Enqueue Operation**:
   - Check if the queue is full (if you've set a maximum size). If it's full, return an error or a message indicating that the queue is overflowing.
   - If the queue isn't full, add the new element to the end of the list or array.

3. **Dequeue Operation**:
   - Check if the queue is empty. If it is, return an error or a message indicating that the queue is underflowing.
   - If the queue isn't empty, remove the front element (typically the first element of the list or array) and return it.

4. **Peek or Front Operation** (optional but commonly used):
   - Without removing it, return the front element of the queue. If the queue is empty, return an error or message.

5. **Size or Length Operation** (optional but useful):
   - Return the number of elements currently in the queue.

6. **isEmpty Operation** (optional but useful):
   - Return `true` if the queue has no elements, and `false` otherwise.

7. **isFull Operation** (useful if you've defined a maximum size):
   - Return `true` if the number of elements in the queue is equal to its maximum size, and `false` otherwise.

### Summary

1. Initialize an empty list or array.
2. Implement the `enqueue` operation to add elements to the end of the queue.
3. Implement the `dequeue` operation to remove and return the front element.
4. Optionally, implement `peek` to see the front element without removal.
5. Optionally, add helper operations like `size`, `isEmpty`, and `isFull`.

By following these instructions, you can create a basic queue data structure.

### Code Example

Here's a simple implementation of a queue data structure using JavaScript:

```javascript
class Queue {
    constructor(maxSize = Infinity) {
        this.queue = [];
        this.maxSize = maxSize;
    }

    // Add an item to the end of the queue
    enqueue(item) {
        if (this.queue.length < this.maxSize) {
            this.queue.push(item);
        } else {
            console.error("Queue overflow: Maximum size reached!");
        }
    }

    // Remove and return the front item from the queue
    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift();
        } else {
            console.error("Queue underflow: No elements to dequeue!");
        }
    }

    // Peek the front item without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.queue[0];
        } else {
            console.error("Queue is empty: No elements to peek!");
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Return the current size of the queue
    size() {
        return this.queue.length;
    }

    // Check if the queue is full
    isFull() {
        return this.queue.length === this.maxSize;
    }
}

// Usage example
const queue = new Queue(5);  // Queue with a max size of 5
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());    // Outputs: 1
console.log(queue.dequeue()); // Outputs: 1
console.log(queue.size());    // Outputs: 2
```

---

In this example, we've used an array (`this.queue`) for the underlying data structure to store the elements. The `enqueue`, `dequeue`, `peek`, `isEmpty`, `size`, and `isFull` methods handle the primary operations and checks associated with the queue. The `maxSize` parameter in the constructor allows you to specify a maximum size for the queue. If it's not provided, the queue can grow indefinitely (or until you run out of memory).

---

### Complexity

A Queue is an abstract data type that follows the First In, First Out (FIFO) principle. The most common implementations for a queue are arrays and linked lists. Here, I'll provide the time and space complexities for a queue implemented using a linked list:

| Operation             | Time Complexity    | Space Complexity |
|-----------------------|--------------------|------------------|
| Enqueue (Insertion)   | O(1)               | O(n)             |
| Dequeue (Removal)     | O(1)               | O(n)             |
| Peek (Front element)  | O(1)               | O(1)             |
| IsEmpty               | O(1)               | O(1)             |
| Search                | O(n)               | O(1)             |

Notes:

1. **Enqueue (Insertion)**: In a linked list implementation, if we maintain a pointer to the tail of the list, adding an element to the end is a constant-time operation.

2. **Dequeue (Removal)**: Removing the front element is a constant-time operation, especially if we have a head pointer pointing to the front of the queue.

3. **Peek (Front element)**: Viewing the front element without removal is a constant-time operation with a head pointer.

4. **IsEmpty**: Checking if the queue is empty (i.e., if the head is `null` or not) is a constant-time operation.

5. **Search**: To find an element in the queue, we would have to traverse it, leading to a worst-case time complexity of \( O(n) \).

6. **Space Complexity**: Space is primarily determined by the number of elements, \( n \), in the queue.

If implemented using an array, the complexities can remain the same for most operations. However, special care might be needed to ensure efficient use of space and handling of the array's end (e.g., using circular arrays).
