---
title: Shadow DOM
sidebar_position: 3
---

# Shadow DOM

**Web Components: Shadow DOM**

<head>
  <title>Shadow DOM - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the Shadow DOM in relation to the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Shadow DOM serves for encapsulation. It allows a component to have its very own “shadow” DOM tree, that cannot be accidentally accessed from the main document, may have local style rules, and more.
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom>

### How are complex browser controls parsed into the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The browser uses DOM/CSS internally to draw or parse them. That DOM structure is normally hidden from us, but we can see it in developer tools. E.g., in Chrome, we need to enable in Dev Tools “Show user agent shadow DOM” option.<br /><br />
  <img src="/img/browser-controls.png"/>
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom>

### Are Shadow DOM elements accessible via JavaScript calls or selectors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we cannot get built-in shadow DOM elements by regular JavaScript calls or selectors. These are not regular children, but rather a powerful encapsulation technique. However, we can access their pseudo attributes via the CSS styles. This exists for historical reasons to ensure that the CSS styles have access to the sub-elements.
    </div>
  </div>
</details>

Code Example:

```html
<style>
  /* make the slider track red */

  input::-webkit-slider-runnable-track  {
    background: red;
  }
</style>

<input type="range" />
```

Source: <https://javascript.info/shadow-dom#shadow-tree>

### What are the two types of subtrees in relation to the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two types of subtrees in relation to the DOM including the light tree and shadow tree. The light tree is a regular DOM subtree, made of regular HTML children. The Shadow tree is a hidden DOM subtree, not reflected in HTML, hidden from prying eyes. If an element has both, then the browser renders only the shadow tree. But we can setup a kind of composition between shadow and light trees as well.
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom#shadow-tree>

### Is it possible to hide custom element component internals using the shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, shadow tree can be used in Custom Elements to hide component internals and apply component-local styles.
    </div>
  </div>
</details>

Code Example:

```html
<script>
  customElements.define(
    'show-hello',
    class extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `<p>

        Hello, ${this.getAttribute('name')}

      </p>`;
      }
    }
  );
</script>

<show-hello name="John"></show-hello>
<!-- shows Hello, John -->
```

Source: <https://javascript.info/shadow-dom#shadow-tree>

### What are the limitations to creating a shadow root on a custom element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two limitations to creating a root on a custom element. We can create only one shadow root per element. The elem must be either a custom element, or one of one of the following: “article”, “aside”, “blockquote”, “body”, “div”, “footer”, “h1…h6”, “header”, “main” “nav”, “p”, “section”, or “span”. Other elements, like &#8249;img&#8250;, cannot host shadow tree.
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom#shadow-tree>

### Explain the function and syntax of the attachShadow() method.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element.attachShadow() method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot. To initiate the Shadow Root, we must use the mode argument with the open parameter. The open parameter makes element of the shadow root accessible outside of the root. The counter parameter is closed that denies access to the nodes of the closed shadow root from JavaScript outside. There is an additional argument that is rarely used, delegatesFocus is a Boolean, when set to true specifies behavior that mitigates custom element issues around focus-ability.
    </div>
  </div>
</details>

:::note
You cannot attach a shadow root to every type of element. There are some that cannot have a shadow DOM for security reasons (for example `<a>`), and more besides.
:::

**Syntax:** const shadow = this.attachShadow({mode: 'open'})

Source: <https://javascript.info/shadow-dom#shadow-tree>

### Can you explain the delimitation of the shadow DOM from the main document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Shadow DOM is strongly delimited from the main document. Shadow DOM elements are not visible to querySelector from the light DOM. Shadow DOM elements may have ids that conflict with those in the light DOM. They must be unique only within the shadow tree. Shadow DOM has own stylesheets. Style rules from the outer DOM do not get applied.
    </div>
  </div>
</details>

**Code Example:**

```html
<style>

  /* document style won't apply to the shadow tree inside #elem (1) */

  p { color: red; }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({ mode: 'open' });

  // shadow tree has its own style (2)

  elem.shadowRoot.innerHTML = `

      <style> p { font-weight: bold; } </style>

      <p>Hello, John!</p>

    `;

  // <p> is only visible from queries inside the shadow tree (3)

  alert(document.querySelectorAll('p').length); // 0
  alert(elem.shadowRoot.querySelectorAll('p').length); // 1
</script>
```

Source: <https://javascript.info/shadow-dom#encapsulation>
