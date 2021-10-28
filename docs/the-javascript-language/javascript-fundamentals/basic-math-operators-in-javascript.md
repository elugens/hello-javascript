---
title: Basic Operators, Math
sidebar_position: 8
---

# Mathematical Operators in JavaScript - Q&A

## BASIC OPERATORS, MATH

**Question:** **What is an operand in JavaScript?**

**Interview Answer:** An operand is what operators are applied to in programming. They are left or right operands and, in some cases, can be a single argument or value.

**Technical Answer:** Operands are expressions or values on which an operator operates or works (often constants or variables but sub-expressions are also permitted).

Source: <https://javascript.info/operators#terms-unary-binary-operand>

**Question:** **Explain the difference between a Binary and a Unary operand?**

**Interview Answer:** A binary operand has two arguments on the left and right sides of the operator. A Unary operand has a single operand.

**Technical Answer:** There are two types of mathematical operators: unary and binary. Unary operators perform an action with a single operand. Binary operators perform actions with two operands. Unary operators are arithmetic operators that perform an action on a single operand.

Example of Unary Operand:

```js
let x = 1;

x = -x;

alert(x); // -1, unary negation was applied
```

Example of Binary Operands:

```js
let x = 1,
  y = 3;

alert(y - x); // 2, binary minus subtracts values
```

Source: <https://javascript.info/operators#terms-unary-binary-operand>

**Question:** **What basic mathematical operations are allowed in JavaScript?**

**Interview Answer:** The basic mathematical operations include addition, subtraction, multiplication, division, remainder or modulo, and exponentiation.

**Technical Answer:** The basic mathematical operations allowed in JavaScript include Addition +, Subtraction -, Multiplication \*, Division /, Remainder or Modulo %, and Exponentiation \*\*.

Source: <https://javascript.info/operators#maths>

**Question:** **What remainder/modulo operator used in JavaScript?**

**Interview Answer:** The remainder operator is used to find the remainder of two arguments (operands/values).

Example:

```js
alert(5 % 2); // 1, a remainder of 5 divided by 2
alert(8 % 3); // 2, a remainder of 8 divided by 3
```

Source: <https://javascript.info/operators#remainder>

**Question:** **How does the exponentiation operator function in JavaScript?**

**Interview Answer:** The exponentiation operator multiplies a number by itself a specified number of times.

**Technical Answer:** The exponentiation (\*\*) operator multiplies a number by itself a specified number of times. It is like the caret (^) operator in python.

Example:

```js
alert( 2 \*\* 2 ); // 4  (2 multiplied by itself 2 times)

alert( 2 \*\* 3 ); // 8  (2 \* 2 \* 2, 3 times)

alert( 2 \*\* 4 ); // 16 (2 \* 2 \* 2 \* 2, 4 times)
```

Source: <https://javascript.info/operators#exponentiation>

**Question:** **Can exponentiation be defined for non-integer numbers?**

**Interview Answer:** Mathematically, exponentiation can be defined for non-integer numbers.

Example:

```js
alert( 4 \*\* (1/2) ); // 2 (power of 1/2 is the same as a square root)

alert( 8 \*\* (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```

Source: <https://javascript.info/operators#exponentiation>

**Question:** **Is it possible to concatenate strings in JavaScript?**

**Interview Answer:** Strings can be concatenated using the binary plus operator or the concat method.

**Technical Answer:** Yes, concatenation can be achieved using the binary (+) operator. We can also use the built-in “concat” method to achieve the same result.

Example:

```js
let s = 'my' + 'string';

alert(s); // mystring
// Using the Built-in concat() method

let a = 'concat';

alert(a.concat('String')); // concatString
// String Conversion

alert('1' + 2); // "12"
alert(2 + '1'); // "21"
// Order of Operations still applies

alert(2 + 2 + '1'); // returns 2 + 2 = 4 and 4 + '1' = 41

// returns "41" and not "221"
```

Source: <https://javascript.info/operators#string-concatenation-with-binary>

**Question:** **How does unary plus work on single values?**

**Interview Answer:** Unary plus has no effect on numbers, but it does convert non-number strings into numbers.

**Technical Answer:** Unary (+) plus will have no conversion effect on numbers, but it converts non-numbers like strings to numbers. JavaScript also has a built-in Number(value) method that can be used to achieve the same output.

Example:

```js
// No effect on numbers

let x = 1;

alert(+x); // 1
let y = -2;

alert(+y); // -2
// Converts non-numbers

alert(+true); // 1
alert(+''); // 0
alert(+'7'); // converts string “7” to number 7
```

Source: <https://javascript.info/operators#numeric-conversion-unary>

**Question:** **If, you have two strings and you want to sum up the two values. What process would you use to convert both strings to numbers to ensure that they are not concatenated as a string?**

**Interview Answer:** We can use unary plus or the number object to convert the strings to numbers and then attempt to sum the two values.

