---
title: Nullish Coalescing Operator - JavaScript Interview
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

<CloseAllAnswers />

### Explain how the nullish coalescing operator works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nullish coalescing operator returns the first argument if it is not null or undefined—otherwise, the second one.</div><br />
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
  <div><strong>Interview Response:</strong> The not equals operator checks the first value to see if it is null or undefined; it returns the second value if it is null or undefined.</div><br />
  <div><strong>Technical Response:</strong> Yes, you can use the NOT (!==) Equal operator to check to see if the first value is not equal to null or undefined; return the second value.
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
  <div><strong>Interview Response:</strong> Yes, we can use a sequence of nullish coalescing operators to select the first value from a list that is not null or undefined.</div><br />
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

### Is there another operator we use to perform the same task as the nullish coalescing operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The OR operator can be used the same way as the nullish coalescing operator.</div><br />
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

### What is the primary distinction between the Nullish Coalescing Operator and the Logical OR Operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The OR operator returns the first truthy value, and the nullish operator returns the first defined value.</div><br />
  <div><strong>Technical Response:</strong> The key distinction is that the OR operator returns the first true value, whereas the null operator returns the first specified value.<br /><br /> In other words, logical OR (||) does not differentiate between false, zero, an empty string "" and null/undefined. They're all the same — false values, and we obtain the second if any of them are the first arguments of ||.<br /><br /> However, we may wish to utilize the default value only when the variable is null/undefined in practice. When the value is unknown or not set, this is the case.
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

alert(area); // 5000
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

alert(x); // 2
```

  </div>
  </div>
</details>

---
