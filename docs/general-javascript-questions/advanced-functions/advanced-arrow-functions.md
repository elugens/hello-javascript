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
  <div><strong>Interview Response:</strong> An arrow function is a compact alternative to a traditional function expression but is limited, and we cannot use it in all situations.
</div><br />
  <div><strong>Technical Response:</strong> An arrow function is a compact alternative to a traditional function expression but is limited, and we cannot use it in all situations. Arrow Functions lack bindings to "this" or "super", and you should not utilize them as methods. They also have no access to the arguments or the new.target keywords. You should note that arrow functions are not agreeable with the call, apply, and bind methods that generally rely on establishing scope. They cannot be used as constructors and cannot use yield within their bodies.
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
  <div><strong>Interview Response:</strong> Arrow functions don't have their own "this" value. Instead, they inherit "this" from their surrounding scope. This makes handling context easier, as it avoids unexpected behavior related to "this".
  </div><br />
  <div><strong>Technical Response:</strong> Arrow functions have no "this," which means that whenever we use "this" in an arrow function, it starts looking up the scope to find the value of "this". During lookup, it finds that the object does not have a "this" of its own as it goes up the global scope and bound the value of this with the global scope, where it does not find anything and returns undefined.
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

### Why can’t you use the `new.target` keyword with Arrow Functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason you cannot use the new.target keyword with Arrow Functions is that it has no constructor, [[Construct]] internal method. Arrow functions don't support the new.target keyword because they're not meant for constructing objects. They're designed for simplicity and inheriting "this", making them unsuitable as constructor functions.
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

### What distinguishes arrow function from regular functions? In terms of how they bind the "this" value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions inherit "this" from their surrounding scope, while regular functions create their own "this" context. This difference makes arrow functions more predictable when handling "this" values.
</div><br/>
  <div><strong>Technical Response:</strong> There is a subtle difference between an arrow function and a regular function called with bind(this). The bind(this) syntax creates a "bound version" of a regular function, and the arrow does not create any binding. So, the arrow function does not have "this". The lookup of "this" is made the same way as a regular variable search in the outer lexical environment.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's consider an example where the behavior of 'this' differs between a regular function and an arrow function.

```javascript
let obj = {
  value: 'Hello',
  regularFunction: function() {
    console.log(this.value); // refers to obj
  },
  arrowFunction: () => {
    console.log(this.value); // refers to surrounding scope, not obj
  }
};

obj.regularFunction(); // outputs: 'Hello'
obj.arrowFunction(); // likely outputs: undefined
```

In the `regularFunction` method, `this` refers to `obj` as expected. But in `arrowFunction`, `this` does not refer to `obj`. It refers to the enclosing lexical context, which is the global scope in this case. If `value` is not defined in the global scope, this will output `undefined`.

  </div>
  </div>
</details>

---

### Can you explain one benefit of Arrow functions having no arguments variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions not having an arguments variable simplifies code, avoids confusion with multiple arguments objects, and encourages using rest parameters for handling multiple arguments.
</div><br />
  <div><strong>Technical Response:</strong> Yes, arrow functions can be used in decorators to reduce code size. You can pass the arguments variable in a wrapper because arrow functions do not bind to the arguments object. This behavior gives you the ability to reduce code and write simple abstractions in JavaScript.
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

### What is a good use case for Arrow Functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A good use case for arrow functions is in callback functions or event handlers, where concise syntax and automatic "this" binding are advantageous.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of using an arrow function as a callback function in JavaScript.

```js
let numbers = [1, 2, 3, 4, 5];

// Here, an arrow function is used as the callback function for the .map() method.
let squares = numbers.map((number) => number * number);

console.log(squares); // outputs: [1, 4, 9, 16, 25]
```

  </div>
  </div>
</details>

---

### Can arrow functions be used in decorators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions can be used in decorators to write simple abstractions, but they might not be suitable in all cases due to their lexical "this" binding, which can cause unexpected behavior.
  </div>
  </div>
</details>

---

### What is the definition of a Higher-Order function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A higher-order function is a function that either takes other functions as input (arguments) or returns a function as output. It enables more modular, reusable, and concise code.A higher-order function is a function that either takes other functions as input (arguments) or returns a function as output. It enables more modular, reusable, and concise code.
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

:::note

Functions that operate on other functions are called higher-order functions, either by taking them as arguments or returning them.

:::

  </div>
  </div>
</details>

---
