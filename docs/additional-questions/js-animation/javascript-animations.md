---
title: JavaScript Animations
sidebar_position: 3
---

# JavaScript Animations

**Animation: JavaScript Animations**

<head>
  <title>JavaScript Animations - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Why is requestAnimationFrame better than setInterval or setTimeout?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The question is most simply answered with, the requestAnimationFrame produces higher quality animation completely eliminating flicker and shear that can happen when using setTimeout or setInterval, and reduce or completely remove frame skips. The setInterval and setTimeout methods can cause CPU overloads and cause excessive or overlapping redraws.
    </div>
  </div>
</details>

---

### Can you explain the function an syntax of the requestAnimationFrame method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint. You should call this method whenever you are ready to update your animation onscreen. We can use the cancelAnimationFrame to cancel the animation by calling the request id in the cancellation.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let requestId = requestAnimationFrame(callback);<br /><br />

  <div></div>

```js
const element = document.getElementById('some-element-you-want-to-animate');
let start;

function step(timestamp) {
  if (start === undefined) start = timestamp;
  const elapsed = timestamp - start;

  // `Math.min()` is used here to make sure that the element stops at exactly 200px.
  element.style.transform =
    'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

  if (elapsed < 2000) {
    // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

  </div>
  </div>
</details>

---

### When should we use JavaScript vs CSS for animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For animations that CSS cannot handle well, or those that need tight control, JavaScript is our best option. JavaScript animations should be implemented via requestAnimationFrame. That built-in method allows us to setup a callback function to run when the browser will be preparing a repaint. Usually that is very soon, but the exact time depends on the browser.
    </div>
  </div>
</details>

---
