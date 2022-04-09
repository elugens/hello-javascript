---
title: Browser Environment Specification
description: Browser Environment Specification is a set of specifications that describe the environment in which a web browser runs. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Browser Environment Specs
---

**Browser Document: Browser Environment Specs**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What was JavaScript initially created to work with?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript language was initially created for web browsers. Since then, it has evolved and become a language with many uses and platforms.
</div>
  </div>
</details>

---

### What types of technology platforms can JavaScript run on?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript language can run on a browser, or a webserver or another host, even a “smart” coffee machine, if it can run JavaScript. Each of them provides platform-specific functionality. The JavaScript specification calls that a host environment. A host environment provides its own objects and functions additional to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.
</div>
  </div>
</details>

---

### Briefly explain the general structure of the browser window environment.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A browser at its root consists of a window (root object), DOM, BOM, and the JavaScript Object. The DOM is the document object model and the BOM is the browser object model. JavaScript is the language used to interact with the window, DOM, and BOM.
</div>
  </div>
</details>

---

### What is the Document Object Model in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Document Object Model, or DOM for short, represents all page content as objects that can be modified. The document object is the main “entry point” to the page. We can change or create anything on the page using it.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// change the background color to red
document.body.style.background = 'red';

// change it back after 1 second
setTimeout(() => (document.body.style.background = ''), 1000);
```

  </div>
  </div>
</details>

---

### Can you name a good reference document to find information about the document object model?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two good reference documents that can be used for referencing information about the DOM. They include the MDN Web Docs and the DOM Living Standard. The DOM Living Standard provides you with detailed information about the specification. The MDN is a detail guide expressed in a way that it is easy to learn.
</div>
  </div>
</details>

---

### Is the DOM only used in Browsers or can it be found in other platforms?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use DOM too. For instance, server-side scripts that download HTML pages and process them can also use DOM. They may support only a part of the specification though.
</div>
  </div>
</details>

---

### What is the CSS Object Model (CSSOM) used for in a browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML.</div><br />
  <div><strong>Technical Response:</strong> The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically. It should be noted that it is independent of the DOM, but they do work together when we modify style rules for the document. In practice though, CSSOM is rarely required.
  </div>
  </div>
</details>

---

### What is the Browser Object Model in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document like the navigator and location objects.</div><br />
  <div><strong>Technical Response:</strong>The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.<br /><br />
  <strong>For Example:</strong><br /><br />
  <ol>
    <li>The navigator object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: navigator.userAgent – about the current browser, and navigator.platform – about the platform (can help to differ between Windows/Linux/Mac etc).</li>
    <li>The location object allows us to read the current URL and can redirect the browser to a new one.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Here’s how we can use the location object<br /><br />

  <div></div>

```js
// Here’s how we can use the location object:
alert(location.href); // shows current URL

if (confirm('Go to Wikipedia?')) {
  location.href = 'https://wikipedia.org'; // redirect the browser to another URL
}
```

  </div>
  </div>
</details>

---

### Are the alert, confirm, and prompt functions part of the DOM or BOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Functions, alert/confirm/prompt are a part of BOM: they are directly not related to the document but represent pure browser methods of communicating with the user.
</div>
  </div>
</details>

---

### What specification is the BOM part of?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> BOM is the part of the general HTML specification.</div><br />
  <div><strong>Technical Response:</strong> BOM is the part of the general HTML specification. Yes, you heard that right. The HTML spec at https://html.spec.whatwg.org is not only about the “HTML language” (tags, attributes), but also covers a bunch of objects, methods, and browser-specific DOM extensions. That’s “HTML in broad terms”. Also, some parts have additional specs listed at https://spec.whatwg.org.
  </div>
  </div>
</details>

---
