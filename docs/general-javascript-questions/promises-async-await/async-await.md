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

### What is Async/Await in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Async/Await is a syntax in JavaScript for handling promises, allowing for writing asynchronous code in a sequential manner. It makes promise-based code easier to read and understand, improving code quality and maintainability.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}

getPost().then(data => console.log(data));
```

In this example, `getPost` is an async function that fetches a post from an API. It uses the 'await' keyword to pause execution until the fetch and the subsequent conversion to JSON are complete. The function returns a Promise, which is then handled with a .then() method to log the returned data.

  </div>
  </div>
</details>

---

### How does Async/Await differ from Promises?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Async/Await and Promises both handle asynchronous operations, but Async/Await provides a cleaner, more readable syntax. It allows writing asynchronous code that appears synchronous, improving readability and error handling compared to Promises.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here is an example showing how Async/Await and Promises are used for the same task:

Using Promises:

```javascript
function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
getPost();
```

Using Async/Await:

```javascript
async function getPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getPost();
```

---

:::note
Both examples fetch a post from an API and log it to the console. The Async/Await version is easier to read and understand, due to its synchronous-like style. Error handling is also clearer with Async/Await using try/catch blocks.
:::

  </div>
  </div>
</details>

---

### How do you define an Async function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you define an async function by prefixing the function declaration with the 'async' keyword. This informs JavaScript the function returns a promise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
}
```

  </div>
  </div>
</details>

---

### What is the benefit of using Async/Await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Async/Await in JavaScript provides a simpler, more readable syntax for asynchronous code. It makes it easier to write, understand, and debug complex Promise-based code, resulting in improved maintainability and code quality.
  </div>
  </div>
</details>

---

### Is there another option, other than explicit promises or Async/Await, to handle asynchronous code in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Callbacks and Event Listeners are alternatives to Promises and Async/Await for handling asynchronous code in JavaScript. However, they can result in "callback hell" with complex, nested code, and may lack clear error handling.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const fs = require('fs');

