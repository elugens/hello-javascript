---
title: Async Iteration and Generators
description: Async Iteration and Generators are a way to create iterators in JavaScript. What are some popular applications for asynchronous iteration in JavaScript?
sidebar_position: 2
sidebar_label: Async Iteration
keywords:
  - async iteration
  - async generators
  - asynchronous
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - iteration
  - interview questions
  - interview answers
  - js
tags:
  - async iteration
  - async generators
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AsyncIteratorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Async Iteration / Generators | JavaScript Frontend Interview</title>
</head>

**Generators, Advanced Iteration: Async Iteration and Generators**

---
<CloseAllAnswers />

### What is Symbol.asyncIterator in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Symbol.asyncIterator is a built-in symbol representing the default asynchronous iterator method for an object, allowing it to be iterated asynchronously with for-await-of loops.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Simple JavaScript code example demonstrating Symbol.asyncIterator<br /><br />

  <div></div>

```javascript
const obj = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({ value: i++, done: false });
        }
        else {
          return Promise.resolve({ done: true });
        }
      }
    };
  }
};

async function run() {
  for await (let value of obj) {
    console.log(value);
  }
}

run();
```

This example defines an async iterator that produces values 0 through 4. It then uses `for await...of` to asynchronously consume those values.

  </div>
  </div>
</details>

---

### How does Symbol.asyncIterator relate to asynchronous generators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Asynchronous generators automatically implement the Symbol.asyncIterator method. They simplify the creation of asynchronous iterators by yielding promises, which can be consumed using the for-await-of loop.</div><br />
  <div><strong className="codeExample">Code Example:</strong> How to use an asynchronous generator with the for-await-of loop.<br /><br />

  <div></div>

```javascript
async function* asyncGenerator() {
    let i = 0;
    while (i < 5) {
        yield i++;
    }
}

async function run() {
    for await (let value of asyncGenerator()) {
        console.log(value);
    }
}

run();
```

In this example, `asyncGenerator` is an asynchronous generator that produces values 0 through 4. The function `run` then consumes these values asynchronously using the `for await...of` loop.

  </div>
  </div>
</details>

---

### What is the difference between Symbol.iterator and Symbol.asyncIterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Symbol.iterator` defines a synchronous iterator for an object used in for...of loops. `Symbol.asyncIterator`, on the other hand, defines an asynchronous iterator for use in for await...of loops.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Code demonstrating both `Symbol.iterator` and `Symbol.asyncIterator`<br /><br />

  <div></div>

`Symbol.iterator` Code Example:

```javascript
const obj1 = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let value of obj1) {
  console.log(value); // prints 0, 1, 2, 3, 4
}
```

`Symbol.asyncIterator` Code Example:

```javascript
const obj2 = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({ value: i++, done: false });
        } else {
          return Promise.resolve({ done: true });
        }
      }
    };
  }
};

async function run() {
  for await (let value of obj2) {
    console.log(value); // prints 0, 1, 2, 3, 4
  }
}

run();
```

In both cases, we're defining a custom iterator that generates values from 0 to 4. The difference is that `Symbol.iterator` operates synchronously, whereas `Symbol.asyncIterator` operates asynchronously, returning promises.

  </div>
  </div>
</details>

---

### Can you use a for-await-of loop with an object that implements Symbol.iterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a for-await-of loop requires an object that implements Symbol.asyncIterator, not Symbol.iterator. It's designed for asynchronous iteration over promises, not synchronous iteration.</div><br />
  <div><strong className="codeExample">Code Example:</strong> showing that a for-await-of loop does not work with an object that implements `Symbol.iterator`<br /><br />

  <div></div>

```javascript
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

async function run() {
  try {
    for await (let value of obj) {
      console.log(value);
    }
  } catch (e) {
    console.error(e); // Error: obj is not async iterable
  }
}

run();
```

As you can see, attempting to use a for-await-of loop with an object that implements `Symbol.iterator` results in an error because the object is not async iterable.

  </div>
  </div>
</details>

---

### How do you create a custom async iterable object using Symbol.asyncIterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You create a custom asynchronous iterable object by defining a method with the key `Symbol.asyncIterator` that returns an object with a `next()` method, which returns promises that resolve to `&#123;value, done&#125;` objects.</div><br />
  <div><strong className="codeExample">Here is an example:</strong><br /><br />

  <div></div>

