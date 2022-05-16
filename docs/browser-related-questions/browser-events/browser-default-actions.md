---
title: Browser Default Actions
description: Several events automatically cause the browser to do particular actions by default. These are called default browser actions. Interview Questions
sidebar_position: 4
sidebar_label: Browser Default Actions
keywords:
  - browser default actions
  - browser defaults
  - browser actions
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
  - browser default actions
  - browser defaults
  - browser actions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BrowserDefaultSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Browser Default Actions | JavaScript Frontend Interview</title>
</head>

**Browser Events: Browser Default Actions**

<CloseAllAnswers />

---

### What is a default action considered in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several different default actions in the browser. For instance, a click on a link initiates the navigation to the specified URL. Another default action is highlighting text when pressing a mouse button as we glide over the text. As developers, we have control over many of these actions.
    </div>
  </div>
</details>

---

### Is there a built-in function or method to prevent browser actions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the preventDefault method to prevent specific browser actions.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<a href="/" onclick="return false">Click here</a>
<!-- or -->
<a href="/" onclick="event.preventDefault()">here</a>
```

  </div>
  </div>
</details>

---

### What happens when you return a false value from a handler?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The value returned by an event handler usually gets ignored. The only exception is returning false from a handler assigned on&#8249;event&#8249;. In all other circumstances, the return value gets disregarded, making no sense to return true.
    </div>
  </div>
</details>

---

### What is the function of the defaultPrevented property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The defaultPrevented read-only property of the Event interface returns a Boolean indicating whether the call to Event.preventDefault() canceled the event. The property event.defaultPrevented is true if the default action was prevented and false otherwise.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>Right-click for the document menu</p>
<button id="elem">Right-click for the button menu</button>

<script>
  elem.oncontextmenu = function (event) {
    event.preventDefault();
    alert('Button context menu');
  };

  document.oncontextmenu = function (event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    alert('Document context menu');
  };
</script>
```

  </div>
  </div>
</details>

---
