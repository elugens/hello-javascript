---
title: Scrolling Events
description: Scrolling Events in JavaScript are events that occur when a user interacts with a scrollbar. They are triggered by the user's scrollbar. - JavaScript Interview Questions & Answers
sidebar_position: 6
sidebar_label: Scrolling Events
keywords:
  - scrolling events
  - scroll events
  - user interaction
  - functions
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
  - scrolling events
  - scroll events
  - user interaction
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ScrollingEventSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Scrolling Events | JavaScript Frontend Phone Interview</title>
</head>

**UI Events: Scrolling Events**

<CloseAllAnswers />

---

### What is a scroll event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scroll event in JavaScript is triggered when the user scrolls up or down on a web page or an element. It's often used to implement dynamic loading or reveal animations as a user scrolls.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example in JavaScript. This code logs a message when the user scrolls.

```javascript
window.addEventListener('scroll', function() {
    console.log('You just scrolled!');
});
```

Please replace `console.log` with a more user-friendly function in a real application, as multiple scrolls could lead to many logs.

  </div>
  </div>
</details>

---

### When are scroll events typically used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Scroll events are typically used to detect and respond to scrollable element interactions, such as scrolling a webpage or a container. They allow for dynamic updates, animations, lazy loading, or implementing custom scrolling behaviors.
  </div>
  </div>
</details>

---

### What is 'onscroll' in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'onscroll' is a built-in JavaScript event handler that executes a script when a user scrolls up or down on a webpage or an element. It's an alternative way to attach a scroll event.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that shows how to use the 'onscroll' event in JavaScript. This code changes the background color of the body when the user scrolls.

```javascript
window.onscroll = function() {
    document.body.style.backgroundColor = "blue";
};
```

Remember to replace the function with one that suits your application needs. This is just a simple example to demonstrate the concept.

  </div>
  </div>
</details>

---

### What is a common problem with scroll events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Scroll events can lead to performance issues if not handled properly, because they can fire many times per second during scrolling, which could overload the browser if the handler function is complex.
  </div><br />
  <div><strong>Technical Response:</strong> One common problem with scroll events is that they can fire at a high rate, leading to a phenomenon known as 'scroll jank'. This can degrade performance and create a poor user experience, particularly on lower-powered devices or heavy websites. The solution for this problem is throttling or debouncing the scroll event.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
window.addEventListener('scroll', function() {
    // Some heavy operation
    for(let i = 0; i < 10000; i++) {
        console.log(i);
    }
});
```

In the above example, every time a scroll event fires (which can be many times per second), the code will execute a heavy operation. This could slow down the website significantly.

To solve the problem, you can 'throttle' or 'debounce' the scroll event. Here's an example of throttling with lodash:

```javascript
import _ from 'lodash';

window.addEventListener('scroll', _.throttle(function() {
    // Some heavy operation
    for(let i = 0; i < 10000; i++) {
        console.log(i);
    }
}, 200));  // Execute at most once every 200ms
```

In this second example, even if the scroll event fires many times per second, the heavy operation will be executed at most once every 200 milliseconds, reducing the load on the browser. This helps to prevent the page from becoming unresponsive or laggy during rapid scrolling.

  </div>
  </div>
</details>

---

### What is debounce in the context of scroll events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Debouncing in the context of scroll events is a technique that limits the rate at which a function fires, reducing the number of times an event handler is executed during repetitive events like scrolling.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple JavaScript debounce function, followed by its usage with a scroll event.

```javascript
// Simple debounce function
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    }
}

// Function to execute on scroll
function handleScroll() {
    console.log('Scrolled!');
}

// Attach event with debounced function
window.addEventListener('scroll', debounce(handleScroll, 200));
```

In this example, `handleScroll` will not be called more than once every 200 milliseconds while scrolling. This helps to prevent performance issues associated with rapid firing of scroll events.

  </div>
  </div>
</details>

---

### What is throttle in the context of scroll events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Throttling in the context of scroll events is a technique that ensures a function only fires at most once every specified interval, regardless of how many times the event occurs.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Simple throttle function
function throttle(func, limit) {
    let lastCall;
    return function() {
        const now = Date.now();
        if (!lastCall || (now - lastCall) > limit) {
            lastCall = now;
            return func.apply(this, arguments);
        }
    }
}

// Function to execute on scroll
function handleScroll() {
    console.log('Scrolled!');
}

// Attach event with throttled function
window.addEventListener('scroll', throttle(handleScroll, 200));
```

