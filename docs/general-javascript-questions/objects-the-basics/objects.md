---
title: Objects
sidebar_position: 1
---

# JavaScript Objects

**Objects the Basics: JavaScript Objects**

<head>
  <title>JavaScript Objects - Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the seven (7) primitive data types in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, symbol, bigint, Boolean, undefined, number, and null data types.</div><br />
  <div><strong>Technical Response:</strong> There are 7 primitive data types, including string, number, bigint, Boolean, undefined, symbol, and null data types. A primitive value is usually represented directly at the lowest level of the language implementation.<br /><br />
  </div>
  </div>
</details>

Source: <https://developer.mozilla.org/en-US/docs/Glossary/Primitive>

### Are JavaScript primitives mutable or immutable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Primitives are immutable, which means they cannot be changed.</div><br />
  <div><strong>Technical Response:</strong> The technical answer is that all primitives are immutable, which means they cannot be altered. It is important to recognize that a primitive by itself is not the same thing as a variable assigned a primitive value. Variables may be reassigned a new value, but their existing values cannot be changed in the same manner that objects, arrays, and functions can be altered. Primitives can be replaced, but they cannot be altered directly.<br /><br />
  </div>
  </div>
</details>

```js
// Using a string method does not mutate the string

var bar = 'baz';

console.log(bar); // baz
bar.toUpperCase();

console.log(bar); // baz
// Using an array method mutates the array

var foo = [];

console.log(foo); // []
foo.push('plugh');

console.log(foo); // ["plugh"]
// Assignment gives the primitive a new (not a mutated) value

bar = bar.toUpperCase(); // BAZ
```

Source: <https://developer.mozilla.org/en-US/docs/Glossary/Primitive>

### What is the purpose of an Object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Objects are used to store keyed collections of various data and more complex entities.
</div>
  </div>
</details>

:::note

In JavaScript, objects penetrate almost every aspect of the language.

:::

Code Example:

```js
let user = {
  // an object

  name: 'John', // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
```

Source: <https://javascript.info/object>

### What are the two ways to implement an empty Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use an object constructor or an object literal.</div><br />
  <div><strong>Technical Response:</strong> An empty object (“empty cabinet”) can be created using one of two syntaxes. You can use an object constructor or an object literal. The Object constructor is called with the new keyword. We should not confuse this with native Objects that should be called without the new keyword.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

Source: <https://javascript.info/object#literals-and-properties>

### What is the delimitator that separates a key from the value in an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key value pair is separated by a semicolon.
</div>
  </div>
</details>

Code Example:

```js
let user = {
  // an object

  name: 'John', // key : value
  age: 30, // by key "age" store value 30
};
```

Source: <https://javascript.info/object#literals-and-properties>

### Can a value be of any type in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes since all values in JavaScript are dynamically typed and observed while the script executes.
</div>
  </div>
</details>

Source: <https://javascript.info/object#literals-and-properties>

### What are the two ways to access a value in an Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The dot notation and bracket notation both are used to access the object property values in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> The dot notation and bracket notation both are used to access the object properties in JavaScript. The dot notation is used mostly as it is easier to read and comprehend and less verbose. The main difference between dot notation and bracket notation is that the bracket notation allows us to access object properties using variables.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let obj = {
  cat: 'meow',

  dog: 'woof',
};

// Dot Notation

let sound = obj.cat;

console.log(sound);

// meow

// Bracket Notation

let sound = obj['cat']; // Notice that cat is in ‘quotes’ (required)

console.log(sound);

