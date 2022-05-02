---
title: Shadow DOM
description: Shadow DOM is used to create a virtual DOM tree that is not connected to the real DOM tree. Encapsulation gets provided via the Shadow DOM.
sidebar_position: 3
sidebar_label: Shadow DOM
keywords:
  - shadow dom
  - light dom
  - document object model
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
  - shadow dom
  - light dom
  - document object model
  - interview answers
  - interview questions
---

<head>
  <title>Shadow DOM | JavaScript Frontend Phone Interview Questions</title>
</head>

**Web Components: Shadow DOM**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the Shadow DOM, and how does it relate to the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Encapsulation gets provided via the Shadow DOM. It enables a component to have its own "shadow" DOM tree that cannot unintentionally get accessed from the main page and local style rules and other features.
    </div>
  </div>
</details>

---

### How are complex browser controls parsed into the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Internally, the browser draws or parses them using DOM/CSS. Usually, that DOM structure gets hidden from us, but we may view it in developer tools. In Chrome, for example, we must enable the "Show user agent shadow DOM" option in Dev Tools.<br /><br />
  <img src="/img/browser-controls.png"/>
    </div>
  </div>
</details>

---

### Are Shadow DOM elements accessible via JavaScript calls or selectors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we cannot retrieve built-in shadow DOM elements by regular JavaScript calls or selectors. These are not regular children but rather a powerful encapsulation technique. However, we can access their pseudo attributes via the CSS styles. This behavior exists for historical reasons to ensure that the CSS styles access the sub-elements.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  /* make the slider track red */
  input::-webkit-slider-runnable-track {
    background: red;
  }
</style>

<input type="range" />
```

  </div>
  </div>
</details>

---

### Regarding the DOM, what are the two types of subtrees?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regarding the DOM, there are two subtrees: light trees and shadow trees. The light tree is a standard DOM subtree made-up of standard HTML children, and the Shadow tree is a hidden DOM subtree that is not mirrored in HTML and is hence invisible to inquisitive eyes. If an element has both, the browser only draws the shadow tree. But we may also create a scene with shadow and light trees.
    </div>
  </div>
</details>

---

### Is it possible to hide custom element component internals using the shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a shadow tree can be used in Custom Elements to hide component internals and apply component-local styles.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  customElements.define(
    'show-hello',
    class extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<p>
      Hello, ${this.getAttribute('name')}
    </p>`;
      }
    }
  );
</script>

<show-hello name="John"></show-hello> // shows Hello, John
```

  </div>
  </div>
</details>

---

### What are the limitations to creating a shadow root on a custom element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two restrictions for creating a root on a custom element. We can only have one shadow root per element. The element must be either a custom element or one of the following: "article," "aside," "blockquote," "body," "div," "footer," "h1 to h6," "header," "main," "nav," "p," "section," or "span." Other elements, such as &#8249;img&#8250;, cannot host shadow-tree.
    </div>
  </div>
</details>

---

### Can you explain the function and syntax of the attachShadow() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The attachShadow() function connects the shadow DOM tree to a specific element and returns a reference to its ShadowRoot. To initiate the Shadow Root, we must use the mode argument with the open parameter. The open parameter makes the element of the shadow root accessible outside of the root. The second parameter, closed, denies access to the nodes of the closed shadow root from JavaScript outside it. An additional argument delegatesFocus rarely gets used, delegatesFocus is a Boolean; when set to true, it specifies behavior that mitigates custom element issues around focus-ability.
    </div><br />
    <strong>Syntax: </strong> const shadow = this.attachShadow(&#123;mode: 'open'&#125;);<br /><br />

:::note
You cannot attach a shadow root to every type of element, and some cannot have a shadow DOM for security reasons (for example, `<a>`) and more besides.
:::

  </div>
</details>

---

### Can you explain the delimitation of the shadow DOM from the main document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The shadow DOM gets separated from the original content. From the light DOM, querySelector does not see shadow DOM items. Ids in the shadow DOM may clash with those in the light DOM, and they must be one-of-a-kind exclusively within the shadow tree. Shadow DOM comes with its private stylesheet; style rules from the outside DOM get ignored.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  /* document style won't apply to the shadow tree inside #elem (1) */
  p {
    color: red;
  }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({ mode: 'open' });
  // shadow tree has its own style (2)
  elem.shadowRoot.innerHTML = `
    <style> p { font-weight: bold; } </style>
    <p>Hello, John!</p>
  `;

  // <p> is only visible from queries inside the shadow tree (3)
  alert(document.querySelectorAll('p').length); // 0
  alert(elem.shadowRoot.querySelectorAll('p').length); // 1
</script>
```

  </div>
  </div>
</details>

---
