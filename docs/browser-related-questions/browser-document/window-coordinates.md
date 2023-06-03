---
title: Window Coordinates
description: Window Coordinates are the coordinates of the browser window. They are relative to the top left corner of the browser window. - JavaScript Interview Questions & Answers
sidebar_position: 11
sidebar_label: Window Coordinates
keywords:
  - window coordinates
  - browser window coordinates
  - browser coordinates
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
  - window coordinates
  - browser window coordinates
  - browser coordinates
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WindowCoordSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Window Coordinates | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Coordinates**

<CloseAllAnswers />

---

### What are window coordinates in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Window coordinates are pixel measurements from the top left corner of the browser window or viewport.
  </div><br />
  </div>
</details>

---

### Can you name some properties of the window object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Some properties of the window object in JavaScript include `window.location`, `window.document`, `window.innerHeight`, `window.innerWidth`, `window.navigator`, `window.localStorage`, `window.sessionStorage`, `window.alert`, `window.setTimeout`, and `window.console`.
  </div><br />
  </div>
</details>

---

### What is the "window.pageXOffset" property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `window.pageXOffset` is a property in JavaScript that returns the number of pixels by which the document is currently scrolled horizontally from the leftmost position. It provides the horizontal scroll position of the window.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
console.log(window.pageXOffset); // Output: current horizontal scroll position

// You can use it to perform conditional actions based on the scroll position
if (window.pageXOffset > 100) {
  console.log("Scroll position is greater than 100 pixels");
} else {
  console.log("Scroll position is less than or equal to 100 pixels");
}
```

In this example, `window.pageXOffset` is logged to the console, displaying the current horizontal scroll position. The second part demonstrates how you can use it in a conditional statement to perform actions based on the scroll position.

  </div>
  </div>
</details>

---

### What is "window.pageYOffset"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `window.pageYOffset` is a property in JavaScript that returns the number of pixels by which the document is currently scrolled vertically from the topmost position. It provides the vertical scroll position of the window.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
console.log(window.pageYOffset); // Output: current vertical scroll position

// You can use it to perform conditional actions based on the scroll position
if (window.pageYOffset > 200) {
  console.log("Scroll position is greater than 200 pixels");
} else {
  console.log("Scroll position is less than or equal to 200 pixels");
}
```

In this example, `window.pageYOffset` is logged to the console, displaying the current vertical scroll position. The second part demonstrates how you can use it in a conditional statement to perform actions based on the scroll position.

  </div>
  </div>
</details>

---

### What do "window.innerWidth" and "window.innerHeight" represent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `window.innerWidth` represents the interior width of the browser window, excluding scrollbars, while `window.innerHeight` represents the interior height of the browser window, excluding scrollbars.
  </div><br />
  </div>
</details>

---

### How does JavaScript handle coordinate changes with scrolling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript handles coordinate changes with scrolling by maintaining fixed coordinates relative to the viewport, where the coordinates of elements remain constant regardless of scrolling, allowing accurate positioning and interaction with elements on the page.
  </div><br />
  </div>
</details>

---

### What happens to the window coordinates when you resize the browser window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When you resize the browser window, the window coordinates (e.g., `window.innerWidth` and `window.innerHeight`) are updated to reflect the new dimensions, allowing accurate calculation and positioning of elements based on the resized window.
  </div><br />
  </div>
</details>

---

### Is it possible to change window coordinates in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it is not possible to directly change the window coordinates in JavaScript. The window coordinates, such as window.innerWidth and window.innerHeight, are read-only properties that reflect the dimensions of the browser window.
  </div><br/>
  </div>
</details>

---

### How can you get the coordinates of a mouse event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To get the coordinates of a mouse event in JavaScript, you can use the event object's properties event.clientX for the X coordinate and event.clientY for the Y coordinate.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  
  console.log("Mouse coordinates: X = " + mouseX + ", Y = " + mouseY);
}
```

In this example, we add an event listener to the `mousemove` event on the `document`. When the mouse moves, the `handleMouseMove` function is triggered. Inside the function, we use `event.clientX` to get the X coordinate of the mouse and `event.clientY` to get the Y coordinate. Finally, we log the coordinates to the console.

  </div>
  </div>
</details>

---

### What are the limitations of using window coordinates?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Limitations of using window coordinates include difficulty in accounting for scrolling and position, lack of responsiveness to window resizing, and variation across devices with different screen sizes or resolutions.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener("click", handleClick);

function handleClick(event) {
  var screenXCoord = event.screenX;
  var screenYCoord = event.screenY;
  var clientXCoord = event.clientX;
  var clientYCoord = event.clientY;
  
  console.log("Screen coordinates: X = " + screenXCoord + ", Y = " + screenYCoord);
  console.log("Client coordinates: X = " + clientXCoord + ", Y = " + clientYCoord);
}
```

