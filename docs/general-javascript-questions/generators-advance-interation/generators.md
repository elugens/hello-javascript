---
title: Generators
description: JavaScript generators are a way to create iterators. What is the distinction between a generator and a regular function? Frontend Developer Interview Answers
sidebar_position: 1
sidebar_label: Generators
keywords:
  - generators
  - javascript generator
  - generator
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - iterators
  - interview questions
  - interview answers
  - js
tags:
  - generators
  - javascript generator
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/GeneratorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>JavaScript Generators | Frontend Phone Interview Questions</title>
</head>

**Generators, Advanced Iteration: Generators**

<CloseAllAnswers />

---

### What is a generator in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A generator is a special kind of function that can pause and resume execution, allowing it to produce a sequence of values over time.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Full Implementation
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator); // creates: [object Generator]
```

  </div>
  </div>
</details>

---

### How do you define a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You define a generator function using the "function*" keyword, followed by the function name and parentheses.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Full Implementation
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator); // creates: [object Generator]
```

  </div>
  </div>
</details>

---

### What is the distinction between a generator and a regular function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular functions return only one value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand.</div><br />
  <div><strong>Technical Response:</strong> Regular functions return only one value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data-streams with ease. We need a special syntax construct to create a generator: function*, the so-called “generator function”. Generator functions behave differently from regular ones. When such a function gets called, it does not run its code. Instead, it returns a unique object, called “generator object”, to manage the execution.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Full Implementation
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
console.log(generator); // creates: [object Generator]
```

  </div>
  </div>
</details>

---

### Can you explain the function of the generator “next” method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The next() method returns an object with two properties, “done” and value. The done property returns false if a value exists; otherwise, true if the value returns undefined.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> generator.next(value);<br /><br />

  <div></div>

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

  </div>
  </div>
</details>

---

### What generator function creation syntax is acceptable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, we can create a generator function using the "function*" (pre-fixed implementation) keyword followed by the function name, parentheses, and curly braces enclosing the function body. Although, we can use the post-fixed implementation, it is not recommended.
</div><br />
  <div><strong>Interview Response:</strong> Two syntaxes are used to create generators, including the pre-fixed (function* f(…)) and post-fixed ( function *f(…)) function generator implementations. Both syntaxes are correct, but usually, the first syntax is preferred, as the star* denotes that it’s a generator function, it describes the kind, not the name, so it should stick with the function keyword.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Pre-generator function
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

// Post-generator function
// function *gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
```

  </div>
  </div>
</details>

---

### What differentiates a generator from an iterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A generator is a special kind of function that produces a sequence of values and can pause/resume execution, while an iterator is an object used to traverse a sequence.
</div><br />
  <div><strong>Technical Response:</strong> While custom iterators are a useful tool, their creation requires careful programming due to the need to maintain their internal state explicitly. Generator functions provide a powerful alternative, and they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. We use the function* syntax to create a new Generator function.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Iterator
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log('Iterated over sequence of size: ', result.value);
// [5 numbers returned, that took interval in between: 0 to 10]

////////// GENERATOR EXAMPLE ////////////////

