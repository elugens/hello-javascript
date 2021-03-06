---
title: Promisification
description: Promisification is a way to convert a callback-based function into a promise-based function. Promisification is a long word for a simple transformation.
sidebar_position: 6
sidebar_label: Promisification
keywords:
  - promisification
  - promises
  - callback functions
  - javascript promisification
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - interview questions
  - interview answers
  - js
tags:
  - promisification
  - promises
  - callback functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PromisifySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Promisification | HelloJavaScript.info</title>
</head>

**Promises/Async/Await: Promisification**

<CloseAllAnswers />

---

### Can you explain what “promisification” is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> “Promisification” is a long word for a simple transformation, and it is the conversion of a function that accepts a callback into a function that returns a promise. Such transformations are often required in real-life, as many functions and libraries are callback-based. But promises are more convenient, so it makes sense to “promisify” them.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// usage:
// loadScriptPromise('path/script.js').then(...)
```

  </div>
  </div>
</details>

---

### What is one crucial aspect to remember when using promisifications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promisification is an excellent approach, especially when using async/await, but not a total replacement for callbacks. Remember, a promise may have only one result, but a callback may technically be called many times. So promisification is only meant for functions that call the callback once, and further calls get ignored.
</div>
  </div>
</details>

---
