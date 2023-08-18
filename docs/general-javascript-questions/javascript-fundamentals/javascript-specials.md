---
title: JavaScript Specials Interview Questions
description: JavaScript Specials are outliers in our code that we must understand. It's the simplest way to understand JavaScript. Frontend Interview Questions.
sidebar_position: 20
sidebar_label: JavaScript Specials
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/JavaScriptSpecialsSchemaData.js';

<JsonLD data={StructuredData} />

**JavaScript Fundamentals: JavaScript Specials**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/jfWVUNZWJEs"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<AdSense />

---

<CloseAllAnswers />

### How does JavaScript see, view, or treat line breaks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript treats line breaks as delimiters, whitespace, and uses automatic semicolon insertion to close individual statements. Most code style guides agree that we should put a semicolon after each statement.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// automatic semicolon inserted by the JavaScript (V8) engine
// console.log('Hello')
// console.log('World'); <-- semicolon inserted
```

  </div>
  </div>
</details>

---

### Can you describe the proper way to enforce strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To enable strict mode in JavaScript, add the directive "use strict" at the beginning of a script or function, which enables stricter parsing and error handling.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript, To enforce strict mode, we must use the “use strict;” directive placed at the top of our code or function body. The directive must appear at the beginning of a script or at the start of a function body. Everything still works without "use strict", but some features behave in the old fashion, “compatible” way. We would generally prefer modern behavior.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Certainly! Here's how you would enforce strict mode in a JavaScript file or function:

For the entire script:

```javascript
'use strict'; // Your first line of code starts here...

var x = 10;
console.log(x);
```

For a specific function:

```javascript
function strictFunc() {
  'use strict'; // Your first line of code in a function...
  var y = 20;
  console.log(y);
}

strictFunc();
```

In both examples, 'use strict'; helps to enforce better coding practices by making the JavaScript interpreter more strict.

  </div>
  </div>
</details>

---

### What can a variable name include in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Variable names in JavaScript can include letters, digits, underscores, and dollar signs. They must start with a letter, underscore, or dollar sign, and are case-sensitive. Non-Latin alphabets and hieroglyphs are also permitted but rarely utilized.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are some examples of valid variable names in JavaScript.

```javascript
var myVariable = 1;
let _anotherVariable = 2;
const $yetAnotherVariable = 3;
var Ω = 4; // Unicode variable names are allowed
```

And here's an example of an invalid variable name:

```javascript
var 123abc; // this will cause an error, because variable names cannot start with a digit
```

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

### What is the only operator with three parameters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The only operator in JavaScript with three parameters is the conditional (ternary) operator (?:). It's a short way to write an if-else condition, formatted as condition ? exprIfTrue : exprIfFalse.
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

### What three types of JavaScript functions are commonly used in application development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript functions commonly used, in application development, include named functions, anonymous functions, and arrow functions, each serving different purposes and offering unique syntax.
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
let sayHi = () => console.log('Hello');

// with a single argument
let double = (n) => n * 2;
```

  </div>
  </div>
</details>

---
