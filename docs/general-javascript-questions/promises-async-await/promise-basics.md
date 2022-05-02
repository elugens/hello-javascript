---
title: Promise Basics
description: JavaScript Promises are a way to handle asynchronous operations in JavaScript.
sidebar_position: 2
sidebar_label: Promise Basics
keywords:
  - javascript promises
  - promises
  - asynchronous operations
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
  - javascript promises
  - promises
  - asynchronous operations
  - interview answers
  - interview questions
---

<head>
  <title>Promise Basics | JavaScript Frontend Phone Interview Answers</title>
</head>

**Promises/Async/Await: Promise Basics**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Explain the function and syntax of the Promise object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A promise is an object that may produce a single value later in the future: either a resolved value or a reason that it goes unresolved, an error. A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.</div><br />
  <div><strong>Technical Response:</strong> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is a proxy for a value not necessarily known when the promise gets created. It enables you to attach handlers with an asynchronous operation to provide a success or failure result. This process lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the method returns a promise to supply the value later. A Promise is in one of three states, including pending, fulfilled, and rejected. The pending state is the initial state, neither fulfilled nor rejected. The fulfilled state means that the operation was ultimately successful, and the rejected state means that there was an apparent failure.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = new Promise(function (resolve, reject) {
  // executor or producer
});
```

  </div>
  </div>
</details>

---

### What is the function called that gets passed to the newly created promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The executor is the function that gets supplied to a new Promise. The executor launches automatically when a new Promise gets produced. It includes the generating code, which, provided no errors occur, should finally create the outcome. When the attempt gets made, it calls to resolve if it was successful or reject if there was an issue.</div><br />
  <div><strong>Technical Response:</strong> The executor is the function that gets supplied to a new Promise. The executor launches automatically when a new Promise gets produced. It contains the code that eventually provides the result. Its arguments resolve and reject JavaScript callbacks, and only the executor gets access to our code. When the executor receives the result, whether early or late, it should call one of these callbacks (resolve, reject). Successful completion with the outcome value gets characterized as resolved. If an error occurs, Reject includes the Error object and executes it. To summarize, the executor is a program that runs automatically and attempts to perform a job. When the attempt gets made, it calls to resolve if it was successful or reject if there was an issue.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = new Promise(function (resolve, reject) {
  // executor or producer
});
```

  </div>
  </div>
</details>

---

### Can you name the properties that the promise object returned by the Promise constructor has internally?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The promise object contains four internal properties, including state and result. The state is initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called. The result property is initially undefined, then changes to value when resolve(value) gets called or an error when the reject(error) gets called. So, the executor eventually moves the promise to one of these states.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: RESOLVE
let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve('done'), 1000);
});

// Example: REJECT
let promise = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});
```

  </div>
  </div>
</details>

---

### What is a promise that is either resolved or rejected called?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A promise that is either resolved or rejected is called “settled” instead of an initially “pending” promise.
</div>
  </div>
</details>

---

### What is the main limitation of a Promise in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main limitation is that there can be only a single result or error. The executor should call only one resolve or one reject. Any state change is final; all further resolve calls and `reject` are ignored. The idea is that a job done by the executor may have only one result or an error. Also, resolve/reject excepts only one argument (or none) and ignores additional arguments.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = new Promise(function (resolve, reject) {
  resolve('done');

  reject(new Error('…')); // ignored
  setTimeout(() => resolve('…')); // ignored
});
```

  </div>
  </div>
</details>

---

### What are the three subscribing (consumers) methods/functions used in Promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Promise object is a link between the executor and the consuming functions, which receive the result or error. Consuming functions can be registered using methods .then, .catch and .finally.
</div>
  </div>
</details>

---

### Explain the function and syntax of the promise then() method/function in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The then method returns a Promise. It takes up to two arguments in the form of callbacks that handle resolved or rejected promises. The first argument of .then is a function that runs when the promise is `resolved` and receives the result. The second argument of .then is a function that runs when the promise is `rejected` and receives the error.</div><br />
  <div><strong>Technical Response:</strong> The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise. The first argument of .then is a function that runs when the promise is `resolved` and receives the result. The second argument of .then is a function that runs when the promise is `rejected` and receives the error. If we are interested only in errors, we can use null as the first argument ( .then(null, errorHandlingFunction); ). The then method/function returns a Promise which allows for method chaining.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> promise.then(onFulfilled[, onRejected]);<br /><br />

  <div></div>

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('done!'), 1000);
});

// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

///////////////////////////////////

let promise2 = new Promise(function (resolve, reject) {
  babab;
});

// error runs the first function in .then
promise2.then(
  (result) => console.log(result), // doesn't run
  (error) => console.log(error.name) // returns ReferenceError
);
```

:::note
If we are interested only in errors, we can use null as the first argument ( .then(null, errorHandlingFunction); ). The then method/function returns a Promise which allows for method chaining.
:::

  </div>
  </div>
</details>

---

### Explain the function and syntax of the promise catch() method/function in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The catch method returns a Promise and deals with rejected cases only, and it behaves the same as calling dot then. This behavior means that you must provide an onRejected function even if you want to fall back to an undefined result.</div><br />
  <div><strong>Technical Response:</strong> The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected) (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)). This means that you have to provide an onRejected function even if you want to fall back to an undefined result value - for example obj.catch(() => &#123;&#125;).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> promise.catch(onRejected);<br /><br />

  <div></div>

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the promise finally() method/function in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `finally` method schedules a function for executing when the promise gets settled, either fulfilled or rejected. </div><br />
  <div><strong>Technical Response:</strong> Just like there is a 'finally' clause in a standard try &#123;...&#125; catch &#123;...&#125;, there is a 'finally' clause in promises. Finally, the finally() function yields a Promise. The provided callback function gets performed when the promise resolves to be fulfilled or denied. Once the Promise has dealt with, the executing code can determine if the promise gets successfully set to fulfilled or denied. The call.finally(f) is identical to.then(f, f) in that f is always executed when the promise resolves: resolve or reject. Finally, a decent handler for cleaning up, such as halting our loading indicators because they are no longer required, regardless of the outcome.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> promise.finally(onFinally);<br /><br />

  <div></div>

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve('result'), 2000);
})
  .finally(() => alert('Promise ready'))
  .then((result) => alert(result)); // <-- .then handles the result
```

:::note
We use it to perform cleanup tasks once the promise settles, as it always executes irrespective of whether the promise is fulfilled or rejected.
:::

  </div>
  </div>
</details>

---

### In JavaScript, what are the advantages of promises versus callbacks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promises allow us to do things in the natural order. We can call .then on a Promise as many times as we want. Each time we add a new subscribing function to the “subscription list”, it returns a new promise. This approach allows us to chain our promises without the limitations of a callback. We can immediately see a few benefits over the callback-based pattern. So, promises give us better code flow and flexibility.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> promise.finally(onFinally);<br /><br />

  <div></div>

```js
new Promise((resolve, reject) => {
  setTimeout(() => resolve('result'), 2000);
})
  .finally(() => alert('Promise ready'))
  .then((result) => alert(result)); // <-- .then handles the result
```

  </div>
  </div>
</details>

---
