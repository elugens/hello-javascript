---
title: Type Conversion - JavaScript Interview Questions
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

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/g0xkXoYJBKM"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### What are the two types of type conversion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit and Implicit type conversion.</div><br />
  <div><strong>Technical Response:</strong> There are two types of type conversion in JavaScript: implicit (coercion) and explicit (casting). Implicit occurs automatically when the interpreter converts data types, while explicit requires manual intervention using specific methods or functions.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

1. **Implicit Conversion (Coercion)**

In this example, we're adding a number to a string. JavaScript automatically converts the number to a string before performing the concatenation.

```javascript
let num = 5;
let str = '10';
let result = num + str; // num is implicitly converted to a string.
console.log(result); // Output: '510'
```

2. **Explicit Conversion**

Here, we're explicitly converting a string to a number using the `Number()` function before adding it to another number.

```javascript
let str = '10';
let num = 5;
let result = Number(str) + num; // str is explicitly converted to a number.
console.log(result); // Output: 15
```

In another example, we're explicitly converting a boolean to a string using the `String()` function.

```javascript
let bool = true;
let result = String(bool); // bool is explicitly converted to a string.
console.log(result); // Output: 'true'
```

  </div>
  </div>
</details>

---

### What is the difference between explicit and implicit type conversion?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit type coercion involves using specific methods, or functions, to convert data types intentionally, while implicit coercion happens automatically, when the interpreter coerces data types without explicit or direct instruction.
  </div>
  </div>
</details>

---

### How is explicit type conversion implemented in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit type conversion in JavaScript is implemented using built-in functions that convert values of one type to another type. These functions include Number(), String(), Boolean(), and parseInt().
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Conversion from string to number
let str = "123";
let num = Number(str); // str is explicitly converted to a number.
console.log(num);      // Output: 123
console.log(typeof num); // Output: 'number'

// Conversion from number to string
let num2 = 456;
let str2 = String(num2); // num2 is explicitly converted to a string.
console.log(str2);      // Output: '456'
console.log(typeof str2); // Output: 'string'

// Conversion from boolean to number
let bool = true;
let numFromBool = Number(bool); // bool is explicitly converted to a number.
console.log(numFromBool); // Output: 1
console.log(typeof numFromBool); // Output: 'number'
```

  </div>
  </div>
</details>

---

### Can you name one method that automatically converts a value to a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The toString() method in JavaScript is commonly used to automatically convert a value to a string representation. This method can be called on various data types such as numbers, booleans, and objects to obtain a string representation of their values.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

1. **Number to String Conversion:**

```javascript
let num = 123;
let str = num.toString(); // num is explicitly converted to a string.
console.log(str);         // Output: '123'
console.log(typeof str);  // Output: 'string'
```

2. **Boolean to String Conversion:**

```javascript
let bool = true;
let str = bool.toString(); // bool is explicitly converted to a string.
console.log(str);          // Output: 'true'
console.log(typeof str);   // Output: 'string'
```

Keep in mind that not all types in JavaScript have a `toString()` method. For instance, `null` and `undefined` do not have this method, and trying to use `toString()` on these values will result in a TypeError.

  </div>
  </div>
</details>

---

### What built-in object do we use to explicitly convert values to a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, we can use the built-in String object to explicitly convert values to a string. The String object provides several methods for converting values of different data types to strings.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let value = true;

console.log(typeof value); // boolean
value = String(value); // now value is a string "true"
console.log(typeof value); // string
```

  </div>
  </div>
</details>

---

### When do numeric conversions happen in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversions occur during arithmetic operations, comparison operations using the equality operator, or when explicitly converting a value using methods, like Number(), parseInt(), or parseFloat().
  </div><br />
  <div><strong className="codeExample">Code Examples:</strong><br /><br />

  <div></div>

Here are a few examples illustrating when numeric conversions happen in JavaScript:

1. **Implicit Numeric Conversion with Mathematical Operators:**

```javascript
let str = '123';
let result = str / 3; // str is implicitly converted to a number.
console.log(result);  // Output: 41
```

2. **Explicit Numeric Conversion with `Number()` Function:**

```javascript
let bool = true;
let result = Number(bool); // bool is explicitly converted to a number.
console.log(result);       // Output: 1
```

3. **Explicit Numeric Conversion with `parseInt()` Function:**

```javascript
let str = '350px';
let result = parseInt(str); // str is explicitly converted to a number.
console.log(result);        // Output: 350
```

In all these examples, JavaScript converts the non-number data types to numbers in order to perform the operations or as explicitly instructed by the built-in functions.

  </div>
  </div>
</details>

---

