---
title: Disjoint Set
description: Dive into the intricacies of Disjoint Set Data Structures. Grasp the essence of union and find operations, and their role in partitioning sets. Learn how these structures efficiently manage and track disjoint subsets in algorithmic applications.
sidebar_position: 9
sidebar_label: Disjoint Set
tags:
 - Disjoint Set
 - Data Structures
 - Union-Find Operations
 - Set Partitioning
 - Algorithm Efficiency
 - Subset Management
 - Computer Science Foundations
keywords:
 - Disjoint Set
 - Data Structures
 - Union-Find Operations
 - Set Partitioning
 - Algorithm Efficiency
 - Subset Management
 - Computer Science Foundations
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Disjoint Sets Explored: Mastering Union & Find</title>
</head>

**Data Structures: Disjoint Set Data Structure**

## The Definition of a Disjoint Set

A Disjoint Set, also known as Union-Find or Merge-Find Set, is a data structure that keeps track of a partition of a set into disjoint, non-overlapping subsets. It supports two main operations: **union**, which merges two subsets, and **find**, which identifies the subset to which an element belongs.

---

<AdSense />

---

## Instructions for Creating a Disjoint Set

Here's a step-by-step guide to create a Disjoint Set:

### 1. Understand the Concept

- A Disjoint Set is typically used in algorithms that involve grouping or partitioning elements into subsets.
- The classic application is the Kruskal’s algorithm for finding the Minimum Spanning Tree of a graph.

### 2. Define the Disjoint Set Data Structure

Every element will have a representative, which is an item from the same set. For efficiency, it's common to use a tree structure where each node points to its parent, and the root node is the representative of the set.

```javascript
class DisjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, index) => index);
        this.rank = new Array(size).fill(0);
    }
}
```

### 3. Implement the Find Operation

The `find` operation returns the representative of the set to which `x` belongs. With path compression, this operation ensures that each node on the path gets directly connected to the root.

```javascript
// ... Inside DisjointSet class

find(x) {
    if (this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
}
```

### 4. Implement the Union Operation

The `union` operation merges the sets to which `x` and `y` belong. Using union by rank ensures that the tree remains relatively flat, thus improving efficiency.

```javascript
// ... Inside DisjointSet class

union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return;  // They're already in the same set

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
    } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
    }
}
```

### 5. Usage Example

```javascript
const ds = new DisjointSet(5);  // Create a disjoint set with 5 elements: 0, 1, 2, 3, and 4

ds.union(0, 1);  // Merge sets containing 0 and 1
ds.union(2, 3);  // Merge sets containing 2 and 3
console.log(ds.find(1));  // It might return 0, as 0 is the representative of the set {0, 1}
console.log(ds.find(2));  // It might return 2 or 3, depending on internal structuring
ds.union(1, 2);  // Merge sets containing 1 and 2. Now, all elements belong to the same set.
console.log(ds.find(3));  // After the previous union, all elements should have the same representative
```

### 6. Possible Extensions

- **isSameSet(x, y):** A function to check if two elements are in the same set.
- **countDisjointSets:** A function to count the number of disjoint sets.
- Support for adding or removing elements dynamically.

---

:::tip Note
This Disjoint Set implementation uses both union by rank and path compression, ensuring near-constant time operations on average. It's a fundamental structure in various graph algorithms and other applications that involve grouping or partitioning.
:::

---

### Complexity

A Disjoint Set, often referred to as a Union-Find data structure, is used to manage a collection of disjoint sets. The primary operations are `union`, which merges two sets, and `find`, which determines the representative (or leader) of a set for a given element. This data structure is optimized by techniques like "union by rank" and "path compression", which lead to very efficient average time complexities.

Here's a table for the time and space complexities for common operations on a Disjoint Set:

| Operation              | Amortized Time Complexity | Worst-case Time Complexity | Space Complexity |
|------------------------|---------------------------|----------------------------|------------------|
| Union                  | α(n)                      | O(log n)                   | O(n)             |
| Find (with path compression)| α(n)                | O(log n)                   | O(1)             |
| MakeSet                | O(1)                      | O(1)                       | O(1)             |

Notes:

1. **α(n)**: The notation α(n) stands for the inverse Ackermann function. It grows extremely slowly and, for all practical purposes, can be considered almost constant. In real-world scenarios, operations with a complexity of α(n) are very efficient. This complexity is achieved by combining "union by rank" and "path compression" optimizations.

2. **Union**: This operation joins two disjoint sets. Its efficiency is greatly improved when combined with "union by rank".

3. **Find (with path compression)**: This operation retrieves the representative or leader of the set containing the specified element. "Path compression" is an optimization where, during the find operation, the nodes visited are directly attached to the root, thereby flattening the structure.

4. **MakeSet**: This operation creates a new set with a single element.

5. **Space Complexity**: The space complexity is O(n) as each element requires space in the data structure, often represented as nodes in a forest (a collection of trees).

It's essential to recognize that while the worst-case time complexity for union and find operations are O(log n), the average time complexity using the combined optimizations is near constant, making the Disjoint Set data structure incredibly efficient for many applications, such as Kruskal's algorithm for minimum spanning trees.
