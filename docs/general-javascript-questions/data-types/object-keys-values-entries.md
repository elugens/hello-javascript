---
title: Object.keys, values, entries
description: Object.keys, values, entries are used to get the keys, values, and entries
  from an object. They are used to iterate over the object. Frontend Interview
  Answers
sidebar_position: 9
sidebar_label: Keys / Values / Entries
keywords:
  - object keys
  - object values
  - object entries
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - frontend
  - object
  - interview questions
  - interview answers
  - js
tags:
  - object keys
  - object entries
  - object values
  - interview answers
  - interview questions
lastmod: 2022-05-01T22:05:27.079Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObjectKeysValueSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Object Keys / Values / Entries | Frontend Phone Interview</title>
</head>

**Data Types: Object.keys, values, entries**

<CloseAllAnswers />

### What three data structures use generic methods of obj.keys, obj.values, and obj.entries?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three data structures that use the obj.keys, obj.values, and obj.entries generic methods include Map, Set, and Array structures. Plain objects also support similar methods, but the syntax is slightly different.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8

// Object
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // outputs: ['a', 'b', 'c']
console.log(Object.values(obj)); // outputs: [1, 2, 3]
console.log(Object.entries(obj)); // outputs: [['a', 1], ['b', 2], ['c', 3]]

// Map
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(Array.from(map.keys())); // outputs: ['key1', 'key2']
console.log(Array.from(map.values())); // outputs: ['value1', 'value2']
console.log(Array.from(map.entries())); // outputs: [['key1', 'value1'], ['key2', 'value2']]

// Set
let set = new Set([1, 2, 3]);
console.log(Array.from(set.keys())); // outputs: [1, 2, 3]
console.log(Array.from(set.values())); // outputs: [1, 2, 3]
console.log(Array.from(set.entries())); // outputs: [[1, 1], [2, 2], [3, 3]]
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the Object.keys method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.keys() function produces an array containing the names of a given object's enumerable properties, iterated in the same manner as a regular loop.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.keys(obj);<br /><br />

  <div></div>

```js
// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  }
);

myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

:::note
If you want all properties including non-enumerables ones; see Object.getOwnPropertyNames().
:::

  </div>
  </div>
</details>

---

### Explain the function and syntax of the Object.values method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object.values() return an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the object's property values manually.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.values(obj);<br /><br />

  <div></div>

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is property which is not enumerable
const my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  }
);
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

  </div>
  </div>
</details>

---

### Can you please Explain the function and syntax of the Object.entries method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Object.entries method returns an array of a given object's own enumerable string-keyed key-value pairs, in the same order as that provided by a for...in loop. The order is not guaranteed to be chronological, and we should sort it out first if that is a concern.</div><br />
  <div><strong>Technical Response:</strong> The Object.entries() method returns an array of a given object's enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well). The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> Object.entries(obj);<br /><br />

  <div></div>

```js
const object1 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

  </div>
  </div>
</details>

---

### What is the difference between map.keys() and Object.keys(obj) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The first difference is that we have to call Object.keys(obj) and not obj.keys(). The reason is flexibility because objects are the base of all complex structures in JavaScript. The second difference is that (Object.*) methods return a “real” array, not just an iterable.</div><br />
  <div><strong>Technical Response:</strong> The biggest difference is that we must use Object.keys(obj) rather than obj.keys (). The primary factor is adaptability. Remember that in JavaScript, objects are the foundation of all complicated structures. As a result, we may have our object, such as data, that implements its data.values() function. We may still use Object.values(data) on it. The second distinction is that Object.* methods return "actual" array objects rather than merely iterables. This difference is primarily due to historical considerations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,
};

console.log(Object.keys(user));
// returns [ 'name', 'age' ]

console.log(Object.values(user));
// returns [ 'John', 30 ]

console.log(Object.entries(user));
// returns [ [ 'name', 'John' ], [ 'age', 30 ] ]
```

  </div>
  </div>
</details>

---

### Do Object.keys/values/entries methods access symbolic properties in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Like a for..in loop, these methods ignore properties that use Symbol(...) as keys. If we want symbolic keys too, we can use Object.getOwnPropertySymbols().</div><br />
  <div><strong>Technical Response:</strong> No, Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys. Usually, that is convenient. But if we want symbolic keys too, there is a separate method Object.getOwnPropertySymbols() that returns an array of only symbolic keys. Also, a method exists, Reflect.ownKeys(obj), that returns all keys.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {};

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (let i in obj) {
  console.log(i); // logs "c" and "d"
}
```

  </div>
  </div>
</details>

---

### Since, Objects lack the methods for arrays, e.g., map, filter, and others. What Object methods can you use to access those methods (map or filter) on an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we would like to apply them, we can use Object.entries followed by Object.fromEntries. First, we extract an array of [key, value] pairs from the obj by invoking Object.entries(obj). Call map on the resulting array. Then, we have to call Object.fromEntries(array) on the resulting array to turn it back into an object.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8
```

  </div>
  </div>
</details>

---
