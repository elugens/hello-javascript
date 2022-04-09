---
title: Methods of Primitives
description: Methods of Primitives are functions that are attached to primitive values.
sidebar_position: 1
sidebar_label: Methods of Primitives
---

**Data Types: Methods of Primitives**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What are the seven (7) primitive JavaScript data types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, Symbol, Boolean, BigInt, number, null, and undefined.</div><br />
  <div><strong>Technical Response:</strong> There are 7 primitive data types that include the string, number, bigint, Boolean, undefined, symbol, and null data types. Most of the time, a primitive value is represented directly at the lowest level of the language implementation.<br /><br />
  </div>
  </div>
</details>

---

### What are the five (5) primitive wrapper objects in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, Symbol, BigInt, Boolean, and Number.</div><br />
  <div><strong>Technical Response:</strong> There are 5 primitive wrapper objects that include the String, Number, BigInt, Boolean, and Symbol.<br /><br />
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

### Why isn’t an Object a primitive data type?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A primitive data type has only a single value. Objects on the other hand can contain more than one value stored in collections and more complex structures.
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
  <div><strong>Interview Response:</strong> Yes, a function can be used as a property of an object. It is more commonly called an object method.
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

### Does a primitive remain a primitive or return a primitive value when you use it in conjunction with one of its methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a primitive remains a primitive regardless of what method is called on it.</div><br />
  <div><strong>Technical Response:</strong> Yes, a primitive remains a primitive. For instance, there exists a string method `str.toUpperCase()` that returns a capitalized string. The type of the returned value remains a string.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Hello';

alert(str.toUpperCase()); // HELLO
```

  </div>
  </div>
</details>

---

### Some languages like Java allow us to explicitly create “wrapper objects” for primitives using a syntax like new Number(1) or new Boolean(false). Is this a best practice in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, using the “new” syntax can be done, but it is not recommended because it will return an object and not the primitive value as intended.</div><br />
  <div><strong>Technical Response:</strong> Technically this can be done in JavaScript, but it is not recommended based on the specifications. There are several unintended consequences of using this practice and it should be avoided. A best practice is to use Number and Boolean object wrappers without the new operator.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"! – not a number Huh!

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

### Do the null and undefined primitive data types have methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, they are considered the most primitive data types of all. They both have no wrapper objects and do not provide any methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Hello'.test); // return undefined, but shows no error

alert(null.test); // returns type error

alert(undefined.test); // returns type error
```

  </div>
  </div>
</details>

---
