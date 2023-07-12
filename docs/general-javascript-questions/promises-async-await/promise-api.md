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

### Can you explain the three states of a Promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three states are: Pending (initial state), Fulfilled (operation completed successfully), and Rejected (operation failed). Promises can only transition from Pending to Fulfilled or Rejected.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

A Promise in JavaScript can be in one of three states:

1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: Meaning that the operation completed successfully.
3. Rejected: Meaning that the operation failed.

Here's an example:

```javascript
// 1. Pending
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});
console.log(promise);  // Promise {<pending>}

// 2. Fulfilled
promise.then(value => console.log(value));  // After 1 second, outputs: "Done!"

// To illustrate a rejected state, let's create another promise
let rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Something went wrong!'), 1000);
});

// 3. Rejected
rejectedPromise.catch(error => console.error(error));  // After 1 second, outputs: "Something went wrong!"
```

In this example, `promise` starts in the Pending state, then moves to the Fulfilled state after one second. `rejectedPromise` also starts in the Pending state, then moves to the Rejected state after one second.

Once a Promise is either Fulfilled or Rejected, it is considered settled and its state cannot change. The Promise is said to be immutable after it is settled.

---

:::note
Note that in practice, you can't directly access the state of a Promise, but its state is reflected in how it behaves. The Promise API ensures that the behavior of the Promise is consistent with its state.
:::

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
]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member

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
]).catch(console.log); // Error: Whoops!
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
]).then(console.log); // 1, 2, 3
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
  <div><strong>Interview Response:</strong> Promise.resolve can also be used to handle values that may or may not be Promises. If the value is a Promise, it returns that Promise; if the value is not a Promise, it returns a new Promise that is immediately resolved with that value. This can be useful when writing functions that should be able to handle both synchronous and asynchronous inputs:
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.resolve(value);<br /><br />

  <div></div>

```js
function maybeAsync(value) {
    return Promise.resolve(value).then(result => {
        // Now we can safely use .then() whether `value` was initially a Promise or not
        console.log(result);
    });
}

// This will print: "Sync value"
maybeAsync("Sync value");

// This will print: "Async value" (after one second)
maybeAsync(new Promise(resolve => setTimeout(() => resolve("Async value"), 1000)));
```

As you can see, Promise.resolve can be a useful method when working with JavaScript Promises.

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
  <div><strong>Interview Response:</strong> `Promise.reject` is a static method that returns a Promise object that is rejected with a given reason. It's often used when you want to start a Promise chain that's immediately rejected, or to turn a synchronous error into a rejected Promise for compatibility with Promise-based code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <strong>Syntax: </strong> Promise.reject(reason);<br /><br />

  <div></div>

Here is a simple example of `Promise.reject`:

```javascript
// Let's create a Promise that is immediately rejected with a specific reason.
let p = Promise.reject('Something went wrong!');

// You can then use the Promise as you would any other.
// Since it's a rejected promise, .catch() is used to handle the error.
p.catch(reason => console.log(reason)); // Outputs: "Something went wrong!"
```

This Promise will immediately move to the `rejected` state, triggering any `.catch` handlers as soon as the event loop is free.

Just like `Promise.resolve`, `Promise.reject` can be useful when writing functions that handle both synchronous and asynchronous errors. Here's an example:

```javascript
function maybeAsyncError(value, throwError) {
    if (throwError) {
        return Promise.reject(new Error('There was an error!'));
    }
    return Promise.resolve(value);
}

maybeAsyncError('Hello, world!', false)
    .then(value => console.log(value)) // Outputs: "Hello, world!"
    .catch(error => console.error(error));

maybeAsyncError('Hello, world!', true)
    .then(value => console.log(value))
    .catch(error => console.error(error)); // Outputs: "Error: There was an error!"
```

In this example, the `maybeAsyncError` function either resolves with the provided value or rejects with an Error, based on the `throwError` argument. This allows it to be used with Promise-based code regardless of whether an error occurs.

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
  <div><strong>Interview Response:</strong> The finally() method is used to execute code after a Promise has settled, regardless of whether it was fulfilled or rejected.
  </div><br/>
  <div><strong>Technical Response:</strong> The `finally()` method in JavaScript is a part of Promise API that is called when the Promise is settled, no matter it's resolved or rejected. This is often used for performing cleanup tasks after an asynchronous operation has finished, regardless of its outcome.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello, world!'), 1000);
});

p.then(value => console.log(value))  // Outputs: "Hello, world!"
 .catch(error => console.error(error))
 .finally(() => console.log('This is called no matter what.'));  // Outputs: "This is called no matter what."
```

In this case, `finally()` is called after `then()`, no matter the outcome of the Promise. If the Promise was rejected and you had a `catch()` method, `finally()` would still be called:

```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => reject('There was an error!'), 1000);
});

