---
title: Element Size / Scrolling
sidebar_position: 9
---

# Element Size / Scrolling

**Browser Document: Element Size / Scrolling**

<head>
  <title>Element Size / Scrolling - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Why should you take the scrollbar into account when assessing content width?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the scrollbar is 16px wide then only 300 - 16 = 284px remains, and we should take it into account. Some browsers (not all) reserve the space for it by taking it from the content. Our content may look off or overlapping if we do not account for the scrollbar width.
    </div><br /><br />

:::note
The width may vary between devices and browsers.
:::

  </div>
</details>

---

### Explain what the offsetParent is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The HTMLElement.offsetParent read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element.</div><br />
  <div><strong>Technical Response:</strong> The HTMLElement.offsetParent read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element. If there is no positioned ancestor element, the nearest ancestor td, th, table will be returned, or the body if there are no ancestor table elements either. Properties offsetLeft/offsetTop provide x/y coordinates relative to offsetParent upper-left corner. There are several occasions when offsetParent is null including for not shown elements (display:none or not in the document), &#8249;body&#8250; and &#8249;html&#8250;, and elements with `position:fixed`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<main style="position: relative" id="main">
  <article>
    <div id="example" style="position: absolute; left: 180px; top: 180px">
      ...
    </div>
  </article>
</main>

<script>
  alert(example.offsetParent.id); // main
  alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
  alert(example.offsetTop); // 180
</script>
```

  </div>
  </div>
</details>

---

### Explain what the offsetWidth is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer.</div><br />
  <div><strong>Technical Response:</strong> The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer. Typically, offsetWidth is a measurement in pixels of the element's CSS width, including any borders, padding, and vertical scrollbars (if rendered). It does not include the width of pseudo-elements such as ::before or ::after. If the element is hidden (for example, by setting style.display on the element or one of its ancestors to "none"), then 0 is returned. offsetWidth and Height reflect full size of the element itself including the borders.
  </div><br />
  <strong>Syntax: </strong> let intElemOffsetWidth = element.offsetWidth;<br /><br />
  </div>
</details>

---

### Explain what the offsetHeight is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer.</div><br />
  <div><strong>Technical Response:</strong> The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer. Typically, offsetHeight is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered). It does not include the height of pseudo-elements such as ::before or ::after. For the document body object, the measurement includes total linear content height instead of the element's CSS height. Floated elements extending below other linear content are ignored. If the element is hidden (for example, by setting style.display on the element or one of its ancestors to "none"), then 0 is returned. offsetWidth and Height reflect full size of the element itself including the borders.
  </div><br />
  <strong>Syntax: </strong> let intElemOffsetHeight = element.offsetHeight;<br /><br />
  </div>
</details>

---

### How do geometry properties work on elements when they are zero or null?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Geometry properties are calculated only for displayed elements. If an element (or any of its ancestors) has display:none or is not in the document, then all geometry properties are zero (or null for offsetParent).</div><br />
  <div><strong>Technical Response:</strong> Geometry properties are calculated only for displayed elements. If an element (or any of its ancestors) has display:none or is not in the document, then all geometry properties are zero (or null for offsetParent). For example, offsetParent is null, and offsetWidth, offsetHeight are 0 when we created an element, but haven’t inserted it into the document yet, or it (or it’s ancestor) has display:none. We can check if an element is hidden by seeing if the offsetWidth and offsetHeight is null and returns true in check.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function isHidden(elem) {
  return !elem.offsetWidth && !elem.offsetHeight;
}
```

  </div>
  </div>
</details>

---

### Explain what the clientTop is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inside the element we have the borders. The width of the top border of an element in pixels. It is a read-only, integer property of element.</div><br />
  <div><strong>Technical Response:</strong> Inside the element we have the borders. The width of the top border of an element in pixels. It is a read-only, integer property of element. As it happens, all that lies between the two locations (offsetTop and client area top) is the element's border. This is because the offsetTop indicates the location of the top of the border (not the margin) while the client area starts immediately below the border, (client area includes padding.) Therefore, the clientTop value will always equal the integer portion of the .getComputedStyle() value for "border-top-width". (Actually might be Math.round(parseFloat()).) For example, if the computed "border-top-width" is zero, then clientTop is also zero. These properties are not border width/height, but rather relative coordinates of the inner side from the outer side.
  </div><br />
  <strong>Syntax: </strong> let top = element.clientTop;<br /><br />
  </div>
