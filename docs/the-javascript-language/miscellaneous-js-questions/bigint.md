---
title: BigInts
sidebar_position: 5
---

# BigInts - Q&A

**Miscellaneous: BigInt**

### Can you briefly explain what a BigInt is in JavaScript?

**Interview Answer:** BigInt is a special numeric type that provides support for integers of arbitrary length. A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.

**Technical Answer:** BigInt is a special numeric type that provides support for integers of arbitrary length. A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc. BigInt can mostly be used like a regular number. All operations on bigints return bigints. BigInts cannot be mixed with regular numbers. We should explicitly convert them if needed: using either BigInt() or Number(). The conversion operations are always silent, never give errors, but if the bigint is too huge and will not fit the number type, then extra bits will be cut off, so we should be careful doing such conversion.

Example:

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');

const bigintFromNumber = BigInt(10); // same as 10n
alert(1n + 2n); // 3
alert(5n / 2n); // 2
alert(1n + 2); // Error: Cannot mix BigInt and other types
let bigint = 1n;

let number = 2;

// number to bigint

alert(bigint + BigInt(number)); // 3
// bigint to number

alert(Number(bigint) + number); // 3
```

Source: <https://javascript.info/bigint>

### How does the division operator interact with BigInts?

**Interview Answer:** When BigInts are used with the division operator it will round the BigInt towards zero. All operations on bigints return bigints.

Example:

```js
// Regular Numbers

alert(5 / 2); // 2.5
// BigInt

alert(5n / 2n); // 2, rounds towards zero
```

Source: <https://javascript.info/bigint#math-operators>

### What happens when you mix regular numbers with BigInts?

**Interview Answer:** BigInts and regular numbers should never be mixed in mathematical operations, it will result in an error. We should explicitly convert them if needed: using either BigInt() or Number().

Example:

```js
alert(1n + 2); // Error: Cannot mix BigInt and other types
// Explicit Conversion

let bigint = 1n;

let number = 2;

// number to bigint

alert(bigint + BigInt(number)); // 3
// bigint to number

alert(Number(bigint) + number); // 3
```

Source: <https://javascript.info/bigint#math-operators>

### Is it possible to use the unary operator on BigInts?

**Interview Answer:** No, we should use Number() to convert a bigint to a number.

Example:

```js
let bigint = 1n;

console.log(Number(bigint)); // returns 1
console.log(+bigint); // TypeError
```

Source: <https://javascript.info/bigint#math-operators>

### Although, comparisons work with BigInt, what should you always remember?

**Interview Answer:** Comparisons, such as (< >) work with bigints and numbers without issue, but as numbers and bigints belong to different types, they can be equal ==, but not strictly equal === each other.

Example:

```js
alert(1 == 1n); // true
alert(1 === 1n); // false
```

Source: <https://javascript.info/bigint#comparisons>
