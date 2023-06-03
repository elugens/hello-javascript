---
title: Error Handling in JavaScript
description: Error Handling in JavaScript is a very important part of any web application. The try…catch construct has two main blocks, try and then catch blocks. Questions
sidebar_position: 1
sidebar_label: JS Error Handling
keywords:
  - error handling
  - handling errors
  - custom errors
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - error object
  - interview questions
  - interview answers
  - js
tags:
  - error handling
  - handling errors
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/JSErrorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Error Handling | Frontend JavaScript Interview Questions</title>
</head>

**Error Handling: Error handling, "try..catch"**

<CloseAllAnswers />

---

### What is error handling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The five primitive wrapper objects in JavaScript are: String, Number, Boolean, Symbol, and BigInt.<br />
  </div>
  </div>
</details>

---

### What is an exception in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An exception is an unexpected event or error that occurs during code execution, which can disrupt the normal flow of the program.<br />
  </div>
  </div>
</details>

---

### What is the purpose of a try-catch block?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A try-catch block is used to handle exceptions by enclosing error-prone code in a try block and catching errors in the catch block.<br />
  </div>
  </div>
</details>

---

### Can you briefly explain the behavior of the “try..catch” error handling process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The try…catch construct has two main blocks, try and then catch blocks. First, the code in the try executes on the try block. If there is no error, it proceeds to execute and exit the code, skipping the catch. If there is an error in the try block, the catch gets invoked, and the error gets returned.</div><br />
  <div><strong>Technical Response:</strong> The try...catch construct has two main blocks: try, and then catch<br /><br />
  <strong>Steps:</strong><br /><br />
  <ol>
    <li>First, the code in try &#123;...&#125; executes.</li>
    <li>If there were no errors, then catch(err) is ignored: the execution reaches the end of try and goes on, skipping catch.</li>
    <li>If an error occurs, the try execution stops, and control flows to the beginning of catch(err). The err variable (we can use any name for it) contains an error object with details about what happened.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  alert('Start of try runs'); // (1) <--

  lalala; // error, variable is not defined!

  alert('End of try (never reached)'); // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}
```

  </div>
  </div>
</details>

---

### Can you explain how the JavaScript engine works with the “try..catch” block?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most significant part of the interaction with the JavaScript engine is that the try..catch only works for runtime errors. The code must be runnable for `try..catch` to work. In other words, it should be valid JavaScript.</div><br />
  <div><strong>Technical Response:</strong> The most striking aspect of the interface with the JavaScript engine is that the try..catch statement only works for runtime failures. The code must be runnable for 'try..catch' to work. In other words, it should be legitimate JavaScript. It does not work if the code in the "try..catch" block incorrectly gets written. The JavaScript engine examines the code before running it. The errors that occur during the reading phase are called "parse-time" errors, and they are unrecoverable (from inside that code). This behavior is due to the engine's inability to comprehend the code. As a result, try...catch can only handle failures in "valid" code. Such mistakes commonly get referred to as "runtime errors" or "exceptions" in some instances.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  {{{{{{{{{{{{ // Syntax error will be invoked and not caught by catch handler
} catch(e) {
  alert("The engine can't understand this code, it's invalid");
}

```

  </div>
  </div>
</details>

---

### Does the “try..catch” block work synchronously or asynchronously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript try..catch works synchronously when executed. We cannot use asynchronous methods or functions inside the try block because the code gets set to execute later while the catch has already finished, and the code dies inside the try block.</div><br />
  <div><strong>Technical Response:</strong> The JavaScript try..catch method operates synchronously when running. If an exception occurs in "scheduled" code, such as setTimeout, try..catch does not catch it. After the engine has exited the try..catch construct, the function gets called. To catch an exception within a scheduled function, try..catch must be present.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  setTimeout(function () {
    noSuchVariable; // script will die here
  }, 1000);
} catch (e) {
  alert("won't work");
}

//////// HOW TO FIX THIS ////////

// try..catch must be called inside of the setTimeout function
setTimeout(function () {
  try {
    noSuchVariable; // try..catch handles the error!
  } catch {
    alert('error is caught here!');
  }
}, 1000);
```

  </div>
  </div>
</details>

---

### How does the JavaScript error object work inside the try..catch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The error object has two main properties for all built-in errors, including the name and message properties. The err.name reflects the name of the error like an undefined variable, which returns a ReferenceError. The err.message returns a text-based message reflecting the error details.</div><br />
  <div><strong>Technical Response:</strong> JavaScript generates an object containing its details when an error occurs. The object then gets passed as an argument to catch. The error object has two significant fields for all built-in errors: the name and message properties. Like an undefined variable, err.name reflects the name of the error and produces a ReferenceError. The err.message returns a textual message reflecting the error details. In addition to the name and message properties, other non-standard properties are available in most environments.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}
```

