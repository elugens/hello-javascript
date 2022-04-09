---
title: Number Data Type
description: The Number data type is a primitive data type.
sidebar_position: 2
sidebar_label: Numbers
---

**Data Types: Numbers**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What are the two primitive number data types in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the two number data types include numbers and BigInts.
</div>
  </div>
</details>

---

### In what format are regular numbers stored in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”.
</div>
  </div>
</details>

---

### Explain the limitations of BigInts in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInt is a built-in object that provides a way to represent whole numbers larger than 2<sup>53-1</sup> (max safe number) or be less than -2<sup>53-1</sup> (min. safe number), which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.
</div>
  </div>
</details>

---

### In JavaScript, there are several ways to write a number. Is there a safe way to separate large number groups like 1,000,000,000 and maintain a formal format?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use an underscore to ensure that the number maintains it primitive format.</div><br />
  <div><strong>Technical Response:</strong> The most common way to safely separate number groups without using a comma (which would cause an error) and keep its primitive format. Is to use an underscore (syntactic sugar) to ensure that the number maintains it primitive format. However, in most programming languages there is an easier way to propagate large numbers.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let billion = 1_000_000_000;
console.log(typeof billion); // returns number and maintains its primitive

let billions = 2,000,000,000;
console.log(typeof billons) // Uncaught SyntaxError: Unexpected number
```

  </div>
  </div>
</details>

---

### As programmers, we are always trying to find a way to reduce our code. What is easiest way to avoid writing long sequences of numbers like 1,000,000,000?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can shorten a number by appending the letter (e) to the number and specifying the zeroes count.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// In other words, e multiplies the number by 1 with the given zeroes count.

1e3 = 1 * 1000 // e3 means *1000
1.23e6 = 1.23 * 1000000 // e6 means *1000000

// Now let’s write something very small as a regular number.
// Say, 1 microsecond (one millionth of a second):

let ms = 0.000001;

// Using "e" can help. If we’d like to avoid writing the zeroes explicitly

let ms = 1e-6; // six zeroes to the left from 1

```

  </div>
  </div>
</details>

---

### Is there a difference in the position of subtraction operator when numbers are using (e) notation to shorten your numerical syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if the minus sign is preceding the number then it returns the number as a negative. A number like -1e9 equals negative 1 billion (-1000000000.0 – minus sign applies to itself) and 1e-9 will result in a floating-point number where the minus sign applies to the exponent (result: 0.000000001).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(1e-9); // 1e-9 is 0.000000001; the minus sign applies to the exponent

console.log(-1e9); // -1e9 is - 1000000000.0; minus sign applies to the number itself.
```

  </div>
  </div>
</details>

---

### What numeral systems are used to represent colors, encode characters, and base representation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hexadecimal numbers are commonly used. We can also use binary and octal, but they are used less often.</div><br />
  <div><strong>Technical Response:</strong> Hexadecimal numbers are the most used number to represent colors, encode characters, and many other things. In addition to hexadecimal numbers, binary and octal numeral systems are used and supported in JavaScript but seen less often than hexadecimal numbers. For other numeral systems, we should use the function parseInt which parses a string argument and returns an integer of the specified radix.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(0xff); // 255
alert(0xff); // 255 (the same, case doesn't matter)

// Binary and octal numeral systems

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides
```

:::note

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

:::

  </div>
  </div>
</details>

---

### Is there a method in JavaScript that returns a string representation of a number in within a given base?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The toString(base) method returns a string representation of a number value with a given base.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111
```

  </div>
  </div>
</details>

---

### What is the default base in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript is base 10 by default, but the base can vary from 2 to 36 based on your use case.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(parseInt('-15', 10)); // returns -15

// parseInt() syntax: parseInt(‘string’, [radix]);
```

  </div>
  </div>
</details>

---
