---
title: Methods of Primitives
description: Methods of Primitives are functions that are attached to primitive values.
  What are the 7 primitive data types? Interview Questions and Answers for
  developers.
sidebar_position: 1
sidebar_label: Methods of Primitives
keywords:
  - methods of primitives
  - primitive methods
  - primitive values
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - js
tags:
  - methods of primitives
  - primitive methods
  - interview answers
  - interview questions
lastmod: 2022-05-01T21:44:10.727Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MethodsOfSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Methods of Primitives | JavaScript Frontend Phone Interview</title>
</head>

**Data Types: Methods of Primitives**

<CloseAllAnswers />

### What is a primitive in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A primitive is a basic data type that represents a single, immutable value, such as a string, number, boolean, null, undefined, symbol, or bigint.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example that shows how primitive types work in JavaScript:

```javascript
let stringPrimitive = "Hello, World!"; // String primitive
let numberPrimitive = 123; // Number primitive
let booleanPrimitive = true; // Boolean primitive
let nullPrimitive = null; // Null, which is a primitive with one null value
let undefinedPrimitive = undefined; // Undefined, a primitive that represents no value or no object

console.log(typeof stringPrimitive); // "string"
console.log(typeof numberPrimitive); // "number"
console.log(typeof booleanPrimitive); // "boolean"
console.log(typeof nullPrimitive); // "object" (this is a known JavaScript oddity, typeof null returns "object")
console.log(typeof undefinedPrimitive); // "undefined"

// Bonus: Symbol type, introduced in ES6
let symbolPrimitive = Symbol("symbol");
console.log(typeof symbolPrimitive); // "symbol"

// Bonus: BigInt type, introduced in ES10
let bigIntPrimitive = 10n;
console.log(typeof bigIntPrimitive); // "bigint"
```

Each `console.log` statement logs the type of each primitive to the console. Note the `typeof` operator in JavaScript is used to find out the type of a JavaScript variable.

  </div>
  </div>
</details>

---

### What is autoboxing in relation to primitive values in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Autoboxing in JavaScript is the automatic conversion of primitive data types (string, number, boolean, etc.) into their corresponding object wrappers (String, Number, Boolean) when a method is invoked on them.
  </div><br/>
  <div><strong>Technical Details:</strong> In JavaScript, autoboxing is the process by which primitive types are automatically converted to their associated object types (wrapper objects) when a method is called on them. This is possible because JavaScript has built-in constructor functions, String, Number, Boolean, and Symbol, which correspond to the string, number, boolean, and symbol primitive types. These constructor functions can create objects that behave similarly to their respective primitives.<br/><br/>For instance, when you call a method on a string primitive, JavaScript automatically "boxes" the string primitive in a String object so that the method can be executed. Once the operation is completed, it is converted back ("unboxed") to a primitive. This process is abstracted away from the developer, hence the term "autoboxing".
  </div>
  </div>
</details>

---

### What are the methods of primitives in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each primitive type has a set of methods associated with it that allow you to perform common operations on values of that type. For example, the toUpperCase() method can be used on strings to convert them to uppercase.
  </div><br/>
  <div><strong>Technical Details:</strong> In JavaScript, primitives are not objects and therefore cannot have methods. However, JavaScript has a feature known as "autoboxing", where it allows you to access string, number, boolean and symbol primitives as if they were objects and provides several methods you can use on these primitive values. This is achieved by automatically converting the primitive to an object wrapper when a method is called, then discarding the object wrapper when the operation is complete.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are examples for each primitive type:

**String methods**:

```javascript
let text = 'Hello, World!';

console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.includes('World')); // true
console.log(text.charAt(0)); // "H"
console.log(text.split(',')); // ["Hello", " World!"]
```

**Number methods**:

```javascript
let num = 12345.6789;

console.log(num.toFixed(2)); // "12345.68" - format number with 2 decimal places
console.log(num.toExponential(3)); // "1.235e+4" - returns a string, with the number written into exponential notation, a rounded and followed by "e", followed by the number of zeros.
console.log(num.toString()); // "12345.6789" - convert number to string
```

**Boolean methods**:

```javascript
let bool = true;

console.log(bool.toString()); // "true"
```

:::note
Note that null and undefined primitive types do not have any associated methods. Also remember, these methods do not change the original value, but rather return a new value.
:::

  </div>
  </div>
