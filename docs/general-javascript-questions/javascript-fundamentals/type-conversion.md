---
title: Type Conversion in JavaScript
description: Learn how to convert data types in JavaScript. There are two types of type conversion - implicit and explicit. Frontend Developer Interview Questions
sidebar_position: 7
sidebar_label: Type Conversion
keywords:
  - type conversion
  - javascript type conversion
  - conversions
  - convert data types
  - javascript
  - interview
  - questions
  - answers
  - response
  - implicit conversion
  - function
  - explicit conversion
  - interview questions
  - interview answers
  - js
tags:
  - type conversion
  - conversions
  - convert data types
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TypeConversionSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Type Conversion | JavaScript Frontend Phone Interview Answers</title>
</head>

**JavaScript Fundamentals: Type Conversion**

<CloseAllAnswers />

### What are the two types of type conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit and Implicit type conversion.</div><br />
  <div><strong>Technical Response:</strong> There are two types of type conversion: implicit and explicit.
  </div>
  </div>
</details>

---

### What is the distinction between explicit and implicit JavaScript type conversion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Implicit type conversion is a manual conversion of type, and explicit is automatic.</div><br />
  <div><strong>Technical Response:</strong> JavaScript translates one data type to another automatically (to the right type). This behavior is known as implicit type conversion or automated type conversion. An explicit type conversion is the sort of conversion that you perform manually.
  </div>
  </div>
</details>

---

### How is explicit type conversion implemented in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can implement Explicit type conversions by using built-in methods and objects.</div>
  </div>
</details>

---

### Name one method that automatically converts a value to a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The alert method returns a string value; this is automatic type conversion.</div>
  </div>
</details>

---

### What built-in object do we use to explicitly convert values to a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string object, we use it to convert values to a string explicitly.</div><br />
  <div><strong>Technical Response:</strong> We use the String(value) object to convert values to strings explicitly. For primitive values, the conversion to string is typically apparent.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let value = true;

alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
```

  </div>
  </div>
</details>

---

### When do numeric conversions happen in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversion happens in mathematical functions and expressions automatically.</div>
  </div>
</details>

---

### What Object do we use to convert values to a number explicitly?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the Number() object to explicitly convert values to a number.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '123';
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
```

  </div>
  </div>
</details>

---

### What is the result of an explicit attempt to convert a non-number to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the string is not a valid number, the return value is NaN (Not a Number).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let age = Number('an arbitrary string instead of a number');

alert(age); // NaN, conversion failed
```

  </div>
  </div>
</details>

---

### If there is an attempt to convert an undefined value. What is the return result?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversions on undefined values returns NaN (Not-a-Number).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let thisNumber;

let result = Number(thisNumber);

alert(result); // returns NaN, conversion failed
```

  </div>
  </div>
</details>

---

### If there is an attempt to convert a NULL value to a number. What is the return result?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we attempt a numeric conversion on Null values it returns zero (0).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let thisNumber = null;

let result = Number(thisNumber);

alert(result); // returns 0
```

  </div>
  </div>
</details>

---

### What value returns when you attempt a numeric conversion of true and false?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> True returns 1, and False returns 0.</div>
  </div>
</details>

---

### Give a brief description of the potential outcomes when converting a string to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We trim whitespace at the beginning and the end of the string. Zero returns if the remaining string contains no characters. Otherwise, the string's number is "read". If an error occurs, it returns NaN.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myString = '';

let outcome = Number(myString);

alert(outcome); // returns 0
```

  </div>
  </div>
</details>

---

### Do Boolean conversions happen implicitly, explicitly, or both?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both. Logic operations do this automatically, but you can also do it explicitly by using the Boolean() native object.</div>
  </div>
</details>

---

### Are there any objects we can use for explicit Boolean conversions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Boolean object converts strings and numerical values to Boolean true or false.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean('hello')); // true
alert(Boolean('')); // false
```

  </div>
  </div>
</details>

---

### What are the two basic Boolean conversion rules in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Values that are intuitively empty are false. All other values are true.</div><br />
  <div><strong>Technical Response:</strong> Conversion Rules<br /><br />
    <ol>
      <li>Intuitively empty values, like 0, an empty string, null, undefined, and NaN, become false.</li>
      <li>Other values become true.</li>
      </ol>
  </div>
  </div>
</details>

---

### What is the Boolean return value for the string “0” in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a non-empty string always returns true. Zero is considered empty and returns false.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let numZero = Boolean(0);

let stringZero = Boolean('0');

console.log(numZero); // returns false
console.log(stringZero); // returns true
```

  </div>
  </div>
</details>

---

### What are the three widely used type conversions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, number, and Boolean conversions are the most widely used type conversions in JavaScript.</div>
  </div>
</details>

---
