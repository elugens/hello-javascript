---
title: Data Types
sidebar_position: 5
---

# JavaScript Data Types

**JavaScript Fundamentals: JavaScript Data Types**

<head>
  <title>Data Types - JavaScript Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How many data types are there in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are eight basic data types in JavaScript including Number, String, Boolean, BigInt, Null, Undefined, Object, and Symbol. All are primitive data types except for the Object data type. All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.</div>
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
  <div><strong>Interview Response:</strong> A number cannot represent integers larger than (253-1) or less than -(253-1) for negatives.</div><br />
  <div><strong>Technical Response:</strong> The “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It is a technical limitation caused by their internal representation. Anything beyond these values is considered a BigInt.
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

### What are the three types of quotes that can be used to create a string representation of a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Double, single, and back-ticks.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, there are three types of quotes used to represent a string including double, single, and backtick quotes.<br /><br />
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
  <div><strong>Interview Response:</strong> Backticks allow us to embed variables and expressions into a string by wrapping them in $&#x7B;…&#125; . There is no notable difference between single and double quotes.</div><br />
  <div><strong>Technical Response:</strong> Double and single quotes are “simple” quotes. There is practically no difference between them in JavaScript. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in $&#x7B;…&#125;.
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

Please note that this can only be done in backticks. Other quotes do not have this embedding functionality!

:::

  </div>
  </div>
</details>

---

### What two values does the Boolean logical type have?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> true or false</div><br />
  <div><strong>Technical Response:</strong> true or false - This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”. It can also be used for comparisons or more specifically used for greater or less than values.
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
  <div><strong>Technical Response:</strong> It is a special value that represents “nothing”, “empty” or “value unknown”. It is not a representation of a value that has not to be defined, non-existing, or a null pointer like other programming languages.
  </div>
  </div>
</details>

---

### What does the undefined data type represent in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Undefined means a value has not been defined or assigned to a variable.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, undefined means a value has not been defined or assigned. If a variable is declared, but not assigned, then its value is undefined.
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
  <div><strong>Interview Response:</strong> typeof x acts as an operator and typeof(x) is a function, but they work with parentheses or without them. The result is the same.</div>
  </div>
</details>

---

### What does the typeof operator return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The typeof operator returns a string with the name of the type.</div><br />
  <div><strong>Technical Response:</strong> The typeof operator returns a string with the name of the type, like "number" if it is a number or “function” if it’s a function.
  </div>
  </div>
</details>

---
