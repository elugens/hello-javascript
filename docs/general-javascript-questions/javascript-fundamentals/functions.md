---
title: Functions - JavaScript Interview Questions
description: The 7 types of functions include the function declaration, expressions, arrow function, shorthand methods, generators, constructors, and JS built-in methods.
sidebar_position: 17
sidebar_label: Functions
keywords:
  - functions
  - javascript function
  - function declaration
  - function expression
  - arrow function
  - interview
  - questions
  - answers
  - response
  - shorthand methods
  - function
  - generators
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FunctionsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Functions | JavaScript Frontend Phone Interview Questions</title>
</head>

**JavaScript Fundamentals: JavaScript Functions**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/ZpOx4FvD3hw"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### Can you name at least three types of functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the three most common types of functions include: named functions, anonymous, and arrow functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Here are examples of each type of function<br /><br />

  <div></div>

**Regular Function:**

```javascript
function greeting(name) {
    return `Hello, ${name}!`;
}
console.log(greeting("John")); // Outputs: Hello, John!
```

**Arrow Function:**

```javascript
const greeting = (name) => `Hello, ${name}!`;
console.log(greeting("John")); // Outputs: Hello, John!
```

**Anonymous Function:**

```javascript
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);
```

  </div>
  </div>
</details>

---

### What is the definition of a JavaScript Function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JavaScript function is a reusable block of code designed to perform a specific task, taking input as arguments, processing the data, and returning a result.</div><br />
  <div><strong>Technical Response:</strong> Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure — a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function square(x) {
  return x * x;
}
square(10); // 100
```

  </div>
  </div>
</details>

---

### Can you describe the basic structure of a JavaScript function declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A function declaration starts first with declaring the function keyword, then the function name, followed by a list of parameters between parentheses (comma-separated, or no parameters are okay), and finally the function body (code) inside of the curly brackets.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function name(parameters) {
  ...body...
}
```

  </div>
  </div>
</details>

---

### What is one of the primary purposes of JavaScript functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary purpose of JS functions is to avoid code duplication.</div><br />
  <div><strong>Technical Response:</strong> The primary purpose of functions is to avoid code duplication. If we ever need to change the message or the way it displays, it is enough to modify the code in one place based on the function which outputs it.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMessage(name) {
  alert('Hello, ' + name);
}

showMessage('John'); // Hello, John
showMessage('Jane'); // Hello, Jane
```

  </div>
  </div>
</details>

---

### Is there a limitation on variables declared inside a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variables declared inside a function have local scope, meaning they are limited to the function and not accessible outside of it, ensuring data encapsulation.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function.
```

  </div>
  </div>
</details>

---

### Can functions access variables outside the function body?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, functions can access variables outside their body, as they have access to the outer scope, allowing them to use variables declared in a containing scope.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let userName = 'John';

function showMessage() {
  userName = 'Bob'; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log(userName); // John before the function call

showMessage(); // Hello, Bob modified through invocation

console.log(userName); // Bob, the value was modified by the function
```

  </div>
  </div>
</details>

---

### What is a Global variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A global variable in JavaScript is defined outside any function and can be accessed and altered by any function or script throughout the program. It has global scope throughout your JavaScript code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let globalVar = "I am a global variable";

function showGlobalVar() {
    console.log(globalVar); // Outputs: I am a global variable
}

showGlobalVar();
```

  </div>
  </div>
</details>

---

### What is the Modern JavaScript rule for using Global Variables?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The modern JavaScript rule for using global variables is to minimize their usage, as they can cause conflicts and make code harder to maintain and debug. We should use local variables and function parameters to ensure proper encapsulation of data.<br /><br />
  </div>
  </div>
</details>

---

### What is the difference between a parameter and a argument in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a parameter is a variable named in the function declaration. An argument is the actual value that gets passed into the function when it is invoked.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// 'x' and 'y' are parameters in this function declaration
function add(x, y) {
    return x + y;
}

// '5' and '7' are arguments in this function invocation
console.log(add(5, 7)); // Outputs: 12
```

In the `add` function, `x` and `y` are parameters. When we call `add(5, 7)`, `5` and `7` are the arguments.

  </div>
  </div>
</details>

---

### Can you explain how to use parameters in functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, function parameters are used to pass values into a function. They are declared in the function signature and are accessible within the function body.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMessage(from, text) {
  // arguments: from, text
 console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

  </div>
  </div>
</details>

---

### What happens when a function argument does not get provided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a function argument isn't supplied during invocation, it assumes the value is “undefined” within the function, which may lead to unexpected results or errors.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMessage(from, text) {
  // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann'); // "Ann: undefined"
```

  </div>
  </div>
</details>

---

### How is a default function parameter evaluated in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a default parameter is evaluated every time the function gets called unless it's undefined or omitted.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if text is not given
  // the result becomes the value of text
}
```

  </div>
  </div>
</details>

---

### Is there a way to check for an omitted function parameter and return a new value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can check for an omitted function parameter using default parameters or a conditional expression (ternary operator) to return a new value if the parameter is undefined.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMessage(text) {
  if (text === undefined) {
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message

// Or we could use the || operator

// if text parameter is omitted or "" is passed, set it to 'empty'
function showMessage(text) {
  text = text || 'empty';
  ...
}
```

  </div>
  </div>
</details>

---

### Can you implement multiple occurrences of the return statement in a single function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use a conditional statement to handle multiple return statements (Not recommended in Modern Application development.).</div><br />
  <div><strong>Technical Response:</strong> Yes, you can implement multiple occurrences of the return statement in a single function. There are better ways to implement code without multiple return statements because it can reduce application performance.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}
