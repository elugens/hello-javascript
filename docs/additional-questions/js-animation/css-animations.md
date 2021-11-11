---
title: CSS-Animations
sidebar_position: 2
---

# CSS-Animations

**Animation: CSS-Animations**

<head>
  <title>CSS-Animations - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Why do we use CSS animation in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS animations make it possible to do simple animations without JavaScript at all. JavaScript can be used to control CSS animations and make them even better, with little code. The general idea is that when you can use CSS versus JavaScript you should because it reduces the load on the browser.
    </div>
  </div>
</details>

Source: <https://javascript.info/css-animations>

### Briefly define the idea around CSS transitions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The idea of CSS transitions is simple. We describe a property and how its changes should be animated. When the property changes, the browser paints the animation. That is, all we need is to change the property, and the fluid transition will be done by the browser.
    </div>
  </div>
</details>

Code Example:

```html
<button id="color">Click me</button>

<style>
  #color  {
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

Source: <https://javascript.info/css-animations>

### What are the four properties used to describe CSS transitions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are 4 properties to describe CSS transitions including transition-property, transition-duration, transition-timing-function, and transition-delay.
    </div>
  </div>
</details>

Source: <https://javascript.info/css-animations>

### Is there way to use the transition property to animate multiple CSS properties at the same time?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can transition multiple CSS properties, like font-size and color.
    </div>
  </div>
</details>

Code Example:

```html
<button id="growing">Click me</button>

<style>
  #growing  {
    transition: font-size 3s,  color 2s;
  }
</style>

<script>
  growing.onclick = function () {
    this.style.fontSize = '36px';

    this.style.color = 'red';
  };
</script>
```

Source: <https://javascript.info/css-animations>

### Can you explain how to use the CSS transition-property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-property CSS property sets the CSS properties to which a transition effect should be applied. In transition-property, we write a list of properties to animate, for instance left, margin-left, height, color, or we could write all, which means “animate all properties”. It should be noted, there are properties which cannot be animated. However, most of the generally used properties are MDN animatable.
    </div>
  </div>
</details>

CSS Example:

```css
div  {
  width: 100px;

  height: 100px;

  background: red;

  transition-property: width; // <--

  transition-duration: 2s;
}

div:hover  {
  width: 300px; // <--
}
```

Source: <https://javascript.info/css-animations#transition-property>

### What does the CSS transition-duration property set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.<br /><br />
  You may specify multiple durations; each duration will be applied to the corresponding property as specified by the transition-property property, which acts as a master list. If there are fewer durations specified than in the master list, the user agent repeat the list of durations. If there are more durations, the list is truncated to the right size. In both case the CSS declaration stays valid.
    </div>
  </div>
</details>

CSS Example:

```css
div  {
  width: 100px;

  height: 100px;

  background: red;

  transition-property: width;

  transition-duration: 2s;
}

div:hover  {
  width: 300px;
}
```

Source: <https://javascript.info/css-animations#transition-duration>

### What does the CSS transition-delay property do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
    </div>
  </div>
</details>

```css
div  {
  width: 100px;

  height: 100px;

  background: red;

  transition-property: width;

  transition-duration: 5s;

  transition-delay: 2s;
}

div:hover  {
  width: 300px;
}
```

Source: <https://javascript.info/css-animations#transition-delay>

### What does the CSS transition-timing-function CSS property do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect. The timing function describes how the animation process is distributed along its timeline. Will it start slowly and then go fast, or vice versa? It appears to be the most complicated property at first. But it becomes quite simple if we devote a bit time to it. The transition-timing-function property accepts two kinds of values: a Bezier curve or steps.
    </div>
  </div>
</details>

CSS Example:

```css
div  {
  width: 100px;

  height: 50px;

  background: red;

  color: white;

  font-weight: bold;

  transition: width 2s;
}

#div1  {
  transition-timing-function: linear;
}

#div2  {
  transition-timing-function: ease;
}

#div3  {
  transition-timing-function: ease-in;
}

#div4  {
  transition-timing-function: ease-out;
}

#div5  {
  transition-timing-function: ease-in-out;
}

div:hover  {
  width: 300px;
}
```

Source: <https://javascript.info/css-animations#transition-delay>

### What does the cubic-bezier() CSS function do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The cubic-bezier() function defines a Cubic Bezier curve. A Cubic Bezier curve is defined by four points P0, P1, P2, and P3. P0 and P3 are the start and the end of the curve and, in CSS, these points are fixed as the coordinates are ratios. P0 is (0, 0) and represents the initial time and the initial state, P3 is (1, 1) and represents the final time and the final state. The cubic-bezier() function can be used with the animation-timing-function property and the transition-timing-function property.
    </div>
  </div>
</details>

CSS Example:

```css
div  {
  width: 100px;

  height: 100px;

  background: red;

  transition: width 2s;

  transition-timing-function: cubic-bezier(0.1,  0.7,  1.0,  0.1);
}

div:hover  {
  width: 300px;
}
```

Source: <https://javascript.info/css-animations#bezier-curve>

### What is the difference between the built-in curves and the cubic-bezier() function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference between the CSS built-in curves and the cubic-bezier() function is that the function can make the animation exceed its range. The control points on the curve can have any y coordinates: even negative or huge ones. Then the Bezier curve would also extend exceptionally low or high, making the animation go beyond its normal range.
    </div>
  </div>
</details>

CSS Example:

```css
.myImage {

    position: relative;

    cursor: pointer;

    width: 177px;

    height: 160px;

    left: 100px;

    transition: left 5s cubic-bezier(.5, -1, .5, 2); ß

}
```

Source: <https://javascript.info/css-animations#bezier-curve>

### Explain the function and syntax of the timing function CSS steps() function.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The steps() function allows you to specify intervals for the timing function. It takes one or two parameters, separated by a comma: a positive integer and an optional value of either start or end. If no second parameter is included, it will default to end.
    </div>
  </div>
</details>

CSS Example:

```css
#stripe.animate {

    transform: translate(-90%);

    transition-property: transform;

    transition-duration: 9s;

    transition-timing-function: steps(9, start); ß

}
```

Source: <https://javascript.info/css-animations#steps>

### Explain the function and syntax of the CSS transitionend event.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to none, then the event will not be generated.
    </div>
  </div>
</details>

JavaScript Example:

```js
const transition = document.querySelector('.transition');

transition.addEventListener('transitionend', () => {
  console.log('Transition ended');
});
```

Source: <https://javascript.info/css-animations#event-transitionend>

### Can you explain what CSS keyframes are used for in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than transitions.
    </div>
  </div>
</details>

CSS Example:

```html
<div class="progress"></div>

<style>

  @keyframes go-left-right {        /* give it a name: "go-left-right" */

    from { left: 0px; }             /* animate from left: 0px */

    to { left: calc(100% - 50px); } /* animate to left: 100%-50px */

  }

  .progress {

    animation: go-left-right 3s infinite alternate;

    /* apply the animation "go-left-right" to the element

      duration 3 seconds

      number of times: infinite

      alternate direction every time

    */

    position: relative;

    border: 2px solid green;

    width: 50px;

    height: 20px;

    background: lime;

  }
</style>
```

Source: <https://javascript.info/css-animations#keyframes>
