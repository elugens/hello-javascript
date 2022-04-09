---
title: BigInts in JavaScript
description: BigInts in JavaScript is a new type of number in JavaScript. They are used to represent integers that are bigger than Number.MAX_SAFE_INTEGER. - JavaScript Interview Questions & Answers
sidebar_position: 5
sidebar_label: BigInts
---

**Miscellaneous: BigInt**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you briefly explain what a BigInt is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInt is a special numeric type that provides support for integers of arbitrary length. A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.</div><br />
  <div><strong>Technical Response:</strong> BigInt is a special numeric type that provides support for integers of arbitrary length. A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc. BigInt can mostly be used like a regular number. All operations on bigints return bigints. BigInts cannot be mixed with regular numbers. We should explicitly convert them if needed: using either BigInt() or Number(). The conversion operations are always silent, never give errors, but if the bigint is too huge and will not fit the number type, then extra bits will be cut off, so we should be careful doing such conversion.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');

const bigintFromNumber = BigInt(10); // same as 10n

alert(1n + 2n); // 3

alert(5n / 2n); // 2

alert(1n + 2); // Error: Cannot mix BigInt and other types

let bigint = 1n;
let number = 2;

// number to bigint
alert(bigint + BigInt(number)); // 3

// bigint to number
alert(Number(bigint) + number); // 3
```

  </div>
  </div>
</details>

---

### How does the division operator interact with BigInts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When BigInts are used with the division operator it will round the BigInt towards zero. All operations on bigints return bigints.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Regular Numbers
alert(5 / 2); // 2.5

// BigInt
alert(5n / 2n); // 2, rounds towards zero
```

  </div>
  </div>
</details>

---

### What happens when you mix regular numbers with BigInts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BigInts and regular numbers should never be mixed in mathematical operations, it will result in an error. We should explicitly convert them if needed: using either BigInt() or Number().
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(1n + 2); // Error: Cannot mix BigInt and other types

// Explicit Conversion
let bigint = 1n;
let number = 2;

// number to bigint
alert(bigint + BigInt(number)); // 3

// bigint to number
alert(Number(bigint) + number); // 3
```

  </div>
  </div>
</details>

---

### Is it possible to use the unary operator on BigInts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we should use Number() to convert a bigint to a number.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let bigint = 1n;

console.log(Number(bigint)); // returns 1
console.log(+bigint); // TypeError
```

  </div>
  </div>
</details>

---

### Although, comparisons work with BigInt, what should you always remember?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Comparisons, such as (&#8249; &#8250;) work with bigints and numbers without issue, but as numbers and bigints belong to different types, they can be equal ==, but not strictly equal === each other.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(1 == 1n); // true

alert(1 === 1n); // false
```

  </div>
  </div>
</details>

---
