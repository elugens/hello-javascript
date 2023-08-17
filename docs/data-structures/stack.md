---
title: Stack
description: Journey into the structured realm of Stack Data Structures. Grasp the Last-In-First-Out (LIFO) principle intrinsic to stacks, allowing for efficient data access and manipulation. Discover stacks' indispensable role in algorithms, programming paradigms, and scenarios necessitating reverse chronological data operations.
sidebar_position: 21
sidebar_label: Stack
tags:
 - Stack
 - Data Structures
 - LIFO
 - Data Access
 - Data Manipulation
 - Programming Paradigms
 - Reverse Chronological
keywords:
 - Stack
 - Data Structures
 - LIFO
 - Data Access
 - Data Manipulation
 - Programming Paradigms
 - Reverse Chronological
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Stacks Unveiled: Harnessing Last-In-First-Out Dynamics</title>
</head>

**Data Structures: Stack Data Structure**

---

<AdSense />

---

## The Definition of a Stack

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. That means the last element added to the stack will be the first element removed from it. The two primary operations associated with a stack are `push` (to add an item to the top) and `pop` (to remove the top item).

### Instructions for Creating a Stack Data Structure

1. **Initialization**:
   - Create an empty list (or array) to store the elements of the stack.
   - Optionally, define a maximum size for the stack if you want it to be of a fixed size.

2. **Push Operation**:
   - Check if the stack is full (if you've defined a maximum size). If it's full, return an error or a message indicating that the stack is overflowing.
   - If the stack isn't full, add the new element to the top (the end of the list or array).

3. **Pop Operation**:
   - Check if the stack is empty. If it is, return an error or a message indicating that the stack is underflowing.
   - If the stack isn't empty, remove the top element (the last element of the list or array) and return it.

4. **Peek or Top Operation** (optional but commonly used):
   - Without removing it, return the top element of the stack. Return an error or message if the stack is empty.

5. **Size or Length Operation** (optional but useful):
   - Return the number of elements currently in the stack.

6. **isEmpty Operation** (optional but useful):
   - Return `true` if the stack has no elements, and `false` otherwise.

7. **isFull Operation** (useful if you've defined a maximum size):
   - Return `true` if the number of elements in the stack is equal to its maximum size, and `false` otherwise.

### Summary

1. Initialize an empty list or array.
2. Implement the `push` operation to add elements to the top of the stack.
3. Implement the `pop` operation to remove and return the top element.
4. Optionally, implement `peek` to see the top element without removal.
5. Optionally, add helper operations like `size`, `isEmpty`, and `isFull`.

By following these instructions, you can create a simple stack data structure.

### Code Example

Here's a simple implementation of a stack data structure using JavaScript:

```javascript
class Stack {
    constructor(maxSize = Infinity) {
        this.stack = [];
        this.maxSize = maxSize;
    }

    // Push an item onto the stack
    push(item) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(item);
        } else {
            console.error("Stack overflow: Maximum size reached!");
        }
    }

    // Pop an item off the stack
    pop() {
        if (!this.isEmpty()) {
            return this.stack.pop();
        } else {
            console.error("Stack underflow: No elements to pop!");
        }
    }

    // Peek the top item without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1];
        } else {
            console.error("Stack is empty: No elements to peek!");
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Return the current size of the stack
    size() {
        return this.stack.length;
    }

    // Check if the stack is full
    isFull() {
        return this.stack.length === this.maxSize;
    }
}

// Usage example
const stack = new Stack(5);  // Stack with a max size of 5
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());   // Outputs: 3
console.log(stack.pop());    // Outputs: 3
console.log(stack.size());   // Outputs: 2
```

---

:::tip Note
This example demonstrates a basic stack implementation using an array (`this.stack`). The `push`, `pop`, `peek`, `isEmpty`, `size`, and `isFull` methods provide the basic functionality of the stack. The `maxSize` argument in the constructor allows you to create a stack with a maximum size; if you don't specify a size, the stack can grow indefinitely (or until you run out of memory).
:::

---

### Complexity

A Stack is a linear data structure that follows the Last In First Out (LIFO) principle, meaning the last element added is the first to be removed. Here are the time and space complexities for common operations on a Stack:

| Operation     | Time Complexity | Space Complexity |
|---------------|-----------------|------------------|
| Push          | O(1)            | O(1)             |
| Pop           | O(1)            | O(1)             |
| Top/Peek      | O(1)            | O(1)             |
| Search        | O(n)            | O(1)             |
| Is Empty      | O(1)            | O(1)             |
| Size          | O(1)            | O(1)             |

Notes:

1. **Push**: Adding an element to the top of the stack takes constant time, \(O(1)\).

2. **Pop**: Removing the top element from the stack also takes constant time, \(O(1)\).

3. **Top/Peek**: Viewing the top element of the stack without removing it takes constant time, \(O(1)\).

4. **Search**: To determine whether an element is present in the stack and its distance from the top, in the worst case, you may have to traverse the whole stack, resulting in \(O(n)\) time complexity.

5. **Is Empty**: Checking if the stack is empty can be done in constant time, \(O(1)\), by checking if the top pointer/reference is null or by checking the current size of the stack if maintained.

6. **Size**: If the size is maintained with a counter variable updated on every push/pop, it can be returned in \(O(1)\). If not maintained, then it would require \(O(n)\) to count by traversing the stack.

7. **Space Complexity**: Each of the above operations uses a constant amount of additional space, hence \(O(1)\) space complexity. However, the space required for the entire stack is proportional to the number of elements \(n\).

The above complexities are based on the typical implementation of a stack using an array or linked list. Depending on the underlying data structure or any optimizations applied, some nuances might apply.