fs.readFile('somefile.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
```

In this example, 'readFile' is an asynchronous function that reads a file. When it's done, it calls the callback function we've provided. If there was an error reading the file, it logs the error. If not, it logs the file's contents. This is a typical pattern when using callbacks to handle asynchronous operations in JavaScript.

**Here's an example using callbacks to handle asynchronous operations:**

```javascript
function asyncOperation(callback) {
    setTimeout(() => {
        callback('Data from async operation');
    }, 1000);
}

asyncOperation((data) => {
    console.log(data); // Logs "Data from async operation" after 1 second
});
```

In this example, `asyncOperation` is a function that simulates an asynchronous operation using `setTimeout`. It accepts a callback function as an argument, and calls this function with the result of the operation once it's done.

  </div>
  </div>
</details>

---

### Can you explain how an async function works in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An async function in JavaScript automatically wraps its returned value in a Promise. If it contains 'await', execution pauses until the awaited Promise settles. If an error occurs, the returned Promise is rejected.
</div><br />
  <div><strong>Technical Response:</strong> An async function is a function declared with the async keyword, and the await keyword gets permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to configure promise chains explicitly. Async functions can contain zero or more await expressions. Await expressions make promise-returning functions seem synchronous by suspending the code execution until the returned promise is fulfilled or rejected. The resolved value of the promise gets treated as a return value of the await expression. Async and await allow you to wrap asynchronous code in regular try/catch statements.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> async function name([param[, param[, ...param]]]) &#123; statements &#125;;<br /><br />

  <div></div>

**Here's an example to explain how an async function works in JavaScript:**

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchData();
```

In this example, `fetchData` is an async function. The 'async' keyword tells JavaScript that this function will return a Promise. Within the function, 'await' is used to pause execution until the fetch Promise and the subsequent json conversion Promise are both settled. If an error occurs during the fetch or json conversion, the function will catch it and log it to the console.

  </div>
  </div>
</details>

---

### What does the await keyword do in asynchronous JavaScript code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the 'await' keyword, used within an async function, pauses execution until the Promise it's awaiting is settled (either resolved or rejected), then resumes execution, returning the Promise's outcome.
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

  console.log(result); // "done!"
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
  <div><strong>Interview Response:</strong> No, the 'await' keyword can only be used within an async function in JavaScript. If used outside an async function, a syntax error will be thrown. However, it can await any Promise, not just those from async functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of trying to use 'await' in a regular function.

```javascript
function regularFunction() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // SyntaxError: await is only valid in async function
    console.log(data);
}

regularFunction();
```

In this example, we're trying to use 'await' within a regular function, not an async function. This will cause a SyntaxError, because 'await' is only valid inside async functions. This code will not work. The 'await' keyword can only be used within an async function.

---

:::warning
We may get this error if we forget to put async before a function. As said, await only works inside an async function.
:::

  </div>
  </div>
</details>

---

### How do you handle errors with Async/Await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Errors with Async/Await in JavaScript are handled using try/catch blocks. 'try' executes async code, and if an error occurs, control is passed to 'catch' to handle the error.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
async function example() {
  try {
    await someAsyncOperation();
  } catch (error) {
    console.error(error);
  }
}
```

  </div>
  </div>
</details>

---

### What happens when an error occurs in an Async function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When an error occurs in an async function in JavaScript, the function rejects the promise it returned with the error. This error can be caught and handled using a .catch() method or a try/catch block.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of what happens when an error occurs in an async function in JavaScript:

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchData();
```

In this example, the URL for the fetch request is invalid, so an error occurs when we try to fetch from it. Because the error occurs inside an async function, it's caught by the catch block and logged to the console. If there was no catch block, the Promise returned by `fetchData` would be rejected with the error.

  </div>
  </div>
</details>

---

### How does the await keyword work in top-level code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Top-level await is allowed in JavaScript modules. This means you can use 'await' outside of async functions in module code, enabling you to await Promises at the top level of your program without wrapping them in async functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of how 'await' can be used in top-level code in JavaScript, provided your environment supports ECMAScript 2022 or later:

```javascript
// Assuming fetchJson is a function that returns a promise
import { fetchJson } from './myModule.js';

const data = await fetchJson('https://jsonplaceholder.typicode.com/posts/1');
console.log(data);
```

In this example, the 'await' keyword is used at the top level of a module, outside of any async function. It pauses the execution of the module until the Promise returned by `fetchJson` is fulfilled, and then logs the resulting data.

---

:::note
You should note that a new feature of the V8 engine allows top-level await in JS modules, but this should not be mistaken for a fix outside of modules or Node.js.
:::

  </div>
  </div>
</details>

---

### Does await accept JavaScript thenables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the 'await' keyword in JavaScript accepts Thenables (objects with a 'then' method). It will convert a Thenable into a Promise, effectively allowing any Thenable to be awaited, not just native Promises.
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

### Do classes allow asynchronous class methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, classes in JavaScript allow asynchronous class methods. You can declare an async method within a class by using the 'async' keyword, just like with regular functions, allowing 'await' to be used within them.
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
  <div><strong>Interview Response:</strong> If a Promise is rejected, using 'await' on it will throw the rejection reason as an error. This error can be caught and handled using a try/catch block in the async function where 'await' is used.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that shows what happens when a Promise is rejected in an async function:

```javascript
async function fetchWithRejection() {
    try {
        // This Promise is immediately rejected with the string 'An error occurred.'
        const response = await Promise.reject('An error occurred.');
        console.log(response);
    } catch (error) {
        console.error('Caught an error:', error); // Logs 'Caught an error: An error occurred.'
    }
}

fetchWithRejection();
```

In this example, we're awaiting a Promise that is immediately rejected. Because 'await' throws any rejections as errors, the rejection is caught by the catch block and logged to the console. If there was no catch block, the Promise returned by `fetchWithRejection` would be rejected with the error.

**This is a simplified example to show the difference between throwing an error vs using Promise.reject().**

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

### Is there a way, other than explicitly throwing an error, to handle errors in async functions dynamically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the .catch() method on the Promise returned by the async function. It will catch any errors thrown inside the function, including those caused by rejected Promises awaited within the function.</div><br />
  <div><strong>Technical Response:</strong> Yes, two approaches can be used, including the try…catch method commonly used with promises. We can catch that error using try..catch, the same way as a regular throw. In the case of an error, the control jumps to the catch block. <br /><br />We can also wrap multiple lines to ensure handling of multiple error handling. If we don’t have a try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it. We can also catch such errors using a global unhandledrejection event handler.
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
    console.log(err);
  }
}

