---
title: Global Object
sidebar_position: 5
---

# Global Object

**Advanced Functions: Global Object**

<head>
  <title>Global Object - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### Explain, what the global object is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A global object is an object that always exists in the global scope. In JavaScript, there is always a global object defined. In a web browser, when scripts create global variables defined with the var keyword, they are created as members of the global object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert("Hello");
// is the same as
window.alert("Hello");

var foo = "foobar";
foo === window.foo; // Returns: true

function greeting() {
   console.log("Hi!");
}

window.greeting(); // It is the same as the normal invoking: greeting();

// The global function greeting was stored in the window object, like this:
greeting: function greeting() {
   console.log("Hi!");
}
```

:::note
(In Node.js this is not the case.) The global object's interface depends on the execution context in which the script is running.
:::

  </div>
  </div>
</details>

---

### How should you use the global (window) object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
   <div><strong>Interview Response:</strong> Using global variables is generally discouraged. There should be as few global variables as possible. The code design where a function gets “input” variables and produces certain “outcome” is clearer, less prone to errors and easier to test than if it uses outer or global variables. You can also use the global object to test for support of modern language features. This commonly done in Polyfills to ensure that user interaction results in an equitable response.
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
