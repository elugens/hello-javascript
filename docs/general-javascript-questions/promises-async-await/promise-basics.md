---
title: Promise Basics
sidebar_position: 2
---

# Promise Basics

**Promises/Async/Await: Promise Basics**

<head>
  <title>Promise Basics - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain, the function and Syntax of the Promise object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A promise is an object that may produce a single value sometime in the future: either a resolved value, or a reason that it is not resolved, an error. A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.</div><br />
  <div><strong>Technical Response:</strong> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. A Promise is in one of three states including pending, fulfilled, and rejected. The pending state is the initial state, neither fulfilled nor rejected. The fulfilled state means that the operation was completely successful, and the rejected state means that there was an obvious failure.
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

### What is the function called that gets passed to the newly created Promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result if there is no error. When it is finished with the attempt it calls resolve if it was successful or reject if there was an error.</div><br />
  <div><strong>Technical Response:</strong> The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor. When the executor obtains the result, be it soon or late, does not matter, it should call one of these callbacks (resolve, reject). Resolve is defined as a successful completion with the result value. Reject contains the Error object and executes if an error occurs. In summary, the executor runs automatically and attempts to perform a job. When it is finished with the attempt it calls resolve if it was successful or reject if there was an error.
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

### Can you name the properties that the promise object returned by Promise constructor has internally?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The promise object contains four internal properties including state and result. The state is initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called. The result property is initially undefined, then changes to value when resolve(value) called or error when reject(error) is called. So, the executor eventually moves promise to one of these states.
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
  <div><strong>Interview Response:</strong> A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.
</div>
  </div>
</details>

---

### What is the main limitation of a Promise in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main limitation is that there can be only a single result or error. The executor should call only one resolve or one reject. Any state change is final, all further calls of resolve and reject are ignored. The idea is that a job done by the executor may have only one result or an error. Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.
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
  <div><strong>Interview Response:</strong> A Promise object serves as a link between the executor and the consuming functions, which will receive the result or error. Consuming functions can be registered using methods .then, .catch and .finally.
</div>
  </div>
</details>

---

### Explain, the function and syntax of the promise then() method/function in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The then method returns a Promise. It takes up to two arguments in the form of callbacks that handle resolved or rejected promises. The first argument of .then is a function that runs when the promise is resolved, and receives the result. The second argument of .then is a function that runs when the promise is rejected, and receives the error.</div><br />
  <div><strong>Technical Response:</strong> The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise. The first argument of .then is a function that runs when the promise is resolved, and receives the result. The second argument of .then is a function that runs when the promise is rejected, and receives the error. If we are interested only in errors, then we can use null as the first argument ( .then(null, errorHandlingFunction); ). The then method/function returns a Promise which allows for method chaining.
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
If we are interested only in errors, then we can use null as the first argument ( .then(null, errorHandlingFunction); ). The then method/function returns a Promise which allows for method chaining.
:::

  </div>
  </div>
</details>

---

### Explain, the function and syntax of the promise catch() method/function in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The catch method returns a Promise and deals with rejected cases only. It behaves the same as calling dot then. This means that you must provide an onRejected function even if you want to fall back to an undefined result.</div><br />
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

### Explain, the function and syntax of the promise finally() method/function in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The finally method schedules a function to execute when the promise is settled, either fulfilled or rejected.</div><br />
  <div><strong>Technical Response:</strong> Just like there’s a finally clause in a regular try &#123;...&#125; catch &#123;...&#125;, there’s finally in promises. The finally() method returns a Promise. When the promise is settled, i.e. either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with. The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject. finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.
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
It can be used to perform cleanup tasks once the promise is settled as it is always executed irrespective of whether the promise is fulfilled or rejected.
:::

  </div>
  </div>
</details>

---

### What are the benefits promises over callbacks in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promises allow us to do things in the natural order. We can call .then on a Promise as many times as we want. Each time, we are adding a new subscribing function, to the “subscription list” it returns a new promise. This allows us to chain our promises without limitations of a callback. We can immediately see a few benefits over the callback-based pattern. So, promises give us better code flow and flexibility.
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
