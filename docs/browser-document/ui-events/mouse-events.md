---
title: Mouse Events
sidebar_position: 1
---

# Mouse Events in the Browser

**UI Events: Mouse events**

**Question:** **What is the event order of a mouse left-click in the browser?**

**Interview Answer:** The event order of a mouse left-click is mousedown, mouseup, and then click for the completion of the left-click with the mouse. The left button is considered the primary button returns the event.button equaling zero.

Source: <https://javascript.info/mouse-events-basics#events-order>

**Question:** **If a user is on a MAC, what is the event property key for their OS?**

**Interview Answer:** The metaKey is the property corresponding to a key press of the CMD modifier key on Mac device.

Source: <https://javascript.info/mouse-events-basics#modifiers-shift-alt-ctrl-and-meta>

**Question:** **What is the difference between window and document relative positions in terms of the mouse?**

**Interview Answer:** In short, document-relative coordinates pageX/Y are counted from the left-upper corner of the document, and do not change when the page is scrolled, while clientX/Y are counted from the current window left-upper corner. When the page is scrolled, they change.

Source: <https://javascript.info/mouse-events-basics#modifiers-shift-alt-ctrl-and-meta>

**Question:** **Double mouse click has a side-effect where it selects that text. Is there a way to turn this behavior off?**

**Interview Answer:** Yes, you can turn off this side-effect using JavaScript or in an element attribute by setting mousedown to false.

Before...

```html
<b ondblclick="alert('Click!')" onmousedown="return false"> Double-click me </b>
```

...After

Source: <https://javascript.info/mouse-events-basics#preventing-selection-on-mousedown>

**Question:** **Can you prevent copying of text or images in a browser document?**

**Interview Answer:** Yes, if we want to disable selection to protect our page content from copy-paste by the user, then we can use oncopy event and set it too false. This don’t restrict the use from accessing the HTML source of the page, but it does make it more difficult.

```html
<div oncopy="alert('Copying forbidden!'); return false">
  Dear user, The copying is forbidden for you.
  If you know JS or HTML, then you can get everything from the page source though.
</div>
```

Source: <https://javascript.info/mouse-events-basics#preventing-selection-on-mousedown>
