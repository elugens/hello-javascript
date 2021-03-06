---
title: Dynamic Imports
description: Dynamic Imports in JavaScript ES6 Modules - We can implement dynamic imports by using the import expression. Frontend Developer Interview Questions
sidebar_position: 3
sidebar_label: Dynamic Imports
keywords:
  - dynamic imports
  - es6 modules
  - import expressions
  - functions
  - javascript
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
  - dynamic imports
  - es6 modules
  - import expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DynamicImportSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Dynamic Imports | JavaScript Frontend Phone Interview Answers</title>
</head>

**Modules: Dynamic Imports**

<CloseAllAnswers />

---

### How can we import a module dynamically, on-demand?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can implement dynamic imports by using the import expression. The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It gets called from any place in our code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 say.js
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}

// Then dynamic import can be like this

let { hi, bye } = await import('./say.js');

hi();
bye();
```

  </div>
  </div>
</details>

---

### Is there a process for importing dynamic JS modules to manage issues?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, we can handle errors in dynamic imports the same way we handle errors in promises by using the then and catch methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)
```

  </div>
  </div>
</details>

---

### What are the benefits of the dynamic import expression in JS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main benefit of dynamic imports is that they allow you to load JavaScript modules dynamically. This implementation makes it useful for lazy-loading or computed module specifier strings. In addition, dynamic imports provide us with a promise, allowing access to the .then and .catch methods for handling (catch error). Dynamic imports work in regular scripts; they don’t require script type="module".
</div>
  </div>
</details>

---

### Is the dynamic import expression a JavaScript function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, although import() looks like a function call, it’s a special syntax that happens to use parentheses (similar to super()). So, we cannot copy import to a variable or use call/apply with it. It is not a function.
</div>
  </div>
</details>

---

### What is tree shaking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Tree shaking is a type of dead code removal. It implies that unnecessary modules get excluded from the bundle during the build process. It relies on the static structure of ES2015 module syntax ( i.e., import and export). Initially, the ES2015 module bundler 'rollup' promoted this. We have access to several module bundlers, including WebPack, Browserify, Fusebox, and Rollup.
</div>
  </div>
</details>

---
