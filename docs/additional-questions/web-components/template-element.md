---
title: Template Element
sidebar_position: 4
---

# Template Element

**Web Components: Template Element**

<head>
  <title>Template Element - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is a built-in HTML template element?

**Interview Answer:** A built-in `<template>` element serves as a storage for HTML markup templates. The browser ignores it contents, only checks for syntax validity, but we can access and use it in JavaScript, to create other elements. In theory, we could create any invisible element somewhere in HTML for HTML markup storage purposes. In theory, we could create any invisible element somewhere in HTML for HTML markup storage purposes. What makes the `<template>` element special is its content can be any valid HTML, even if it normally requires a proper enclosing tag. We can also use styles and scripts inside of our templates without affecting the load of the document. The browser considers `<template>` content “out of the document”: styles are not applied, scripts are not executed, `<video autoplay>` is not run, etc. The content becomes live (styles apply, scripts run etc) when we insert it into the document.

**Code Example:**

```html
<template>
  <tr>
    <td>Contents</td>
  </tr>
</template>

<template>
  <style>

    p { font-weight: bold; }
  </style>

  <script>
    alert('Hello');
  </script>
</template>
```

Source: <https://javascript.info/template-element>

### What happens when we insert template content into the DOM?

**Interview Answer:** When we insert template content into the DOM the template content is available in its content property as a DocumentFragment as a special type of DOM node. We can treat it as any other DOM node, except one special property, when we insert it somewhere, its children are inserted instead. We can also insert the template content into the Shadow DOM in the same fashion

**Code Example:**

```html
<template id="tmpl">
  <script>
    alert('Hello');
  </script>

  <div class="message">Hello, world!</div>
</template>

<script>
  let elem = document.createElement('div');

  // Clone the template content to reuse it multiple times

  elem.append(tmpl.content.cloneNode(true));

  document.body.append(elem);

  // Now the script from <template> runs
</script>
```

Source: <https://javascript.info/template-element#inserting-template>
