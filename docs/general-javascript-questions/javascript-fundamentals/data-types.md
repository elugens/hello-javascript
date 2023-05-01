---
title: Data Types - JavaScript Interview Questions
description: There are eight basic data types in JavaScript including Number, String, Boolean, BigInt, Null, Undefined, Object, and Symbol. JS Frontend Interview Questions
sidebar_position: 7
sidebar_label: Data Types
keywords:
  - data types
  - string data type
  - number data type
  - boolean data type
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
  - data types
  - string data type
  - number data type
  - boolean data type
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DataTypesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Data Types | JavaScript Frontend Phone Interview Questions</title>
</head>

**JavaScript Fundamentals: JavaScript Data Types**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/KOx_wRyv9pw"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### In JavaScript, how many data types are there?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Number, String, Boolean, BigInt, Null, Undefined, Object, and Symbol are JavaScript's eight fundamental data types. Except for the Object data type, all are basic data types. We call all other classes "primitive" since their values can only contain one item (a string or a number). On the other hand, we use objects to store data sets and more sophisticated things.</div>
  </div>
</details>

---

### What operator do you use to find the type of a specific value or argument?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The typeof operator.</div><br />
  <div><strong>Technical Response:</strong> The typeof operator returns the type of the value or argument.<br /><br />
  JavaScript supports two forms of syntax:<br /><br />
    <ol>
      <li>As an operator: typeof x.</li>
      <li>As a function: typeof(x).</li>
      </ol>
  </div>
  </div>
</details>

---

### What type of numbers does the number type represent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The number type represents both integers and floating-point numbers.</div>
  </div>
</details>

---

### What is the limitation of the number type?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A number cannot represent integers larger than (2<sup>53</sup>-1) or less than -(2<sup>53</sup>-1) for negatives.</div><br />
  <div><strong>Technical Response:</strong> The “number” type cannot represent integer values greater than (2<sup>53</sup>-1) (that’s 9007199254740991) or less than -(2<sup>53</sup>-1) for negatives. It is a technical limitation caused by their internal representation, and anything beyond these values is considered a BigInt.
  </div>
  </div>
</details>

---

### How should you create BigInt in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A BigInt value is created by appending n to the end of an integer or using the BigInt object constructor.</div>
  </div>
</details>

---

### What are the three types of quotes available to create a string representation of a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Double, single, and backticks.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, there are three types of quotes used to represent a string double, single, and backtick quotes.<br /><br />
  Example:<br /><br />
    <ol>
      <li>Double quotes: "Hello".</li>
      <li>Single quotes: 'Hello'.</li>
      <li>Back-ticks: `Hello`.</li>
      </ol>
  </div>
  </div>
</details>

---

### What is the difference between double, single, and backtick quotes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backticks allow us to embed variables and expressions into a string by wrapping them in $&#x7B;…&#125;. There is no notable difference between single and double quotes.</div><br />
  <div><strong>Technical Response:</strong> Simple quotations are double and single quotes, and in JavaScript, there is almost no distinction between them. Backticks are quotations with "enhanced functionality." They allow us to embed variables and expressions inside a string, for example, by surrounding them with $&#x7B;…&#125;.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let name = 'John';

// embed a variable

alert(`Hello, ${name}!`); // Hello, John!
// embed an expression

alert(`the result is ${1 + 2}`); // the result is 3
```

:::note

Please note that we can only implement this with backticks in JavaScript. Other quotes (single and double) do not have this embedding functionality! We should make every effort to understand backticks and template literals.

:::

  </div>
  </div>
</details>

---

### What two values does the Boolean logical type have?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> true and false</div><br />
  <div><strong>Technical Response:</strong> We often use this type of logical data type to store yes/no values: true means “yes, correct”, and false means “no, incorrect”. Boolean Logical data types often get used for comparisons or, more specifically, for greater or less than values in JavaScript.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Greater or Less Than:
let isGreater = 4 > 1;

alert(isGreater); // true (the comparison result is "yes")
```

  </div>
  </div>
</details>

---

### What does the NULL data type represent in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> nothingness or empty, but not equal undefined</div><br />
  <div><strong>Technical Response:</strong> It is a unique value that represents “nothing”, “empty” or “value unknown”. It is not a representation of a value that has not to be defined, non-existing, or a null pointer like other programming languages.
  </div>
  </div>
</details>

---

### What does the undefined data type represent in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Undefined means a value is not defined or assigned to a variable.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, undefined means a value is not defined or assigned. If a variable is declared but not assigned, its value is undefined.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let age;

alert(age); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable, but it is not recommended.

let age = 100;

// change the value to undefined

age = undefined;

alert(age); // "undefined"
```

  </div>
  </div>
</details>

---

### What is the difference between typeof x and typeof(x) with parentheses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> typeof x acts as an operator, and typeof(x) is a function, but they work with parentheses or without them. The result is the same.</div>
  </div>
</details>

---

### What does the typeof operator return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The typeof operator returns a string with the name of the type, like "number" if it is a number or “function” if it’s a function.</div>
  </div>
</details>

---
