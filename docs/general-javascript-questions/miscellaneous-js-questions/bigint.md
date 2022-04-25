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
  <div><strong>Interview Response:</strong> BigInt is a unique numeric type that allows integers of any length. A BigInt gets formed by attaching n to the end of an integer literal or by using the BigInt function, which generates BigInts from strings and numbers.</div><br />
  <div><strong>Technical Response:</strong> BigInt is a unique numeric type that allows integers of any length. A BigInt gets formed by attaching n to the end of an integer literal or by using the BigInt function, which generates BigInts from strings, numbers. BigInt gets used chiefly as a regular integer. All operations on BigInts return BigInts. BigInts and regular numbers cannot be blended. If necessary, we should explicitly convert them using BigInt() or Number(). The conversion procedures are always quiet and never produce errors, but if the BigInt is too huge, it won’t fit the number type, and excess bits get chopped off; thus, we should exercise caution while doing such conversions.
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
  <div><strong>Interview Response:</strong> When BigInts get used with the division operator, it rounds the BigInt towards zero. All operations on BigInts return BigInts.
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
  <div><strong>Interview Response:</strong> BigInts and regular numbers should never get mixed in mathematical operations because they result in an error. If needed, we should explicitly convert them using BigInt() or Number().
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
  <div><strong>Interview Response:</strong> No, we should use Number() to convert a BigInt to a number.
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

### Although comparisons work with BigInt, what should you always remember?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Comparisons, such as (&#8249; &#8250;) work with BigInts and numbers without issue, but as numbers and BigInts belong to different types, they can be equal ==, but not strictly equal === each other.
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
