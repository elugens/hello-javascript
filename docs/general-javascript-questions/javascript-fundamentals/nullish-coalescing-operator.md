---
title: Nullish Coalescing Operator
description: Learn how to use the nullish coalescing operator in JavaScript. Explain how the nullish coalescing operator works? Frontend Developer Interview Questions
sidebar_position: 14
sidebar_label: Nullish Coalescing Operator
keywords:
  - nullish coalescing operator
  - nullish coalescing
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - logical operator
  - interview questions
  - interview answers
  - js
tags:
  - nullish coalescing operator
  - nullish coalescing
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/NullishSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Nullish Coalescing Operator: JavaScript Frontend Interview</title>
</head>

**JavaScript Fundamentals: Nullish Coalescing Operator (??)**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/ALH_gpGjHnA"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<AdSense />

---

<CloseAllAnswers />

### What is the null-ish coalescing operator in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Introduced in ES2020, The nullish coalescing operator is a binary operator (??) that returns a value based on a null or undefined condition.
  </div>
  </div>
</details>

---

### How does the nullish coalescing operator work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nullish coalescing operator is a binary operator (??) that returns the value of its left-hand side operand if it's not null or undefined; otherwise, it returns the value of its right-hand side operand.</div><br />
  <div><strong>Technical Response:</strong> In simple terms, the ?? returns the first argument if it is not null/undefined—otherwise, the second one.<br /><br />
  <strong>Example:</strong> The nullish coalescing operator, for example, is denoted by two question marks (??).<br /><br />
  <strong>The result of a ?? b is:</strong><br /><br />
    <ol>
      <li>if a is defined, then a,</li>
      <li>if a is not defined, then b.</li>
      </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

  </div>
  </div>
</details>

---

### Is there a different method to get the same outcomes as the nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the not equals strict equality operator to check to see if the first value is not equal to null or undefined, otherwise, it returns the value of its right-hand side operand.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// We can rewrite result = a ?? b using the NOT equal (!==) operator.
result = a !== null && a !== undefined ? a : b;
```

  </div>
  </div>
</details>

---

### What is an everyday use case for a nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An everyday use case for the nullish coalescing operator is to provide a default value for a potentially undefined variable.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// here we show Anonymous if user is not defined
let user;

console.log(user ?? 'Anonymous'); // Anonymous

// if the user has any value except null or undefined
let user = 'John';

console.log(user ?? 'Anonymous'); // John
```

  </div>
  </div>
</details>

---

### Can you use a chain or sequence of nullish coalescing operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use a sequence of nullish coalescing operators to select the first value from a list that is not null or undefined.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder
```

  </div>
  </div>
</details>

---

### Is there another operator we use to perform the same task as the nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The logical (||) operator can be used the same way as the nullish coalescing operator.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first truthy value:
console.log(firstName || lastName || nickName || 'Anonymous'); // Supercoder
```

  </div>
  </div>
</details>

---

### How do the nullish coalescing and the logical 'OR' operator differ?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nullish coalescing operator only checks for nullish values, null or undefined, while the logical OR operator, checks for any falsy value.
  </div><br />
  <div><strong>Technical Response:</strong> The primary difference is that the Nullish Coalescing Operator (??) returns the right operand only if the left operand is null or undefined, while the Logical OR (||) returns the right operand for any falsy value.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
```

  </div>
  </div>
</details>

---

### Does the nullish coalescing operator have high or low operator precedence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the MDN, the precedence of the nullish coalescing operators is low.</div><br />
  <div><strong>Technical Response:</strong> The precedence of the ?? operator is relatively low: 5 in the MDN table. So ?? is evaluated before = and ?. But after most other operations, such as +, *. So if we’d like to choose a value with ?? in an expression with other operators, consider adding parentheses.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000
```

  </div>
  </div>
</details>

---

### How should the Nullish Coalescing Operator be used with the AND (&&) and OR (||) operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using the AND operator directly in line with the nullish coalescing operator is not recommended. It would help by wrapping the AND and OR operators in parentheses as a workaround.</div><br />
  <div><strong>Technical Response:</strong> For safety reasons, JavaScript forbids using ?? together with && and || operators unless parentheses explicitly specify the precedence.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// this will cause a syntax error
let x = 1 && 2 ?? 3; // Error: Syntax error

// Use explicit parentheses to work around it
let x = (1 && 2) ?? 3; // Works

console.log(x); // 2
```

  </div>
  </div>
</details>

---

### How does the null-ish coalescing operator handle falsy values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nullish coalescing operator treats falsy values (such as 0, '', and false) as truthy values, and returns the left-hand side operand if it's not null or undefined.
  </div>
  </div>
</details>

---

### What happens if the left-hand side operand of the nullish coalescing operator is a non-nullish value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the left-hand side operand of the nullish coalescing operator is a non-nullish value, it's simply returned and the right-hand side operand is not evaluated.
  </div>
  </div>
</details>

---

### Can you use the nullish coalescing operator with objects and arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the nullish coalescing operator with objects and arrays. It will return the first non-null and non-undefined operand, whether it's an object, array, or other data type.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let obj1 = null;
let obj2 = { name: "John" };

let resultObj = obj1 ?? obj2;

console.log(resultObj);  // Outputs: { name: "John" }

let arr1 = undefined;
let arr2 = [1, 2, 3];

let resultArr = arr1 ?? arr2;

console.log(resultArr);  // Outputs: [1, 2, 3]
```

In these examples, `resultObj` is assigned the value of `obj2` because `obj1` is null, and `resultArr` is assigned the value of `arr2` because `arr1` is undefined.

  </div>
  </div>
</details>

---

### How do the nullish coalescing and optional chaining operators differ?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nullish coalescing operator provides a default value if a variable is null or undefined, while the optional chaining operator allows you to access properties or methods of an object without getting an error if the object is null or undefined.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let user = null;

// Nullish coalescing operator
let username = user?.name ?? 'Guest';

console.log(username);  // Outputs: "Guest"
```

In this code, `user?.name` is trying to access the `name` property of `user`. But `user` is null, so `user?.name` evaluates to undefined. As a result, the nullish coalescing operator `??` then assigns the string 'Guest' to `username`.

```javascript
let user2 = { address: null };

// Optional chaining operator
let address = user2.address?.street;

console.log(address);  // Outputs: undefined
```

In this code, `user2.address?.street` is trying to access the `street` property of `address`. But `address` is null, so `user2.address?.street` evaluates to undefined, which is then assigned to `address`.

  </div>
  </div>
</details>

---
