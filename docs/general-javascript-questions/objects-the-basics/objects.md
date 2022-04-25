---
title: JavaScript Objects
description: JavaScript Objects are a collection of key-value pairs. They are used to store data.
sidebar_position: 1
sidebar_label: Objects
---

**Objects the Basics: JavaScript Objects**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What are the seven (7) primitive JavaScript data types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, Symbol, BigInt, Boolean, undefined, number, and null data types.</div><br />
  <div><strong>Technical Response:</strong> There are seven primitive data types: text, integer, BigInt, Boolean, undefined, Symbol, and null. A primitive value gets directly represented at the language implementation's lowest level most of the time.<br /><br />
  </div>
  </div>
</details>

---

### Are JavaScript primitive immutable or mutable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All primitives are immutable and cannot be changed.</div><br />
  <div><strong>Technical Response:</strong> All primitives are unchanging and unchangeable. It is crucial to distinguish between a primitive and a variable with a primitive value. The variable can assign a new value, but it cannot get modified like objects, arrays, and functions can. A primitive can get swapped, but it cannot get directly altered.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using a string method does not mutate the string
var bar = 'baz';
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push('plugh');
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

  </div>
  </div>
</details>

---

### What is the purpose of an object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Objects get used to store keyed collections of various data and more complex entities.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  // an object
  name: 'John', // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
```

:::note

In JavaScript, objects penetrate almost every aspect of the language.

:::

  </div>
  </div>
</details>

---

### What are the two ways to implement an empty Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use an object constructor or an object literal.</div><br />
  <div><strong>Technical Response:</strong> An empty object ("empty cabinet") can get created using one of two syntaxes. You can use an object constructor or an object literal. The Object constructor gets called with the new keyword, and we should not confuse this with native Objects that should get called without the new keyword.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

  </div>
  </div>
</details>

---

### What delimiter separates a key from the value in an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key-value pair get separated by a colon.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  // an object
  name: 'John', // key : value
  age: 30, // by key "age" store value 30
};
```

  </div>
  </div>
</details>

---

### Can a value be of any type in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, since all values in JavaScript are dynamically typed and observed while the script executes.
</div>
  </div>
</details>

---

### What are the two ways to access a value in an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The dot notation and bracket notation get used to accessing the object property values in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, the dot notation and bracket notation get used in accessing object attributes. The dot notation commonly gets used because it is easier to read and grasp and is less verbose. The primary distinction between dot notation and bracket notation is that bracket notation allows us to access object characteristics through variables.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {
  cat: 'meow',
  dog: 'woof',
};

// Dot Notation
let sound = obj.cat;
console.log(sound);
// meow

// Bracket Notation
let sound = obj['cat']; // Notice that cat is in ‘quotes’ (required)
console.log(sound);
// meow
```

  </div>
  </div>
</details>

---

### Can you use multi-word property names in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, JavaScript allows multi-word properties in Objects, but this approach does not get recommended because it can lead to errors. We should use camel-case as recommended by most style guides.</div><br />
  <div><strong>Technical Response:</strong> Technically, JavaScript enables multi-word properties in Objects, but it is not encouraged since it might create issues later in your code when you try to access it. The problem becomes evident when you try to access the property using dot notation. When naming functions, objects, attributes, and variables in JavaScript, you should always use the camelCase name style.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true,  // multi-word property name must be quoted
};

console.log(user['likes birds']); // return true
console.log(user.likes birds); // returns a SyntaxError
```

  </div>
  </div>
</details>

---

### Is JavaScript able to implement computed properties using object-literal notation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you may assign the expression as a property to an object without first creating it with object-literal notation.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Complex Expressions inside of square brackets
function objectify(key, value) {
  return {
    [key]: value,
  };
}

objectify('name', 'Tyler'); // { name: 'Tyler' }

//////////////////////////

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5, // bag.appleComputers = 5
};

console.log(bag.appleComputers); // logs 5
```

  </div>
  </div>
</details>

---

### Are there any restrictions on Object property names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, there are no known restrictions on Object property names, but we should avoid reserved words even though we can technically use them.</div><br />
  <div><strong>Technical Response:</strong> There are no known constraints on naming Object properties. However, reserve keywords do not get permitted in most JavaScript components. It is possible to utilize reserved keywords as property names without making a mistake, although it is not encouraged. They can be strings or symbols (a specific form of identifier).<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6
```

  </div>
  </div>
</details>

---

### What is the minor snag with the special property name `__proto__`?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The unique property name `__proto__` cannot get set to a non-object value such as a primitive value. 
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```

  </div>
  </div>
</details>

---

### Why does the "in" operator exist? Isn't it enough to compare against undefined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “in” operator is used to check if a property exists or loop over object properties. Using it to compare against undefined can have less than truthy results.</div><br />
  <div><strong>Note:</strong> We should not use the "in" operator to loop over arrays; not a recommended approach.
  </div><br />
  <div><strong>Technical Answer:</strong>The comparison with undefined, on the other hand, works most of the time. However, there is one exception where it fails yet "in" works ideally. We may use the "in" operator to check if a property exists.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {
  test: undefined,
};

console.log(obj.test); // returns undefined, so - no such property?

console.log(obj.test === undefined); // true

console.log('test' in obj); // true, the property does exist!
```

  </div>
  </div>
</details>

---

### Are object properties in order? In other words, do we get all attributes in the same order they get introduced if we loop over an object? Can we put our faith in this?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The short answer is that they get ordered in a particular way, integer properties get sorted, and others appear in creation order. This behavior is not a reliable approach, and we are seeking a specific numbered order.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Integers are in sorted order
let codes = {
  49: 'Germany',
  41: 'Switzerland',
  44: 'Great Britain',
  // ..,
  1: 'USA',
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

let user = {
  name: 'John',
  surname: 'Smith',
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert(prop); // name, surname, age
}
```

  </div>
  </div>
</details>

---

### Explain what an integer property is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "integer property" term here means a string that converts to and from an integer without a change.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Math.trunc is a built-in function that removes the decimal part
alert(String(Math.trunc(Number('49')))); // "49", same, integer property
alert(String(Math.trunc(Number('+49')))); // "49", not same "+49" ⇒ not integer property
alert(String(Math.trunc(Number('1.2')))); // "1", not same "1.2" ⇒ not integer property
```

  </div>
  </div>
</details>

---
