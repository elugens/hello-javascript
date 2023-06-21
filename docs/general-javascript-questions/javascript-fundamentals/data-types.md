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
  <div><strong>Interview Response:</strong> JavaScript has eight fundamental data types: Number, String, Boolean, BigInt, Null, Undefined, Symbol, and Object. The first seven are primitive data types, meaning their values can only contain one item (a string or a number), while objects can store data sets and more complex things.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myString = "Hello, world!"; // string
let myNumber = 42; // number
let myBoolean = true; // boolean
let myNull = null; // null
let myUndefined = undefined; // undefined
let mySymbol = Symbol("mySymbol"); // symbol
let myBigInt = 123456789n; // bigint
```

</div>
  </div>
</details>

---

### Which operator is used to determine the type of a particular value or argument?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The typeof operator.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, the typeof operator is used to determine the data type of a specific value or argument. It returns a string indicating the data type of the operand.<br /><br />
  JavaScript supports two forms of syntax:<br /><br />
    <ol>
      <li>As an operator: typeof x.</li>
      <li>As a function: typeof(x).</li>
      </ol>
  </div>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let mySymbol = Symbol("mySymbol");
let myBigInt = 123456789n;

console.log(typeof myString); // Output: string
console.log(typeof myNumber); // Output: number
console.log(typeof myBoolean); // Output: boolean
console.log(typeof myNull); // Output: object
console.log(typeof myUndefined); // Output: undefined
console.log(typeof mySymbol); // Output: symbol
```

</div>
  </div>
</details>

---

### What kind of numbers are represented by the number type in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The number type represents numeric data, including integers and floating-point numbers. It also supports special numeric values such as Infinity and NaN.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myInteger = 42; // integer
let myFloat = 3.14159; // floating-point

console.log(typeof myInteger); // Output: number
console.log(typeof myFloat); // Output: number
```

</div>
  </div>
</details>

---

### What is the limitation of the number data type?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the limitation of the number type is that it can only represent numbers within a certain range, and it has limited precision when dealing with decimal fractions.</div><br />
  <div><strong>Technical Response:</strong> The “number” type cannot represent integer values greater than (2<sup>53</sup>-1) (that’s 9007199254740991) or less than -(2<sup>53</sup>-1) for negatives. It is a technical limitation caused by their internal representation, and anything beyond these values is considered a BigInt.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myNumber = 0.1 + 0.2; // 0.30000000000000004

console.log(myNumber); // Output: 0.30000000000000004
```

<p>To mitigate this issue, JavaScript provides a method called toFixed(), which allows you to specify the number of decimal places to include in a number:</p>

```js
let myNumber = 0.1 + 0.2; // 0.30000000000000004

console.log(myNumber.toFixed(2)); // Output: 0.30
```

</div>
  </div>
</details>

---

### How is a BigInt instantiated (created) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, BigInts can be instantiated by appending "n" to the end of an integer literal or by calling the BigInt() constructor with an integer or a string representing an integer as its argument.</div>
  </div>
</details>

---

### Which are the three types of quotes that can be used to create a string representation of a value in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Double, single, and backticks.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, there are three types of quotes that can be used to create a string representation of a value: single quotes, double quotes, and backticks (template literals).</div><br />
  <div><strong className="codeExample">Here's an example of how to use each type of quote:</strong><br /><br />

  <div></div>

```js
let mySingleQuoteString = 'Hello, world!'; // using single quotes
let myDoubleQuoteString = "Hello, world!"; // using double quotes
let myBacktickString = `Hello, world!`; // using backticks

console.log(mySingleQuoteString); // Output: Hello, world!
console.log(myDoubleQuoteString); // Output: Hello, world!
console.log(myBacktickString); // Output: Hello, world!
```

<p>All three types of quotes can be used interchangeably to create string literals. However, backticks have additional functionality that allows you to embed expressions directly in a string using template literals:</p>

```js
let myName = "Alice";
let myTemplateLiteralString = `Hello, ${myName}!`; // using template literals

console.log(myTemplateLiteralString); // Output: Hello, Alice!
```

<p>In this example, we've used backticks to create a template literal string that includes an expression ($&#123;myName&#125;) which is evaluated and embedded directly in the string.</p>

</div>
  </div>
</details>

---

### What is the difference between double, single, and backtick quotes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, double and single quotes are interchangeable and can be used to create string literals. Backtick quotes (template literals) allow embedding expressions and special characters. They allow us to embed variables and expressions inside a string, for example, by surrounding them with $&#123;…&#125;.</div><br /><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

1. **Single quotes (`''`)** and **double quotes (`""`)** work virtually identically. They are used to enclose and define string data.

