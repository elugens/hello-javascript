import React from 'react';
import Link from '@docusaurus/Link';
import styles from './datastructures.module.css';

const GetDataStructureCats = () => {
  return (
    <div className={styles.mainContent}>
      <p>
        In the vast landscape of computer science, data structures stand as the
        foundational building blocks shaping the digital realm. They not only
        organize and store data but also provide mechanisms to access and manage
        it efficiently. From the unseen algorithms that power your favorite apps
        to the complex systems running global networks, data structures are the
        unsung heroes behind the curtain. Whether you're a budding programmer, a
        seasoned developer, or simply a curious mind, our comprehensive guide
        will take you on a journey through the intricacies of stacks, queues,
        trees, graphs, and beyond. Dive in to uncover the art and science of
        data organization, and discover how mastering data structures can
        elevate your coding prowess to new heights!
      </p>
      <div className={styles.mainCategories}>
        <ul className={styles.mainCategoryGroup}>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/array-data-structure'
              className={styles.mainCategoryLink}
            >
              Arrays
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/avl-tree'
              className={styles.mainCategoryLink}
            >
              AVL Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/binary-search-tree'
              className={styles.mainCategoryLink}
            >
              Binary Search Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/binary-tree'
              className={styles.mainCategoryLink}
            >
              Binary Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/bloom-filter'
              className={styles.mainCategoryLink}
            >
              Bloom Filter
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/circular-linked-list'
              className={styles.mainCategoryLink}
            >
              Circular Linked List
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/circular-queue'
              className={styles.mainCategoryLink}
            >
              Circular Queue
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/deque'
              className={styles.mainCategoryLink}
            >
              Deque Structure
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/disjoint-set'
              className={styles.mainCategoryLink}
            >
              Disjoint Set
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/doubly-linked-list'
              className={styles.mainCategoryLink}
            >
              Doubly Linked List
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/fenwick-tree'
              className={styles.mainCategoryLink}
            >
              Fenwick Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/graph-adjacency-list'
              className={styles.mainCategoryLink}
            >
              Graph Adjacency List
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/graph-adjacency-matrix'
              className={styles.mainCategoryLink}
            >
              Graph Adjacency Matrix
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/hash-table'
              className={styles.mainCategoryLink}
            >
              Hash Table
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/heap'
              className={styles.mainCategoryLink}
            >
              Heap Structures
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/priority-queue'
              className={styles.mainCategoryLink}
            >
              Priority Queue
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/queue'
              className={styles.mainCategoryLink}
            >
              Queue Structure
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/red-black-tree'
              className={styles.mainCategoryLink}
            >
              Red-Black Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/segment-tree'
              className={styles.mainCategoryLink}
            >
              Segment Tree
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/singly-linked-list'
              className={styles.mainCategoryLink}
            >
              Singly Linked List
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/stack'
              className={styles.mainCategoryLink}
            >
              Stack Structure
            </Link>
          </li>
          <li className={styles.mainCategoryItem}>
            <Link
              to='/docs/data-structures/trie'
              className={styles.mainCategoryLink}
            >
              Trie Structure
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetDataStructureCats;
