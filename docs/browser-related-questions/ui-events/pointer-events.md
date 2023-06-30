---
title: Pointer Events
description: Pointer Events in JavaScript are events that occur when a user interacts with a pointer. They are triggered by the user's pointer. - JavaScript Interview Questions & Answers
sidebar_position: 4
sidebar_label: Pointer Events
keywords:
  - pointer events
  - user interaction
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
  - pointer events
  - user interaction
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PointerEventSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Pointer Events | JavaScript Frontend Phone Interview</title>
</head>

**UI Events: Pointer Events**

<CloseAllAnswers />

---

### What are Pointer Events in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Pointer Events are a unified API in JavaScript for handling input from various devices like a mouse, touch, or pen, allowing developers to build more flexible and accessible interfaces across different platforms. For every mouse&#8249;event&#8250;, a pointer&#8249;event&#8250; plays a similar role.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Assume we have a target element
let target = document.getElementById('target');

// Handle pointerdown event
target.onpointerdown = function(event) {
    console.log('pointerdown event triggered');
}

// Handle pointerup event
target.onpointerup = function(event) {
    console.log('pointerup event triggered');
}

// Handle pointermove event
target.onpointermove = function(event) {
    console.log(`Pointer moved to: ${event.clientX}, ${event.clientY}`);
}
```

In this example, we listen to `pointerdown`, `pointerup`, and `pointermove` events on a target element. `pointerdown` is triggered when the pointer is activated or when a button is pressed, `pointerup` when a button is released, and `pointermove` when a pointer is moved.

  </div>
  </div>
</details>

---

### What are the main properties of a Pointer Event object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Key properties of a Pointer Event object include `pointerId` (unique identifier), `width` and `height` (contact geometry), `pressure` (force), `pointerType` (device type), and `clientX`/`clientY` (coordinates).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let target = document.getElementById('target');

target.onpointerdown = function(event) {
    console.log('Pointer ID:', event.pointerId);
    console.log('Pointer type:', event.pointerType);
    console.log('Width and Height:', event.width, event.height);
    console.log('Pressure:', event.pressure);
    console.log('Position:', event.clientX, event.clientY);
}
```

  </div>
  </div>
</details>

---

### What is the difference between 'pointerdown' and 'pointerup' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'pointerdown' event is triggered when a pointer becomes active or when a button is pressed, while 'pointerup' is fired when the pointer is deactivated or when the button is released.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let target = document.getElementById('target');

// This function logs the type of event (pointerdown or pointerup)
function logPointerEvent(e) {
    console.log('Event type:', e.type);
}

// Handle pointerdown event
target.addEventListener('pointerdown', logPointerEvent);

// Handle pointerup event
target.addEventListener('pointerup', logPointerEvent);

```

In this example, the 'pointerdown' and 'pointerup' events are logged to the console when they are triggered on the target element.

  </div>
  </div>
</details>

---

### How can you prevent the default behavior of a pointer event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To prevent the default behavior of a pointer event in JavaScript, you use the preventDefault() method on the event object like this: event.preventDefault().
  </div>
  </div>
</details>

---

### What is the difference between 'pointermove' and 'pointerover' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'pointermove' event is triggered when the pointer device is moved, while the 'pointerover' event is triggered when the pointer enters the hit-testing boundaries of an element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let target = document.getElementById('target');

// This function logs the type of event (pointermove or pointerover)
function logPointerEvent(e) {
    console.log('Event type:', e.type);
}

// Handle pointermove event
target.addEventListener('pointermove', logPointerEvent);

// Handle pointerover event
target.addEventListener('pointerover', logPointerEvent);
```

  </div>
  </div>
</details>

---

### How can you determine the type of pointer device used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can determine the type of pointer device used by accessing the pointerType property of the pointer event object. For example, event.pointerType will return 'mouse', 'pen', 'touch', or 'unknown'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let target = document.getElementById('target');

