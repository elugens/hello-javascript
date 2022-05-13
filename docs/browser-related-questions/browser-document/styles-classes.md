---
title: Styles and Classes
description: Modifying styles and classes in JavaScript is easy. - JavaScript Interview Questions & Answers
sidebar_position: 8
sidebar_label: Styles / Classes
keywords:
  - javascript styles
  - javascript classes
  - styles classes
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
  - javascript styles
  - javascript classes
  - styles classes
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StylesClassesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Styles and Classes | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Styles / Classes**

<CloseAllAnswers />

---

### What is the essential rule to remember when deciding how to layout your page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It would be best if you always prefer to use CSS classes over the style property method. The latter should get used only when classes "can't handle it." For example, if we compute an element's coordinates dynamically and wish to set them from JavaScript, style is permitted.</div><br />
  <div><strong>Technical Response:</strong> We should always prefer CSS classes versus the style property methods. The latter should only get used if classes "can't handle it." For example, if we calculate the coordinates of an element dynamically and wish to set them from JavaScript, style is permitted. In other circumstances, such as turning the text red or adding a background icon – specifying it in CSS and then applying the class - (JavaScript can do that). That is more adaptable and simpler to support.
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

### How do you return the name of a class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The process of exposing or returning the name of a class can get achieved by using the className property.
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

### Is there a property or special object used to modify a class list in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the elem.classList is a special object with methods to add/remove/toggle a single class. So, we can operate both on the whole class string using className or on individual classes using classList.
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

### Can you explain the function and syntax of the elem.style object property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The object elem.style corresponds to what is expressed in the "style" attribute. Setting elem.style.width="100px" works the same as if we had a string width:100px in the attribute style.
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
  <div><strong>Interview Response:</strong> Browser-prefixed properties like -moz-border-radius, -webkit-border-radius also follow the same rule; a dash means uppercase. For instance, the Mozilla border-radius property would look like this: MozBorderRadius.
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
  <div><strong>Technical Response:</strong> There are two approaches to resetting a style property. The novice approach involves using the “delete elem.style.display”, but the specification does not recommend this approach. We should use elem.style.display and set the value to an empty string. If we set style.display to an empty string, then the browser generally applies CSS classes and its built-in styles as if there were no such style.display property at all.
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

### Is there a way to do a full-style rewrite on the DOM element node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There’s a special property style.cssText to do a full rewrite and set the full style as a string. We rarely use this property because such assignment removes all existing styles: it does not add but replaces them. The same can be accomplished by setting an attribute: div.setAttribute('style', 'color: red...').</div><br />
  <div><strong>Technical Response:</strong> We often use style to apply particular properties.*. We can't use div.style="color: red; width: 100px" because div.style is an object that is read-only. There is a special property <em>style.cssText</em>, that does a full rewrite to set the full style as a string. Developers rarely use this property since assigning it eliminates all current styles: it does not create new styles but rather replaces them. Something necessary may get deleted on occasion. However, we may use it securely for new elements if we know it won’t destroy an existing style. Setting an attribute does the same thing: div.setAttribute('style', 'color: red...').
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
  <div><strong>Interview Response:</strong> It is essential to set our CSS style sizes, including units, to ensure proper parsing or outcomes that we present to the end-user.
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
  <div><strong>Interview Response:</strong> Since the style property operates only on the value of the "style" attribute, without any CSS cascade. We can’t read anything that comes from CSS classes using elem.style. We would have to find a built-in method to handle that procedure. The getComputedStyle() method extracts all the actual (computed) CSS properties and values of the specified element. The returned style is a live CSSStyleDeclaration object, which updates automatically when the element's styles are changed. Style sources can include: internal style sheets, external style sheets, inherited styles, and browser default styles. The element and the pseudo-element are the two arguments of the getComputedStyle method. The pseudo-element is a string that specifies which pseudo-element gets matched— omitted (or null) for real elements.
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
  <div><strong>Interview Response:</strong> A computed style value is the value after all CSS rules, and CSS inheritance gets applied due to the CSS cascade. A resolved style value is the one finally applied to the element. </div><br />
  <div><strong>Technical Response:</strong> We can obtain a computed style value after all CSS rules and CSS inheritance due to the CSS cascade. It may appear as height:1em or font-size:125 percent. The style value that eventually gets applied to the element is a resolved style value. Values like 1em and 125 percent are relative. The browser uses the calculated value and makes all units constant and absolute, such as height:20px or font-size:16px. Resolved values for geometry attributes may have a floating-point value, such as width:50.5px. Originally, getComputedStyle was intended to yield calculated values, but a discovery revealed that resolved values are significantly more helpful. As a result, the standard got revised. As a result, getComputedStyles returns a property's resolved value.
  </div><br /><br />

:::note
We should note that getComputedStyles returns the resolved value of a property.
:::

  </div>
</details>

---

### Can you explain how the getComputedStyle method interacts with property names?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should always ask for the exact (full property name) property that we want, like paddingLeft or marginTop or borderTopWidth. Otherwise, the correct result is not guaranteed.
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
  <div><strong>Interview Response:</strong> Developers use the :visited CSS pseudo-class to color visited links. However, getComputedStyle does not provide access to that color; otherwise, an arbitrary page may determine if a user clicked a link by creating it on the page and inspecting the styles. JavaScript may not recognize the styles used by :visited. Furthermore, a CSS constraint prevents the use of geometry-changing styles in :visited. That is to ensure that there is no way for a malicious page to verify if a link was visited and violated a user's privacy.
    </div>
  </div>
</details>

---
