---
title: JavaScript Animations
sidebar_position: 3
---

# JavaScript Animations

**Animation: JavaScript animations**

**Question:** **Why is requestAnimationFrame better than setInterval or setTimeout?**

**Interview Answer:** The question is most simply answered with. requestAnimationFrame produces higher quality animation completely eliminating flicker and shear that can happen when using setTimeout or setInterval, and reduce or completely remove frame skips. The setInterval and setTimeout methods can cause CPU overloads and cause excessive or overlapping redraws.

Source: <https://javascript.info/js-animation#using-requestanimationframe>

**Question:** **Can you explain the function an syntax of the requestAnimationFrame method?**

**Interview Answer:** The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint. You should call this method whenever you are ready to update your animation onscreen. We can use the cancelAnimationFrame to cancel the animation by calling the request id in the cancellation.

**Syntax:** let requestId = requestAnimationFrame(callback)

Code Example:

```js
const element = document.getElementById('some-element-you-want-to-animate');

let start;

function step(timestamp) {

    if (start === undefined)

      start = timestamp;

    const elapsed = timestamp - start;

    // `Math.min()` is used here to make sure that the element stops at exactly 200px.

    element.style.transform = 'translateX(' + Math.min(0.1 \* elapsed, 200) + 'px)';

    if (elapsed < 2000) { // Stop the animation after 2 seconds

      window.requestAnimationFrame(step);

    }

}

window.requestAnimationFrame(step);
```

Source: <https://javascript.info/js-animation#using-requestanimationframe>

**Question:** **When should we use JavaScript vs CSS for animations?**

**Interview Answer:** For animations that CSS cannot handle well, or those that need tight control, JavaScript is our best option. JavaScript animations should be implemented via requestAnimationFrame. That built-in method allows us to setup a callback function to run when the browser will be preparing a repaint. Usually that is very soon, but the exact time depends on the browser.

Source: <https://javascript.info/js-animation>
