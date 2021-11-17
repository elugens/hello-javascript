---
title: Pointer Events
sidebar_position: 4
---

# Pointer Events

**UI Events: Pointer Events**

<head>
  <title>Pointer Events - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are pointer events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on. For every mouse&#8249;event&#8250;, there is a pointer&#8249;event&#8250; that plays a similar role.
    </div>
  </div>
</details>

---

### Can you replacing `mouse<event>` with `pointer<event>` in modern applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can replace mouse&#8249;event&#8250; events with pointer&#8249;event&#8250; in our code and expect things to continue working fine with mouse. The support for touch devices will also “magically” improve. Although, we may need to add touch-action: none in some places in CSS.
    </div>
  </div>
</details>

---

### What are the three types of pointer device types?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three types of pointer device types include the string mouse, pen, and touch. They must be of a string type.
    </div>
  </div>
</details>

---

### What happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This is considered a multi-touch event with several steps involved. Here is what happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it. At the first finger touch: pointerdown with isPrimary=true and some pointerId. For the second finger and more fingers (assuming the first one is still touching): pointerdown with isPrimary=false and a different pointerId for every finger.
    </div>
  </div>
</details>

:::note
The pointerId is assigned not to the whole device, but for each touching finger. If we use 5 fingers to simultaneously touch the screen, we have 5 pointerdown events, each with their respective coordinates and a different pointerId. The events associated with the first finger always have isPrimary=true.
:::

---

### Can you explain why the pointercancel event fires?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The pointercancel event fires when there is an ongoing pointer interaction, and then something happens that causes it to be aborted, so that no more pointer events are generated. There are several reasons this behavior may manifest itself including: The pointer device hardware was physically disabled. The device orientation changed (tablet rotated). The browser decided to handle the interaction on its own, considering it a mouse gesture or zoom-and-pan action or something else.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the setPointerCapture() method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The setPointerCapture() method of the Element interface is used to designate a specific element as the capture target of future pointer events. Subsequent events for the pointer will be targeted at the capture element until capture is released via Element.releasePointerCapture(). Pointer capture allows events for a particular pointer event (PointerEvent) to be re-targeted to a particular element instead of the normal (or hit test) target at a pointer's location. This can be used to ensure that an element continues to receive pointer events even if the pointer device's contact moves off the element (such as by scrolling or panning).
    </div>
  </div>
</details>

**Syntax:** targetElement.setPointerCapture(pointerId);

Example:

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

---