f();

// Appending catch to an async function
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(console.log); // TypeError: failed to fetch // (*)
```

  </div>
  </div>
</details>

---

### What is the difference between async/await and then/catch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both Async/Await and then/catch handle Promises in JavaScript. Async/Await provides a cleaner, more synchronous-looking syntax, improving readability. Then/catch uses chaining, which can result in deeply nested, harder-to-read code. Both handle errors differently.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are examples illustrating the difference between async/await and then/catch:

**Using then/catch:**

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

**Using async/await:**

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
```

Both examples accomplish the same task, but the async/await version has a more synchronous-like, cleaner syntax and provides easier error handling using try/catch blocks.

  </div>
  </div>
</details>

---

### Can you use Async/Await with synchronous code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use Async/Await with synchronous code in JavaScript. However, using 'await' on non-Promise code will simply return the value immediately, without creating an asynchronous operation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example showing how you might use async/await with synchronous code:

```javascript
function calculateSum(a, b) {
    return a + b;
}

async function calculateAndLogSum() {
    const sum = await calculateSum(5, 10);
    console.log(sum); // Logs 15
}

calculateAndLogSum();
```

In this example, `calculateSum` is a synchronous function, but it's used with 'await' inside an async function. This works, but it's unnecessary - the 'await' keyword doesn't have any effect because `calculateSum` doesn't return a Promise. It would be more appropriate to use 'await' with asynchronous code.

  </div>
  </div>
</details>

---

### What should you be aware of when using Async/Await with synchronous code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When using Async/Await with synchronous code, we should be aware that 'await' will block execution until the Promise resolves, potentially making the synchronous code run slower. Use 'await' judiciously to prevent unnecessary blocking.
  </div>
  </div>
</details>

---

### Can you use Async/Await with XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can wrap XMLHttpRequest in a Promise and then use Async/Await. However, it's more common to use Async/Await with modern Fetch API or Axios, which return Promises natively and offer more features and better error handling.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function fetchData() {
    try {
        const data = await makeRequest('GET', 'https://api.example.com/data');
        console.log(data);
    } catch (err) {
        console.error('Error:', err.statusText);
    }
}

fetchData();
```

In this example, `makeRequest()` function returns a Promise that resolves or rejects based on the XMLHttpRequest's response. The `fetchData()` function is an async function that awaits the response from `makeRequest()`. If the request is successful, it logs the response; if it fails, it logs the error.

---

:::note
However, if you're working in a modern JavaScript environment, the Fetch API with async/await would be more recommended than XMLHttpRequest, as it's more flexible and simpler to use.
:::

  </div>
  </div>
</details>

---

### How do you handle timeouts with Async/Await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can handle timeouts with Async/Await by creating a promise that rejects after a certain amount of time, and use Promise.race to race your async function against this timeout promise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timed out after ${ms} ms`));
        }, ms);
    });
}

async function fetchWithTimeout(resource, options) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);

    return response;
}

async function fetchData() {
    try {
        const res = await fetchWithTimeout('https://api.example.com/data', { timeout: 5000 });
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('Fetch error: ', error.message);
    }
}

fetchData();
```

In this example, the `fetchWithTimeout()` function will attempt to fetch data from a resource, but if it doesn't get a response within the specified timeout (in milliseconds), it will abort the request and throw an error. The `fetchData()` function catches this error and logs it. This allows you to handle timeout errors in a more elegant and efficient way.

  </div>
  </div>
</details>

---