</details>

---

### Can you modify a primitive value using its methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, because primitives are immutable, you cannot modify them using methods. Instead, methods return new values.
  </div>
  </div>
</details>

---

### What are the seven (7) primitive JavaScript data types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The seven JavaScript primitives include String, Symbol, Boolean, BigInt, number, null, and undefined data types. These represent basic values that can be manipulated in JavaScript code.
  </div>
  </div>
</details>

---

### What are JavaScript's five (5) primitive wrapper objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, there are five primitive wrapper objects, which are used to wrap the corresponding primitive data types. These include String, Symbol, BigInt, Boolean, and Number, allowing access to additional methods and properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let language = 'JavaScript';
let s = language.substring(4);
console.log(s); // logs Script

// WHAT'S ACTUALLY HAPPENING BEHIND THE SCENES!

let language = 'JavaScript';

// behind the scenes of the language.substring(4);
let tmp = new String(language);
str = temp.substring(4);
temp = null;
```

  </div>
  </div>
</details>

---

### What is the reason for an Object not being considered a primitive data type in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Primitive data types have a single value, while objects can hold multiple values in collections and more intricate structures.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// String primitive
let str = 'hello'; // holds one value

// Object is Special
let user = {
  name: 'Jane', // holds multiple key/value pairs.
  age: 30,
};
```

  </div>
  </div>
</details>

---

### Can an object store a function as a property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, an object can store a function as a property. In JavaScript, functions are first-class objects, enabling them to be assigned as object properties.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let john = {
  name: 'John',
  sayHi: function () {
    console.log('Hi buddy!');
  },
};

john.sayHi(); // Hi buddy!
```

  </div>
  </div>
</details>

---

### Does a primitive remain primitive when used in conjunction with one of its methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a primitive is used in conjunction with one of its methods, it is temporarily converted into an object. After execution, it reverts back to a primitive.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Hello';

console.log(str.toUpperCase()); // returns string "HELLO"
```

  </div>
  </div>
</details>

---

### Some languages like Java allow us to explicitly create “wrapper objects” for primitives. Is this a best practice in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, creating wrapper objects for primitives in JavaScript is not considered a best practice, as it can result in unnecessary memory usage and performance overhead.</div><br />
  <div><strong>Technical Response:</strong> Technically, this can be done in JavaScript, but it is not recommended based on the specifications. There are several unintended consequences of using this practice, which should be avoided. A best practice is to use Number and Boolean object wrappers without the new operator.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(typeof 0); // "number"

console.log(typeof new Number(0)); // "object"! – not a number Huh!

// Objects are always truthy in if, so here the console.log will show up:

let zero = new Number(0);

if (zero) {
  // zero is true, because it's an object
  console.log('zero is truthy!?!');
}

// this is entirely valid:

let num = Number('123'); // convert a string to number
```

  </div>
  </div>
</details>

---

### What is the difference between a primitive value and a wrapper object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A primitive value is an immutable value representing a single, simple data entity, while a wrapper object is a mutable object used to represent and manipulate the corresponding primitive value.
  </div>
  </div>
</details>

---

### Can the null and undefined primitive data types to have methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, they are considered the most primitive data types. They both have no wrapper objects and do not provide any methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('Hello'.test); // return undefined, but shows no error

console.log(null.test); // returns type error

console.log(undefined.test); // returns type error
```

  </div>
  </div>
</details>

---

### Can you create your own methods for primitive values in JavaScript?  

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can create your own methods for primitive values in JavaScript by adding properties and methods to the prototype of the corresponding wrapper object (e.g. Number.prototype, String.prototype).
  </div><br/>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
String.prototype.customMethod = function() {
  return "Custom method called on: " + this;
};

var message = "Hello, JavaScript!"; // primitive string

console.log(message.customMethod()); // Output: "Custom method called on: Hello, JavaScript!"
```

  </div>
  </div>
</details>

---

### What are some common string methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some common string methods in JavaScript include toUpperCase(), toLowerCase(), slice(), indexOf(), replace(), concat(), and trim().
  </div>
  </div>
</details>

---

### What are some common number methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some common number methods in JavaScript include toFixed(), toPrecision(), toString(), parseInt(), and parseFloat().
  </div>
  </div>
</details>

---
