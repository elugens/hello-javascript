---
title: The Var Declaration
description: The Var Declaration is a very common interview question.
sidebar_position: 4
sidebar_label: Var Declaration
keywords:
  - the var declaration
  - variables
  - var declaration
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
  - function object
  - functions
  - interview answers
  - interview questions
lastmod: 2022-05-01T17:44:13.207Z
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TheVarSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>The Var Declaration | JavaScript Frontend Phone Interview</title>
</head>

**Advanced Functions: Var Declaration**

---

<AdSense />

---

<CloseAllAnswers />

### What is the difference between var and let declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `var` is function-scoped and can be redeclared, while `let` is block-scoped and can't be redeclared. `var` declarations are hoisted and initialized with `undefined`, `let` declarations are hoisted but not initialized.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

<p><strong>Using `var`:</strong></p>

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable, it's redeclared
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
varTest();
```

<p><strong>Using `let`:</strong></p>

```javascript
function letTest() {
  let y = 1;
  if (true) {
    let y = 2;  // different variable, it's a new declaration
    console.log(y);  // 2
  }
  console.log(y);  // 1
}
letTest();
```

<p>In the `varTest` function, the `var` keyword allows the same variable to be redeclared and overwritten. However, in the `letTest` function, the `let` keyword creates a new variable inside the `if` block, leaving the original variable unmodified.</p>

  </div>
  </div>
</details>

---

### Is the var declaration block-scoped or globally scoped?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variables, declared with var are neither block-scoped nor globally scoped. It's function-scoped, meaning it's limited to the containing function but not confined within blocks like loops or conditionals. Technically they have no originating scope (besides function blocks) in JavaScript.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using the OLD var
if (true) {
  var test = true; // use "var" instead of "let"
}

console.log(test); // true, the variable lives after if

// Using the modern let
if (true) {
  let test = true; // use "let"
}

console.log(test); // ReferenceError: test is not defined

// Notice that ‘var message’ is in the global scope of the function
function getScope() {
  var message = 'hello';
  return message;
}

console.log(getScope()); // returns hello
console.log(message); // out of scope - ReferenceError: message is not defined
```

  </div>
  </div>
</details>

---

### How does var work inside of a function block?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The var keyword in a function block declares a local variable, accessible only within the function. Its scope is limited to the function, and its value is lost once the function execution ends.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// inside an open block (curly brackets)
{
  var phrase = 'Hello';
}

console.log(phrase); // returns "Hello"

// Inside a function block
function sayHi() {
  if (true) {
    var phrase = 'Hello';
  }

  console.log(phrase); // works
}

sayHi();
console.log(phrase); // ReferenceError: phrase is not defined
```

---

:::note
This was part of the old rules in JavaScript when there was no lexical environment.
:::

  </div>
  </div>
</details>

---

### What is the significance of using 'var' inside a for loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using 'var' inside a for loop in JavaScript declares a function-scoped variable. This can cause unintended behavior due to hoisting and sharing the variable across iterations, unlike 'let' or 'const'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example showing unexpected behavior due to 'var' having function scope:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

This will output '3' three times (3, 3, 3), not '0', '1', '2' as you might expect. `i` is shared across each iteration and the callbacks reference the same `i`.

  </div>
  </div>
</details>

---

### What happens when you redeclare a var in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we redeclare var in the global space, then JavaScript ignores it as an error and allows the new value to overwrite the old one or remain unchanged if not assigned a new value, possibly causing unintended behavior.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var user = 'Pete';

var user = 'John'; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

console.log(user); // John

// user-declared twice: error
let user;
let user; // SyntaxError: 'user' has already been declared
```

---

:::note
If we try to do this with the let declaration, it results in an error because JavaScript does not allow "let" to have multiple variables with the same name.
:::

  </div>
  </div>
</details>

---

### Can you explain what hoisting is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hoisting in JavaScript is when variable and function declarations are moved to the top of their scope during compilation, making them accessible before the actual declaration line in the code.</div><br />
  <div><strong>Technical Response:</strong> Hoisting is the default behavior of JavaScript, which moves declarations to the top but does not initialize them. The hoisting behavior is predicted when var gets declared after its assignment since JavaScript only hoists declarations, not initializations. A precise definition of hoisting implies that variable and function declarations physically relocate to the top of your code; however, this is not the case. Instead, variable and function declarations are stored in memory during the compilation step but remain where you typed them in your code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Hoisting (put into memory) - Declarations get hoisted, but assignments do not.<br /><br />

  <div></div>

```js
user = 'Pete'; // assign "Pete" value to user
var user; // declaring user after the assignment (get hoisted to the top) 

console.log(user); // returns "Pete"

// this is how it gets processed by JavaScript
var user; // <--
user = 'Pete'; // assign "Pete" value to the user

console.log(user); // returns "Pete"

// A let declaration will result in an error
user = 'Pete';
let user; // <-- let must be declared before a value is assigned

console.log(user); // ReferenceError: user is not defined
```

  </div>
  </div>
</details>

---

### Can you explain the difference between 'var' and 'let' in terms of hoisting?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both var and let are hoisted. But var is initialized with undefined upon hoisting, while let isn't initialized, causing a ReferenceError if accessed before the declaration.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are examples to illustrate the difference between 'var' and 'let' in terms of hoisting:

**1. Using 'var':**

```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```

**2. Using 'let':**

```javascript
console.log(y); // Output: ReferenceError: y is not defined
let y = 5;
console.log(y); // Output: 5
```

In the first example, `x` is hoisted and initialized with 'undefined'. In the second example, `y` is hoisted, but cannot be accessed until it's declared.

  </div>
  </div>
</details>

---

### What is an (IIFE) immediately invoked function expression, and why is it used with the old var?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An Immediately Invoked Function Expression (IIFE) is a function expression that's executed immediately after declaration. It's used with var to create local scope, preventing global scope pollution.</div><br />
  <div><strong>Technical Response:</strong> In the past, as there was only var, and it had no block-level visibility, programmers invented a way to emulate it. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as the code defines it. We should not use it in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see them in code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> IIFE with Var<br /><br />

  <div></div>

Here's an example of using 'var' with an Immediately Invoked Function Expression (IIFE):

```javascript
(function() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
})();

// Outputs: 3, 3, 3
```

In this example, `i` is declared with `var`, so it's hoisted to the top of the function scope created by the IIFE. Therefore, all of the callback functions share the same `i`.

---

:::note
It is not something we should use in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see them in code.
:::

  </div>
  </div>
</details>

---

### Is it possible to execute function declarations immediately in the same fashion as an IIFE?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, function declarations can't be immediately invoked. But you can wrap the function declaration in parentheses to create an immediately invoked function expression (IIFE).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// syntax error because of parentheses below
function go(){
  console.log('Let\'s Go!');
}(); // <-- can't call Function Declaration immediately
```

  </div>
  </div>
</details>

---
