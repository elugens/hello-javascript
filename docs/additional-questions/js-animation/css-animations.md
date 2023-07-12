---
title: CSS-Animations
description: CSS-Animations is used to animate elements. CSS animations make it possible to do simple animations without JavaScript. - JavaScript Interview Questions
sidebar_position: 2
sidebar_label: CSS-Animations
keywords:
  - css animations
  - animate elements
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
  - css animations
  - animate elements
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CSSAnimationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>CSS-Animations | HelloJavaScript.info</title>
</head>

**Animation: CSS-Animations**

<CloseAllAnswers />

---

### What are CSS animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS animations are a way to transition between CSS property values over a duration of time. They offer fine-grained control over each phase of the animation sequence.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple CSS animation code example:

```css
@keyframes example {
  0%   {background-color: red;}
  50%  {background-color: yellow;}
  100% {background-color: blue;}
}

div {
  width: 100px;
  height: 100px;
  animation-name: example;
  animation-duration: 4s;
}
```

In this example, a `div` element's background color is animated from red to yellow to blue over a period of 4 seconds. The `@keyframes` rule specifies the animation sequence.

  </div>
  </div>
</details>

---

### What is a CSS keyframe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A CSS keyframe is a stage in an animation sequence. They specify styles at specific times during an animation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
@keyframes example {
  0%   {background-color: red;}
  50%  {background-color: yellow;}
  100% {background-color: blue;}
}
```

  </div>
  </div>
</details>

---

### What are the two main properties for controlling CSS animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two main properties are 'animation' and 'keyframes'. They control animation's behavior and the frames of the animation respectively.
  </div>
  </div>
</details>

---

### What is the 'animation-delay' property in CSS?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'animation-delay' property specifies the time delay before the animation starts.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's an example illustrating the 'animation-delay' property:

```css
@keyframes example {
  0%   {background-color: red;}
  100% {background-color: blue;}
}

div {
  width: 100px;
  height: 100px;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;  /* animation-delay property */
}
```

In this example, the animation on the `div` element's background color will start after a delay of 2 seconds.

  </div>
  </div>
</details>

---

### What is the use of 'animation-iteration-count' in CSS animations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'animation-iteration-count' property determines the number of times an animation sequence should be played.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example illustrating the 'animation-iteration-count' property:

```css
@keyframes example {
  0%   {background-color: red;}
  100% {background-color: blue;}
}

