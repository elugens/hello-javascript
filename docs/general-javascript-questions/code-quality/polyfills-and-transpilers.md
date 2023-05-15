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

### Describe what a JavaScript Transpiler does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JavaScript transpiler converts source code written in one version or dialect of JavaScript into another, enabling modern features in older browsers or environments.
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

### Why do developers use JavaScript transpilers?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Developers use JavaScript transpilers to maintain compatibility across browsers, utilize modern language features, optimize code performance, and streamline development with modular, maintainable, and organized codebases.
    </div>
  </div>
</details>

---

### What is Babel and how does it relate to JavaScript transpilers?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Babel is a popular JavaScript transpiler that converts modern ES6+ syntax into ES5 code, enabling compatibility with older browsers and support for cutting-edge language features.
    </div>
  </div>
</details>

---

### What is TypeScript, and how does it relate to JavaScript transpilers?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> TypeScript is a statically-typed superset of JavaScript that compiles to JavaScript, enhancing code maintainability, readability, and error detection with optional type annotations and transpilation.
    </div>
  </div>
</details>

---

### Can you name some other JavaScript transpilers besides Babel?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Other JavaScript transpilers include Dart, Elm, Traceur, TypeScript, and CoffeeScript.
    </div>
  </div>
</details>

---

### How do JavaScript transpilers impact website performance?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript transpilers can impact website performance by generating optimized code, reducing file size through minification, and polyfilling features, but may introduce extra build-time complexity.
    </div>
  </div>
</details>

---

### How do you configure a JavaScript transpiler?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> To configure a JavaScript transpiler, install it as a dependency, create a configuration file with required settings, and integrate it with your build process or development environment.
    </div>
  </div>
</details>

---

### What is the difference between a transpiler and a compiler?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A transpiler converts source code between similar languages or language versions, while a compiler translates high-level language code into low-level machine or assembly code for execution.
    </div>
  </div>
</details>

---

### What is a Polyfill in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A polyfill is a JavaScript code snippet that provides modern functionality in older browsers by emulating missing features, ensuring consistent behavior across different environments.
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

### Why would you use a polyfill?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> We should use a polyfill to maintain cross-browser compatibility, ensuring consistent functionality and user experience when native support for specific features is lacking in older browsers.
    </div>
  </div>
</details>

---

### How do you include a polyfill in your JavaScript code?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> To include a polyfill, either add the polyfill script directly in your HTML file or import it as a module in your JavaScript code, before using the desired feature.
    </div>
  </div>
</details>

---

### How do you know which polyfill to use for a specific feature?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> To identify the right polyfill for a specific feature, consult compatibility tables on MDN Web Docs or caniuse.com to determine browser support. Review polyfill libraries, like core-js or polyfill.io, or search for reputable standalone polyfills. Check documentation, compatibility, and community feedback before selecting one.
    </div>
  </div>
</details>

---

### What are some popular polyfills used in JavaScript development?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Popular JavaScript polyfills include core-js, offering ECMAScript standard library polyfills, and polyfill.io, providing custom polyfill bundles based on the user's browser. These ensure consistent functionality across diverse browser environments.
    </div>
  </div>
</details>

---

### Can polyfills negatively impact performance?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Polyfills can negatively impact performance by increasing the JavaScript file size, potentially slowing down page load times, especially if multiple polyfills are used unnecessarily.
    </div>
  </div>
</details>

---

### How can you optimize your use of polyfills to avoid performance issues?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> To optimize polyfill usage, only include necessary polyfills, use conditional loading to target specific browsers, bundle and minify polyfill files, and leverage CDNs for faster delivery.
    </div>
  </div>
</details>

---
