---
title: Iterable Types
description: What are iterables in JavaScript? Iterable Types are objects that can be
  iterated over. Iterable objects are a subset of arrays. Interview Answers
sidebar_position: 6
sidebar_label: Iterable Types
keywords:
  - iterable types
  - iterables
  - symbols
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - arrays
  - data types
  - interview questions
  - interview answers
  - js
tags:
  - iterable types
  - iterables
  - interview answers
  - interview questions
lastmod: 2022-05-01T21:33:31.779Z
---

<head>
  <title>Iterables | JavaScript Frontend Phone Interview Responses</title>
</head>

**Data Types: Iterable Types**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What are iterables in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An iterable interface specifies that an object is accessible if it implements a key method [symbol.iterator]. The built-in data structures that use iterables are Strings, Arrays, Maps, and custom objects.</div><br />
  <div><strong>Technical Response:</strong> Iterable objects are a subset of arrays. This notion allows us to use any object in a for...of loop. Arrays, of course, are iterable. However, several additional built-in objects are iterable as well. Strings, for example, are also iterable. It is a data structure that allows consumption of its data in general. It does this by implementing a method with the key Symbol.iterator, which returns an iterator. The iterator interface provides another method called return(), which gets performed when the iteration reaches the last value or is deliberately halted by calling it directly or using break; a for loop.
  </div>
  </div>
</details>

---

### What can we use the Symbol.iterator for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most common use case for Symbol.iterator is creating a custom object iterator.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

  </div>
  </div>
</details>

---

### Can you call an iterator explicitly, and what are the benefits?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can call an iterator explicitly in JavaScript. There are several benefits, including more control over the process than for...of.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Hello';

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}
```

  </div>
  </div>
</details>

---

### What is the difference between an iterable and an array-like object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Iterables are objects that implement the Symbol.iterator method, such as arrays and strings. Array-likes are objects that have indexes and a length property, so they look like arrays. When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes or both, like strings.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Array-like but not Iterable<br /><br />

  <div></div>

```js
let arrayLike = {
  // has indexes and length => array-like
  0: 'Hello',
  1: 'World',
  length: 2,
};

// Error (no Symbol.iterator)
for (let item of arrayLike) {
}
```

  </div>
  </div>
</details>

---

### What universal method can we use to turn an iterable or array-like value into an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Array.from() method can turn an iterable or array-like value into an array. Then we can call array methods on it.
</div><br />
  <div><strong className="codeExample">Syntax Example:</strong> Array.from(arrayLike, (element, index) => { /*...*/ } )<br /><br />

  <div></div>

```js
Array.from(obj[, mapFn, thisArg]);
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)

// Here we use Array.from to turn a string into an array of characters:

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2
```

  </div>
  </div>
</details>

---
