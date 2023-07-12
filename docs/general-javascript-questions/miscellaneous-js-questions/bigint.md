---
title: BigInt in JavaScript
description: BigInt is a new type of number in JavaScript. They are used to represent integers that are bigger than the max safe integer. - Frontend Interview Questions
sidebar_position: 5
sidebar_label: BigInts
keywords:
  - bigint data type
  - javascript bigint
  - bigints
  - bigint
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - bigint data type
  - javascript bigint
  - bigints
  - bigint
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BigIntSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>BigInt | JavaScript Frontend Phone Interview Questions</title>
</head>

**Miscellaneous: BigInt**

<CloseAllAnswers />

---

### What is BigInt in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInt is a built-in object in JavaScript that allows the representation of integers with arbitrary precision, beyond the limit of the Number type, for computations that require high precision.</div><br />
  <div><strong>Technical Response:</strong> BigInt is a unique numeric type that allows integers of any length. A BigInt gets formed by attaching n to the end of an integer literal or by using the BigInt function, which generates BigInts from strings, numbers. BigInt gets used chiefly as a regular integer. All operations on BigInts return BigInts. BigInts and regular numbers cannot be blended. If necessary, we should explicitly convert them using BigInt() or Number(). The conversion procedures are always quiet and never produce errors, but if the BigInt is too huge, it won’t fit the number type, and excess bits get chopped off; thus, we should exercise caution while doing such conversions.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');

const bigintFromNumber = BigInt(10); // same as 10n

console.log(1n + 2n); // 3

console.log(5n / 2n); // 2

console.log(1n + 2); // Error: Cannot mix BigInt and other types

let bigint = 1n;
let number = 2;

// number to bigint
console.log(bigint + BigInt(number)); // 3

// bigint to number
console.log(Number(bigint) + number); // 3
```

  </div>
  </div>
</details>

---

### How do you declare a BigInt in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can declare a BigInt by appending 'n' to the end of an integer or by using the BigInt constructor with a number or string as argument.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');

const bigintFromNumber = BigInt(10); // same as 10n
```

  </div>
  </div>
</details>

---

### Why was BigInt introduced in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInt was introduced to handle large numbers which are beyond the safe integer limit for Numbers in JavaScript. This is useful in cryptography, finance, and other number-heavy computations.
  </div>
  </div>
</details>

---

### Can you perform mathematical operations with BigInts and Numbers together?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, you cannot directly perform operations between BigInts and Numbers. You must convert them to the same type before performing operations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js

const myBigInt = BigInt("12345678901234567890");
const myNumber = 10;

const result = Number(myBigInt) + myNumber;
console.log(result); // 12345678901234567000
```

  </div>
  </div>
</details>

---

### How does the division operator interact with BigInts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the division operator with BigInts truncates any fractional part, always resulting in a BigInt, unlike division with Numbers which can yield fractional results.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Regular Numbers
console.log(5 / 2); // 2.5

// BigInt
console.log(5n / 2n); // 2, rounds towards zero
```

  </div>
  </div>
</details>

---

### How does BigInt handle decimal numbers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInt only represents whole numbers. Decimals are not supported and will cause a SyntaxError.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js

const myBigInt = BigInt(3.14159);
console.log(myBigInt); // RangeError: The number 3.14159 cannot be converted to a BigInt because it is not an integer

const anotherBigInt = BigInt("2.71828");
console.log(anotherBigInt); // SyntaxError: Cannot convert 2.71828 to a BigInt
```

  </div>
  </div>
</details>

---

### Can BigInt be used as a key in a Map or Set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, BigInt can be used as a key in a Map or Set in JavaScript.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using BigInt as a key in a `Map`:

```javascript
const myMap = new Map();

const keyBigInt = BigInt("12345678901234567890");
const value = "Some value";

myMap.set(keyBigInt, value);

console.log(myMap.get(keyBigInt)); // Output: "Some value"
```

You can use BigInt as a value in a `Set`:

```javascript
const mySet = new Set();

const valueBigInt = BigInt("12345678901234567890");

mySet.add(valueBigInt);

