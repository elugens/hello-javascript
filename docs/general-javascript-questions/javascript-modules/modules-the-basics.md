---
title: Modules
description: JavaScript Modules are a way to organize code into logical units. Modules are used to break down large projects into smaller pieces. Interview Questions
sidebar_position: 1
sidebar_label: Modules
keywords:
  - function object
  - nfe
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ModulesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Modules the Basics | JavaScript Frontend Phone Interview</title>
</head>

**Modules: Modules the Basics**

<CloseAllAnswers />

### What is a JavaScript module?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JavaScript module is a reusable piece of code encapsulating functionality, which can be exported and imported by other modules using import and export statements.
</div><br />
  <div><strong>Technical Response:</strong> A module is just a file where the script resides. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one. The export keyword labels variables and functions that should be accessible from outside the current module, and import allows the import of functionality from other modules.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// we have a file sayHi.js exporting a function:
// 📁 sayHi.js
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// Then another file may import and use it:
import { sayHi } from './sayHi.js';

console.log(sayHi); // function...
sayHi('John'); // Hello, John!
```

  </div>
  </div>
</details>

---

### Do JavaScript modules work with the standard local file:// protocol?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, if you try to open a web page locally, via file:// protocol, you find that import/export directives do not work. JavaScript modules don't work with the file:// protocol due to CORS restrictions. To use modules locally, you need to set up a local web server or use a development environment.
</div><br /><br />

:::note
We can use a local web server, such as static-server, or use the live server capability of your editor, such as VS Code Live Server Extension, to test modules.
:::

  </div>
</details>

---

### Why should you use modules in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modules promote modularity, maintainability, and reusability, while helping to organize code, prevent naming conflicts, and manage dependencies in large-scale applications.<br />
  </div>
  </div>
</details>

---

### How do you create a module in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a module, write code in a separate file and export the desired functionality using the export keyword. Then, import it using the import keyword.<br />
  </div>

**Here's a simple example of a JavaScript module:**

**greetings.js** (Our module file)

```javascript
export function sayHello(name) {
    return `Hello, ${name}!`;
}
```

**main.js** (File where we import and use the module)

```javascript
import { sayHello } from './greetings.js';

console.log(sayHello('JavaScript')); // Outputs: Hello, JavaScript!
```

  </div>
</details>

---

### What is different in modules compared to regular scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modules have their own scope, preventing global namespace pollution, and use import/export statements for dependencies. They are also executed in strict mode and have top-level await support.<br /><br />
  Each module has a separate top-level scope. Top-level variables, methods, and functions from a module, in general, are not visible in other scripts.<br /><br />
  The import.meta object contains information about the current module. The surroundings determine its content. The browser includes the URL of the script or if it is inside HTML, the URL of the current webpage.<br /><br />
  In top-level modules, this is undefined.<br /><br />
  Module scripts always defer, same as the defer property for external and inline scripts.<br /><br />
  For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document. For module scripts, it works on inline scripts as well.

</div>
  </div>
</details>

---

### Can you use undeclared variables in JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, JavaScript modules run in strict mode by default, so using undeclared variables will result in a ReferenceError. Variables must be declared with var, let, or const.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script type="module">
  a = 5;
  // results in a  syntax error
</script>
```

  </div>
  </div>
</details>

---

### What does module-level scope mean in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Module-level scope in JavaScript means that variables, functions, and classes declared within a module are not automatically added to the global scope and are only accessible within the module.
</div><br/>
  <div><strong>Interview Response:</strong> Module-level scope in JavaScript refers to the concept that variables, functions, classes, etc., declared in a module are local to that module unless explicitly exported. This means they aren't available outside of the module unless they are explicitly made available via the `export` keyword. Each JavaScript module has its own scope, and any variable, function, or class declared in a module won't pollute the global scope, preventing potential naming conflicts and unintentional behavior.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

For instance, consider the following module...

```javascript
// myModule.js
let privateVar = 'I am private';
export let publicVar = 'I am public';

function privateFunc() {
  console.log('This is a private function');
}

export function publicFunc() {
  console.log('This is a public function');
}
```

In this module, `privateVar` and `privateFunc` are only available within `myModule.js` — they are in the module-level scope. On the other hand, `publicVar` and `publicFunc` are exported from the module, so they can be imported and used in other modules:

```javascript
// anotherModule.js
import { publicVar, publicFunc } from './myModule.js';

console.log(publicVar); // I am public
publicFunc(); // This is a public function
```

Trying to access `privateVar` or `privateFunc` from `anotherModule.js` would result in an error, because they are not exported from `myModule.js` and are therefore not available outside of that module's scope.

This is a powerful feature that helps you write cleaner, more maintainable code by explicitly controlling what is and isn't exposed to the rest of your application.

  </div>
  </div>
</details>

---

### Is a module imported into multiple places re-evaluated each time it gets imported?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a module is evaluated only once, even when imported into multiple places. The same module instance is shared across all imports, ensuring consistent behavior and state.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 console.log.js
console.log("Module is evaluated!");

// Import the same module from different files

