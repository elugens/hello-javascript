---
title: Comparison Operators - JavaScript Interview
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

### What is a comparison operator in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A comparison operator in JavaScript is used to compare two values and returns a boolean result (true or false) based on the comparison.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Example showcasing the usage of comparison operators in JavaScript.<br /><br />

  <div></div>

```javascript
let num1 = 5;
let num2 = 10;

console.log(num1 > num2);   // Output: false (Greater than)
console.log(num1 < num2);   // Output: true (Less than)
console.log(num1 >= num2);  // Output: false (Greater than or equal to)
console.log(num1 <= num2);  // Output: true (Less than or equal to)
console.log(num1 == num2);  // Output: false (Equality)
console.log(num1 === num2); // Output: false (Strict equality)
console.log(num1 != num2);  // Output: true (Inequality)
console.log(num1 !== num2); // Output: true (Strict inequality)
```

In this example, the comparison operators are used to compare the values of `num1` and `num2`. The result of each comparison is a boolean value (`true` or `false`) based on the outcome of the comparison.

  </div>
  </div>
</details>

---

### Do all comparison operators return a Boolean value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All comparison operators in JavaScript return a Boolean value of either true or false.</div><br />
  <div><strong>Technical Response:</strong> Yes, every comparison yields a true or false Boolean value.<br /> <br />
- true – means “yes”, “correct” or “the truth”.<br />
- false – means “no”, “wrong” or “not the truth”.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(2 > 1); // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)
```

  </div>
  </div>
</details>

---

### What are the different types of comparison operators in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript comparison operators include equality (==, ===), inequality (!=, !==), and relational (&#62;, &#60;, &#62;=, &#60;=) operators. They compare values for equality, inequality, or relative size, respectively.
  </div>
  </div>
</details>

---

### What is the difference between inequality and strict inequality operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inequality (!=) checks value inequality with type coercion, while strict inequality (!==) compares both value and type without coercion for accurate results.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(5 != "5");    // Output: false (Inequality with type coercion)
console.log(5 !== "5");   // Output: true (Strict inequality without type coercion)

console.log(true != 1);   // Output: false (Inequality with type coercion)
console.log(true !== 1);  // Output: true (Strict inequality without type coercion)
```

  </div>
  </div>
</details>

---

### Can you explain type coercion in the context of comparison operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Type coercion converts values to a common data type during comparisons. It occurs with loose comparison operators (==, !=) but not strict operators (===, !==).
  </div>
  </div>
</details>

---

### How does JavaScript compare strings to see if their greater or less than another?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, strings are compared lexicographically, which means that the characters in the strings are compared one by one in order until a difference is found. The comparison is based on the Unicode values of the characters.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

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
  <div><strong>Interview Response:</strong> Yes, when comparing values of different types, it converts the values to numbers. For Boolean values, true becomes 1 and false becomes 0.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, the string '01' becomes a number 1
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> For Boolean values, true becomes 1 and false becomes 0:<br /><br />

  <div></div>

```js
console.log(true == 1); // true
console.log(false == 0); // true
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
console.log(Boolean(a)); // false

let b = '0';
console.log(Boolean(b)); // true

console.log(a == b); // true!, equality operator

console.log(a === b); // false!, strict equality operator
```

  </div>
  </div>
</details>

---

### What is the difference between a regular and strict equality check?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Equality (==) checks value equality with type coercion, while strict equality (===) checks both value and type without coercion, ensuring precise comparisons.</div><br />
  <div><strong>Technical Response:</strong> The regular equality check loosely compares values with type conversion. In contrast, the strict-equality check compares the value and the data type without converting the types.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(0 === false); // false, because the types are different
```

  </div>
  </div>
</details>

---

### What is the benefit of using the strict equality operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, using the strict equality operator in JavaScript helps to avoid unexpected type coercion issues and ensures precise comparisons.</div><br/>
  <div><strong>Interview Response:</strong> The benefit of using the strict equality (`===`) operator is that it ensures both the value and type are compared, providing more precise and predictable results, avoiding potential type coercion issues, and promoting code correctness.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(5 === 5);      // Output: true (Strict equality with matching value and type)
console.log(5 === "5");    // Output: false (Strict equality with different types)
console.log(true === 1);   // Output: false (Strict equality with different types)
console.log(null === undefined);  // Output: false (Strict equality with different types)
```

Using strict equality helps ensure that comparisons are performed accurately based on both value and type, reducing potential bugs and unexpected behavior.

  </div>
  </div>
</details>

---

### What results from comparing "null" and "undefined" using equality and strict equality operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using the equality operator (==), null and undefined are considered equal. However, with the strict equality operator (===), they are not equal, as they are different types.
  </div>
  </div>
</details>

---

### What value returns when null and undefined get compared using the strict equality operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, when null and undefined are compared using the strict equality operator, they return false because they are not the same type.</div><br />
  <div><strong>Technical Response:</strong> False because each of them is a different type, but the non-strict operator returns true. For math and other comparisons such as greater and less than null/undefined are converted to numbers.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Strict Equality Check
console.log(null === undefined); // false

// Regular Equality Check
console.log(null == undefined); // true
```

  </div>
  </div>
</details>

---

### Is comparing undefined to other values a good or bad idea?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Comparing undefined to other values in JavaScript can be a bad idea as it can lead to unexpected results and errors.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)
```

  </div>
  </div>
</details>

---

### What is the behavior of comparison operators when comparing values with different types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Loose comparison operators (==, !=) perform type coercion before comparing values, while strict operators (===, !==) compare values and types directly, avoiding coercion.
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

### What does it mean for two values to be "equal" in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two values are "equal" in JavaScript if they have the same value after type coercion.
  </div>
  </div>
</details>

---

### How do JavaScript comparison operators handle objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript comparison operators compare object references, not the contents. They check if the compared objects refer to the same memory location, rather than comparing their properties or values.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
let obj3 = obj1;

console.log(obj1 === obj2);  // Output: false (Different object references)
console.log(obj1 === obj3);  // Output: true (Same object reference)
```

  </div>
  </div>
</details>

---

### What does it mean for two values to be "identical" in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two values are "identical" in JavaScript if they have the same value and the same type.
  </div>
  </div>
</details>

---

### Can you compare the values of different types in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but the result may be unexpected due to type coercion in JavaScript.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(5 == "5");     // Output: true (Equality with type coercion)
console.log(5 === "5");    // Output: false (Strict equality without type coercion)
console.log(true == 1);    // Output: true (Equality with type coercion)
console.log(true === 1);   // Output: false (Strict equality without type coercion)
console.log(null == undefined);   // Output: true (Equality with type coercion)
console.log(null === undefined);  // Output: false (Strict equality without type coercion)
```

  </div>
  </div>
</details>

---
