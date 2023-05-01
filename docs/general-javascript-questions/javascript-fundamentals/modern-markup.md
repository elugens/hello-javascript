---
title: Modern Markup - JavaScript Interview Questions
description: Modern Markup in JavaScript - When working with modules, we use the script type attribute in Modern JavaScript. Frontend Developer Interview Questions n Answers
sidebar_position: 2
sidebar_label: Modern Markup
keywords:
  - modern markup
  - markup language
  - functions
  - modern javascript
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
  - modern markup
  - markup language
  - functions
  - modern javascript
  - interview answers
  - interview questions
---

<!-- Notes: Passed Rich Snippets validation. -->

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ModernMarkupSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Modern Markup | JavaScript Frontend Phone Interview Answers</title>
</head>

**JavaScript Fundamentals: Modern Markup**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/Skg3OnfabzA"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### Can you explain the script type attribute used in Modern JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When working with modules, we use the script type attribute in Modern JavaScript.</div><br />
  <div><strong>Technical Response:</strong> We use the script type attribute in Modern JavaScript development to create JavaScript Modules. The old HTML standard, HTML4, required a script to have a type. Usually, it was type="text/javascript", but we no longer use that implementation.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> JavaScript type attribute<br /><br /></div>
  
  <div></div>

```html
<html>
  <body>
    <script type="text/javascript">
      // <-- this is the script type attribute
      <!--
      document.write('Hello JavaScript!');
      //-->
    </script>
  </body>
</html>
```

</details>

---

### What was the script language attribute used for in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This property displays the language of the script. According to the MDN, we no longer utilize it since it is <em>deprecated</em>.</div><br />
  <div><strong>Technical Response:</strong> We use the language attribute to mention the scripting language. Typically, its value equates to JavaScript. Although recent versions of HTML (and XHTML, its successor) have phased out using this attribute. You may still find this in older applications on the web, and we should use it in Modern web applications.
  </div>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> JavaScript type attribute<br /><br /></div>
  
  <div></div>

```html
<html>
  <body>
    <script language="javascript">
      // <-- this is the script language attribute
      <!--
      document.write('Hello JavaScript!');
      //-->
    </script>
  </body>
</html>
```

</details>

---
