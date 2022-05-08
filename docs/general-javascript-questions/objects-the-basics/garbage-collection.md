---
title: Garbage Collection
description: Garbage collection is a process that removes unused objects from memory. The central concept of memory management in JavaScript is reachability. Interview
sidebar_position: 3
sidebar_label: Garbage Collection
keywords:
  - javascript garbage collection
  - garbage collection
  - gc root
  - automatic memory management
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - javascript garbage collection
  - garbage collection
  - automatic memory management
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/GCSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Garbage Collection | JavaScript Phone Interview Questions</title>
</head>

**Objects the Basics: Garbage Collection**

<CloseAllAnswers />

---

### How does JavaScript manage memory manually or automatically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript automatically allocates memory when objects get created and clears the memory when the object no longer references it. (Garbage Collection)
</div><br />

:::note

This automaticity is a potential source of confusion: it can give developers the false impression that they do not need to worry about memory management.

:::

  </div>
</details>

---

### Explain the three steps of the memory life cycle in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The memory life cycle includes allocating, using, and releasing the allocated memory when it is no longer needed.</div><br />
  <div><strong>Technical Response:</strong> The three steps in the memory life cycle include allocating memory, using the allocated memory, and releasing the allocated memory when it is no longer needed. The last part is more implicit in JavaScript than in low-level languages.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var n = 123; // allocates memory for a number
var s = 'azerty'; // allocates memory for a string

var o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// allocates memory for the array and contained values
var a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  'click',
  function () {
    someElement.style.backgroundColor = 'blue';
  },
  false
);

var n = null;
```

  </div>
  </div>
</details>

---

### What is the central concept of memory management in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The central concept of memory management in JavaScript is reachability. Simply put, "reachable" means values that are accessible or usable somehow and are guaranteed to get stored in memory.
</div>
  </div>
</details>

---

### Concerning JavaScript memory management. What is a GC root?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A "root" is simply an object that the garbage collector assumes is reachable by default, which then has its references traced to find all other current objects that are reachable. Any object that is not reachable through any reference chain of any root objects is considered unreachable and eventually gets destroyed by the garbage collector.
</div>
  </div>
</details>

---

### A base set of inherently reachable values cannot get deleted for obvious reasons. Can you name at least one?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript cannot delete Global variables directly, and the global variable must be set to null before the memory can be collected. However, the variable still exists and references null (nothingness).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
Before:

// global -> {nothingness}

After:

// global -> var a -> object { foo: "bar" }

null:

// global -> var a -> null
```

  </div>
  </div>
</details>

---

### Can interlinked objects be garbage collected based on the nullification of a specific object on the GC root in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the deleted or nullified object gets garbage collected even if it is part of a GC root or one of its properties references another object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

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

// if we delete both, then we can see that John has no incoming reference any more

delete family.father;
delete family.mother.husband;
```

  </div>
  </div>
</details>

---

### Is it possible that all the interlinked objects in a GC root become unreachable and removed from memory?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is possible if the root gets nullified in the program.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let family = marry(
  {
    name: 'John',
  },
  {
    name: 'Ann',
  }
);

/**
 * below the root has been nullified and all corresponding
 * interlinked objects will be garbage collected
 */

family = null;
```

  </div>
  </div>
</details>

---

### What is the basic garbage-collection algorithm called in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The basic garbage collection algorithm is called mark-and-sweep.
</div>
  </div>
</details>

---

### Explain how the internal JavaScript garbage collector algorithm works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong><br /><br />
  <strong>The following "garbage collection" steps regularly get performed:</strong><br /><br />
  <ol>
    <li>The garbage collector takes roots and "marks" (remembers) them.</li>
    <li>Then it visits and "marks" all references from them.</li>
    <li>Then it visits marked objects and marks their references. The garbage collector remembers all visited objects so as not to visit the same object twice in the future.</li>
    <li>And so on until every reachable (from the roots) reference is visited.</li>
    <li>All objects except marked ones get removed.</li>
  </ol>
</div>
  </div>
</details>

---

### Can you name the three standard garbage collection optimizations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three standard garbage collection optimizations include generalization, incremental, and idle-time collection.
</div><br />

:::note

You should note that each engine implements different tweaks and techniques.

:::

  </div>
</details>

---