p.then(value => console.log(value))
 .catch(error => console.log(error))  // Outputs: "There was an error!"
 .finally(() => console.log('This is called no matter what.'));  // Outputs: "This is called no matter what."
```

In this case, the `catch()` method is called because the Promise is rejected, but `finally()` is still called afterwards.

---

:::note
It's important to note that `finally()` does not receive any arguments, as it's not meant to process the Promise's result or error. Instead, it's meant for cleanup tasks that need to happen no matter what.
:::

  </div>
  </div>
</details>

---

### What is the difference between Promise.all() and Promise.race()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promise.all() waits for all input promises to fulfill, while Promise.race() returns the result of the first settled promise, either fulfilled or rejected.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example demonstrating the difference:

```javascript
let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'one'));
let promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'two'));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 1200, 'I failed'));

// Promise all
Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.log("Promise.all error:", error));

// Promise race
Promise.race([promise1, promise2, promise3])
    .then(value => console.log(value))
    .catch(error => console.log("Promise.race error:", error));
```

In this example:

The `Promise.all()` call will end up being rejected, because `promise3` is rejected before `promise1` and `promise2` are both resolved. It will print "Promise.all error: I failed" The `Promise.race()` call will resolve with the value `'one'`, because `promise1` resolves before either of the other two Promises settle. It will print `'one'`.

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
  <div><strong>Interview Response:</strong> A Promise chain's return value is a new Promise that resolves or rejects based on the outcome of the last Promise in the chain.
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
  <div><strong>Interview Response:</strong> Async/await and Promises are related; async/await is syntactic sugar over Promises, offering a simpler, cleaner syntax. However, Promises are more flexible for complex scenarios, like concurrent operations.
  </div><br />
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

### How can you handle errors in a Promise chain?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a Promise chain in JavaScript, you can handle errors by using the `.catch()` method. This method is called when a Promise is rejected, either directly or due to an error that is thrown in a `.then()` callback.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => reject('There was an error!'), 1000);
});

p.then(value => console.log(value))
 .catch(error => console.error(error));  // Outputs: "There was an error!"
```

In this case, because the Promise is rejected, the `.catch()` handler is called.

You can also use `.catch()` to handle errors that are thrown in a `.then()` handler:

```javascript
let p = Promise.resolve('Hello, world!');

p.then(value => {
    throw new Error('There was an error in the handler!');
})
 .catch(error => console.error(error));  // Outputs: "Error: There was an error in the handler!"
```

In this case, the `.then()` handler throws an error, which is then caught and handled by the `.catch()` handler.

**Note** that `.catch()` also returns a Promise. If you return a value in a `.catch()` handler, it will be the resolution value for that returned Promise. If you throw an error in a `.catch()` handler, the returned Promise will be rejected with that error.

```javascript
Promise.reject('Initial error')
    .catch(error => {
        console.error(error);  // Outputs: "Initial error"
        return 'Recovered from error';
    })
    .then(value => console.log(value))  // Outputs: "Recovered from error"
    .catch(error => console.error('Should not be called'));
```

In this case, even though the initial Promise is rejected, the `.catch()` handler recovers from the error by returning a new value. This makes the Promise returned by `.catch()` become resolved, so the `.then()` handler is called next, not the `.catch()` handler.

  </div>
  </div>
</details>

---

### What happens if you don't handle a rejected Promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a rejected Promise is not handled, an "UnhandledPromiseRejectionWarning" will be logged, which may eventually lead to application termination in future JavaScript versions.
  </div><br />
  <div><strong>Technical Response:</strong> If a Promise is rejected and you don't handle it with a `.catch()` method, it becomes an unhandled promise rejection. This means that the error could potentially go unnoticed, as no code will be triggered to handle the error. Most JavaScript environments, such as browsers and Node.js, will log unhandled promise rejections to the console. Some environments, like newer versions of Node.js, will even crash the process on unhandled promise rejections.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => reject('There was an error!'), 1000);
});

p.then(value => console.log(value));

// No .catch() handler, so the rejection is unhandled.
// Most environments will log something like:
// "UnhandledPromiseRejectionWarning: There was an error!"
```

In this case, because there is no `.catch()` handler to catch the rejected Promise, it becomes an unhandled promise rejection.

To prevent this, you should always handle Promise rejections with a `.catch()` handler, even if it's just to log the error:

```javascript
let p = new Promise((resolve, reject) => {
    setTimeout(() => reject('There was an error!'), 1000);
});

p.then(value => console.log(value))
 .catch(error => console.error(error));  // Outputs: "There was an error!"
```

In this case, the `.catch()` handler catches the rejected Promise, preventing an unhandled promise rejection.

  </div>
  </div>
</details>

---
