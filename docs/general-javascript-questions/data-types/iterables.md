---
title: Iterable Types
sidebar_position: 6
---

# Iterable Types

**Data Types: Iterable Types**

<head>
  <title>Iterables - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are iterables in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An iterable is a interface that specifies that an object can be accessible if it implements a method who is key is [symbol.iterator]. Some of the built-in data structures that use iterables are Strings, Arrays, Maps and custom objects.</div><br />
  <div><strong>Technical Response:</strong> Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop. Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable. In general, it is a data structure that allows its data to be consumed. It does so by implementing a method whose key is Symbol.iterator which returns an iterator. The iterator interface has another method called return(), which is being called when the iteration reaches the last value, or stopped manually by calling it explicitly or for example break; a for loop.
  </div>
  </div>
</details>

---

### What can the Symbol.iterator be used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most common use case for Symbol.iterator is creating a custom object iterator.
</div>
  </div>
</details>

Code Example:

```js
let range = {
  from: 1,

  to: 5,
};

// 1. call to for..of initially calls this

range[Symbol.iterator] = function () {
  // ...it returns the iterator object:

  // 2. Onward, for..of works only with this iterator, asking it for next values

  return {
    current: this.from,

    last: this.to,

    // 3. next() is called on each iteration by the for..of loop

    next() {
      // 4. it should return the value as an object {done:.., value :...}

      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

---

### Can you call an iterator explicitly and what are the benefits?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can call an iterator explicitly in JavaScript. There are several benefits including more control over the process than for...of.
</div>
  </div>
</details>

Code Example:

```js
let str = 'Hello';

// does the same as

// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();

  if (result.done) break;

  console.log(result.value); // outputs characters one by one
}
```

---

### What is the difference between an iterable and an array-like object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Iterables are objects that implement the Symbol.iterator method such as arrays and strings. Array-likes are objects that have indexes and length, so they look like arrays. When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes, or both like strings.
</div>
  </div>
</details>

Code Example: Array-like but not Iterable

```js
let arrayLike = {
  // has indexes and length => array-like

  0: 'Hello',

  1: 'World',

  length: 2,
};

// Error (no Symbol.iterator)

for (let item of arrayLike) {
}
```

---

### What universal method can be used to turn an iterable or array- like value into an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Array.from method can turn an iterable or array-like value into an array. Then we can call array methods on it.
</div>
  </div>
</details>

**Syntax:** `Array.from(obj[, mapFn, thisArg])`

Code Example:

```js
let arrayLike = {
  0: 'Hello',

  1: 'World',

  length: 2,
};

let arr = Array.from(arrayLike); // (\*)
alert(arr.pop()); // World (method works)
// Here we use Array.from to turn a string into an array of characters:

let str = '𝒳😂';

// splits str into array of characters

let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2
```

---
