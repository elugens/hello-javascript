---
title: JavaScript Specials
sidebar_position: 18
---

# JavaScript Specials

**JavaScript Fundamentals: JavaScript Specials**

<head>
  <title>JavaScript Specials - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How does JavaScript see, view, or treat line-breaks?

**Interview Answer:** JavaScript treats line-breaks as a delimiter and uses automatic semicolon insertion to close individual statements. Most code style guides agree that we should put a semicolon after each statement.

Example:

```js
alert('Hello'); // automatic semicolon inserted by the JavaScript engine

alert('World');
```

Source: <https://javascript.info/javascript-specials#code-structure>

### Describe the proper way to enforce strict mode in JavaScript?

**Interview Answer:** To enforce strict mode we must use the “use strict;” directive placed at the top of our code or function body.

**Technical Answer:** In JavaScript, is enforced by using the directive “use strict;”. The directive must be at the top of a script or at the beginning of a function body. Without "use strict", everything still works, but some features behave in the old fashion, “compatible” way. We would generally prefer the modern behavior.

Example:

```html
<script>
  'use strict;'; // Your first line of code starts here...
</script>
```

Source: <https://javascript.info/javascript-specials#strict-mode>

### What can a variable name include in JavaScript?

**Interview Answer:** Variables can include letters and digits, but the first character cannot be a digit. Characters $ and \_ are normal and acceptable to use in certain cases. Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.

Source: <https://javascript.info/javascript-specials#variables>

### Are JavaScript variables statically or dynamically typed?

**Interview Answer:** JavaScript variables are dynamically typed and do not require type declaration unlike statically typed languages. This means that variable data types in JavaScript are unknown at run-time.

Example:

```js
let x = 5;

x = 'John';
```

Source: <https://javascript.info/javascript-specials#variables>

### What is the only operator with three parameters (arguments)?

**Interview Answer:** The only operator with three parameters is the ternary ( ? ) conditional operator.

Example:

```js
var age = 26;

var beverage = age >= 21 ? 'Beer' : 'Juice'; // ( ? ) conditional operator

console.log(beverage); // "Beer"
```

Source: <https://javascript.info/javascript-specials#operators>

### Name three types of JavaScript functions that are commonly used in application development?

**Interview Answer:** The three main types of functions commonly used in JavaScript application development include the function declaration, expression, and arrow function.

Example:

```js
// function declaration

function sum(a, b) {
  let result = a + b;

  return result;
}

// Function expression

let sum = function (a, b) {
  let result = a + b;

  return result;
};

// Arrow function

// expression at the right side

let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:

let sum = (a, b) => {
  // ...

  return a + b;
};

// without arguments

let sayHi = () => alert('Hello');

// with a single argument

let double = (n) => n * 2;
```

Source: <https://javascript.info/javascript-specials#functions>
