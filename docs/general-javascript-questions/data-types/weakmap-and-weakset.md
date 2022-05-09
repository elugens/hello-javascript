---
title: WeakMap / WeakSet
description: WeakMap and WeakSet are a data structure that are used to store key-value
  pairs. What are some use cases in applications for a WeakMap? Interview
  Questions
sidebar_position: 8
sidebar_label: WeakMap / WeakSet
keywords:
  - weakmap
  - weakset
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - set
  - interview questions
  - interview answers
  - js
tags:
  - weakmap
  - weakset
  - interview answers
  - interview questions
lastmod: 2022-05-01T22:17:16.765Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WeakMapSetSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>WeakMap and WeakSet | JavaScript Frontend Phone Interview</title>
</head>

**Data Types: WeakMap / WeakSet**

<CloseAllAnswers />

### What is the difference between Map and WeakMap in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The first distinction between Map and WeakMap is that keys in a WeakMap must be objects rather than basic values. WeakMap does not allow iteration or the methods keys(), values(), and entries(); hence it cannot return all keys or values.</div><br />
  <div><strong>Technical Response:</strong> The first difference between Map and WeakMap is that keys must be objects, not primitive values. WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to extract all the keys or values from it. Also, WeakMap is limited to the following methods, including get, set, delete, and has methods. Why such a limitation? That is for technical reasons. If an object has lost all other references, it gets garbage-collected automatically. But technically, it is not precisely specified when the cleanup happens.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let john = { name: 'John' };

let map = new Map();
map.set(john, '...');

john = null; // overwrite the reference

// john is stored inside the map,
// we can get it by using map.keys()

///////////////////////////////////////

// Example: WeakMap

let john = { name: 'John' };

let weakMap = new WeakMap();
weakMap.set(john, '...');

john = null; // overwrite the reference

// john is removed from memory!
```

  </div>
  </div>
</details>

---

### What are some use cases in applications for a WeakMap?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main area of application for WeakMap is an additional data storage, such as third-party data that you may not have an indefinite use. Another typical example is caching. We can store (“cache”) results from a function so that future calls on the same object can reuse.
</div>
  </div>
</details>

---

### What is the difference between a Set and WeakSet in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference is that WeakSet can only contain objects & not any other type. Another difference is that references to objects in a WeakSet hold “weakly” in the object. This difference means that garbage gets collected if there is no other reference to an object in the WeakSet.</div><br />
  <div><strong>Technical Response:</strong> Both Set & WeakSet are key-based collections but with some crucial differences. Like Set, the WeakSet constructor takes in an iterable object as input. The main difference is that WeakSet can only contain objects & not any other type. The other main difference is that references to objects in a WeakSet hold “weakly” in the object. This difference means that garbage gets collected if there is no other reference to an object in the WeakSet. The same is not valid for Set. An object stored in a Set does not get garbage collected even if nothing references it. This distinction is important because, for this reason, there is no way to access or iterate over objects stored inside a WeakSet. We also do not have access to the size of the weak set for this exact reason.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: WeakSet
let visitedSet = new WeakSet();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
```

  </div>
  </div>
</details>

---

### What is the most notable limitation of WeakMap and WeakSet in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most noteworthy constraint of WeakMap and WeakSet is the absence of iteration and the inability to extract all current content. That may appear inconvenient but does not prevent WeakMap/WeakSet from doing their primary job in “additional” data storage for objects stored/managed elsewhere.
</div>
  </div>
</details>

---
