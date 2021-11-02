---
title: Map and Set
sidebar_position: 7
---

# Map and Set

**Data Types: Map and Set**

<head>
  <title>Map and Set - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the difference between Map and Object in JavaScript?

**Interview Answer:** The main difference is that Map allows keys of any type. Objects also convert keys to strings, which is another known difference. As you begin to look at Objects and Maps another apparent difference is that Objects cannot use another Object as a key.

**Technical Answer:** The Map object holds key-value pairs (Just like Objects) and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. But the main difference is that Map allows keys of any type. Objects also convert keys to strings, which is another known difference. The keys of an Object must be either a String or a Symbol. As you begin to look at Objects and Maps another apparent difference is that Objects cannot use another Object as a key.

Example: Different types as keys

```js
let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key
// remember the regular Object? it would convert keys to string

// Map keeps the type, so these two are different:

alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
alert(map.size); // 3
```

Source: <https://javascript.info/map-set#map>

### What are some of the methods and properties that the Map Object implements?

**Interview Answer:** There are several built-in methods and properties of the Map Object including new Map(), set, get, has, delete, clear, and size.

Methods and properties are:

- new Map() – creates the map.
- map.set(key, value) – stores the value by the key.
- map.get(key) – returns the value by the key, undefined if key does not exist in map.
- map.has(key) – returns true if the key exists, false otherwise.
- map.delete(key) – removes the value by the key.
- map.clear() – removes everything from the map.
- map.size – returns the current element count.

Example:

```js
let contacts = new Map();

contacts.set('Raymond , {phone: "213-555-1234", address: "123 N 1st Ave"});

contacts.has('Jessie'); // true

contacts.get('Hilary'); // undefined

contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"});

contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}

contacts.delete('Raymond'); // false

contacts.delete('Jessie'); // true

console.log(contacts.size); // 1
```

Source: <https://javascript.info/map-set#map>

### What is one of the most notable and important Map features in JavaScript?

**Interview Answer:** Using objects as keys is one of the most notable and important Map features. The same does not count for objects. String as a key in object is fine, but we cannot use another Object as a key in Object.

Example:

```js
let john = { name: 'John' };

let ben = { name: 'Ben' };

let visitsCountObj = {}; // try to use an object
visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced
// That's what got written!

alert(visitsCountObj['[object Object]']); // 123
alert(visitsCountObj[ben]); // ben returns 123 because it was overwritten by john
```

Source: <https://javascript.info/map-set#map>

### How does the Map Object compare keys?

**Interview Answer:** Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So, NaN can be used as the key as well. This algorithm cannot be changed or customized.

Source: <https://javascript.info/map-set#map>

### Which map methods can be used to iterate over a Map Object?

**Interview Answer:** There are three Map methods that you can use to iterate over a map including the key, values, and entries methods.

**Technical Answer:** There are three Map methods that you can use to iterate over a map including the key, values, and entries methods. The keys method simply returns the keys within the Map Object. Values method returns an iterable for values and the entries method returns an iterable for entries [key, value]. Notable, by default entries is used in the for…of loop. So, it is not necessary to invoke it explicitly. The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Objects.

Code Example:

```js
let recipeMap = new Map([
  ['cucumber', 500],

  ['tomatoes', 350],

  ['onion', 50],
]);

// iterate over keys (vegetables)

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)

for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

let recipeMap = new Map([
  ['cucumber', 500],

  ['tomatoes', 350],

  ['onion', 50],
]);

// We can also iterate over entries using a forEach()

recipeMap.forEach((quantity, veg) => console.log(`${veg}, ${quantity}`));
```

Source: <https://javascript.info/map-set#iteration-over-map>

### Besides the key, values, and entries methods, is there another method that you can use to iterate over a Map Object?

**Interview Answer:** Yes, the forEach method can be used to iterate over the Map Object.

**Technical Answer:** The forEach method can be used to iterate over the Map Object. The forEach() method executes a provided function once for each Map entry. It should be noted that instead of producing a [key, value] as a result it produces the opposite [value, key]. You can choose the format of your choice to meet the proposed result.

Example:

```js
let recipeMap = new Map([
  ['cucumber', 500],

  ['tomatoes', 350],

  ['onion', 50],
]);

// iterate over entries using a forEach()

recipeMap.forEach((quantity, veg) => console.log(`${veg}, ${quantity}`));
```

Source: <https://javascript.info/map-set#iteration-over-map>

