---
title: Promise API
description: Promise API is the standard API for promises in JavaScript.
sidebar_position: 5
sidebar_label: Promise API
---

**Promises/Async/Await: Promise API**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What are the Promise class's six static methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The promise class has 6 static methods, including the promise.all, allSettled, race, any, resolve and reject methods. Of all these, Promise.all is probably the most common in practice.
</div>
  </div>
</details>

---

### Explain the function and syntax of the Promise.all static methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Promise.all() method takes an iterable of promises as an input. Then returns a single Promise that resolves to array of results, technically can be any iterable but its usually an array. This returned promise resolves when all the input's promises resolve or if the input iterable contains no promises. It rejects immediately upon any input promises rejecting or non-promises throwing an error and rejects with this first rejection message/error. The new promise resolves when all listed promises settle, and the array of their results becomes its result.
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

### How does the map method work with Promise.all static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Since the map method creates a new array populated with the results of the calling function. The map method is an excellent adhesive for the Promise.all method because it carries some of the responsibility of providing the calling function on every array element.
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

:::tip Use Case:
A common trick is to map an array of job data into an array of promises and then wrap that into Promise.all.
:::

  </div>
  </div>
</details>

---

### What happens when there is an error with the Promise.all method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones on the list. Their results get ignored.
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

### Does Promise.all allow regular values in the iterable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Promise.all(iterable) allows non-promise “regular” values in the iterable. Typically, Promise.all(...) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it is passed to the resulting array “as is”.
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

### Explain the function and syntax of the static method, Promise.allSettled?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Promise.allSettled() function produces a promise that resolves once all of the specified promises have been fulfilled or refused. This behavior happens together with an array of objects that specify the outcome of each promise. You typically use it when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you would like to know the result of each promise. In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like to reject upon any of them getting rejected immediately.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.allSettled(iterable);<br /><br />

  <div></div>

```js
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      alert(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == 'rejected') {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});

// RESULT

// [
//   {status: 'fulfilled', value: ...response...},
//   {status: 'fulfilled', value: ...response...},
//   {status: 'rejected', reason: ...error object...}
// ]
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the Promise.race static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Like Promise.all but waits only for the first settled promise and returns its result (or error). The Promise.race() method returns a promise that fulfills or rejects when one of the promises in an iterable is fulfilled or rejected, with the value or explanation derived from that promise.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Promise.race(iterable);<br /><br />

  <div></div>

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the Promise.any static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Similar to Promise.race, but waits only for the first fulfilled promise and returns its result. If all of the given promises reject, the returned promise rejects with Aggregate Error – a special error object that keeps track of all promise errors in its errors property.
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

### Explain the Promise.resolve static method's function and syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
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

### Explain the function and syntax of the Promise.reject static method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Promise.reject() method returns a Promise object that rejects for a given reason. The static Promise.reject function returns a Promise that rejects. Making reason an instance of Error is essential for debugging and selective error catching.
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
