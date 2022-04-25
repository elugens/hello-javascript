---
title: Pointer Events
description: Pointer Events in JavaScript are events that occur when a user interacts with a pointer. They are triggered by the user's pointer. - JavaScript Interview Questions & Answers
sidebar_position: 4
sidebar_label: Pointer Events
---

**UI Events: Pointer Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What are pointer events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Pointer events are a modern way to handle input from various pointing devices, such as a mouse, a pen/stylus, and a touchscreen. For every mouse&#8249;event&#8250;, a pointer&#8249;event&#8250; plays a similar role.
    </div>
  </div>
</details>

---

### Can you replacing `mouse<event>` with `pointer<event>` in modern applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can replace mouse&#8249;event&#8250; events in our code with pointer&#8249;event&#8250; events and expect everything to operate perfectly with the mouse. Touch device support will also "magically" increase. However, in some places in CSS, we may need to include 'touch-action:none'.
    </div>
  </div>
</details>

---

### What are the three types of pointer-device types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three types of pointer-device types include the string mouse, pen, and touch. They must be of a string type.
    </div>
  </div>
</details>

---

### What happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This is considered a multi-touch event with several steps involved. Here is what happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it. At the first finger touch: pointerdown with isPrimary=true and some pointerId. For the second finger and more fingers (assuming the first one is still touching): pointerdown with isPrimary=false and a different pointerId for every finger.
    </div><br />

:::note
The pointerId gets allocated to each contacting finger rather than the whole device. When we use five fingers to touch the screen simultaneously, we get five pointerdown events with unique coordinates and pointerId. The events linked with the first finger have isPrimary=true at all times.
:::

  </div>
</details>

---

### Can you explain why the pointercancel event fires?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The pointercancel event fires when there is an ongoing pointer interaction. Something happens that causes it to get aborted so that no more pointer events get generated. There are several reasons this behavior may manifest itself, including the pointer device hardware was physically disabled, and the device orientation changed (tablet rotated). The browser decided to handle the interaction independently, considering it a mouse gesture, zoom-and-pan action, or something else.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the setPointerCapture() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The setPointerCapture() method of the Element interface gets used to designate a specific element as the capture target of future pointer events. Subsequent events for the pointer get targeted at the capture element until capture gets released via Element.releasePointerCapture(). Pointer capture allows events for a particular pointer event (PointerEvent) to be re-targeted to a particular element instead of the normal (or hit test) target at a pointer's location. We may use this approach to ensure that an element continues to receive pointer events even if the pointer device's contact moves away from the element (such as by scrolling or panning).
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