```javascript
const asyncIterable = {
  [Symbol.asyncIterator]: async function* () {
    for (let i = 0; i < 5; i++) {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  }
};

(async () => {
  for await (let value of asyncIterable) {
    console.log(value);  // prints 0, 1, 2, 3, 4 with a delay of 1 second between each
  }
})();
```

This `asyncIterable` object defines a method keyed by `Symbol.asyncIterator`. The method is an asynchronous generator that yields values 0 through 4, simulating an asynchronous operation using `setTimeout`. The `for await...of` loop then consumes these values asynchronously.

  </div>
  </div>
</details>

---

### What is the purpose of using Symbol.asyncIterator in conjunction with async/await?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Symbol.asyncIterator allows creating asynchronous iterable objects. When used with async/await, it provides a way to iterate over data that may not be immediately available, such as results from network requests.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const asyncIterable = {
  [Symbol.asyncIterator]: async function* () {
    for (let i = 0; i < 5; i++) {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  }
};

async function run() {
  for await (let value of asyncIterable) {
    console.log(value);  // prints 0, 1, 2, 3, 4 with a delay of 1 second between each
  }
}

run();
```

In this example, we've created an asynchronous iterable object using `Symbol.asyncIterator`. This object yields values with a delay to simulate asynchronous operations. The `run` function then uses a for-await-of loop, with the `await` keyword allowing the asynchronous iteration to pause for each yielded value.

  </div>
  </div>
</details>

---

### Can you use for-await-of loops with built-in JavaScript data structures?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Built-in JavaScript data structures like Arrays or Maps don't implement Symbol.asyncIterator by default, so for-await-of loops are not supported unless custom asynchronous iterators are created.<br/></div>
  </div>
</details>

---

### Can you mix synchronous and asynchronous iterators in a single object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a single object can implement both synchronous and asynchronous iterators by defining methods for `Symbol.iterator` and `Symbol.asyncIterator`. These methods can coexist without conflict.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Demonstrates an object implementing both `Symbol.iterator` and `Symbol.asyncIterator`<br /><br />

  <div></div>

```javascript
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  },
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({ value: i++, done: false });
        } else {
          return Promise.resolve({ done: true });
        }
      }
    };
  }
};

for (let value of obj) {
  console.log(value);  // prints 0, 1, 2, 3, 4
}

async function run() {
  for await (let value of obj) {
    console.log(value);  // prints 0, 1, 2, 3, 4
  }
}

run();
```

This object `obj` defines both a synchronous iterator (with `Symbol.iterator`) and an asynchronous iterator (with `Symbol.asyncIterator`). As a result, it can be iterated over with both for...of and for-await...of loops.

  </div>
  </div>
</details>

---

### What happens if you use a for-of loop with an object implementing Symbol.asyncIterator but not Symbol.iterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an object only implements Symbol.asyncIterator and not Symbol.iterator, using a for-of loop will result in an error, as the object is not considered synchronously iterable. To iterate asynchronously, use a for-await-of loop instead.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example illustrating what happens when you try to use a for-of loop with an object that implements `Symbol.asyncIterator` but not `Symbol.iterator`:

```javascript
const obj = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return Promise.resolve({ value: i++, done: false });
        } else {
          return Promise.resolve({ done: true });
        }
      }
    };
  }
};

