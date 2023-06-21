---
title: Map and Set
description: What is the difference between Map and Object in JavaScript? Map and Set are
  not primitive data types in JavaScript. They are objects. Interview Answers
sidebar_position: 7
sidebar_label: Map and Set
keywords:
  - map and set
  - map
  - set
  - methods
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - map and set
  - map methods
  - interview answers
  - interview questions
lastmod: 2022-05-01T21:31:29.703Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MapSetSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Map and Set | JavaScript Frontend Phone Interview Answers</title>
</head>

**Data Types: Map and Set**

<CloseAllAnswers />

### What is a Map in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A map in JavaScript is a data structure that stores key-value pairs, allowing efficient lookup, insertion, and deletion operations based on the keys.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Creating a new Map
let myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'John');
myMap.set('age', 30);

// Accessing values
console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age')); // Output: 30

// Checking if a key exists
console.log(myMap.has('name')); // Output: true

// Deleting a key-value pair
myMap.delete('age');

// Checking the size of the Map
console.log(myMap.size); // Output: 1

// Clearing all key-value pairs
myMap.clear();
console.log(myMap.size); // Output: 0

```

  </div>
  </div>
</details>

---

### What is the difference between Map and Object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Maps are similar to objects in JavaScript, but they differ in their key types and methods. Maps allow any type of data as keys, have built-in iteration methods, and maintain key-value order, whereas objects only allow string or symbol keys and have fewer built-in methods.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Different types as keys<br /><br />

  <div></div>

```js
let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

console.log(map.size); // 3
```

  </div>
  </div>
</details>

---

### What are some methods and properties that a Map implements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some methods and properties that a Map implements in JavaScript include set(), get(), delete(), has(), size, clear(), keys(), values(), and entries().<br /><br />
  <strong>Methods and properties are as follows:</strong><br /><br />
  <ul>
    <li>new Map() – constructs the map.</li>
    <li>map.set(key, value) — saves the value as a function of the key.</li>
    <li>map.get(key) – returns the value specified by the key or undefined if the key does not exist in the map.</li>
    <li>map.has(key) – If the key exists, it returns true; otherwise, it returns false.</li>
    <li>map.delete(key) - deletes the value specified by the key.</li>
    <li>map.clear() — clears the map completely.</li>
    <li>map.size – The number of elements currently on the map gets returned.</li>
  </ul>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let contacts = new Map();

// stores the value by the key
contacts.set('Raymond', { phone: '213-555-1234', address: '123 N 1st Ave' });

contacts.has('Jessie'); // false 'Jessie' does not exist

contacts.get('Hilary'); // returns undefined

// stores as the value by the key
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });

console.log(contacts); // Map returns Hilary and Raymond

contacts.delete('Raymond'); // deletes Raymond returns true

contacts.get('Hilary'); // returns values

console.log(contacts.size); // returns 1
```

  </div>
  </div>
</details>

---

### What is one of the most notable and vital Map features in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using objects as keys is one of the most notable and vital Map features. The same does not count for objects, We should note that using a string as a key in an object is fine, but we cannot use another object as a key.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let john = { name: 'John' };
let ben = { name: 'Ben' };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj['[object Object]']); // 123
console.log(visitsCountObj[ben]); // ben returns 123 because it was overwritten by john
```

  </div>
  </div>
</details>

---

### How does the Map Object compare keys?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Map uses the algorithm 'SameValueZero'. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So, NaN can be used as the key as well. This algorithm cannot be changed or customized.
</div>
  </div>
</details>

---

### Which map methods can you use to iterate over a Map Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three Map methods that you can use to iterate over a map object, including the key, values, and entries methods.</div><br />
  <div><strong>Technical Response:</strong> There are three Map methods that you can use to iterate over a map, including the key, values, and entries methods. The keys method returns the keys within the Map. The entries method returns an iterable for entries [key, value]. At the same time, the Object.values method returns an iterable for values. Notable, by default entries, is used in the for…of loop. So, it is not necessary to invoke it explicitly. The iteration goes in the same order as the value insertion, and the map preserves this order, unlike regular Objects.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// We can also iterate over entries using a forEach()
recipeMap.forEach((quantity, veg) => console.log(`${veg}, ${quantity}`));
```

  </div>
  </div>
</details>

---

### Besides the key, values, and entries methods, is there another method you can use to iterate over a Map Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The forEach() method can also be used to iterate over a Map object in JavaScript, passing a callback function to execute on each key-value pair.</div><br />
  <div><strong>Technical Response:</strong> You can use forEach method to iterate over the Map Object. The forEach() method executes a provided function once for each Map entry. You should note that instead of producing a [key, value], as a result, it creates the opposite [value, key]. You can choose the format of your choice to meet the proposed outcome.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// iterate over entries using a forEach()
