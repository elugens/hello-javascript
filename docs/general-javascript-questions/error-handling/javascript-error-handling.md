---
title: Error Handling
sidebar_position: 1
---

# Error Handling

**Error Handling: Error handling, "try..catch"**

<head>
  <title>Error Handling: Error handling - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Briefly explain the behavior of the “try..catch” error handling process.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The try…catch construct has two main blocks, try and then catch blocks. First, the code in the try is executed on the try block. If there is no error, then it proceeds to execute and exit the code, skipping the catch. If there is an error in the try block, then the catch is invoked and the error is returned.</div><br />
  <div><strong>Technical Response:</strong>The try...catch construct has two main blocks: try, and then catch:<br /><br />
  <strong>Steps:</strong><br /><br />
  <ol>
    <li>First, the code in try &#123;...&#125; is executed.</li>
    <li>If there were no errors, then catch(err) is ignored: the execution reaches the end of try and goes on, skipping catch.</li>
    <li>If an error occurs, then the try execution is stopped, and control flows to the beginning of catch(err). The err variable (we can use any name for it) will contain an error object with details about what happened.</li>
  </ol>
  </div>
  </div>
</details>

Example:

```js
try {
  alert('Start of try runs'); // (1) <--
  lalala; // error, variable is not defined!
  alert('End of try (never reached)'); // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}
```

---

### Can you explain the how the JavaScript engine works with the “try..catch” block?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most notable part of the interaction with JavaScript engine is that the try..catch only works for runtime errors. For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.</div><br />
  <div><strong>Technical Response:</strong> The most notable part of the interaction with JavaScript engine is that the try..catch only works for runtime errors. For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript. It won’t work if the code is syntactically wrong with the "try..catch" block. The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That is because the engine cannot understand the code. So, try..catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.
  </div>
  </div>
</details>

Example:

```js
try {

    {{{{{{{{{{{{ // Syntax error will be invoked and not caught by catch handler

} catch(e) {

    alert("The engine can't understand this code, it's invalid");

}
```

---

### Does the “try..catch” block work synchronously or asynchronously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript try..catch works synchronously when executed. We cannot use asynchronous methods or functions inside of the try block, because the code is set to execute later, while the catch has already finished. The code will die inside of the try block.</div><br />
  <div><strong>Technical Response:</strong> The JavaScript try..catch works synchronously when executed. If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it. That’s because the function itself is executed later, when the engine has already left the try..catch construct. To catch an exception inside a scheduled function, try..catch must be inside that function.
  </div>
  </div>
</details>

Example:

```js
try {
  setTimeout(function () {
    noSuchVariable; // script will die here
  }, 1000);
} catch (e) {
  alert("won't work");
}

//////// HOW TO FIX THIS ////////

// try..catch must be called inside of the setTimeout function

setTimeout(function () {
  try {
    noSuchVariable; // try..catch handles the error!
  } catch {
    alert('error is caught here!');
  }
}, 1000);
```

---

### How does the JavaScript error object work inside the try..catch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For all built-in errors, the error object has two main properties including the name and message properties. The err.name reflects the name of the error like an undefined variable, which returns a ReferenceError. The err.message returns a text based message reflecting the error details.</div><br />
  <div><strong>Technical Response:</strong> When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch. For all built-in errors, the error object has two main properties including the name and message properties. The err.name reflects the name of the error like an undefined variable, which returns a ReferenceError. The err.message returns a textual message reflecting the error details. In addition to the name and message properties, there are other non-standard properties available in most environments.
  </div>
  </div>
</details>

:::note
In addition to the name and message properties, there are other non-standard properties available in most environments.
:::

Example:

```js
try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  // Can also show an error as a whole

  // The error is converted to string as "name: message"

  alert(err); // ReferenceError: lalala is not defined
}
```

---

### Explain, what the stack error object property does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The error object stack property returns a string with information about the sequence of nested calls that led to the error within the current call stack. It is commonly used for JavaScript debugging purposes and helps to resolve issues within the code.
</div>
  </div>
