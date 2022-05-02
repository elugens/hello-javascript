---
title: Error Handling with Promises
description: Promises Chaining is a way to chain promises together. How is error handling achieved with promises in JavaScript? Pass Your Next Frontend Interview
sidebar_position: 4
sidebar_label: Error / Promises
keywords:
  - error handling
  - javascript promises
  - promises
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
  - error handling
  - javascript promises
  - promises
  - interview answers
  - interview questions
---

<head>
  <title>Error Handling with Promises | HelloJavaScript.info</title>
</head>

**Promises/Async/Await: Error / Promises**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How is error handling achieved with promises in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a promise rejects, the control gets sent to the nearest rejection handler. An error may occur while attempting to return a promise. The catch method is the simplest way to handle error handling. The dot catch does not have to be instant, and it might emerge after one or more dot thens.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('https://no-such-server.blabla') // rejects
  .then((response) => response.json())
  .catch((err) => alert(err)); // TypeError: failed to fetch (the text may vary)
```

  </div>
  </div>
</details>

---

### What is an implicit try…catch concerning promises in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The code of a promise executor and promise handlers have an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection. This outcome happens not only in the executor function but also in its handlers. If we throw inside a .then handler, that means a rejected promise, so the control jumps to the nearest error handler. This outcome happens for all errors, not just those caused by the throw statement, including programming errors.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(alert); // Error: Whoops!

// Works exactly the same as this:

new Promise((resolve, reject) => {
  reject(new Error('Whoops!'));
}).catch(alert); // Error: Whoops!

// Example in dot then
new Promise((resolve, reject) => {
  resolve('ok');
})
  .then((result) => {
    throw new Error('Whoops!'); // rejects the promise
  })
  .catch(alert); // Error: Whoops!
```

  </div>
  </div>
</details>

---

### In a regular try..catch, we can analyze the error and maybe rethrow it if we can't handle it. Is the same thing possible for promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the same thing is possible for promises. If we throw inside .catch, the control goes to the next closest error handler, and if we handle the error and finish usually, it continues to the next closest successful .then handler.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
})
  .catch(function (error) {
    alert('The error is handled, continue normally');
  })
  .then(() => alert('Next successful handler runs'));
```

  </div>
  </div>
</details>

---

### What happens when an error is unhandled in a promise?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In practice, something has gone wrong, just like with regular unhandled code errors. The script terminates with an error message on the console. Unhandled promise rejections behave similarly, and the JavaScript engine monitors such rejections and emits a global error in such cases. We may catch such errors in the browser by utilizing the event `unhandledrejection`.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
window.addEventListener('unhandledrejection', function (event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
  throw new Error('Whoops!');
}); // no catch to handle the error
```

  </div>
  </div>
</details>

---
