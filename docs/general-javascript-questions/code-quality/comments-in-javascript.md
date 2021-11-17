---
title: Comments
sidebar_position: 3
---

# Code Comments

**Code Quality: Comments**

<head>
  <title>Code Comments - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How do you reduce the number of unnecessary comments in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key to reducing unnecessary comments in your code is to write self-descriptive code. The best way to achieve this is to replace a piece of code with a function.
</div>
  </div>
</details>

Code Example: Confusing Code

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    // check if i is a prime number   <-- this is an unnecessary comment

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}
```

Example: Good Code

```js
// The better variant, with a factored-out function isPrime:

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

---

### What are Good comments in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Good comments describe the architecture and lean less toward explaining what the code is doing. Good comments provide the team with a high-level overview of the components and how they interact. Good comments give a bird’ eye view of the code. Good comments include documenting function parameters and their usage as well.
</div>
  </div>
</details>

Code Example:

```js
/*
* Returns x raised to the n-th power.
*
* @param {number} x The number to raise.
* @param {number} n The power, must be a natural number.
* @return {number} x raised to the n-th power.
*/

function pow(x, n) {
    ...
}
```

---
