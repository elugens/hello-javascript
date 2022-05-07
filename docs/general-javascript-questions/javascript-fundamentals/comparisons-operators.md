---
title: Comparisons Operators
description: Learn how to compare values in JavaScript.  All JavaScript comparisons return a true or false Boolean value. | Frontend Developer Interview Questions & Answers
sidebar_position: 11
sidebar_label: Comparisons Operators
keywords:
  - comparisons operators
  - boolean operators
  - boolean values
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
  - comparisons operators
  - boolean operators
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ComparisonsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Comparisons Operators | JavaScript Frontend Phone Interview</title>
</head>

**JavaScript Fundamentals: Comparison Operators**

<CloseAllAnswers />

### Do all comparison operators return a Boolean value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All JavaScript comparisons return a true or false Boolean value.</div><br />
  <div><strong>Technical Response:</strong> Yes, every comparison yields a true or false Boolean value.<br /> <br />
- true – means “yes”, “correct” or “the truth”.<br />
- false – means “no”, “wrong” or “not the truth”.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)
```

  </div>
  </div>
</details>

---

### How does JavaScript compare strings to see if their greater or less than another?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript uses “lexicographical” order. JavaScript compares letter-by-letter based on their Unicode value.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true

// Unicode Values
let myLetter = 'Hello';

console.log(myLetter.charCodeAt(0)); // returns Unicode value 72
console.log(myLetter.charCodeAt(1)); // returns Unicode value 101
```

  </div>
  </div>
</details>

---

### When comparing values of different types, does JavaScript convert the values to numbers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, when comparing values of different types, it converts the values to numbers.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('2' > 1); // true, string '2' becomes a number 2
alert('01' == 1); // true, the string '01' becomes a number 1
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> For Boolean values, true becomes 1 and false becomes 0:<br /><br />

  <div></div>

```js
alert(true == 1); // true
alert(false == 0); // true
```

  </div>
  </div>
</details>

---

### Is it possible that two values are equal at the same time if one is true as a Boolean and the other one is false as a Boolean?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When there is an explicit conversion to a Boolean on values. A string and a number, such as a number 0 and string “0”. The return value for the string returns true, and it returns false for the number. When we attempt to compare the two using the equality operator, the return value returns true, but it returns false with the strict equality operator.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let a = 0;
alert(Boolean(a)); // false

let b = '0';
alert(Boolean(b)); // true

alert(a == b); // true!, equality operator

alert(a === b); // false!, strict equality operator
```

  </div>
  </div>
</details>

---

### What is the difference between a regular and strict equality check?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary difference is strict equality does a value type check without any conversion.</div><br />
  <div><strong>Technical Response:</strong> The regular equality check loosely compares values with type conversion. In contrast, the strict-equality check compares the value and the data type without converting the types.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(0 === false); // false, because the types are different
```

  </div>
  </div>
</details>

---

### Is there a benefit of using the strict equality operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The strict equality operator is a bit longer to write but makes it obvious what is going on and leaves less room for errors.</div>
  </div>
</details>

---

### What value returns when null and undefined get compared using the strict equality operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> False because they are not the same type.</div><br />
  <div><strong>Technical Response:</strong> False because each of them is a different type, but the non-strict operator returns true. For math and other comparisons such as greater and less than null/undefined are converted to numbers.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Strict Equality Check
alert(null === undefined); // false

// Regular Equality Check
alert(null == undefined); // true
```

  </div>
  </div>
</details>

---

### Is comparing undefined to other values a good or bad idea?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Bad Idea, You should never compare undefined to other values.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
```

  </div>
  </div>
</details>

---

### What are two ways to avoid problems with undefined/null values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should avoid using undefined or null in anything less than strict comparisons and never use comparisons with an undefined or null value.</div><br />
  <div><strong>Technical Response:</strong> There are two approaches to dealing with undefined and null values.<br /><br />
    <ol>
      <li>Except for strict equality ===, treat any comparison with undefined/null with extreme caution.
      </li>
      <li>If you're not sure what you're doing, don't use comparisons >= and >= with a variable that might be null/undefined. Check for these values separately if a variable may have them.
      </li>
      </ol>
  </div>
  </div>
</details>

---

### How does the if statement work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “if” statement evaluates a condition and executes a code block if the result is true.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let year = prompt('In which year was ECMAScript-2015 published?', '');
if (year == 2015) alert('You are right!'); // You are right!
```

  </div>
  </div>
</details>

---
