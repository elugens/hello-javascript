---
title: Dynamic Imports
sidebar_position: 3
---

# Dynamic Imports

**Modules: Dynamic Imports**

<head>
  <title>Modules: Dynamic Imports - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How can we import a module dynamically, on-demand?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Dynamic imports can be achieved by using the import expression. The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.
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

### Is there a way to handle errors on dynamic JS module imports?

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
  <div><strong>Interview Response:</strong> The main benefit of dynamic imports is it allows you to load JavaScript modules dynamically. This makes it useful for lazy-loading or computed module specifier strings. In addition, dynamic imports provide us with a promise, which allows access to the .then and .catch methods for handling (catch error). Dynamic imports work in regular scripts, they don’t require script type="module".
</div>
  </div>
</details>

---

### Is the dynamic import expression a JavaScript function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, although import() looks like a function call, it’s a special syntax that just happens to use parentheses (similar to super()). So, we cannot copy import to a variable or use call/apply with it. It is not a function.
</div>
  </div>
</details>

---
