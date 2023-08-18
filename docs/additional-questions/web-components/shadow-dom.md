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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ShadowDOMSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Shadow DOM | JavaScript Frontend Phone Interview Questions</title>
</head>

**Web Components: Shadow DOM**

---

<AdSense />

---

<CloseAllAnswers />

### What is the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's a web standard providing encapsulation for HTML, style, and JavaScript in the DOM. It keeps component internals hidden, separate from the main document tree.
    </div><br/>
  <div><strong>Technical Response:</strong> The Shadow DOM is a method of isolating specific parts of the DOM tree. The DOM tree is a tree-like structure that includes the HTML, CSS, and JavaScript of a web page. This isolation helps developers create components that can be reused on multiple web pages without impacting other parts of the page. Additionally, Shadow DOM has several other advantages, including improved performance and security.
    </div>
  </div>
</details>

---

### What are the benefits of using Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Shadow DOM ensures encapsulation, which promotes reusability, reduces code conflicts, and protects internal component logic from external manipulation.
    </div>
  </div>
</details>

---

### How is a Shadow DOM tree attached to an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Shadow DOM tree is attached to an element using the <strong>attachShadow()</strong> method on that element. This creates a shadow root to which you can append content.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML:

```html
<div id="shadowHost"> </div>
```

JavaScript:

```javascript
// Select the host element
let shadowHost = document.getElementById('shadowHost');

// Attach the shadow root
let shadowRoot = shadowHost.attachShadow({mode: 'open'});

// Now we can populate the shadow DOM
let content = document.createElement('p');
content.textContent = 'This is content in the Shadow DOM!';
shadowRoot.appendChild(content);
```

  </div>
  </div>
</details>

---

### What is "open" and "closed" mode in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Shadow DOM, "open" mode allows access to the shadow root via the `element.shadowRoot` property. In "closed" mode, this property returns null, preventing access to the shadow root from outside scripts.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example to demonstrate the difference between "open" and "closed" Shadow DOM:

```javascript
// Open mode
let openElem = document.createElement('div');
let openShadow = openElem.attachShadow({mode: 'open'});
console.log(openElem.shadowRoot); // Logs the Shadow root

// Closed mode
let closedElem = document.createElement('div');
let closedShadow = closedElem.attachShadow({mode: 'closed'});
console.log(closedElem.shadowRoot); // Logs null
```

In the above example, `openElem.shadowRoot` gives us the shadow root because it's in "open" mode, but `closedElem.shadowRoot` returns null because it's in "closed" mode.

  </div>
  </div>
</details>

---

### Can styles penetrate Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, styles from the main document do not penetrate into the Shadow DOM, ensuring style encapsulation. However, CSS custom properties (variables) can be used to style Shadow DOM from the main document.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's consider a custom element with Shadow DOM:

HTML:

```html
<my-element></my-element>
```

JavaScript:

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        p {
          color: var(--color, black);
        }
      </style>
      <p>Hello!</p>
    `;
  }
}
customElements.define('my-element', MyElement);
```

CSS:

```css
my-element {
  --color: red;
}
```

Here, `my-element` contains a Shadow DOM with a `p` tag. Although styles from the main document don't penetrate the Shadow DOM, CSS custom properties can. The CSS variable `--color` is defined in the main document and used in the Shadow DOM, turning the text red.

  </div>
  </div>
</details>

---

### What is a "light DOM"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "Light DOM" is the regular, non-encapsulated DOM created by users of a web component. It's the content that's provided between the opening and closing tags of a custom element.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example showing a custom element with light DOM content:

HTML:

```html
<my-element>
  <p>This is light DOM content!</p>
</my-element>
```

JavaScript:

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});
    let slot = document.createElement('slot');
    shadow.appendChild(slot); // slot element is a placeholder for light DOM content
  }
}

