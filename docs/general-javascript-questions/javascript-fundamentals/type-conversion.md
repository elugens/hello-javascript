---
title: Type Conversion
sidebar_position: 7
---

# Type Conversion in JavaScript

**JavaScript Fundamentals: Type Conversion**

<head>
  <title>JavaScript Type Conversion - Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the two types of type conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit and Implicit type conversion.</div><br />
  <div><strong>Technical Response:</strong> There are two types of type conversion including automatic (implicit) and explicit type conversion.
  </div>
  </div>
</details>

Source: <https://javascript.info/type-conversions>

### What is the difference between explicit and automatic (implicit) JavaScript type conversion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Implicit type conversion is manual conversion of type and explicit is automatic.</div><br />
  <div><strong>Technical Response:</strong> JavaScript automatically converts one data type to another (to the right type). This is known as implicit or automatic type conversion. The type of conversion that you do manually is known as explicit type conversion.
  </div>
  </div>
</details>

Source: <https://javascript.info/type-conversions>

### How is explicit type conversion implemented in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit type conversions are achieved using built-in methods and objects.</div>
  </div>
</details>

Source: <https://javascript.info/type-conversions>

### Name one method that automatically converts a value to a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The alert method returns a string value; this is automatic type conversion.</div>
  </div>
</details>

Source: <https://javascript.info/type-conversions#string-conversion>

### What built-in object is used to explicitly convert values to a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The string object is used to explicitly convert values to a string.</div><br />
  <div><strong>Technical Response:</strong> The String(value) object is used to explicitly convert values to a string. The conversion to string is usually obvious for primitive values.
  </div>
  </div>
</details>

Code Example:

```js
let value = true;

alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
```

Source: <https://javascript.info/type-conversions#string-conversion>

### When do numeric conversions happen in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversion happens in mathematical functions and expressions automatically.</div>
  </div>
</details>

Source: <https://javascript.info/type-conversions#numeric-conversion>

### What Object is used to explicitly convert values to a Number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The number object is used to explicitly convert values to a number.</div>
  </div>
</details>

Code Example:

```js
let str = '123';

alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### What is the result when there is an explicit attempt to convert a non-number to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the string is not a valid number the return value is NaN.</div>
  </div>
</details>

Code Example:

```js
let age = Number('an arbitrary string instead of a number');

alert(age); // NaN, conversion failed
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### If, there is an attempt to convert an undefined value. What is the return result?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversions on undefined values returns NaN (Not-a-Number).</div>
  </div>
</details>

Code Example:

```js
let thisNumber;

let result = Number(thisNumber);

alert(result); // returns NaN, conversion failed
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### If, there is an attempt to convert a NULL value to a number. What is the return result?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversions on Null values returns zero (0).</div>
  </div>
</details>

Example:

```js
let thisNumber = null;

let result = Number(thisNumber);

alert(result); // returns 0
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### What is returned on a numeric conversion of true and false in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> True returns 1 and False returns 0.</div>
  </div>
</details>

Source: <https://javascript.info/type-conversions#numeric-conversion>

### Give a brief description of the potential outcomes when converting a string to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. If there is an error it will return NaN.</div>
  </div>
</details>

Code Example:

```js
let myString = '';

let outcome = Number(myString);

alert(outcome); // returns 0
```

Source: <https://javascript.info/type-conversions#numeric-conversion>

### Do Boolean conversions happen implicitly, explicitly, or both?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both, it happens in logical operations automatically, but can also be performed explicitly.</div>
  </div>
</details>

Source: <https://javascript.info/type-conversions#boolean-conversion>

### Is there an object that can be used for explicit Boolean conversions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Boolean object converts strings and numerical values to Boolean true or false.</div>
  </div>
</details>

Code Example:

```js
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean('hello')); // true
alert(Boolean('')); // false
```

Source: <https://javascript.info/type-conversions#boolean-conversion>

### What are the two basic Boolean conversion rules in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Values that are intuitively empty are false, all other values are true.</div><br />
  <div><strong>Technical Response:</strong> Conversion Rules<br /><br />
    <ol>
      <li>Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.</li>
      <li>Other values become true.</li>
      </ol>
  </div>
  </div>
</details>

Source: <https://javascript.info/type-conversions#boolean-conversion>

### In JavaScript, what is the Boolean return value for the string “0”?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a non-empty string is always true. Zero is considered empty and returns false.</div>
  </div>
</details>

Code Example

```js
let numZero = Boolean(0);

let stringZero = Boolean('0');

console.log(numZero); // returns false
console.log(stringZero); // returns true
```

Source: <https://javascript.info/type-conversions#boolean-conversion>

### What are the three widely used type conversions in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> String, number, and Boolean conversions.</div>
  </div>
</details>

Source: <https://javascript.info/type-conversions#boolean-conversion>
