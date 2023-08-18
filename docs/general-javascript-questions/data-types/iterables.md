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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/IterablesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Iterables | JavaScript Frontend Phone Interview Responses</title>
</head>

**Data Types: Iterable Types**

---

<AdSense />

---

<CloseAllAnswers />

### What are iterables in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Iterables in JavaScript are objects that can be iterated upon using the "for...of" loop. They include arrays, strings, maps, sets, and other custom objects with a Symbol.iterator property.</div><br />
  <div><strong>Technical Response:</strong> Iterable objects are a subset of arrays. This notion allows us to use any object in a for...of loop. Arrays, of course, are iterable. However, several additional built-in objects are iterable as well. Strings, for example, are also iterable. It is a data structure that allows consumption of its data in general. It does this by implementing a method with the key Symbol.iterator, which returns an iterator. The iterator interface provides another method called return(), which gets performed when the iteration reaches the last value or is deliberately halted by calling it directly or using break; a for loop.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using an iterable (an array) in JavaScript:

```javascript
// Arrays contain Symbol.iterator property
const myArray = [1, 2, 3, 4, 5];

for (const item of myArray) {
  console.log(item);
}
```

In this code, the `myArray` variable is an iterable (an array) containing numbers. The `for...of` loop iterates over each item in the array and logs it to the console. Output:

```
1
2
3
4
5
```

  </div>
  </div>
</details>

---

### What is the purpose of the Symbol.iterator method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The purpose of the Symbol.iterator method is to define the default iterator for an object. It allows the object to be iterable, enabling it to be used with iteration protocols like the for...of loop.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of implementing the `Symbol.iterator` method to create a custom iterable object in JavaScript.

```javascript
const myIterable = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const item of myIterable) {
  console.log(item);
}
```

In this code, `myIterable` is an object that implements the `Symbol.iterator` method. The method returns an iterator object with a `next()` function, which is responsible for generating the values in the iteration. The `for...of` loop iterates over the iterable object and logs each item to the console. Output:

```
1
2
3
4
5
```

Note that the `Symbol.iterator` method allows custom objects to be iterable, providing control over how they can be iterated.

  </div>
  </div>
</details>

---

### What can we use the Symbol.iterator for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Symbol.iterator is used to define a custom iteration behavior for objects, making them iterable and compatible with the for...of loop.
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
  console.log(num); // 1, then 2, 3, 4, 5
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
  <div><strong>Interview Response:</strong> Yes, you can call an iterator explicitly using the iterator's next() method. Benefits include precise control over iteration, customized iteration behavior, and on-demand value generation.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Hello';

// does the same as
// for (let char of str) console.log(char);

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
  <div><strong>Interview Response:</strong> An iterable is an object with a [Symbol.iterator] method that returns an iterator, while an array-like object has numeric keys and a length property. Iterables can be iterated over with for-of loops, while array-like objects cannot.
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
// TypeError: arrayLike is not **iterable**
for (let item of arrayLike) {
    console.log(item)
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
  <div><strong>Interview Response:</strong> In JavaScript, by using the Array.from() method, we can convert an iterable or an array-like value into an array, which allows us to call array methods on it or looping mechanisms.
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
console.log(arr.pop()); // World (method works)

for(let item of arr) {
    console.log(item); // logs "Hello"
}

// Here we use Array.from to turn a string into an array of characters:

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2
```

  </div>
  </div>
</details>

---

### How can we create our own iterable object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create an iterable object in JavaScript, define a custom iterator function within the object, implementing the Symbol.iterator method, which returns an iterator with next() method to control iteration.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const myIterableObject = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const item of myIterableObject) {
  console.log(item);
}

```

  </div>
  </div>
</details>

---

### How does lazy evaluation work with iterable objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lazy evaluation involves delaying the evaluation of data until it is actually needed. With iterable objects, this means that data is only loaded into memory as it is iterated over, which can reduce memory usage and improve performance.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const lazyIterableObject = {
  data: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          // Perform some lazy computation
          const computedValue = data[index] * 2;
          index++;

          return { value: computedValue, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const item of lazyIterableObject) {
  console.log(item);
}

```

  </div>
  </div>
</details>

---

### What is the difference between forEach() and for...of when iterating over arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  
  <div><strong>Interview Response:</strong> The forEach() is a method that iterates over array elements and executes a callback function on each element. for...of is a language construct that provides a concise syntax for iterating over iterable objects, including arrays, to access each element directly.</div><br />
  <div><strong>Interview Response:</strong> forEach() is a method on the array prototype that calls a provided function for each element in the array. for...of is a language feature for iterating over any iterable object, including arrays, yielding the values one-by-one. The primary difference is that forEach() provides no way to break out of the loop or to skip to the next iteration, while for...of allows for the use of the break and continue statements.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const myArray = [1, 2, 3, 4, 5];

// Using forEach()
myArray.forEach((element) => {
  console.log(element);
});

// Using for...of
for (const element of myArray) {
  console.log(element);
}

```

  </div>
  </div>
</details>

---
