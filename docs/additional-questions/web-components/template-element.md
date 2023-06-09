---
title: Template Element
description: A built-in template element serves as a storage for HTML markup templates. It is used to create custom elements. JavaScript Frontend Phone Interview Questions
sidebar_position: 4
sidebar_label: Template Element
keywords:
  - template element
  - html markup templates
  - functions
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
  - template element
  - html markup templates
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TemplateElementSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Template Element | JavaScript Interview Questions</title>
</head>

**Web Components: Template Element**

<CloseAllAnswers />

---

### What is a built-in HTML template element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The built-in HTML template element is a mechanism for storing and reusing HTML markup, which isn't rendered when a page loads but can be cloned and inserted dynamically later.
    </div><br />
  <div><strong>Technical Response:</strong> A built-in &#8249;template&#8250; element is used to store HTML markup templates. Although the browser ignores its contents and checks for syntactic validity, we may access and utilize it in JavaScript to build additional components. We could build an invisible element anywhere in HTML to store HTML markup. The &#8249;template&#8250; element's content may be any good HTML, even though it ordinarily requires an enclosing tag. We may also utilize styles and scripts within our templates without influencing the document's load time. The browser considers &#8249;template&#8250; content to be "out of the document": styles are not applied, scripts do not execute, and &#8249;video autoplay&#8250; is not activated. When we enter the content into the document, it becomes live (styles get applied, scripts execute, and so on).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template>
  <tr>
    <td>Contents</td>
  </tr>
</template>

<template>
  <style>
    p {
      font-weight: bold;
    }
  </style>
  <script>
    alert('Hello');
  </script>
</template>
```

  </div>
  </div>
</details>

---

### What is the main use of the Template Element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main use of the Template Element is to define reusable content that can be cloned and inserted into the DOM programmatically. It provides a way to create inert templates that can be activated later to generate dynamic content.
  </div><br />
  </div>
</details>

---

### How is the Template Element defined in HTML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Template Element is defined using the &#60;template&#62; tag in HTML. The content within the &#60;template&#62; tag serves as a template that can be cloned and used later to generate dynamic content.
  </div><br />
  </div>
</details>

---

### Is the content inside a Template Element rendered when the page is loaded?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the content inside a Template Element is not rendered upon initial page load. It serves as a inert template that can be cloned and activated later to generate dynamic content programmatically.
  </div><br />
  </div>
</details>

---

### Can JavaScript manipulate the content inside a Template Element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript can manipulate the content inside a Template Element. The content can be accessed, modified, and cloned programmatically using JavaScript methods like `.content`, `.querySelector()`, and `.cloneNode()`.
  </div><br />
  </div>
</details>

---

### What's the 'content' property of a Template Element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'content' property is a DocumentFragment, which is a lightweight copy of the template's child nodes.
  </div><br />
  </div>
</details>

---

### Can styles and scripts inside the Template Element affect the main page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, styles and scripts inside a Template Element are inert and do not affect the main page unless explicitly activated by cloning and inserting the template content into the DOM.
  </div><br />
  </div>
</details>

---

### How do you instantiate a Template Element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To instantiate a Template Element, you can use the `.content` property of the template to access its content, clone it using `.cloneNode()`, and then insert the cloned content into the desired location in the DOM using methods like `.appendChild()` or `.insertBefore()`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that demonstrates how to instantiate a Template Element:

HTML:

```html
<template id="my-template">
  <p>This is a template content.</p>
</template>

<div id="target"></div>
```

JavaScript:

```javascript
// Get the template element
const template = document.querySelector('#my-template');

// Clone the template content
const templateContent = template.content.cloneNode(true);

// Find the target element in the DOM
const targetElement = document.querySelector('#target');

// Append the cloned content to the target element
targetElement.appendChild(templateContent);
```

In this example, the content of the `<template>` element is cloned using `.content.cloneNode(true)`, which creates a deep clone of the template's content. Then, the cloned content is appended to the target element (`#target`) in the DOM using `.appendChild()`.

  </div>
  </div>
</details>

---

### What does the 'cloneNode' method do in the context of a Template Element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the context of a Template Element, the `cloneNode` method creates a copy of the template's content, including its child nodes and attributes. It allows you to clone the template content for dynamic insertion into the DOM.
  </div><br />
  </div>
</details>

---

### Does content within a Template Element affect page accessibility, like ARIA or tab order?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, content within a Template Element does not directly affect page accessibility, including ARIA attributes or tab order. These considerations should be applied when the template content is cloned and inserted into the DOM.
  </div><br />
  </div>
</details>

---

### Is the Template Element supported in all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Template Element is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge. However, some older versions of Internet Explorer do not fully support it.
  </div><br />
  </div>
</details>

---

### Is it possible to nest Template Elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is possible to nest Template Elements. This can be useful for creating complex layouts or for reusing code. To nest Template Elements, simply place one Template Element inside another.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template id="outer">
  <div>
    <h1>This is the outer template</h1>
    <template id="inner">
      <div>
        <h2>This is the inner template</h2>
      </div>
    </template>
  </div>
</template>
```

When this code is rendered, it will create a layout with two nested div elements. The outer div element will contain the text "This is the outer template," and the inner div element will contain the text "This is the inner template."

  </div>
  </div>
</details>

---

### Can you use Template Elements with Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Template Elements can be used in conjunction with Shadow DOM for encapsulation.
  </div><br />
  </div>
</details>

---

### What's the benefit of using Template Elements vs script tags with the type 'text/template'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Template Elements are more powerful and flexible because they create actual DOM trees, not strings of HTML.
  </div><br />
  </div>
</details>

---

### What happens when we insert template content into the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we insert template content into the DOM, the hidden HTML inside the template becomes visible and interacts as a normal part of the web page.
    </div><br />
  <div><strong>Technical Response:</strong> When we insert template content into the DOM, it is available in its content property as a DocumentFragment, a special DOM node. We can treat it as any other DOM node, except for one unique property; its children insert instead when we insert it somewhere in the document. We can also insert the template content into the Shadow DOM in the same fashion.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template id="tmpl">
  <script>
    alert('Hello');
  </script>
  <div class="message">Hello, world!</div>
</template>

<script>
  let elem = document.createElement('div');

  // Clone the template content to reuse it multiple times
  elem.append(tmpl.content.cloneNode(true));

  document.body.append(elem);
  // Now the script from <template> runs
</script>
```

  </div>
  </div>
</details>

---
