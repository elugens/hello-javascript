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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MouseEventsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Mouse Events | JavaScript Frontend Phone Interview Questions</title>
</head>

**UI Events: Mouse Events**

<CloseAllAnswers />

---

### What is a mouse event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Mouse events are JavaScript events that get triggered due to the user's interaction with the mouse, like click, double-click, mouse move, and mouse over.
  </div>
  </div>
</details>

---

### What is the event order of a mouse left-click in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event order for a mouse left-click in the browser is: 'mousedown', 'mouseup', and then 'click'. If the click was on a link or button, it would then trigger the 'submit' or 'navigate' event. The left button is considered the primary button that returns the event.button equaling zero.
    </div>
  </div>
</details>

---

### What's the difference between 'click' and 'dblclick' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 'Click' event triggers on a single mouse button click. 'Dblclick' triggers when the mouse button is clicked twice in quick succession.
  </div>
  </div>
</details>

---

### If a user is on a MAC, what is the event property key for their OS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event property key for the Command key on a Mac within JavaScript is `event.metaKey`. It returns a Boolean value `true` if the key is pressed, otherwise `false`.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('keydown', function(event) {
    if (event.metaKey) {
        console.log('Command key was pressed');
    }
});
```

In this code, when a key is pressed, if it's the Command key, the message 'Command key was pressed' will be logged to the console.

  </div>
  </div>
</details>

---

### What is the 'mousemove' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'mousemove' event in JavaScript is triggered when the mouse pointer is moving over an element. It provides real-time position of the mouse cursor while it is over the targeted element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('mousemove', function(event) {
    console.log(`Mouse position: X = ${event.clientX}, Y = ${event.clientY}`);
});
```

This code logs the current mouse position in the console every time the mouse moves.

  </div>
  </div>
</details>

---

### Can you name some mouse button events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most common mouse button events are include mousedown, mouseup, and click.
  </div>
  </div>
</details>

---

### Can you explain the difference between 'mouseover' and 'mouseenter' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'mouseover' event triggers when the mouse enters an element or its child elements, while 'mouseenter' only triggers when the mouse enters the element itself, not its children.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="parent">
    Parent
    <div id="child">Child</div>
</div>

<script>
document.getElementById('parent').addEventListener('mouseover', function() {
    console.log('Mouseover on parent');
});

document.getElementById('parent').addEventListener('mouseenter', function() {
    console.log('Mouseenter on parent');
});

document.getElementById('child').addEventListener('mouseover', function() {
    console.log('Mouseover on child');
});

document.getElementById('child').addEventListener('mouseenter', function() {
    console.log('Mouseenter on child');
});
</script>
```

In this example, moving the mouse over the 'Child' div will trigger both the 'Mouseover on child' and 'Mouseover on parent' logs, but only the 'Mouseenter on child' log, not the 'Mouseenter on parent'.

  </div>
  </div>
</details>

---

### What differentiates window and document relative mouse positions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Window-relative mouse positions (pageX/Y) are from the top left corner of the whole document and do not change when the page begins to scroll, while document-relative positions (clientX/Y) are from the viewport (visible area of the document).
    </div>
  <div><strong>Technical Response:</strong> In summary, document-relative coordinates pageX/Y are numbered from the document's left top corner and do not change when the page begins to scroll. ClientX/Y, on the other hand, are counted from the upper left-hand corner of the current window and do not move or shift when the user navigates the website.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('mousemove', function(event) {
    console.log(`Window-relative position: X = ${event.clientX}, Y = ${event.clientY}`);
    console.log(`Document-relative position: X = ${event.pageX}, Y = ${event.pageY}`);
});
```

In this code, every time the mouse moves, it logs the current mouse position relative to the window (viewport) and the document (page including scroll).

  </div>
  </div>
</details>

---

### A double mouse click has the unintended consequence of selecting that text. Is there a method to disable this particular behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can prevent text selection caused by double-clicking using 'event.preventDefault()' inside the 'dblclick' event handler.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Before... -->

<b ondblclick="console.log('Click!')" onmousedown="return false"> Double-click me </b>

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
  <div><strong>Interview Response:</strong> Yes, you can block text or image copying by calling 'event.preventDefault()' in the JavaScript 'copy' event handler attached to the document.
    </div><br />
  <div><strong>Alternative Response:</strong> Yes, if we want to disable selection to protect our page content from copy-paste by the user, we can use oncopy event and set it to false. This approach doesn’t restrict the user from accessing the page's HTML source, but it does make it more difficult.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div oncopy="console.log('Copying forbidden!'); return false">
  Dear user, The copying is forbidden for you. If you know JS or HTML, then you
  can extract everything from the page source.
</div>
```

  </div>
  </div>
</details>

---

### What does 'event bubbling' mean in the context of mouse events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event bubbling with mouse events refers to the process where an event propagates upward through the DOM, starting from the element where the event occurred to the root element.
  </div>
  </div>
</details>

---

### What is the use of the 'event.preventDefault()' method in mouse events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's used to stop the browser's default action triggered by a mouse event.
  </div>
  </div>
</details>

---

### Can you explain what 'contextmenu' event is?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'contextmenu' event is triggered when the right mouse button is clicked (before the context menu is displayed).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevents the default context menu from appearing
    console.log('Context menu was triggered');
});
```

In this code, when the user right-clicks on the document, the default context menu is prevented from appearing, and the message 'Context menu was triggered' is logged to the console. You can perform custom actions or show a custom context menu instead of the default behavior.

  </div>
  </div>
</details>

---

### What is the difference between 'mouseleave' and 'mouseout' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'mouseleave' event is only triggered when the mouse pointer leaves the element, while 'mouseout' is triggered when the mouse pointer leaves the element or one of its children.
  </div>
  </div>
</details>