div {
  width: 100px;
  height: 100px;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```

In this example, the animation on the `div` element's background color will repeat 3 times.

  </div>
  </div>
</details>

---

### How do we specify the speed curve of a CSS animation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The speed curve of a CSS animation is specified using the 'animation-timing-function' property.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example illustrating how to specify the speed curve of a CSS animation:

```css
@keyframes example {
  0%   {background-color: red;}
  100% {background-color: blue;}
}

div {
  width: 100px;
  height: 100px;
  animation-name: example;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
}
```

In this example, the animation on the `div` element's background color will start slow, speed up, then end slow due to the 'ease-in-out' timing function.

  </div>
  </div>
</details>

---

### Can you explain the difference between CSS animations and transitions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Transitions offer simple control over the interpolation of properties between keyframes. Animations offer more control, including multiple keyframes and timing functions.
  </div>
  </div>
</details>

---

### What is the purpose of 'animation-direction' property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'animation-direction' property determines whether an animation should be played in reverse direction or alternate cycles.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example illustrating the 'animation-direction' property:

```css
@keyframes example {
  0%   {background-color: red;}
  100% {background-color: blue;}
}

div {
  width: 100px;
  height: 100px;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
```

In this example, the animation on the `div` element's background color will play in reverse direction, starting with blue and ending with red.

  </div>
  </div>
</details>

---

### Can you pause a CSS animation? If yes, how?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by using the 'animation-play-state' property and setting it to 'paused'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example illustrating how to pause a CSS animation:

```css
@keyframes example {
  0%   {background-color: red;}
  100% {background-color: blue;}
}

div {
  width: 100px;
  height: 100px;
  animation-name: example;
  animation-duration: 4s;
}

div:hover {
  animation-play-state: paused;
}
```

In this example, hovering over the `div` element will pause the animation. The 'animation-play-state' is set to 'paused' on hover.

  </div>
  </div>
</details>

---

### Why do we use CSS animation in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS animations make it possible to do simple animations without JavaScript. JavaScript can be used to control CSS animations and make them even better with little code. The general idea is that when you can use CSS versus JavaScript, you should because it reduces the load on the browser.
    </div>
  </div>
</details>

---

### Can you briefly define the idea around CSS transitions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS transitions are a basic concept. We explain a property's modifications and how they should be animated. The browser paints the animation whenever the property changes, and we have to alter the property, and the browser transitions smoothly.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<button id="color">Click me</button>

<style>
  #color {
    transition-property: background-color;
    transition-duration: 3s;
  }
</style>

<script>
  color.onclick = function () {
    this.style.backgroundColor = 'red';
  };
</script>
```

  </div>
  </div>
</details>

---

### What are the four properties used to describe CSS transitions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are 4 properties to describe CSS transitions, including transition-property, transition-duration, transition-timing-function, and transition-delay.
    </div><br/>
  <div><strong>Technical Response:</strong> The four properties used to describe CSS transitions are "transition-property," which specifies the property to be transitioned, "transition-duration," which sets the duration of the transition, "transition-timing-function," which defines the acceleration curve, and "transition-delay," which determines the delay before the transition starts.
    </div>
  </div>
</details>

---

### Is it possible to utilize the transition property to animate many CSS properties at the same time?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's possible. The transition property can be used to animate multiple CSS properties simultaneously. Each property can have its own duration, delay, and timing function, separated by commas.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<button id="growing">Click me</button>

<style>
  #growing {
    transition: font-size 3s, color 2s;
  }
</style>

<script>
  growing.onclick = function () {
    this.style.fontSize = '36px';
    this.style.color = 'red';
  };
</script>
```

  </div>
  </div>
</details>

---

### Could you perhaps explain how to utilize the CSS transition property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-property CSS property sets the CSS properties to which a transition effect should be applied. In transition-property, we write a list of properties to animate, for instance, left, margin-left, height, color, or we could write all, which means “animate all properties”. We should note that some properties cannot be animated. However, most of the generally used properties are MDN animatable.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
div {
  width: 100px; // <-
  height: 100px;
  background: red;
  transition-property: width; // <-
  transition-duration: 2s;
}

div:hover {
  width: 300px; // <-
}
```

  </div>
  </div>
</details>

---

### What does the CSS transition-duration property set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning no animation occurs.<br /><br />You may specify multiple durations; each duration gets applied to the related property specified by the transition-property property, which acts as a master list. If fewer durations get specified than in the master list, the user agent repeats the list of durations. If there are more durations in the list, the list truncates to the correct size. In both cases, the CSS declaration stays valid.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: width;
  transition-duration: 2s; // <-
}

div:hover {
  width: 300px;
}
```

  </div>
  </div>
</details>

---

### What does the CSS transition-delay property do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: width;
  transition-duration: 5s;
  transition-delay: 2s; // <-
}

div:hover {
  width: 300px;
}
```

  </div>
  </div>
</details>

---

### What does the CSS transition-timing-function CSS property do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `transition-timing-function` property in CSS specifies how intermediate property keyframes are calculated during a transition, influencing the speed of the animation. It can create easing effects.
    </div><br />
  <div><strong>Technical Response:</strong> The transition-timing-function CSS property specifies how a transition effect impacts the computed intermediate values for CSS properties. The timing function specifies how the animation process progresses throughout its timeline. Will it begin slowly and then pick up speed, or vice versa? At first glance, it looks to be the most challenging property. However, it becomes relatively simple if we dedicate some effort to it. The transition-timing-function attribute takes one of two values: a Bezier curve or steps.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
