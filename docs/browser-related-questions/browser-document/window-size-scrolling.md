---
title: Window Sizes / Scrolling / Resizing
description: Window Sizes / Scrolling / Resizing - Browsers also support properties like window.innerWidth/innerHeight. - JavaScript Interview Questions & Answers
sidebar_position: 10
sidebar_label: Window Sizes / Scrolling / Resizing
keywords:
  - window sizes
  - window scrolling
  - window resizing
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
  - window sizes
  - window scrolling
  - window resizing
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WindowSizeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Window Sizes / Scrolling / Resizing | HelloJavaScript.info</title>
</head>

**Browser Document: Window Sizes / Scrolling**

<CloseAllAnswers />

---

### How do we find the width and height of the browser window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To extact the window width and height, we can use the clientWidth/clientHeight of document.documentElement. Using this approach is the correct way to extract the width and height of the window, not window.innerWidth/innerHeight.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// full window width
console.log(window.innerWidth);

// window width minus the scrollbar
console.log(document.documentElement.clientWidth);
```

  </div>
  </div>
</details>

---

### Why shouldn't we use innerWidth/innerHeight to retrieve the window's width and height?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Browsers also support properties like window.innerWidth/innerHeight. They look like what we want, but they are not. If a scrollbar exists and takes up some space, clientWidth/clientHeight delivers the width/height without it (subtracts it). In other words, they return the width and height of the visible portion of the page that is accessible for content. The window.innerWidth/innerHeight properties include the scrollbar in their computation. Most of the time, we require the available window width. We should utilize documentElement.clientHeight/clientWidth to draw or place things within the scrollbar (if any).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// full window width
console.log(window.innerWidth); // includes the scrollbar size in the return value

// window width minus the scrollbar
console.log(document.documentElement.clientWidth);
```

  </div>
  </div>
</details>

---

### Is there a reason that we should always use `<!DOCTYPE HTML>` in our HTML, when using geometry properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When there is no &#8249;!DOCTYPE HTML&#8250; in HTML, top-level geometric properties may behave outside their intended behavior. Strange things are possible. We should alwaYs use !DOCTYPE HTML in modern web application development.
    </div>
  </div>
</details>

---

### How do we extract the entire width and height of the document, including the scrolled-out part?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Theoretically, because the root document element document.documentElement and it encloses all of the information, we could measure the total size of the document as document.documentElement.scrollWidth/scrollHeight. However, these attributes do not operate as intended on that element throughout the entire page. If there is no scroll in Chrome/Safari/Opera, documentElement.scrollHeight may be smaller than documentElement.clientHeight! Isn't it strange? To acquire the complete document height with confidence, we should take the greatest of these properties.
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

console.log('Full document height, with scrolled out part: ' + scrollHeight);
```

  </div>
  </div>
</details>

---

### How do we access the current scroll position top/left of the document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The current scroll is available in the special properties, window.pageXOffset/pageYOffset, which are read-only. This state ensures that we extract the current scroll state in all browsers.</div><br />
  <div><strong>Technical Response:</strong> DOM elements' scrollLeft/scrollTop attributes contain the current scroll state. document.documentElement is used for document scrolling. Most browsers support scrollLeft/scrollTop, except older WebKit-based browsers like Safari (bug 5991), where we need to use document.body instead of document.documentElement. Fortunately, we don't have to remember these quirks because the scroll gets provided in the read-only special properties window.pageXOffset/pageYOffset.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('Current scroll from the top: ' + window.pageYOffset);
console.log('Current scroll from the left: ' + window.pageXOffset);
```

  </div>
  </div>
</details>

---

### What happens if we try to scroll the document when the DOM does is not fully constructed?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we try to scroll the page with a script in &#8249;head&#8250;, it fails because the DOM is not fully built. It is common to place these scripts at the bottom of the document or in a deferred script.</div><br />
  <div><strong>Technical Response:</strong> To scroll the page with JavaScript, the DOM must be fully constructed. For example, attempting to scroll the page with a script in the &#8249;head&#8250; fails because the DOM is not fully built. It is common to place these scripts at the bottom of the document or in a deferred script. The defer property instructs the browser not to wait for the script to complete. Instead, the browser continues processing the HTML and building the DOM. The script loads "in the background" and starts when the DOM fully builds.
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
  <div><strong>Interview Response:</strong> The simplest solution is to use the special methods window.scrollBy(x,y) and window.scrollTo(pageX,pageY). These methods function in the same way for all browsers.</div><br />
  <div><strong>Technical Response:</strong> Regular items can be scrolled by adjusting the scrollTop/scrollLeft values. We implement this for the page by using document.documentElement.scrollTop/scrollLeft (except in Safari, where we should use document.body.scrollTop/Left instead). Another option is to use the specific methods window.scrollBy(x,y) and window.scrollTo(x,y) (pageX,pageY). These approaches function in the same way for all browsers.
  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the scrollBy method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scrollBy(x,y) method scrolls the page related to its current location. ScrollBy(0,10), for example, scrolls the page 10px down. It uses two non-optional parameters, including the x and y coordinates. An additional parameter option, ScrollToOptions, accesses left, top, and behavior properties in a dictionary object.
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

### Can you explain the function and syntax of the scrollTo method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scrollTo(pageX,pageY) method scrolls the page to absolute coordinates, such that the top-left corner of the viewable area has coordinates (pageX, pageY) relative to the top-left corner of the document.
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
It is like setting scrollLeft/scrollTop. To scroll to the beginning, we can use scrollTo(0,0). These methods function in the same way for all browsers. Window.scrollTo() moves the cursor to a specific set of coordinates in the document. The scrollTo() method of the element interface scrolls to a particular set of coordinates inside a given element.
:::

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the scrollIntoView method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The call to elem. scrollIntoView(top) scrolls the page to reveal elem. There is just one boolean parameter. If top=true (that is the default), the page scrolls to make elem appear on the top of the window. The upper edge of the element aligns with the window top. If top=false, the page scrolls to make elem appear at the bottom. The bottom edge of the element aligns with the window bottom.
    </div>
  </div>
</details>

---

### Is there a way to forbid or freeze document scrolling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It’s enough to set document.body.style.overflow = "hidden" to make the document un-scrollable. The page will "freeze" when it is currently scrolling. The same technique stops the scroll for additional components, not just for document.body. The disadvantage of this strategy is that the scrollbar vanishes, impacting the presentation of the document.
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
If it occupied some space, that space is now free, and the content “jumps” to fill it. That looks odd, but if we compare clientWidth before and after the freeze, there is a workaround. If it increased (the scrollbar disappeared), add padding to document.body in place of the scrollbar to keep the content width the same.
:::

  </div>
  </div>
</details>

---
