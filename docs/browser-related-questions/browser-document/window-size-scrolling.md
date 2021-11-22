---
title: Window Sizes / Scrolling
sidebar_position: 10
---

# Window Sizes / Scrolling

**Browser Document: Window Sizes / Scrolling**

<head>
  <title>Window Sizes / Scrolling - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How do we find the width and height of the browser window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To get window width and height, we can use the clientWidth/clientHeight of document.documentElement. Using this approach is the correct way to get the width and height of the window, not window.innerWidth/innerHeight.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// full window width
alert(window.innerWidth);

// window width minus the scrollbar
alert(document.documentElement.clientWidth);
```

  </div>
  </div>
</details>

---

### Why shouldn’t we use innerWidth/innerHeight to get the width and height of the window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Browsers also support properties like window.innerWidth/innerHeight. They look like what we want, but they are not. If there exists a scrollbar, and it occupies some space, clientWidth/clientHeight provide the width/height without it (subtract it). In other words, they return the width/height of the visible part of the document, available for the content. The window.innerWidth/innerHeight properties includes the scrollbar in their computation. In most cases, we need the available window width in order to draw or position something within scrollbars (if there are any), so we should use documentElement.clientHeight/clientWidth.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// full window width
alert(window.innerWidth); // includes the scrollbar size in the return value

// window width minus the scrollbar
alert(document.documentElement.clientWidth);
```

  </div>
  </div>
</details>

---

### Is there a reason that we should always use `<!DOCTYPE HTML>` in our HTML, when using geometry properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, top-level geometry properties may work a little bit differently when there is no &#8249;!DOCTYPE HTML&#8250; in HTML. Odd things are possible. In modern HTML we should always write DOCTYPE.
    </div>
  </div>
</details>

---

### How do we get the full width and height of the document, including the scrolled-out part?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Theoretically, as the root document element is document.documentElement, and it encloses all the content, we could measure the document’s full size as document.documentElement.scrollWidth/scrollHeight. But on that element, for the whole page, these properties do not work as intended. In Chrome/Safari/Opera, if there is no scroll, then documentElement.scrollHeight may be even less than documentElement.clientHeight! Weird, right? To reliably obtain the full document height, we should take the maximum of these properties.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

alert('Full document height, with scrolled out part: ' + scrollHeight);
```

  </div>
  </div>
</details>

---

### How do we get the current scroll position top/left of the document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The current scroll is available in the special properties, window.pageXOffset/pageYOffset, which are read only. This ensures that we get the current scroll state in all browsers.</div><br />
  <div><strong>Technical Response:</strong> DOM elements have their current scroll state in their scrollLeft/scrollTop properties. For document scroll, document.documentElement.scrollLeft/scrollTop works in most browsers, except older WebKit-based ones, like Safari (bug 5991), where we should use document.body instead of document.documentElement. Luckily, we don’t have to remember these peculiarities at all, because the scroll is available in the special properties, window.pageXOffset/pageYOffset, which are read only.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Current scroll from the top: ' + window.pageYOffset);
alert('Current scroll from the left: ' + window.pageXOffset);
```

  </div>
  </div>
</details>

---

### What happens when we try to scroll the document when it is not fully built?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we try to scroll the page with a script in &#8249;head&#8250;, it will not work, because the DOM is not fully built. It is common to place these types of scripts at the bottom of the document or in a deferred script.</div><br />
  <div><strong>Technical Response:</strong> To scroll the page with JavaScript, its DOM must be fully built. For instance, if we try to scroll the page with a script in &#8249;head&#8250;, it will not work, because the DOM is not fully built. It is common to place these types of scripts at the bottom of the document or in a deferred script. The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build the DOM. The script loads “in the background”, and then runs when the DOM is fully built.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>...content before script...</p>

<script
  defer
  src="https://javascript.info/article/script-async-defer/long.js?speed=1"
></script>

<!-- visible immediately -->
<p>...content after script...</p>
```

  </div>
  </div>
</details>

---

### How do we scroll the page using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The simplest solution is to use the special methods window.scrollBy(x,y) and window.scrollTo(pageX,pageY). These methods work for all browsers the same way.</div><br />
  <div><strong>Technical Response:</strong> Regular elements can be scrolled by changing scrollTop/scrollLeft. We can do the same for the page using document.documentElement.scrollTop/scrollLeft (except Safari, where document.body.scrollTop/Left should be used instead). Alternatively, there’s a simpler, universal solution: special methods window.scrollBy(x,y) and window.scrollTo(pageX,pageY). These methods work for all browsers the same way.
  </div>
  </div>
</details>

---

### Explain the function and syntax of the scrollBy method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method scrollBy(x,y) scrolls the page relative to its current position. For instance, scrollBy(0,10) scrolls the page 10px down. It uses two non-optional parameters including the x and y coordinates. There is an additional parameter option, ScrollToOptions, that act access additional left, top, and behavior properties in a dictionary object.
    </div><br />
  <div><strong className="codeExample">Syntax:</strong><br /><br />

  <div></div>

```js
window.scrollBy(x - coord, y - coord);
window.scrollBy(options);
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// To scroll down one page:
window.scrollBy(0, window.innerHeight);

// Using scrollBy Options object
window.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth',
});
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the scrollTo method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method scrollTo(pageX,pageY) scrolls the page to absolute coordinates, so that the top-left corner of the visible part has coordinates (pageX, pageY) relative to the document’s top-left corner.
    </div><br />
  <div><strong className="codeExample">Syntax:</strong><br /><br />

  <div></div>

```js
window.scrollTo(x - coord, y - coord);
window.scrollTo(options);
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using scrollTo Options object
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth',
});
```

:::note
It is like setting scrollLeft/scrollTop. To scroll to the very beginning, we can use scrollTo(0,0). These methods work for all browsers the same way. Window.scrollTo() scrolls to a particular set of coordinates in the document. The scrollTo() method of the Element interface scrolls to a particular set of coordinates inside a given element.
:::

  </div>
  </div>
</details>

---

### Explain the function and syntax of the scrollIntoView method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The call to elem.scrollIntoView(top) scrolls the page to make elem visible. It has one boolean argument. If top=true (that is the default), then the page will be scrolled to make elem appear on the top of the window. The upper edge of the element will be aligned with the window top. If top=false, then the page scrolls to make elem appear at the bottom. The bottom edge of the element will be aligned with the window bottom.
    </div>
  </div>
</details>

---

### Is there a way to forbid or freeze document scrolling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To make the document unscrollable, it’s enough to set document.body.style.overflow = "hidden". The page will “freeze” at its current scroll position. We can use the same technique to freeze the scroll for other elements, not just for document.body. The drawback of the method is that the scrollbar disappears affecting the document appearance.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Freeze the page
document.body.style.overflow = 'hidden';

// Unfreeze the page
document.body.style.overflow = '';
```

:::note
If it occupied some space, then that space is now free and the content “jumps” to fill it. That looks a bit odd, but can be worked around if we compare clientWidth before and after the freeze. If it increased (the scrollbar disappeared), then add padding to document.body in place of the scrollbar to keep the content width the same.
:::

  </div>
  </div>
</details>

---
