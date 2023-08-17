---
title: Circular Queue
description: Dive into the dynamic world of Circular Queue Data Structures. Discover their efficient design that prevents data wastage, the mechanics behind circular enqueue and dequeue operations, and their pivotal role in computer algorithms. Learn how Circular Queues streamline data management in cyclic scenarios.
sidebar_position: 7
sidebar_label: Circular Queue
tags:
 - Circular Queue
 - Data Structures
 - Enqueue
 - Dequeue
 - Efficient Data Management
 - Algorithm Design
 - Cyclic Data Operations
keywords:
 - Circular Queue
 - Data Structures
 - Enqueue
 - Dequeue
 - Efficient Data Management
 - Algorithm Design
 - Cyclic Data Operations
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Circular Queues Unfolded: Maximizing Data Utilization</title>
</head>

**Data Structures: Circular Queue Data Structure**

## The Definition of a Circular Queue

A Circular Queue (or Ring Buffer) is a linear data structure that treats its contents as if they are connected end-to-end in a circle. When the end of the queue is reached, the next starting point is the beginning of the queue, hence the "circular" name. This avoids the wastage of space in a regular linear queue implementation using arrays.

---

<AdSense />

---

## Instructions for Creating a Circular Queue

Here's a step-by-step guide to creating a Circular Queue:

### 1. Understand the Concept

- A Circular Queue primarily supports the following operations:
  1. `enqueue`: Add an item to the back of the queue.
  2. `dequeue`: Remove and return an item from the front of the queue.
  3. `peek`: View the front item without removing it.
- It typically requires two pointers: `front` and `rear`.

### 2. Define the Circular Queue Data Structure

Start by defining the initial capacity of the queue, the array to store the elements, and the pointers.

```javascript
class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity + 1;  // Extra space to help in distinguishing between full and empty states
        this.queue = new Array(this.capacity).fill(null);
        this.front = 0;
        this.rear = 0;
    }
}
```

### 3. Implement the `enqueue` Method

```javascript
// ... Inside CircularQueue class

enqueue(item) {
    if (this.isFull()) {
        throw new Error("Queue is full!");
    }
    this.queue[this.rear] = item;
    this.rear = (this.rear + 1) % this.capacity;
}
```

### 4. Implement the `dequeue` Method

```javascript
// ... Inside CircularQueue class

dequeue() {
    if (this.isEmpty()) {
        throw new Error("Queue is empty!");
    }
    const removedItem = this.queue[this.front];
    this.queue[this.front] = null;  // Clear the slot
    this.front = (this.front + 1) % this.capacity;
    return removedItem;
}
```

### 5. Implement the `peek` Method

```javascript
// ... Inside CircularQueue class

peek() {
    if (this.isEmpty()) {
        throw new Error("Queue is empty!");
    }
    return this.queue[this.front];
}
```

### 6. Implement the `isEmpty` and `isFull` Methods

```javascript
// ... Inside CircularQueue class

isEmpty() {
    return this.front === this.rear && this.queue[this.front] === null;
}

isFull() {
    return this.front === this.rear && this.queue[this.front] !== null;
}
```

### 7. Using the Circular Queue

```javascript
const cq = new CircularQueue(3);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);

console.log(cq.dequeue());  // 1
console.log(cq.peek());     // 2

cq.enqueue(4);
console.log(cq.dequeue());  // 2
console.log(cq.dequeue());  // 3
console.log(cq.dequeue());  // 4
// cq.dequeue();           // This will throw an error since the queue is now empty
```

### 8. Possible Extensions

- **resize**: Dynamically resize the queue when it gets full.
- **contains**: Check if an element is in the queue.
- **clear**: Clear all items from the queue.
- **toArray**: Convert the queue to an array.

---

:::tip Note
Remember, the key benefit of a Circular Queue is that it makes efficient use of memory when adding/removing items in scenarios where the queue can become full and then empty again over its lifecycle. This is in contrast to a regular linear queue where, in some implementations, once the queue is full, even after removing items, the space for the initial items is wasted.
:::

---

### Complexity

A Circular Queue (also known as a Ring Buffer) is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end. This structure lends itself easily to buffering data streams.

Here's a table for the time and space complexities for common operations on a Circular Queue:

| Operation      | Time Complexity | Space Complexity          |
|----------------|-----------------|---------------------------|
| Enqueue (Push) | O(1)            | O(1)                      |
| Dequeue (Pop)  | O(1)            | O(1)                      |
| Peek/Front     | O(1)            | O(1)                      |
| Is Empty       | O(1)            | O(1)                      |
| Is Full        | O(1)            | O(1)                      |

Notes:

1. **Enqueue (Push)**: Inserting an element into the circular queue is generally a constant-time operation, especially if you maintain front and rear pointers.

2. **Dequeue (Pop)**: Removing an element is also constant time, as you'll typically adjust the front pointer.

3. **Peek/Front**: Checking the front element (without removing it) is constant time, as it involves just referencing the front pointer.

4. **Is Empty and Is Full**: These operations check whether there's any space left in the queue or if the queue is empty, typically by comparing the front and rear pointers or using an additional size variable.

5. **Space Complexity**: The space used by the circular queue is fixed and defined at the time of its creation. Operational space complexities are O(1) because operations do not use additional space that scales with the size of the queue.

Do remember, the queue can wrap around when it reaches the end of the buffer, which is what gives the Circular Queue its name and behavior. This makes efficient use of memory but also means it has a fixed size; once it's full, no more elements can be added until others are removed.
