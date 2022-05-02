---
title: Optional Chaining Operator
description: The optional chaining operator (?.) is a JavaScript operator that is used to access properties and methods of an object. Pass your next frontend phone interview
sidebar_position: 6
sidebar_label: Optional Chaining
keywords:
  - optional chaining
  - optional chaining operator
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
  - optional chaining
  - optional chaining operator
  - interview answers
  - interview questions
---

<head>
  <title>Optional Chaining | JavaScript Frontend Interview Questions</title>
</head>

**Objects the Basics: Optional Chaining**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Explain what JavaScript's optional chaining operator (?.) does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The optional chaining operator is safe to access nested object properties, even if an intermediate property does not exist.</div><br />
  <div><strong>Technical Response:</strong> The optional chaining operator (?.) allows you to read the value of property deep inside a chain of related objects without explicitly validating each reference in the chain. If the value preceding (?.) is undefined or null, optional chaining (?.) terminates the evaluation and returns undefined.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {}; // user has no address

alert(user?.address?.street); // undefined (no error)

let user2 = {};
alert(user2.address.street); // returns a type error
```

  </div>
  </div>
</details>

---

### What will the optional chaining operator (?.) return if an object does not exist?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The optional chaining operator returns undefined if the object does not exist (equals null). We will see this outcome when an object gets set to null. If the object is not defined, it results in a reference error.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = null;

alert(user?.address); // undefined
alert(user?.address.street); // undefined

alert(myUser?.address.street); // returns a reference error
```

  </div>
  </div>
</details>

---

### When should the optional chaining (?.) operator be used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should use the option chaining operator with the intent to handle object properties that are already known to be optional.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Short Circuit results in a false response.<br /><br />

  <div></div>

```js
let user = null;
let x = 0;

user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

alert(x); // 0, value not incremented.
```

:::note

If it is not optional, it can result in a false scenario that goes unchecked. This behavior could result in silent coding errors and become more challenging to debug.

:::

  </div>
  </div>
</details>

---

### Is optional chaining (?.) merely an operator or a syntax construct?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, it is a syntax construct, but most developers refer to it as an operator.</div><br />
  <div><strong>Technical Response:</strong> It is technically a syntactic construct. However, it generally gets referred to as an operator. It is more than simply an operator, though, and may get used with functions (?.()) and square brackets (?.[]). For instance, ?.() is used to invoke a function that may or may not exist. If we want to utilize brackets [] instead of dot to access properties, we may use the?.[] syntax (.).<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Function Call<br /><br />

  <div></div>

```js
let userAdmin = {
  admin() {
    alert('I am admin');
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing (no such method)
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Bracket Property Check<br /><br />

  <div></div>

```js
let key = 'firstName';

let user1 = {
  firstName: 'John',
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined
```

  </div>
  </div>
</details>

---

### Can the optional chaining (syntax construct) operator be used to store or write values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the optional chaining operator (?.) for safe reading and deleting, but not writing. The optional chaining operator (?.) has no use on the left side of an assignment.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = null;

user?.name = "John"; // Error, does not work
// because it evaluates to undefined = "John"
```

  </div>
  </div>
</details>

---
