---
title: Nullish Coalescing Operator
description: Learn how to use the nullish coalescing operator in JavaScript.
sidebar_position: 12
sidebar_label: Nullish Coalescing Operator
---

**JavaScript Fundamentals: Nullish Coalescing Operator (??)**

<head>
  <title>Nullish Coalescing Operator - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Explain how the nullish coalescing operator works.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nullish coalescing operator returns the first argument if it is not null or undefined. Otherwise, the second one.</div><br />
  <div><strong>Technical Response:</strong> In simple terms, the ?? returns the first argument if it is not null/undefined. Otherwise, the second one.<br /><br />
  <strong>Example:</strong> The nullish coalescing operator is written as two question marks (??).<br /><br />
  <strong>The result of a ?? b is:</strong><br /><br />
    <ol>
      <li>if a is defined, then a,</li>
      <li>if a is not defined, then b.</li>
      <li>The exact look of the window also depends on the browser. We cannot modify it…</li>
      <li>Agree on terms within your team. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.</li>
      <li>A variable name is always camelCase and should begin with a noun to differentiate variables from functions, which normally should begin with a verb.</li>
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

### Is there another way to achieve the same results as the nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The not equals operator checks the first value to see if it is null or undefined if it is null or undefined it returns the second value.</div><br />
  <div><strong>Technical Response:</strong> Yes, you can use the NOT ! equal operator to check to see if the first value is not equal to null or undefined else return the second value.
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

### What is a common use case for nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A common use case for the nullish coalescing operator is to provide a default value for a potentially undefined variable.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// here we show Anonymous if user is not defined
let user;

alert(user ?? 'Anonymous'); // Anonymous

// if the user has any value except null or undefined
let user = 'John';

alert(user ?? 'Anonymous'); // John
```

  </div>
  </div>
</details>

---

### Can you use a chain or sequence of nullish coalescing operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use a sequence of nullish coalescing operator to select the first value from a list that is not null or undefined.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder
```

  </div>
  </div>
</details>

---

### Is there another operator that can be used to perform the same task as the nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The OR operator can be used in the same way as nullish coalescing operator.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first truthy value:
alert(firstName || lastName || nickName || 'Anonymous'); // Supercoder
```

  </div>
  </div>
</details>

---

### What is the main difference between the Nullish Coalescing Operator and the Logical OR operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference is that OR operator returns the first truthy value and nullish operator returns the first defined value.</div><br />
  <div><strong>Technical Response:</strong> The important difference is that OR operator returns the first truthy value and nullish operator returns the first defined value.<br /><br /> In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we will get the second argument as the result.<br /><br /> In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is unknown/not set.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

  </div>
  </div>
</details>

---

### Does the nullish coalescing operator have a high or low operator precedence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The precedence of the nullish coalescing operators is low according to the MDN.</div><br />
  <div><strong>Technical Response:</strong> The precedence of the ?? operator is rather low: 5 in the MDN table. So, ?? is evaluated before = and ?, but after most other operations, such as +, *. So, if we’d like to choose a value with ?? in an expression with other operators, consider adding parentheses.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

  </div>
  </div>
</details>

---

### What is the proper way to use the Nullish Coalescing Operator with the AND (&&) and OR (||) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is not recommended to use the AND operator directly in line with the nullish coalescing operator. You should wrap the AND and OR operator in parentheses as a work around.</div><br />
  <div><strong>Technical Response:</strong> Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// this will cause a syntax error
let x = 1 && 2 ?? 3; // Error: Syntax error

// Use explicit parentheses to work around it
let x = (1 && 2) ?? 3; // Works

alert(x); // 2
```

  </div>
  </div>
</details>

---
