---
title: Trie
description: Embark on a voyage through Trie Data Structures, crafted for streamlined string storage and search operations. Comprehend their tree-like formation where each node represents a character, allowing for rapid retrieval and insertion of words. Learn how tries shine in tasks like word lookups, autocorrect features, and digital dictionaries.
sidebar_position: 22
sidebar_label: Trie
tags:
 - Trie
 - Data Structures
 - String Search
 - Word Lookups
 - Tree-like Formation
 - Rapid Retrieval
 - Digital Dictionaries
keywords:
 - Trie
 - Data Structures
 - String Search
 - Word Lookups
 - Tree-like Formation
 - Rapid Retrieval
 - Digital Dictionaries
---

import AdSense from '../../src/components/Adsense/Adsense.js';
import JsonLD from '../../src/components/JsonLD/JsonLD.js';

<!-- May need to add schema and structured data HERE! -->

<head>
  <title>Trie Structures Unearthed: Pioneering Efficient String Searches</title>
</head>

**Data Structures: Trie Data Structure**

---

<AdSense />

---

## The Definition of a Trie

A Trie (pronounced as "try") data structure, often referred to as a prefix tree, is a tree-like data structure that proves very efficient for dictionary lookups and especially for autocomplete features. Here's a step-by-step guide to create a Trie in JavaScript:

### 1. Define the Trie Node

A Trie node will store a character, its children, and a flag to mark if it's the end of a word.

```javascript
class TrieNode {
    constructor(character) {
        this.character = character;
        this.children = {};  // Store children nodes as key-value pairs
        this.isEndOfWord = false;
    }
}
```

### 2. Define the Trie

This structure will consist of the root node and methods to insert, search, and delete words.

```javascript
class Trie {
    constructor() {
        this.root = new TrieNode('*');  // Root node with a placeholder character
    }

    // Insert a word into the trie
    insert(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode(char);
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;  // Word is not present in the trie
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord;
    }

    // Optional: Delete a word from the trie (a bit more complex)
    delete(word) {
        const deleteRecursively = (node, word, index = 0) => {
            if (index === word.length) {
                if (!node.isEndOfWord) return false;
                node.isEndOfWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[index];
            const childNode = node.children[char];
            if (!childNode) return false;

            const shouldDeleteChild = deleteRecursively(childNode, word, index + 1);

            if (shouldDeleteChild) {
                delete node.children[char];
                return Object.keys(node.children).length === 0 && !node.isEndOfWord;
            }

            return false;
        };

        deleteRecursively(this.root, word);
    }
}
```

### 3. Use the Trie

Now, you can create an instance of the Trie and interact with it:

```javascript
const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('banana');

console.log(trie.search('apple'));  // true
console.log(trie.search('appl'));   // false
console.log(trie.search('banana')); // true

trie.delete('apple');
console.log(trie.search('apple'));  // false
console.log(trie.search('app'));    // true
```

### 4. Optional Enhancements

#### a. Autocomplete

You can extend the Trie to support an autocomplete feature that suggests possible word completions based on a given prefix.

#### b. Count Words

Implement a method that counts the number of words stored in the Trie.

#### c. Prefix Count

Implement a method that counts the number of words that have a given prefix.

This provided structure is a basic Trie implementation in JavaScript. Depending on your requirements, you might need to incorporate more methods or optimizations.

---

### Complexity

Of course! A Trie, often called a prefix tree, is a tree-like data structure used primarily for storing a dynamic set of strings. The keys in a Trie are usually associated with strings, where the value of the key is associated with the position in the tree. Here are the time and space complexities for common operations on a Trie:

| Operation             | Time Complexity        | Space Complexity       |
|-----------------------|------------------------|------------------------|
| Insertion             | O(m)                   | O(m)                   |
| Deletion              | O(m)                   | O(1)*                  |
| Search                | O(m)                   | O(1)                   |
| Prefix Search         | O(m)                   | O(1)                   |
| Longest Common Prefix | O(n*m)                 | O(n*m)                 |

Notes:

1. **m** is the length of the string/key being inserted, deleted, or searched for.
2. **n** is the number of keys in the Trie.

- **Insertion**: The time and space complexity for inserting a string into the Trie is linear in terms of the length of the string, \(O(m)\). In the worst case, we might need to insert all characters of the string into the Trie.

- **Deletion**: Deleting a string from the Trie has a time complexity of \(O(m)\). Space complexity is \(O(1)\) because we're typically just changing pointers or marking nodes as non-terminal. However, if we were to implement a more aggressive deletion that removes unused nodes, there could be a space complexity of \(O(m)\) in some cases.

- **Search**: Searching for a string in the Trie is \(O(m)\), where you traverse nodes based on the characters of the string.

- **Prefix Search**: Determining if there's any word in the Trie that starts with a given prefix is also \(O(m)\).

- **Longest Common Prefix**: To determine the longest common prefix among all strings in the Trie, it would be \(O(n*m)\) in the worst case, where you might have to explore all strings and their characters.

- **Space Complexity**: The space complexity of a Trie can be significant because each node might have as many children as there are characters in the alphabet. For instance, for the English alphabet, if using an array-based representation for children, each node can have 26 children (ignoring case). This can lead to a lot of memory usage, especially if the Trie stores a large number of long strings.

*Note: The space complexity of deletion is mentioned as \(O(1)\) because a typical delete operation only involves changing some pointers or boolean values. However, if you physically remove nodes during deletion, the space complexity would be more nuanced.

Remember, the actual time and space complexity can vary based on the implementation details, the nature of the strings stored, and the size of the alphabet.
