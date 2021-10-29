---
title: DOM tree
sidebar_position: 2
---

# DOM tree

**Document: DOM Tree**

**Question:** **What is a HTML tag considered in the Document Object Model?**

**Interview Answer:** According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well. All these objects are accessible using JavaScript, and we can use them to modify the page. For example, document.body is the object representing the `<body>` tag.

Example:

```js
document.body.style.background = 'red'; // make the background red
setTimeout(() => (document.body.style.background = ''), 3000); // return back
alert(document.body); // alerts [object HTMLBodyElement]
```

Sources: <https://javascript.info/dom-nodes>

**Question:** **How does the Document Object Model represent HTML?**

**Interview Answer:** The DOM represents HTML as a tree structure of tags.

Example:

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
  </head>

  <body>
    <!-- Parent DIV -->

    <div id="parent">
      <!-- Child DIV -->

      <div id="child"></div>
    </div>
  </body>
</html>
```

Sources: <https://javascript.info/dom-nodes#an-example-of-the-dom>

**Question:** **If the browser encounters malformed HTML, what happens?**

**Interview Answer:** If the browser encounters malformed HTML, it automatically corrects it when making the DOM.

**Technical Answer:** If the browser encounters malformed HTML, it automatically corrects it when making the DOM. For instance, the top tag is always `<html>`. Even if it does not exist in the document, it will exist in the DOM, because the browser will create it. The same goes for `<body>`. While generating the DOM, browsers automatically process errors in the document, close tags and so on.

Example:

```html
<!-- Malformed HTML before DOM generation -->

<p>
  Hello

  <li>Mom</li>

  <li>and</li>

  <li>
    Dad

    <!-- Fixed, After DOM generation -->

    <p>
      Hello

      <li>Mom</li>

      <li>and</li>

      <li>Dad</li>
    </p>
  </li>
</p>
```

Sources: <https://javascript.info/dom-nodes#autocorrection>

**Question:** **Do HTML tables always have a `<tbody>` in the DOM?**

**Interview Answer:** Yes, it is an interesting “special case” with tables. By DOM specification they must have `<tbody>` tag, but HTML text may omit it. Then the browser creates `<tbody>` in the DOM automatically.

Example:

```html
<!-- Before DOM generation -->

<table id="table">
  <tr>
    <td>1</td>
  </tr>
</table>

<!-- Now, After DOM generation -->

<table id="table">
  <tbody>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

Sources: <https://javascript.info/dom-nodes#autocorrection>

**Question:** **What are the four main node types that are commonly used?**

**Interview Answer:** The four main node types include document, element, text, and comment nodes.

**Technical Answer:** There are 12 node types. In practice we usually work with 4 of them. The four main node types include document, element, text, and comment nodes. The document node is the entry point into the DOM. The element nodes consist of the HTML-tags which are the tree building blocks. The comment node is used to place information, but it will not be shown, but JS can read it from the DOM.

Sources: <https://javascript.info/dom-nodes#other-node-types>
