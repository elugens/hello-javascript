---
title: Garbage Collection
sidebar_position: 3
---

# Garbage Collection

**Objects the Basics: Garbage Collection**

<head>
  <title>Garbage Collection - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How does JavaScript manage memory manually or automatically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
</div>
  </div>
</details>

:::note

This automaticity is a potential source of confusion: it can give developers the false impression that they do not need to worry about memory management.

:::

Source: <https://javascript.info/garbage-collection>

### Explain, the three steps of the memory life cycle in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The memory life cycle includes allocating, using, and releasing the allocated memory when it is no longer needed.</div><br />
  <div><strong>Technical Response:</strong> The three steps in the memory life cycle include allocating memory, using the allocated memory, and releasing the allocated memory when it is no longer needed. The last part is more implicit in JavaScript than low-level languages.<br /><br />
  </div>
  </div>
</details>

Code Examples:

```js
var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string
var o = {
  a: 1,

  b: null,
}; // allocates memory for an object and contained values
// (like object) allocates memory for the array and

// contained values

var a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)
// function expressions also allocate an object

someElement.addEventListener(
  'click',
  function () {
    someElement.style.backgroundColor = 'blue';
  },
  false
);

var n = null;
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management>

### What is the main concept of memory management in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main concept of memory management in JavaScript is reachability. Simply put, “reachable” values are those that are accessible or usable somehow are guaranteed to be stored in memory.
</div>
  </div>
</details>

Source: <https://javascript.info/garbage-collection#reachability>

### In relation to JavaScript memory management. What is a GC root?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A “root” is simply an object that the garbage collector assumes is reachable by default, which then has its references traced to find all other current objects that are reachable. Any object that is not reachable through any reference chain of any of the root objects is considered unreachable and will eventually be destroyed by the garbage collector.
</div>
  </div>
</details>

Source: <https://javascript.info/garbage-collection#reachability>

Addition: <https://stackoverflow.com/questions/9748358/when-does-the-js-engine-create-a-garbage-collection-root>

### There is a base set of inherently reachable values, that cannot be deleted for obvious reasons. Can you name at least one?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Global variables cannot be deleted directly. The global variable must be set to null before the memory can be collected. However, the variable still exists and simply references null (nothingness).
</div>
  </div>
</details>

Code Example:

```js
Before:

// global -> {nothingness}

After:

// global -> var a -> object { foo: "bar" }

// Set a to null:

// global -> var a -> null
```

Source: <https://javascript.info/garbage-collection#reachability>

Addition: <https://stackoverflow.com/questions/16787246/does-javascript-garbage-collector-dispose-global-variables>

### In JavaScript, can interlinked objects be garbage collected based on nullification on a specific object on the GC root?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the object that is deleted or nullified will be garbage collected even if it is part of a GC root or it one of its properties references another object.
</div>
  </div>
</details>

Code Example:

```js
function marry(man, woman) {
  woman.husband = man;

  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: 'John' }, { name: 'Ann' });

// if we delete both, then we can see that John has no incoming reference any more

delete family.father;
delete family.mother.husband;
```

Source: <https://javascript.info/garbage-collection#interlinked-objects>

### Is it possible that all the interlinked objects in a GC root become unreachable and removed from memory?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is possible if the root is nullified in the program.
</div>
  </div>
</details>

Code Example:

```js
let family = marry(
  {
    name: 'John',
  },
  {
    name: 'Ann',
  }
);

/*
 * below the root has been nullified and all corresponding
 * interlinked objects will be garbage collected
 */

family = null;
```

Source: <https://javascript.info/garbage-collection#unreachable-island>

### What is the basic collection algorithm called in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The basic garbage collection algorithm is called mark-and-sweep.
</div>
  </div>
</details>

Source: <https://javascript.info/garbage-collection#internal-algorithms>

### Explain, how the internal JavaScript garbage collector algorithm works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong><br /><br />
  <strong>The following “garbage collection” steps are regularly performed:</strong><br /><br />
  <ol>
    <li>The garbage collector takes roots and “marks” (remembers) them.</li>
    <li>Then it visits and “marks” all references from them.</li>
    <li>Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.</li>
    <li>…And so on until every reachable (from the roots) reference are visited.</li>
    <li>All objects except marked ones are removed.</li>
  </ol>
</div>
  </div>
</details>

Source: <https://javascript.info/garbage-collection#internal-algorithms>

### Name the three of the common garbage collection optimizations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three common garbage collection optimizations include generalization, incremental, and idle-time collection.
</div>
  </div>
</details>

:::note

It should be noted that each engine implements different tweaks and techniques.

:::

Source: <https://javascript.info/garbage-collection#internal-algorithms>
