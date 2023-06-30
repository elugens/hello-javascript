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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/JSAnimationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>JavaScript Animations | JavaScript Frontend Phone Interview</title>
</head>

**Animation: JavaScript Animations**

<CloseAllAnswers />

---

### What is JavaScript animation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript animation is the process of creating motion and change in the properties of elements on a webpage using JavaScript, offering enhanced interactivity and visual effects beyond static HTML and CSS.
  </div>
  </div>
</details>

---

### Can you name a few JavaScript libraries used for animation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several JavaScript libraries for animation including Three.js for 3D animations, GSAP (GreenSock Animation Platform), Anime.js, Velocity.js, and Mo.js. These libraries enhance animations and interactivity in web design.
  </div>
  </div>
</details>

---

### Can JavaScript perform animation without a library?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript can perform animations without a library using built-in methods like setInterval, setTimeout, and requestAnimationFrame, as well as CSS manipulations for transition and transformation effects.
  </div>
  </div>
</details>

---

### What can requestAnimationFrame be used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'requestAnimationFrame' method in JavaScript is used to create smooth, efficient, and less resource-intensive animations by calling a function before the next repaint, optimizing for the device's refresh rate.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a basic example of how `requestAnimationFrame` can be used to animate a simple element in a smooth manner.

```javascript
// Access the HTML element
var elem = document.getElementById("animate"); 

var pos = 0;  // Initial position
var id;

function frame() {
  if (pos == 350) { // End position
    cancelAnimationFrame(id); // Stop the animation when end position reached
  } else {
    pos++;  // Increment the position
    elem.style.top = pos + "px"; // Move the element down
    elem.style.left = pos + "px"; // Move the element to right
  }
}

function startAnimation() {
  id = requestAnimationFrame(startAnimation); // Invoke next frame
  frame(); // Call the frame function
}

startAnimation(); // Start the animation
```

This script will move an HTML element diagonally down and to the right across the screen. It will keep moving until it has moved 350 pixels both down and to the right.

In this example, `requestAnimationFrame` is used to create a smooth animation of an element moving across the screen. It works by repeatedly calling a function (in this case, `frame`) that updates the position of the element. This function is called before the browser performs its next repaint, resulting in a smooth animation.

  </div>
  </div>
</details>

---

### What is cancelAnimationFrame in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 'cancelAnimationFrame' in JavaScript is used to stop or cancel a previously requested animation frame, providing control over when animations start and stop for efficient resource usage.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Access the HTML element
var elem = document.getElementById("animate"); 

var pos = 0;  // Initial position
var id;

function frame() {
  if (pos == 350) { // End position
    cancelAnimationFrame(id); // Stop the animation when end position reached
  } else {
    pos++;  // Increment the position
    elem.style.top = pos + "px"; // Move the element down
    elem.style.left = pos + "px"; // Move the element to right
    id = requestAnimationFrame(frame); // Schedule the next frame
  }
}

id = requestAnimationFrame(frame); // Start the animation
```

  </div>
  </div>
</details>

---

### How does JavaScript interact with CSS transitions and animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript interacts with CSS transitions and animations by adding, removing, or modifying CSS classes, or directly manipulating styles, enabling dynamic control over element behavior.
  </div><br />
  </div>
</details>

---

### Why is setTimeout or setInterval not recommended for animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> setTimeout and setInterval are not recommended for animations because they don't synchronize with the browser's refresh rate, which can lead to inefficient, choppy animations and increased CPU usage.
  </div>
  </div>
</details>

---

### What is easing in the context of JavaScript animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Easing in JavaScript animations refers to gradual acceleration or deceleration during transition, providing a more natural, real-life feel to movements, rather than a linear, constant-speed animation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of how to implement an easing effect in JavaScript using `requestAnimationFrame`. This code will cause an element to move across the screen with an easing effect:

```javascript
var elem = document.getElementById('animate');
var start = null;
var distance = 500;  // Distance to move

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  
  var position = easeOutCubic(progress, 0, distance, 2000); // apply easing
  
  elem.style.left = position + 'px';
  
  if (progress < 2000) { // animation duration
    requestAnimationFrame(step);
  }
}

function easeOutCubic(currentTime, startValue, changeInValue, duration) {
  return changeInValue*((currentTime=currentTime/duration-1)*currentTime*currentTime + 1) + startValue;
}

