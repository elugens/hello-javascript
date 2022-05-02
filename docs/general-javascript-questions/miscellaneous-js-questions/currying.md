---
title: Currying in JavaScript
description: Currying is a technique that allows us to create functions that take multiple arguments. JavaScript Interview Questions & Answers
sidebar_position: 3
sidebar_label: Currying
keywords:
  - currying
  - currying in javascript
  - currying function
  - functions
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
  - currying
  - currying in javascript
  - currying function
  - interview answers
  - interview questions
---

<head>
  <title>Currying | JavaScript Frontend Phone Interview Questions</title>
</head>

**Miscellaneous: Currying**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is currying in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying is an advanced procedure for working with functions. It is used not only in JavaScript but in other languages as well. Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). Currying does not call a function; it just transforms it. Currying allows us to extract partials quickly.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3
```

  </div>
  </div>
</details>

---

### What is the main rule of currying functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying necessitates that a function takes a fixed number of arguments. A function with rest parameters, such as f(...args), cannot be curried in this manner.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> This is an example of Advanced Currying.<br /><br />

  <div></div>

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
```

  </div>
  </div>
</details>

---