In this example, `handleScroll` will not be called more than once every 200 milliseconds while scrolling, helping to prevent performance issues associated with frequent firing of scroll events.

  </div>
  </div>
</details>

---

### What is scroll chaining?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Scroll chaining is a browser feature where, if a user reaches the edge of a scrollable element, the scroll action continues (or "chains") to the parent element, until it reaches the viewport.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Scroll chaining is a browser default behavior, and it doesn't need explicit JavaScript code to function. Here is a simple HTML example that can exhibit scroll chaining:

```html
<div style="width: 200px; height: 200px; overflow: auto;">
    <div style="width: 500px; height: 500px;">
        Scroll inside this inner div, and when you reach the edge, it will start scrolling in the outer div.
    </div>
</div>
```

When you scroll inside the inner div and reach its boundaries, the scroll action will chain to the outer div, i.e., the parent element.

However, starting from Chrome 63, you can control scroll chaining behavior using CSS's `overscroll-behavior` property.

```css
#element {
    overscroll-behavior: contain; /* prevents scroll chaining */
}
```

The `overscroll-behavior` property can take one of the following values: `auto`, `contain`, and `none`. The `contain` value prevents scroll chaining but keeps the bounce effect on devices that support it.

  </div>
  </div>
</details>

---

### What is a passive event listener?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A passive event listener in JavaScript is an option you can use to improve scroll performance by indicating that an event listener won't call preventDefault(), thus enabling the browser to continue scrolling without waiting.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Function to execute on scroll
function handleScroll(event) {
    console.log('Scrolled!');
}

// Attach passive event listener
document.addEventListener('scroll', handleScroll, { passive: true });
```

In this example, the `{ passive: true }` option indicates that the `handleScroll` function won't prevent the scroll event's default behavior, so the browser doesn't need to wait before continuing to scroll. This can help improve scroll performance, especially on touch and mobile devices.

  </div>
  </div>
</details>

---

### How can we detect the scroll direction?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can detect the scroll direction by comparing the current scroll position with the last known position, updating the last position after the check. If it's greater, it's a down scroll, else it's up.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop){
        console.log('Scrolled down');
    } else {
        console.log('Scrolled up');
    }

    lastScrollTop = currentScrollTop;
}, false);
```

In this example, we're storing the last known scroll position in `lastScrollTop`. On each scroll event, we compare the current scroll position (`currentScrollTop`) with the last known position to determine the scroll direction. We then update `lastScrollTop` with the current position.

  </div>
  </div>
</details>

---

### Can you explain 'window.pageYOffset'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The property `window.pageYOffset` is a read-only property that returns the number of pixels the document is currently scrolled vertically from the top. This property is equivalent to `window.scrollY`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Get the navbar
let navbar = document.getElementById('navbar');

// When the user scrolls down 50px from the top of the document, change the color of the navbar
window.onscroll = function() {
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = "#3e8e41"; // Change to green
    } else {
        navbar.style.backgroundColor = "transparent"; // Otherwise, make it transparent
    }
};
```

In this example, as the user scrolls down the page and the vertical offset from the top becomes greater than 50 pixels, the color of the navbar changes to green. When the user scrolls back up and the offset becomes less than or equal to 50 pixels, the navbar becomes transparent again.

  </div>
  </div>
</details>

---

### What is 'window.scrollX' in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `window.scrollX` property is a read-only property that returns the number of pixels that the document is currently scrolled horizontally from the left side. This property is equivalent to `window.pageXOffset`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
window.addEventListener('scroll', function() {
    console.log('Current horizontal scroll from the left: ' + window.scrollX + 'px');
});
```

In this example, whenever a user scrolls horizontally, the `scroll` event will be fired and the current horizontal scroll position from the left in pixels will be logged to the console. If there's no horizontal scroll, `window.scrollX` will be 0.

  </div>
  </div>
</details>

---

### Can you tell me about 'Element.scrollTop'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Element.scrollTop` property in JavaScript gets or sets the number of pixels that an element's content is scrolled vertically. This value is read-only for some elements, such as `&#60;body&#62;` or `&#60;html&#62;`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<body>
    <button onclick="scrollToTop()" id="myBtn">Scroll to Top</button>
    <!-- Assume lots of content here so that the page will scroll -->
    <div style="height:2000px"></div>

    <script>
        var mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };

        // When the user clicks on the button, scroll to the top of the document
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    </script>
</body>
</html>
```

In the above example, a button is shown when you scroll down 20px from the top of the page. When you click the button, the `scrollTop` property is set to `0` for `body` and `documentElement` (which corresponds to the `<html>` element), which scrolls the page back to the top.

  </div>
  </div>
</details>

---

### What is 'Element.scrollLeft'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Element.scrollLeft` property in JavaScript gets or sets the number of pixels that an element's content is scrolled horizontally. It represents the left scroll offset.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

