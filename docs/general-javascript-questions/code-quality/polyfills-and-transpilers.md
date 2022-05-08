---
title: Polyfills & Transpilers
description: Polyfills and transpilers are libraries that provide a way to add functionality to older browsers.
sidebar_position: 6
sidebar_label: Polyfills & Transpilers
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PolyfillsSchemaData.js';

<JsonLD data={StructuredData} />

**Code Quality: Polyfills & Transpilers**

<CloseAllAnswers />

### Describe what a JavaScript Trans-piler does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A transpiler is a unique piece of software that can parse ("read and understand") modern code and rewrite it using older syntax constructs so that the result would be the same.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = height !== undefined && height !== null ? height : 100;
```

:::note

Before 2020, JavaScript did not have a nullish coalescing operator (??). We needed a piece of software to convert it into workable code for older browsers to do work.

:::

  </div>
  </div>
</details>

---

### What is a Polyfill in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A polyfill fills the gaps where newer JavaScript features may not be compatible with older browsers.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Polyfill if Math.trunc function does not exist in an older engine.<br /><br />

  <div></div>

```js
if (!Math.trunc) {
  // if no such function
  // implement it
  Math.trunc = function (number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

  </div>
  </div>
</details>

---
