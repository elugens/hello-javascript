---
title: The Global Object
description: The global object is the root of the JavaScript object hierarchy.
sidebar_position: 5
sidebar_label: Global Object
keywords:
  - global object
  - global
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - object
  - interview questions
  - interview answers
  - js
tags:
  - global object
  - javascript globals
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/GlobalSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>The Global Object | JavaScript Frontend Phone Interview - QA</title>
</head>

**Advanced Functions: Global Object**

<CloseAllAnswers />

### Can you explain what the global object is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A global object is an object that always exists in the global scope. There is always a global object defined in JavaScript; when scripts create global variables defined with the var keyword in a web browser, JavaScript creates them as members of the global object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Hello');
// is the same as
window.alert('Hello');

var foo = 'foobar';
foo === window.foo; // Returns: true

function greeting() {
  console.log('Hi!');
}

window.greeting(); // It is the same as the normal invoking: greeting();

// The global function greeting was stored in the window object, like this:
greeting: function greeting() {
  console.log('Hi!');
}
```

:::note
(In Node.js, this is not the case.) The global object's interface depends on the execution context in which the script is running.
:::

  </div>
  </div>
</details>

---

### How should you use JavaScript's global (window) object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
   <div><strong>Interview Response:</strong> It is typically discouraged to use global variables, which gets kept to a minimum. The code design in which a function receives "input" variables and generates a specific "result" is more straightforward, less prone to mistakes, and simpler to verify than the code design in which external or global variables get used. The global object gets used to test for support of contemporary language features. This approach is typical in Polyfills to guarantee that user interaction results in an equitable response.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
if (!window.Promise) {
  alert("Your browser is really old!");
}

if (!window.Promise) {
  window.Promise = ... // custom implementation of the modern language feature
}
```

  </div>
  </div>
</details>

---
