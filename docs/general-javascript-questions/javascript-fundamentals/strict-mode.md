---
title: Strict Mode - JavaScript Interview Questions
description: Learn how to use strict mode in JavaScript. Strict mode is enabled by placing “use strict” at the top of your script. Frontend Developer Interview Questions
sidebar_position: 5
sidebar_label: Strict Mode
keywords:
  - strict mode
  - use strict
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
  - strict mode
  - use strict
  - interview answers
  - interview questions
---

<!-- Notes: Passed Rich Snippets validation. -->

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StrictModeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Strict Mode | JavaScript Frontend Phone Interview Questions</title>
</head>

**JavaScript Fundamentals: Strict Mode**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/zp82_tdZ18I"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### What is Strict Mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strict Mode is a mode in JavaScript that enforces stricter parsing and error handling rules. It was introduced in ECMAScript 5 and is designed to make code more secure and easier to optimize.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
"use strict";

// Example 1: Variable without declaration (throws an error in strict mode)
x = 10;  // Throws a ReferenceError: x is not defined

// Example 2: Duplicate parameter names (throws an error in strict mode)
function multiply(a, b, a) {  // Throws a SyntaxError: Duplicate parameter name not allowed in this context
  return a * b;
}

// Example 3: Octal literals (throws an error in strict mode)
var num = 0123;  // Throws a SyntaxError: Octal literals are not allowed in strict mode

// Example 4: 'this' in non-method functions (has different behavior in strict mode)
function myFunction() {
  console.log(this);  // In strict mode, 'this' is undefined
}

myFunction();
```

  </div>
  </div>
</details>

---

### When was ECMAScript 5 (ES5) released for use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ECMAScript 5 (ES5) was released in December 2009 as the fifth edition of the ECMAScript language specification, which defines the standard for JavaScript.</div>
  </div>
</details>

---

### How do you explicitly enable ES5 features and modifications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ES5 features can be enabled by setting the "use strict" directive at the beginning of a JavaScript file, which enforces strict mode and activates ES5 features. You need to enable them with a special directive explicitly: "use strict".</div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
"use strict";

// this code works the modern way
...
```

  </div>
</details>

---

### How you should implement strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strict mode is a feature in JavaScript that enables you to write safer and more efficient code. To implement strict mode in JavaScript, add the "use strict" directive at the beginning of a script or function.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

**Proper Usage:**

1. Strict mode in the whole script:

```javascript
"use strict";
var x = 3.14; // This is okay
x = 3.14; // This is not okay without var, let or const
```

In this example, the `"use strict";` declaration is at the top of the script, enabling strict mode for the entire script. When strict mode is enabled, JavaScript doesn't allow variables to be used unless they're declared with `var`, `let`, or `const`.

2. Strict mode in a function:

```javascript
function strictFunc() {
  "use strict";
  var x = 3.14; // This is okay
  y = 3.14; // This is not okay without var, let or const
}
```

In this example, strict mode is enabled only within `strictFunc`. The `"use strict";` statement is at the top of the function, so strict mode applies to the entire function scope. Any variables not declared with `var`, `let`, or `const` will result in an error.

**Incorrect Usage:**

1. Not placing the `"use strict";` directive at the top:

```javascript
var x = 3.14;
"use strict"; 
```

In this example, the `"use strict";` statement is not at the top of the script, so strict mode isn't activated. The `"use strict";` statement must be at the top of the script or function for strict mode to be enabled.

2. Using strict mode with non-compliant syntax:

```javascript
"use strict";
x = 0177; // Octal literals are not allowed in strict mode
```

In this example, an octal literal (a number prefixed with a zero) is used, which is not allowed in strict mode. This will throw an error.

  </div>
  </div>
</details>

---

### Can you cancel strict mode later in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, there is no directive like "no use strict" that reverts the engine to the old behavior. Once we enter strict mode, there is no going back.</div>
  </div>
</details>

---

### Does the browser developer console implement strict mode by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the browser developer console does not implement strict mode by default. Strict mode must be enabled explicitly by using the "use strict" directive. We must place it at the first console line for it to work.</div>
  </div>
</details>

---

### How do you implement strict mode in the browser console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We must place it at the first console line for it to work, then add the rest of our code. You can also use a wrapper if you are using an older browser.
</div><br />
  <div><strong>Technical Response:</strong> First, you can try to press Shift+Enter to input multiple lines and put “use-strict” on top. In Older browsers, you have to put it in a wrapper.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> works in most browsers, namely Firefox and Chrome.<br /><br />
  
  <div></div>

```javascript
'use strict';
// <Shift+Enter for a newline>

//  ...your code

// <Enter to run>
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> In Older browsers, you have to put it in a wrapper.<br /><br />

  <div></div>

```javascript
(function () {
  'use strict';

  // ...your code here...
})();
```

  </div>
  </div>
</details>

---

### Should we implement ‘use strict’ in modern applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's generally recommended to use "use strict" in modern applications as it helps catch errors and enforces stricter syntax and behavior in JavaScript.</div><br />
  <div><strong>Technical Response:</strong> Yes, it remains recommended to use strict mode in all modern applications. Although it may not be essential in some cases, we should provide the strict-mode functionality.
  </div><br/>
  </div>
</details>

---

### Are there any language structures that implement strict mode by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, ECMAScript 6 (ES6) modules and JavaScript classes are in strict mode by default. No need to explicitly write "use strict"; in these structures.</div>
  </div>
</details>

---

### What are some benefits of using Strict Mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strict Mode in JavaScript enforces stricter rules for parsing and error handling, preventing common coding mistakes and making it easier to optimize code for better performance.</div>
  </div>
</details>

---

### What actions are disallowed in strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The use of undeclared variables, assigning values to non-writable properties, deleting non-configurable properties, and using duplicate parameter names in function declarations are disallowed in strict mode in JavaScript.</div>
  </div>
</details>

---