If you had a horizontally scrolling container and you wanted to programmatically scroll the container 50px from the left, you could use `Element.scrollLeft` as follows:

```html
<!DOCTYPE html>
<html>
<body>

<div id="scrollableDiv" style="width: 300px; height: 100px; overflow: auto; white-space: nowrap;">
  <div style="width: 800px;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

<button onclick="scrollContainer()">Scroll Container</button>

<script>
function scrollContainer() {
  var div = document.getElementById('scrollableDiv');
  div.scrollLeft += 50; // Scroll the container 50px to the right
}
</script>

</body>
</html>
```

In this example, we have a button that when clicked, scrolls the `scrollableDiv` container 50px to the right. If you click the button multiple times, it will keep scrolling to the right in increments of 50px.

  </div>
  </div>
</details>

---

### What's the difference between 'scrollHeight' and 'clientHeight'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, 'scrollHeight' is the total height of an element, including content not visible due to overflow. 'clientHeight' is the visible height of an element, excluding scrollbar height.
  </div>
  </div>
</details>

---

### What is the 'scrollIntoView' method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'scrollIntoView' method in JavaScript is used to scroll the specified element into the visible area of the browser window. It can accept an optional object to define the scroll behavior.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<body>

<h2 id="content">Content</h2>

<button onclick="scrollToContent()">Scroll to Content</button>

<!-- A bunch of text to create a scrollbar -->
<p id="para">Lorem ipsum ... (assume a lot of text here)</p>

<script>
function scrollToContent() {
  var element = document.getElementById("content");
  element.scrollIntoView(); 
}
</script>

</body>
</html>
```

  </div>
  </div>
</details>

---

### Can you explain 'Element.scrollWidth'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `Element.scrollWidth` is a read-only property in JavaScript that returns the total width of an element in pixels, including padding, border, and scrollable content area not visible on screen.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
<!DOCTYPE html>
<html>
<body>

<div id="scrollableDiv" style="width: 200px; height: 100px; overflow: auto; white-space: nowrap;">
  <div style="width: 800px;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>
</div>

<button onclick="scrollToEnd()">Scroll to End</button>

<script>
function scrollToEnd() {
  var div = document.getElementById('scrollableDiv');
  div.scrollLeft = div.scrollWidth; // Scroll to the far-right end of the content
}
</script>

</body>
</html>
```

  </div>
  </div>
</details>

---

### What is the use of the 'window.scrollTo' method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'window.scrollTo' method in JavaScript is used to scroll to a specific set of coordinates in the document. It accepts two arguments: the X-coordinate (horizontal scroll) and Y-coordinate (vertical scroll).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
<!DOCTYPE html>
<html>
<body>

<button onclick="scrollToTop()">Scroll to Top</button>

<!-- A bunch of text to create a scrollbar -->
<p>Lorem ipsum ... (assume a lot of text here)</p>

<script>
function scrollToTop() {
  window.scrollTo(0, 0); 
}
</script>

</body>
</html>

```

  </div>
  </div>
</details>

---

### What is 'requestAnimationFrame' in the context of scrolling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'requestAnimationFrame' in the context of scrolling is often used to optimize scroll events or animations, ensuring they're synced with the browser's refresh rate, reducing 'jank' and improving performance.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function smoothScrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// When this function is called, it will smooth scroll to the top of the page
smoothScrollToTop();
```

  </div>
  </div>
</details>

---

### How does 'Intersection Observer API' relate to scrolling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or viewport, which is useful in handling scroll events effectively.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you might use the Intersection Observer API to detect when an element becomes visible in the viewport as a result of scrolling:

```javascript
// Function to execute when the observed element intersects with the viewport
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element is in the viewport!');
        }
    });
}

// Create a new Intersection Observer instance
let observer = new IntersectionObserver(handleIntersect);

// Target element to observe
let target = document.querySelector('#targetElement');

// Start observing the target element
observer.observe(target);
```

In this example, we first define a `handleIntersect` function that will be called whenever the observed element intersects with the viewport. Then, we create a new `IntersectionObserver` instance, specifying `handleIntersect` as the callback function. Finally, we start observing a target element by calling `observer.observe(target)`.

  </div>
  </div>