customElements.define('my-element', MyElement);
```

In this example, the paragraph (`<p>This is light DOM content!</p>`) is the light DOM content for `my-element`. The 'slot' element is used in the Shadow DOM to designate a place for this light DOM content.

  </div>
  </div>
</details>

---

### How are complex browser controls parsed into the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Browser controls like text fields or video players are parsed into the browser using Shadow DOM, preserving user interface functionality and styles. Internally, the browser draws or parses them using DOM/CSS. Usually, that DOM structure gets hidden from us, but we may view it in developer tools. In Chrome, for example, we must enable the "Show user agent shadow DOM" option in Dev Tools.<br /><br />
  <img src="/img/browser-controls.png"/>
    </div>
  </div>
</details>

---

### What is a slot in relation to the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A "slot" is an HTML element used in the Shadow DOM to designate a placeholder for Light DOM content. It allows component users to compose their own markup that will be rendered in the Shadow DOM.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example showing a custom element with a slot in its Shadow DOM:

HTML:

```html
<my-element>
  <p>This is light DOM content!</p>
</my-element>
```

JavaScript:

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});
    let slot = document.createElement('slot');
    shadow.appendChild(slot); // slot element is a placeholder for light DOM content
  }
}

customElements.define('my-element', MyElement);
```

In this example, the 'slot' element in the Shadow DOM of `my-element` serves as a placeholder for the Light DOM content (`<p>This is light DOM content!</p>`). When `my-element` is rendered, the slot is replaced by the Light DOM content.

  </div>
  </div>
</details>

---

### How do events behave in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Events originating inside a Shadow DOM (bubble up) to the main document, but the `target` property of the event is retargeted to the host element, due to event retargeting, preserving the Shadow DOM's encapsulation.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example showing how events behave in a Shadow DOM:

HTML:

```html
<my-button></my-button>
```

JavaScript:

```javascript
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'}).innerHTML = `<button>Click me</button>`;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      console.log('Button clicked inside Shadow DOM');
    });
  }
}
customElements.define('my-button', MyButton);

document.querySelector('my-button').addEventListener('click', (event) => {
  console.log('Event received in light DOM, target:', event.target);
});
```

When the button inside `my-button`'s Shadow DOM is clicked, it logs 'Button clicked inside Shadow DOM'. The same click event propagates to the main document, triggering the 'click' event listener on `my-button`, but the event target is retargeted to `my-button`.

  </div>
  </div>
</details>

---

### Can JavaScript interact with elements inside a Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript can interact with elements inside a Shadow DOM. You can access the Shadow DOM via the `.shadowRoot` property of the host element and then manipulate its content.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example of interacting with elements inside a Shadow DOM:

```javascript
// Assume a custom element with an attached shadow root
let customElement = document.querySelector('my-element');

let shadowRoot = customElement.shadowRoot; // Access the shadow root

let shadowElement = shadowRoot.querySelector('.shadow-class'); // Access an element in the shadow DOM

shadowElement.textContent = 'New Text'; // Change the content of the element
```

This code assumes there's a custom element `<my-element>` in the document with an attached Shadow DOM, and inside the Shadow DOM, there's an element with the class `shadow-class`. The script accesses the Shadow DOM, finds the element, and changes its text content.

  </div>
  </div>
</details>

---

### How do you distribute nodes in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Nodes in Shadow DOM are distributed using the `&#60;slot&#62;` element. Light DOM content intended for a particular slot can be directed there using the `slot` attribute, matching the `name` attribute of the desired `&#60;slot&#62;`.
  </div>
  </div>
</details>

---

### Can you access elements in a closed Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, elements in a closed Shadow DOM cannot be accessed from outside the Shadow DOM using JavaScript. The `shadowRoot` property of the host element returns null when the Shadow DOM is closed.
  </div>
  </div>
</details>

---

### What is event retargeting in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event retargeting in Shadow DOM is a process that changes the `target` property of an event to point to the Shadow DOM's host element when the event bubbles out of the Shadow DOM, preserving encapsulation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example illustrating event retargeting in Shadow DOM:

HTML:

```html
<my-element>
  <button>Click me</button>
</my-element>
```

JavaScript:

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <button>Button inside Shadow DOM</button>
    `;
  }
}

customElements.define('my-element', MyElement);

document.querySelector('my-element').addEventListener('click', (event) => {
  console.log('Event received in light DOM, target:', event.target);
});
```