### What object do we use to convert values to a number explicitly?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the Number() object to explicitly convert values to a number.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '123';
console.log(typeof str); // string
let num = Number(str); // becomes a number 123
console.log(typeof num); // number
```

  </div>
  </div>
</details>

---

### What is the result of an explicit attempt to convert a non-number to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the result of an explicit attempt to convert a non-number to a number using the Number() function will return NaN (Not a Number).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let age = Number('an arbitrary string instead of a number');

console.log(age); // NaN, conversion failed
```

  </div>
  </div>
</details>

---

### If there is an attempt to convert an undefined value to a number. What is the return result?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Numeric conversions on undefined values returns NaN (Not-a-Number).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let thisNumber;

let result = Number(thisNumber);

console.log(result); // returns NaN, conversion failed
```

  </div>
  </div>
</details>

---

### What is the return result when attempting to convert a null value to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, when attempting to convert a null value to a number using the Number() constructor, the result is 0.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let thisNumber = null;

let result = Number(thisNumber);

console.log(result); // returns 0
```

  </div>
  </div>
</details>

---

### What value returns when you attempt a numeric conversion of true and false?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, when converting true to a number, the return value is 1. When converting false to a number, the return value is 0.</div><br />
  <div><strong className="codeExample">Code Examples:</strong><br /><br />

  <div></div>

```javascript
let numFromTrue = Number(true);  // Explicitly converting true to a number.
console.log(numFromTrue);        // Output: 1

let numFromFalse = Number(false);  // Explicitly converting false to a number.
console.log(numFromFalse);         // Output: 0
```

This conversion also applies when `true` and `false` are used in mathematical operations, as JavaScript implicitly converts them to `1` and `0` respectively:

```javascript
let num = 10 + true;  // true is implicitly converted to 1.
console.log(num);     // Output: 11

num = 10 + false;     // false is implicitly converted to 0.
console.log(num);     // Output: 10
```

  </div>
  </div>
</details>

---

### Can you give a brief description of the potential outcomes when converting a string to a number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, converting a string to a number can result in a valid number, NaN for non-numeric strings, or 0 for empty strings.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myString = '';

let outcome = Number(myString);

console.log(outcome); // returns 0
```

  </div>
  </div>
</details>

---

### Do boolean conversions happen implicitly, explicitly, or both?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both. Boolean conversions in JavaScript can happen implicitly, such as when using boolean contexts (if, while, ? :), and explicitly, using the Boolean() function or the !! operator.
  </div><br />
  <div><strong className="codeExample">Code Examples:</strong><br /><br />

  <div></div>

**Implicit Boolean Conversion:**

JavaScript implicitly converts values to boolean in logical contexts (like in `if` conditions).

```javascript
let str = 'hello';
if (str) { // str is implicitly converted to boolean.
  console.log('The string is not empty.'); // Output: The string is not empty.
}

let num = 0;
if (num) { // num is implicitly converted to boolean.
  console.log('This won\'t be printed.'); // This line won't execute as num converts to false.
}
```

**Explicit Boolean Conversion:**

You can explicitly convert values to boolean using the `Boolean()` function or the `!!` operator.

```javascript
let str = 'hello';
let bool = Boolean(str); // str is explicitly converted to boolean.
console.log(bool); // Output: true

let num = 0;
bool = !!num; // num is explicitly converted to boolean using !! operator.
console.log(bool); // Output: false
```

  </div>
  </div>
</details>

---

### Are there any objects we can use for explicit Boolean conversions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in JavaScript, you can use the Boolean object for explicit Boolean conversions. Additionally, you can use the double NOT operator to achieve the same effect.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true
console.log(Boolean('')); // false
```

  </div>
  </div>
</details>

---

### In the context of Boolean conversion, which values evaluate to false, and which values evaluate to true?

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
  <div><strong>Interview Response:</strong> In JavaScript, the Boolean return value for the string "0" is true because it's a non-empty string, making it a truthy value.</div><br />
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
  <div><strong>Interview Response:</strong> String, Number, and Boolean conversions are the most widely used type conversions in JavaScript.
  </div>
  </div>
</details>

---

### What is type coercion in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another during the execution of operations involving different types.
  </div>
  </div>
</details>

---

### What is the toString() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `toString()` method in JavaScript converts and returns a value as a string. It's commonly used on numbers, booleans, and objects.
  </div>
  </div>
</details>

---

### What is the valueOf() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The valueOf() method is a built-in method in JavaScript that returns the primitive value of an object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let strObj = new String("Hello");
let strVal = strObj.valueOf();
console.log(strVal); // Output: "Hello"

let numObj = new Number(123);
let numVal = numObj.valueOf();
console.log(numVal); // Output: 123

let boolObj = new Boolean(true);
let boolVal = boolObj.valueOf();
console.log(boolVal); // Output: true
```

In this example, `valueOf()` is used to get the primitive values ("Hello", 123, and true) of the String, Number, and Boolean objects respectively. Note that, when called on a primitive type (not an object), `valueOf()` will return the primitive itself.

  </div>
  </div>
</details>

---
