---
title: Mouse Events
description: Mouse Events in JavaScript are events that occur when a user interacts with a mouse. They are triggered by the user. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Mouse Events
keywords:
  - mouse events
  - javascript mouse events
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
  - mouse events
  - javascript mouse events
  - interview answers
  - interview questions
---

<head>
  <title>Mouse Events | JavaScript Frontend Phone Interview Questions</title>
</head>

**UI Events: Mouse Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the event order of a mouse left-click in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event order of a mouse left-click is mousedown, mouseup, and then click to complete the left-click with the mouse. The left button is considered the primary button that returns the event.button equaling zero.
    </div>
  </div>
</details>

---

### If a user is on a MAC, what is the event property key for their OS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `metaKey` is the property corresponding to a keypress of the CMD modifier key on a Mac device.
    </div>
  </div>
</details>

---

### What differentiates window and document relative mouse positions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In summary, document-relative coordinates pageX/Y are numbered from the document's left top corner and do not change when the page begins to scroll. ClientX/Y, on the other hand, are counted from the upper left-hand corner of the current window and do not move or shift when the user navigates the website.
    </div>
  </div>
</details>

---

### A double mouse click has the unintended consequence of selecting that text. Is there a method to disable this particular behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can turn off this side-effect using JavaScript or an element attribute by setting mousedown to false.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Before... -->

<b ondblclick="alert('Click!')" onmousedown="return false"> Double-click me </b>

<!-- ...After -->
```

  </div>
  </div>
</details>

---

### Can you block text or image copying in a browser document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if we want to disable selection to protect our page content from copy-paste by the user, we can use oncopy event and set it to false. This approach doesn’t restrict the user from accessing the page's HTML source, but it does make it more difficult.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div oncopy="alert('Copying forbidden!'); return false">
  Dear user, The copying is forbidden for you. If you know JS or HTML, then you
  can extract everything from the page source.
</div>
```

  </div>
  </div>
</details>

---
