---
title: Pointer Events
sidebar_position: 4
---

# Pointer Events

**UI Events: Pointer Events**

### What are pointer events?

**Interview Answer:** Pointer events are a modern way to handle input from a variety of pointing devices, such as a mouse, a pen/stylus, a touchscreen, and so on. For every `mouse<event>`, there is a `pointer<event>` that plays a similar role.

Source: <https://javascript.info/pointer-events>

### Can you replacing `mouse<event>` with `pointer<event>` in modern applications?

**Interview Answer:** Yes, we can replace `mouse<event>` events with `pointer<event>` in our code and expect things to continue working fine with mouse. The support for touch devices will also “magically” improve. Although, we may need to add touch-action: none in some places in CSS.

Source: <https://javascript.info/pointer-events#pointer-event-types>

### What are the three types of pointer device types?

**Interview Answer:** The three types of pointer device types include the string mouse, pen, and touch. They must be of a string type.

Source: <https://javascript.info/pointer-events#pointer-event-properties>

### What happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it?

**Interview Answer:** This is considered a multi-touch event with several steps involved. Here is what happens when a user touches a touchscreen in one place, then puts another finger somewhere else on it. At the first finger touch: pointerdown with isPrimary=true and some pointerId. For the second finger and more fingers (assuming the first one is still touching): pointerdown with isPrimary=false and a different pointerId for every finger.

**Please note:** The pointerId is assigned not to the whole device, but for each touching finger. If we use 5 fingers to simultaneously touch the screen, we have 5 pointerdown events, each with their respective coordinates and a different pointerId. The events associated with the first finger always have isPrimary=true.

Source: <https://javascript.info/pointer-events#pointer-event-properties>

### Can you explain why the pointercancel event fires?

**Interview Answer:** The pointercancel event fires when there is an ongoing pointer interaction, and then something happens that causes it to be aborted, so that no more pointer events are generated. There are several reasons this behavior may manifest itself including: The pointer device hardware was physically disabled. The device orientation changed (tablet rotated). The browser decided to handle the interaction on its own, considering it a mouse gesture or zoom-and-pan action or something else.

Source: <https://javascript.info/pointer-events#event-pointercancel>

### Explain the function and syntax of the setPointerCapture() method.

**Interview Answer:** The setPointerCapture() method of the Element interface is used to designate a specific element as the capture target of future pointer events. Subsequent events for the pointer will be targeted at the capture element until capture is released via Element.releasePointerCapture(). Pointer capture allows events for a particular pointer event (PointerEvent) to be re-targeted to a particular element instead of the normal (or hit test) target at a pointer's location. This can be used to ensure that an element continues to receive pointer events even if the pointer device's contact moves off the element (such as by scrolling or panning).

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

Source: <https://javascript.info/pointer-events#pointer-capturing>
