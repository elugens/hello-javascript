---
title: Coordinates
sidebar_position: 11
---

# Coordinates

**Document: Coordinates**

**Question:** **To move elements around we should be familiar with coordinates. What are the two coordinate systems that you should be familiar with?**

**Interview Answer:** Most JavaScript methods deal with one of two coordinate systems including the relative to the window and document coordinate systems. Relative to the window – similar to position:fixed, calculated from the window top/left edge, we denote these coordinates as clientX/clientY. Relative to the document – similar to position:absolute in the document root, calculated from the document top/left edge, we denote them as pageX/pageY. When the page is scrolled to the very beginning, so that the top/left corner of the window is exactly the document top/left corner, these coordinates equal each other. But after the document shifts, window-relative coordinates of elements change, as elements move across the window, while document-relative coordinates remain the same.

Sources: <https://javascript.info/coordinates>

**Question:** **Explain the function and syntax of the element getBoundingClientRect method?**

**Interview Answer:** The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width.

**Note:** If box-sizing: border-box is set for the element this would be directly equal to its width or height. The returned value can be thought of as the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element.

**Technical Answer:** The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport. The width and height properties of the DOMRect object returned by the method include the padding and border-width, not only the content width/height. In the standard box model, this would be equal to the width or height property of the element + padding + border-width. But if box-sizing: border-box is set for the element this would be directly equal to its width or height. The returned value can be thought of as the union of the rectangles returned by getClientRects() for the element, i.e., the CSS border-boxes associated with the element.

**Syntax:** domRect = element.getBoundingClientRect();

```html
<head>
  <style>
    div  {
      width: 400px;

      height: 200px;

      padding: 20px;

      margin: 50px auto;

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

        para.textContent = `${key} : ${rect[key]}`;

        document.body.appendChild(para);
      }
    }
  </script>
</body>

/* RETURNED VALUES: x : 146.5454559326172 y : 50 width : 440 // includes the
style width of 400px and the padding 20px times two height : 240 top : 50 right
: 586.5454559326172 bottom : 290 left : 146.5454559326172 */
```

Sources: <https://javascript.info/coordinates#element-coordinates-getboundingclientrect>

**Question:** **Why derived properties are needed? Why does top/left exist if there’s x/y?**

**Interview Answer:** Mathematically, a rectangle is uniquely defined with its starting point (x,y) and the direction vector (width,height). So, the additional derived properties top/left are for convenience.

**Technical Answer:** Mathematically, a rectangle is uniquely defined with its starting point (x,y) and the direction vector (width,height). So, the additional derived properties are for convenience. Technically it is possible for width/height to be negative, that allows for “directed” rectangle, e.g., to represent mouse selection with properly marked start and end. Negative width/height values mean that the rectangle starts at its bottom-right corner and then “grows” left-upwards, left/top do not equal x/y in such case. In practice though, elem.getBoundingClientRect() always returns positive width/height, here we mention negative width/height only for you to understand why these seemingly duplicate properties are not actually duplicates.

Sources: <https://javascript.info/coordinates#element-coordinates-getboundingclientrect>

**Question:** **Does Internet Explorer provide support for x/y coordinates?**

**Interview Answer:** No, Internet Explorer does not support x/y properties for historical reasons. So we can either make a polyfill (add getters in DomRect.prototype) or just use top/left, as they are always the same as x/y for positive width/height, in particular in the result of elem.getBoundingClientRect().

Sources: <https://javascript.info/coordinates#element-coordinates-getboundingclientrect>

**Question:** **What does the method elementFromPoint(x,y) do in JavaScript?**

**Interview Answer:** The call to document.elementFromPoint(x, y) returns the most nested element at window coordinates (x, y).

**Technical Answer:** The elementFromPoint() method, available on the Document object, returns the topmost Element at the specified coordinates (relative to the viewport). If the element at the specified point belongs to another document (for example, the document of an `<iframe>`), that document's parent element is returned (the `<iframe>` itself). If the element at the given point is anonymous or XBL generated content, such as a textbox's scroll bars, then the first non-anonymous ancestor element (for example, the textbox) is returned.

Syntax: let elem = document.elementFromPoint(x, y);

Example:

```js
let centerX = document.documentElement.clientWidth / 2;

let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = 'red';

alert(elem.tagName);
```

Sources: <https://javascript.info/coordinates#elementFromPoint>

**Question:** **For out-of-window coordinates, what does the elementFromPoint return?**

**Interview Answer:** The method document.elementFromPoint(x,y) only works if (x,y) are inside the visible area. If any of the coordinates is negative or exceeds the window width/height, then it returns null.

Example:

```js
let elem = document.elementFromPoint(x, y);

// if the coordinates happen to be out of the window, then elem = null

elem.style.background = ''; // Error!
```

Sources: <https://javascript.info/coordinates#elementFromPoint>

**Question:** **Where do document relative coordinates start?**

**Interview Answer:** Document-relative coordinates start from the upper-left corner of the document, not the window. In CSS, window coordinates correspond to position:fixed, while document coordinates are similar to position: absolute on top.

Sources: <https://javascript.info/coordinates#elementFromPoint>
