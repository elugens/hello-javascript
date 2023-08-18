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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CurryingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Currying | JavaScript Frontend Phone Interview Questions</title>
</head>

**Miscellaneous: Currying**

---

<AdSense />

---

<CloseAllAnswers />

---

### What is currying in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying is a technique in which a function is transformed into a sequence of functions, each accepting a single argument and ultimately returning the final result. It is used not only in JavaScript but in other languages as well. Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c). Currying does not call a function; it just transforms it. Currying allows us to extract partials quickly.
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

console.log(curriedSum(1)(2)); // 3
```

  </div>
  </div>
</details>

---

### What is the main rule of currying functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main rule of currying functions in JavaScript is to transform a function that takes multiple arguments into a sequence of functions that each take one argument. A function with rest parameters, such as f(...args), cannot be curried in this manner.
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

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
```

  </div>
  </div>
</details>

---

### Why is currying useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying is useful for creating specialized functions, improving code reusability, and enabling partial application of arguments for more modular and maintainable code.
  </div>
  </div>
</details>

---

### What is a partial application?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Partial application is a process of fixing a number of arguments to a function, generating a new function that accepts the remaining arguments.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's take the example of a function that adds three numbers. We'll implement it in JavaScript first without currying, and then with currying.

**Without currying:**

```javascript
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));  // Outputs: 6
```

**With currying:**

```javascript
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

console.log(add(1)(2)(3));  // Outputs: 6
```

In the curried version, each function call returns another function that takes the next argument, until all arguments have been provided and the final value can be computed.

Now, let's look at an example of partial application using the curried function.

```javascript
let addOne = add(1);
let addOneAndTwo = addOne(2);

console.log(addOneAndTwo(3));  // Outputs: 6
```

In this example, we created a new function `addOne` by calling `add(1)`. This function takes two arguments and adds one to the sum of those arguments. We then partially applied `addOne` again to create `addOneAndTwo`, which adds one and two to any number it's given.

  </div>
  </div>
</details>

---

### Can you curry built-in JavaScript functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can curry built-in JavaScript functions. Let's take the built-in `Math.pow()` function as an example. This function takes two arguments, the base and the exponent, and returns the base raised to the power of the exponent.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Yes, you can curry built-in JavaScript functions. Let's take the built-in `Math.pow()` function as an example. This function takes two arguments, the base and the exponent, and returns the base raised to the power of the exponent.

Here's how you can create a curried version of `Math.pow()`:

```javascript
function curryPow(base) {
  return function(exponent) {
    return Math.pow(base, exponent);
  };
}

const square = curryPow(2);
console.log(square(3));  // Outputs: 8
```

In this example, we've curried the `Math.pow()` function so that it takes its arguments one at a time. We've then created a new function `square` that squares a number by partially applying `curryPow` with the base set to 2.

But the above example only works for a function with two arguments. If you want to curry functions with arbitrary numbers of arguments, you need a more general currying function. Here's a simple example of how you can implement one:

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedPow = curry(Math.pow);

const square = curriedPow(2);
console.log(square(3));  // Outputs: 8
```

In this example, `curry` is a higher-order function that takes a function `fn` and returns a new function. If this new function is called with enough arguments, it calls `fn` with those arguments. Otherwise, it returns a new function that expects the rest of the arguments. This allows you to curry functions with any number of arguments.

  </div>
  </div>
</details>

---

### How does currying relate to functional programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying is a key concept in functional programming, as it promotes code reusability, modularity, and the creation of specialized functions by applying arguments incrementally. Functional programming is a style of programming that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
  </div>
  </div>
</details>

---

### What is the Arity of a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arity refers to the number of arguments a function accepts. In currying, functions are broken down into a series of functions with an arity of one.
  </div>
  </div>
</details>

---

### Can currying impact performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying can have some performance overhead due to the creation of multiple functions and closures, but the benefits of improved code modularity and reusability often outweigh these costs.
  </div>
  </div>
</details>

---

### How does currying differ from function composition?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying transforms a function into a series of single-argument functions, while function composition combines two or more functions to create a new function, using the output of one as the input for another.
  </div><br/>
  <div><strong>Technical Response:</strong> Currying and function composition are both important concepts in functional programming, but they serve different purposes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**Currying** is a process in functional programming where a function with multiple arguments is transformed into a sequence of functions, each with a single argument. The main benefit of currying is that it allows for partial application of functions, which can make code more modular and easier to reuse.

Here's an example of a curried function in JavaScript:

```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = add(5);
console.log(addFive(10));  // Outputs: 15
```

In this example, `add` is a curried function that takes two arguments one at a time. We partially apply `add` to create a new function `addFive` that adds five to its argument.

**Function composition**, on the other hand, is a technique where you create a new function by composing two or more functions, meaning you use the output of one function as the input of another.

Here's an example of function composition in JavaScript:

```javascript
function addFive(x) {
  return x + 5;
}

