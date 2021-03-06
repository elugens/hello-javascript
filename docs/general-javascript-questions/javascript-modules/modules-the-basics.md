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
  <div><strong>Interview Response:</strong> A module is just a file where the script resides. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one. The export keyword labels variables and functions that should be accessible from outside the current module, and import allows the import of functionality from other modules.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// we have a file sayHi.js exporting a function:
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// Then another file may import and use it:
import { sayHi } from './sayHi.js';

alert(sayHi); // function...
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
  <div><strong>Interview Response:</strong> No, if you try to open a web page locally, via file:// protocol, you find that import/export directives do not work.
</div><br /><br />

:::note
We can use a local web server, such as static-server, or use the live server capability of your editor, such as VS Code Live Server Extension, to test modules.
:::

  </div>
</details>

---

### What is different in modules compared to regular scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Core features are valid for both browser and server-side JavaScript. Modules always use strict by default. So, assigning to an undeclared variable gives an error. <br /><br />
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
  <div><strong>Interview Response:</strong> No, because JavaScript always “use strict”, by default, e.g., assigning to an undeclared variable gives an error.
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
  <div><strong>Interview Response:</strong> It means that each module has its top-level scope. Top-level variables, methods, and functions from a module, in general, are not visible in other scripts. Modules expect to exportation. They want to be accessible from the outside and import what they need. In the browser, independent top-level scope also exists for each &#8249;script type="module"&#8250;.
</div>
  </div>
</details>

---

### Is a module imported into multiple places re-evaluated each time it gets imported?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, if the same module gets imported into multiple other places, its code is executed only the first time, then exports are given to all importers. If executing a module code brings side effects, like showing a message, then importing it multiple times triggers it only once – the first time.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 alert.js
alert("Module is evaluated!");

// Import the same module from different files

// 📁 1.js
import `./alert.js`; // Module is evaluated!

// 📁 2.js
import `./alert.js`; // (shows nothing)

```

  </div>
  </div>
</details>

---

### What does the JavaScript import.meta object do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL. The syntax consists of the keyword import, a dot, and the identifier meta. Typically the left-hand side of the dot is the object on which property access gets performed, but here the import is not an object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> import.meta<br /><br />

  <div></div>

```js
<script type='module'>
  // returns script url - url of the html page for an inline script
  alert(import.meta.url);
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
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
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
  <div><strong>Interview Response:</strong> Module scripts always defer, the same effect as the defer attribute for external and inline scripts.</div><br />
  <div><strong>Technical Response:</strong> Module scripts always defer, the same effect as the defer attribute for external and inline scripts. In other words, downloading external module scripts &#8249;script type="module" src="..."&#8250; does not block HTML processing, they load in parallel with other resources. The module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run. The relative order of scripts gets preserved: scripts that appear first in the document executes first. Module scripts, as a consequence, always "view" the fully loaded HTML document, including HTML components beneath them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script type="module">
  alert(typeof button); // object: the script can 'see' the button below // as
  modules are deferred, the script runs after the whole page is loaded
</script>
```

  </div><br />
  <div><strong className="codeExample">Compare to regular script below:</strong><br /><br />

  <div></div>

```html
<script>
  alert(typeof button); // button is undefined, the script can't see elements below

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
  <div><strong>Interview Response:</strong> For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately, independently of other scripts or the HTML document. For module scripts, it works on inline scripts as well. That is good for functionality that does not depend on counters, ads, or document-level event listeners.
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
  <div><strong>Interview Response:</strong> External scripts with the type="module" attribute differ in two ways. For starters, external scripts with the same src only run once. Second, Cross-Origin Requests, external scripts that get requested from a different origin (for example, another site) require CORS headers.
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
  <div><strong>Interview Response:</strong> No, The import must be given a relative or absolute URL in the browser. Modules that do not have a url path getting defined as "bare" modules, and such modules get blocked for import.
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
  alert('Runs in modern browsers');
</script>

<script nomodule>
  alert('Modern browsers know both type=module and nomodule, so skip this');
  alert(
    'Old browsers ignore script with unknown type=module, but execute this.'
  );
</script>
```

  </div>
  </div>
</details>

---
