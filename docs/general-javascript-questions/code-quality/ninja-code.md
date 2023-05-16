---
title: Ninja Code - Bad Coding Practices
description: Ninja Code - Are one-letter variables a practical idea to use in programming?
  No, they can confuse a team and make it harder to debug. Don't be a Coding
  Ninja!
sidebar_position: 4
sidebar_label: Ninja Code
keywords:
  - coding ninja
  - ninja code
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - functions
  - objects
  - interview questions
  - interview answers
  - js
tags:
  - coding ninja
  - ninja code
  - interview answers
  - interview questions
lastmod: 2022-05-01T20:43:26.657Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/NinjaCodeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Ninja Code: Bad Coding Practices | JavaScript Frontend Phone Interview</title>
</head>

**Code Quality: Ninja Code - Bad Coding Practices**

<CloseAllAnswers />

### Are one-letter variables a practical idea to use in programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, they can confuse developers in a team environment and reduce code readability and maintainability in larger, more complex programs. Descriptive variable names are generally recommended.
</div><br/>
  </div>
</details>

---

### Is it a good idea to abbreviate variable and function names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Abbreviating variable and function names can harm readability and maintainability. It's generally better to use clear, descriptive names to make your code self-explanatory and easier to understand.
</div><br/>
  </div>
</details>

---

### Is it a good idea in JavaScript to overlap variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is not a good idea to overlap variables in JavaScript as it can cause unexpected behavior and make the code difficult to understand and maintain. Each variable should have a unique name.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = authenticateUser(); // Global declaration of the user

function render() {
  let user = anotherValue(); // Overlapping declaration of the user
  ...
  ...many lines...
  ...
  ... // <-- a programmer wants to work with a user here and...
  ...
}
```

  </div>
  </div>
</details>

---

### Can you explain the concept of 'callback hell' and how it can lead to poor code readability?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 'Callback hell' refers to nesting multiple asynchronous callbacks, leading to complex, hard-to-read code. This pyramid-like structure can make logic flow unclear and error handling difficult. Promises and async/await help mitigate this.
</div><br/>
  </div>
</details>

---

### What are some common issues that can arise from using global variables in JavaScript? How can these issues be avoided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Global variables can cause naming conflicts, and unintended mutations, and make debugging difficult. Avoid them by using local variables, closures, or module patterns, and favoring encapsulation and information hiding.
</div><br/>
  </div>
</details>

---

### What is the problem with using 'eval()' in JavaScript and why is it considered a bad practice?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using 'eval()' can pose security risks, as it executes any JavaScript code passed to it. It also hinders performance optimizations. It's generally best to avoid 'eval()' and use safer alternatives.
</div><br/>
  </div>
</details>

---

### How can using '==' instead of '===' lead to unexpected results in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using '==' performs type coercion, which can lead to unexpected results due to automatic type conversion. '===' checks for strict equality, ensuring both value and type match, providing more predictable comparisons.
</div><br/>
  </div>
</details>

---

### What is the purpose of 'use strict', and how does it help prevent bad coding practices?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 'use strict' enforces stricter parsing and error handling in JavaScript, helping to prevent common coding mistakes like undeclared variables. It can make debugging easier and code more predictable.
</div><br/>
  </div>
</details>

---

### Can you explain the concept of variable hoisting and why declaring variables at the top of their scope is recommended?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variable hoisting in JavaScript refers to the behavior of moving variable declarations to the top of their scope. Declaring variables at the top of their scope is recommended to avoid unexpected behavior and improve code readability.
</div><br/>
  </div>
</details>

---

### Can you describe some issues that may arise from modifying built-in JavaScript objects or prototypes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modifying built-in JavaScript objects or prototypes risks introducing bugs, as changes can affect all instances of the object, causing unexpected behavior. It can also lead to compatibility issues with future code or libraries.
  </div>
  </div>
</details>

---

### What are some potential performance issues that can arise from excessive use of anonymous functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Excessive use of anonymous functions can lead to memory inefficiency, as each instance creates a new function object. It can also make debugging harder, as stack traces will not provide meaningful function names.
  </div>
  </div>
</details>

---

### Can you explain a situation where using a 'for-in' loop may lead to unintended consequences?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A 'for-in' loop in JavaScript iterates over all enumerable properties, including inherited ones, which may lead to unintended results. Use 'hasOwnProperty' check or use 'for-of' loop or 'Object.keys()' for array iteration.
  </div><br />

  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
Array.prototype.newProperty = "Surprise!";

let arr = [1, 2, 3];

for(let i in arr) {
    console.log(arr[i]);
}

```

<p>This code will output:</p>

```js
1
2
3
Surprise!
```

<p>This is probably not what you intended. You only wanted to loop over the elements of the array, but because 'for-in' also loops over the prototype chain, it picked up the 'newProperty' from the Array's prototype.</p>

<p>In general, 'for-in' is best used for iterating over the properties of objects, especially when you don't know ahead of time what those properties might be. For arrays, it's usually better to use a standard 'for' loop or the 'forEach' method, both of which only operate on the array's elements, not its properties.</p>

 </div>
  </div>
</details>

---

### How does improper error handling in JavaScript contribute to bad coding practices?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Improper error handling can cause silent failures, making debugging difficult. It may also lead to unintended behavior, creating user experience issues or security vulnerabilities. Proper error handling improves code reliability and maintainability.
</div><br/>
  </div>
</details>

---

### Can you explain why using 'setTimeout' or 'setInterval' with string arguments is considered bad practice? How can this be avoided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using strings as arguments with 'setTimeout' or 'setInterval' in JavaScript can result in security vulnerabilities and reduced code maintainability. This can be avoided by passing function references instead.
</div><br/>
  </div>
</details>

---

### What are the downsides of using inline event handlers in JavaScript? Can you explain a better alternative?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inline event handlers mix HTML and JavaScript, reducing maintainability and readability. A better alternative is using the 'addEventListener' method to separate code and markup, adhering to the principle of separation of concerns.
</div><br/>
  </div>
</details>

---

### Why is it considered bad practice to use the 'with' statement in JavaScript, and how can it lead to unexpected behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'with' statement in JavaScript can lead to ambiguity and unpredictable results, as it changes the scope chain, potentially modifying unintended variables. Its use is generally discouraged to maintain code clarity and predictability.
</div><br/>

:::note

The ‘with’ statement is deprecated and no longer recommended, according to the MDN.

:::
  </div>
</details>

---

### Explain how modifying the DOM directly can lead to performance issues in JavaScript applications. What are some recommended practices to avoid these issues?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Direct DOM manipulation is costly and can lead to performance issues. To improve performance, minimize DOM changes, use document fragments for multiple changes, or use virtual DOM-based libraries like React for efficient diffing and updating.
</div><br/>
  </div>
</details>

---

### How can poor naming conventions lead to confusion and maintenance difficulties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Poor naming conventions can make code hard to understand and debug, as they don't convey the purpose or type of variables and functions. Good names improve readability, making the code self-explanatory and easier to maintain.
</div><br/>
  </div>
</details>

---
