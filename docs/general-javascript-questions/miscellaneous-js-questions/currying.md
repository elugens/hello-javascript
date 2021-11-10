---
title: Currying
sidebar_position: 3
---

# Currying

**Miscellaneous: Currying**

<head>
  <title>Currying - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is currying in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying is an advanced technique of working with functions. It is used not only in JavaScript, but in other languages as well. Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). Currying does not call a function. It just transforms it. Currying allows us to easily get partials.
</div>
  </div>
</details>

Example:

```js
function curry(f) {
  // curry(f) does the currying transform

  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3
```

Source: <https://javascript.info/currying-partials>

### What is the main rule of currying functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying requires the function to have a fixed number of arguments. A function that uses rest parameters, such as f(...args), can’t be curried this way.
</div>
  </div>
</details>

Example: Advanced Currying

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

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
```

Source: <https://javascript.info/currying-partials>
