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
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example to illustrate the difference between using one-letter variables versus more meaningful variable names in JavaScript:

**Using one-letter variables:**

```javascript
function calculate(a, b) {
  var c = a + b;
  return c;
}

var x = 5;
var y = 3;
var result = calculate(x, y);
console.log(result); // Output: 8
```

**Using meaningful variable names:**

```javascript
function calculateSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var firstNumber = 5;
var secondNumber = 3;
var total = calculateSum(firstNumber, secondNumber);
console.log(total); // Output: 8
```

In the second example, the use of meaningful variable names like `num1`, `num2`, `sum`, `firstNumber`, `secondNumber`, and `total` makes the code more understandable and easier to follow.

  </div>
  </div>
</details>

---

### Is it a good idea to abbreviate variable and function names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Abbreviating variable and function names can harm readability and maintainability. It's generally better to use clear, descriptive names to make your code self-explanatory and easier to understand.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Certainly! Here's an example to demonstrate the impact of abbreviating variable and function names in JavaScript:

**Bad Code:**

```javascript
function calc(a, b) {
  var res = a + b;
  return res;
}

var x = 5;
var y = 3;
var result = calc(x, y);
console.log(result); // Output: 8
```

**Good Code:**

```javascript
function calculateSum(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var firstNumber = 5;
var secondNumber = 3;
var total = calculateSum(firstNumber, secondNumber);
console.log(total); // Output: 8
```

In the second example, using descriptive names like `calculateSum`, `num1`, `num2`, `sum`, `firstNumber`, `secondNumber`, and `total` enhances code readability and improves comprehension, making it easier to understand the purpose and functionality of the code.

  </div>
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
  <div><strong>Interview Response:</strong> Callback hell refers to heavily nested callback functions making code hard to read and debug. This leads to poor code readability and increased complexity, complicating program flow and error handling.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of what is often referred to as "callback hell" in JavaScript.

```javascript
getData(function(a){
    getMoreData(a, function(b){
        getEvenMoreData(b, function(c){
            getYetMoreData(c, function(d){
                getFinalData(d, function(e){
                    console.log(e);
                });
            });
        });
    });
});
```

In this example, each function retrieves data and then calls the next function once that data is available. This leads to deeply nested code that is hard to read and maintain.

  </div>
  </div>
</details>

---

### What are some common issues that can arise from using global variables in JavaScript? How can these issues be avoided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Global variables can cause naming conflicts, and unintended mutations, and make debugging difficult. Avoid them by using local variables, closures, or module patterns, and favoring encapsulation and information hiding.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example to illustrate the problem with global variables and a potential solution in JavaScript.

**Problematic Usage of Global Variable:**

```javascript
var counter = 0; // Global variable

function incrementCounter() {
    counter++;
}

function resetCounter() {
    counter = 0;
}

incrementCounter();
resetCounter();
```

In the example above, `counter` is a global variable that could be potentially modified from anywhere in the codebase. This can lead to unexpected behaviors and bugs if the variable is altered unintentionally in some other part of the code.

**A Better Approach Using Closure:**

```javascript
function createCounter() {
    var counter = 0; // Local variable

    return {
        increment: function() {
            counter++;
        },
        reset: function() {
            counter = 0;
        },
        get: function() {
            return counter;
        }
    };
}

var myCounter = createCounter();
myCounter.increment();
console.log(myCounter.get()); // 1
myCounter.reset();
console.log(myCounter.get()); // 0
```

In the better approach, a closure is used to encapsulate the `counter` variable. It is no longer a global variable and can only be manipulated through the methods returned by `createCounter()`. This prevents unintentional modifications from other parts of the code.

  </div>
  </div>
</details>

---

### What is the problem with using 'eval()' in JavaScript and why is it considered a bad practice?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using 'eval()' can pose security risks  like code injection attacks, as it executes any JavaScript code passed to it. It also hinders performance optimizations. It's generally best to avoid 'eval()' and use safer alternatives.
</div><br />
  <div><strong className="codeExample">Consider the following example:</strong><br /><br />

  <div></div>

