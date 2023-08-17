---
title: Fenwick Tree
description: Delve into the realm of Fenwick Tree Data Structures, often known as Binary Indexed Trees. Understand their unique design for efficient cumulative frequency tables and their prowess in prefix sum calculations. Explore how Fenwick Trees optimize range query and update operations in computational algorithms.
sidebar_position: 11
sidebar_label: Fenwick Tree
tags:
 - Fenwick Tree
 - Binary Indexed Tree
 - Data Structures
 - Cumulative Frequency
 - Prefix Sum
 - Range Query
 - Algorithm Efficiency
keywords:
 - Fenwick Tree
 - Binary Indexed Tree
 - Data Structures
 - Cumulative Frequency
 - Prefix Sum
 - Range Query
 - Algorithm Efficiency
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Fenwick Trees Illuminated: Cumulative Data Mastery</title>
</head>

**Data Structures: Fenwick Tree Data Structure**

## The Definition of a Fenwick Tree

The Fenwick Tree (also known as a Binary Indexed Tree or BIT) is a data structure that provides efficient methods for querying prefix sums and updating individual elements in an array. Its primary operations are point update and prefix sum query, both of which can be done in O(log n) time.

---

<AdSense />

---

## Instructions for Creating a Fenwick Tree

Let's delve into the creation process of a Fenwick Tree:

### 1. Understand the Concept

- Fenwick Tree is an array-based data structure where the array's indices are based on binary representation.
- The Fenwick Tree uses the concept of isolating the last set bit of an index in binary representation to structure its hierarchical relationships.

### 2. Initialize the Fenwick Tree

The Fenwick Tree is often represented as a one-based indexed array, with the size being equal to the input array length plus one.

```javascript
class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }
}
```

### 3. Implement the LSB (Lowest Set Bit) Method

The Fenwick Tree heavily depends on the operation of extracting the lowest set bit from a number.

```javascript
// ... Inside FenwickTree class

lsb(x) {
    return x & (-x);
}
```

### 4. Point Update

Increment a value at a specific index.

```javascript
// ... Inside FenwickTree class

update(index, value) {
    while (index <= this.size) {
        this.tree[index] += value;
        index += this.lsb(index);
    }
}
```

### 5. Prefix Sum Query

Compute the prefix sum up to a specific index.

```javascript
// ... Inside FenwickTree class

prefixSum(index) {
    let sum = 0;
    while (index > 0) {
        sum += this.tree[index];
        index -= this.lsb(index);
    }
    return sum;
}
```

### 6. Range Sum Query (Optional)

Using prefix sums, you can easily compute the sum over a specific range [l, r].

```javascript
// ... Inside FenwickTree class

rangeSum(l, r) {
    return this.prefixSum(r) - this.prefixSum(l - 1);
}
```

### 7. Build the Fenwick Tree

If you want to initialize the Fenwick Tree with a given array of numbers, iterate over the array and perform point updates for each element.

```javascript
// ... Inside FenwickTree class

buildFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        this.update(i + 1, arr[i]);
    }
}
```

### 8. Using the Fenwick Tree

```javascript
const arr = [1, 3, 5, 7, 9, 11];
const ft = new FenwickTree(arr.length);
ft.buildFromArray(arr);

console.log(ft.prefixSum(3));  // 9 (1 + 3 + 5)
console.log(ft.rangeSum(2, 4));  // 15 (3 + 5 + 7)
ft.update(2, 2);  // Increment value at index 2 by 2
console.log(ft.rangeSum(2, 4));  // 17 (5 + 5 + 7)
```

---

:::tip Note
This gives you a basic Fenwick Tree implementation in JavaScript. The Fenwick Tree is a simple yet powerful tool to efficiently handle cumulative frequency tables and can be extended for other applications like finding the cumulative product or handling range updates.
:::

---

### Complexity

A Fenwick Tree, also known as a Binary Indexed Tree (BIT), is a data structure that provides efficient methods for querying prefix sums and updating values in an array. It's particularly useful for cumulative frequency tables.

Here's a table for the time and space complexities for common operations on a Fenwick Tree:

| Operation          | Time Complexity | Space Complexity |
|--------------------|-----------------|------------------|
| Prefix Sum Query   | O(log n)        | O(1)             |
| Update             | O(log n)        | O(1)             |
| Range Sum Query    | O(log n)        | O(1)             |
| Construct          | O(n log n)      | O(n)             |

Notes:

1. **Prefix Sum Query**: This operation retrieves the sum of the first \( k \) elements, and it requires traversing the tree upward, making it logarithmic in complexity.

2. **Update**: When you want to add a value to an element in the original array, you also need to update the Fenwick Tree. This operation updates the necessary nodes in the tree, and its complexity is logarithmic.

3. **Range Sum Query**: To get the sum of a range, you can utilize two prefix sum queries. For a range \([i, j]\), the range sum is the difference between the prefix sum up to \( j \) and the prefix sum up to \( i - 1 \).

4. **Construct**: If you want to build the Fenwick Tree from an array, each of the \( n \) elements might cause an update to up to \( log n \) other elements in the tree.

5. **Space Complexity**: The space complexity of the operations is O(1), but the Fenwick Tree itself requires O(n) space for storing.

The Fenwick Tree is a useful data structure for scenarios where the underlying data is updated infrequently, or the update-query ratio is balanced. For situations with heavy updates and minimal queries, simpler data structures might be more effective.
