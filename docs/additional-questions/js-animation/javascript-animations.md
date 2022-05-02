---
title: JavaScript Animations
description: JavaScript Animations are used to animate elements in JavaScript. The requestAnimationFrame delivers higher-quality animation. - JavaScript Interview Answers
sidebar_position: 3
sidebar_label: JavaScript Animations
keywords:
  - javascript animations
  - javascript animation
  - animations in javascript
  - requestAnimationFrame
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - javascript animations
  - javascript animation
  - animations in javascript
  - interview answers
  - interview questions
---

<head>
  <title>JavaScript Animations | JavaScript Frontend Phone Interview</title>
</head>

**Animation: JavaScript Animations**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Why is requestAnimationFrame better than setInterval or setTimeout?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The requestAnimationFrame delivers higher-quality animation by avoiding flicker and shear that might occur when using setTimeout or setInterval and reducing or eliminating frame skips. The setInterval and setTimeout methods might result in CPU overloads and excessive or overlapping redraws.
    </div>
  </div>
</details>

---

### Can you explain the function and syntax of the requestAnimationFrame method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The window.requestAnimationFrame() method informs the browser that you want to run animations and asks the browser to invoke a given function to update an animation before the next repaint. The method accepts a callback as an input, executed before the repaint. When you're ready to refresh your animation onscreen, call this function. We may cancel the animation by contacting the request-id in the cancellation using the cancelAnimationFrame.
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

### When should we use JavaScript vs. CSS for animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For animations that CSS cannot handle well, or those that need tight control, JavaScript is our best option. We should implement JavaScript animations via requestAnimationFrame. The requestAnimationFrame built-in method allows us to set up a callback function to run when the browser is preparing a repaint. Usually, that is very soon, but the exact time depends on the browser.
    </div>
  </div>
</details>

---
