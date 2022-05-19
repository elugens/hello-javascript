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
  <div><strong>Interview Response:</strong> A built-in &#8249;template&#8250; element is used to store HTML markup templates. Although the browser ignores its contents and checks for syntactic validity, we may access and utilize it in JavaScript to build additional components. We could build an invisible element anywhere in HTML to store HTML markup. The &#8249;template&#8250; element's content may be any good HTML, even though it ordinarily requires an enclosing tag. We may also utilize styles and scripts within our templates without influencing the document's load time. The browser considers &#8249;template&#8250; content to be "out of the document": styles are not applied, scripts do not execute, and &#8249;video autoplay&#8250; is not activated. When we enter the content into the document, it becomes live (styles get applied, scripts execute, and so on).
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

### What happens when we insert template content into the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we insert template content into the DOM, it is available in its content property as a DocumentFragment, a special DOM node. We can treat it as any other DOM node, except for one unique property; its children insert instead when we insert it somewhere in the document. We can also insert the template content into the Shadow DOM in the same fashion.
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
