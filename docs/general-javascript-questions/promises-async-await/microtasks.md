---
title: Microtask Queue
description: The Microtask Queue is a queue of tasks that are executed as soon as possible after the current task has finished. Can you explain Microtasks
sidebar_position: 7
sidebar_label: Microtask Queue
keywords:
  - microtask queue
  - javascript microtasks
  - micro tasks
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
  - microtask queue
  - javascript microtasks
  - micro tasks
  - interview answers
  - interview questions
---

<head>
  <title>Microtask Queue | JavaScript Frontend Interview Questions</title>
</head>

**Promises/Async/Await: Microtask Queue**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain how the Job Queue (Microtasks Queue) works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Apart from Callback Queue, browsers have introduced one more queue, the “Job Queue”, reserved only for new Promise() functionality. Asynchronous tasks need proper management. The ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term). So when you use promises in your code, you add .then() method, which is a callback method. These `thenable` methods are added to Job Queue once the promise has returned/resolved and then executes. Notably, any code in the ScriptsJob returns before the return of a promise in the microtasks queue.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('Message no. 1: Sync');

setTimeout(function () {
  console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function (resolve, reject) {
  resolve();
});

promise
  .then(function (resolve) {
    console.log('Message no. 3: 1st Promise');
  })
  .then(function (resolve) {
    console.log('Message no. 4: 2nd Promise');
  });

console.log('Message no. 5: Sync');

// Expected Output:
// Message no. 1: Sync
// Message no. 5: Sync
// Message no. 2: setTimeout
// Message no. 3: 1st Promise
// Message no. 4: 2nd Promise
```

  </div>
  </div>
</details>

---

### What if the order matters for us? How can we make code run after a promise completes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most straightforward and recommended way to run code after a promise completes is to put it into the queue with the .then method.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
Promise.resolve()
  .then(() => alert('promise done!'))
  .then(() => alert('code finished'));
```

  </div>
  </div>
</details>

---

### When does an unhandled rejection occur in JavaScript promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An “unhandled rejection” occurs when a promise error is unhandled at the end of the microtask queue. Usually, if we expect an error, we add .catch to the promise chain to handle it.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = Promise.reject(new Error('Promise Failed!'));
promise.catch((err) => alert('caught'));

// doesn't run: error handled
window.addEventListener('unhandledrejection', (event) => alert(event.reason));

//////////////////////////////////////

// Example: if we don't handle our errors

let promise = Promise.reject(new Error('Promise Failed!'));
promise.catch((err) => alert('caught'));

// doesn't run: error handled
window.addEventListener('unhandledrejection', (event) => alert(event.reason));

//////////////////////////////////////

// Example: if we handle errors later in our code
let promise = Promise.reject(new Error('Promise Failed!'));
setTimeout(() => promise.catch((err) => alert('caught')), 1000); // handling error 1 second later

// Error: Promise Failed!
window.addEventListener('unhandledrejection', (event) => alert(event.reason));
```

  </div>
  </div>
</details>

---