---

### How does 'event.stopPropagation()' affect mouse events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.stopPropagation()' method stops the propagation of mouse events to parent elements, preventing their event handlers from being triggered, while allowing the current event's handler to execute.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
<div id="parent">
    Parent Element
    <button id="child">Click Me!</button>
</div>

<script>
document.getElementById('parent').addEventListener('click', function() {
    console.log('Parent element clicked');
});

document.getElementById('child').addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation to parent elements
    console.log('Child element clicked');
});
</script>
```

  </div>
  </div>
</details>

---

### What do the 'clientX' and 'clientY' properties represent in a mouse event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'clientX' and 'clientY' properties in a mouse event represent the X and Y coordinates of the mouse pointer relative to the browser's viewport, excluding any scroll offsets.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('mousemove', function(event) {
    console.log(`Mouse position: X = ${event.clientX}, Y = ${event.clientY}`);
});
```

**Output:**

```html
"Mouse position: X = 90, Y = 84"
"Mouse position: X = 93, Y = 79"
"Mouse position: X = 95, Y = 77"
"Mouse position: X = 100, Y = 71"
"Mouse position: X = 101, Y = 68"
"Mouse position: X = 101, Y = 65"
"Mouse position: X = 101, Y = 59"
```

In this code, whenever the mouse moves, it logs the current X and Y coordinates of the mouse pointer relative to the viewport (browser window) in the console.

  </div>
  </div>
</details>

---

### What are 'screenX' and 'screenY' properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'screenX' and 'screenY' properties in a mouse event represent the X and Y coordinates of the mouse pointer relative to the screen or monitor, regardless of the browser window or viewport.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('mousemove', function(event) {
    console.log(`Mouse position: X = ${event.screenX}, Y = ${event.screenY}`);
});
```

**Output:**

```html
"Mouse position: X = 138, Y = 152"
"Mouse position: X = 141, Y = 156"
"Mouse position: X = 148, Y = 163"
"Mouse position: X = 164, Y = 179"
"Mouse position: X = 169, Y = 187"
"Mouse position: X = 169, Y = 195"
```

In this code, whenever the mouse moves, it logs the current X and Y coordinates of the mouse pointer relative to the screen or monitor in the console, regardless of the browser window or viewport.

  </div>
  </div>
</details>

---

### Can you explain the 'pointerlockchange' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `pointerlockchange` event in JavaScript is fired when the pointer is locked/unlocked. This typically happens when the `requestPointerLock` method is called or when the user exits pointer lock.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('pointerlockchange', function() {
  if (document.pointerLockElement) {
    console.log('The pointer is locked');
  } else {
    console.log('The pointer is not locked');
  }
});

// To request pointer lock
document.body.requestPointerLock();
```

In this code, the `pointerlockchange` event handler checks if `document.pointerLockElement` is set, which would indicate that the pointer is locked. If not, it's unlocked.

  </div>
  </div>
</details>

---

### What does 'buttons' property represent in a mouse event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The buttons property in a mouse event represents the state of the buttons pressed on the mouse when the event was fired. Each button corresponds to a unique binary value.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('mousedown', function(e) {
  if (e.buttons == 1) {
      console.log('Left button is pressed');
  } else if (e.buttons == 2) {
      console.log('Right button is pressed');
  } else if (e.buttons == 4) {
      console.log('Middle button is pressed');
  }
});
```

In this example, when a `mousedown` event is fired, the event handler checks the `buttons` property to see which mouse button was pressed. It logs a message depending on whether the left, right, or middle button was pressed.

  </div>
  </div>
</details>

---

### What does 'detail' property represent in a 'mousedown' or 'mouseup' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a `mousedown` or `mouseup` event, the `detail` property represents the number of times the mouse button has been pressed and released on an element without the mouse pointer having moved.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('mousedown', function(e) {
  console.log(`The mouse button was pressed ${e.detail} time(s)`);
});

document.addEventListener('mouseup', function(e) {
  console.log(`The mouse button was released ${e.detail} time(s)`);
});
```

In this example, when a `mousedown` or `mouseup` event is fired, the event handler checks the `detail` property and logs a message indicating how many times the mouse button has been pressed and released.

  </div>
  </div>
</details>

---

### What is the 'auxclick' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `auxclick` event is a mouse event in JavaScript that gets fired when a non-primary mouse button (usually the middle button) is clicked on an element.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('auxclick', function(e) {
  if (e.button === 1) {
    console.log('Middle button was clicked.');
  }
});
```

In this example, when an `auxclick` event is fired, the event handler checks if the middle mouse button was clicked and logs a message if it was. Please note that not all mice have a middle button.

  </div>
  </div>
</details>

---

### What is the 'pointerId' property in a mouse event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In pointer events (not specifically mouse events), `pointerId` is a unique identifier for a particular pointer (like a mouse, pen, or touch contact) involved in the event.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('pointerdown', function(e) {
  console.log(`The pointer id is ${e.pointerId}`);
});
```

In this example, when a `pointerdown` event is fired, the event handler logs the unique identifier of the pointer that triggered the event. This could be useful for distinguishing between different pointers in a multi-touch scenario, for example.

  </div>
  </div>
</details>

---

### How can you detect the direction of the mouse wheel scroll?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `wheel` event's `deltaY` property can be used to detect the mouse wheel scroll direction in JavaScript. Positive `deltaY` indicates scrolling down, and negative means scrolling up.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('wheel', function(e) {
  if (e.deltaY < 0) {
    console.log('Scrolled up');
  } else {
    console.log('Scrolled down');
  }
});
```

In this example, when a `wheel` event is fired, the event handler checks the `deltaY` property to determine the scroll direction. It logs a message depending on whether the user scrolled up or down.

  </div>
  </div>
</details>

---
