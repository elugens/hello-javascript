---
title: Code Comments - JavaScript Interview Questions
description: The key to reducing unnecessary comments in your code is to write
  self-descriptive code. The way to achieve this is to replace a chunk of code
  with a function.
sidebar_position: 3
sidebar_label: Code Comments
keywords:
  - comments in javascript
  - javascript comments
  - multiline comments
  - multi-line comments
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - code comments
  - code comments in javascript
  - interview questions
  - interview answers
  - js
tags:
  - comments
  - javascript comments
  - interview answers
  - interview questions
lastmod: 2022-05-01T18:23:05.202Z
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CommentsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Comments in JavaScript | JavaScript Frontend Phone Interview</title>
</head>

**Code Quality: Comments in JavaScript**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/JDfLW97WLbc"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### How do you reduce the number of unnecessary comments in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key to reducing unnecessary comments in your code is to write self-descriptive code. The best way to achieve this is to replace a chunk of code with a function.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Confusing Code<br /><br />

  <div></div>

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    // check if i is a prime number   <-- this is an unnecessary comment
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Good Code<br /><br />

  <div></div>

```js
// The better variant, with a factored-out function isPrime:
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}
```

  </div>
  </div>
</details>

---

### What are Good comments in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Good comments describe the architecture and lean less toward explaining what the code is doing. Good comments provide the team with a high-level overview of the components and how they interact. Good comments give a bird's eye view of the code. Good comments include documenting function parameters and their usage as well.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  ...
}
```

  </div>
  </div>
</details>

---
