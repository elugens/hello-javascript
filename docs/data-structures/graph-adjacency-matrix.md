---
title: Graph Adjacency Matrix
description: Step into the structured world of Graph Adjacency Matrix Data Structures. Understand their grid-based representation of graph edges, ease of weight storage, and the immediate accessibility to vertex relationships. Explore the benefits and trade-offs of adjacency matrices in the context of dense graph algorithms.
sidebar_position: 13
sidebar_label: Graph Adjacency Matrix
tags:
 - Graph Adjacency Matrix
 - Data Structures
 - Grid-Based Representation
 - Edge Weight
 - Vertex Relationships
 - Dense Graphs
 - Algorithm Design
keywords:
 - Graph Adjacency Matrix
 - Data Structures
 - Grid-Based Representation
 - Edge Weight
 - Vertex Relationships
 - Dense Graphs
 - Algorithm Design
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Graph Adjacency Matrices: Grid-Based Graph Representation</title>
</head>

**Data Structures: Graph Adjacency Matrix Data Structure**

## The Definition of a Graph Adjacency Matrix

A graph is a collection of nodes (often called vertices) and edges that connect these nodes. An adjacency matrix is a way to represent a graph where the element `M[i][j]` is `1` (or some non-zero value) if there's an edge from node `i` to node `j`, and `0` if there's no such edge. For undirected graphs, the matrix is symmetric, while for directed graphs (digraphs), it is not necessarily symmetric

---

<AdSense />

---

## Instructions Graph Creation (Adjacency Matrix)

Here's a step-by-step guide to creating a Graph using an Adjacency Matrix:

### 1. Understand the Concept

- A graph can be directed or undirected.
- A graph can be weighted (edges have weights) or unweighted (edges do not have distinct weights).
- The adjacency matrix for an unweighted graph contains only `0`s and `1`s.
- For a weighted graph, the matrix contains the weight of the edge, or a sentinel value (often `0` or `Infinity`) if there's no edge.

### 2. Define the Graph Data Structure

Start by defining the number of vertices and initializing the matrix.

```javascript
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.matrix = Array(vertices).fill(null).map(() => Array(vertices).fill(0));
    }
}
```

### 3. Implement the `addEdge` Method

For an unweighted graph:

```javascript
// ... Inside Graph class

addEdge(v1, v2) {
    if (v1 >= this.vertices || v2 >= this.vertices) {
        throw new Error("Vertex out of bounds!");
    }
    this.matrix[v1][v2] = 1; // For directed graph
    // this.matrix[v2][v1] = 1; // Uncomment for undirected graph
}
```

For a weighted graph:

```javascript
// ... Inside Graph class

addEdge(v1, v2, weight) {
    if (v1 >= this.vertices || v2 >= this.vertices) {
        throw new Error("Vertex out of bounds!");
    }
    this.matrix[v1][v2] = weight; // For directed graph
    // this.matrix[v2][v1] = weight; // Uncomment for undirected graph
}
```

### 4. Implement the `removeEdge` Method

```javascript
// ... Inside Graph class

removeEdge(v1, v2) {
    if (v1 >= this.vertices || v2 >= this.vertices) {
        throw new Error("Vertex out of bounds!");
    }
    this.matrix[v1][v2] = 0; // For directed graph
    // this.matrix[v2][v1] = 0; // Uncomment for undirected graph
}
```

### 5. Implement the `hasEdge` Method

Check if there's an edge between two vertices.

```javascript
// ... Inside Graph class

hasEdge(v1, v2) {
    return this.matrix[v1][v2] !== 0;
}
```

### 6. Implement the `display` Method

```javascript
// ... Inside Graph class

display() {
    for (let i = 0; i < this.vertices; i++) {
        let row = [];
        for (let j = 0; j < this.vertices; j++) {
            row.push(this.matrix[i][j]);
        }
        console.log(row.join(' '));
    }
}
```

### 7. Using the Graph

```javascript
const graph = new Graph(3);

graph.addEdge(0, 1);
graph.addEdge(1, 2);

graph.display();
// 0 1 0
// 0 0 1
// 0 0 0

console.log(graph.hasEdge(0, 1));  // true
console.log(graph.hasEdge(1, 0));  // false

graph.removeEdge(0, 1);
console.log(graph.hasEdge(0, 1));  // false
```

### 8. Possible Extensions

- **getVerticesCount**: Get the number of vertices in the graph.
- **getEdgesCount**: Get the number of edges in the graph.
- **getNeighbors**: Get neighboring vertices of a given vertex.

---

:::tip Note
Remember, while adjacency matrices are straightforward and allow for quick edge look-up, they're not memory efficient for sparse graphs (where the number of edges is much less than the number of vertices squared). In such cases, other representations like the adjacency list can be more efficient.
:::

---

### Complexity

An adjacency matrix is a 2D array of size \( V \times V \) where \( V \) is the number of vertices in a graph. The value \( m[i][j] \) is either 1 (or the weight of the edge) if there is an edge between vertices \( i \) and \( j \), or 0 if there isn't.

Here's a table for the time and space complexities for common operations on a Graph represented using an Adjacency Matrix:

| Operation              | Time Complexity | Space Complexity |
|------------------------|-----------------|------------------|
| Add Vertex             | O(V^2)          | O(V^2)           |
| Add Edge               | O(1)            | O(1)             |
| Remove Vertex          | O(V^2)          | O(V^2)           |
| Remove Edge            | O(1)            | O(1)             |
| Query (check if edge exists)| O(1)       | O(1)             |
| Find Neighbors         | O(V)            | O(1)             |
| Find Degree            | O(V)            | O(1)             |

Notes:

1. **V** is the number of vertices in the graph.

2. **Add Vertex**: Adding a vertex requires creating a new matrix of size \( (V+1) \times (V+1) \), copying the old matrix into the new one, and initializing the new rows and columns. This is because matrices are not dynamically resizable like lists.

3. **Add Edge**: Since you're simply updating a cell in the matrix, this is a constant-time operation.

4. **Remove Vertex**: This requires creating a new matrix of size \( (V-1) \times (V-1) \) and copying relevant parts of the old matrix, excluding the row and column of the vertex to be removed.

5. **Remove Edge**: Just update a cell in the matrix to indicate no edge.

6. **Query**: Check the cell \( m[i][j] \) to determine if an edge exists between vertex \( i \) and vertex \( j \).

7. **Find Neighbors**: You would have to scan an entire row (or column) to find the neighbors of a vertex.

8. **Find Degree**: For an undirected graph, the degree of a vertex can be found by counting the number of 1s (or non-zero entries if it's a weighted graph) in the corresponding row (or column).

9. **Space Complexity**: The space required for an adjacency matrix representation is \( O(V^2) \), regardless of the number of edges. This makes the adjacency matrix less space-efficient for sparse graphs (graphs with fewer edges) compared to an adjacency list.

An adjacency matrix representation is usually more suitable for dense graphs or graphs where the edge existence check needs to be very fast. However, if the graph is sparse, an adjacency list representation may be more space-efficient.
