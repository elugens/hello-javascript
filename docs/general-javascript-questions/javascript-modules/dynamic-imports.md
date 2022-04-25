---
title: Dynamic Imports
description: Dynamic Imports in JavaScript ES6 Modules
sidebar_position: 3
sidebar_label: Dynamic Imports
---

**Modules: Dynamic Imports**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How can we import a module dynamically, on-demand?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Dynamic imports get achieved by using the import expression. The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It gets called from any place in the code.
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