recipeMap.forEach((quantity, veg) => console.log(`${veg}, ${quantity}`));
```

  </div>
  </div>
</details>

---

### Can you set properties for Map the same way you add properties for a regular object-literal?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, properties cannot be set for a Map in the same way as adding properties to a regular object-literal in JavaScript.
</div><br />
  <div><strong>Technical Response:</strong> Technically, yes, but it is not recommended because it uses the feature of a generic object. There is a significant loss of built-in Map methods like set and delete when it we transform it into a generic object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Wrong Way
let wrongMap = new Map();
wrongMap['bla'] = 'blaa';
wrongMap['bla2'] = 'blaaa2';

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

// Any attempt to revert back to Maps built-in methods will fail

wrongMap.has('bla'); // false
wrongMap.delete('bla'); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }

// Right way for storing data in the Map - set(key, value) method.

let contacts = new Map();
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.has('Jessie'); // true
contacts.get('Hilary'); // undefined
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond'); // false
contacts.delete('Jessie'); // true
console.log(contacts.size); // 1
```

  </div>
  </div>
</details>

---

### Can you add properties to a Map using bracket notation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, yes, but it is not recommended because it uses the feature of a generic object. There is a significant loss of built-in Map methods like set and delete when we transform it into a generic object. It is better to use the set() method to add new key-value pairs to a Map.
  </div>
  </div>
</details>

---

### Can you convert a plain object into a Map in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can convert a plain object into a Map in JavaScript using the Map constructor and Object.entries().</div><br />
  <div><strong>Technical Response:</strong> Yes, if we have a plain object and would like to create a Map from it, we can use the built-in method Object.entries(obj) that returns an array of key/value pairs for an object precisely in that format.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get('name')); // John
```

  </div>
  </div>
</details>

---

### What is the main difference between Object.entries and Object.fromEntries methods regarding the Map Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Object.entries() returns an array of key-value pairs from an object, which can be used to create a new Map, while Object.fromEntries() creates an object from an array of key-value pairs, which can be converted to a Map.</div><br />
  <div><strong>Technical Response:</strong> If we have a plain object, and we would like to create a Map from it, then we can use the built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format. The Object.fromEntries() method transforms a list of key-value (Map Object) pairs into an object. So, both have conversion components that are the opposite of one another.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Object.fromEntries();<br /><br />

  <div></div>

```js
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Object.entries();<br /><br />

  <div></div>

```js
let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get('name')); // John
```

  </div>
  </div>
</details>

---

### How does the Set Object function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Set object is a special object that lets you store “unique” values of any type, whether primitive values or object references. It provides methods for adding, deleting, and checking the presence of values.</div><br />
  <div><strong>Technical Response:</strong> The Set object is a special object that lets you store unique values of any type, whether primitive values or object references. The Set() constructor creates the base structure of the object. The main feature is that repeated calls of set.add(value) with the same value do not do anything, and that is why each value appears in a Set only once.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

  </div>
  </div>
</details>

---

### What are the obvious differences between a Set and Array objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference is that Set only allows unique data values, while an Array allows duplicates.</div><br />
  <div><strong>Technical Response:</strong> Well, in general, Array is a type of structure representing a block of data (numbers, objects) allocated in consecutive memory. Set, more familiar as a Math concept, is an abstract data type that contains only distinct elements/objects without the need of being allocated orderly by index. Array and Set are technically different concepts in JavaScript. One of the most significant differences here, you may notice, is that elements in Array can be duplicated (unless you tell it not to be), and in Set, they just cannot (regardless of what you decide). In addition, Array is an “indexed collection” type of data structure, while Set is considered a “keyed collection”.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Array
let array = [1, 2, 2, 3];
console.log(array[1]); // outputs: 2
console.log(array.length); // outputs: 4

// Set
let set = new Set([1, 2, 2, 3]);
console.log(set.has(2)); // outputs: true
console.log(set.size); // outputs: 3, because "2" only counts once.
```

  </div>
  </div>
</details>

---

### What is the best way to loop/iterate over a Set in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The best way to iterate over a Set in JavaScript is using the for...of loop or the forEach() method. Both options provide a clean and concise syntax for iterating through all elements of the Set.</div><br />
  <div><strong>Technical Response:</strong> There are two ways to iterate over a Set() in JavaScript. The for..of and forEach loops. You can also use a traditional iterative for loop, but it is much more complex and not recommended (Ninja Code).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Iteration over Set using for..of and forEach<br /><br />

  <div></div>

```js
let set = new Set(['oranges', 'apples', 'bananas']);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Traditional iterative for loop over Set() object… (for..of or forEach is recommended)<br /><br />

  <div></div>

```js
let set = new Set(['oranges', 'apples', 'bananas']);

for (let i = set.values(), val = null; (val = i.next().value); ) {
  console.log(val);
}
```

:::note

You can also use a traditional iterative for loop, but it is much more complex and not recommended.

:::

  </div>
  </div>
</details>

---

