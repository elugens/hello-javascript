---
title: Moving the Mouse
sidebar_position: 2
---

# Moving the Mouse

**UI Events: Moving the Mouse: mouseover/out, mouseenter/leave**

<head>
  <title>Mouse Movements - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain the read-only property relatedTarget during a mouseover and mouseout event.

**Interview Answer:** During mouseover and mouseout events the relatedTarget property is relative to the element where the mouse entered and left the target element. For instance, a div is inside to a body and the mouse enters the div and leaves back into the body. The body is the relatedTarget in this case.

Source: <https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave#events-mouseover-mouseout-relatedtarget>

### Can the relatedTarget be null during a mouseover/mouseout event?

**Interview Answer:** Yes, the relatedTarget property can be null. That is normal and just means that the mouse came not from another element, but from out of the window. Or that it left the window. We should keep that possibility in mind when using event.relatedTarget in our code. If we access event.relatedTarget.tagName, then there will be an error.

Source: <https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave#events-mouseover-mouseout-relatedtarget>

### Does the mouse trigger an event for every element it crosses?

**Interview Answer:** No, the mousemove event triggers when the mouse moves. But that does not guarantee that every pixel leads to an event. The browser checks the mouse position from time to time. And if it notices changes then it triggers the events. That means that if the visitor is moving the mouse extremely fast then some DOM-elements may be skipped. That is good for performance, because there may be many intermediate elements. We do not really want to process in and out of each one.

Source: <https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave#skipping-elements>

### What is the difference between mouseenter/mouseleave and mouseover/mouseout?

**Interview Answer:** Events mouseenter/mouseleave are like mouseover/mouseout. They trigger when the mouse pointer enters/leaves the element. But there are two important differences. Transitions inside the element, to/from descendants, are not counted. Events mouseenter/mouseleave do not bubble.

Example:

```html
<div id="parent" onmouseenter="mouselog(event)" onmouseleave="mouselog(event)">
  parent

  <div id="child">child</div>
</div>
```

Source: <https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave#events-mouseenter-and-mouseleave>
