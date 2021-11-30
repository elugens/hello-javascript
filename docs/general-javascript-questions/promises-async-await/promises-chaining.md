---
title: Promises Chaining
sidebar_position: 3
---

# Promises Chaining

**Promises/Async/Await: Promises Chaining**

<head>
  <title>Promises Chaining - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the definition of promise chaining in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Chaining promises is the process of chaining subscribers of the initial promise. Typically, we will use the dot to chain each subscriber in the order that we want the subscribers to interact with the Promise.</div><br />
  <div><strong>Technical Response:</strong> Chaining promises is the very reason we have promises in the first place. It is a proper way to tell JavaScript the next thing to do after an asynchronous task is done, thus avoiding the pyramid of dome typically associated with nested callbacks. It also reduces the complexity of your code and increases readability.
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

### What is a common mistake that new developers make when it comes to promises chaining JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A classic mistake made by new developers is breaking the promises chain. New developers can often make the attempt to separate or break the chain for the sake of readability or simply lack of knowledge. Although technically we can also add many “.then” to a single promise. This is not considered chaining, because it is basically several handlers added to one promise without passing the result. Instead, they process the result independently from one another. In practice we rarely need multiple handlers for one promise. Chaining is used much more often.
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
An example of breaking the chain of Promises is using the promise.then in a individual invocation to subscribe to a promise.
:::

  </div>
  </div>
</details>

---

### Can you briefly explain the benefits of returning a new promise in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A handler, used in .then(handler) may create and return a new promise. In that case further handlers wait until it settles, and then get its result. Returning promises allows us to build chains of asynchronous actions.
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

### Briefly explain what a thenable is in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A thenable object is an arbitrary object that has a method .then. It will be treated the same way as a promise. The idea is that 3rd-party libraries may implement “promise-compatible” objects of their own. They can have an extended set of methods, but also be compatible with native promises, because they implement .then. This feature allows us to integrate custom objects with promise chains without having to inherit from Promise.
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
