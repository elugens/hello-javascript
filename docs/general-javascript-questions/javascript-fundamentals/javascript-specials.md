---
title: JavaScript Specials
description: JavaScript Specials are outliers in our code that we must understand. It's the simplest way to understand JavaScript. Frontend Interview Questions.
sidebar_position: 20
sidebar_label: JavaScript Specials
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/JavaScriptSpecialsSchemaData.js';

<JsonLD data={StructuredData} />

**JavaScript Fundamentals: JavaScript Specials**

<CloseAllAnswers />

### How does JavaScript see, view, or treat line breaks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript treats line breaks as delimiters and uses automatic semicolon insertion to close individual statements. Most code style guides agree that we should put a semicolon after each statement.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// automatic semicolon inserted by the JavaScript (V8) engine
// alert('Hello')
// alert('World'); <-- semicolon inserted
```

  </div>
  </div>
</details>

---

### Describe the proper way to enforce strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To enforce strict mode, we must use the “use strict;” directive placed at the top of our code or function body.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, To enforce strict mode, we must use the “use strict;” directive placed at the top of our code or function body. The directive must appear at the beginning of a script or at the start of a function body. Everything still works without "use strict", but some features behave in the old fashion, “compatible” way. We would generally prefer modern behavior.<br /><br />

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  'use strict;'; // Your first line of code starts here...
</script>
```

  </div>
  </div>
</details>

---

### What can a variable name include in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variables can contain letters and numbers, but the first character must be a letter. In some cases, the characters $ and _ are regular and acceptable. Non-Latin alphabets and hieroglyphs are also permitted but rarely utilized.
</div>
  </div>
</details>

---

### Are JavaScript variables statically or dynamically typed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unlike statically typed languages, JavaScript variables are dynamically typed and do not require type declaration. This behavior in JavaScript means that variable data types in JavaScript are unknown at run-time.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let x = 5;
x = 'John';
```

  </div>
  </div>
</details>

---

### What is the only operator with three parameters (arguments)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The only operator with three parameters is the ternary ( ? ) conditional operator.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var age = 26;
var beverage = age >= 21 ? 'Beer' : 'Juice'; // ( ? ) conditional operator
console.log(beverage); // "Beer"
```

  </div>
  </div>
</details>

---

### Name three types of JavaScript functions commonly used in application development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three primary functions commonly used in JavaScript application development include a declaration, expression, and arrow functions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// function declaration
function sum(a, b) {
  let result = a + b;

  return result;
}

// Function expression
let sum = function (a, b) {
  let result = a + b;

  return result;
};

// Arrow function
// expression at the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
};

// without arguments
let sayHi = () => alert('Hello');

// with a single argument
let double = (n) => n * 2;
```

  </div>
  </div>
</details>

---
