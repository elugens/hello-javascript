---
title: Mathematical Operators in JavaScript
description: How to use mathematical operators in JavaScript.
sidebar_position: 10
sidebar_label: Basic Operators, Math
---

**JavaScript Fundamentals: Basic Operators, Math**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is an operand in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In programming, operands get applied to operators. They can be left- or right-hand operands and a single argument or value depending on the case.</div><br />
  <div><strong>Technical Response:</strong> Operands are expressions or values on which an operator operates or works (often constants or variables, but sub-expressions are also permitted).
  </div>
  </div>
</details>

---

### Explain the difference between a Binary and a Unary operand?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A binary operand has two arguments on the left and right sides of the operator, and a Unary operand has a single operand.</div><br />
  <div><strong>Technical Response:</strong> There are two types of mathematical operators: unary and binary. Unary operators act with a single operand, and Binary operators perform actions with two operands. Unary operators are arithmetic operators that act on a single operand.
  </div><br />
  <div><strong className="codeExample">Example of Unary Operand:</strong><br /><br />

  <div></div>

```js
let x = 1;

x = -x;

alert(x); // -1, unary negation was applied
```

  </div><br />
  <div><strong className="codeExample">Example of Binary Operands:</strong><br /><br />

  <div></div>

```js
let x = 1,
  y = 3;

alert(y - x); // 2, binary minus subtracts values
```

  </div>
  </div>
</details>

---

### What basic mathematical operations are allowed in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The basic mathematical operations include addition, subtraction, multiplication, division, remainder or modulo, and exponentiation.</div><br />
  <div><strong>Technical Response:</strong> : The basic mathematical operations allowed in JavaScript include Addition +, Subtraction -, Multiplication *, Division /, Remainder or Modulo %, and Exponentiation **.
  </div>
  </div>
</details>

---

### In JavaScript, what is the remainder/modulo operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The remainder operator is used to find the remainder of two arguments (operands/values).</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(5 % 2); // 1, a remainder of 5 divided by 2
alert(8 % 3); // 2, a remainder of 8 divided by 3
```

  </div>
  </div>
</details>

---

### How does the exponentiation operator function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The exponentiation operator multiplies a number by itself a specified number of times.</div><br />
  <div><strong>Technical Response:</strong> The exponentiation (**) operator multiplies a number by itself a specified number of times. It is like the caret (^) operator in python.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(2 ** 2); // 4  (2 multiplied by itself 2 times)
console.log(2 ** 3); // 8  (2 * 2 * 2, 3 times)
console.log(2 ** 4); // 16 (2 * 2 * 2 * 2, 4 times)
```

  </div>
  </div>
</details>

---

### Can exponentiation be defined for non-integer numbers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Mathematically, exponentiation gets defined for non-integer numbers.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)
```

  </div>
  </div>
</details>

---

### Is it possible to concatenate strings in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strings get concatenated using the binary plus operator or the concat method.</div><br />
  <div><strong>Technical Response:</strong> Yes, concatenation using the binary (+) operator. We can also use the built-in “concat” method to achieve the same result.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let s = 'my' + 'String';

alert(s); // myString
// Using the Built-in concat() method

let a = 'concat';

alert(a.concat('String')); // concatString
// String Conversion

alert('1' + 2); // "12"
alert(2 + '1'); // "21"
// Order of Operations still applies

alert(2 + 2 + '1'); // returns 2 + 2 = 4 and 4 + '1' = 41

// returns "41" and not "221"
```

  </div>
  </div>
</details>

---

### How does unary plus work on single values?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unary plus has no effect on numbers, but it does convert non-number strings into numbers.</div><br />
  <div><strong>Technical Response:</strong> Unary (+) plus has no conversion effect on numbers, but it converts non-numbers like strings to numbers. JavaScript also has a built-in Number(value) method that you can use to achieve the same output.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// No effect on numbers
let x = 1;

alert(+x); // 1
let y = -2;

alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+''); // 0
alert(+'7'); // converts string “7” to number 7
```

  </div>
  </div>
</details>

---

### If you have two strings and wish to add their values together. What technique would you use to convert both strings to integers to prevent concatenating the values into a single string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use a unary plus or the number object to convert the strings to numbers and then attempt to sum the two values.</div><br />
  <div><strong>Technical Response:</strong> Since both numbers are strings (“4” + “4” = “44”). You can use an implicit or explicit approach to solve the problem. The implicit approach requires the use of unary plus applied to the left and right operand (+“4” + +“4” = 8). The second approach is the explicit use of the built-in Number Object ((Number( “4”) + Number( “4”)  = 8).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let apples = '2';

let oranges = '3';

// both values converted to numbers before the binary plus
alert(+apples + +oranges); // 5

// the longer variant
alert(Number(apples) + Number(oranges)); // 5
```

  </div>
  </div>
</details>

---

### What is the most prominent characteristic of all operators in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All JavaScript operators return a value, including the assignment (=) operator.</div>
  </div>
</details>

---

### In what direction do chained assignments evaluate?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Chained assignments evaluate from right to left.</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let a, b, c;

a = b = c = 2 + 2; // <- Chained Assignment right to left

alert(a); // 4
alert(b); // 4
alert(c); // 4
```

  </div>
</details>

---

### What is the major issue with chained assignments?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If chained assignments get implemented incorrectly, it can lead to memory leaks.</div>
  </div>
</details>

---

### What is the difference between increment and decrement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Increment increases a variable by one, and decrement decreases a variable by one.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let counter = 2;

counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

////////////////////////////////

let counter = 2;

counter--; // works the same as counter = counter - 1, but is shorter
alert(counter); // 1
```

  </div>
  </div>
</details>

---

### Can increment/decrement operators be applied to numbers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Increment/decrement gets applied to <strong>variables</strong>. Trying to use it on a value like 5++ gives an error.</div>
  </div>
</details>

---

### Are operators ++ and -- placed before or after a variable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The operators get placed before or after a variable. Before, the variable is a prefix position, and after the variable is the postfix position.</div><br />
  <div><strong>Technical Response:</strong> The operators ++ and – get placed before or after a variable. When the operator goes after the variable, it is in “postfix position”: counter++. The “prefix position” is when the operator goes before the variable: ++counter.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Postfix Position Counter
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

// Prefix Position Counter
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
```

  </div>
  </div>
</details>

---

### Is there any difference between the postfix and prefix increment/decrement positions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Prefix increments the counter and returns the new value. Postfix increments counter but return the old value before being incremented.</div><br />
  <div><strong>Technical Response:</strong> Yes, the prefix form ++counter increments counter and returns the new value. The postfix form counter++ also increments the counter but returns the old value before being incremented.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Prefix Position:
let counterOne = 5;
let a = ++counterOne; // (*)

alert(a); // alerts 6

// Postfix Position:
let counterTwo = 5;
let b = counterTwo++; // (*) changed ++counter to counter++

alert(b); // alerts 5
```

  </div>
  </div>
</details>

---

### Can the ++/-- operators be used within expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, yes, but it is not advisable because it reduces the readability of our code.</div><br />
  <div><strong>Technical Response:</strong> Though technically okay, such notation should be avoided and usually makes code less readable. We should use a typical style of one-line action in our code.
  </div><br />
  <div><strong className="codeExample">Proper Implementation:</strong><br /><br />

  <div></div>

```js
// We advise a style of “one line – one action”:
let counter = 1;
alert(2 * counter); // 2
counter++;
```

  </div>
  </div>
</details>

---

### How do Bitwise operators treat arguments as 16-Bit, 24-Bit, or 32-Bit integer numbers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(1100 & 1011); // 1011
console.log(1100 | 1011); // 1111
```

  </div>
  </div>
</details>

---

### What is the comma operator used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The comma operator allows us to evaluate several expressions, dividing them with a comma. Each of them gets evaluated, but only the result of the last one gets returned.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let a = (1 + 2, 3 + 4);

alert(a); // 7 (the result of 3 + 4)
```

  </div>
  </div>
</details>

---

### Why do we need the comma operator that throws away everything except the last expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sometimes, people use it in more complex constructs to put several actions in one line, and it is not a standard or recommended approach.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Three expressions in one line…<br /><br />

  <div></div>

```js
// three operations in one line: Commonly used in frameworks
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}

```

  </div>
  </div>
</details>

---

### Does the comma operator have high or low precedence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The comma operator has exceptionally low precedence, lower than the assignment operator.</div>
  </div>
</details>

---
