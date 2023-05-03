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
  <div><strong>Interview Response:</strong> Strict Mode is a mode in JavaScript that enforces stricter parsing and error handling rules. It was introduced in ECMAScript 5 and is designed to make code more secure and easier to optimize.</div>
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

### Explain how you should implement strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strict mode is a feature in JavaScript that enables you to write safer and more efficient code. To implement strict mode in JavaScript, add the "use strict" directive at the beginning of a script or function.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```javascript
alert('this is not strict');
// "use strict" below is ignored
// -it must be at the top of the script

('use strict');

// strict mode is not activated
```

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
  <div><strong>Interview Response:</strong> Yes, JavaScript classes and modules implement strict mode by default, according to the MDN.</div><br/>
  </div>
</details>

---

### What are some benefits of using Strict Mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Strict Mode in JavaScript enforces stricter rules for parsing and error handling, preventing common coding mistakes and making it easier to optimize code for better performance.</div><br/>
  </div>
</details>

---

### What actions are disallowed in strict mode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The use of undeclared variables, assigning values to non-writable properties, deleting non-configurable properties, and using duplicate parameter names in function declarations are disallowed in strict mode in JavaScript.</div><br/>
  </div>
</details>

---
