---
title: Microtask Queue
sidebar_position: 7
---

# Microtask Queue

**Promises/Async/Await: Microtask Queue**

<head>
  <title>Microtask Queue - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you explain how the Job Queue (Microtasks Queue) works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Apart from Callback Queue, browsers have introduced one more queue which is “Job Queue”, reserved only for new Promise() functionality. Asynchronous tasks need proper management. For that, the ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term). So when you use promises in your code, you add .then() method, which is a callback method. These `thenable` methods are added to Job Queue once the promise has returned/resolved, and then gets executed. Notably, any code in the ScriptsJob will return prior to the return of a promise in the microtasks queue.
</div>
  </div>
</details>

Example:

```js
console.log('Message no. 1: Sync');

setTimeout(function () {
  console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function (resolve, reject) {
  resolve();
});

promise
  .then(function (resolve) {
    console.log('Message no. 3: 1st Promise');
  })

  .then(function (resolve) {
    console.log('Message no. 4: 2nd Promise');
  });

console.log('Message no. 5: Sync');

// Expected Output:

// Message no. 1: Sync

// Message no. 5: Sync

// Message no. 2: setTimeout

// Message no. 3: 1st Promise

// Message no. 4: 2nd Promise
```

---

### What if the order matters for us? How can we make code run after promise done?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The simplest and recommended way to make code run after promise done is to put it into the queue with the .then method.
</div>
  </div>
</details>

Example:

```js
Promise.resolve()
  .then(() => alert('promise done!'))
  .then(() => alert('code finished'));
```

---

### When does an unhandled rejection occur in relation to a JavaScript promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An “unhandled rejection” occurs when a promise error is not handled at the end of the microtask queue. Normally, if we expect an error, we add .catch to the promise chain to handle it.
</div>
  </div>
</details>

Example:

```js
let promise = Promise.reject(new Error('Promise Failed!'));

promise.catch((err) => alert('caught'));

// doesn't run: error handled

window.addEventListener('unhandledrejection', (event) => alert(event.reason));

//////////////////////////////////////

// Example: if we don't handle our errors

let promise = Promise.reject(new Error('Promise Failed!'));

promise.catch((err) => alert('caught'));

// doesn't run: error handled

window.addEventListener('unhandledrejection', (event) => alert(event.reason));

//////////////////////////////////////

// Example: if we handle errors later in our code

let promise = Promise.reject(new Error('Promise Failed!'));

setTimeout(() => promise.catch((err) => alert('caught')), 1000); // handling error 1 second later
// Error: Promise Failed!

window.addEventListener('unhandledrejection', (event) => alert(event.reason));
```

---
