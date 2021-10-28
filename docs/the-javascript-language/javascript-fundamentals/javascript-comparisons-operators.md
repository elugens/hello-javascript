---
title: Comparisons Operators
sidebar_position: 9
---

# Comparison Operators - Q&A

**JavaScript Fundamentals: COMPARISONS**

**Question:** **Do all comparison operator return a Boolean value?**

**Interview Answer:** All JavaScript comparisons return a Boolean value of true or false.

**Technical Answer:** Yes, all comparisons return a Boolean value of either a true or false value.

- true – means “yes”, “correct” or “the truth”.
- false – means “no”, “wrong” or “not the truth”.

Example:

```js
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)
```

Source: <https://javascript.info/comparison#boolean-is-the-result>

**Question:** **How does JavaScript compare strings to see if their greater or less than another?**

**Interview Answer:** JavaScript uses a “lexicographical” order. Strings are compared letter-by-letter based on their Unicode value.

Example:

```js
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true
// Unicode Values

let myLetter = 'Hello';

console.log(myLetter.charCodeAt(0)); // returns Unicode value 72
console.log(myLetter.charCodeAt(1)); // returns Unicode value 101
```

Source: <https://javascript.info/comparison#string-comparison>

**Question:** **When comparing values of different types, does JavaScript converts the values to numbers?**

**Interview Answer:** Yes, when comparing values of different types, it converts the values to numbers.

Example:

```js
alert( '2' > 1 ); // true, string '2' becomes a number 2

alert( '01' == 1 ); // true, the string '01' becomes a number 1


For Boolean values, true becomes 1 and false becomes 0:

alert( true == 1 ); // true

alert( false == 0 ); // true
```

Source: <https://javascript.info/comparison#comparison-of-different-types>

**Question:** **Is it possible that at the same time, two values are equal, if one of them is true as a Boolean and the other one is false as a Boolean?**

**Interview Answer:** When there is an explicit conversion to a Boolean on values that are both a string and a number such as number 0 and string “0”. The return value for the string will be true and for the number it will be false. When we attempt to compare the two using the equality operator the return value will be true, but with the strict equality operator they will be false.

Example:

```js
let a = 0;

alert(Boolean(a)); // false
let b = '0';

alert(Boolean(b)); // true
alert(a == b); // true!, equality operator
alert(a === b); // false!, strict equality operator
```

Source: <https://javascript.info/comparison#comparison-of-different-types>

**Question:** **What is the difference between a regular equality check and strict equality?**

**Interview Answer:** The main difference is that strict equality does a value type check without any conversion.

**Technical Answer:** The regular equality check loosely compares values with type conversion. Where the strict-equality check compares the value and the data type without type conversion.

Example:

```js
alert(0 === false); // false, because the types are different
```

Source: <https://javascript.info/comparison#strict-equality>

**Question:** **Is there a benefit of using the strict equality operator?**

**Interview Answer:** The strict equality operator is a bit longer to write but makes it obvious what is going on and leaves less room for errors.

Source: <https://javascript.info/comparison#strict-equality>

**Question:** **What value is returned when null and undefined are compared using the strict equality operator?**

**Interview Answer:** False because they are not the same type.

**Technical Answer:** False because each of them is a different type, but the non-strict operator returns true. For math and other comparisons such as greater and less than null/undefined are converted to numbers.

Example:

```js
// Strict Equality Check

alert(null === undefined); // false
// Non-Strict Equality Check

alert(null == undefined); // true
```

Source: <https://javascript.info/comparison#comparison-with-null-and-undefined>

**Question:** **Is it a good or bad idea to compare undefined to other values?**

**Interview Answer:** It is not recommended that you compare undefined to other values.

Example:

```js
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)
```

Source: <https://javascript.info/comparison#comparison-with-null-and-undefined>

**Question:** **What are two ways to avoid problems with undefined/null values?**

**Technical Answer:** We should avoid using undefined or null in anything less than strict comparisons and never use comparisons with an undefined or null value.

**Technical Answer:** There are two ways to avoid problems with undefined and null values.

1. Treat any comparison with undefined/null except the strict equality === with exceptional care.
1. Do not use comparisons >= > < <= with a variable that may be null/undefined, unless you’re sure of what you’re doing. If a variable can have these values, check for them separately.

Source: <https://javascript.info/comparison#comparison-with-null-and-undefined>

**Question:** **How does the if statement work?**

**Interview Answer:** The “if” statement evaluates a condition and, if the result is true, executes a block of code.

Example:

```js
let year = prompt('In which year was ECMAScript-2015 published?', '');

if (year == 2015) alert('You are right!'); // You are right!
```

Source: <https://javascript.info/ifelse#the-if-statement>
