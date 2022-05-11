---
title: JavaScript Arrow Functions
description: Arrow Functions are a very common interview question. Arrow functions are a
  concise way to write anonymous functions.
sidebar_position: 11
sidebar_label: Arrow Functions
keywords:
  - javascript
  - arrow functions
  - interview questions
  - interview answers
tags:
  - arrow function
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AdvanceArrowSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Arrow Functions Frontend Interview Questions & Answers - JS</title>
</head>

**Advanced-JS Functions: Arrow Functions**

<CloseAllAnswers />

### What is an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An arrow function is a compact alternative to a traditional function expression but is limited, and we cannot use it in all situations. Arrow Functions lack bindings to "this" or "super", and you should not utilize them as methods. They also have no access to the arguments or the new.target keywords. You should note that arrow functions are not agreeable with the call, apply, and bind methods that generally rely on establishing scope. They cannot be used as constructors and cannot use yield within their bodies.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between
// the argument and opening body bracket
const arrowFunc = (a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
const arrowFunc = (a) => a + 100;

// 3. Remove the argument parentheses
const arrowFunc = a => a + 100;

console.log(arrowFunc(200)); // logs 300

```

  </div>
  </div>
</details>

---

### What is the meaning of Arrow functions having no "this"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions have no "this," which means that whenever we use "this" in an arrow function, it starts looking up the scope to find the value of "this". During lookup, it finds that the object does not have a "this" of its own as it goes up the global scope and bound the value of this with the global scope, where it does not find anything and returns undefined.</div><br />
  <div><strong>Technical Response:</strong> Unlike regular functions, Arrow functions do not have a this of their own; only regular functions and global scope have this of their own. Whenever "this" gets referenced in an arrow function, it begins by going up the scope to locate " this " value. Suppose the object does not have a "this" during the lookup. It goes up the global scope and binds the value of "this" to the global scope where nothing gets found.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {
  a: 'object???',
  // Arrow Function
  foo: () => {
    console.log(this.a);
  }, // this.a is referencing the global this
};

let a = 'global!!!'; // global this

obj.foo(); // returns undefined

///////////////////////////////////

let obj2 = {
  b: 'object???',
  // Property Function
  foo: function () {
    console.log(this.b);
  }, // this.a is referencing the global this
};

let b = 'global!!!'; // global this
```

  </div>
  </div>
</details>

---

### Explain why you cannot use the new.target keyword with Arrow Functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason you cannot use the new.target keyword with Arrow Functions is that it has no constructor, [[Construct]] internal method.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let X = () => {};
let Y = function () {};
// program stops here: uncaught type error
x = new X(); // X is not a constructor
y = new Y(); // Y does not execute
```

:::note
This is relatively simple, as seen by the engine's reaction to any call of "new" on arrow functions. Because "blank is not a constructor," it results in an uncaught type error.
:::

  </div>
  </div>
</details>

---

### What is the distinction between the Arrow and Regular functions for binding this?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a subtle difference between an arrow function and a regular function called with bind(this). The bind(this) syntax creates a "bound version" of a regular function, and the arrow does not create any binding. So, the arrow function does not have "this". The lookup of "this" is made the same way as a regular variable search in the outer lexical environment.
</div>
  </div>
</details>

---

### Can you explain one benefit of Arrow functions having no arguments variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, arrow functions can be used in decorators to reduce code size. You can pass the arguments variable in a wrapper because arrow functions do not bind to the arguments object. This behavior gives you the ability to reduce code and write simple abstractions in JavaScript.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred('John'); // Hello, John after 2 seconds
```

  </div>
  </div>
</details>

---

### What is the definition of a Higher-Order function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Functions that operate on other functions are called higher-order functions, either by taking them as arguments or returning them.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Higher Order Function
function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

// We can have functions that change other functions.
function noisy(f) {
  return (...args) => {
    console.log('calling with', args);
    let result = f(...args);
    console.log('called with', args, ', returned', result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

// We can even write functions that provide new types of control flow.
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, 'is even');
  });
});
// → 0 is even
// → 2 is even
```

  </div>
  </div>
</details>

---
