---
title: Arrow Functions
sidebar_position: 17
---

# JavaScript Arrow Functions - Q&A

**JavaScript Fundamentals: ARROW FUNCTIONS**

### What is the definition of an arrow function?

**Interview Answer:** An arrow function expression is a compact alternative to a traditional function expression, but it is limited and cannot be used in all situations.

Example:

```js
// Arrow Function

let sayHello = (name) => 'Hello, ' + name;

console.log(sayHello('Stacey'));

// Function Expression

let sayHello = function (name) {
  return 'Hello, ' + name;
};

console.log(sayHello('Stacey'));
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

### What are the difference and limitations between Arrow Functions and Function Expressions?

**Interview Answer:** An arrow function does not have bindings to this or super and cannot be used as a method or constructor. Also, it is not suitable for call, apply, bind.

**Technical Answer:**

Differences & Limitations:

- Does not have its own bindings to this or super and should not be used as methods.
- Does not have arguments, or new.target keywords.
- Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
- Cannot be used as constructors.
- Cannot use yield, within its body.

Code Example:

```js
'use strict';

var obj = {
  // does not create a new scope

  i: 10,

  b: () => console.log(this.i, this),

  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

### If there are no arguments in an arrow function do you need to add the paratheses?

**Interview Answer:** Yes, if there are no arguments, then the paratheses should be present in your arrow function. Otherwise, it will throw a syntax error.

Example:

```js
// Arrow Function with no argument

let sayHi = () => alert('Hello!');

sayHi(); // returns Hello!
```

Source: <https://javascript.info/arrow-functions-basics>

### Can you dynamically create a function with an arrow function?

**Interview Answer:** Yes, it is possible to dynamically create an arrow function in JavaScript. An example of this is a ternary statement that returns two anonymous arrow functions.

Example:

```js
let age = prompt('What is your age?', 18);

let welcome = age < 18 ? () => alert('Hello') : () => alert('Greetings!');

welcome();
```

Source: <https://javascript.info/arrow-functions-basics>

### What is the difference between single and multiline statement in an arrow function?

**Interview Answer:** A multiline statement must be enclosed in curly brackets, but we can omit the curly brackets in a single line statement.

Example:

```js
let sum = (a, b) => {
  // the curly brace opens a multiline function

  let result = a + b;

  return result; // if we use curly braces, then we need an explicit "return”.
};

alert(sum(1, 2)); //
// Single Line

let sum = (a, b) => a + b;

console.log(sum(3, 6)); // returns 9
```

Source: <https://javascript.info/arrow-functions-basics#multiline-arrow-functions>
