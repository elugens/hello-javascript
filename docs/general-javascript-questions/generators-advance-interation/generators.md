---
title: Generators
description: JavaScript generators are a way to create iterators.
sidebar_position: 1
sidebar_label: Generators
---

**Generators, Advanced Iteration: Generators**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

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

### Explain the function of the generator “next” method in JavaScript?

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
  <div><strong>Interview Response:</strong> Two syntaxes are used to create generators, including the pre-fixed (function* f(…)) and post-fixed ( function *f(…) ) function generator implementations. Both syntaxes are correct, but usually, the first syntax is preferred, as the star * denotes that it’s a generator function, it describes the kind, not the name, so it should stick with the function keyword.
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
  <div><strong>Interview Response:</strong> While custom iterators are a useful tool, their creation requires careful programming due to the need to maintain their internal state explicitly. Generator functions provide a powerful alternative, and they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions get written using the function* syntax.
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
  <div><strong>Interview Response:</strong> Since the generator has the done property with a false value for each value, excluding the last value of done equaling true. When you attempt to return a value instead of yielding one, the last value does not get returned because done is set to true. It’s because for..of iteration ignores the last value, when done: true.
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
  <div><strong>Interview Response:</strong> Generator functions do not initially execute their code when called. Instead, they return a particular type of iterator, called a Generator. The function can be called as many times as desired and returns a new Generator each time. Each generator gets iterated once.
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

### Can you explain the power of the yield keyword in JavaScript generator functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generators are both powerful and flexible because yield is multi-functional. It not only returns the result outward but can pass a value inside the generator when we call generator.next(arg) with an argument, and that argument becomes the result of yield.
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
