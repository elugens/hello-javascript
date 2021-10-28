---
title: Modern JavaScript Markup
sidebar_position: 3
---

# Modern Markup, 'use strict'

## Modern Markup Use Strict in JavaScript

**Question:** **When was ECMAScript 5 (ES5) released for use?**

**Interview Answer:** 2009

Source: <https://javascript.info/strict-mode#use-strict>

**Question:** **How do you explicitly enable ES5 features and modifications?**

**Interview Answer:** You need to explicitly enable them with a special directive: "use strict".

Code Example:

```js
'use strict';

// this code works the modern way
```

Source: <https://javascript.info/strict-mode#use-strict>

**Question:** **Explain how you should implement strict mode in JavaScript?**

**Interview Answer:** Strict mode is enabled by placing “use strict” at the top of your script.

```js
// Strict mode is not enabled here:

alert('some code');

// "use strict" below is ignored--it must be at the top

('use strict');

// strict mode is not activated
```

Source: <https://javascript.info/strict-mode#use-strict>

**Question:** **Can you cancel strict mode at a later point in your code?**

**Answer:** No, there is no directive like **"no use strict"** that reverts the engine to the old behavior. Once we enter strict mode, there is no going back.

Source: <https://javascript.info/strict-mode#use-strict>

**Question:** **Does the browser developer console implement strict mode by default?**

**Interview Answer:** No, we must place it at the first console line for it to work.

Source: <https://javascript.info/strict-mode#browser-console>

**Question:** **How do you implement strict mode in the browser console?**

**Interview Answer:** We must place it at the first console line for it to work, then add the rest of our code.

**Technical Answer:** First, you can try to press Shift+Enter to input multiple lines and put “use-strict” on top. In Older browsers you will have to put it a wrapper.

Example: works in most browsers, namely Firefox and Chrome.

```js
'use strict'; <Shift+Enter for a newline>

//  ...your code

<Enter to run>
```

In Older browsers you will have to put it a wrapper:

```js
(function () {
  'use strict';

  // ...your code here...
})();
```

Source: <https://javascript.info/strict-mode#browser-console>

**Question:** **Should we implement ‘use strict’ in modern applications?**

**Interview Answer:** Yes, it is recommended.

**Answer:** Yes, it is recommended to use strict mode in all modern applications. There are situations where it may not be necessary, but we should still implement strict mode.

Source: <https://javascript.info/strict-mode#should-we-use-strict>

**Question:** **Are there any language structures that implement strict mode by default?**

**Interview Answer:** Yes, JavaScript classes and modules implement strict mode by default.

Source: <https://javascript.info/strict-mode#should-we-use-strict>

**Question:** **What is the script type attribute used in JS development?**

**Interview Answer:** The script type attribute in Modern JavaScript is used for JavaScript Modules.

**Technical Answer:** The script type attribute in Modern JavaScript development is used for JavaScript Modules. The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript".

Source: <https://javascript.info/hello-world#modern-markup>

**Question:** **What was the script language attribute used for in web development?**

**Interview Answer:** This attribute was meant to show the language of the script. We no longer use it because it is deprecated according the MDN.

**Technical Answer:** The language attribute is used to mention the scripting language. Typically, its value will be JavaScript. Although recent versions of HTML (and XHTML, its successor) have phased out the use of this attribute. You may still find this in older applications on the web, we should use it in Modern web applications.

Source: <https://javascript.info/hello-world#modern-markup>

**JavaScript Fundamentals: EXTERNAL SCRIPTS**

**Question:** **How do you access external script files in JavaScript development?**

**Interview Answer:** Script files are attached to HTML with the src attribute including the absolute path to the JS file.

Example:

```js
<script src="/path/to/script.js"></script>

// Example of Multiple script Paths…

<script src="/js/script1.js"></script>

<script src="/js/script2.js"></script>
```

Source: <https://javascript.info/hello-world#external-scripts>

**Question:** **How do you access external script URLs in JavaScript development?**

**Interview Answer:** We can access external scripts by using the script src attribute. Both secure and non-secure domains are permissible.

Code Example:

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/ "></script>

Source: <https://javascript.info/hello-world#external-scripts>

**Question:** **What is the rule for putting scripts into HTML?**

**Interview Answer:** As a rule, only the simplest scripts are put into HTML pages. Complex scripts reside in separate files.

Source: <https://javascript.info/hello-world#external-scripts>

**Question:** **What is the benefit of using a separate script file in the browser?**

**Interview Answer:** The benefit of a separate file is that the browser will download it and store it in its cache. Other pages that reference the same script will take it from the cache instead of downloading it. That reduces traffic and makes pages faster.

Source: <https://javascript.info/hello-world#external-scripts>

**Question:** **What limitations exist in script tags using a source file?**

**Interview Answer:** A single `<script>` tag cannot have both the source attribute and code inside.

Example: This is not allowed

// Bad Code

```js
<script src='file.js'>
  alert(1); // the content is ignored, because src is set
</script>
```

// The example above can be split into two scripts to work:

// Good Code

```js
<script src="file.js"></script>

<script>

  alert(1);

</script>
```

Source: <https://javascript.info/hello-world#external-scripts>
