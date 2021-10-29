---
title: Promise API
sidebar_position: 5
---

# Promise API - Q&A

**Promises, async/await: Promise API**

**Question: What are the names of the 6 static methods in the Promise class?**

**Interview Answer:** The promise class has 6 static methods including the promise.all, allSettled, race, any, resolve, and reject methods. Of all these, Promise.all is probably the most common in practice.

Source: <https://javascript.info/promise-api>

**Question: Explain, the function and syntax of the Promise.all static method?**

**Interview Answer:** The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results (it technically can be any iterable, but is usually an array) of the input promises. This returned promise will resolve when all the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error and will reject with this first rejection message / error. The new promise resolves when all listed promises are settled, and the array of their results becomes its result.

**Syntax:** Promise.all(iterable)

Example:

```js
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
// Another Example:

const promise1 = Promise.resolve(3);

const promise2 = 42;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// expected output: Array [3, 42, "foo"]
```

Source: <https://javascript.info/promise-api#promise-all>

**Question: How does the map method work with Promise.all static method?**

**Interview Answer:** Since, the map method creates a new array populated with the results of the calling function. The map method is a great adhesive for the Promise.all method because it carries some of the responsibility of providing the calling function on every array element.

**Use Case:** A common trick is to map an array of job data into an array of promises, and then wrap that into Promise.all.

Code Example:

```js
let urls = [
  'https://api.github.com/users/iliakan',

  'https://api.github.com/users/remy',

  'https://api.github.com/users/jeresig',
];

// map every url to the promise of the fetch

let requests = urls.map((url) => fetch(url));

// Promise.all waits until all jobs are resolved

Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);
```

Source: <https://javascript.info/promise-api#promise-all>

**Question: What happens when there is an error with the Promise.all method?**

**Interview Answer:** If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.

Example:

```js
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),

  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000)
  ),

  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // Error: Whoops!
```

Source: <https://javascript.info/promise-api#promise-all>

**Question: Does Promise.all allow regular values in the iterable?**

**Interview Answer:** Yes, Promise.all(iterable) allows non-promise “regular” values in the iterable. Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it is passed to the resulting array “as is”.

Example:

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }),

  2,

  3,
]).then(alert); // 1, 2, 3
```

Source: <https://javascript.info/promise-api#promise-all>

**Question: Explain, the function and syntax of the Promise.allSettled static method?**

**Interview Answer:** The Promise.allSettled() method returns a promise that resolves after all the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise. It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you would always like to know the result of each promise. In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to immediately reject upon any of them rejecting.

**Syntax:** Promise.allSettled(iterable)

Example:

```js
let urls = [
  'https://api.github.com/users/iliakan',

  'https://api.github.com/users/remy',

  'https://no-such-url',
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (\*)

  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      alert(`${urls[num]}: ${result.value.status}`);
    }

    if (result.status == 'rejected') {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});

// RESULT

// [

//   {status: 'fulfilled', value: ...response...},

//   {status: 'fulfilled', value: ...response...},

//   {status: 'rejected', reason: ...error object...}

// ]
```

Source: <https://javascript.info/promise-api#promise-allsettled>

**Question: Explain, the function and syntax of the Promise.race static method?**

**Interview Answer:** Like Promise.all but waits only for the first settled promise and gets its result (or error). The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

**Syntax:** Promise.race(iterable)

Example:

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);

  // Both resolve, but promise2 is faster
});

// expected output: "two"
```

Source: <https://javascript.info/promise-api#promise-race>

**Question: Explain, the function and syntax of the Promise.any static method?**

**Interview Answer:** Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with Aggregate Error – a special error object that stores all promise errors in its errors property.

**Syntax:** Promise.race(iterable)

Example:

```js
const promise1 = Promise.reject(0);

const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));

const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"

//////////////////////////////////

// Here is an example when all promises fail:

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ouch!')), 1000)
  ),

  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error
});
```

Source: <https://javascript.info/promise-api#promise-any>

**Question: Explain, the function and syntax of the Promise.resolve static method?**

**Interview Answer:** The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.

**Note:** This function flattens nested layers of promise-like objects (e.g. a promise that resolves to a promise that resolves to something) into a single layer. Methods Promise.resolve and Promise.reject are rarely needed in modern code, because async/await syntax makes them somewhat obsolete.

**Syntax:** Promise.resolve(value)

Example:

```js
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (\*)
  }

  return fetch(url)
    .then((response) => response.text())

    .then((text) => {
      cache.set(url, text);

      return text;
    });
}
```

Source: <https://javascript.info/promise-api#promise-resolve>

**Question: Explain, the function and syntax of the Promise.reject static method?**

**Interview Answer:** The Promise.reject() method returns a Promise object that is rejected with a given reason. The static Promise.reject function returns a Promise that is rejected. For debugging purposes and selective error catching, it is useful to make reason an instanceof Error.

**Note:** Methods Promise.resolve and Promise.reject are rarely needed in modern code, because async/await syntax makes them somewhat obsolete.

**Syntax:** Promise.reject(reason)

Example:

```js
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error('fail')).then(resolved, rejected);

// expected output: Error: fail
```

Source: <https://javascript.info/promise-api#promise-resolve>
