---
title: Graph Adjacency List
description: Embark on an exploration of Graph Adjacency List Data Structures. Dive into their compact representation of vertex connections, optimized space efficiency, and dynamic nature. Uncover the advantages of adjacency lists in handling sparse graphs and their foundational role in graph algorithms.
sidebar_position: 12
sidebar_label: Graph Adjacency List
tags:
 - Graph Adjacency List
 - Data Structures
 - Vertex Connectivity
 - Sparse Graphs
 - Space Efficiency
 - Graph Algorithms
 - Dynamic Data Representation
keywords:
 - Graph Adjacency List
 - Data Structures
 - Vertex Connectivity
 - Sparse Graphs
 - Space Efficiency
 - Graph Algorithms
 - Dynamic Data Representation
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Graph Adjacency Lists Unveiled: Efficient Vertex Connectivity</title>
</head>

**Data Structures: Graph Adjacency List Data Structure**

## The Definition of a Graph Adjacency List

Creating a graph data structure involves defining the graph's representation, its nodes (or vertices), and its edges (or links). There are multiple ways to represent a graph, such as an adjacency matrix, adjacency list, or edge list. For this example, we'll use an adjacency list, which is one of the most common representations due to its space efficiency for sparse graphs.

---

<AdSense />

---

## Instructions Graph Creation (Adjacency List)

### 1. **Define Vertex Structure**

- Typically, a vertex or node will have properties like:
  - `id` or `value`: A unique identifier or value for the vertex.
  - `edges` or `neighbors`: A list of adjacent vertices or edges.

### 2. **Define Graph Structure**

- The graph can have properties like:
  - `vertices`: A list or dictionary of all vertices in the graph.
  - `directed`: A boolean indicating whether the graph is directed or undirected.

### 3. **Initialization**

- Initialize the graph, perhaps allowing for specification of whether the graph should be directed.

### 4. **Vertex Addition**

- Add a method to add a vertex to the graph. This involves:
  - Creating a new vertex.
  - Adding the vertex to the graph's `vertices` list or dictionary.

### 5. **Edge Addition**

- Add a method to add an edge between two vertices. This involves:
  - Locating the two vertices by their IDs or values.
  - Adding each vertex to the other's `edges` or `neighbors` list.
  - For directed graphs, only add the target vertex to the source vertex's neighbor list.

### 6. **Vertex and Edge Removal**

- Add methods to remove vertices and edges.
  - For vertex removal: Remove the vertex and also remove any edges in other vertices that reference it.
  - For edge removal: Remove the target vertex from the source vertex's neighbor list. If undirected, also remove the source vertex from the target vertex's neighbor list.

### 7. **Graph Traversal** (Optional but useful)

- Implement common traversal methods like:
  - Depth First Search (DFS)
  - Breadth First Search (BFS)

### 8. **Utility Methods** (Optional)

- `getVertex`: Retrieve a vertex by its ID or value.
- `getVertices`: Retrieve all vertices in the graph.
- `getEdges`: Retrieve all edges in the graph.

---

### Code Example

```javascript
class Graph {
    constructor(directed = false) {
        this.vertices = {};
        this.directed = directed;
    }

    addVertex(value) {
        if (!this.vertices[value]) {
            this.vertices[value] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.vertices[v1] && this.vertices[v2]) {
            this.vertices[v1].push(v2);
            if (!this.directed) {
                this.vertices[v2].push(v1);
            }
        }
    }

    removeEdge(v1, v2) {
        this.vertices[v1] = (this.vertices[v1] || []).filter(vertex => vertex !== v2);
        if (!this.directed) {
            this.vertices[v2] = (this.vertices[v2] || []).filter(vertex => vertex !== v1);
        }
    }

    removeVertex(value) {
        delete this.vertices[value];
        for (const vertex in this.vertices) {
            this.vertices[vertex] = this.vertices[vertex].filter(v => v !== value);
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
```

---

:::tip Note
This is a basic graph representation. Depending on the use-case, you might want to expand the graph class with additional methods, error handling, or other representations like weighted edges.
:::

---

### Complexity

The adjacency list is one of the common representations of a graph. It represents the graph as a list (or an array) of vertices, and for each vertex, a list of its neighboring vertices is stored.

Here's a table for the time and space complexities for common operations on a Graph represented using an Adjacency List:

| Operation              | Time Complexity         | Space Complexity |
|------------------------|-------------------------|------------------|
| Add Vertex             | O(1)                    | O(V + E)         |
| Add Edge               | O(1)                    | O(V + E)         |
| Remove Vertex          | O(V + E)                | O(V + E)         |
| Remove Edge            | O(E)                    | O(V + E)         |
| Query (check if edge exists)| O(degree(v))       | O(1)             |
| Find Neighbors         | O(degree(v))            | O(1)             |
| Find Degree            | O(1) or O(degree(v))    | O(1)             |

Notes:

1. **V** is the number of vertices, and **E** is the number of edges in the graph.

2. **Add Vertex**: This operation is usually constant time since you're just adding an entry to the adjacency list.

3. **Add Edge**: This is constant time if the adjacency list is implemented using a data structure that supports constant-time inserts (e.g., linked list, dynamic array, etc.).

4. **Remove Vertex**: This operation requires removing the vertex and all associated edges, which can be O(V + E) in the worst case.

5. **Remove Edge**: Depending on the specific implementation of the adjacency list, this could be O(E) in the worst case if you have to search for the edge to remove.

6. **Query**: This depends on the degree of vertex \( v \) (i.e., the number of edges connected to \( v \)). In the worst case, you may have to check all edges of \( v \).

7. **Find Neighbors**: Directly read off from the adjacency list for vertex \( v \). The time it takes is proportional to the degree of \( v \).

8. **Find Degree**: If the adjacency list is implemented using data structures with a size or length property (like arrays or linked lists), finding the degree can be O(1). Otherwise, you might have to iterate through the list of neighbors, making it O(degree(v)).

9. **Space Complexity**: The space required for an adjacency list representation is O(V + E), where V is the number of vertices and E is the number of edges. This representation is space-efficient for sparse graphs (graphs with fewer edges).

It's also worth noting that an adjacency matrix, another common representation of a graph, has different time and space complexities. The choice between adjacency list and adjacency matrix depends on the graph's density and the operations you need to optimize.
