---
title: JavaScript Objects
description: JavaScript Objects are a collection of key-value pairs. They are used to store data. String, Symbol, BigInt, Boolean, undefined, number, and null data types.
sidebar_position: 1
sidebar_label: Objects
keywords:
  - javascript objects
  - object values
  - object keys
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
  - javascript objects
  - object values
  - object keys
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObjectsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>JavaScript Objects | JavaScript Frontend Phone Interview</title>
</head>

**Objects the Basics: JavaScript Objects**

---

<AdSense />

---

<CloseAllAnswers />

### What are the seven (7) primitive JavaScript data types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The seven primitive data types include String, Symbol, BigInt, Boolean, undefined, number, and null data types.</div><br />
  <div><strong>Technical Response:</strong> There are seven primitive data types: text, integer, BigInt, Boolean, undefined, Symbol, and null. A primitive value gets directly represented at the language implementation's lowest level most of the time.
  </div>
  </div>
</details>

---

### Can you name the five primitive wrapper objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The five primitive wrapper objects in JavaScript are: String, Number, Boolean, Symbol, and BigInt.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const str = new String("Hello");
console.log(str.length); // Outputs: 5
console.log(str.toUpperCase()); // Outputs: HELLO

const num = new Number(42);
console.log(num.toFixed(2)); // Outputs: 42.00

const bool = new Boolean(true);
console.log(bool.valueOf()); // Outputs: true

const sym = Symbol("mySymbol");
console.log(sym.toString()); // Outputs: Symbol(mySymbol)

const bigInt = BigInt("9007199254740991");
console.log(bigInt.toString()); // Outputs: 9007199254740991
```

  </div>
  </div>
</details>

---

### Are JavaScript primitive immutable or mutable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript primitives are immutable, meaning their values cannot be changed after they are created. This ensures data consistency.</div><br />
  <div><strong>Technical Response:</strong> All primitives are unchanging and unchangeable. It is crucial to distinguish between a primitive and a variable with a primitive value. The variable can assign a new value, but it cannot get modified like objects, arrays, and functions can. A primitive can get swapped, but we cannot directly alter them.<br />
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
  <div><strong>Interview Response:</strong> Objects serve as collections of key-value pairs, organizing and storing data, allowing for complex structures, and facilitating methods for manipulating data.
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

---

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
  <div><strong>Interview Response:</strong> You can use an object constructor or an object literal. The two methods for creating an empty object in JavaScript are: using object literal syntax (let obj = &#123;&#125;), and the Object constructor (let obj = new Object())</div><br />
  <div><strong>Technical Response:</strong> We can create an empty object ("empty cabinet") using one of two syntaxes. You can use an object constructor or an object literal. The Object constructor gets called with the new keyword, and we should not confuse this with native Objects that should get called without the new keyword.<br />
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
  <div><strong>Interview Response:</strong> In an Object, the delimiter that separates a key from the value is the colon.
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
  <div><strong>Interview Response:</strong> Yes, a value in JavaScript can be of any type, including primitive data types, objects, arrays, and functions, allowing for versatile data structures.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Number
let age = 25;

// String
let name = "John";

// Boolean
let isStudent = true;

// Object
let person = { name: "Alice", age: 30 };

// Array
let numbers = [1, 2, 3, 4, 5];

// Function
function greet() {
  console.log("Hello!");
}

// Undefined
let undefinedValue;

// Null
let nullValue = null;
```

  </div>
  </div>
</details>

---

### What are the two ways to access a value in an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two ways to access a value in an object: dot notation (obj.key), and bracket notation (obj['key']). Both return the corresponding value.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, the dot notation and bracket notation get used in accessing object attributes. The dot notation commonly gets used because it is easier to read and grasp and is less verbose. The primary distinction between dot notation and bracket notation is that bracket notation allows us to access object characteristics through variables.
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
  <div><strong>Interview Response:</strong> Technically, JavaScript allows multi-word properties in objects, but this approach does not meet specifications because it can lead to errors. We should use camel-case as recommended by most style guides.</div><br />
  <div><strong>Technical Response:</strong> Technically, JavaScript enables multi-word properties in Objects, but it is not encouraged since it might create issues later in your code when you try to access it. The problem becomes evident when you try to access the property using dot notation. When naming functions, objects, attributes, and variables in JavaScript, you should always use the camelCase naming style.
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