### What is the difference between the set() and add() methods in Map?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Map object in JavaScript only has a set(key, value) method for adding key-value pairs. add() method doesn't exist in Map but is used in Set objects to add unique values.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple JavaScript code example showing the use of `set()` in a `Map` and `add()` in a `Set`:

```javascript
// Map
let map = new Map();
map.set('key1', 'value1');
console.log(map.get('key1')); // outputs: 'value1'

// Set
let set = new Set();
set.add('value1');
console.log(set.has('value1')); // outputs: true
```

In the above example, `set()` is used to add key-value pairs to the `Map` and `add()` is used to add unique values to the `Set`.

  </div>
  </div>
</details>

---

### How can you convert a Map to an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can convert a Map to an array using the Array.from() method or the spread operator (...), like this: Array.from(map) or [...map]. Both return an array of [key, value] pairs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

// Convert Map to Array using Array.from()
let array1 = Array.from(map);
console.log(array1); // outputs: [ ['key1', 'value1'], ['key2', 'value2'] ]

// Convert Map to Array using spread operator
let array2 = [...map];
console.log(array2); // outputs: [ ['key1', 'value1'], ['key2', 'value2'] ]`
```

  </div>
  </div>
</details>

---

### What is the difference between the has() and get() methods in Map?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `has(key)` method in Map checks if a key exists and returns a boolean. The `get(key)` method retrieves the value associated with the key, or `undefined` if the key doesn't exist.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple JavaScript code example showing the use of `has()` and `get()` in a `Map`:

```javascript
let map = new Map();
map.set('key1', 'value1');

console.log(map.has('key1')); // outputs: true
console.log(map.get('key1')); // outputs: 'value1'

console.log(map.has('key2')); // outputs: false
console.log(map.get('key2')); // outputs: undefined
```

In the above example, `has('key1')` returns true because 'key1' exists in the map, and `get('key1')` returns 'value1' which is the value associated with 'key1'. However, 'key2' does not exist in the map, so `has('key2')` returns false and `get('key2')` returns undefined.

  </div>
  </div>
</details>

---

### Can you use objects as keys in a Map? If so, how does it compare them?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use objects as keys in a `Map`. They are compared using the `SameValueZero` algorithm, so each object is considered distinct unless it's the same instance.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example showing how to use objects as keys in a `Map`:

```javascript
let obj1 = {name: 'Object 1'};
let obj2 = {name: 'Object 2'};

let map = new Map();
map.set(obj1, 'value1');

console.log(map.has(obj1)); // outputs: true
console.log(map.get(obj1)); // outputs: 'value1'

console.log(map.has(obj2)); // outputs: false
console.log(map.get(obj2)); // outputs: undefined
```

In this example, `obj1` and `obj2` are different instances, so they are considered distinct keys. `map.has(obj2)` returns false and `map.get(obj2)` returns undefined, even though `obj1` and `obj2` have the same structure.

  </div>
  </div>
</details>

---

### What is a Set in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a Set is a built-in object that allows the creation of a collection of unique values. Each value in a Set may only occur once.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let set = new Set();

// Adding values to the set
set.add(1);
set.add('Hello');
set.add(true);

console.log(set.size); // outputs: 3

// Checking if a value exists in the set
console.log(set.has('Hello')); // outputs: true
console.log(set.has(2)); // outputs: false

// Deleting a value from the set
set.delete(1);
console.log(set.size); // outputs: 2

// Iterating over the set
for (let item of set) {
  console.log(item);
}
```

  </div>
  </div>
</details>

---

### How do you add an element to a Set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can add an element to a Set using the add() method, which takes the element as an argument and adds it to the Set.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let set = new Set();

// Adding elements to the set
set.add(1);
set.add('Hello');
set.add(true);

console.log(set); // outputs: Set { 1, 'Hello', true }
```

  </div>
  </div>
</details>

---

### How do you remove an element from a Set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can remove an element from a Set using the delete() method, which takes the element as an argument and removes it from the Set.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let set = new Set();

// Adding elements to the set
set.add(1);
set.add('Hello');
set.add(true);

console.log(set); // outputs: Set { 1, 'Hello', true }

// Removing an element from the set
set.delete('Hello');

console.log(set); // outputs: Set { 1, true }
```

  </div>
  </div>
</details>

---

### How can you determine the size of a Set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can determine the size of a Set using the size property, which returns the number of elements in the Set.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let set = new Set();

// Adding elements to the set
set.add(1);
set.add('Hello');
set.add(true);

console.log(set.size); // outputs: 3
```

  </div>
  </div>
</details>

---

### How can you convert a Set to an array?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can convert a Set to an array using the Array.from() method or the spread operator [...mySet].
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let set = new Set();
set.add(1);
set.add('Hello');
set.add(true);

// Convert Set to Array using Array.from()
let array1 = Array.from(set);
console.log(array1); // outputs: [1, 'Hello', true]

// Convert Set to Array using spread operator
let array2 = [...set];
console.log(array2); // outputs: [1, 'Hello', true]
```

  </div>
  </div>
</details>

---
