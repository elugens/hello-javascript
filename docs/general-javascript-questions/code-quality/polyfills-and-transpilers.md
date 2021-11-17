---
title: Polyfills & Transpilers
sidebar_position: 6
---

# Polyfills & Transpilers

**Code Quality: Polyfills & Transpilers**

<head>
  <title>Polyfills & Transpilers - Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Describe what a JavaScript Trans-piler does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A transpiler is a special piece of software that can parse (“read and understand”) modern code, and rewrite it using older syntax constructs, so that the result would be the same.
</div>
  </div>
</details>

:::note

Before 2020, JavaScript did not have a nullish coalescing operator (??). In order to make it work we needed a piece of software to convert it into workable code for older browsers.

:::

Code Example:

```js
// before running the transpiler

height = height ?? 100;

// after running the transpiler

height = height !== undefined && height !== null ? height : 100;
```

---

### What is a Polyfill in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A polyfill fills in the gaps where newer JavaScript features may not be compatible with older browsers.
</div>
  </div>
</details>

Code Example: Polyfill if Math.trunc function does not exist in an older engine

```js
if (!Math.trunc) {
  // if no such function

  // implement it

  Math.trunc = function (number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in our Q&A
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

---