In this example, we add a click event listener to the document. When the document is clicked, the `handleClick` function is called. Inside the function, we retrieve the `screenX/Y` coordinates, which represent the position relative to the screen, and the `clientX/Y` coordinates, which represent the position relative to the viewport. We then log these coordinates to the console.

:::note
Please note that the values logged in the console will vary depending on where you click on the screen.
:::

  </div>
  </div>
</details>

---

### What is the difference between "screenX/Y" and "clientX/Y"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `screenX/Y` represent the coordinates relative to the screen, while `clientX/Y` represent the coordinates relative to the browser's client area (viewport). `clientX/Y` take into account scrolling and exclude window decorations, while `screenX/Y` do not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener("click", handleClick);

function handleClick(event) {
  var screenXCoord = event.screenX;
  var screenYCoord = event.screenY;
  var clientXCoord = event.clientX;
  var clientYCoord = event.clientY;
  
  console.log("Screen coordinates: X = " + screenXCoord + ", Y = " + screenYCoord);
  console.log("Client coordinates: X = " + clientXCoord + ", Y = " + clientYCoord);
}
```

In this example, we add a click event listener to the document. When the document is clicked, the `handleClick` function is called. Inside the function, we retrieve the `screenX/Y` coordinates, which represent the position relative to the screen, and the `clientX/Y` coordinates, which represent the position relative to the viewport. We then log these coordinates to the console.

:::note
Please note that the values logged in the console will vary depending on where you click on the screen.
:::

  </div>
  </div>
</details>

---

### What is "window.scrollX"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `window.scrollX` (alias for `window.pageXOffset`) is a property in JavaScript that returns the number of pixels by which the document is currently scrolled horizontally from the leftmost position. It provides the horizontal scroll position of the window.
  </div><br />
  </div>
</details>

---

### What is "window.scrollY"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `window.scrollY` (alias for `window.pageYOffset`) is a property in JavaScript that returns the number of pixels by which the document is currently scrolled vertically from the topmost position. It provides the vertical scroll position of the window.
  </div><br />
  </div>
</details>

---

### How can you scroll the window to a specific position using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To scroll the window to a specific position using JavaScript, you can use the `window.scrollTo(x, y)` method, where `x` represents the horizontal scroll position and `y` represents the vertical scroll position.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Scroll to coordinates (500, 300)
window.scrollTo(500, 300);
```

In this example, the `window.scrollTo()` method is used to scroll the window to the coordinates (500, 300). The `500` represents the horizontal scroll position, and the `300` represents the vertical scroll position. After executing this code, the window will be scrolled to the specified position.

  </div>
  </div>
</details>

---

### What are the two coordinate systems you should be familiar with in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two main coordinate systems in JavaScript are the Window Coordinates (relative to the browser window) and the Document Coordinates (relative to the entire document).
    </div><br/>
  <div><strong>Technical Response:</strong> Most JavaScript methods work with one of two coordinate systems: relative to the window and document coordinate systems. We indicate these coordinates as clientX/clientY relative to the window — similar to position:fixed, derived from the window top/left edge. We identify them as pageX/pageY relative to the document — analogous to position:absolute in the document root, derived from the document top/left edge. When the page scrolls to the bottom, these coordinates equal each other, thus the top/left corner of the window matches the top/left corner of the content.However, as the document moves, the window-relative coordinates of elements change as they travel across the window, but the document-relative coordinates remain constant.
    </div>
  </div>
</details>

---

### Can you explain the function of the Element.getBoundingClientRect() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport, providing left, top, right, bottom, width, and height properties.</div><br />
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

### Why are derived attributes required and why do top/left exist if x/y exists?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Derived attributes like top/left provide compatibility with older systems. Although x/y provides similar information, top/left continues to exist for compatibility and to support various CSS-related calculations.</div><br />
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

### What does the method document.elementFromPoint(x,y) do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `document.elementFromPoint(x,y)` method in JavaScript returns the topmost DOM element at the specified coordinates (x, y) relative to the document, allowing interaction and manipulation of that element.</div><br />
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
  <div><strong>Interview Response:</strong> Document-relative coordinates begin at the top-left corner of the document rather than the window. Window coordinates are equivalent to position:fixed in CSS, but document coordinates are equivalent to position:absolute on top.
    </div>
  </div>
</details>

---
