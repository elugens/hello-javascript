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
  <div><strong>Interview Response:</strong> A generator object in JavaScript is a special type of function that can pause its execution and resume later, allowing it to produce a sequence of results over time, instead of computing them at once.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const gen = idGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(typeof idGenerator); // function
```

  </div>
  </div>
</details>

---

### What is the "next" method in generator objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "next" method is used to resume the execution of a generator function, returning the next yielded value wrapped in an object with "value" and "done" properties.
  </div>
  </div>
</details>

---

### Can generators be used with "for...of" loops?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, generators are iterable and can be used with "for...of" loops to iterate through the yielded values.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* idGenerator() {
    let id = 1;
    while (id <= 5) {
        yield id++;
    }
}

for (let value of idGenerator()) {
    console.log(value); // Logs 1, 2, 3, 4, 5
}
```

  </div>
  </div>
</details>

---

### What is generator delegation and how is it useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generator delegation is the process of using "yield*" to delegate to another generator, allowing you to combine and reuse generator functions more easily.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* gen1() {
    yield 1;
    yield 2;
}

function* gen2() {
    yield* gen1();
    yield 3;
}

let generator = gen2();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
```

In this example, `gen2` delegates to `gen1` using `yield*`. So when we start iterating over `gen2`, the first two values come from `gen1`, and the third value comes from `gen2` itself.

  </div>
  </div>
</details>

---

### Can you use "return" in a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use "return" in a generator function in JavaScript. It will provide the final value for the generator and end the generator's execution, making the "done" property of the iterator object true.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function* numberGenerator() {
    yield 1;
    yield 2;
    return 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }
```

In this example, after yielding 1 and 2, the generator function returns 3 and ends its execution.

  </div>
  </div>
</details>

---

### How can you catch errors in a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can catch errors in a generator function by using a try/catch block inside the function. Alternatively, call the generator's throw() method to pass an error directly into the generator.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**1. Using a try/catch block inside the generator function:**

```javascript
function* generatorFunction() {
    try {
        yield "Start";
        throw new Error("Error occurred");
    } catch (error) {
        console.log(error.message); // Logs "Error occurred"
    }
    yield "End";
}

const gen = generatorFunction();

console.log(gen.next()); // { value: "Start", done: false }
console.log(gen.next()); // Logs "Error occurred", then { value: "End", done: false }
```

**2. Using the generator's `throw()` method:**

```javascript
function* generatorFunction() {
    try {
        yield "Start";
    } catch (error) {
        console.log(error.message); // Logs "Error thrown into generator"
        yield "Caught";
    }
    yield "End";
}

const gen = generatorFunction();

console.log(gen.next()); // { value: "Start", done: false }
console.log(gen.throw(new Error("Error thrown into generator"))); // Logs "Error thrown into generator", then { value: "Caught", done: false }
console.log(gen.next()); // { value: "End", done: false }
```

In the first example, the error is thrown and caught within the generator. In the second, the error is thrown from outside the generator and caught within it.

  </div>
  </div>
</details>

---

### Can generators be used with async/await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, generators can be combined with Promises and async/await to manage asynchronous operations. This can be achieved using libraries like co or techniques like async iterators (for-await-of).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using async iterators (for-await-of) to handle asynchronous operations in a generator.

```javascript
async function* asyncGenerator() {
    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    for (const promise of promises) {
        yield promise;
    }
}

(async function() {
    for await (const value of asyncGenerator()) {
        console.log(value); // Logs 1, 2, 3
    }
})();
```

In this example, `asyncGenerator` is an asynchronous generator that yields promises. The `for await...of` loop then waits for each of these promises to resolve before logging the resolved value. This allows you to handle asynchronous operations within a generator in a linear, easy-to-understand way.

  </div>
  </div>
</details>

---

### Can you create an infinite sequence with generators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can create an infinite sequence by using a loop that continuously yields values within a generator function.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>
  
