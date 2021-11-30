---
title: Strict Mode
sidebar_position: 3
---

# Strict Mode

**JavaScript Fundamentals: Strict Mode**

<head>
  <title>Strict Mode - JavaScript Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### When was ECMAScript 5 (ES5) released for use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 2009</div>
  </div>
</details>

---

### How do you explicitly enable ES5 features and modifications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You need to explicitly enable them with a special directive: "use strict".</div>
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
  <div><strong>Interview Response:</strong> Strict mode is enabled by placing “use strict” at the top of your script.</div><br />
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

### Can you cancel strict mode at a later point in your code?

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
  <div><strong>Interview Response:</strong> No, we must place it at the first console line for it to work.</div>
  </div>
</details>

---

### How do you implement strict mode in the browser console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We must place it at the first console line for it to work, then add the rest of our code.</div><br />
  <div><strong>Technical Response:</strong> First, you can try to press Shift+Enter to input multiple lines and put “use-strict” on top. In Older browsers, you will have to put it in a wrapper.
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
  <div><strong className="codeExample">Code Example:</strong> In Older browsers you will have to put it a wrapper<br /><br />

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
  <div><strong>Interview Response:</strong> Yes, it is recommended.</div><br />
  <div><strong>Technical Response:</strong> Yes, it is recommended to use strict mode in all modern applications. There are situations where it may not be necessary, but we should still implement strict mode.
  </div>
  </div>
</details>

---

### Are there any language structures that implement strict mode by default?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript <em>classes</em> and <em>modules</em> implement strict mode by default. </div>
  </div>
</details>

---

### What is the script type attribute used in JS development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The script type attribute in Modern JavaScript is used for JavaScript Modules.</div><br />
  <div><strong>Technical Response:</strong> The script type attribute in Modern JavaScript development is used for JavaScript Modules. The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript".
  </div>
  </div>
</details>

---

### What was the script language attribute used for in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This attribute was meant to show the language of the script. We no longer use it because it is <em>deprecated</em> according the MDN.</div><br />
  <div><strong>Technical Response:</strong> The language attribute is used to mention the scripting language. Typically, its value will be JavaScript. Although recent versions of HTML (and XHTML, its successor) have phased out the use of this attribute. You may still find this in older applications on the web, we should use it in Modern web applications.
  </div>
  </div>
</details>

---

**JavaScript Fundamentals: EXTERNAL SCRIPTS**

### How do you access external script files in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Script files are attached to HTML with the src attribute including the absolute path to the JS file.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```html
<script src="/path/to/script.js"></script>

// Example of Multiple script Paths…
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

  </div>
  </div>
</details>

---

### How do you access external script URLs in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can access external scripts by using the script src attribute. Both secure and non-secure domains are permissible.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/ "></script>
```

  </div>
  </div>
</details>

---

### What is the rule for putting scripts into HTML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As a rule, only the simplest scripts are put into HTML pages. Complex scripts reside in separate files.</div>
  </div>
</details>

---

### What is the benefit of using a separate script file in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The benefit of a separate file is that the browser will download it and store it in its cache. Other pages that reference the same script will take it from the cache instead of downloading it. That reduces traffic and makes pages faster.</div>
  </div>
</details>

---

### What limitations exist in script tags using a source file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A single script tag cannot have both the source attribute and code inside.</div><br />
  <div><strong className="codeExample">Code Example:</strong>This is not allowed<br /><br />

  <div></div>

```html
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
```

The example above can be split into two scripts to work:<br />

  <div></div>

```html
<script src="file.js"></script>

<script>
  alert('Now it works!');
</script>
```

  </div>  
  </div>
</details>

---