// 📁 1.js
import `./console.log.js`; // Module is evaluated!

// 📁 2.js
import `./console.log.js`; // (shows nothing)

```

  </div>
  </div>
</details>

---

### What does the JavaScript import.meta object do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The import.meta object provides metadata about the current module, such as its URL. It can be used to access context-specific information within the module's script.
</div><br />
  <div><strong>Technical Response:</strong> The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL. The syntax consists of the keyword import, a dot, and the identifier meta. Typically the left-hand side of the dot is the object on which property access gets performed, but here the import is not an object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> import.meta<br /><br />

  <div></div>

```js
<script type='module'>
  // returns script url - url of the html page for an inline script
  console.log(import.meta.url);
</script>
```

  </div>
  </div>
</details>

---

### Is there anything specific that we should remember about the “this” keyword in JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, in a module, top-level “this” is undefined. Compared to non-module scripts, where "this" is a global object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
<script>
  console.log(this); // window
</script>

<script type="module">
  console.log(this); // undefined
</script>

```

  </div>
  </div>
</details>

---

### How are module scripts loaded in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Module scripts are loaded in the browser using a script tag with type="module" attribute. They are fetched with CORS enabled and executed asynchronously by default.</div><br />
  <div><strong>Technical Response:</strong> Module scripts always defer, the same effect as the defer attribute for external and inline scripts. In other words, downloading external module scripts &#8249;script type="module" src="..."&#8250; does not block HTML processing, they load in parallel with other resources. The module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run. The relative order of scripts gets preserved: scripts that appear first in the document executes first. Module scripts, as a consequence, always "view" the fully loaded HTML document, including HTML components beneath them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script type="module">
  console.log(typeof button); // object: the script can 'see' the button below // as
  modules are deferred, the script runs after the whole page is loaded
</script>
```

  </div><br />
  <div><strong className="codeExample">Compare to regular script below:</strong><br /><br />

  <div></div>

```html
<script>
  console.log(typeof button); // button is undefined, the script can't see elements below

  // regular scripts run immediately, before the rest of the page is processed
</script>

<button id="button">Button</button>
```

  </div>
  </div>
</details>

---

### What is the difference between inline asynchronous scripts and a module?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inline asynchronous scripts use the async attribute on a script tag, executing them asynchronously without module features. Modules have their own scope, import/export syntax, and always execute asynchronously.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- all dependencies are fetched (analytics.js), and the script runs -->
<!-- doesn't wait for the document or other <script> tags -->
<script async type="module">
  import { counter } from './analytics.js';

  counter.count();
</script>
```

  </div>
  </div>
</details>

---

### Can you explain how external scripts with type="module" are different from scripts without it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Scripts with type="module" are ES6 modules with support for imports/exports. They run in strict mode, have a separate scope, and load asynchronously. Scripts without it are classic scripts with global scope.
</div><br />
  <div><strong>Technical Response:</strong> External scripts with the type="module" attribute differ in two ways. For starters, external scripts with the same src only run once. Second, Cross-Origin Requests, external scripts that get requested from a different origin (for example, another site) require CORS headers.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- the script my.js is fetched and executed only once -->
<script type="module" src="my.js"></script>
// r
<script type="module" src="my.js"></script>

<!-- another-site.com must supply Access-Control-Allow-Origin -->
<!-- otherwise, the script won't execute -->
<script type="module" src="http://another-site.com/their.js"></script>
```

:::note
If a module script gets fetched from another origin, the remote server must supply a header Access-Control-Allow-Origin allowing the fetch. That ensures better security by default.
:::

  </div>
  </div>
</details>

---

### In node.js bare modules are common, are bare modules allowed in browser imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, The import must be given a relative or absolute URL in the browser. They  are not allowed in browser imports as they require a resolver to locate the file. Browser imports use relative or absolute URLs to specify the module's location. Modules that do not have a url path get defined as "bare" modules, and such modules get blocked for import.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
import { sayHi } from 'sayHi'; // Error, "bare" module
// the module must have a path, e.g. './sayHi.js' or wherever the module is
```

:::note
Certain environments, such as Node.js or bundle tools, allow bare modules with no path since they have methods of identifying modules and hooks to fine-tune them. However, browsers do not currently allow bare modules.
:::

  </div>
  </div>
</details>

---

### What is the fallback script type for older browsers for JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Old browsers do not understand type="module". Scripts of an unknown type just get ignored. For them, it is possible to provide a fallback using the nomodule attribute.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script type="module">
  console.log('Runs in modern browsers');
</script>

<script nomodule>
  console.log('Modern browsers know both type=module and nomodule, so skip this');
  console.log(
    'Old browsers ignore script with unknown type=module, but execute this.'
  );
</script>
```

  </div>
  </div>
</details>

---

### What is a circular dependency in modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a circular dependency (also known as a cyclic dependency) occurs when two or more modules depend on each other either directly or indirectly. This creates a cycle which can be problematic for several reasons.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example to illustrate:

**Module A:**

```javascript
import { foo } from './moduleB.js';

