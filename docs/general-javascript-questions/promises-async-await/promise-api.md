---
title: Promise API
description: Promise API is the standard API for promises in JavaScript. What are the Promise class's six static methods? Pass Your Next Frontend Phone Interview Questions
sidebar_position: 5
sidebar_label: Promise API
keywords:
  - promise api
  - promises
  - asynchronous programming
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
  - promise api
  - promises
  - asynchronous programming
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PromiseAPISchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Promise API | JavaScript Frontend Phone Interview Questions</title>
</head>

**Promises/Async/Await: Promise API**

<CloseAllAnswers />

---

### What is a Promise in JavaScript and why is it useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation. It's useful for handling asynchronous code, improving readability and maintainability.<br />
  </div>
  </div>
</details>

---

### Can you explain the three states a Promise can have?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Promise has three states: pending (initial state), fulfilled (operation completed successfully), and rejected (operation failed or error occurred).<br />
  </div>
  </div>
</details>

---

### What are the two main methods used to handle Promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two main methods to handle Promises are then() for fulfilled promises, and catch() for rejected promises.<br />
  </div>
  </div>
</details>

---

### What are the Promise class's six static methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>The Promise class has six static methods: Promise.all(), Promise.allSettled(), Promise.race(), Promise.resolve(), Promise.reject(), and Promise.any(). They help manage multiple Promises and create settled Promises.
</div>
  </div>
</details>

---

### Can you explain the function of the Promise.all() static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promise.all() takes an iterable of Promises and returns a new Promise that fulfills with an array of resolved values once all input Promises fulfill or rejects if any input Promise rejects.
</div><br />
  <div><strong>Technical Response:</strong> The Promise.all() method takes an iterable of promises as an input. Then returns a single Promise that resolves to array of results, technically can be any iterable but its usually an array. This returned promise resolves when all the input's promises resolve or if the input iterable contains no promises. It rejects immediately upon any input promises rejecting or non-promises throwing an error and rejects with this first rejection message/error. The new promise resolves when all listed promises settle, and the array of their results becomes its result.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.all(iterable);<br /><br />

  <div></div>

```js
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

// Another Example:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

  </div>
  </div>
</details>

---

### How does the map method work with the Promise.all() static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Promise.all()` with `map` can be used to run promises concurrently. Each array element is passed to a promise-returning function with `map()`, and `Promise.all()` waits for all returned promises to resolve.
</div><br />
  <div><strong>Technical Response:</strong> Since the map method creates a new array populated with the results of the calling function. The map method is an excellent adhesive for the Promise.all method because it carries some of the responsibility of providing the calling function on every array element.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

// map every url to the promise of the fetch
let requests = urls.map((url) => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);
```

:::tip
 Use Case: A common trick is to map an array of job data into an array of promises and then wrap that into Promise.all.
:::

  </div>
  </div>
</details>

---

### What happens when there is an error with the Promise.all() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Promise.all()` fails fast: if any of the passed-in promises rejects, `Promise.all` immediately rejects with the reason of the first promise that rejected, disregarding the rest.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // Error: Whoops!
```

  </div>
  </div>
</details>

---

### Can Promise.all() handle regular values, not just Promises, within the input iterable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Promise.all() allows regular values in the iterable. It treats them as resolved Promises with their respective values and includes them in the output array.
</div><br />
  <div><strong>Technical Response:</strong> Yes, Promise.all(iterable) allows non-promise “regular” values in the iterable. Typically, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it is passed to the resulting array “as is”.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.allSettled(iterable);<br /><br />

  <div></div>

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }),
  2,
  3,
]).then(alert); // 1, 2, 3
```

  </div>
  </div>
</details>

---

### Can you explain the function of the static method, Promise.allSettled()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Promise.allSettled()` returns a promise that resolves after all of the given promises have either been fulfilled or rejected, with an array of their results.
</div><br />
  <div><strong>Technical Response:</strong> The Promise.allSettled() function produces a promise that resolves once all of the specified promises have been fulfilled or refused. This behavior happens together with an array of objects that specify the outcome of each promise. You typically use it when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you would like to know the result of each promise. In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to reject upon any of them getting rejected immediately.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.allSettled(iterable);<br /><br />

  <div></div>

```javascript
let promises = [
  Promise.resolve('promise 1'),
  Promise.reject('promise 2 failed'),
  Promise.resolve('promise 3'),
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => console.log(result.status));
  })
  .catch(error => console.error(error));
```

In this code, `Promise.allSettled()` waits for all promises to settle, either fulfilled or rejected. The status of each promise is then logged. Unlike `Promise.all()`, `Promise.allSettled()` does not reject if one promise fails; instead, it gives the status of each promise.

  </div>
  </div>
</details>

---

### Can you explain the function of the Promise.race static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Promise.race(iterable)` returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.race(iterable);<br /><br />

  <div></div>

```javascript
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'two'));

Promise.race([promise1, promise2])
  .then(value => console.log(value)) // lots "two"
  .catch(error => console.error(error));
```