// meow
```

Source: <https://javascript.info/object#literals-and-properties>

### Can you use multi-word property name in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, JavaScript allows multi-word properties in Objects, but it is not recommended because it can lead to errors. We should use camel case as recommended by most style guides.</div><br />
  <div><strong>Technical Response:</strong> Technically, JavaScript allows multi-word properties in Objects, but it is not recommended because it can lead to errors when you try to access it later in your code. The issue becomes apparent when you try to access the property using dot notation. When naming functions, objects, properties, and variables. You should always use the camelCase name style in JavaScript.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let user = {

  name: "John",

  age: 30,

  "likes birds": true,  // multi-word property name must be quoted

};

console.log(user['likes birds']); // return true

console.log(user.likes birds); // returns a SyntaxError
```

Source: <https://javascript.info/object#square-brackets>

### Is JavaScript capable of handling computed properties using object literal notation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use object literal notation to assign the expression as a property on the object without having to create it first.
</div>
  </div>
</details>

Code Example:

```js
// Complex Expressions inside of square brackets

function objectify(key, value) {
  return {
    [key]: value,
  };
}

objectify('name', 'Tyler'); // { name: 'Tyler' }

//////////////////////////

let fruit = 'apple';

let bag = {
  [fruit + 'Computers']: 5, // bag.appleComputers = 5
};
```

Source: <https://javascript.info/object#computed-properties>

### Are there any restrictions on Object property names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, there are no known restrictions on Object property names, but we should avoid reserved words even though we can technically use them.</div><br />
  <div><strong>Technical Response:</strong> Technically, there are no known restrictions on Object property names. Although reserve keywords are not allowed in most components of JavaScript. It is possible to use reserved keywords as property names without error, but it is not recommended. They can be any strings or symbols (a special type for identifiers) that you choose.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
// these properties are all right

let obj = {
  for: 1,

  let: 2,

  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6
```

Source: <https://javascript.info/object#property-names-limitations>

### What is the minor gotcha with the special property name `__proto__`?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The special property name proto cannot be set to non-object value such as a primitive value.
</div>
  </div>
</details>

Code Example:

```js
let obj = {};

obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
```

Source: <https://javascript.info/object#property-names-limitations>

### Why does the “in” operator exist? Isn’t it enough to compare against undefined?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “in” operator is used to check if a property exists or loop over object properties. Using it to compare against undefined can have less than truthy results.</div><br />
  <div><strong>Note:</strong> We should not use the “in” operator to loop over arrays, it not recommended.
  </div><br />
  <div><strong>Technical Answer:</strong> Well, most of the time the comparison with undefined works fine. But there is a special case when it fails, but "in" works correctly. We can use the “in” operator to see if a property exists.
  </div>
  </div>
</details>

Code Example:

```js
let obj = {
  test: undefined,
};

console.log(obj.test); // returns undefined, so - no such property?
console.log(obj.test === undefined); // true
console.log('test' in obj); // true, the property does exist!
```

Source: <https://javascript.info/object#property-existence-test-in-operator>

### Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The short answer is that they are ordered in a special fashion, integer properties are sorted, and others appear in creation order. This is not a reliable approach we are seeking a specific numbered order.
</div>
  </div>
</details>

Code Example:

```js
// Integers are in sorted order

let codes = {
  49: 'Germany',

  41: 'Switzerland',

  44: 'Great Britain',

  // ..,

  1: 'USA',
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

let user = {
  name: 'John',

  surname: 'Smith',
};

user.age = 25; // add one more
// non-integer properties are listed in the creation order

for (let prop in user) {
  alert(prop); // name, surname, age
}
```

Source: <https://javascript.info/object#ordered-like-an-object>

### Explain, what is a JavaScript integer property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “integer property” term here means a string that can be converted to-and-from an integer without a change.
</div>
  </div>
</details>

Code Example:

```js
// Math.trunc is a built-in function that removes the decimal part

alert(String(Math.trunc(Number('49')))); // "49", same, integer property
alert(String(Math.trunc(Number('+49')))); // "49", not same "+49" ⇒ not integer property
alert(String(Math.trunc(Number('1.2')))); // "1", not same "1.2" ⇒ not integer property
```

Source: <https://javascript.info/object#ordered-like-an-object>