try {
  for (let value of obj) {
    console.log(value);
  }
} catch (e) {
  console.error(e);  // Error: obj is not iterable
}
```

As you can see, trying to use a for-of loop with this object results in an error because the object does not implement `Symbol.iterator`, so it is not considered iterable in a synchronous context.

  </div>
  </div>
</details>

---

### How does error handling work in a for-await-of loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Error handling in a for-await-of loop can be done using try-catch blocks. If an error occurs during iteration, the catch block will be executed, allowing proper error handling.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simplified example to illustrate...

```javascript
async function exampleFunction() {
  const asyncIterable = getAsyncIterable(); // some function that returns an async iterable

  try {
    for await (const item of asyncIterable) {
      // do something with item
      processItem(item); // some function that processes the item
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

In this example, `try`/`catch` is used to handle any errors that may occur while iterating over the async iterable `asyncIterable` or during the processing of an item in the iterable.

In the `catch` block, we handle the error. In this case, we're just logging the error, but you could handle it in whatever way is appropriate for your use case.

It's important to note that if an error occurs, the loop will be immediately terminated. This means that if there are still items left in the iterable when an error occurs, those items will not be processed.

If you want to handle errors on a per-item basis and continue processing remaining items even if an error occurs, you should move the `try`/`catch` block inside the loop:

```javascript
async function exampleFunction() {
  const asyncIterable = getAsyncIterable(); // some function that returns an async iterable

  for await (const item of asyncIterable) {
    try {
      // do something with item
      processItem(item); // some function that processes the item
    } catch (error) {
      console.error('An error occurred while processing an item:', error);
    }
  }
}
```

In this example, if an error occurs while processing an item, that error is logged, but the loop continues to the next item.

  </div>
  </div>
</details>

---

### How can you manually iterate over an asynchronous iterable without using a for-await-of loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can manually iterate over an asynchronous iterable using the next() method, which returns a promise, then handle the promise with then(). You should continue until done is true.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const asyncIterable = {
  [Symbol.asyncIterator]: async function* () {
    for (let i = 0; i < 5; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield i;
    }
  }
};

const iterator = asyncIterable[Symbol.asyncIterator]();

function iterate() {
  iterator.next().then(({value, done}) => {
    if (!done) {
      console.log(value);
      iterate();
    }
  });
}

iterate();
```

This script manually iterates over the `asyncIterable` object. After getting the iterator from `Symbol.asyncIterator`, it repeatedly calls `next()`, which returns a promise. It uses `then()` to handle the promise, printing the value and calling `iterate()` again if `done` is false.

  </div>
  </div>
</details>

---

### Can you use Symbol.asyncIterator with other asynchronous patterns like Observables or EventEmitters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Symbol.asyncIterator can be used with Observables or EventEmitters to create async iterators over emitted events, enabling usage of a for-await-of loop to consume events asynchronously.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a Node.js code example demonstrating an EventEmitter used with `Symbol.asyncIterator`. This code will wait for events named 'data' and print them out:

```javascript
const EventEmitter = require('events');

class Stream extends EventEmitter {
  constructor() {
    super();
    this.data = [1, 2, 3, 4, 5];
  }

  async *[Symbol.asyncIterator]() {
    for(let i = 0; i < this.data.length; i++) {
      // Simulate async operations
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield this.data[i];
    }
  }
}

async function main() {
  const stream = new Stream();

  for await (const event of stream) {
    console.log(event); // prints 1, 2, 3, 4, 5 with a delay of 1 second between each
  }
}

main();
```

In this example, we've defined a `Stream` class that extends `EventEmitter` and simulates emitting events asynchronously. The `main` function then listens for these events and logs them as they're received. The `for await...of` loop allows us to handle these events asynchronously.

:::note
Note: This example requires Node.js and its built-in `events` module to run.
:::

  </div>
  </div>
</details>

---

### What are some popular applications for asynchronous iteration in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Asynchronous iteration is popular for handling data streams, fetching data from APIs, reading large files, processing database results, or iterating over data from websockets or server-sent events.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    // (1)
    return {
      current: this.from,
      last: this.to,

      async next() {
        // (2)

        // note: we can use "await" inside the async next:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

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
    // (4)
    alert(value); // 1,2,3,4,5
  }
})();
```

  </div>
  </div>
</details>

---

### Is it possible to use a spread syntax with an asynchronous iterator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it is not possible to use spread syntax (...) with asynchronous iterators in JavaScript. Spread syntax essentially requires an iterable (synchronous) object, such as an Array or a String. Asynchronous iterables (objects implementing a [Symbol.asyncIterator] method), like those used in a for-await-of loop, do not work with spread syntax.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// The Spread Syntax works with Symbol.iterator (That's what its look for...)
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    // called once, in the beginning of for..of
    return {
      current: this.from,
      last: this.to,

      next() {
        // called every iteration, to get the next value
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log([...range]); // [1,2,3,4,5] It works!!!

////////////////////////////////////

// Spread Syntax fails with Symbol.asyncIterator

let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    // (1)
    return {
      current: this.from,
      last: this.to,

      async next() {
        // (2)

        // note: we can use "await" inside the async next:
        await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

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

  </div>
  </div>
</details>

---
