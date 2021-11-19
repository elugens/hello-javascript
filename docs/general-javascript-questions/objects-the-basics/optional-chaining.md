---
title: Optional Chaining
sidebar_position: 6
---

# Optional Chaining Operator

**Objects the Basics: Optional Chaining**

<head>
  <title>Optional Chaining Operator - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain, what the optional chaining operator (?.) does in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The optional chaining operator is a safe way to access nested object properties, even if an intermediate property does not exist.</div><br />
  <div><strong>Technical Response:</strong> The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. Optional chaining (?.) stops the evaluation if the value before (?.) is undefined or null and returns undefined.<br /><br />
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

### If, an object does not exist, what will the optional chaining operator (?.) return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If, the object does not exist (equals null) the optional chaining operator returns undefined. This can be seen when an object is set to null. If, the object is not defined then it will result in a reference error.
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
  <div><strong>Interview Response:</strong> It should be used with then intent to handle object properties that are already known to be optional.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Short Circuit result in a false response<br /><br />

  <div></div>

```js
let user = null;
let x = 0;

user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

alert(x); // 0, value not incremented.
```

:::note

If, it is not optional it can result in false scenario that goes unchecked. This could result in coding errors that become silenced and become more difficult to debug.

:::

  </div>
  </div>
</details>

---

### Is optional chaining (?.) merely an operator or a syntax construct?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, it is a syntax construct, but it is commonly referred to as an operator.</div><br />
  <div><strong>Technical Response:</strong> Technically, it is a syntax construct, but it is commonly referred to as an operator. However, it is more than just an operator and can be used with functions ( ?.() ) and square brackets ( ?.[] ). For example, ?.() is used to call a function that may not exist. The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot (.).<br /><br />
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
  <div><strong>Interview Response:</strong> No, you can use the (?.) for safe reading and deleting, but not writing. The optional chaining (?.) has no use at the left side of an assignment.
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
