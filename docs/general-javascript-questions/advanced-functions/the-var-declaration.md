---
title: The Var Declaration
description: The Var Declaration is a very common interview question.
sidebar_position: 4
sidebar_label: Var Declaration
---

**Advanced Functions: Var Declaration**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the difference between var and let declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary distinction between let and var is that the scope of a variable declared with let gets confined to the block it gets declared, whereas a variable created with var has global scope.</div><br />
  <div><strong>Technical Response:</strong> The main contrast between let and var is that the scope of a variable declared with let gets confined to the block it gets declared, whereas a variable created with var has global scope. As a result, we may argue that var is a keyword that declares a variable globally independent of block scope. When var gets compared to let, it exhibits some strange behavior. In its global state, it gets explicitly declared, where let throws an error.
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

### Is the var declaration block-scoped or globally scoped?

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
  <div><strong>Interview Response:</strong> If a code block is inside a function, var becomes a function-level variable. Once the var gets used inside of a function, the function takes ownership of the var.
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
This was part of the old rules in JavaScript when there was no lexical environment.
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
If we try to do this with the let declaration, it results in an error because JavaScript does not allow "let" to have multiple variables of the same name.
:::

  </div>
  </div>
</details>

---

### Explain what hoisting is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hoisting refers to JavaScript's default practice of pushing declarations to the top. We should note that they do not initialize but get held in memory without their assignments.</div><br />
  <div><strong>Technical Response:</strong> Hoisting is the default behavior of JavaScript, which moves declarations to the top but does not initialize them. The hoisting behavior gets predicted when var gets declared after its assignment since JavaScript only hoists declarations, not initializations. A precise definition of hoisting implies that variable and function declarations physically relocate to the top of your code; however, this is not the case. Instead, variable and function declarations are stored in memory during the compilation step but remain where you typed them in your code.
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

### What is a (IIFE) immediately invoked function expression, and why is it used with the old var?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An IIFE or Immediately Invoked Function Expression is a JavaScript function that runs as soon as the code defines it. We should be familiar with at least five variants of their implementation.</div><br />
  <div><strong>Technical Response:</strong> In the past, as there was only var, and it had no block-level visibility, programmers invented a way to emulate it. An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as the code defines it. We should not use it in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see them in code.
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
It is not something we should use in modern JavaScript code, but you can still find them in old scripts. So, you should know what they are when you see them in code.
:::

  </div>
  </div>
</details>

---

### Is it possible to execute Function Declarations immediately in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript does not permit the immediate execution of Function Declarations. It causes a syntax error.
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