```javascript
let singleQuote = 'Hello';
let doubleQuote = "JavaScript!";

console.log(singleQuote + " " + doubleQuote); // Hello, JavaScript!
```

2. **Backticks (`` ` ` ``)** were introduced in ES6. They allow for string interpolation (template literals) and multi-line strings.

```javascript
let name = 'JavaScript';
let greeting = `Hello, ${name}!`; // Hello, JavaScript!
let multiLine = `Hello,
World!`;
```

Remember, all three can be used to define strings, but only backticks offer string interpolation and multi-line features.

:::note

Please note that we can only implement this with backticks in JavaScript. Other quotes (single and double) do not have this embedding functionality! We should make every effort to understand backticks and template literals.

:::

  </div>
  </div>
</details>

---

### What are the two possible values of the Boolean data type?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Boolean logical type in JavaScript has two values: true and false. It is commonly used for conditional statements, loops, and comparisons in programming.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong>Here's an example of how to use the Boolean data type...<br /><br />

  <div></div>

```js
let myBooleanTrue = true; // true
let myBooleanFalse = false; // false

console.log(typeof myBooleanTrue); // Output: boolean
console.log(typeof myBooleanFalse); // Output: boolean
```

<p>Boolean values are commonly used in conditional statements to control the flow of a program. For example:</p>

```js
let myNumber = 42;

if (myNumber > 10) {
  console.log("The number is greater than 10.");
} else {
  console.log("The number is less than or equal to 10.");
}
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
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myVariable = null;

console.log(myVariable); // Output: null
console.log(typeof myVariable); // Output: object
```

  </div>
  </div>
</details>

---

### What does the undefined data type represent in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the undefined data type represents a variable or object property that has been declared but not assigned a value, or a function that has no return value.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let age;

console.log(age); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable, but it is not recommended.

let age = 100;

// change the value to undefined

age = undefined;

console.log(age); // "undefined"
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

### What are the primitive data types in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primitive data types in JavaScript include the Number, String, Boolean, BigInt, Null, Undefined, and Symbol types.</div>
  </div>
</details>

---

### What is the difference between null and undefined in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, null and undefined are two distinct data types that represent different types of non-values. undefined represents a value that has not been defined or has not yet been assigned a value, while null represents a deliberate absence of a value.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myUndefinedVariable;
let myNullVariable = null;

console.log(myUndefinedVariable); // Output: undefined
console.log(myNullVariable); // Output: null
```

:::note

Note that typeof undefined returns "undefined", while typeof null returns "object", which is a quirk in the language's design that cannot be fixed for backward compatibility reasons.

:::

  </div>
  </div>
</details>

---

### What is NaN in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, NaN stands for "Not a Number" and is a special value that represents the result of an invalid or undefined mathematical operation.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myNaN = 0 / 0;

console.log(myNaN); // Output: NaN
console.log(typeof myNaN); // Output: number
console.log(Number.isNaN(myNaN)); // Output: true
```

:::note

Note that typeof NaN returns "number", indicating that NaN is a numeric value, but Number.isNaN() is a method that can be used to check whether a value is equal to NaN.

:::

  </div>
  </div>
</details>

---

### What is a BigInt in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInt is a JavaScript numeric data type that can represent integers of arbitrary length, allowing for precise calculations beyond the limitations of the Number type.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myBigInt = 12345678901234567890n;

console.log(myBigInt); // Output: 12345678901234567890n
console.log(typeof myBigInt); // Output: bigint
```

  </div>
  </div>
</details>

---

### What is the difference between a primitive data type and an object data type in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A primitive is a basic data type that represents a single value, while an object is a complex structure that represents a collection of key-value pairs.</div><br />
  <div><strong className="codeExample">Here's an example of how to use a primitive data type:</strong><br /><br />

  <div></div>

```js
let myNumber = 42;

console.log(myNumber); // Output: 42
console.log(typeof myNumber); // Output: number
```

  </div><br />
  <div><strong className="codeExample">Here's an example of how to use an object data type:</strong><br /><br />

  <div></div>

```js
let myObject = {
  name: "Alice",
  age: 30,
  isStudent: true
};

console.log(myObject); // Output: {name: "Alice", age: 30, isStudent: true}
console.log(typeof myObject); // Output: object
```

:::note

The main difference between primitive data types and object data types is that primitive data types are immutable (i.e., their values cannot be changed), while object data types are mutable (i.e., their values can be changed by adding, updating, or deleting key-value pairs). Additionally, primitive data types are passed by value, while object data types are passed by reference.

:::

  </div>
  </div>
</details>

---
