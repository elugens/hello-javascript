---
title: Browser Environment Specs
sidebar_position: 1
---

# Browser Environment Specification

**Browser Document: Browser Environment Specification**

<head>
  <title>Browser Environment Specification - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What was JavaScript initially created to work with?

**Interview Answer:** The JavaScript language was initially created for web browsers. Since then, it has evolved and become a language with many uses and platforms.

Source: <https://javascript.info/browser-environment>

### What types of technology platforms can JavaScript run on?

**Interview Answer:** The JavaScript language can run on a browser, or a webserver or another host, even a “smart” coffee machine, if it can run JavaScript. Each of them provides platform-specific functionality. The JavaScript specification calls that a host environment. A host environment provides its own objects and functions additional to the language core. Web browsers give a means to control web pages. Node.js provides server-side features, and so on.

Source: <https://javascript.info/browser-environment>

### Briefly explain the general structure of the browser window environment.\*\*

**Interview Answer:** A browser at its root consists of a window (root object), DOM, BOM, and the JavaScript Object. The DOM is the document object model and the BOM is the browser object model. JavaScript is the language used to interact with the window, DOM, and BOM.

Source: <https://javascript.info/browser-environment>

### What is the Document Object Model in JavaScript?

**Interview Answer:** Document Object Model, or DOM for short, represents all page content as objects that can be modified. The document object is the main “entry point” to the page. We can change or create anything on the page using it.

Example:

```js
// change the background color to red

document.body.style.background = 'red';

// change it back after 1 second

setTimeout(() => (document.body.style.background = ''), 1000);
```

Source: <https://javascript.info/browser-environment#dom-document-object-model>

### Can you name a good reference document to find information about the document object model?

**Interview Answer:** There are two good reference documents that can be used for referencing information about the DOM. They include the MDN Web Docs and the DOM Living Standard. The DOM Living Standard provides you with detailed information about the specification. The MDN is a detail guide expressed in a way that it is easy to learn.

**Sources:**

MDN: <https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction>

Living Standard: <https://dom.spec.whatwg.org/>

### Is the DOM only used in Browsers or can it be found in other platforms?

**Interview Answer:** The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use DOM too. For instance, server-side scripts that download HTML pages and process them can also use DOM. They may support only a part of the specification though.

Sources: <https://javascript.info/browser-environment#dom-document-object-model>

### What is the CSS Object Model (CSSOM) used for in a browser?

**Interview Answer:** The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML.

**Technical Answer:** The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically. It should be noted that it is independent of the DOM, but they do work together when we modify style rules for the document. In practice though, CSSOM is rarely required.

Sources: <https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model>

### What is the Browser Object Model in JavaScript?

**Interview Answer:** The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document like the navigator and location objects.

**Technical Answer:** The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

For Example:

- The navigator object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: navigator.userAgent – about the current browser, and navigator.platform – about the platform (can help to differ between Windows/Linux/Mac etc).
- The location object allows us to read the current URL and can redirect the browser to a new one.

Here’s how we can use the location object:

```js
alert(location.href); // shows current URL
if (confirm('Go to Wikipedia?')) {
  location.href = 'https://wikipedia.org'; // redirect the browser to another URL
}
```

Source: <https://javascript.info/browser-environment#bom-browser-object-model>

### Are the alert, confirm, and prompt functions part of the DOM or BOM?

**Interview Answer:** Functions, alert/confirm/prompt are a part of BOM: they are directly not related to the document but represent pure browser methods of communicating with the user.

Sources: <https://javascript.info/browser-environment#bom-browser-object-model>

### What specification is the BOM part of?

**Interview Answer:** BOM is the part of the general HTML specification.

**Technical Answer:** BOM is the part of the general HTML specification. Yes, you heard that right. The HTML spec at https://html.spec.whatwg.org is not only about the “HTML language” (tags, attributes), but also covers a bunch of objects, methods, and browser-specific DOM extensions. That’s “HTML in broad terms”. Also, some parts have additional specs listed at https://spec.whatwg.org.

Sources: <https://javascript.info/browser-environment#bom-browser-object-model>
