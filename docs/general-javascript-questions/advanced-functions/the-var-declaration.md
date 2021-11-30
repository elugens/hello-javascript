---
title: Var Declaration
sidebar_position: 4
---

# Var Declaration

**Advanced Functions: Var Declaration**

<head>
  <title>Var Declaration - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the difference between var and let declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared, while variable declared with var has the global scope.</div><br />
  <div><strong>Technical Response:</strong> The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared, while variable declared with var has the global scope. So, we can say that var is rather a keyword which defines a variable globally regardless of block scope. This gives var some odd behaviors when compared to let. In its global state it can be re-declared, where let will simply throw an error.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(window.a); // undefined
console.log(window.b); // 'world'
var a = 'hello';
var a = 'world'; // No problem, 'hello' is replaced.
let b = 'hello';
let b = 'world'; // SyntaxError: Identifier 'b' has already been declared
```

  </div>
  </div>
</details>

---

### Is the var declaration block scoped or globally scoped?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variables, declared with var, are either function-scoped or globally-scoped. They are visible through blocks. So, technically they have no originating scope (besides function blocks) in JavaScript.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using the OLD var
if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

// Using the modern let
if (true) {
  let test = true; // use "let"
}

alert(test); // ReferenceError: test is not defined

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
  <div><strong>Interview Response:</strong> If a code block is inside a function, then var becomes a function-level variable. Once, the var is used inside of a function, the function takes ownership of the var.
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

  alert(phrase); // works
}

sayHi();
alert(phrase); // ReferenceError: phrase is not defined
```

:::note
This is part of the old rules in JavaScript when there was no lexical environment.
:::

  </div>
  </div>
</details>

---

### What happens when you redeclare a var in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we redeclare var in the global space, then JavaScript ignores it as an error and allows the new value to overwrite the old one.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var user = 'Pete';

var user = 'John'; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user); // John

// user-declared twice: error
let user;
let user; // SyntaxError: 'user' has already been declared
```

:::note
If, we try to do this with the let declaration it will result in an error, because JavaScript does not allow “let” to have multiple variables of the same name.
:::

  </div>
  </div>
</details>

---

### Explain, what is hoisting in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hoisting is JavaScript's default behavior of moving declarations to the top. It should be noted that they are not initialized, but they are put into memory without their assignments.</div><br />
  <div><strong>Technical Response:</strong> Hoisting is JavaScript's default behavior of moving declarations to the top, but not initialized. The behavior of hoisting is common when var is declared after its assignment. JavaScript only hoists declarations, not initializations. In fact, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase but stay exactly where you typed them in your code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Hoisting (put into memory) - Declarations are hoisted, but assignments are not.<br /><br />

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

### What is a (IIFE) immediately invoked function expression and why is it used with the old var?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An IIFE or Immediately Invoked Function Expression is a JavaScript function that runs as soon as it is defined. There are at least five variations of their implementation that we should be familiar with.</div><br />
  <div><strong>Technical Response:</strong> In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is not something we should use in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see it in code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> IIFE<br /><br />

  <div></div>

```js
// Ways to create IIFE in JavaScript

(function () {
  alert('Parentheses around the function');
})();

(function () {
  alert('Parentheses around the whole thing');
})();

!(function () {
  alert('Bitwise NOT operator starts the expression');
})();

+(function () {
  alert('Unary plus starts the expression');
})();
```

:::note
It is not something we should use in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see it in code.
:::

  </div>
  </div>
</details>

---

### Does JavaScript allow function declarations to be called immediately?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript does not allow Function Declarations to be called immediately. It will result in a syntax error.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// syntax error because of parentheses below
function go() {

}(); // <-- can't call Function Declaration immediately

```

  </div>
  </div>
</details>

---