:::note
In addition to the name and message properties, other non-standard properties are available in most environments.
:::

  </div>
  </div>
</details>

---

### Can you explain what the stack error object property does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The error object stack property returns a string with information about the sequence of nested calls that led to the error within the current call stack. It is commonly used for JavaScript debugging purposes and helps resolve issues within the code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
}
```

  </div>
  </div>
</details>

---

### What is the purpose of the throw statement in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The throw statement is used to manually generate an error or exception in a program. It allows developers to create custom error messages and trigger the catch block of a try-catch statement, allowing for more specific and fine-grained error handling.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}

///////////////////////////////////

// Standard errors
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

///////////////////////////////////

// Standard error use
let error = new Error('Things happen o_O');

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

:::note
The program terminates if no catch block exists among caller functions. JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError, and others, and we can use them to create error objects.
:::

  </div>
  </div>
</details>

---

### What does it mean to rethrow an error in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When dealing with errors, handling them at the perimeter of your application is not always sufficient. By the time the error bubbles up, we have often lost a lot of the context in which the error gets thrown. People sometimes catch an error, record it locally somehow, and then rethrow it. Rethrowing is the basic concept of using a throw statement when there is no clear way to handle an error. This process maintains the original stack trace recorded by the error as you "pass it back up" the call stack.</div><br />
  <div><strong>Technical Response:</strong> There is no special "rethrow" keyword in JavaScript. You throw() the error you caught, which maintains the original stack trace recorded by the error as you "pass it back up" the call stack.<br /><br />
  <strong>More specifically, the "rethrowing" approach gets described as follows:</strong><br /><br />
  <ol>
    <li>All errors get caught.</li>
    <li>We examine the error object err in the catch(err)#123;...&#125; block.</li>
    <li>We throw err if we don’t know how to handle it.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }

  blabla(); // unexpected error

  alert(user.name);
} catch (e) {
  if (e instanceof SyntaxError) {
    alert('JSON Error: ' + e.message);
  } else {
    throw e; // rethrow (*)
  }
}
```

  </div>
  </div>
</details>

---

### How does the finally block work in error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The finally block in error handling executes regardless of whether an exception occurs or not. It's often used for cleanup tasks, like closing files or database connections.
</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, the try..catch..finally statement works in an ordered fashion. The first try block is where code execution happens. The catch statement executes if an exception gets thrown in the try block. The finally statement block contains all of the code executed after the try and catch statements resolve. If the try block executes without errors, the finally block gets executed. If the try statement results in an error, it passes the error to the catch block, and then and only then does the finally statement run.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  //... try to execute the code ...
} catch (e) {
  //... handle errors ...
} finally {
  //... execute always ...
}
```

  </div>
  </div>
</details>

---

### Are variables localized inside the “try..catch..finally” blocks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, as with everything in curly brackets (&#123;...&#125;), variables are localized to the “try..catch..finally” blocks individually. If a variable gets declared with one of the blocks, it is only accessible within that block.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let hello2 = 'Hello, JavaScript';

try {
  let hello = 'hello';
  console.log(hello); // returns "hello"
} catch (e) {
  console.log(e.message);
} finally {
  console.log(hello); // ReferenceError: hello is not defined
  console.log(hello2); // returns "Hello, JavaScript" from the global variable
}

console.log(hello); // ReferenceError: hello is not defined
```

  </div>
  </div>
</details>

---

### Errors can happen in any part of the JavaScript environment, including the global space. Is there a way to handle errors in the global window environment?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the global handler (global catch) window.onerror that is part of the Web API.</div><br />
  <div><strong>Technical Response:</strong> Yes, we can use the global handler (global catch) window.onerror that is part of the Web API. The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events. Error events fire at various targets for different kinds of errors, such as runtime errors or when a resource (such as an img or script tags) fails to load. Installing a global error event handler is useful for the automated collection of error reports.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> window.onerror = function(message, source, lineno, colno, error) &#123; ... &#125;;<br /><br />

  <div></div>

```js
window.onerror = function (message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // Whoops, something went wrong!
}

readData();
```

  </div>
  </div>
</details>

---

### What is the difference between throw and throw new Error?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `throw` raises any object as an exception. `throw new Error` creates a new Error object with a specific message. The latter provides stack trace for debugging, which the former may not, depending on the thrown object.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
try {
    let condition = false;

    if (!condition) {
        // throw any object
        // throw "An error occurred"; 

        // throw new Error
        throw new Error("An error occurred");
    }
} catch (error) {
    console.log(error); // Prints: Error: An error occurred
} finally {
    console.log("Finally block executed");
}

```

In this code, if `condition` is `false`, an exception is thrown. In the `catch` block, this exception is caught and its message is logged. Regardless of whether an exception occurs, the `finally` block always executes.

  </div>
  </div>
</details>

---

### What is an uncaught exception?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An uncaught exception is an error that has not been caught by any try-catch block and can lead to program termination.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
    throw new Error("An error occurred");
    // No catch block here
} finally {
    console.log("Finally block executed");
}
// Output: Uncaught Error: An error occurred
```

  </div>
  </div>
