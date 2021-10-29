---
title: Generators
sidebar_position: 1
---

# Generators

# JAVASCRIPT THEORY

**Questions and Answers: Generators, Advanced Iteration**

**Generators, Advanced Iteration: Generators**

**Question:** **What is the difference between Generator and a regular function?**

**Interview Answer:** Regular functions return only one, single value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand.

**Technical Answer:** Regular functions return only one, single value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease. To create a generator, we need a special syntax construct: (function\*), so-called “generator function”. Generator functions behave differently from regular ones. When such function is called, it does not run its code. Instead, it returns a special object, called “generator object”, to manage the execution.

Example:

// Full Implementation

```js
function* generateSequence() {
  yield 1;

  yield 2;

  yield 3;
}

// "generator function" creates "generator object"

let generator = generateSequence();

console.log(generator); // creates: [object Generator]
```

Source: <https://javascript.info/generators#generator-functions>

**Question:** **Explain, the function of the generator next method in JavaScript.**

**Interview Answer:** The next() method returns an object with two properties done and value. The done property will return false if a value exists, otherwise true if the value returns undefined.

**Syntax:** generator.next(value)

Example:

```js
function* gen() {
  yield 1;

  yield 2;

  yield 3;
}

const g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

Source: <https://javascript.info/generators#generator-functions>

**Question:** **What generator function creation syntax is acceptable in JavaScript?**

**Interview Answer:** There are two syntaxes that are used to create generators including the pre (function\* f(…)) and post ( function \*f(…) ) function generator implementations. Both syntaxes are correct, but usually the first syntax is preferred, as the star (\*) denotes that it’s a generator function, it describes the kind, not the name, so it should stick with the function keyword.

Example:

```js
// Pre-generator function

function* gen() {
  yield 1;

  yield 2;

  yield 3;
}

// Post-generator function

function* gen() {
  yield 1;

  yield 2;

  yield 3;
}
```

Source: <https://javascript.info/generators#generator-functions>

**Question:** **What is the difference between a generator and an iterator?**

**Interview Answer:** While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative, they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function\* syntax.

Example:

```js
// Iterator

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
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log('Iterated over sequence of size: ', result.value);

// [5 numbers returned, that took interval in between: 0 to 10]

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
  console.log(num); // 1 3 5 7 9
}
```

Source: <https://javascript.info/generators#generator-functions>

**Question:** **If you attempt to use the return keyword to return a value at the end of a generator. What happens when you iterate over the values with a for…of loop?**

**Interview Answer:** Since the generator has the done property with a value of false for each value excluding the last value of done equaling true. When you attempt to return a value instead of yielding one. The last value will not be returned because done is set to true. It’s because for..of iteration ignores the last value, when done: true.

Example:

```js
function* generateSequence() {
  yield 1;

  yield 2;

  return 3; // { value: 3, done: true} does not yield
}

let generator = generateSequence();

for (let value of generator) {
  alert(value); // 1, then 2, no 3
}
```

Source: <https://javascript.info/generators#generators-are-iterable>

**Question:** **Are function generators iterable in JavaScript?**

**Interview Answer:** Yes, when called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. The function can be called as many times as desired and returns a new Generator each time. Each Generator may only be iterated once.

Example:

```js
function* makeIterator() {
  yield 1;

  yield 2;
}

const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true;
// This example show us generator(iterator) is iterable object,

// which has the @@iterator method return the it (itself),

// and consequently, the it object can iterate only once.

// If we change it's @@iterator method to a function/generator

// which returns a new iterator/generator object, (it)

// can iterate many times

it[Symbol.iterator] = function* () {
  yield 2;

  yield 1;
};
```

Source: <https://javascript.info/generators#generators-are-iterable>

**Question:** **Can you explain the power of the yield keyword in JavaScript generator functions?**

**Interview Answer:** Generators are both powerful and flexible because yield is multi-functional. It not only returns the result outward, but can pass a value inside the generator when we call generator.next(arg) with an argument. That argument becomes the result of yield.

Example:

```js
function* gen() {
  // Pass a question to the outer code and wait for an answer

  let result = yield '2 + 2 = ?'; // (*)
  alert(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value
generator.next(4); // --> pass the result into the generator
```

Source: <https://javascript.info/generators#yield-is-a-two-way-street>