```javascript
var userInput = "alert('This is an alert!');";
eval(userInput);
```

In this example, `eval()` will execute the string passed into it as if it were regular JavaScript code. In this case, it creates an alert box with the message "This is an alert!".

Now, suppose the user input wasn't so innocent:

```javascript
var userInput = "alert(document.cookie);"; // This could expose sensitive information
eval(userInput);
```

In this case, if the website stores sensitive information in cookies, the `eval()` call could expose this information. This is a type of code injection attack and is one of the main reasons why the use of `eval()` is considered a bad practice. It's often better to use safer methods to parse and manipulate strings.

  </div>
  </div>
</details>

---

### How can using '==' instead of '===' lead to unexpected results in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using '==' performs type coercion, which can lead to unexpected results due to automatic type conversion. '===' checks for strict equality, ensuring both value and type match, providing more predictable comparisons.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var num = 0;
var str = "0";

console.log(num == str);  // true, because '==' performs type coercion
console.log(num === str); // false, because '===' checks for type equality as well
```

  </div>
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
</div>
  </div>
</details>

---

### Can you describe some issues that may arise from modifying built-in JavaScript objects or prototypes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modifying built-in JavaScript objects or prototypes risks introducing bugs, as changes can affect all instances of the object, causing unexpected behavior. It can also lead to compatibility issues with future code or libraries.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Consider this JavaScript code that modifies the built-in `Array` prototype.

```javascript
Array.prototype.removeFirst = function() {
    return this.shift();
};

var myArray = [1, 2, 3];
var firstElement = myArray.removeFirst(); 
console.log(firstElement); // Outputs: 1
console.log(myArray); // Outputs: [2, 3]
```

In this example, a new method `removeFirst` is added to the `Array` prototype. This allows any array to call this new method and remove the first element.

Now consider the following scenario:

```javascript
// Some third-party library code
Array.prototype.removeFirst = function() {
    console.error("removeFirst() is not supported");
};

// Your code
var myArray = [1, 2, 3];
var firstElement = myArray.removeFirst(); 
// Outputs: "removeFirst() is not supported"
```

Here, the third-party library has also modified the `Array` prototype and replaced your `removeFirst` function. This causes your code to behave unexpectedly and could be very difficult to debug.

This is a simplified example, but it shows why modifying built-in JavaScript objects or prototypes can lead to problems and is generally considered a bad practice.

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
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of improper error handling:

```javascript
try {
    let data = JSON.parse(userInput);
    // Further operations on data...
} catch(e) {
    console.log(e);
}
```

In this code, if `JSON.parse` fails, the catch block just logs the error and the program continues.

A better approach might involve error recovery, user-friendly notifications, or at least a clean failure that doesn't risk further issues.

  </div>
  </div>
</details>

---

### Can you explain why using 'setTimeout' or 'setInterval' with string arguments is considered bad practice? How can this be avoided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using strings as arguments with 'setTimeout' or 'setInterval' in JavaScript can result in security vulnerabilities and reduced code maintainability. This can be avoided by passing function references instead.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Bad Practice (Using string argument)
setTimeout("console.log('Hello, World!')", 1000);

// Good Practice (Using function argument)
setTimeout(() => {
  console.log('Hello, World!');
}, 1000);
```

  </div>
  </div>
</details>

---

### What are the downsides of using inline event handlers in JavaScript? Can you explain a better alternative?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inline event handlers mix HTML and JavaScript, reducing maintainability and readability. A better alternative is using the 'addEventListener' method to separate code and markup, adhering to the principle of separation of concerns.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML with Inline Event Handler:

```html
<button onclick="handleButtonClick()">Click me</button>
```

JavaScript with Inline Event Handler:

