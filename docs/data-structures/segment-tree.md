---
title: Segment Tree
description: Step into the world of Segment Tree Data Structures, pivotal for handling range-based queries and updates. Explore their hierarchical nature, ensuring efficient data segmentation for cumulative information retrieval. Unveil their significance in various computational scenarios where segmented data analysis is paramount.
sidebar_position: 19
sidebar_label: Segment Tree
tags:
 - Segment Tree
 - Data Structures
 - Range Queries
 - Data Segmentation
 - Information Retrieval
 - Hierarchical Structures
 - Computational Analysis
keywords:
 - Segment Tree
 - Data Structures
 - Range Queries
 - Data Segmentation
 - Information Retrieval
 - Hierarchical Structures
 - Computational Analysis
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Segment Trees Decoded: Mastering Range Queries & Updates</title>
</head>

**Data Structures: Segment Tree Data Structure**

## The Definition of a Segment Tree

The Segment Tree is a data structure used mainly for range queries and point updates. It can be used to find aggregate information (like sum, minimum, maximum) over a range of elements, while also being able to update individual elements.

---

<AdSense />

---

## Instructions for Creating a Segment Tree

Here's a step-by-step guide to create a Segment Tree:

### 1. Understanding the Structure

- A Segment Tree is a binary tree.
- Each node stores aggregate information for a segment/range of the array.
- The root node represents the entire array.
- For any given node that represents the range `[l, r]`:
  - Its left child represents the range `[l, (l+r)/2]`.
  - Its right child represents the range `[(l+r)/2 + 1, r]`.

### 2. Define the Segment Tree

You can represent a Segment Tree using an array. If the input array has `n` elements, the size of the Segment Tree array can be up to `4*n`.

```javascript
class SegmentTree {
    constructor(arr, func, identity) {
        this.arr = arr;
        this.func = func;  // Aggregation function (e.g., Math.min or Math.max)
        this.identity = identity;  // Identity for the aggregation function (e.g., Infinity for Math.min)
        this.tree = new Array(4 * arr.length).fill(this.identity);
        this.build(0, arr.length - 1, 0);
    }
}
```

### 3. Build the Segment Tree

This is a recursive process. Start from the root, and break the range into two halves until you reach individual elements of the array.

```javascript
// ... Inside SegmentTree class

build(l, r, pos) {
    if (l === r) {
        this.tree[pos] = this.arr[l];
        return;
    }

    const mid = Math.floor((l + r) / 2);
    this.build(l, mid, 2 * pos + 1);  // left child
    this.build(mid + 1, r, 2 * pos + 2);  // right child
    
    this.tree[pos] = this.func(this.tree[2 * pos + 1], this.tree[2 * pos + 2]);
}
```

### 4. Query the Segment Tree

To find aggregate information over a range `[ql, qr]`.

```javascript
// ... Inside SegmentTree class

query(ql, qr, l = 0, r = this.arr.length - 1, pos = 0) {
    if (ql <= l && qr >= r) {  // Segment is completely inside the range
        return this.tree[pos];
    }
    if (qr < l || ql > r) {  // Segment is completely outside the range
        return this.identity;
    }

    const mid = Math.floor((l + r) / 2);
    return this.func(
        this.query(ql, qr, l, mid, 2 * pos + 1),
        this.query(ql, qr, mid + 1, r, 2 * pos + 2)
    );
}
```

### 5. Update the Segment Tree

To update an element at a specific index.

```javascript
// ... Inside SegmentTree class

update(index, value, l = 0, r = this.arr.length - 1, pos = 0) {
    if (l === r) {
        this.arr[index] = value;
        this.tree[pos] = value;
        return;
    }

    const mid = Math.floor((l + r) / 2);
    if (index <= mid) {
        this.update(index, value, l, mid, 2 * pos + 1);
    } else {
        this.update(index, value, mid + 1, r, 2 * pos + 2);
    }

    this.tree[pos] = this.func(this.tree[2 * pos + 1], this.tree[2 * pos + 2]);
}
```

### 6. Using the Segment Tree

```javascript
const arr = [1, 3, 5, 7, 9, 11];
const tree = new SegmentTree(arr, (a, b) => a + b, 0);  // Sum Segment Tree

console.log(tree.query(1, 3));  // 15 (3 + 5 + 7)
tree.update(1, 4);  // Update index 1 to value 4
console.log(tree.query(1, 3));  // 16 (4 + 5 + 7)
```

---

:::tip Note
This gives you a basic Segment Tree implementation in JavaScript. Depending on your needs and the operations you intend to support, you might need to make adjustments or enhancements to this structure.
:::

---

### Complexity

A Segment Tree is a data structure used for various range query problems, like finding the sum, minimum, or maximum of numbers in a range, and it allows for updating elements in logarithmic time.

Here are the time and space complexities for common operations on a Segment Tree:

| Operation          | Time Complexity    | Space Complexity |
|--------------------|--------------------|------------------|
| Build              | O(n)               | O(n)             |
| Range Query (e.g., sum, min, max) | O(log n) | O(1)  |
| Update (point update) | O(log n)       | O(1)             |
| Range Update       | O(log n)           | O(1)             |

Notes:

1. **Build**: Constructing the segment tree from an array of \( n \) elements takes \( O(n) \) time. This is because each leaf node corresponds to an element in the array, and each internal node stores the result (e.g., sum, min, max) of its children.

2. **Range Query**: For operations like sum, minimum, or maximum of a range, the query takes \( O(\log n) \) time, where \( n \) is the number of elements in the array. The logarithmic time arises because we might need to traverse from root to leaf in the worst case.

3. **Update (point update)**: Changing the value of a specific element (or a point) in the array requires us to update the segment tree nodes on the path from the leaf to the root, which takes \( O(\log n) \) time.

4. **Range Update**: Updating a range of values (for instance, adding a value to all elements in a range) also takes \( O(\log n) \) time, similar to the point update.

5. **Space Complexity**: A segment tree requires \( O(n) \) space. Even though the tree has \( 2n \) nodes for \( n \) leaves (in the worst case), the constant factors are often dropped in Big O notation, resulting in \( O(n) \) space complexity.

The Segment Tree is particularly useful when there's a mix of both queries and updates. If there were only queries with no updates, simpler data structures or methods (like prefix sums) might suffice. But for a combination of dynamic updates and range queries, Segment Trees are highly effective.