When you click the button inside `my-element`'s Shadow DOM, the event bubbles out to the light DOM and triggers the 'click' event listener. The `target` property of the event is retargeted to the host element (`my-element`), and it logs the target as the host element in the console.

  </div>
  </div>
</details>

---

### Are Shadow DOM elements accessible via JavaScript calls or selectors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Shadow DOM elements are accessible via JavaScript, but not directly via global selectors. They are encapsulated and can be accessed through the host element using the .shadowRoot property, or through methods like .querySelector().
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic JavaScript code example of accessing a Shadow DOM element:

```javascript
let hostElement = document.querySelector('#shadow-host');
let shadowRoot = hostElement.shadowRoot; // Access the shadow root

let shadowElement = shadowRoot.querySelector('.shadow-element'); // Access element within the shadow DOM
```

---

:::note
This assumes an element with the id `shadow-host` contains a Shadow DOM, and there's an element with the class `shadow-element` within that Shadow DOM.
:::

  </div>
  </div>
</details>

---

### Regarding the DOM, what are the two types of subtrees?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regarding the DOM, there are two subtrees: light trees and shadow trees. The light tree is a standard DOM subtree made-up of standard HTML children, and the Shadow tree is a hidden DOM subtree that is not mirrored in HTML and is hence invisible to inquisitive eyes. If an element has both, the browser only draws the shadow tree. But we may also create a scene with shadow and light trees.
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

<img src="/img/shadow-tree.svg" /><br /><br/>
  </div>
  </div>
</details>

---

### Is it possible to hide custom element component internals using the shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's possible. Shadow DOM provides encapsulation for the JavaScript, CSS, and templates in a Web Component, which lets you hide component internals and separate them from the rest of the document.
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

### Can you explain the function of the attachShadow() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `attachShadow()` method is used to attach a Shadow DOM to a specified element, returning a reference to its shadow root. It accepts an options object with a `mode` property, which can be 'open' or 'closed'.
    </div><br />
  <div><strong>Technical Response:</strong> The attachShadow() function connects the shadow DOM tree to a specific element and returns a reference to its ShadowRoot. To initiate the Shadow Root, we must use the mode argument with the open parameter. The open parameter makes the element of the shadow root accessible outside of the root. The second parameter, closed, denies access to the nodes of the closed shadow root from JavaScript outside it. An additional argument delegatesFocus rarely gets used, delegatesFocus is a Boolean; when set to true, it specifies behavior that mitigates custom element issues around focus-ability.
    </div><br />
    <strong>Syntax: </strong> const shadow = this.attachShadow(&#123;mode: 'open'&#125;);<br /><br />

Here's a JavaScript code example of using `attachShadow()` to create a shadow root:

```javascript
// Create a new custom element
let customElement = document.createElement('div');

// Attach a shadow root to the custom element
let shadow = customElement.attachShadow({mode: 'open'});

// Now you can add content to the shadow root
shadow.innerHTML = '<p>Hello from the shadow DOM!</p>';
```

In this example, the `attachShadow` method is used to create a new shadow root for the `customElement`. The content of the shadow root is then set to a paragraph with the text "Hello from the shadow DOM!".

---

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
  <div><strong>Interview Response:</strong> Shadow DOM is encapsulated and isolated from the main document. This means styles, scripts, and DOM structure within a shadow DOM don't leak out, and styles and scripts from the main document don't penetrate into it.
    </div><br />
  <div><strong>Technical Response:</strong> The shadow DOM gets separated from the original content. From the light DOM, querySelector does not see shadow DOM items. Ids in the shadow DOM may clash with those in the light DOM, and they must be one-of-a-kind exclusively within the shadow tree. Shadow DOM comes with its private stylesheet; style rules from the outside DOM get ignored.
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
  console.log(document.querySelectorAll('p').length); // 0
  console.log(elem.shadowRoot.querySelectorAll('p').length); // 1
</script>
```

  </div>
  </div>
</details>

---
