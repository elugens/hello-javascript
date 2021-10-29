---
title: Async Iteration
sidebar_position: 2
---

# Async iteration and generators

**Generators, Advanced Iteration: Async Iteration and Generators**

**Question:** **What is a common use case for asynchronous iteration in JavaScript?**

**Interview Answer:** A common use for asynchronous iteration is when data is expected in an asynchronous behavior. The most common case is that the object needs to make a network request to deliver the next value. This is also a great way to handle controlled chunks of data to reduce the impact on resources.

Example:

```js
let range = {
  from: 1,

  to: 5,

  [Symbol.asyncIterator]() {
    // (1)

    return {
      current: this.from,

      last: this.to,

      async next() {
        // (2)

        // note: we can use "await" inside the async next:

        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    // (4)

    alert(value); // 1,2,3,4,5
  }
})();
```

Source: <https://javascript.info/async-iterators-generators#async-iterables>

**Question:** **Is it possible to use a spread syntax with an asynchronous iterator?**

**Interview Answer:** No, because the spread syntax expects to find Symbol.iterator, not Symbol.asyncIterator. It’s also the case for for..of: the syntax without await needs Symbol.iterator.

Example:

```js
// The Spread Syntax works with Symbol.iterator (That's what its look for...)

let range = {
  from: 1,

  to: 5,

  [Symbol.iterator]() {
    // called once, in the beginning of for..of

    return {
      current: this.from,

      last: this.to,

      next() {
        // called every iteration, to get the next value

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]); // [1,2,3,4,5] It works!!!
////////////////////////////////////

// Spread Syntax fails with Symbol.asyncIterator

let range = {
  from: 1,

  to: 5,

  [Symbol.asyncIterator]() {
    // (1)

    return {
      current: this.from,

      last: this.to,

      async next() {
        // (2)

        // note: we can use "await" inside the async next:

        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]); // Error, no Symbol.iterator
```

Source: <https://javascript.info/async-iterators-generators#async-iterables>