console.log(mySet.has(valueBigInt)); // Output: true
```

  </div>
  </div>
</details>

---

### What happens when you mix regular numbers with BigInts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should never mix BigInts and regular numbers in mathematical operations because they result in errors without conversion. If needed, we should explicitly convert them using BigInt() or Number(). They must be the same type for such operations.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(1n + 2); // Error: Cannot mix BigInt and other types

// Explicit Conversion
let bigint = 1n;
let number = 2;

// number to bigint
console.log(bigint + BigInt(number)); // 3

// bigint to number
console.log(Number(bigint) + number); // 3
```

  </div>
  </div>
</details>

---

### Is it possible to use the unary operator on BigInts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the unary '-' operator to negate BigInts in JavaScript. However, the unary '+' operator cannot be used with BigInts; it will cause a TypeError.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let bigIntVal = BigInt(10);
console.log(-bigIntVal); // Outputs: -10n
```

In this example, the unary '-' operator is used to negate a BigInt.

However, using the '+' operator will result in a TypeError:

```javascript
let bigIntVal = BigInt(10);
console.log(+bigIntVal); // TypeError: Cannot convert a BigInt value to a number
```

  </div>
  </div>
</details>

---

### Although comparisons work with BigInt, what should you always remember?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When comparing BigInt values, you should always remember to use the appropriate comparison operators (===, !==, &#60;, &#60;=, &#62;, &#62;=), and not the identity operator (== or !=), which may perform a type coercion and produce unexpected results.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(1 == 1n); // true

console.log(1 === 1n); // false
```

  </div>
  </div>
</details>

---

### Can you compare BigInt and Number using comparison operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, BigInt and Number can be compared directly using comparison operators, such as '&#62;', '&#60;', '&#62;=', and '&#60;='.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let bigint = 1234567890123456789012345678901234567890n;
let number = 1234567890;

console.log(bigint > number);  // Outputs: true
console.log(bigint < number);  // Outputs: false
console.log(bigint === number);  // Outputs: false
```

  </div>
  </div>
</details>

---

### How does JavaScript handle equality checks between BigInt and Number?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript treats BigInt and Number as different types. Therefore, even if their values are the same, '===' equality check will return false.
  </div><br />
  <div><strong>Interview Response:</strong> In JavaScript, BigInt and Number are considered to be two different types, so using the strict equality operator === to compare a BigInt and a Number will always return false, even if they are numerically equal. This is because === checks not only the value, but also the type of its operands.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

For example...

```javascript
let bigint = 123n;
let number = 123;

console.log(bigint === number); // Outputs: false
```

However, if you use the loose equality operator `==`, JavaScript will perform type coercion if the types of the operands are different. In the case of comparing a BigInt and a Number, this means the Number will be converted to a BigInt, and then the comparison will be done. So, a BigInt and a Number that are numerically equal will be considered equal by the `==` operator.

For example:

```javascript
let bigint = 123n;
let number = 123;

console.log(bigint == number); // Outputs: true
```

---

:::note
It's important to note that using `==` can sometimes lead to unexpected results due to type coercion, so many developers prefer to always use `===` and handle type conversion explicitly when necessary.
:::

  </div>
  </div>
</details>

---

### Can you use BigInt with JSON.stringify?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the JSON object does not support the BigInt data type, and calling JSON.stringify on an object with BigInt values will throw an error.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let data = {
  id: 9007199254740993n
};

console.log(JSON.stringify(data)); // Throws TypeError: Do not know how to serialize a BigInt
```

There are ways to work around this, though, such as by defining a `toJSON` method on the object that converts BigInt values to strings or numbers. Here's an example of converting BigInt values to strings:

```javascript
let data = {
  id: 9007199254740993n,
  toJSON() {
    return {
      id: this.id.toString()
    };
  }
};

console.log(JSON.stringify(data)); // Outputs: {"id":"9007199254740993"}
```

---

:::note
But please note that when you deserialize the JSON string, you'll have to convert the string back to a BigInt if needed. Also, remember that Number can only safely represent integers up to `Number.MAX_SAFE_INTEGER` (`9007199254740991`), so converting a BigInt to a Number can result in loss of precision if the BigInt is larger than that.
:::

  </div>
  </div>
</details>

---

### Is BigInt fully supported across all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, BigInt is not fully supported in all browsers, notably in Internet Explorer. Always check compatibility before using new features.
  </div>
  </div>
</details>

---
