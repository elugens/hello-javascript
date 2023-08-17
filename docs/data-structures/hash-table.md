---
title: Hash Table
description: Journey through the world of Hash Table Data Structures. Grasp their exceptional design for dynamic data mapping using unique keys, and the mechanics of hash functions and collision resolution. Learn how hash tables enable rapid data retrieval and insertion, standing as pillars in modern computing.
sidebar_position: 14
sidebar_label: Hash Table
tags:
 - Hash Table
 - Data Structures
 - Dynamic Data Mapping
 - Hash Functions
 - Collision Resolution
 - Rapid Data Retrieval
 - Algorithm Optimization
keywords:
 - Hash Table
 - Data Structures
 - Dynamic Data Mapping
 - Hash Functions
 - Collision Resolution
 - Rapid Data Retrieval
 - Algorithm Optimization
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Hash Tables Decoded: Dynamic Data Mapping Mastery</title>
</head>

**Data Structures: Hash Table Data Structure**

## The Definition of a Hash Table

A hash table (also called a hash map) is a data structure that implements an associative array, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets, from which the desired value can be found.

---

<AdSense />

---

## Instructions for Creating a Hash Table

1. **Initialize the Table**:
    - Decide on an initial size for the table. Typically, this size is a prime number to reduce potential collisions, but the size can vary based on expected data.
    - Create an array (called `buckets`) of this size, filled initially with `null` values or a sentinel value.

2. **Define the Hash Function**:
    - The hash function takes a key and returns an index for the `buckets` array. A common simple method is the modulo operator with the table size: `index = key.hashCode() % tableSize`.
    - The hash function should distribute values uniformly over the array to minimize collisions.

3. **Handle Collisions**:
    - There are several methods to handle collisions, but the two most common are:
      a. **Separate Chaining**: Each array position (bucket) holds another data structure, like a linked list. When there's a collision, the key-value pair is stored in the linked list at the corresponding array position.
      b. **Open Addressing**: When there's a collision, find the next available slot in the array. Various probing methods like linear probing, quadratic probing, or double hashing can be used.

4. **Add Basic Operations**:
    - `put(key, value)`: Computes the index using the hash function and places the key-value pair in the appropriate bucket. If a collision occurs, handle it according to the chosen method.
    - `get(key)`: Computes the index using the hash function, retrieves and returns the value associated with the key. If using separate chaining, it might need to search within the linked list.
    - `delete(key)`: Removes the key-value pair from the hash table.
    - `contains(key)`: Checks if a key is present in the hash table.

5. **Dynamic Resizing**:
    - Over time, as entries are added to the hash table, the load factor (ratio of entries to table size) might grow high, increasing the likelihood of collisions.
    - Implement a mechanism to track the load factor.
    - When the load factor surpasses a certain threshold, typically around 0.7, resize the hash table (usually doubling its size) and rehash all the current entries.

6. **Maintain Auxiliary Data**:
    - Track the number of key-value pairs currently in the table.
    - Track the current capacity or size of the `buckets` array.

7. **Error Handling and Edge Cases**:
    - Handle potential errors, such as trying to retrieve a key that doesn't exist.
    - Implement safeguards against bad input data.

8. **Testing**:
    - Ensure all operations behave as expected.
    - Test edge cases like resizing, handling collisions, and querying for nonexistent keys.

### Summary

1. Initialize the table.
2. Define a suitable hash function.
3. Decide on and implement a collision handling method.
4. Implement basic operations like put, get, delete, and contains.
5. Add dynamic resizing to optimize performance.
6. Keep track of necessary auxiliary data.
7. Handle errors and edge cases.
8. Thoroughly test all implemented features.

### Code Example

Let's create a basic hash table using separate chaining as the collision resolution technique:

```javascript
class HashNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size = 50) {
        this.buckets = new Array(size);
        this.size = size;
    }

    // Basic hash function
    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    put(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = new HashNode(key, value);
        } else {
            let currentNode = this.buckets[index];
            while (currentNode.next && currentNode.key !== key) {
                currentNode = currentNode.next;
            }

            // If key already exists, update the value
            if (currentNode.key === key) {
                currentNode.value = value;
            } else {
                currentNode.next = new HashNode(key, value);
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        let currentNode = this.buckets[index];
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null; // Not found
    }

    delete(key) {
        const index = this.hash(key);
        let currentNode = this.buckets[index];
        let previousNode = null;
        while (currentNode && currentNode.key !== key) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        
        // If the node was found
        if (currentNode) {
            if (previousNode) {
                previousNode.next = currentNode.next;
            } else {
                this.buckets[index] = currentNode.next;
            }
        }
    }

    contains(key) {
        return !!this.get(key);
    }
}

// Usage
const myHashTable = new HashTable();
myHashTable.put('name', 'John');
myHashTable.put('age', 25);
console.log(myHashTable.get('name'));  // Outputs: 'John'
console.log(myHashTable.get('age'));   // Outputs: 25
myHashTable.delete('name');
console.log(myHashTable.get('name'));  // Outputs: null
console.log(myHashTable.contains('age'));  // Outputs: true
```

---

:::tip Note
This hash table is a basic representation and does not include dynamic resizing, which would be crucial for real-world usage.
:::

---

### Complexity

A hash table is a data structure that implements an associative array, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

Here's a table for the time and space complexities for common operations on a Hash Table:

| Operation          | Average Time Complexity | Worst Time Complexity | Space Complexity |
|--------------------|-------------------------|-----------------------|------------------|
| Insertion          | O(1)                    | O(n)                  | O(n)             |
| Deletion           | O(1)                    | O(n)                  | O(n)             |
| Search (by key)    | O(1)                    | O(n)                  | O(n)             |
| Space Used         | -                       | -                     | O(n)             |

Notes:

1. **Average Time Complexity**: This is the expected time when the hash function distributes the keys uniformly among the buckets. This uniform distribution is what gives rise to the constant-time average complexity.

2. **Worst Time Complexity**: This can occur when all keys hash to the same bucket. In the worst-case scenario, a hash table can degenerate to a linked list, and operations can take \( O(n) \) time where \( n \) is the number of keys.

3. **Space Complexity**: Hash tables need to be resized (rehashed) when they grow or shrink. The space complexity depends on the implementation, but generally, space is proportional to \( n \), the number of key-value pairs stored.

4. **Load Factor**: It's worth noting that the efficiency of a hash table is influenced by its load factor. The load factor is the ratio of the number of elements to the table's size. If the load factor grows too large (usually more than 0.7), it's a good idea to resize the table (typically double its size) to maintain the efficiency of operations.

Remember, the true efficiency of a hash table depends on the quality of the hash function, the size of the table, and how collisions are handled (e.g., chaining, open addressing).