</details>

---

### Explain what the clientLeft is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inside the element we have the borders. The width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right–to–left and if there is an overflow causing a left vertical scrollbar to be rendered. clientLeft does not include the left margin or the left padding. clientLeft is read-only.
    </div><br />
  <strong>Syntax: </strong> let left = element.clientLeft;<br /><br />

:::note
These properties are not border width/height, but rather relative coordinates of the inner side from the outer side. This becomes visible when the scrollbar is on the left. RTL (right to left) languages like Hebrew or Arabic pushes the scrollbar to the left side as part of its specification.
:::

  </div>
</details>

---

### Explain what the clientWidth is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.clientWidth property is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels. It includes padding but excludes borders, margins, and vertical scrollbars (if present). When clientWidth is used on the root element (the &#8249;html&#8250; element), (or on &#8249;body&#8250; if the document is in quirks mode), the viewport's width (excluding any scrollbar) is returned.
    </div><br />
  <strong>Syntax: </strong> let intElemClientWidth = element.clientWidth;<br /><br />
  </div>
</details>

---

### Explain what the clientHeight is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present). clientHeight can be calculated as: CSS height + CSS padding - height of horizontal scrollbar (if present). When clientHeight is used on the root element (the &#8249;html&#8250; element), (or on &#8249;body&#8250; if the document is in quirks mode), the viewport's height (excluding any scrollbar) is returned.
    </div><br />
  <strong>Syntax: </strong> let intElemClientHeight = element.clientHeight;<br /><br />
  </div>
</details>

---

### Explain what the scrollWidth is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The element.scrollWidth read-only property is a measurement of the width of an element's content, including content not visible on the screen due to overflow. The scrollWidth value is equal to the minimum width the element would require to fit all the content in the viewport without using a horizontal scrollbar.
    </div><br />
  <strong>Syntax: </strong> let xScrollWidth = element.scrollWidth<br /><br />

:::note
The width is measured in the same way as clientWidth: it includes the element's padding, but not its border, margin, or vertical scrollbar (if present). It can also include the width of pseudo-elements such as ::before or ::after. If the element's content can fit without a need for horizontal scrollbar, its scrollWidth is equal to clientWidth.
:::

  </div>
</details>

---

### Explain what the scrollLeft is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled from its left edge. If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position (at the start of the scrolled content), and then increasingly negative as you scroll towards the end of the content. On systems using display scaling, scrollLeft may give you a decimal value.
    </div><br />
  <strong>Syntax: </strong> let sLeft = element.scrollLeft;<br /><br />
  </div>
</details>

---

### Explain what the scrollTop is in relation to an HTML element.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.scrollTop property gets or sets the number of pixels that an element's content is scrolled vertically. An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content. When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0. When scrollTop is used on the root element (the &#8249;html&#8250; element), the scrollY of the window is returned.
    </div><br />
  <strong>Syntax: </strong> let intElemScrollTop = someElement.scrollTop;<br /><br />
  </div>
</details>

---

### Why should we use geometry properties vs taking the width/height from CSS using getComputedStyle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> First, CSS width/height depend on another property: box-sizing that defines “what is” CSS width and height. A change in box-sizing for CSS purposes may break such JavaScript. Second, CSS width/height may be set to auto. From the CSS standpoint, width:auto is perfectly normal, but in JavaScript we need an exact size in pixels that we can use in calculations. So in this case CSS width is useless. And there is one more reason: a scrollbar. Sometimes the code that works fine without a scrollbar becomes buggy with it, because a scrollbar takes the space from the content in some browsers. So, the real width available for the content is less than CSS width. And clientWidth/clientHeight take that into account. Another issue is browser inconsistencies with returned values. Some browsers like firefox do not account for the scrollbar in their calculations for the width of an element.
    </div><br />

:::note
Please note that the described difference is only about reading getComputedStyle(...) width from JavaScript, visually everything is correct.
:::

  </div>
</details>

---
