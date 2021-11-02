---
title: Keys / Values / Entries
sidebar_position: 9
---

# Object.keys, values, entries

**Data Types: Object.keys, values, entries**

<head>
  <title>Object.keys, values, entries - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What three data structures use the obj.keys, obj.values, and obj.entries generic methods?

**Interview Answer:** The three data structures that use the obj.keys, obj.values, and obj.entries generic methods include Map, Set, and Array structures. Plain objects also support similar methods, but the syntax is a bit different.

Example:

```js
let prices = {
  banana: 1,

  orange: 2,

  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object

  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```

Source: <https://javascript.info/keys-values-entries>

### Explain, the function and syntax of the Object.keys method?

**Interview Answer:** The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

**Syntax:** `Object.keys(obj)`

Example:

```js
// simple array

const arr = ['a', 'b', 'c'];

console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object

const obj = { 0: 'a', 1: 'b', 2: 'c' };

console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering

const anObj = { 100: 'a', 2: 'b', 7: 'c' };

console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable

const myObj = Object.create({}, {

    getFoo: {

`    `value: function () { return this.foo; }

    }

});

myObj.foo = 1;

console.log(Object.keys(myObj)); // console: ['foo']
```

**Note:** If you want all properties—including non-enumerables—see Object.getOwnPropertyNames().

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys>

### Explain, the function and syntax of the Object.values method?

**Interview Answer:** Object.values() returns an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the property values of the object manually.

**Syntax:** Object.values(obj)

Example:

```js
const obj = { foo: 'bar', baz: 42 };

console.log(Object.values(obj)); // ['bar', 42]

// Array-like object

const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };

console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// Array-like object with random key ordering

// When using numeric keys, the values are returned in the keys' numerical order

const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };

console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

// getFoo is property which is not enumerable

const my\_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });

my\_obj.foo = 'bar';

console.log(Object.values(my\_obj)); // ['bar']

// non-object argument will be coerced to an object

console.log(Object.values('foo')); // ['f', 'o', 'o']
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values>

### Explain, the function and syntax of the Object.entries method?

**Interview Answer:** The Object.entries method returns an array of a given object's own enumerable string-keyed key-value pairs, in the same order as that provided by a for...in loop. The order is not guaranteed to be chronological. We should sort it first if that is a concern.

**Technical Answer:** The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well). The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.

**Syntax:** Object.entries(obj)

Example:

```js
const object1 = {
  a: 'somestring',

  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:

// "a: somestring"

// "b: 42"

// order is not guaranteed
```

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries>

### Explain, the difference between map.keys() and Object.keys(obj) in JavaScript?

**Interview Answer:** The first difference is that we have to call Object.keys(obj), and not obj.keys(), the reason is flexibility, because objects are a base of all complex structures in JavaScript. The second difference is that Object.\* methods return “real” array, not just an iterable.

**Answer:** The main difference is that we have to call Object.keys(obj), and not obj.keys(). The main reason is flexibility. Remember, objects are a base of all complex structures in JavaScript. So we may have an object of our own like data that implements its own data.values() method. And we still can call Object.values(data) on it. The second difference is that Object.\* methods return “real” array objects, not just an iterable. That is mainly for historical reasons.

Example:

```js
let user = {
  name: 'John',

  age: 30,
};

console.log(Object.keys(user));

// returns [ 'name', 'age' ]

console.log(Object.values(user));

// returns [ 'John', 30 ]

console.log(Object.entries(user));

// returns [ [ 'name', 'John' ], [ 'age', 30 ] ]
```

Source: <https://javascript.info/keys-values-entries#object-keys-values-entries>

### Do Object.keys/values/entries methods access symbolic properties in JavaScript?

**Interview Answer:** Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys. If we want symbolic keys too, we can use Object.getOwnPropertySymbols.

**Technical Answer:** No, Just like a for..in loop, these methods ignore properties that use Symbol(...) as keys. Usually that is convenient. But if we want symbolic keys too, then there is a separate method Object.getOwnPropertySymbols that returns an array of only symbolic keys. Also, there exist a method Reflect.ownKeys(obj) that returns all keys.

Example:

```js
let obj = {};

obj[Symbol('a')] = 'a';

obj[Symbol.for('b')] = 'b';

obj['c'] = 'c';

obj.d = 'd';

for (let i in obj) {
  console.log(i); // logs "c" and "d"
}
```

Source: <https://javascript.info/keys-values-entries#object-keys-values-entries>

### Since, Objects lack the methods that exist for arrays, e.g. map, filter, and others. What Object methods can you use to access those methods (map or filter) on an Object?

**Interview Answer:** If we would like to apply them, then we can use Object.entries followed by Object.fromEntries. First, we will have to get an array of [key, value] pairs from the obj by invoking Object.entries(obj). Call map on the resulting array. Then, we will have to call Object.fromEntries(array) on the resulting array to turn it back into an object.

**Technical Answer:** If we would like to apply them, then we can use Object.entries followed by Object.fromEntries. First, we will have to get an array of [key, value] pairs from the obj by invoking Object.entries(obj). The call map on the resulting array. Then, we will have to call Object.fromEntries(array) on the resulting array to turn it back into an object.

Code Example:

```js
let prices = {
  banana: 1,

  orange: 2,

  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object

  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```

Source: <https://javascript.info/keys-values-entries#object-keys-values-entries>
