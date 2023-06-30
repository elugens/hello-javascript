---
title: Async/Await
description: Async/Await is a way to handle asynchronous operations in a synchronous manner. An async function is a function declared with the async keyword. Questions
sidebar_position: 8
sidebar_label: Async/Await
keywords:
  - async await
  - asynchronous programming
  - async function
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
  - async await
  - asynchronous programming
  - async function
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AsyncAwaitSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Async/Await | JavaScript Frontend Phone Interview Questions</title>
</head>

**Promises/Async/Await: Async/Await**

<CloseAllAnswers />

---

### Is there another option, other than explicit promises, to handle asynchronous code in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a special syntax to work with promises more comfortably, called “async/await”. It is surprisingly easy to understand and use.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
async function f() {
  return 1;
}
```

  </div>
  </div>
</details>

---

### Can you explain the syntax and function of an async function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An async function is a function declared with the async keyword, and the await keyword gets permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to configure promise chains explicitly. Async functions can contain zero or more await expressions. Await expressions make promise-returning functions seem synchronous by suspending the code execution until the returned promise is fulfilled or rejected. The resolved value of the promise gets treated as a return value of the await expression. Async and await allow you to wrap asynchronous code in regular try/catch statements.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> async function name([param[, param[, ...param]]]) &#123; statements &#125;;<br /><br />

  <div></div>

```js
async function f() {
  return 1;
}

f().then(alert); // 1

// explicitly return a promise
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

  </div>
  </div>
</details>

---

### What does the await keyword do in asynchronous JavaScript code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The await keyword makes JavaScript wait until that promise settles and returns its result. It's only used within an async function within regular JavaScript code, although it only gets used on its own using JavaScript modules.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let value = await promise<br /><br />

  <div></div>

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

  </div>
  </div>
</details>

---

### Is it possible to use the await keyword with regular functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we cannot use the await keyword in conjunction with a regular functions. JavaScript returns a syntax error if we try to use "await" in the non-async function.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

:::note
We may get this error if we forget to put async before a function. As said, await only works inside an async function.
:::

  </div>
  </div>
</details>

---

### How does the await keyword work on top-level code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The await keyword should not be used directly in top-level code because it is syntactically incorrect and results in an error. We can optionally wrap it in an anonymous async function to make it work properly.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();

// wrap it into an anonymous async function, like this:
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  // ..
})();
```

:::note
You should note that a new feature of the V8 engine allows top-level await in JS modules, but this should not be mistaken for a fix.
:::

  </div>
  </div>
</details>

---

### Does await accept JavaScript thenables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, similar to a promise.then, await enables us to use thenable objects (those with a callable then method). The concept is that a third-party object may or may not be a promise, but it must be promise-compatible: if it supports dot then, it may be used with await.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    console.log(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  console.log(result);
}

f();
```

  </div>
  </div>
</details>

---

### Do classes allow asynchronous class methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>Yes, prepend it with async to declare an async class method. The meaning is the same: it ensures that the returned value is a promise and enables “await”.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);

han.greeting().then(console.log); // returns Hi! I'm Han
```

  </div>
  </div>
</details>

---

### If a promise resolves with normality, then await promise returns the result. What happens in the case of rejection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the case of a rejection, it throws an error. Just as if there were a throw statement at that line. In real situations, the promise may take some time before it rejects, and in that case, there is a delay before await throws an error.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
async function f() {
  await Promise.reject(new Error('Whoops!'));
}

// …is the same as this:

async function f() {
  throw new Error('Whoops!');
}
```

  </div>
  </div>
</details>

---

### Is there a method, other than explicitly throwing an error, to catch problems in async functions dynamically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, two approaches can be used, including the try…catch method commonly used with promises. We can catch that error using try..catch, the same way as a regular throw. In the case of an error, the control jumps to the catch block. <br /><br />We can also wrap multiple lines to ensure handling of multiple error handling. If we don’t have a try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it. We can also catch such errors using a global unhandledrejection event handler.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Try...Catch
async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();

// Appending catch to an async function
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(alert); // TypeError: failed to fetch // (*)
```

  </div>
  </div>
</details>

---

### When we wait for multiple (array) promises, what can we wrap them into to ensure proper handling (resolve/reject)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we need to wait for multiple (array) promises, we can wrap them in Promise.all and then await. In the case of an error, it propagates as usual, from the failed promise to Promise.all. It becomes an exception that we can catch using try..catch around the call.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
```

  </div>
  </div>
</details>

---