```javascript
function handleButtonClick() {
  // Handle button click logic
  console.log('Button clicked!');
}
```

HTML with Event Listener:

```html
<button id="myButton">Click me</button>
```

JavaScript with Event Listener:

```javascript
document.getElementById('myButton').addEventListener('click', handleButtonClick);

function handleButtonClick() {
  // Handle button click logic
  console.log('Button clicked!');
}
```

In the first example, the event handler function `handleButtonClick()` is directly defined in the HTML using the `onclick` attribute. This approach mixes the presentation (HTML) with the logic (JavaScript), making the code harder to read and maintain.

In the second example, an event listener is used to attach the `handleButtonClick` function to the button element. This promotes separation of concerns by keeping the HTML clean and moving the logic to a separate JavaScript block. It also allows for better code organization, reuse, and maintainability.

  </div>
  </div>
</details>

---

### Why is it considered bad practice to use the 'with' statement in JavaScript, and how can it lead to unexpected behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'with' statement in JavaScript can lead to ambiguity and unpredictable results, as it changes the scope chain, potentially modifying unintended variables. Its use is generally discouraged to maintain code clarity and predictability.

---

:::warning
The **with** statement is **deprecated** and no longer recommended, according to the MDN.
:::

</div>
  </div>
</details>

---

### Explain how modifying the DOM directly can lead to performance issues in JavaScript applications. What are some recommended practices to avoid these issues?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Direct DOM manipulation is costly and can lead to performance issues. To improve performance, minimize DOM changes, use document fragments for multiple changes, or use virtual DOM-based libraries like React for efficient diffing and updating.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that demonstrates how modifying the DOM directly can lead to performance issues and provides a recommended practice to avoid those issues:

```javascript
// Direct DOM modification
for (let i = 0; i < 1000; i++) {
  const element = document.createElement('div');
  element.textContent = 'Item ' + i;
  document.getElementById('container').appendChild(element);
}
```

In the above example, we are directly modifying the DOM inside a loop by creating and appending `<div>` elements to a container. This can lead to performance issues because each modification triggers reflows and repaints, which can be costly when performed frequently.

**To avoid these performance issues**, it is recommended to use a document fragment to batch DOM modifications:

```javascript
// Using document fragment for efficient DOM modification
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const element = document.createElement('div');
  element.textContent = 'Item ' + i;
  fragment.appendChild(element);
}
document.getElementById('container').appendChild(fragment);
```

In this improved example, we create a document fragment outside the loop and append the elements to the fragment. After the loop, the entire fragment is appended to the container, resulting in a single DOM modification. This approach reduces the number of reflows and repaints, leading to improved performance.

  </div>
  </div>
</details>

---

### How can poor naming conventions lead to confusion and maintenance difficulties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Poor naming conventions can make code hard to understand and debug, as they don't convey the purpose or type of variables and functions. Good names improve readability, making the code self-explanatory and easier to maintain.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that illustrates how poor naming conventions can lead to confusion and maintenance difficulties:

```javascript
// Poor naming conventions
function a(b) {
  var c = b * 2;
  return c;
}

var x = 5;
var y = a(x);
console.log(y);  // Output: 10
```

In the above example, the function `a` has a poor name that does not provide any meaningful context about its purpose or what it expects as an input. Similarly, the variable names `b` and `c` are not descriptive.

Now, let's consider an improved version with better naming conventions:

```javascript
// Improved naming conventions
function doubleNumber(number) {
  var doubledValue = number * 2;
  return doubledValue;
}

var inputNumber = 5;
var result = doubleNumber(inputNumber);
console.log(result);  // Output: 10
```

In this improved example, the function `doubleNumber` has a descriptive name that clearly conveys its purpose. The parameter `number` and the variable `doubledValue` are also named descriptively, making the code more readable and self-explanatory. This improves code understanding, reduces the chances of errors, and facilitates easier maintenance and collaboration.

  </div>
  </div>
</details>

---