Here's a simple example of an infinite sequence...

```javascript
function* infiniteSequence() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gen = infiniteSequence();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// This can go on indefinitely
```

In this example, the `infiniteSequence` generator will yield an infinite sequence of numbers. Because generators only calculate their yielded value when `.next()` is called, this won't cause any performance issues as long as you don't try to iterate over the entire sequence at once (which would be impossible, as it's infinite).

  </div>
  </div>
</details>

---

### How can you use generators for lazy evaluation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators allow for lazy evaluation by only computing the next value in a sequence when it's requested, rather than computing all values upfront.
  </div><br/>
  <div><strong>Technical Response:</strong> Generators in JavaScript are perfect for implementing lazy evaluation because they only compute their yielded values on demand. This means that you can have a generator that represents a large (or even infinite) sequence of values, but it only takes up a small amount of memory because it only computes values as they are needed.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using a generator for lazy evaluation...

```javascript
function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const gen = fibonacci();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
// And so on...
```

In this example, the `fibonacci` generator represents the infinite sequence of Fibonacci numbers. But even though this sequence is infinite, the generator only uses a constant amount of memory because it only computes the next Fibonacci number when `.next()` is called. This is the essence of lazy evaluation: only computing values as they are needed.

  </div>
  </div>
</details>

---

### What is the difference between "yield" and "yield*"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> "yield" returns a single value from a generator, while "yield*" delegates to another generator or iterable, yielding all its values in sequence.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function* generatorA() {
    yield 1;
    yield 2;
}

function* generatorB() {
    yield* generatorA();
    yield 3;
}

const gen = generatorB();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

In the above code, `yield*` in `generatorB` is delegating to `generatorA`.

  </div>
  </div>
</details>

---

### How can you use generators to implement coroutines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators can be used to implement coroutines by pausing and resuming execution between multiple generator functions, allowing for more complex control flow.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function* coroutine() {
    console.log('Coroutine started');
    yield 'Yield 1';
    console.log('Coroutine resumed');
    yield 'Yield 2';
    console.log('Coroutine ended');
}

const gen = coroutine();

console.log(gen.next().value); // Logs "Coroutine started", then "Yield 1"
console.log(gen.next().value); // Logs "Coroutine resumed", then "Yield 2"
```

In this example, the `coroutine` function is a generator that yields two values. The `.next()` method is used to transfer control back and forth between the "main" routine (the sequence of console.log statements outside the generator) and the coroutine. This allows the coroutine and the main routine to cooperatively control the flow of the program.

  </div>
  </div>
</details>

---

### Can you use "this" within a generator function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use "this" within a generator function, but it's discouraged since generator functions are intended to be used with "new" or "call/apply" methods.
  </div>
  </div>
</details>

---

### What are some use cases for generators in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators can be used for asynchronous control flow, lazy evaluation, infinite sequences, coroutines, and code that requires complex state management.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Pipelines Example

```js
function* multiplyByTwo(iterable) {
    for (const num of iterable) {
        yield num * 2;
    }
}

function* addOne(iterable) {
    for (const num of iterable) {
        yield num + 1;
    }
}

const numbers = [1, 2, 3, 4];
const pipeline = addOne(multiplyByTwo(numbers));

console.log(Array.from(pipeline)); // [3, 5, 7, 9]
```

  </div>
  </div>
</details>

---

### Can you combine generators with other ES6 features, like arrow functions or classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators cannot be arrow functions, as they don't support "function*", but you can use generator functions as methods within ES6 classes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyClass {
    constructor(data) {
        this.data = data;
    }

    *dataGenerator() {
        for (let item of this.data) {
            yield item;
        }
    }
}

const myInstance = new MyClass([1, 2, 3, 4, 5]);
const gen = myInstance.dataGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// And so on...
```

In this example, `dataGenerator` is a generator method inside the `MyClass` class. It yields the items in the `data` array one by one.

  </div>
  </div>
</details>

---
