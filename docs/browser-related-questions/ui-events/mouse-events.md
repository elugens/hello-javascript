---
title: Mouse Events
sidebar_position: 1
---

# Mouse Events

**UI Events: Mouse Events**

<head>
  <title>Mouse Events - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the event order of a mouse left-click in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event order of a mouse left-click is mousedown, mouseup, and then click for the completion of the left-click with the mouse. The left button is considered the primary button returns the event.button equaling zero.
    </div>
  </div>
</details>

---

### If a user is on a MAC, what is the event property key for their OS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The metaKey is the property corresponding to a key press of the CMD modifier key on Mac device.
    </div>
  </div>
</details>

---

### What is the difference between window and document relative positions in terms of the mouse?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In short, document-relative coordinates pageX/Y are counted from the left-upper corner of the document, and do not change when the page is scrolled, while clientX/Y are counted from the current window left-upper corner. When the page is scrolled, they change.
    </div>
  </div>
</details>

---

### Double mouse click has a side-effect where it selects that text. Is there a way to turn this behavior off?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can turn off this side-effect using JavaScript or in an element attribute by setting mousedown to false.
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

### Can you prevent copying of text or images in a HTML document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if we want to disable selection to protect our page content from copy-paste by the user, then we can use oncopy event and set it too false. This don’t restrict the use from accessing the HTML source of the page, but it does make it more difficult.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div oncopy="alert('Copying forbidden!'); return false">
  Dear user, The copying is forbidden for you. If you know JS or HTML, then you
  can get everything from the page source though.
</div>
```

  </div>
  </div>
</details>

---
