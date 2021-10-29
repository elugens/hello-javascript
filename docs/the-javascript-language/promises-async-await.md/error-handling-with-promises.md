---
title: Error / Promises
sidebar_position: 4
---

# Error handling with promises - Q&A

**Promises, async/await: Error handling with promises**

**Question: How is error handling achieved with promises in JavaScript?**

**Interview Answer:** When a promise rejects, the control jumps to the closest rejection handler. In the effort to return a promise an error may occur. The easiest way to implement error handling is to use the catch method. The .catch doesn’t have to be immediate. It may appear after one or maybe several .then.

Example:

```js
fetch('https://no-such-server.blabla') // rejects
  .then((response) => response.json())

  .catch((err) => alert(err)); // TypeError: failed to fetch (the text may vary)
```

Source: <https://javascript.info/promise-error-handling>

**Question: What is an implicit try…catch in relation to promises in JavaScript?**

**Interview Answer:** The code of a promise executor and promise handlers has an "invisible try..catch" around it. If an exception happens, it gets caught and treated as a rejection. This happens not only in the executor function, but in its handlers as well. If we throw inside a .then handler, that means a rejected promise, so the control jumps to the nearest error handler. This happens for all errors, not just those caused by the throw statement including programming errors.

Example:

```js
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(alert); // Error: Whoops!
// Works exactly the same as this:

new Promise((resolve, reject) => {
  reject(new Error('Whoops!'));
}).catch(alert); // Error: Whoops!
// Example in dot then

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then((result) => {
    throw new Error('Whoops!'); // rejects the promise
  })
  .catch(alert); // Error: Whoops!
```

Source: <https://javascript.info/promise-error-handling#implicit-try-catch>

**Question: In a regular try..catch we can analyze the error and maybe rethrow it if it can’t be handled. Is the same thing possible for promises?**

**Interview Answer:** Yes, the same thing is possible for promises. If we throw inside .catch, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the next closest successful .then handler.

Example:

```js
// the execution: catch -> then

new Promise((resolve, reject) => {
  throw new Error('Whoops!');
})
  .catch(function (error) {
    alert('The error is handled, continue normally');
  })
  .then(() => alert('Next successful handler runs'));
```

Source: <https://javascript.info/promise-error-handling#rethrowing>

**Question: What happens when an error is not handled in a promise?**

**Interview Answer:** In practice, just like with regular unhandled errors in code, it means that something has gone terribly wrong. The script dies with a message in the console. A similar thing happens with unhandled promise rejections. The JavaScript engine tracks such rejections and generates a global error in that case. In the browser we can catch such errors using the event unhandledrejection.

Example:

```js
window.addEventListener('unhandledrejection', function (event) {
  // the event object has two special properties:

  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
  throw new Error('Whoops!');
}); // no catch to handle the error
```

Source: <https://javascript.info/promise-error-handling#unhandled-rejections>
