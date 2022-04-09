---
title: Modules
description: JavaScript Modules are a way to organize code into logical units. Modules are used to break down large projects into smaller pieces.
sidebar_position: 1
sidebar_label: Modules
---

**Modules: Modules the Basics**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is a JavaScript module?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A module is just a file where the script resides. Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one. The export keyword labels variables and functions that should be accessible from outside the current module. import allows the import of functionality from other modules.
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

### Do JavaScript modules work with the normal local file:// protocol?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, if you try to open a web page locally, via file:// protocol, you will find that import/export directives do not work.
</div><br /><br />

:::note
We can use a local web server, such as static-server or use the live server capability of your editor, such as VS Code Live Server Extension to test modules.
:::

  </div>
</details>

---

### What is different in modules, compared to regular scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are core features are valid both for browser and server-side JavaScript. Modules always use strict, by default. So, assigning to an undeclared variable will give an error.<br /><br />
  Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.<br /><br />
  The object import.meta contains the information about the current module. Its content depends on the environment. In the browser, it contains the URL of the script, or a current webpage URL if inside HTML.<br /><br />
  In a module, top-level this is undefined.<br /><br />
  Module scripts are always deferred, same effect as defer attribute for both external and inline scripts.<br /><br />
  For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document. For module scripts, it works on inline scripts as well.

</div>
  </div>
</details>

---

### Can you use undeclared variables in JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, because JavaScript modules always “use strict”, by default, e.g., assigning to an undeclared variable will give an error.
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

### What does module level scope mean in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It means that each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts. Modules are expected to export what they want to be accessible from outside and import what they need. In the browser, independent top-level scope also exists for each &#8249;script type="module"&#8250;.
</div>
  </div>
</details>

---

### If a module is imported into multiple places, is it re-evaluated each time it is imported?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, if the same module is imported into multiple other places, its code is executed only the first time, then exports are given to all importers. If executing a module code brings side-effects, like showing a message, then importing it multiple times will trigger it only once – the first time.
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
  <div><strong>Interview Response:</strong> The import.meta object exposes context-specific metadata to a JavaScript module. It contains information about the module, like the module's URL. The syntax consists of the keyword import, a dot, and the identifier meta. Normally the left-hand side of the dot is the object on which property access is performed, but here import is not really an object.
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
  <div><strong>Interview Response:</strong> Yes, in a module, top-level “this” is undefined. In comparison to non-module scripts, where "this" is a global object.
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
  <div><strong>Interview Response:</strong> Module scripts are always deferred, same effect as defer attribute, for both external and inline scripts.</div><br />
  <div><strong>Technical Response:</strong> Module scripts are always deferred, same effect as defer attribute, for both external and inline scripts. In other words, downloading external module scripts &#8249;script type="module" src="..."&#8250; does not block HTML processing, they load in parallel with other resources. The module scripts wait until the HTML document is fully ready (even if they are tiny and load faster than HTML), and then run. The relative order of scripts is maintained: scripts that go first in the document, execute first. As a side-effect, module scripts always “see” the fully loaded HTML-page, including HTML elements below them.
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

### What is the difference between module and inline asynchronous scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document. For module scripts, it works on inline scripts as well. That is good for functionality that does not depend on anything, like counters, ads, document-level event listeners.
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

### Explain how external scripts that have type="module" is different from scripts without it.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> External scripts that have type="module" is different in two aspects. First, External scripts with the same src run only once. Second, External scripts that are fetched from another origin (e.g., another site) require CORS headers, as described in the chapter Fetch: Cross-Origin Requests.
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
If a module script is fetched from another origin, the remote server must supply a header Access-Control-Allow-Origin allowing the fetch. That ensures better security by default.
:::

  </div>
  </div>
</details>

---

### In node.js bare modules are common, are bare modules allowed in browser imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, In the browser, import must get either a relative or absolute URL. Modules without any path are called “bare” modules. Such modules are not allowed in import.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
import { sayHi } from 'sayHi'; // Error, "bare" module
// the module must have a path, e.g. './sayHi.js' or wherever the module is
```

:::note
Certain environments, like Node.js or bundle tools allow bare modules, without any path, as they have their own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet.
:::

  </div>
  </div>
</details>

---

### What is the fallback script type for older browsers when it comes to JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Old browsers do not understand type="module". Scripts of an unknown type are just ignored. For them, it is possible to provide a fallback using the nomodule attribute.
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
