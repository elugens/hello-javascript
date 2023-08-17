---
title: Priority Queue
description: Venture into the organized realm of Priority Queue Data Structures. Discover how they manage elements based on intrinsic priority, ensuring orderly data retrieval. Grasp their role in path-finding algorithms, scheduling systems, and tasks that demand structured precedence in data processing.
sidebar_position: 16
sidebar_label: Priority Queue
tags:
 - Priority Queue
 - Data Structures
 - Data Retrieval
 - Path-finding Algorithms
 - Scheduling Systems
 - Data Precedence
 - Binary Heaps
keywords:
 - Priority Queue
 - Data Structures
 - Data Retrieval
 - Path-finding Algorithms
 - Scheduling Systems
 - Data Precedence
 - Binary Heaps
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Priority Queues Unfolded: Orchestrating Data with Precision</title>
</head>

**Data Structures: Priority Queue Data Structure**

## The Definition of a Priority Queue

A priority queue is a specialized data structure that stores elements based on their associated priority values. It is designed to provide efficient access to the highest (or lowest, depending on the implementation) priority element. In essence, it's a queue where not only the data but also its "priority" matters. When elements are fetched from a priority queue, they are retrieved in order of their priority, not the order in which they were added to the queue.

---

<AdSense />

---

## Instructions for Creating a Priority Queue

Here's a step-by-step guide to creating a Priority Queue

**Priority Queue Creation Instructions**

1. **Define Priority Queue Structure**:
    - Create a class called `PriorityQueue`.
    - Initialize an empty array called `items` within the class. This array will store the elements of the priority queue.

2. **Define Node Structure**:
    - Create a nested class or separate class named `QueueElement`. This will represent the elements in our priority queue.
    - The class `QueueElement` should have two properties: `element` (to store the actual data) and `priority` (to store the priority of the element).

3. **Add Methods to the PriorityQueue**:

    1. **enqueue(element, priority)**:
        - This method adds an element to the priority queue based on its priority.
        - Create a new `QueueElement` using the provided `element` and `priority`.
        - If the queue is empty, insert the new element at the end.
        - Otherwise, iterate through the queue. Compare the priorities of the elements in the queue with the priority of the new element:
            - If the priority of the new element is higher (or lower, based on your specific implementation) than an element in the queue, insert it before that element.
            - If no such position is found, append it at the end.

    2. **dequeue()**:
        - This method removes and returns the element with the highest (or lowest, based on your implementation) priority.
        - If the queue is empty, return `null` or throw an exception.
        - Otherwise, remove the first element of the queue and return it.

    3. **peek()**:
        - This method returns the element with the highest (or lowest) priority without removing it from the queue.
        - If the queue is empty, return `null` or throw an exception.
        - Otherwise, return the first element of the queue without removing it.

    4. **isEmpty()**:
        - Return `true` if the queue is empty; otherwise, return `false`.

    5. **size()**:
        - Return the number of elements in the queue.

4. **Implement Additional Utility Methods (Optional)**:
    - Depending on your needs, you might want to add other methods, such as a `clear()` method to remove all elements, or a `contains(element)` method to check if an element exists in the queue.

Remember, a priority queue can be implemented in different ways (e.g., with arrays, linked lists, or binary heaps). The above instructions describe a basic implementation using arrays, which might not be the most efficient for all use cases, but it gives you a clear understanding of the structure. For more advanced applications, especially where performance is critical, binary heaps are commonly used to implement priority queues.

### Code Example

Here's a JavaScript example of a Priority Queue based on the instructions:

```javascript
class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = new QueueElement(element, priority);
        
        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            let added = false;

            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {  // Assuming smaller values have higher priority
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.items.push(queueElement);
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift().element;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0].element;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Usage
const pq = new PriorityQueue();

pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);  // Task 2 has higher priority and should be dequeued first
pq.enqueue("Task 3", 3);

console.log(pq.dequeue());  // Outputs: Task 2
console.log(pq.dequeue());  // Outputs: Task 1
console.log(pq.dequeue());  // Outputs: Task 3
```

---

:::note
This is a basic implementation using arrays, as described in the instructions. It's important to note that for larger datasets or frequent operations, using a binary heap can make the priority queue operations more efficient.
:::

---

### Complexity

A heap is a specialized tree-based data structure that satisfies the heap property. It's primarily used as a priority queue. There are two main types of heaps: a max-heap and a min-heap. A max-heap ensures that the parent nodes have a value greater than or equal to their children, while a min-heap ensures the opposite.

Here's a table for the time and space complexities for common operations on a Heap:

| Operation          | Time Complexity    | Space Complexity |
|--------------------|--------------------|------------------|
| Insertion          | O(log n)           | O(n)             |
| Deletion (max or min)| O(log n)         | O(n)             |
| Peeking (max or min)| O(1)              | O(1)             |
| Heapify            | O(n)               | O(1)             |
| Increase/Decrease key | O(log n)       | O(1)             |
| Merge              | O(n + m)          | O(n + m)         |

Notes:

1. **Insertion**: When inserting into a heap, the worst-case scenario is that we have to traverse from the leaf to the root to maintain the heap property, which takes \( O(\log n) \) time.

2. **Deletion (max or min)**: Removing the maximum element (in a max-heap) or minimum element (in a min-heap) also takes \( O(\log n) \) because we might need to restructure the heap to maintain the heap property.

3. **Peeking (max or min)**: Since the max (in a max-heap) or min (in a min-heap) is always at the root, peeking at this element is a constant-time operation.

4. **Heapify**: Converting an unordered list into a heap. In practice, it's \( O(n) \), even though one might initially think it'd be \( O(n \log n) \) due to the nature of the tree structure and how the operation works.

5. **Increase/Decrease key**: Changing the value of a key can potentially alter the structure of the heap, hence it's \( O(\log n) \).

6. **Merge**: Combining two heaps into one. The time complexity here is \( O(n + m) \), where \( n \) and \( m \) are the sizes of the two heaps.

7. **Space Complexity**: Space is primarily determined by the number of elements, \( n \), in the heap.

Remember, these complexities can vary slightly based on the exact implementation of the heap and the nature of the operations being executed.