```

  </div>
  </div>
</details>

---

### Why is not recommended to use multiple return statements in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using multiple return statements in JavaScript can make code harder to read, debug, and maintain, as it increases complexity and creates multiple exit points within a function.</div><br/>
  </div>
</details>

---

### Is it possible to use a return statement without a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's possible to use a return statement without a value in JavaScript, which will cause the function to exit immediately and return "undefined" as the result.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert('Showing you the movie'); // (*)
  // ...
}
```

  </div>
  </div>
</details>

---

### What does a return statement with an empty value output?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A return statement with an empty value outputs "undefined," signaling that the function completed without returning a specific value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function doNothing() {
  /* empty */
}

alert(doNothing() === undefined); // true

// An empty return is also the same as return undefined:

function doNothing() {
  return;
}

alert(doNothing() === undefined); // true
```

  </div>
  </div>
</details>

---

### What is the most important thing to remember when using a return statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most important thing when using a return statement is to ensure it clearly communicates the function's intended output, ends with a semi-colon, and terminates the function properly.</div><br />
  
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function multiply(a, b) {
    let result = a * b;
    
    // this return statement provides the intended output and ends the function
    return result;
}

console.log(multiply(5, 3)); // Outputs: 15
```

  </div>
  </div>
</details>

---

### What are good naming practices for function names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A recommended naming convention for JavaScript functions is to use a verb as a prefix to indicate an action. For instance, a function that retrieves a user's name should be named "getUserName()" using Camel Case.
  </div><br />
  <div> When writing a function, aim for accuracy and brevity in the function's name and description. This should convey the purpose and functionality of the function clearly to other developers who may read your code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

  </div>
  </div>
</details>

---

### What are best practices for the creation of a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Best practices for creating a function include defining its purpose, using descriptive naming, adding comments, testing thoroughly, and following DRY or Don't Repeat Yourself principles.
</div>
  </div>
</details>

---

### Should there be a separation of the concerns in functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, functions should have a clear separation of concerns, focusing on performing a single task, enhancing code reuse, and reducing the complexity of individual functions.
</div><br />
  <div><strong className="codeExample">Example 1:</strong> Show Prime Numbers using a label (No Separation)<br /><br />

  <div></div>

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}
```

  </div><br />
  <div><strong className="codeExample">Example 2:</strong> Show Prime Numbers (Separation of Concerns using separate functions)<br /><br />

  <div></div>

```js
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
```

  </div>
  </div>
</details>

---

### What is a callback function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a callback function is a function passed as an argument to another function and executed when a specific event or action occurs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function greeting(name) {
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting); // Outputs: Hello, [entered name]!
```

  </div>
  </div>
</details>

---

### What is a higher-order function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// A higher-order function 'operate' that takes a function as an argument
function operate(a, b, operation) {
    return operation(a, b);
}

// Functions that can be passed as arguments
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(operate(5, 3, add)); // Outputs: 8
console.log(operate(5, 3, multiply)); // Outputs: 15
```

In this code, the `operate` function is a higher-order function. It accepts two numbers and a function as arguments, and returns the result of applying the function to the numbers. The `add` and `multiply` functions can be passed as arguments to the `operate` function.

  </div>
  </div>
</details>

---

### What is a closure in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It has access to variables from the outer function even after it has returned.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('outerVariable:', outerVariable);
        console.log('innerVariable:', innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside'); // Outputs: outerVariable: outside, innerVariable: inside
```

In this code, `innerFunction` is a closure that is defined inside `outerFunction` and has access to `outerFunction`'s variables and parameters. Even when `outerFunction` has returned and its execution context is gone, `innerFunction` still has access to `outerVariable` due to closure.

  </div>
  </div>
</details>

---

### What is a pure function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a pure function is a function that always produces the same output when given the same input, without modifying any external state or data outside of its scope.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Outputs: 8
console.log(add(5, 3)); // Outputs: 8
```

In this code, add is a pure function. Given the same arguments (5 and 3), it will always return the same result (8). It doesn't rely on or modify any external state or variables, making it predictable and consistent.

  </div>
  </div>
</details>

---

### What are the benefits of using pure functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using pure functions in JavaScript ensures predictability, testability, and easier debugging, and allows for code optimization and functional programming patterns.</div><br/>
  </div>
</details>

---

### What are Side-Effects in JavaScript functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Side effects in JavaScript functions occur when the function changes state outside its scope. This can include modifying a global variable, making an HTTP request, changing the DOM, writing to a database, etc.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let count = 1;

function increaseCount(value) {
    count = count + value; // Modifying global variable 'count' is a side effect
}

increaseCount(5);
console.log(count); // Outputs: 6
```

In this code, the `increaseCount` function modifies the global variable `count`, which is a side effect. The function is therefore not pure, because it changes state outside its scope.

  </div>
  </div>
</details>

---

### Can a function declaration be called earlier than it is defined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, function declarations in JavaScript can be called before they are defined due to hoisting, a process where declarations are moved to the top of their scope.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example that demonstrates how function declarations can be invoked before they are defined due to hoisting.

```javascript
// Function invocation before declaration
console.log(greet('John')); // Outputs: Hello, John!

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
```

In this code, the `greet` function is called before it's defined. But because JavaScript hoists function declarations, it works without any errors.

  </div>
  </div>
</details>

---

### What is the scope of data in a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Data declared within a function has a local scope and is only accessible within that function.
</div><br/>
  </div>
</details>

---

### What is the purpose of the “this” keyword in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “this” keyword refers to the object that the function is a method of, or the global object if the function is not a method.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Define an object
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

// Call the greet method
person.greet();
```

  </div>
  </div>
</details>

---