export function bar() {
  return foo();
}
```

**Module B:**

```javascript
import { bar } from './moduleA.js';

export function foo() {
  return bar();
}
```

In this example, `moduleA` imports `moduleB` because it needs to use the `foo` function. At the same time, `moduleB` imports `moduleA` because it needs the `bar` function. This creates a circular dependency, where each module is waiting for the other one to finish loading before it can fully execute.

Circular dependencies can lead to problems such as:

**1. Initialization issues**: If module A depends on module B to initialize, and module B simultaneously depends on module A to initialize, neither can properly initialize because they are waiting for each other.

**2. Maintenance issues**: Circular dependencies can make the code harder to understand, reason about, and maintain, because it's not clear which module can be safely modified or removed without affecting the other.

**3. Testing issues**: Circular dependencies can make unit testing more difficult, because each module in the cycle may need the other modules to be present in order to be tested.

---

:::tip
To resolve circular dependencies, you can refactor your code to remove the circularity. This may involve moving some code to a third module that both of the original modules can depend on, or rethinking your design to minimize dependencies between modules.
:::

  </div>
  </div>
</details>

---

### How can you handle circular dependencies?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Circular dependencies can be resolved by refactoring the code to remove the circularity, using an intermediary module to break the loop, or utilizing dynamic imports to delay loading.
  </div><br/>
  <div><strong>Technical Response:</strong> In JavaScript, circular dependencies between modules can occur and may lead to problems if not handled correctly. However, JavaScript modules are designed to handle such circular dependencies, and will still load even in the presence of circularity.
  </div><br />
  <div><strong className="codeExample">Here are a few strategies you can use to handle circular dependencies in JavaScript:</strong><br /><br />

  <div></div>

**1. Rethink your design**: The best way to handle circular dependencies is to avoid them by refactoring your code. If two modules depend on each other, it might be because their responsibilities are not well-separated. Splitting responsibilities differently, or creating a third module that both can depend on, can often eliminate the circular dependency.

**2. Dynamic Imports**: Instead of static top-level imports, you could use dynamic imports at the time when the module function is called. This allows the modules to load completely before trying to call the function from the other module.

**3. Partial Exports**: JavaScript module system handles circular dependencies by doing a partial export. When you import something from a module that hasn't finished executing yet, you'll get a live reference to the export. It means you get whatever the current value of that export is at the time you access it, not when you first import it.

Here is an example of how JavaScript handles this:

Module A:

```javascript
import { foo } from './moduleB.js';

export function bar() {
  return foo();
}

console.log(foo()); // Prints "This is function foo"
```

Module B:

```javascript
import { bar } from './moduleA.js';

export function foo() {
  return "This is function foo";
}

console.log(bar()); // Prints "This is function foo"
```

In this case, both modules are loaded successfully without any errors. JavaScript ES6 modules handle circular dependencies by partially resolving the imported modules, and then updating them once the modules are fully evaluated.

Despite this, the best practice is to avoid creating circular dependencies whenever possible, as they can make code more difficult to understand and maintain.

  </div>
  </div>
</details>

---

### What are the benefits of using ES modules over CommonJS modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ES modules have better support for static analysis, tree shaking, and native browser support, making them more suitable for modern web development compared to CommonJS modules.
  </div><br />
  <div><strong>Technical Response:</strong> ES Modules (ESM) and CommonJS (CJS) are two of the most commonly used module systems in JavaScript, but they have some important differences.
  </div><br />
  <div><strong className="codeExample">Here are several reasons why you might prefer ES Modules over CommonJS:</strong><br /><br />

  <div></div>

**1. Static Analysis**: ES Modules are static, which means the structure of imports and exports are determined at compile time. This allows for tooling improvements, such as better static analysis, tree shaking (removal of unused exports for smaller bundle sizes), and faster lookups of import bindings. In contrast, CommonJS modules are dynamic and determined at runtime, which prevents these types of optimizations.

**2. Async and Parallel Loading**: ES Modules can be asynchronously and parallelly loaded, which can lead to performance benefits, especially in a browser context.

**3. Native support in browsers**: ES Modules are natively supported in modern browsers. This can make it easier to share code between the server (Node.js) and the client (browser), and allows you to use modules in the browser without needing a bundling tool like webpack or Browserify.

**4. Named and default imports/exports**: ES Modules support both named and default imports/exports, providing more flexibility in how you expose module functionality. CommonJS, on the other hand, only supports a single export object.

**5. Better compatibility with future features**: The static nature of ES Modules means they are better suited for compatibility with future ECMAScript features.

However, it's important to note that as of my last training data in September 2021, Node.js, which is used for server-side JavaScript, has more mature support for CommonJS. While ES Modules are supported in Node.js as of version 13 (with the `--experimental-modules` flag in earlier versions), there may be compatibility issues with some npm packages which expect CommonJS.

As a result, many developers continue to use CommonJS for server-side Node.js code, or use a combination of both ES Modules and CommonJS, depending on the specific needs of their project. Always consider your specific use case and constraints when deciding between ES Modules and CommonJS.

  </div>
  </div>
</details>

---
