---
title: Styles and Classes
description: Modifying styles and classes in JavaScript is easy. - JavaScript Interview Questions & Answers
sidebar_position: 8
sidebar_label: Styles / Classes
---

**Browser Document: Styles / Classes**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the most important rule to follow when you are choosing a way to style your page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should always prefer CSS classes verses the style property methods. The latter should only be used if classes “can’t handle it”. For example, style is acceptable if we calculate coordinates of an element dynamically and want to set them from JavaScript.</div><br />
  <div><strong>Technical Response:</strong> We should always prefer CSS classes verses the style property methods. The latter should only be used if classes “can’t handle it”. For example, style is acceptable if we calculate coordinates of an element dynamically and want to set them from JavaScript. For other cases, like making the text red, adding a background icon – describe that in CSS and then add the class (JavaScript can do that). That is more flexible and easier to support.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let top = /* complex calculations */;
let left = /* complex calculations */;

elem.style.left = left; // e.g '123px', calculated at run-time
elem.style.top = top; // e.g '456px'
```

  </div>
  </div>
</details>

---

### How to do you return the name of a class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The process of exposing or returning the name of a class can be achieved by using the className property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body class="main page">
  <script>
    alert(document.body.className); // returns main page
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Is there property or special object used to modify a class list in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the elem.classList is a special object with methods to add/remove/toggle a single class. So, we can operate both on the full class string using className or on individual classes using classList.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body class="main page">
  <script>
    // add a class
    document.body.classList.add('article');

    alert(document.body.className); // main page article
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the elem.style object property.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The property elem.style is an object that corresponds to what’s written in the "style" attribute. Setting elem.style.width="100px" works the same as if we had in the attribute style a string width:100px.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  // Turns the document body background color to green
  document.body.style.backgroundColor = prompt('background color?', 'green');
</script>
```

  </div>
  </div>
</details>

---

### What is the rule for prefixed browser properties in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Browser-prefixed properties like -moz-border-radius, -webkit-border-radius also follow the same rule, a dash means upper case. For instance, the Mozilla border radius property it would look like this: MozBorderRadius.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  button.style.MozBorderRadius = '5px';
  button.style.WebkitBorderRadius = '5px';
</script>
```

  </div>
  </div>
</details>

---

### What is the proper approach to resetting an element style property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should use elem.style.display and set the value to an empty string.</div><br />
  <div><strong>Technical Response:</strong> There are two approaches to resetting a style property. The novice approach involves the use of the “delete elem.style.display”, but this approach is not recommended. We should use elem.style.display and set the value to an empty string. If we set style.display to an empty string, then the browser applies CSS classes and its built-in styles normally, as if there were no such style.display property at all.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// if we run this code, the <body> will blink
document.body.style.display = 'none'; // hide

setTimeout(() => (document.body.style.display = ''), 1000); // back to normal
```

  </div>
  </div>
</details>

---

### Is there a way to do a full style rewrite on DOM element node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To set the full style as a string, there’s a special property style.cssText to do a full rewrite. This property is rarely used, because such assignment removes all existing styles: it does not add but replaces them. The same can be accomplished by setting an attribute: div.setAttribute('style', 'color: red...').</div><br />
  <div><strong>Technical Response:</strong> Normally, we use <em>style.</em> to assign individual style properties. We can’t set the full style like div.style="color: red; width: 100px", because div.style is an object, and it’s read-only. To set the full style as a string, there’s a special property style.cssText to do a full rewrite. This property is rarely used, because such assignment removes all existing styles: it does not add but replaces them. May occasionally delete something needed. But we can safely use it for new elements when we know we will not delete an existing style. The same can be accomplished by setting an attribute: div.setAttribute('style', 'color: red...').
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="div">Button</div>

<script>
  // we can set special style flags like "important" here
  div.style.cssText = `color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;

  alert(div.style.cssText);
</script>
```

  </div>
  </div>
</details>

---

### Why is it important to mind your CSS units in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is important to set our CSS style sizes including units to ensure proper parsing or outcomes that we present to the end-user.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <script>
    // doesn't work!
    document.body.style.margin = 20;
    alert(document.body.style.margin); // '' (empty string, the assignment is ignored)

    // now add the CSS unit (px) - and it works
    document.body.style.margin = '20px';
    alert(document.body.style.margin); // 20px

    alert(document.body.style.marginTop); // 20px
    alert(document.body.style.marginLeft); // 20px
  </script>
</body>
```

:::note
For instance, we should not set elem.style.top to 10, but rather to 10px. Otherwise, it would not work as intended and return a string instead of setting the top to 10px.
:::

  </div>
  </div>
</details>

---

### Can you explain how to read computed values in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Since, the style property operates only on the value of the "style" attribute, without any CSS cascade. We can’t read anything that comes from CSS classes using elem.style. We would have to find a built-in method to handle that procedure. The getComputedStyle() method gets all the actual (computed) CSS property and values of the specified element. The returned style is a live CSSStyleDeclaration object, which updates automatically when the element's styles are changed. Style sources can include: internal style sheets, external style sheets, inherited styles and browser default styles. The getComputedStyle method has two parameters including the element and the pseudo element. The pseudo element is a string specifying the pseudo-element to match. Omitted (or null) for real elements.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<head>
  <style>
    body {
      color: red;
      margin: 5px;
    }
  </style>
</head>
<body>
  <script>
    let computedStyle = getComputedStyle(document.body);

    // now we can read the margin and the color from it

    alert(computedStyle.marginTop); // 5px
    alert(computedStyle.color); // rgb(255, 0, 0)
  </script>
</body>
```

  </div>
  </div>
</details>

---

### What is the difference between a computed and resolved value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A computed style value is the value after all CSS rules and CSS inheritance is applied, as the result of the CSS cascade. A resolved style value is the one finally applied to the element.</div><br />
  <div><strong>Technical Response:</strong> A computed style value is the value after all CSS rules and CSS inheritance is applied, as the result of the CSS cascade. It can look like height:1em or font-size:125%. A resolved style value is the one finally applied to the element. Values like 1em or 125% are relative. The browser takes the computed value and makes all units fixed and absolute, for instance: height:20px or font-size:16px. For geometry properties resolved values may have a floating point, like width:50.5px. A long time ago getComputedStyle was created to get computed values, but it turned out that resolved values are much more convenient, and the standard changed. So, it should be noted that getComputedStyles actually returns the resolved value of a property.
  </div><br /><br />

:::note
It should be noted that getComputedStyles actually returns the resolved value of a property.
:::

  </div>
</details>

---

### Explain how the getComputedStyle method interacts with property names.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should always ask for the exact (full property name) property that we want, like paddingLeft or marginTop or borderTopWidth. Otherwise the correct result is not guaranteed.
    </div><br /><br />

:::note
If there are properties paddingLeft/paddingTop, then what should we get for getComputedStyle(elem).padding? Nothing, or maybe a “generated” value from known paddings? There is no standard rule here, but we should always ask for the full property name.
:::

  </div>
</details>

---

### Why are styles applied to :visited links always hidden by getComputedStyles?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Visited links may be colored using :visited CSS pseudo class. But getComputedStyle does not give access to that color, because otherwise an arbitrary page could find out whether the user visited a link by creating it on the page and checking the styles. JavaScript may not see the styles applied by :visited. And also, there’s a limitation in CSS that forbids applying geometry-changing styles in :visited. That is to guarantee that there is no side way for an evil page to test if a link was visited and hence to break the privacy.
    </div>
  </div>
</details>

---
