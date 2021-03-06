---
title: Object References & Copying
sidebar_position: 2
sidebar_label: References/Copying
keywords:
  - object references
  - object copying
  - primitive value copying
  - object cloning
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
  - object references
  - object copying
  - primitive value copying
  - object cloning
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObjectRefSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Object References and Copying | JavaScript Frontend Phone Interview</title>
</head>

**Objects the Basics: References/Copying**

<CloseAllAnswers />

---

### Explain the difference between an object copy and a primitive value copying?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Objects are stored and copied by reference, while primitive values always get copied as whole values.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Here we put a copy of the message into the phrase:
let message = 'Hello!';
let phrase = message;

console.log(phrase); // returns 'Hello!'

phrase = 'Goodbye!';
console.log(phrase);
// returns 'Goodbye!', you can't do that with objects

// Copying a reference, but the object itself not duplicated

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

// Two objects are equal only if they are the same object.

let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true
```

  </div>
  </div>
</details>

---

### Are two objects always equal in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two objects are only equal if they are the same object, achieved through object reference.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Both are equal objects reference the same object literal
let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

////////////////////////////

// two independent objects

let a = {};
let b = {};

alert(a == b); // false
```

  </div>
  </div>
</details>

---

### What if we need to duplicate an object? Is there a way to clone an object and its properties at the primitive level?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's a bit of a process; you need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them at the primitive level. We also can use object.assign to replace for..in loop for simple cloning.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = 'Pete'; // changed the data in it

alert(user.name); // still John in the original object

////////////////////////////

// We also can use Object.assign to replace for..in loop for simple cloning:

let user = {
  name: 'John',
  age: 30,
};

let clone = Object.assign({}, user);
```

  </div>
  </div>
</details>

---

### Can properties reference another property in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, this happens when a property has an object as a value and has individual properties. The parent property references the nested properties.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  // The sizes property references the height and width properties
  sizes: {
    height: 182,
    width: 50,
  },
};

alert(user.sizes.height); // 182
```

:::note

Notably, this means that values of properties are not necessarily primitive.

:::

  </div>
  </div>
</details>

---

### Can objects assigned to a constant (const) be modified?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The object can be modified, but the declared variable cannot. The reason behind this is that the variable is constant, it must always reference the same object, but the properties of that object are free to change.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const user = {
  name: 'John',
};

user.name = 'Pete'; // (*)

alert(user.name); // Pete
```

  </div>
  </div>
</details>

---