div {
  width: 100px;
  height: 50px;
  background: red;
  color: white;
  font-weight: bold;
  transition: width 2s;
}

#div1 {
  transition-timing-function: linear;
}
#div2 {
  transition-timing-function: ease;
}
#div3 {
  transition-timing-function: ease-in;
}
#div4 {
  transition-timing-function: ease-out;
}
#div5 {
  transition-timing-function: ease-in-out;
}

div:hover {
  width: 300px;
}
```

  </div>
  </div>
</details>

---

### What does the cubic-bezier() CSS function do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `cubic-bezier()` function in CSS defines a Cubic Bezier curve which is used to determine the transition timing to create customized easing effects in animations or transitions.
    </div><br />
  <div><strong>Technical Response:</strong> The cubic-bezier() function defines a Cubic Bezier curve. A Cubic Bezier curve gets defined by P0, P1, P2, and P3 points. P0 and P3 are the curve's start and end, and, in CSS, these points are fixed as the coordinates are ratios. P0 is (0, 0) and represents the initial time and the initial state, and P3 is (1, 1) and represents the final time and the final state. We use the cubic-bezier() function with the animation-timing-function and transition-timing-function properties.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
}

div:hover {
  width: 300px;
}
```

  </div>
  </div>
</details>

---

### What makes the built-in curves different from the cubic-bezier() function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Built-in curves are predefined ease functions, whereas the `cubic-bezier()` function allows for customization of the animation's speed curve, offering more control over the animation's progression.
    </div><br />
  <div><strong>Technical Response:</strong> The main difference between the CSS built-in curves and the cubic-bezier() function is that the function can make the animation exceed its range. The control points on the curve can have any y coordinates: even negative or huge ones. Then the Bezier curve would also extend exceptionally low or high, making the animation go beyond its normal range.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
.myImage {
  position: relative;
  cursor: pointer;
  width: 177px;
  height: 160px;
  left: 100px;
  transition: left 5s cubic-bezier(0.5, -1, 0.5, 2); // <-
}
```

  </div>
  </div>
</details>

---

### Can you explain the function of the timing function CSS steps() function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The CSS `steps()` function is a timing function that divides the input time range into segments, creating a staircase-like transition effect instead of a smooth one.
    </div><br />
  <div><strong>Technical Response:</strong> The steps() function allows you to specify intervals for the timing function. It takes one or two parameters, separated by a comma: a positive integer and an optional start or end value. If we do not include a second parameter, it defaults to end.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```css
#stripe.animate {
  transform: translate(-90%);
  transition-property: transform;
  transition-duration: 9s;
  transition-timing-function: steps(9, start); /* <-- */
}
```

  </div>
  </div>
</details>

---

### Can you explain the function of the CSS transitionend event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `transitionend` event in CSS is triggered when a CSS transition has completed. If a transition gets removed before completion, the transition-property deletes, or the display attribute changes to none, the event is not triggered. In JavaScript, it can be used to call a function once the transition ends.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const transition = document.querySelector('.transition');

transition.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
```

  </div>
  </div>
</details>

---

### Can you describe what CSS keyframes are and how we utilize them in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS keyframes are used to define stages and styles in a CSS animation. They provide control over an animation's intermediary steps, enabling complex animations.
    </div><br />
  <div><strong>Detailed Response:</strong> The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This process gives more control over the intermediate steps of the animation sequence than transitions.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div class="progress"></div>

<style>
  @keyframes go-left-right {
    /* give it a name: "go-left-right" */
    from {
      left: 0px;
    } /* animate from left: 0px */
    to {
      left: calc(100% - 50px);
    } /* animate to left: 100%-50px */
  }

  .progress {
    animation: go-left-right 3s infinite alternate;
    /* apply the animation "go-left-right" to the element
       duration 3 seconds
       number of times: infinite
       alternate direction every time
    */

    position: relative;
    border: 2px solid green;
    width: 50px;
    height: 20px;
    background: lime;
  }
</style>
```

  </div>
  </div>
</details>

---
