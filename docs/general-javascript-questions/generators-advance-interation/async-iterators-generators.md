---
title: Async Iteration and Generators
description: Async Iteration and Generators are a way to create iterators in JavaScript. What are some popular applications for asynchronous iteration in JavaScript?
sidebar_position: 2
sidebar_label: Async Iteration
keywords:
  - async iteration
  - async generators
  - asynchronous
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - iteration
  - interview questions
  - interview answers
  - js
tags:
  - async iteration
  - async generators
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AsyncIteratorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Async Iteration / Generators | JavaScript Frontend Interview</title>
</head>

**Generators, Advanced Iteration: Async Iteration and Generators**

<CloseAllAnswers />

### What are some popular applications for asynchronous iteration in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When there is an asynchronous need to retrieve data, we typically use asynchronous iteration. The most common use case is an object needs to make a network request to deliver the next value. This approach is also a great way to handle controlled chunks of data to reduce the impact on resources.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    // (1)
    return {
      current: this.from,
      last: this.to,

      async next() {
        // (2)

        // note: we can use "await" inside the async next:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    // (4)
    alert(value); // 1,2,3,4,5
  }
})();
```

  </div>
  </div>
</details>

---

### Is it possible to use a spread syntax with an asynchronous iterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, because the spread syntax expects to find Symbol.iterator, not Symbol.asyncIterator. It???s also the case for for..of: the syntax without await needs Symbol.iterator.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// The Spread Syntax works with Symbol.iterator (That's what its look for...)
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      next() {
        // called every iteration, to get the next value
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]); // [1,2,3,4,5] It works!!!

////////////////////////////////////

// Spread Syntax fails with Symbol.asyncIterator

let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    // (1)
    return {
      current: this.from,
      last: this.to,

      async next() {
        // (2)

        // note: we can use "await" inside the async next:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]); // Error, no Symbol.iterator
```

  </div>
  </div>
</details>

---
