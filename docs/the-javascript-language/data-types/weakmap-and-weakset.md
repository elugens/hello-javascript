---
title: WeakMap / WeakSet
sidebar_position: 8
---

# WeakMap & WeakSet in JavaScript - Q&A

**Question:** **What is the difference between Map and WeakMap in JavaScript?**

**Interview Answer:** The first difference between Map and WeakMap is that keys must be objects, not primitive values in a WeakMap. WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

**Technical Answer:** The first difference between Map and WeakMap is that keys must be objects, not primitive values. WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it. Also, WeakMap is limited to the following methods including get, set, delete, and has. Why such a limitation? That is for technical reasons. If an object has lost all other references, then it is to be garbage-collected automatically. But technically it is not exactly specified when the cleanup happens.

Example:

```js
let john = { name: 'John' };

let map = new Map();

map.set(john, '...');

john = null; // overwrite the reference
// john is stored inside the map,

// we can get it by using map.keys()

///////////////////////////////////////

// Example: WeakMap

let john = { name: 'John' };

let weakMap = new WeakMap();

weakMap.set(john, '...');

john = null; // overwrite the reference

// john is removed from memory!
```

Source: <https://javascript.info/weakmap-weakset#weakmap>

**Question:** **What are some use cases in applications for a WeakMap?**

**Interview Answer:** The main area of application for WeakMap is an additional data storage such as third party data that you may not have an indefinite use. Another common example is caching. We can store (“cache”) results from a function, so that future calls on the same object can reuse it.

Source: <https://javascript.info/weakmap-weakset#weakmap>

**Question:** **What is the difference between a Set and WeakSet in JavaScript?**

**Interview Answer:** The main difference is that WeakSet can only contain objects & not any other type. Another difference between the two is that references to objects in a WeakSet are held “weakly”. This means that if there is no other reference to an object in the WeakSet it will get garbage collected.

**Technical Answer:** Both Set & WeakSet are key-based collections but with some crucial differences. Just like Set, the WeakSet constructor takes in an iterable object as input. The main difference is that WeakSet can only contain objects & not any other type. The other main difference between the two is that references to objects in a WeakSet are held “weakly”. This means that if there is no other reference to an object in the WeakSet it will get garbage collected. The same is not true for Set. An object stored in a Set will not be garbaged collected even if nothing is referencing it. This distinction is important because for this reason there is no way to access or iterate over objects stored inside a WeakSet. We also do not have access to the size of the weak set for this same reason.

Example:

```js
// Example: WeakSet

let visitedSet = new WeakSet();

let john = { name: 'John' };

let pete = { name: 'Pete' };

let mary = { name: 'Mary' };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again
// visitedSet has 2 users now

// check if John visited?

alert(visitedSet.has(john)); // true
// check if Mary visited?

alert(visitedSet.has(mary)); // false
john = null;

// visitedSet will be cleaned automatically
```

Source: <https://javascript.info/weakmap-weakset#weakset>

**Question:** **What is the most notable limitation of WeakMap and WeakSet in JS?**

**Interview Answer:** The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. That may appear inconvenient but does not prevent WeakMap/WeakSet from doing their main job in being “additional” storage of data for objects which are stored/managed at another place.

Source: <https://javascript.info/weakmap-weakset>