function double(x) {
  return x * 2;
}

function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const doubleThenAddFive = compose(addFive, double);
console.log(doubleThenAddFive(10));  // Outputs: 25
```

In this example, `doubleThenAddFive` is a new function created by composing `addFive` and `double`. It doubles its argument and then adds five to the result.

  </div>
  </div>
</details>

---

### How does currying work with higher-order functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Currying is often used with higher-order functions, as it enables the creation of specialized functions by partially applying arguments, resulting in more modular and reusable code.
  </div><br />
  <div><strong>Technical Response:</strong> Higher-order functions and currying are two core concepts in functional programming that often work together. A higher-order function is a function that takes one or more functions as arguments, returns a function as its result, or both. **Currying** is a technique where a function with multiple arguments is transformed into a series of functions each taking a single argument. Currying is often used in the context of higher-order functions. The reason is that higher-order functions often take several arguments, some of which are functions. By currying a higher-order function, you can create new functions by providing some of the arguments, possibly leaving out the function arguments to be supplied later.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's consider an example of a higher-order function, a simple `filter` function:

```javascript
function filter(arr, testFunc) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
```

In the `filter` function, `arr` is an array and `testFunc` is a function that tests each element of the array. The `filter` function returns a new array that includes only the elements for which `testFunc` returns true.

Now, let's curry the `filter` function:

```javascript
function curriedFilter(arr) {
  return function(testFunc) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (testFunc(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let filterArr = curriedFilter(arr);
let getEvenNumbers = filterArr(num => num % 2 === 0);
console.log(getEvenNumbers); // Outputs: [2, 4, 6]
```

Here, the `curriedFilter` function is a curried version of `filter`. It first takes an array and then returns a function that takes a test function. You can see how the curried function allows us to create a specialized function `getEvenNumbers` from the general `filter` function. This is how currying works with higher-order functions in practice.

  </div>
  </div>
</details>

---

### What is point-free style in functional programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Point-free style is a coding approach that emphasizes creating functions without explicitly mentioning their arguments, often using currying and function composition for more concise and readable code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of point-free style in JavaScript:

```javascript
const add = a => b => a + b;
const increment = add(1);
const double = a => a * 2;
const doubleThenIncrement = x => increment(double(x));
```

We can define `doubleThenIncrement` in a point-free style by removing the argument `x`:

```javascript
const doubleThenIncrement = compose(increment, double);
```

In this example, we're using a `compose` function, which is a common helper function in functional programming:

```javascript
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}
```

In the point-free version of `doubleThenIncrement`, the function is defined entirely in terms of other functions, without ever mentioning the arguments those functions are applied to. This is characteristic of point-free style.

  </div>
  </div>
</details>

---

### Can you use currying with async functions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, currying can be used with async functions. However, handling promises and async/await may require adapting the currying function to properly handle asynchronous behavior.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a curried async function...

```javascript
const asyncAdd = a => async b => a + b;

(async function() {
  const addFive = asyncAdd(5);
  console.log(await addFive(10));  // Outputs: 15
})();
```

In this example, `asyncAdd` is an async function that takes two arguments one at a time, and `addFive` is a new async function that adds five to its argument. When you call `addFive(10)`, it returns a Promise that eventually resolves to `15`.

Note that you need to use the `await` keyword when calling `addFive`, because it's an async function and you want to wait for the Promise it returns to resolve. Also, remember that the top-level async/await syntax is only allowed inside an async function, hence the use of an Immediately Invoked Function Expression (IIFE) in this example.

  </div>
  </div>
</details>

---

### How does currying compare to using default parameters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> While both currying and default parameters enable partial application of arguments, currying transforms a function into a series of single-argument functions, whereas default parameters allow for optional arguments in a single function.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Currying:

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(add(2)(3));  // Outputs: 5
```

Default Parameters:

```js
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet();       // Outputs: Hello, Guest!
greet('John'); // Outputs: Hello, John!
```

  </div>
  </div>
</details>

---

### Can you curry a function with a variable number of arguments?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but it requires additional logic to handle variable arguments, such as using a currying function that keeps track of the expected number of arguments before invoking the original function.
  </div>
  </div>
</details>

---
