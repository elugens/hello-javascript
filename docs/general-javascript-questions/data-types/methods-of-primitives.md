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
  <div><strong>Interview Response:</strong> A primitive is a basic data type that represents a single, immutable value, such as a string, number, boolean, null, undefined, symbol, or bigint.<br /><br />
  </div>
  </div>
</details>

---

### What are the methods of primitives in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each primitive type has a set of methods associated with it that allow you to perform common operations on values of that type. For example, the toUpperCase() method can be used on strings to convert them to uppercase.
<br /><br />
  </div>
  </div>
</details>

---

### Can you modify a primitive value using its methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, because primitives are immutable, you cannot modify them using methods. Instead, methods return new values.
<br /><br />
  </div>
  </div>
</details>

---

### What are the seven (7) primitive JavaScript data types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The seven JavaScript primitives include String, Symbol, Boolean, BigInt, number, null, and undefined data types. These represent basic values that can be manipulated in JavaScript code.<br /><br />
  </div>
  </div>
</details>

---

### What are JavaScript's five (5) primitive wrapper objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, there are five primitive wrapper objects, which are used to wrap the corresponding primitive data types. These include String, Symbol, BigInt, Boolean, and Number, allowing access to additional methods and properties.<br /><br />
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
    alert('Hi buddy!');
  },
};

john.sayHi(); // Hi buddy!
```

  </div>
  </div>
</details>

---

### Does a primitive remain primitive when you use it in conjunction with one of its methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a primitive is used in conjunction with one of its methods, it is temporarily converted into an object. After execution, it reverts back to a primitive.<br />
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
  <div><strong>Technical Response:</strong> Technically, this can be done in JavaScript, but it is not recommended based on the specifications. There are several unintended consequences of using this practice, which should be avoided. A best practice is to use Number and Boolean object wrappers without the new operator.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(typeof 0); // "number"

console.log(typeof new Number(0)); // "object"! – not a number Huh!

// Objects are always truthy in if, so here the alert will show up:

let zero = new Number(0);

if (zero) {
  // zero is true, because it's an object
  alert('zero is truthy!?!');
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
  <div><strong>Interview Response:</strong> A primitive value is an immutable value representing a single, simple data entity, while a wrapper object is a mutable object used to represent and manipulate the corresponding primitive value.<br /><br />
  </div>
  </div>
</details>

---

### Is it possible for the null and undefined primitive data types to have methods in JavaScript?

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
  <div><strong>Interview Response:</strong> Yes, you can create your own methods for primitive values in JavaScript by adding properties and methods to the prototype of the corresponding wrapper object (e.g. Number.prototype, String.prototype).<br /><br />
  </div>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
String.prototype.customMethod = function() {
  return "Custom method called on: " + this;
};

var message = "Hello, World!"; // primitive string

console.log(message.customMethod()); // Output: "Custom method called on: Hello, World!"
```

  </div>
  </div>
</details>

---

### What are some common string methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some common string methods in JavaScript include toUpperCase(), toLowerCase(), slice(), indexOf(), replace(), concat(), and trim().<br /><br />
  </div>
  </div>
</details>

---

### What are some common number methods in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some common number methods in JavaScript include toFixed(), toPrecision(), toString(), parseInt(), and parseFloat().<br /><br />
  </div>
  </div>
</details>

---
