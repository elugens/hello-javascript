---
title: Promisification
sidebar_position: 6
---

# Promisification

**Promises/Async/Await: Promisification**

<head>
  <title>Promisification - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you explain what promisification is in JavaScript?

**Interview Answer:** “Promisification” is a long word for a simple transformation. It is the conversion of a function that accepts a callback into a function that returns a promise. Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to promisify them.

Example:

```js
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// usage:

// loadScriptPromise('path/script.js').then(...)
```

Source: <https://javascript.info/promisify>

### What is one important aspect to remember when deciding to use a promisification?

**Interview Answer:** Promisification is a great approach, especially when you use async/await, but not a total replacement for callbacks. Remember, a promise may have only one result, but a callback may technically be called many times. So promisification is only meant for functions that call the callback once. Further calls will be ignored.

Source: <https://javascript.info/promisify>
