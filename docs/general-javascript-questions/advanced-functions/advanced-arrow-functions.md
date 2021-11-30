---
title: Arrow Functions
sidebar_position: 11
---

# Arrow Functions

**Advanced-JS Functions: Arrow Functions**

<head>
  <title>Arrow Functions - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is an arrow function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An arrow function is a compact alternative to a traditional function expression but is limited and cannot be used in all situations. Arrow Functions do not have their own bindings to “this” or super and should not be used as methods. They also do not have access to the arguments or new.target keywords. It should also be noted that arrow functions are not agreeable with the call, apply, and bind methods that generally rely on establishing scope. They also cannot be used as constructors and cannot use yield, within its own body.
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

### What is the meaning of Arrow functions having no “this”?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions have no “this” means that whenever “this” is used in an arrow function, it starts looking up the scope to find the value of “this”. During lookup it will find that the object does not have a “this” of its own as it goes up to global scope and bound the value of this with the global scope, where it will not find anything and returns undefined.</div><br />
  <div><strong>Technical Response:</strong> Unlike regular functions, Arrow functions does not have a this of their own, only regular functions and global scope have this of their own. Which would mean that whenever this would be referred in arrow function, it will start looking up the scope to find the value of this, or in this case, during lookup it found, that the object is not having a this of its own, hence, it went up to global scope and bound the value of this with global scope, where it will not find anything.
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

### Explain, why you cannot use the new.target keyword with Arrow Functions.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason you cannot use the new.target keyword with Arrow Functions is that it has no constructor, [[construct]] method. The new.target keyword is used to check if the function is called as a constructor or not.
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
This is very straightforward and can be easily verified by the engine response to any invocation of new on arrow functions. It will result in an uncaught type error as “blank is not a constructor”.
:::

  </div>
  </div>
</details>

---

### What is the difference between Arrow and Regular functions binding this?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a subtle difference between an arrow function and a regular function called with bind(this). The bind(this) syntax creates a “bound version” of a regular function. The arrow does not create any binding. So, the function simply does not have “this”. The lookup of “this” is made the same way as a regular variable search in the outer lexical environment.
</div>
  </div>
</details>

---

### Can you explain one benefit of Arrow functions having no arguments variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, arrow functions can be used in decorators to reduce code size. You can pass the arguments variable in a wrapper and because arrow functions do not bind to the arguments object. This gives you the ability to reduce code and write simple abstractions in JavaScript.
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
  <div><strong>Interview Response:</strong> Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
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