</details>

---

### What is the difference between error propagation and error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Error propagation allows errors to bubble up through the function call stack until caught. Error handling involves using strategies (like try/catch/finally blocks) to intercept, log, or respond to errors when they occur.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function functionA() {
    throw new Error("An error occurred in functionA");
}

function functionB() {
    functionA();
}

try {
    // Error propagation: The error in functionA propagates to functionB, then up to here
    functionB();
} catch (error) {
    // Error handling: The error is caught and handled here
    console.log(error.message); // Prints: An error occurred in functionA
}
```

In this example, an error is thrown in `functionA`. This error is not caught within `functionA`, so it propagates up the call stack to `functionB`. From `functionB`, the error propagates up to the `try` block. This is where the error is caught and handled.

  </div>
  </div>
</details>

---

### How can you handle asynchronous errors in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Asynchronous errors can be handled using callbacks with error-first arguments, Promises with .catch(), or async/await with try-catch blocks.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
async function asyncFunc() {
    try {
        await someAsyncOperation();
    } catch (error) {
        console.log(error);
    }
}

```

  </div>
  </div>
</details>

---

### Why is it important to properly handle errors in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Proper error handling helps maintain application stability, improves user experience, simplifies debugging, and enhances security.<br />
  </div>
  </div>
</details>

---

### What are the main error-handling mechanisms in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript primarily handles errors using `try/catch/finally` for synchronous code, callbacks with error parameters for asynchronous operations in Node.js style, and Promises combined with `async/await` for modern asynchronous operations.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

1. `try/catch/finally`:

```javascript
try {
    // code that may throw an error
    throw new Error("An error occurred");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("This always runs");
}
```

2. Callbacks with error parameters:

```javascript
fs.readFile('/nonexistentfile.txt', function(err, data) {
  if (err) {
    console.log("Error reading file:", err);
  } else {
    console.log(data);
  }
});
```

3. Promises and `async/await`:

```javascript
async function asyncFunc() {
    try {
        let data = await fetch('https://nonexistenturl.com');
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
asyncFunc();
```

In these examples, `fs` represents the Node.js file system module and `fetch` is a browser-based API used for making HTTP requests. Please replace `/nonexistentfile.txt` and `'https://nonexistenturl.com'` with valid file path and URL respectively.

  </div>
  </div>
</details>

---

### Can you explain the difference between synchronous and asynchronous error handling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Synchronous error handling occurs when code is executed in a linear, sequential manner, and errors are handled immediately when they occur. Asynchronous error handling, on the other hand, involves handling errors that may occur during the execution of asynchronous operations, such as AJAX calls or promises. Asynchronous error handling often requires different techniques, such as using error callbacks or the catch method in promises.<br />
  </div>
  </div>
</details>

---

### What are the main types of errors in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main types of errors in JavaScript are Syntax Errors, Runtime Errors, and Logical Errors. Syntax Errors occur when there is a mistake in the syntax of the code, preventing it from being parsed.<br />
  </div>
  </div>
</details>

---

### Can you explain the concept of unhandled exceptions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An unhandled exception in JavaScript is an error or exception that isn't captured by any `catch` block in the current execution context, typically causing the program to crash.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function throwsError() {
    throw new Error("An error occurred");
}

try {
    // This function invocation is not within a try block
    throwsError();
} catch (error) {
    // This catch block does not catch the error thrown by throwsError()
}

// Output: Uncaught Error: An error occurred
```

In this example, the function `throwsError()` throws an error. Because the invocation of `throwsError()` is not wrapped in a `try` block, the thrown error is an unhandled exception.

  </div>
  </div>
</details>

---

### How can developers manage unhandled exceptions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Developers can manage unhandled exceptions in JavaScript using `try/catch` blocks, Promise rejection handlers, or global error event handlers like `window.onerror` or `process.on('uncaughtException')`.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

1. `try/catch` blocks:

```javascript
try {
    throw new Error("An error occurred");
} catch (error) {
    console.log(error.message); // Handles the error
}
```

2. Promise rejection handlers:

```javascript
Promise.reject("Promise Error").catch(error => {
    console.log(error); // Handles the promise rejection
});
```

3. Global error event handlers:

```javascript
// In a browser environment
window.onerror = function(message, url, line, column, error) {
    console.log(message);
    return true; // Prevents default handling
};

// In a Node.js environment
process.on('uncaughtException', function(error) {
    console.log(error.message);
});
```

Please note that using `process.on('uncaughtException')` in Node.js should be done carefully as it can keep the process running even when it's in an unknown state. It's usually better to log the error, then gracefully shut down and restart the process.

  </div>
  </div>
</details>

---