requestAnimationFrame(step);
```

In this example, `easeOutCubic` is the easing function. It provides a cubic "ease-out" effect, meaning the animation starts fast and ends slower. It makes the movement appear more naturally as in real life.

  </div>
  </div>
</details>

---

### What is Tweening in the context of JavaScript animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Tweening, or in-betweening, is the process of generating intermediate frames between two states to give the impression that the first image has smoothly evolved into the second one.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Access the HTML element
var elem = document.getElementById("animate"); 

// Start and end positions
var startPos = 0;
var endPos = 350;

var startTime;
var duration = 2000; // Duration of the animation in milliseconds

function animate(timestamp) {
  if (!startTime) startTime = timestamp;
  
  var progress = timestamp - startTime;

  // Calculate the current position with linear tweening
  var currPos = startPos + ((endPos - startPos) * progress / duration);

  // Apply the position
  elem.style.left = currPos + 'px';

  // If the animation hasn't finished, keep going
  if (progress < duration) {
    requestAnimationFrame(animate);
  }
}

// Start the animation
requestAnimationFrame(animate);
```

  </div>
  </div>
</details>

---

### What is the 'Animation Loop' in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'Animation Loop' in JavaScript is a continuous cycle that updates the animation frames at a set interval, typically using requestAnimationFrame, to create fluid and seamless visual movement.
  </div>
  </div>
</details>

---

### What's the role of 'timing function' in animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A 'timing function' in JavaScript animations defines the speed at which the animation progresses at different points in its duration, allowing control over acceleration, deceleration, and easing of the animation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let elem = document.getElementById('animate'); 
let start = null;
let distance = 500;  // Distance to move

function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  
  // Apply the custom timing function
  let position = easeInOutQuad(progress, 0, distance, 2000);
  
  elem.style.left = position + 'px';
  
  if (progress < 2000) {  // Animation duration
    requestAnimationFrame(step);
  }
}

function easeInOutQuad(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
}

requestAnimationFrame(step);
```

  </div>
  </div>
</details>

---

### What are sprite animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sprite animations are a series of images (2D image) along the x/y-axis, collected into a single image file (sprite sheet), that are displayed in sequence using CSS or JavaScript to create the illusion of movement.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic example. Let's imagine we have a sprite sheet image where each frame is 100px wide, and there are 10 frames.

```html
<!-- HTML part -->
<div id="sprite" style="width:100px; height:100px; background:url('sprite_sheet.png')"></div>
```

```javascript
// JavaScript part
let spriteElement = document.getElementById('sprite');
let frameIndex = 0;
let totalFrames = 10;
let spriteWidth = 100; // Width of a single frame

function animateSprite() {
    // Calculate the offset and set it as the background-position
    let offset = frameIndex * spriteWidth;
    spriteElement.style.backgroundPosition = -offset + 'px 0';

    // Increment or reset frame index
    frameIndex = (frameIndex + 1) % totalFrames;

    requestAnimationFrame(animateSprite);
}

animateSprite(); // Start the animation
```

In this code, each call to `animateSprite()` shifts the background image to display the next frame of the sprite sheet, creating an animation. It loops back to the start of the sprite sheet once all frames have been displayed.

  </div>
  </div>
</details>

---

### What is 'frame rate' in the context of animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Frame rate in animations refers to the number of individual images (frames) displayed per unit of time, typically per second. Higher frame rates generally result in smoother, more fluid animations.
  </div>
  </div>
</details>

---

### How do JavaScript callbacks relate to animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript animations, callbacks are functions executed at certain points, such as the start or end of an animation, or on each frame. They allow for dynamic control and sequencing of animations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function animate(element, duration, callback) {
    var start = Date.now();
    var end = start + duration;

    function step() {
        var now = Date.now();
        var progress = Math.min((now - start) / duration, 1);

        element.style.left = (progress * 100) + 'px'; // Simple linear animation

        if (now < end) {
            requestAnimationFrame(step);
        } else if (callback) {
            callback();
        }
    }

    step();
}

var elem = document.getElementById('animate');
animate(elem, 2000, function() {
    console.log('Animation completed!');
    // We could start another animation here...
});
```

  </div>
  </div>
</details>

---

### How does 'throttling' improve animation performance in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Throttling limits the rate at which a function is executed. It can prevent unnecessary computations, improving performance of animations and user interactions.
  </div><br />
  <div><strong>Technical Response:</strong> Throttling in JavaScript is a technique used to limit the number of times a function can be called in a certain period. This can be used to improve the performance of animations, for example, by limiting how often an animation update can occur based on user input.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var lastExecution = Date.now();
var delay = 200; // delay between executions in milliseconds