function* makeRangeIterator(start = 0, end = 100, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

let generator = makeRangeIterator(1, 10, 2);

for (let num of generator) {
  console.log(num); // 1 3 5 7 9
}
```

  </div>
  </div>
</details>

---

### If you attempt to use the return keyword to return a value at the end of a generator. What happens when you iterate over the values with a for…of loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When using a for...of loop to iterate over a generator with a return statement, the loop ignores the returned value and stops when the "done" property is true.
</div><br />
  <div><strong>Technical Response:</strong> Since the generator has the done property with a false value for each value, excluding the last value of done equaling true. When you attempt to return a value instead of yielding one, the last value does not return because done is set to true. It’s because for..of iteration ignores the last value, when done: true.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3; // { value: 3, done: true} does not yield
}

let generator = generateSequence();

for (let value of generator) {
  alert(value); // 1, then 2, no 3
}
```

  </div>
  </div>
</details>

---

### Are function generators iterable in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, generator functions are iterable in JavaScript. When called, they produce a generator object which can be used to iterate through the yielded values.
</div><br />
  <div><strong>Technical Response:</strong> Generator functions do not initially execute their code when called. Instead, they return a particular type of iterator, called a Generator. The function can be called as many times as desired and returns a new Generator each time. Each generator iterates once.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* makeIterator() {
  yield 1;
  yield 2;
}

const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true;
// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
```

  </div>
  </div>
</details>

---

### What is the purpose of the "yield" keyword in generators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "yield" keyword is used in generator functions to pause execution and return a value to the caller.<br />
  </div>
  </div>
</details>

---

### Can you explain the power of the yield keyword in JavaScript generator functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "yield" keyword in JavaScript generators enables pausing function execution, returning values on-demand, and resuming later, allowing for powerful control flow and lazy evaluation.
</div><br />
  <div><strong>Technical Response:</strong> Generators are both powerful and flexible because yield is multi-functional. It not only returns the result outward but can pass a value inside the generator when we call generator.next(arg) with an argument, and that argument becomes the result of yield.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield '2 + 2 = ?'; // (*)

  alert(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value

generator.next(4); // --> pass the result into the generator
```

  </div>
  </div>
</details>

---

### What is the main difference between a regular function and a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A regular function runs to completion, while a generator function can pause its execution and be resumed later.<br />
  </div>
  </div>
</details>

---

### How do you call a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You call a generator function like a regular function, but it returns a generator object, which you can use to control the generator's execution.<br />
  </div>
  </div>
</details>

---

### What is a generator object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A generator object is an iterable created using a generator function. It generates values on the fly, allowing efficient memory usage as it produces values one at a time rather than generating them all upfront.<br />
  </div>
  </div>
</details>

---

### What is the "next" method in generator objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "next" method is used to resume the execution of a generator function, returning the next yielded value wrapped in an object with "value" and "done" properties.<br />
  </div>
  </div>
</details>

---

### Can generators be used with "for...of" loops?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, generators are iterable and can be used with "for...of" loops to iterate through the yielded values.<br />
  </div>
  </div>
</details>

---

### What is generator delegation and how is it useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generator delegation is the process of using "yield*" to delegate to another generator, allowing you to combine and reuse generator functions more easily.<br />
  </div>
  </div>
</details>

---

### Can you use "return" in a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use "return" in a generator function to signal the end of the generator and return a final value, making the "done" property true.<br />
  </div>
  </div>
</details>

---

### How can you catch errors in a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use "try-catch" blocks within the generator function, or the "throw" method on the generator object to catch errors outside the generator.<br />
  </div>
  </div>
</details>

---

### Can generators be used with async/await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, generators can be used with async/await in combination with Promises, allowing you to handle asynchronous code in a more readable manner.<br />
  </div>
  </div>
</details>

---

### Can you create an infinite sequence with generators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can create an infinite sequence by using a loop that continuously yields values within a generator function.<br />
  </div>
  </div>
</details>

---

### How can you use generators for lazy evaluation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators allow for lazy evaluation by only computing the next value in a sequence when it's requested, rather than computing all values upfront.<br />
  </div>
  </div>
</details>

---

### What is the difference between "yield" and "yield*"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> "yield" returns a single value from a generator, while "yield*" delegates to another generator or iterable, yielding all its values in sequence.<br />
  </div>
  </div>
</details>

---

### How can you use generators to implement coroutines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators can be used to implement coroutines by pausing and resuming execution between multiple generator functions, allowing for more complex control flow.<br />
  </div>
  </div>
</details>

---

### Can you use "this" within a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use "this" within a generator function, but it's discouraged since generator functions are intended to be used with "new" or "call/apply" methods.<br />
  </div>
  </div>
</details>

---

### What are some use cases for generators in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators can be used for asynchronous control flow, lazy evaluation, infinite sequences, coroutines, and code that requires complex state management.<br />
  </div>
  </div>
</details>

---

### Can you combine generators with other ES6 features, like arrow functions or classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators cannot be arrow functions, as they don't support "function*", but you can use generator functions as methods within ES6 classes.<br />
  </div>
  </div>
</details>

---