### Can object-literal notation be used to implement computed properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you may assign the expression as a property to an object without first creating it with object-literal notation.
</div><br />
<div><strong>Technical Response:</strong> Yes, object-literal notation in JavaScript can be used to implement computed properties using square bracket notation &#123; [expression]: value &#125;. The expression inside brackets is evaluated as the property key.
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
  <div><strong>Interview Response:</strong> Object property names in JavaScript can be any string or Symbol. They should not conflict with built-in method names or reserved keywords, and avoid special characters.</div><br />
  <div><strong>Technical Response:</strong> There are no known constraints on naming Object properties. However, we should not use reserved keywords in most JavaScript components. It is possible to utilize reserved keywords as property names without making a mistake, although it is not encouraged. They can be strings or symbols (a specific form of identifier).
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

console.log(obj.for + obj.let + obj.return); // 6
```

  </div>
  </div>
</details>

---

### What is the minor snag with the special property name `__proto__`?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is not recommended to assign a non-object value, like a primitive value, to the special property name `__proto__` in JavaScript, as it may lead to unexpected outcomes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```

  </div>
  </div>
</details>

---

### Why does the "in" operator exist? Isn't it enough to compare against undefined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "in" operator checks for property existence, including inherited properties. Comparing against undefined won't detect a property explicitly set to undefined.</div><br />
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

### When we loop over an object in JavaScript, are its properties guaranteed to be in the order they were introduced, or is it unreliable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For objects, JavaScript does not guarantee the order of properties. However, for Array and Map objects, items are ordered in the sequence they were added.
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
  console.log(code); // 1, 41, 44, 49
}

let user = {
  name: 'John',
  surname: 'Smith',
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  console.log(prop); // name, surname, age
}
```

  </div>
  </div>
</details>

---

### Can you explain what an integer property is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "integer property" term here means a string that converts to and from an integer without a change. Basically, an integer property is a property whose key is a string representation of a non-negative integer.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Math.trunc is a built-in function that removes the decimal part
console.log(String(Math.trunc(Number('49')))); // "49", same, integer property
console.log(String(Math.trunc(Number('+49')))); // "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number('1.2')))); // "1", not same "1.2" ⇒ not integer property
```

  </div>
  </div>
</details>

---

### How do you access a property in an Object using dot notation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can access a property in an Object using dot notation by specifying the Object followed by a dot and the property name: objectName.propertyKey.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

console.log(car.brand); // Output: 'Toyota'
```

  </div>
  </div>
</details>

---

### How do you access a property in an Object using bracket notation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can access a property in an Object using bracket notation by specifying the Object followed by square brackets and the property name as a string: objectName['propertyKey']
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

console.log(person['name']); // Output: 'John'
```

  </div>
  </div>
</details>

---

### What is the difference between dot and bracket notation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Dot notation (obj.property) is shorter and readable, but can't handle property names with spaces/special characters. Bracket notation (obj["property"]) can handle any string as a property name.
  </div>
  </div>
</details>

---

### Can you add or remove properties from an Object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can add a property to an object with (obj.newProp = value) and remove it with (delete obj.propName) in JavaScript.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj = {};

// Adding property
obj.newProp = 'Hello';
console.log(obj); // Output: { newProp: 'Hello' }

// Removing property
delete obj.newProp;
console.log(obj); // Output: {}

```

  </div>
  </div>
</details>

---

### What is a computed property in JavaScript Objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A computed property in JavaScript is a property of an object defined using bracket notation with an expression, which is computed as the property name.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let propName = "age";

let user = {
  ["first" + "Name"]: "John", // computed property
  [propName]: 25              // computed property
};

console.log(user); // Output: { firstName: 'John', age: 25 }
```

  </div>
  </div>
</details>

---

### What is the special property "**proto**" in JavaScript Objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The __proto__ property in JavaScript is a non-standard, deprecated way to get or set the prototype of an object, part of the object's internal [[Prototype]] property.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // set rabbit's prototype to animal

console.log(rabbit.eats); // Output: true
```

In this example, rabbit inherits the eats property from animal through the prototype chain, thanks to the **proto** property. However, the use of **proto** is not recommended due to compatibility and performance issues. Instead, you should use Object.create(), Object.getPrototypeOf(), and Object.setPrototypeOf().

  </div>
  </div>
</details>

---

### What are a getters and setters in JavaScript Objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, getters and setters are special methods in an object, defined with `get` and `set`, used for retrieving and setting property values, allowing additional control.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(user.fullName); // Output: John Doe

user.fullName = "Jane Doe";
console.log(user.fullName); // Output: Jane Doe
```

In this example, fullName is a getter that returns the concatenation of firstName and lastName, and a setter that splits a name into firstName and lastName.

  </div>
  </div>
</details>

---
