---
title: Deque
description: Venture into the versatile world of Deque Data Structures. Understand their unique ability to add or remove from both ends, and their advantages in various algorithms. Explore how Deques offer greater flexibility over traditional queues and stacks.
sidebar_position: 8
sidebar_label: Deque
tags:
 - Deque
 - Data Structures
 - Dual-Ended Operations
 - Flexible Data Handling
 - Algorithm Optimization
 - Advanced Queues
 - Stacks and Queues
keywords:
 - Deque
 - Data Structures
 - Dual-Ended Operations
 - Flexible Data Handling
 - Algorithm Optimization
 - Advanced Queues
 - Stacks and Queues
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Deque Structures Unleashed: Dual-Ended Power</title>
</head>

**Data Structures: Deque Data Structure**

## The Definition of a Deque

A Deque (pronounced "deck"), which stands for "double-ended queue," is a data structure that allows you to add or remove items from both its front and back ends. It can be seen as a hybrid of a stack and a queue.

---

<AdSense />

---

## Instructions for Creating a Deque Data Structure

Here's a step-by-step guide to creating a Deque:

### 1. Understand the Concept

- A Deque supports four primary operations:
  1. `pushFront`: Add an item to the front.
  2. `pushBack`: Add an item to the back.
  3. `popFront`: Remove and return an item from the front.
  4. `popBack`: Remove and return an item from the back.

### 2. Define the Deque Data Structure

For simplicity, we'll use a JavaScript array to back our Deque, but more efficient implementations might use a doubly-linked list or a circular buffer.

```javascript
class Deque {
    constructor() {
        this.items = [];
    }
}
```

### 3. Implement the `pushFront` Method

Add an item to the front of the Deque.

```javascript
// ... Inside Deque class

pushFront(item) {
    this.items.unshift(item);
}
```

### 4. Implement the `pushBack` Method

Add an item to the back of the Deque.

```javascript
// ... Inside Deque class

pushBack(item) {
    this.items.push(item);
}
```

### 5. Implement the `popFront` Method

Remove and return an item from the front. If the Deque is empty, return `null` or a similar sentinel value.

```javascript
// ... Inside Deque class

popFront() {
    if (this.isEmpty()) {
        return null;
    }
    return this.items.shift();
}
```

### 6. Implement the `popBack` Method

Remove and return an item from the back. If the Deque is empty, return `null` or a similar sentinel value.

```javascript
// ... Inside Deque class

popBack() {
    if (this.isEmpty()) {
        return null;
    }
    return this.items.pop();
}
```

### 7. Implement the `isEmpty` Method

Check if the Deque is empty.

```javascript
// ... Inside Deque class

isEmpty() {
    return this.items.length === 0;
}
```

### 8. Implement the `size` Method (Optional)

Retrieve the number of items in the Deque.

```javascript
// ... Inside Deque class

size() {
    return this.items.length;
}
```

### 9. Using the Deque

```javascript
const deque = new Deque();

deque.pushBack(5);
deque.pushFront(3);
deque.pushFront(2);

console.log(deque.popBack());   // 5
console.log(deque.popFront());  // 2
console.log(deque.popFront());  // 3
console.log(deque.popFront());  // null, since the deque is now empty
```

### 10. Possible Extensions

- **peekFront**: View the front item without removing it.
- **peekBack**: View the back item without removing it.
- **clear**: Clear all items from the Deque.
- **toArray**: Convert the Deque to an array.

---

:::tip
Remember, while our implementation utilizes JavaScript's built-in array methods for simplicity, this may not be the most efficient representation. For performance-critical applications, other implementations, such as a doubly-linked list, might be more appropriate.
:::

---

### Complexity

A Deque (pronounced "deck") stands for "Double-Ended Queue." It's a generalized version of the queue data structure that allows insertions and deletions from both ends.

Here's a table for the time and space complexities for common operations on a Deque:

| Operation             | Time Complexity | Space Complexity          |
|-----------------------|-----------------|---------------------------|
| Insert Front          | O(1)            | O(1)                      |
| Insert Rear           | O(1)            | O(1)                      |
| Delete Front          | O(1)            | O(1)                      |
| Delete Rear           | O(1)            | O(1)                      |
| Peek Front            | O(1)            | O(1)                      |
| Peek Rear             | O(1)            | O(1)                      |
| Is Empty              | O(1)            | O(1)                      |
| Size                  | O(1)            | O(1)                      |

Notes:

1. **Insert Front and Insert Rear**: These operations add an element to the front or rear of the deque. The time complexity is constant if the deque is implemented using a doubly-linked list or a dynamic array with amortized constant time resizing.

2. **Delete Front and Delete Rear**: These operations remove an element from the front or rear. For a doubly-linked list implementation, this is O(1). For a dynamic array, deletions at the rear are O(1), but deletions at the front can be O(n) unless special techniques are used to ensure constant time operations.

3. **Peek Front and Peek Rear**: These operations retrieve but do not remove the front or rear element. This is always O(1) for both doubly-linked list and dynamic array implementations.

4. **Is Empty and Size**: Checking if the deque is empty or finding its size is typically O(1), especially if a size counter is maintained.

5. **Space Complexity**: The space used by the deque is determined by the number of elements in it. The operational space complexities are O(1) because operations do not use additional space that scales with the size of the deque (except for occasional resizing operations with dynamic arrays).

It's worth noting that deques can be implemented using various internal data structures like dynamic arrays or doubly-linked lists. The exact time complexities can depend on these internal implementations, but the table above assumes optimal implementations for each operation.