window.addEventListener('scroll', function() {
    var now = Date.now();

    // Check if delay has elapsed
    if (now - lastExecution >= delay) {
        lastExecution = now;

        // Perform the animation
        document.getElementById('animate').style.top = window.pageYOffset + 'px';
    }
});
```

  </div>
  </div>
</details>

---

### What is 'debouncing' and how does it relate to animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Debouncing in JavaScript is a technique that limits the rate at which a function can fire. In animations, it's often used to improve performance by reducing unnecessary computations during events like scrolling or resizing.
  </div><br />
  <div><strong>Technical Response:</strong> Debouncing in JavaScript is a technique where we delay the processing of a function until a certain amount of time has passed since the last time it was called. It's used when you want to make sure that the function doesn't execute too frequently and especially useful in scenarios like responding to a button click or window resize event in animations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let debounceTimeout;
let delay = 200;  // delay in milliseconds

window.addEventListener('resize', function() {
    clearTimeout(debounceTimeout);  // Clear any existing timeout

    debounceTimeout = setTimeout(function() {
        // Perform the animation
        document.getElementById('animate').style.width = window.innerWidth / 2 + 'px';
    }, delay);
});
```

  </div>
  </div>
</details>

---

### How can the 'Web Animation API' benefit JavaScript animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Web Animations API provides a common language for animations on the web platform, allowing for more complex animations and better performance control.
  </div>
  </div>
</details>

---

### What are 'CSS Keyframes' and how can they be manipulated with JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS Keyframes define the behavior of an animation sequence. JavaScript can manipulate these to dynamically control the animation.
  </div><br />
  <div><strong>Technical Response:</strong> CSS Keyframes are used to define the behavior of one cycle of a CSS animation, including the various states of the animation and their corresponding styles. JavaScript can manipulate these animations by starting, stopping, or modifying them dynamically.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML:

```html
<!-- HTML part -->
<style>
  @keyframes move {
    0%   {left: 0px; top: 0px;}
    25%  {left: 200px; top: 0px;}
    50%  {left: 200px; top: 200px;}
    75%  {left: 0px; top: 200px;}
    100% {left: 0px; top: 0px;}
  }
  
  #animate {
    position: relative;
    height: 50px;
    width: 50px;
    background-color: red;
    animation: move 5s infinite; /* The animation is initially running */
  }
</style>

<div id="animate"></div>
```

JavaScript:

```js
// JavaScript part
let elem = document.getElementById('animate');

// Pause the animation: targeting styles
elem.style.animationPlayState = 'paused';

// After 2 seconds, resume the animation
setTimeout(function() {
  elem.style.animationPlayState = 'running'; // targeting styles
}, 2000);
```

  </div>
  </div>
</details>

---

### Why is it recommended to animate properties like opacity and transform in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Animating properties like opacity and transform in JavaScript is recommended because these changes can be handled by the GPU. This results in smoother, more performant animations compared to animating layout properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var elem = document.getElementById('animate');
var startTime;

function animate(timestamp) {
    if (!startTime) startTime = timestamp;

    var progress = (timestamp - startTime) / 1000; // progress in seconds

    // Animate transform and opacity
    elem.style.transform = 'translateX(' + progress * 100 + 'px)';
    elem.style.opacity = Math.sin(progress); // opacity

    if (progress < 5) { // Continue for 5 seconds
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);
```

  </div>
  </div>
</details>

---

### Why is requestAnimationFrame better than setInterval or setTimeout?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `requestAnimationFrame` is superior as it synchronizes with the browser's refresh rate, leading to smoother animations. Unlike `setInterval` or `setTimeout`, it also pauses when the tab is inactive, saving resources.
    </div>
  </div>
</details>

---

### Can you explain the function of the requestAnimationFrame method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `window.requestAnimationFrame()` tells the browser to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
    </div><br />
  <div><strong>Technical Response:</strong> The window.requestAnimationFrame() method informs the browser that you want to run animations and asks the browser to invoke a given function to update an animation before the next repaint. The method accepts a callback as an input, executed before the repaint. When you're ready to refresh your animation onscreen, call this function. We may cancel the animation by contacting the request-id in the cancellation using the cancelAnimationFrame.
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
  <div><strong>Interview Response:</strong> You should use CSS for simpler animations, it's lightweight and performant. You should use JavaScript when you need complex, programmable animations, interaction-based animations, or if you need more control over animation timing.
    </div><br/>
  <div><strong>Technical Response:</strong> For animations that CSS cannot handle well, or those that need tight control, JavaScript is our best option. We should implement JavaScript animations via requestAnimationFrame. The requestAnimationFrame built-in method allows us to set up a callback function to run when the browser is preparing a repaint. Usually, that is very soon, but the exact time depends on the browser.
    </div>
  </div>
</details>

---
