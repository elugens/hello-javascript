---
title: Window Coordinates
description: Window Coordinates are the coordinates of the browser window. They are relative to the top left corner of the browser window. - JavaScript Interview Questions & Answers
sidebar_position: 11
sidebar_label: Window Coordinates
---

**Browser Document: Coordinates**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### To be able to move components, we must first comprehend coordinates. What are the two coordinate systems you should be familiar?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Most JavaScript methods work with one of two coordinate systems: relative to the window and document coordinate systems. We indicate these coordinates as clientX/clientY relative to the window — similar to position:fixed, derived from the window top/left edge. We identify them as pageX/pageY relative to the document — analogous to position:absolute in the document root, derived from the document top/left edge. When the page scrolls to the bottom, these coordinates equal each other, thus the top/left corner of the window matches the top/left corner of the content.However, as the document moves, the window-relative coordinates of elements change as they travel across the window, but the document-relative coordinates remain constant.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the element getBoundingClientRect method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.getBoundingClientRect() function produces a DOMRect object with information about an element's size and location in relation to the viewport. The result returned is a DOMRect object, which is the smallest rectangle that contains the whole element, including padding and border-width.</div><br />
  <div><strong>Technical Response:</strong> The Element.getBoundingClientRect() function produces a DOMRect object with information about an element's size and location in relation to the viewport. The result returned is a DOMRect object, which is the smallest rectangle that contains the whole element, including padding and border-width. The attributes left, top, right, bottom, x, y, width, and height indicate the total location and size of the rectangle in pixels. Other than width and height, all attributes are relative to the top-left corner of the viewport. The width and height attributes of the DOMRect object returned by the method include not only the content width/height but also the padding and border-width. The standard box-model would be the element's width or height + padding + border-width. However, if the element has box-sizing: border-box set, this will be directly equal to its width or height. The returned result is the union of the rectangles returned by getClientRects() for the element, i.e. the CSS border-boxes for the element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> domRect = element.getBoundingClientRect();<br /><br />

  <div></div>

```html
<head>
  <style>
    div {
      width: 400px;
      height: 200px;
      padding: 20px;
      margin: 50px auto;
      background: purple;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    let elem = document.querySelector('div');
    let rect = elem.getBoundingClientRect();
    for (var key in rect) {
      if (typeof rect[key] !== 'function') {
        let para = document.createElement('p');
        para.textContent = `${key} : ${rect[key]}`;
        document.body.appendChild(para);
      }
    }
  </script>
</body>

<!-- 
  RETURNED VALUES:
  x : 146.5454559326172
  y : 50 
  width : 440 includes the style width of 400px and the padding 20px times two
  height : 240
  top : 50
  right : 586.5454559326172
  bottom : 290
  left : 146.5454559326172
-->
```

:::note
If box-sizing: border-box is set for the element this would be directly equal to its width or height. The returned result is the union of the rectangles returned by getClientRects() for the element, i.e. the CSS border-boxes connected with the element.
:::

  </div>
  </div>
</details>

---

### Why are derived attributes required? Why do top/left exist if x/y exists?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A rectangle gets mathematically defined by its beginning point (x,y) and direction vector (width, height). As a result, the extra derived properties top/left gets provided for convenience.</div><br />
  <div><strong>Technical Response:</strong> A rectangle gets mathematically defined by its beginning point (x,y) and direction vector (width, height). As a result, the extra derived properties get provided as a convenience. Technically, width/height can be negative, allowing for a "directed" rectangle, such as a mouse selection with correctly indicated start and end points. Negative width/height values indicate that the rectangle begins at the bottom-right corner and subsequently "grows" leftwards; in this situation, left/top do not equal x/y. However, elem.getBoundingClientRect() always returns positive width/height; we mention negative width/height to explain why these seemingly redundant values do not end in duplication.
  </div>
  </div>
</details>

---

### Does Internet Explorer provide support for x/y coordinates?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For historical reasons, Internet Explorer does not support x/y attributes. So we can either create a polyfill (add getters to DomRect.prototype) or just use top/left, which remain the same as x/y for positive width/height, especially in the result elem. getBoundingClientRect().
    </div>
  </div>
</details>

---

### What does the method elementFromPoint(x,y) do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The document.elementFromPoint(x, y) method returns the most nested element at the window coordinates (x, y).</div><br />
  <div><strong>Technical Response:</strong> The Document object's elementFromPoint() function returns the topmost Element at the supplied coordinates (relative to the viewport). If the element at the provided location belongs to another document (for example, the document of an &#8249;iframe&#8250;), the parent element of that document (the &#8249;iframe&#8250; itself) is returned. If the element at the provided location contains anonymous or XBL produced content, such as scroll bars in a textbox, the first non-anonymous ancestral element (the textbox) is returned.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let elem = document.elementFromPoint(x, y); <br /><br />

  <div></div>

```js
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = 'red';
alert(elem.tagName);
```

  </div>
  </div>
</details>

---

### For out-of-window coordinates, what does the elementFromPoint return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method document. elementFromPoint(x,y) is only useful if (x,y) are within the viewable region. It returns null if any of the coordinates is negative or exceeds the window width/height.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let elem = document.elementFromPoint(x, y);
// if the coordinates happen to be out of the window, then elem = null
elem.style.background = ''; // Error!
```

  </div>
  </div>
</details>

---

### Where do document relative coordinates start?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Document-relative coordinates begin at the upper-left corner of the document rather than the window. Window coordinates are equivalent to position:fixed in CSS, but document coordinates are equivalent to position:absolute on top.
    </div>
  </div>
</details>

---