### Can you set properties for Map the same way you add properties for a regular object literal?

**Interview Answer:** Technically Yes, but it is not recommended because it uses the feature of a generic object. In fact, there is a significant loss of built-in Map methods like set and delete when it is transformed into a generic object.

Example:

```js
// Bad Way

let wrongMap = new Map();

wrongMap['bla'] = 'blaa';

wrongMap['bla2'] = 'blaaa2';

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
// Any attempt to revert back to Maps built-in methods will fail

wrongMap.has('bla'); // false
wrongMap.delete('bla'); // false
console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }
// Right way for storing data in the Map - set(key, value) method.

let contacts = new Map();

contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });

contacts.has('Jessie'); // true
contacts.get('Hilary'); // undefined
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });

contacts.get('Jessie'); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond'); // false
contacts.delete('Jessie'); // true
console.log(contacts.size); // 1
```

Source: <https://javascript.info/map-set#object-entries-map-from-object>

### Can you convert a plain object into a Map in JavaScript?

**Interview Answer:** Yes, we can create a new map object and get the object entries using the object.entries method.

**Technical Answer:** Yes, if we have a plain object, and we would like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

Example:

```js
let obj = {
  name: 'John',

  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get('name')); // John
```

Source: <https://javascript.info/map-set#object-entries-map-from-object>

### What is the main difference between Object.entries and Object.fromEntries methods in relation to the Map Object?

**Interview Answer:** The Object.fromEntries method transforms a list of key-value (Map Object) pairs into an object. Object.entries gets the entries that we can place in a Map.

**Technical Answer:** If we have a plain object, and we would like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format. The Object.fromEntries() method transforms a list of key-value (Map Object) pairs into an object. So, both have conversion components that are the opposite of one another.

Example: Object.fromEntries()

```js
let map = new Map();

map.set('banana', 1);

map.set('orange', 2);

map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (\*)
// done!

// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
Example: Object.entries();

let obj = {
  name: 'John',

  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get('name')); // John
```

Source: <https://javascript.info/map-set#object-entries-map-from-object>

### Explain, how does the Set Object function in javaScript?

**Interview Answer:** The Set object is a special type of object that lets you store “unique” values of any type, whether primitive values or object references.

**Technical Answer:** The Set object is a special type of object that lets you store unique values of any type, whether primitive values or object references. The Set() constructor creates the base structure of the object. The main feature is that repeated calls of set.add(value) with the same value do not do anything. That is the reason why each value appears in a Set only once.

Example:

```js
let set = new Set();

let john = { name: 'John' };

let pete = { name: 'Pete' };

let mary = { name: 'Mary' };

// visits, some users come multiple times

set.add(john);

set.add(pete);

set.add(mary);

set.add(john);

set.add(mary);

// set keeps only unique values

alert(set.size); // 3
for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

Source: <https://javascript.info/map-set#set>

### What are the main differences between a Set and Array objects?

**Interview Answer:** The main difference is that Set only allows unique data values, while an Array allows duplicates.

**Technical Answer:** Well, in general, Array is type of structure representing block of data (numbers, objects, etc.) allocated in consecutive memory. Set, more familiar as a Math concept, is an abstract data type which contains only distinct elements/objects without the need of being allocated orderly by index. Array and Set are technically different concepts, in JavaScript. One of the biggest differences here, you may notice, is that elements in Array can be duplicate (unless you tell it not to be), and in Set, they just cannot (regardless of what you decide). In addition, Array is considered as “indexed collection” type of data structure, while Set is considered as “keyed collection”.

Source: <https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a>

### What is the best way to loop/iterate over a Set in JavaScript?

**Interview Answer:** We can use the for..of and forEach loops. We can also use a traditional iteration, but it is not recommended.

**Technical Answer:** There are two ways to iterate over a Set() in JavaScript, according to the MDN. The for..of and forEach loops. You can also use a traditional iterative for loop, but it is much more complex and not recommended (Ninja Code).

Example: Iteration over Set using for..of and forEach

```js
let set = new Set(['oranges', 'apples', 'bananas']);

for (let value of set) alert(value);

// the same with forEach:

set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

Example: Traditional iterative for loop over Set()
object… (for..of or forEach is recommended)

```js
let set = new Set(['oranges', 'apples', 'bananas']);

for (let i = set.values(), val = null; (val = i.next().value); ) {
  console.log(val);
}
```

Source: <https://javascript.info/map-set#iteration-over-set>