**Technical Answer:** Since, both numbers are strings `(“4” + “4” = “44”)`. You can use an implicit or explicit approach to solve the problem. The implicit approach requires the use of unary plus applied to the left and right operand `(+“4” + +“4” = 8)`. The second approach is the explicit use of the built-in Number Object `(Number( “4”) + Number( “4”) = 8)`.

```js
let apples = '2';

let oranges = '3';

// both values converted to numbers before the binary plus

alert(+apples + +oranges); // 5
// the longer variant

alert(Number(apples) + Number(oranges)); // 5
```

Source: <https://javascript.info/operators#numeric-conversion-unary>

**Question:** **What is the most obvious characteristic that all operators have in JavaScript?**

**Interview Answer:** All JavaScript operators return a value including the assignment (=) operator.

Source: <https://javascript.info/operators#assignment-returns-a-value>

**Question:** **In what direction do chained assignments evaluate?**

**Interview Answer:** Chained assignments evaluate from right to left.

```js
let a, b, c;

a = b = c = 2 + 2;
ß; // Chained Assignment right to left

alert(a); // 4
alert(b); // 4
alert(c); // 4
```

Source: <https://javascript.info/operators#chaining-assignments>

**Question:** **What is the major issue with chained assignments?**

**Interview Answer:** If chained assignments are not implemented correctly it can lead to memory leaks.

Source: <https://javascript.info/operators#chaining-assignments>

**Question:** **What is the difference between increment and decrement?**

**Interview Answer:** Increment increases a variable by one and decrement decreases a variable by one.

Example:

```js
let counter = 2;

counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3
////////////////////////////////

let counter = 2;

counter--; // works the same as counter = counter - 1, but is shorter
alert(counter); // 1
```

Source: <https://javascript.info/operators#increment-decrement>

**Question:** **Can increment/decrement operators be applied to numbers?**

**Interview Answer:** No, Increment/decrement can only be applied to **variables**. Trying to use it on a value like 5++ will give an error.

Source: <https://javascript.info/operators#increment-decrement>

**Question:** **Are operators ++ and -- placed before or after a variable?**

**Interview Answer:** The operators can be placed either before or after a variable. Before the variable is a prefix position and after is postfix position.

**Technical Answer:** The operators ++ and -- can be placed either before or after a variable. When the operator goes after the variable, it is in “postfix position”: counter++. The “prefix position” is when the operator goes before the variable: ++counter.

Code Example:

```js
// Postfix Position Counter

let counter = 1;

let a = ++counter; // (\*)
alert(a); // 2
// Prefix Position Counter

let counter = 1;

let a = counter++; // (\*) changed ++counter to counter++
alert(a); // 1
```

Source: <https://javascript.info/operators#increment-decrement>

**Question:** **Is there any difference between the postfix and prefix increment/decrement positions?**

**Interview Answer:** Prefix increments counter and returns the new value. Postfix increments counter but returns the old value before being incremented.

**Technical Answer:** Yes, the prefix form ++counter increments counter and returns the new value. The postfix form counter++ also increments counter but returns the old value before being incremented.

Code Example:

```js
// Prefix Position:

let counterOne = 5;

let a = ++counterOne; // (\*)
alert(a); // alerts 6
// Postfix Position:

let counterTwo = 5;

let b = counterTwo++; // (\*) changed ++counter to counter++
alert(b); // alerts 5
```

Source: <https://javascript.info/operators#increment-decrement>

**Question:** **Can operators ++/-- be used inside of expressions?**

**Interview Answer:** Technical yes, but it is not advisable, because it reduces the readability of our code.

**Technical Answer:** Though technically okay, such notation should be avoided and usually makes code less readable. We should use a common stye of one line one action in our code.

Proper Implementation:

```js
// We advise a style of “one line – one action”:
let counter = 1;

alert(2 * counter); // 2

counter++;
```

Source: <https://javascript.info/operators#increment-decrement>

**Question:** **How do Bitwise operators treat arguments as numbers: 16-Bit, 24-Bit, or 32-Bit integer numbers?**

**Interview Answer:** Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

Source: <https://javascript.info/operators#bitwise-operators>

**Question:** **What is the comma operator used for in JavaScript?**

**Interview Answer:** The comma operator allows us to evaluate several expressions, dividing them with a comma. Each of them is evaluated but only the result of the last one is returned.

Example:

```js
let a = (1 + 2, 3 + 4);

alert(a); // 7 (the result of 3 + 4)
```

Source: <https://javascript.info/operators#comma>

**Question:** **Why do we need the comma operator that throws away everything except the last expression?**

**Interview Answer:** Sometimes, people use it in more complex constructs to put several actions in one line. It is not a normal or recommended approach.

Example: Three expressions in one line…

```js
// three operations in one line: Commonly used in frameworks
for (a = 1, b = 3, c = a \* b; a < 10; a++) {
 ...
}
```

Source: <https://javascript.info/operators#comma>

**Question:** **Does the comma operator have high or low precedence?**

**Interview Answer:** The comma operator has exceptionally low precedence, lower than the assignment operator.

Source: <https://javascript.info/operators#comma>