target.onpointerdown = function(event) {
    console.log('Pointer type:', event.pointerType);
}
```

  </div>
  </div>
</details>

---

### How can you check if the pointer device supports pressure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can check if the pointer device supports pressure by observing the `pressure` property of the PointerEvent object, which ranges from 0.0 to 1.0. A device that does not support pressure will always return 0.5 unless a button is active.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let target = document.getElementById('target');

target.onpointerdown = function(event) {
    if (event.pressure === 0.5) {
        console.log('This device may not support pressure or no pressure is applied.');
    } else {
        console.log('Pressure:', event.pressure);
    }
}
```

  </div>
  </div>
</details>

---

### How can you handle multiple pointer events simultaneously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you handle multiple pointer events simultaneously by tracking the unique 'pointerId' property for each event. This allows you to distinguish and handle inputs from multiple pointers at once.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of handling multiple pointer events simultaneously:

```javascript
let activePointers = {};

document.addEventListener('pointerdown', (event) => {
  activePointers[event.pointerId] = { x: event.clientX, y: event.clientY };
});

document.addEventListener('pointermove', (event) => {
  if (activePointers[event.pointerId]) {
    activePointers[event.pointerId].x = event.clientX;
    activePointers[event.pointerId].y = event.clientY;
  }
});

document.addEventListener('pointerup', (event) => {
  delete activePointers[event.pointerId];
});

document.addEventListener('pointercancel', (event) => {
  delete activePointers[event.pointerId];
});
```

This code will track the position of each active pointer using the pointer's ID. When a pointer is no longer active (on `pointerup` or `pointercancel`), it is removed from the activePointers object.

  </div>
  </div>
</details>

---

### How can you detect if the primary button was pressed during a pointer event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, during a pointer event, you can detect if the primary button was pressed by checking if the 'button' property of the pointer event object equals 0. For example, event.button === 0.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of how to detect if the primary button was pressed during a pointer event:

```javascript
document.addEventListener('pointerdown', (event) => {
  if (event.button === 0) {
    console.log("Primary button pressed");
  } else {
    console.log("Non-primary button pressed");
  }
});
```

In this example, when a `pointerdown` event occurs, the code checks if the `button` property of the event is 0 (which represents the primary button, usually the left mouse button or the only button on a one-button device). If it is, it logs "Primary button pressed", otherwise it logs "Non-primary button pressed".

  </div>
  </div>
</details>

---

### What is the purpose of the "pointerleave" event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "pointerleave" event is fired when a pointer has exited an element's boundaries, including its descendants. It's different from "pointerout" as it doesn't bubble.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let target = document.getElementById('target');

// Log a message when the pointer leaves the target element
target.onpointerleave = function(event) {
    console.log('The pointer has left the target.');
}
```

In this code, a message is logged to the console when the pointer leaves the boundaries of the target element, signifying that the "pointerleave" event has been fired.

  </div>
  </div>
</details>

---

### How can you detect if a pointer event occurred within a specific element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can detect if a pointer event occurred within a specific element by adding an event listener to that element. The listener function will be called only when the event occurs inside that element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a JavaScript example of how to detect if a pointer event occurred within a specific element:

```javascript
let element = document.getElementById('myElement');

element.addEventListener('pointerdown', (event) => {
  console.log("Pointer event occurred within myElement!");
});
```

In this code, a `pointerdown` event listener is added to an element with the id 'myElement'. The listener function logs a message to the console when the event occurs within 'myElement'.

  </div>
  </div>
</details>

---

### What is the difference between capturing and bubbling phase in pointer events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the capturing phase, events are triggered on the ancestors of the target element, while in the bubbling phase, events are triggered on the target element first and then propagate to its ancestors.
  </div>
  </div>
</details>

---

### Can you replace "mouse&#8249;event&#8250;" with "pointer&#8249;event&#8250;" in modern applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  Yes, modern applications can replace "mouse&#8249;event&#8250;" with "pointer&#8249;event&#8250;" to handle various input devices, including touchscreens, styluses, and mice, using the Pointer Events API for improved compatibility and flexibility. Touch device support will also "magically" increase. However, in some places in CSS, we may need to include 'touch-action:none'.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let target = document.getElementById('target');

function handleEvent(event) {
    console.log('Event type:', event.type);
}

// Using mouse events
target.addEventListener('mousedown', handleEvent);
target.addEventListener('mouseup', handleEvent);
target.addEventListener('mousemove', handleEvent);

// Equivalent using pointer events
target.addEventListener('pointerdown', handleEvent);
target.addEventListener('pointerup', handleEvent);
target.addEventListener('pointermove', handleEvent);
```

