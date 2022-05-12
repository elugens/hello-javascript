---
title: Promises Chaining
description: Promises Chaining is a way to chain promises together.  Chaining promises is a process of chaining subscribers of the initial promise. Interview Questions
sidebar_position: 3
sidebar_label: Promises Chaining
keywords:
  - promises chaining
  - promise chaining
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - promises chaining
  - promise chaining
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PromChainSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Promises Chaining | JavaScript Frontend Phone Interview</title>
</head>

**Promises/Async/Await: Promises Chaining**

<CloseAllAnswers />

---

### What is the definition of promise chaining in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Chaining promises is a process of chaining subscribers of the initial promise. Typically, we use the dot to chain each subscriber in the sequence we want them to interact with the Promise.</div><br />
  <div><strong>Technical Response:</strong> Chaining promises is why we have promises in the first place. It is proper to tell JavaScript the next thing to do after an asynchronous task is done, thus avoiding the pyramid of doom typically associated with nested callbacks. It also reduces the complexity of your code and increases readability.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    alert(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result * 2;
  });
```

  </div>
  </div>
</details>

---

### What is a typical error made by new JavaScript developers when it comes to promises chaining?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A classic mistake made by new developers is breaking the promises chain. New developers can often attempt to separate or break the chain for readability or lack of knowledge. Although technically, we can also add many “.then” to a single promise. This method isn't considered chaining since it adds numerous handlers to a single promise without passing the result. Instead, they process the result independently from one another. We rarely need multiple handlers for one promise in practice, and chaining often gets used.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});
```

:::note
An example of breaking the chain of Promises is using the promise.then, in an individual invocation, subscribe to a promise.
:::

  </div>
  </div>
</details>

---

### Can you briefly explain the benefits of returning a new promise in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A handler, used in .then(handler), may create and return a new promise. In that case, further handlers wait until it settles and then return its result. Returning promises allows us to build chains of asynchronous actions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 3000);
})
  .then(function (result) {
    alert(result); // 1

    // Returning a Promise
    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 2000);
    });
  })
  .then(function (result) {
    // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    alert(result); // 4
  });
```

  </div>
  </div>
</details>

---

### Can you briefly explain what a thenable is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A “thenable” object is an arbitrary object that has a method .then. It gets treated the same way as a promise. The idea is that 3rd-party libraries may implement “promise-compatible” objects of their own. They can have an extended set of methods and be compatible with native promises, because they implement .then. This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve); // function() { native code }
    // resolve with this.num * 2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result); // (*)
  })
  .then(console.log); // shows 2 after 1000ms
```

  </div>
  </div>
</details>

---