</details>

---

### What is 'scroll snapping'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Scroll snapping is a web design technique where the scroll position automatically adjusts or "snaps" to a certain point, such as the start of a section, as the user scrolls through a document.
  </div><br/>
  <div><strong>Technical Response:</strong> Scroll snapping refers to the technique that helps to enhance scroll interactions by forcing the viewport to stop at certain points. With CSS scroll snap points, a page can smoothly glide to a stop at the top of a column of text, for example, regardless of how fast or slow the scrolling action was. Although scroll snapping is primarily handled by CSS with the properties `scroll-snap-type` and `scroll-snap-align`, JavaScript can still play a part in controlling the behavior dynamically.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

First, let's define some **CSS**:

```css
.scroll-container {
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
}

.scroll-section {
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
}
```

The `.scroll-container` will snap on its children, which are `.scroll-section`.

Then, you could have some **HTML** like this:

```html
<div class="scroll-container">
  <div class="scroll-section">Section 1</div>
  <div class="scroll-section">Section 2</div>
  <div class="scroll-section">Section 3</div>
  <!-- More sections... -->
</div>
```

And here is how **JavaScript** can be used to dynamically control which section to snap to:

```javascript
let scrollContainer = document.querySelector('.scroll-container');
let sections = Array.from(document.querySelectorAll('.scroll-section'));

// Scroll to third section
scrollContainer.scrollTo({
  left: sections[2].offsetLeft,
  behavior: 'smooth'
});
```

In this JavaScript example, we select the `.scroll-container` and the `.scroll-section` elements and make the container scroll to the third section. This will cause the scroll snapping to occur due to the CSS we have set up.

  </div>
  </div>
</details>

---

### What is the 'scroll-behavior' property in CSS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'scroll-behavior' property in CSS specifies whether the scrolling transition of a container is smooth (animated) or instant. It accepts two values: 'auto' for instant scrolling, and 'smooth' for smooth scrolling.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of how to use the 'scroll-behavior' property in CSS:

```css
html {
    scroll-behavior: smooth;
}
```

In this example, when links are clicked that point to different sections of the webpage, the browser will smoothly animate scrolling to those sections, rather than instantly jumping to them. It's worth noting that 'scroll-behavior' will only have effect if the element being scrolled to is within the same document.

  </div>
  </div>
</details>

---

### Can you explain the 'window.scrollBy' method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `window.scrollBy()` method in JavaScript is used to scroll the document by a certain number of pixels. This is relative to its current location.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<body>

<button onclick="scrollDown()">Scroll Down 100px</button>
<button onclick="scrollUp()">Scroll Up 100px</button>

<!-- A bunch of text to create a scrollbar -->
<p>Lorem ipsum ... (assume a lot of text here)</p>

<script>
function scrollDown() {
  window.scrollBy(0, 100); // Scroll down by 100px
}

function scrollUp() {
  window.scrollBy(0, -100); // Scroll up by 100px
}
</script>

</body>
</html>
```

  </div>
  </div>
</details>

---

### What does the scroll event allow in terms of a page or element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scroll event allows executing JavaScript code when a user scrolls a page or element, enabling dynamic effects like parallax scrolling, lazy-loading, or infinite scrolling.
    </div><br />
  <div><strong>Technical Response:</strong> The scroll event seeks to respond to the scrolling of a page or element. We have a lot of nice things we can do here. For example, based on where the user is in the document, reveal or conceal extra controls or information—load extra info when the user scrolls down to the bottom of the page (lazy load).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  #showScroll {
    height: 5000px;
    padding-top: 500px;
  }
</style>
<div id="showScroll" onscroll="scroll();">0</div>
<script>
  window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
  });
</script>
```

  </div>
  </div>
</details>

---

### How can we block scrolling on a web page in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can prevent scrolling on a web page using JavaScript by setting the overflow property of the body to hidden. This can be done directly using JavaScript's interaction with CSS.
    </div><br/>
  <div><strong>Technical Response:</strong> We cannot use event.preventDefault() in the onscroll listener to prevent scrolling because it fires after the scroll has already occurred. We may, however, disable event-based scrolling by using preventDefault() which invokes on a scroll-triggering event, such as the keydown event for pageUp and pageDown. The scroll does not begin if we add an event handler to these events and use event.preventDefault().
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Block scrolling
document.body.style.overflow = 'hidden';

// Do some operations...

// Unblock scrolling
document.body.style.overflow = 'auto';
```

  </div>
  </div>
</details>

---
