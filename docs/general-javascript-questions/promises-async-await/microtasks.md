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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MicroTasksSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Microtask Queue | JavaScript Frontend Interview Questions</title>
</head>

**Promises/Async/Await: Microtask Queue**

<CloseAllAnswers />

---

### What is the Microtask Queue in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Microtask Queue is a task queue in the JavaScript event loop that processes microtasks, which are small, short-lived tasks created by asynchronous operations like Promises, MutationObserver, or queueMicrotask.<br />
  </div>
  </div>
</details>

---

### How does the Microtask Queue differ from the Task Queue?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Microtask Queue has higher priority than Task Queue. Microtasks are executed immediately after the current synchronous code finishes, before any other tasks, like rendering or I/O callbacks, are processed.
  </div>
  </div>
</details>

---

### What is the role of Promises in the Microtask Queue?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promises use the Microtask Queue to schedule the execution of their "then" and "catch" callbacks, ensuring these callbacks are executed after the current synchronous code finishes and before any other tasks.<br />
  </div>
  </div>
</details>

---

### Can you explain how the Microtask Queue is processed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> After the current synchronous code finishes, the Microtask Queue is processed. All micro tasks are executed one by one until the queue is empty. Then, the event loop proceeds to the Task Queue.<br />
  </div>
  </div>
</details>

---

### What is the purpose of the queueMicrotask() function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The queueMicrotask() function allows developers to directly enqueue a microtask in the Microtask Queue. This enables scheduling the execution of a callback after the current synchronous code and before other tasks.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's say we want to defer a piece of code until the current task and all other microtasks have completed. We can use `queueMicrotask()` for this purpose:

```javascript
console.log('Script start');

queueMicrotask(() => {
    console.log('Microtask 1');
});

queueMicrotask(() => {
    console.log('Microtask 2');
});

console.log('Script end');

// Output:
// Script start
// Script end
// Microtask 1
// Microtask 2
```

In the example above, 'Script start' and 'Script end' are logged first. Even though we queued two microtasks, they don't run until after the script has completed.

  </div>
  </div>
</details>

---

### Can you explain how the Job Queue (Microtasks Queue) works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Job Queue, or Microtasks Queue, holds promises' callbacks for execution after the current synchronous task completes but before returning control to the event loop, ensuring "Promise then" code executes promptly.
</div><br />
  <div><strong>Technical Response:</strong> Apart from Callback Queue, browsers have introduced one more queue, the “Job Queue”, reserved only for new Promise() functionality. Asynchronous tasks need proper management. The ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term). So when you use promises in your code, you add .then() method, which is a callback method. These `thenable` methods are added to Job Queue once the promise has returned/resolved and then executes. Notably, any code in the ScriptsJob returns before the return of a promise in the microtasks queue.
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

### How can we make code run after a promise completes if the order matters to us?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can ensure code runs after a promise by attaching a `.then()` method to the promise. The callback provided to `.then()` executes once the promise is resolved.
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
  <div><strong>Interview Response:</strong> An unhandled rejection occurs in JavaScript promises when a Promise rejects (fails) and there is no associated `catch()` method to handle the error or rejection.
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

### Can the Microtask Queue be blocked by long-running synchronous code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the Microtask Queue can be blocked by long-running synchronous code, as it only runs tasks after the current synchronous execution completes and before yielding control back to the event loop.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
console.log('Script start');

const start = Date.now();
while(Date.now() - start < 5000) {} // long-running synchronous code, blocks for 5 seconds

queueMicrotask(() => {
    console.log('Microtask executed');
});

console.log('Script end');

// Output:
// Script start
// Script end (after 5 seconds)
// Microtask executed
```

In this example, the microtask is blocked by the long-running synchronous while loop and only executes after that code completes.

  </div>
  </div>
</details>

---

### What happens if a microtask enqueues another microtask?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a microtask enqueues another microtask in JavaScript, it's added to the Microtask Queue and will execute in the same microtask checkpoint, before returning control to the event loop.
  </div>
  </div>
</details>

---

### What is the difference between using setTimeout() and queueMicrotask() to schedule a task?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `setTimeout()` schedules a macrotask, which will run after the current execution context and microtask queue are empty. `queueMicrotask()` schedules a microtask, which runs before control returns to the event loop.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
console.log('Script start');

setTimeout(() => {
    console.log('Macrotask: setTimeout callback');
}, 0);

queueMicrotask(() => {
    console.log('Microtask: queueMicrotask callback');
});

console.log('Script end');

// Output:
// Script start
// Script end
// Microtask: queueMicrotask callback
// Macrotask: setTimeout callback
```

Even though `setTimeout` is called before `queueMicrotask`, the microtask executes first. This is because the Microtask Queue is processed immediately after the current task completes and before returning to the event loop, whereas `setTimeout` schedules a macrotask, which will only execute after control returns to the event loop.

  </div>
  </div>
</details>

---

### How does the MutationObserver API use the Microtask Queue?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The MutationObserver API uses the Microtask Queue to schedule callbacks. After any DOM mutations, these callbacks are added to the Microtask Queue to be executed before the next render or event loop tick.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's an example. Let's say we want to watch for changes to a DOM element. We can use the `MutationObserver` API for this purpose, and its callbacks will be queued in the Microtask Queue:

```javascript
let div = document.createElement('div');

let observer = new MutationObserver(() => {
    console.log('Mutation observed');
});

observer.observe(div, { attributes: true });

console.log('Script start');

div.setAttribute('id', 'test');

console.log('Script end');

// Output:
// Script start
// Script end
// Mutation observed
```

In this example, even though the mutation (the attribute change) happens before 'Script end' is logged, the callback isn't called until after the script completes, demonstrating that MutationObserver uses the Microtask Queue.

  </div>
  </div>
</details>

---

### What is the recommended use case for the Microtask Queue?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Microtask Queue in JavaScript is typically used for tasks requiring immediate execution after the current task, like promise callbacks or MutationObserver callbacks, and before control returns to the event loop.
  </div>
  </div>
</details>

---
