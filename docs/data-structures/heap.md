---
title: Heap
description: Dive deep into the hierarchical world of Heap Data Structures. Uncover their tree-based representation, ensuring efficient data prioritization through max-heaps and min-heaps. Delve into their pivotal role in algorithms like heap sort and for constructing priority queues, and understand the mechanics behind heapification.
sidebar_position: 15
sidebar_label: Heap
tags:
 - Heap
 - Data Structures
 - Max-Heap
 - Min-Heap
 - Data Prioritization
 - Heap Sort
 - Priority Queues
 - Heapification
keywords:
 - Heap
 - Data Structures
 - Max-Heap
 - Min-Heap
 - Data Prioritization
 - Heap Sort
 - Priority Queues
 - Heapification
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Heaps Demystified: Prioritizing Data with Elegance</title>
</head>

**Data Structures: Heap Data Structure**

## The Definition of a Heap

A heap is a specialized tree-based data structure that satisfies the heap property. Here we'll discuss the creation of a binary heap, which is either a:

- **Max heap**: For any given node I, the value of I is greater than or equal to the values of its children.
- **Min heap**: For any given node I, the value of I is less than or equal to the values of its children.

---

<AdSense />

---

### Instructions for Creating a Binary Heap

1. **Choose Type**:
   - Decide whether you want to implement a max heap or a min heap.

2. **Data Storage**:
   - Use a dynamic array (like a JavaScript array or a Python list) to store the heap elements. The root begins at the zero index.
   - For any given node at position `i`, its:
     - Left Child will be at position `2*i + 1`
     - Right Child will be at position `2*i + 2`
     - Parent Node will be at position `(i-1)/2` (using integer division)

3. **Insertion (Heapify Up)**:
   - Add the new element to the end of the array.
   - Compare the added element with its parent. If they are in the wrong order (based on whether it's a max heap or min heap), swap them.
   - Repeat the above step until the heap property is restored.

4. **Deletion (Heapify Down)**:
   - For removing the root: Swap the root with the last item in the array and then remove the last item (which is now the previous root).
   - Compare the root with its children. If they are in the wrong order, swap the root with one of its children (for max heap, the larger child; for min heap, the smaller child).
   - Repeat the above step for the swapped child node until the heap property is restored.

5. **Peek Operation**:
   - Return the element at the zero index (the root) without removing it. This operation allows the user to see the smallest (in min heap) or largest (in max heap) value without deleting it.

6. **Check Size**:
   - Return the length or size of the underlying array to check how many elements are in the heap.

7. **Check If Empty**:
   - Return whether the underlying array is empty.

8. **Utility Functions**:
   - Implement helper functions if necessary, like `getParentIndex`, `getLeftChildIndex`, `getRightChildIndex`, `hasParent`, `hasLeftChild`, `hasRightChild`, etc. These help keep your primary heap operations clean and readable.

9. **Balancing the Heap**:
   - If you're dealing with a large set of data, it might be efficient to create a function to balance or rebuild the heap from an unsorted array.

10. **Testing**:

- Make sure to test the operations to ensure the heap property is maintained after each insertion or deletion.

### Summary

1. Decide the heap type (max or min).
2. Use a dynamic array for storage and understand the relationship between parents and children.
3. Implement insertion (heapify up).
4. Implement deletion of the root (heapify down).
5. Implement operations to peek, check size, and check if the heap is empty.
6. Use utility functions for cleaner code.
7. Optionally create a function to balance or rebuild the heap.
8. Thoroughly test all operations to ensure correctness.

### Code Example #1

***Let's create a basic `MinHeap` in JavaScript:***

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }

    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }

    parent(i) {
        return this.heap[this.getParentIndex(i)];
    }

    leftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }

    rightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    peek() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        return this.heap[0];
    }

    poll() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        let item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.hasParent(index) &&
            this.parent(index) > this.heap[index]
        ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }

            index = smallerChildIndex;
        }
    }
}

// Usage:
const heap = new MinHeap();
heap.add(10);
heap.add(5);
heap.add(2);
heap.add(15);

console.log(heap.peek());  // Outputs: 2
console.log(heap.poll());  // Outputs: 2 (and removes it from the heap)
console.log(heap.peek());  // Outputs: 5
```

This code implements a basic MinHeap where the smallest element is always at the root. The `add` method inserts an element while ensuring the heap property, and the `poll` method retrieves (and removes) the smallest element. The `peek` method lets you see the smallest element without removing it.

### Code Example #2

***Here's the implementation of a `MaxHeap`:**

```javascript
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }

    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }

    parent(i) {
        return this.heap[this.getParentIndex(i)];
    }

    leftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }

    rightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    peek() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        return this.heap[0];
    }

    poll() {
        if (this.heap.length === 0) throw new Error("Heap is empty");
        let item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            this.hasParent(index) &&
            this.parent(index) < this.heap[index]
        ) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.rightChild(index) > this.leftChild(index)
            ) {
                largerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }

            index = largerChildIndex;
        }
    }
}

// Usage:
const heap = new MaxHeap();
heap.add(10);
heap.add(5);
heap.add(20);
heap.add(15);

console.log(heap.peek());  // Outputs: 20
console.log(heap.poll());  // Outputs: 20 (and removes it from the heap)
console.log(heap.peek());  // Outputs: 15
```

The difference between the `MinHeap` and `MaxHeap` implementations is in the comparison logic within the `heapifyUp` and `heapifyDown` methods. In the `MaxHeap`, we make sure the largest element is always at the root, whereas in the `MinHeap`, the smallest element is at the root.

---

### Complexity

Certainly! A heap is a specialized tree-based data structure that satisfies the heap property. It's primarily used as a priority queue. There are two main types of heaps: a max-heap and a min-heap. A max-heap ensures that the parent nodes have a value greater than or equal to their children, while a min-heap ensures the opposite.

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
