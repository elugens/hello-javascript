---
title: DOM Tree
description: DOM Tree is a tree structure that represents the structure of the HTML DOM. - JavaScript Interview Questions & Answers
sidebar_position: 2
sidebar_label: DOM Tree
---

**Browser Document: DOM Tree**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a HTML tag considered in the Document Object Model?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well. All these objects are accessible using JavaScript, and we can use them to modify the page. For example, document.body is the object representing the &#8249;body&#8250; tag.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.body.style.background = 'red'; // make the background red

setTimeout(() => (document.body.style.background = ''), 3000); // return back

alert(document.body); // alerts [object HTMLBodyElement]
```

  </div>
  </div>
</details>

---

### How does the Document Object Model represent HTML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The DOM represents HTML as a tree structure of tags.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Parent DIV -->
    <div id="parent">
      <!-- Child DIV -->
      <div id="child"></div>
    </div>
  </body>
</html>
```

  </div>
  </div>
</details>

---

### If the browser encounters malformed HTML, what happens?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the browser encounters malformed HTML, it automatically corrects it when making the DOM.</div><br />
  <div><strong>Technical Response:</strong> If the browser encounters malformed HTML, it automatically corrects it when making the DOM. For instance, the top tag is always &#8249;html&#8250;. Even if it does not exist in the document, it will exist in the DOM, because the browser will create it. The same goes for &#8249;body&#8250;. While generating the DOM, browsers automatically process errors in the document, close tags and so on.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Malformed HTML before DOM generation -->
<p>
  Hello
  <li>Mom</li>
  <li>and</li>
  <li>
    Dad
    <!-- Fixed, After DOM generation -->
    <p>
      Hello
      <li>Mom</li>
      <li>and</li>
      <li>Dad</li>
    </p>
  </li>
</p>
```

  </div>
  </div>
</details>

---

### Do HTML tables always have a `<tbody>` in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is an interesting “special case” with tables. By DOM specification they must have &#8249;tbody&#8250; tag, but HTML text may omit it. Then the browser creates &#8249;tbody&#8250; in the DOM automatically.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Before DOM generation -->
<table id="table">
  <tr>
    <td>1</td>
  </tr>
</table>

<!-- Now, After DOM generation -->
<table id="table">
  <tbody>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

  </div>
  </div>
</details>

---

### What are the four main node types that are commonly used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The four main node types include document, element, text, and comment nodes.</div><br />
  <div><strong>Technical Response:</strong> There are 12 node types. In practice we usually work with 4 of them. The four main node types include document, element, text, and comment nodes. The document node is the entry point into the DOM. The element nodes consist of the HTML-tags which are the tree building blocks. The comment node is used to place information, but it will not be shown, but JS can read it from the DOM.
  </div>
  </div>
</details>

---