</details>

Example:

```js
try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
}
```

---

### What does the throw operator do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, the throw operator/statement throws a user-defined exception. Execution of the current function will stop and control will be passed to the first catch block in the call stack.
</div>
  </div>
</details>

:::note
If no catch block exists among caller functions, the program will terminate. JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others. We can use them to create error objects as well.
:::

Example:

```js
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);

  // expected output: "Parameter is not a number!"
}

///////////////////////////////////

// Standard errors

let error = new Error(message);

// or

let error = new SyntaxError(message);

let error = new ReferenceError(message);

// ...

///////////////////////////////////

// Standard error use

let error = new Error('Things happen o_O');

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

---

### What does it mean to rethrow an error in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When dealing with errors, handling them at the perimeter of your application is not always sufficient. By the time, the error bubbles up, we have often lost a lot of the context in which the error was thrown. As such, people will sometimes catch an error, record it locally in some way, and then rethrow it. Re-throwing is the basic concept of using a throw statement when there is no clear way to handle an error. This will maintain the original stack trace recorded by the error as you "pass it back up" the call-stack.</div><br />
  <div><strong>Technical Response:</strong>In JavaScript, there is no special "rethrow" keyword. You simply throw() the error that you caught. This will maintain the original stack trace recorded by the error as you "pass it back up" the call-stack.<br /><br />
  <strong>The “re-throwing” technique can be explained in more detail as:</strong><br /><br />
  <ol>
    <li>Catch gets all errors.</li>
    <li>In the catch(err) &#123;...&#125; block we analyze the error object err.</li>
    <li>If we don’t know how to handle it, we do throw err.</li>
  </ol>
  </div>
  </div>
</details>

Code Example:

```js
let json = '{ "age": 30 }'; // incomplete data
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }

  blabla(); // unexpected error
  alert(user.name);
} catch (e) {
  if (e instanceof SyntaxError) {
    alert('JSON Error: ' + e.message);
  } else {
    throw e; // rethrow (*)
  }
}
```

---

### How does the try..catch..finally function in JavaScript error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the try..catch..finally statement works in an ordered fashion. The first try block is where code execution happens. The catch statement executes if there is an exception in thrown in the try block. The finally statement block is all code that is ran after try and catch statements are completed. If, the try block executes without errors, then the finally block is executed. If the try statement results in an error, it passes the error to the catch block and then an only then does the finally statement run.
</div>
  </div>
</details>

Example:

```js
try {
  //... try to execute the code ...
} catch (e) {
  //... handle errors ...
} finally {
  //... execute always ...
}
```

---

### Are variables localized inside of the “try..catch..finally” blocks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, as with everything in curly brackets (&#123;...&#125;) variables are localized to the “try..catch..finally” blocks individually. If, a variable is declared with one of the blocks then it is only accessible within that block.
</div>
  </div>
</details>

Example:

```js
let hello2 = 'Hello, JavaScript';

try {
  let hello = 'hello';

  console.log(hello); // returns "hello"
} catch (e) {
  console.log(e.message);
} finally {
  console.log(hello); // ReferenceError: hello is not defined
  console.log(hello2); // returns "Hello, JavaScript" from the global variable
}
```

console.log(hello); // ReferenceError: hello is not defined

---

### Errors can happen in any part the JavaScript environment including the global space. Is there a way to handle errors in the global window environment?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the global handler (global catch) window.onerror that is part of the Web API.</div><br />
  <div><strong>Technical Response:</strong> Yes, we can use the global handler (global catch) window.onerror that is part of the Web API. The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events. Error events are fired at various targets for different kinds of errors such as runtime errors or when a resource (such as an img or script tags) fails to load. Installing a global error event handler is useful for automated collection of error reports.
  </div>
  </div>
</details>

Syntax: `window.onerror = function(message, source, lineno, colno, error) { ... };`

Example:

```js
window.onerror = function (message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // Whoops, something went wrong!
}

readData();
```

---
