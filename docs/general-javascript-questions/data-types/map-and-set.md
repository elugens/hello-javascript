---
title: Map and Set
description: Map and Set are not primitive data types in JavaScript. They are objects.
sidebar_position: 7
sidebar_label: Map and Set
---

**Data Types: Map and Set**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the difference between Map and Object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference is that Map allows keys of any type, and objects also convert keys to strings, which is another known difference. As you look at Objects and Maps, another apparent difference is that Objects cannot use another object as a key.</div><br />
  <div><strong>Technical Response:</strong> The Map object holds key-value pairs (Just like Objects) and remembers the original insertion order of the keys. Any value (both objects and primitive values) may get used as either a key or a value. But the main difference is that Map allows keys of any type. Objects also convert keys to strings, which is another known difference. The keys of an Object must be either a String or a Symbol. As you look at Objects and Maps, another apparent difference is that Objects cannot use another object as a key.
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
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'

alert(map.size); // 3
```

  </div>
  </div>
</details>

---

### What are some methods and properties that the Map Object implements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several built-in methods and properties of the Map Object, including new Map(), set, get, has, delete, clear, and size.<br /><br />
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
  <div><strong>Interview Response:</strong> Using objects as keys is one of the most notable and vital Map features. The same does not count for objects, and string as a key in an object is fine, but we cannot use another object as a key in an Object.
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
alert(visitsCountObj['[object Object]']); // 123
alert(visitsCountObj[ben]); // ben returns 123 because it was overwritten by john
```

  </div>
  </div>
</details>

---

### How does the Map Object compare keys?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So, NaN can be used as the key as well. This algorithm cannot be changed or customized.
</div>
  </div>
</details>

---

### Which map methods get used to iterate over a Map Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three Map methods that you can use to iterate over a map, including the key, values, and entries methods.</div><br />
  <div><strong>Technical Response:</strong> There are three Map methods that you can use to iterate over a map, including the key, values, and entries methods. The keys method returns the keys within the Map. The entries method returns an iterable for entries [key, value]. At the same time, the Object.values method returns an iterable for values. Notable, by default entries, is used in the for…of loop. So, it is not necessary to invoke it explicitly. The iteration goes in the same order as the values get inserted, and the map preserves this order, unlike regular Objects.
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
  <div><strong>Interview Response:</strong> Yes, the forEach method gets used to iterate over the Map Object.</div><br />
  <div><strong>Technical Response:</strong> The forEach method gets used to iterate over the Map Object. The forEach() method executes a provided function once for each Map entry. You should note that instead of producing a [key, value]; as a result, it produces the opposite [value, key]. You can choose the format of your choice to meet the proposed result.
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
  <div><strong>Interview Response:</strong> Technically, yes, but it is not recommended because it uses the feature of a generic object. There is a significant loss of built-in Map methods like set and delete when it gets transformed into a generic object.
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

### Can you convert a plain object into a Map in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can create a new map object and get the object entries using the object.entries method.</div><br />
  <div><strong>Technical Response:</strong> Yes, if we have a plain object and would like to create a Map from it, we can use the built-in method Object.entries(obj) that return an array of key/value pairs for an object precisely in that format.
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
  <div><strong>Interview Response:</strong> The Object.fromEntries method transforms a list of key-value (Map Object) pairs into an object. Object.entries get the entries that we can place on a Map.</div><br />
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

### Explain how does the Set Object function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Set object is a special object that lets you store “unique” values of any type, whether primitive values or object references.</div><br />
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
  </div>
  </div>
</details>

---

### What is the best way to loop/iterate over a Set in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the for..of and forEach loops. We can also use a traditional iteration, but this does not meet standard recommendations.</div><br />
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

  </div>
  </div>
</details>

---