In this example, the functions handling the `mouse<event>` and `pointer<event>` are the same. However, using `pointer<event>` would also handle touch and pen input, not just mouse input.

  </div>
  </div>
</details>

---

### How many types of pointer-device are there in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, there are five types of pointer devices: "mouse" for traditional mice, "pen" for styluses, "touch" for touchscreens, "kinect" for Microsoft Kinect sensors, and "unknown" for unrecognized or unsupported devices.
    </div>
  </div>
</details>

---

### What are the three main types of pointer-devices in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three main types of pointer devices commonly encountered in JavaScript are "mouse" for traditional mice, "pen" for styluses or digital pens, and "touch" for touchscreens or touch-enabled devices.
    </div>
  </div>
</details>

---

### What happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a user touches a touchscreen in one place and subsequently puts another finger somewhere else, it is recognized as a <strong>multi-touch gesture</strong>, allowing for simultaneous tracking and interpretation of multiple touch points.
    </div><br />
  <div><strong>Technical Response:</strong> This is considered a multi-touch event with several steps involved. Here is what happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it. At the first finger touch: pointerdown with isPrimary=true and some pointerId. For the second finger and more fingers (assuming the first one is still touching): pointerdown with isPrimary=false and a different pointerId for every finger.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let target = document.getElementById('target');

target.onpointerdown = function(event) {
    console.log('Pointer ID:', event.pointerId);
    console.log('Pointer type:', event.pointerType);
    console.log('Position:', event.clientX, event.clientY);
}
```

  </div>

---

:::note
The pointerId gets allocated to each contacting finger rather than the whole device. When we use five fingers to touch the screen simultaneously, we can extract five pointerdown events with unique coordinates and pointerId. The events linked with the first finger have isPrimary=true at all times.
:::

  </div>
</details>

---

### Can you explain why the 'pointercancel' event fires?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'pointercancel' event fires in JavaScript when the system cancels pointer events due to scenarios like a hardware failure, interruption, or the operating system's gesture recognition taking precedence over the application's handling of pointer events.
    </div><br/>
  <div><strong>Technical Response:</strong> The pointercancel event fires when there is an ongoing pointer interaction and something happens that causes it to abort so that no more pointer-events generate. There are several reasons this behavior may manifest itself, including the pointer device hardware was physically disabled, and the device orientation changed (tablet rotated). The browser decided to handle the interaction independently, considering it a mouse gesture, zoom-and-pan action,  or anything related to user interaction.
    </div>
  </div>
</details>

---

### Can you explain the function of the 'setPointerCapture()' method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The setPointerCapture() method in JavaScript is used to assign pointer capture to a specific element, allowing that element to receive pointer events even if the pointer moves outside its boundaries.
    </div><br />
  <div><strong>Technical Response:</strong> Developers can use the setPointerCapture() method of the Element interface to designate a specific element as the capture target of future pointer events. Subsequent events for the pointer get targeted at the capture element until capture releases via Element.releasePointerCapture(). Pointer capture allows events for a particular pointer event (PointerEvent) to be re-targeted to a particular element instead of the normal (or hit test) target at a pointer's location. We may use this approach to ensure that an element continues to receive pointer events even if the pointer device's contact moves away from the element (such as by scrolling or panning).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> targetElement.setPointerCapture(pointerId);<br /><br />

  <div></div>

```js
function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```

  </div>
  </div>
</details>

---