In this example, `Promise.race` takes an array of two promises. The 'two' string is logged to the console because promise2 resolves first due to its shorter timeout.

  </div>
  </div>
</details>

---

### Can you explain the function of the Promise.any static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promise.any() accepts an iterable of Promises and returns a new Promise that fulfills with the value of the first fulfilled Promise or rejects with an AggregateError if all input Promises reject.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"

//////////////////////////////////

// Here is an example when all promises fail:

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ouch!')), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error
});
```

  </div>
  </div>
</details>

---

### Can you explain the Promise.resolve static method's function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promise.resolve() creates a new Promise that is immediately resolved with the provided value, or passes through an input Promise without altering its state or value.
</div><br />
  <div><strong>Interview Response:</strong> The Promise.resolve() method returns a Promise object that resolves with a given value. If the value is a promise, that promise returns; if the value is a `thenable` (i.e. has a "then" method), the returned promise will "follow" that `thenable`, adopting its eventual state; otherwise, the returned promise fulfills with the value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.resolve(value);<br /><br />

  <div></div>

```js
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
}
```

:::note
This function flattens nested layers of promise-like objects (e.g., a promise that resolves to a promise that resolves to something) into a single layer. Methods Promise.resolve and Promise.reject are rarely needed in modern code because async/await syntax makes them somewhat obsolete.
:::

  </div>
  </div>
</details>

---

### Can you explain the function of the Promise.reject static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promise.reject() creates a new Promise that is immediately rejected with the provided reason, allowing you to generate a rejected Promise for error handling or testing purposes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <strong>Syntax: </strong> Promise.reject(reason);<br /><br />

  <div></div>

```js
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);
// expected output: Error: fail
```

:::note
Methods Promise.resolve and Promise.reject are rarely needed in modern code because async/await syntax makes them somewhat obsolete.
:::

  </div>
  </div>
</details>

---

### What is the purpose of the finally() method in a Promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The finally() method is used to execute code after a Promise has settled, regardless of whether it was fulfilled or rejected.<br />
  </div>
  </div>
</details>

---

### What is the difference between Promise.all() and Promise.race()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promise.all() waits for all input promises to fulfill, while Promise.race() returns the result of the first settled promise, either fulfilled or rejected.<br />
  </div>
  </div>
</details>

---

### How can you create a resolved or rejected Promise immediately?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use `Promise.resolve(value)` to create a resolved promise or `Promise.reject(reason)` to create a rejected promise immediately. Both return a Promise object.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let resolvedPromise = Promise.resolve('Resolved!');
resolvedPromise.then(value => console.log(value)); // Output: 'Resolved!'

let rejectedPromise = Promise.reject('Rejected!');
rejectedPromise.catch(reason => console.log(reason)); // Output: 'Rejected!'
```

In this code, `Promise.resolve` creates a promise that is resolved with the given value 'Resolved!', and `Promise.reject` creates a promise that is rejected with the given reason 'Rejected!'.

  </div>
  </div>
</details>

---

### What is a Promise chain's return value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Promise chain's return value is a new Promise that resolves or rejects based on the outcome of the last Promise in the chain.<br />
  </div>
  </div>
</details>

---

### How do you handle multiple Promises concurrently without waiting for the previous one to complete?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use `Promise.all()` or `Promise.allSettled()`. They accept an iterable of promises and return a new promise that fulfills when all input promises are settled, allowing concurrent handling.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'two'));
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 300, 'three'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))
  .catch(error => console.error(error));
```

In this code, `Promise.all` takes an array of promises. The promises are run concurrently, not waiting for the previous one to complete. The array ['one', 'two', 'three'] will be logged to the console once all promises have resolved.

  </div>
  </div>
</details>

---

### What is the difference between using async/await and Promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript primitives are immutable, meaning their values cannot be changed after they are created. This ensures data consistency.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Example using Promises:

```javascript
function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

fetchData('https://api.example.com/data');
```

And here's the equivalent using async/await:

```javascript
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData('https://api.example.com/data');
```

In both cases, we're fetching data from a URL and logging it. The async/await version is arguably easier to read and write because it avoids explicit Promise chaining.

  </div>
  </div>
</details>

---

### What is the role of the executor function in creating a new Promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The executor function in a new Promise takes two parameters: `resolve` and `reject`. It performs a task (usually asynchronous), calling `resolve(value)` if successful, or `reject(reason)` if an error occurs.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true; // Here you'd typically perform an async task

  if (success) {
    resolve('Task completed successfully');
  } else {
    reject('Error: Task could not complete');
  }
});

promise
  .then(value => console.log(value)) // Logs: 'Task completed successfully'
  .catch(error => console.log(error));
```

In this code, the executor function decides whether to call `resolve()` or `reject()`. If `resolve()` is called, then the `.then()` block will execute. If `reject()` is called, then the `.catch()` block will execute.

  </div>
  </div>
</details>

---
