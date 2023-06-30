---
title: Shadow DOM Slots - Composition
description: Shadow DOM Slots is used to compose elements in Shadow DOM. It is used to compose elements in Shadow DOM. JavaScript Frontend Phone Interview Questions
sidebar_position: 5
sidebar_label: Shadow DOM Slots
keywords:
  - shadow dom slots
  - shadow dom composition
  - shadow dom
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
  - shadow dom slots
  - shadow dom composition
  - shadow dom
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ShadowDOMSlotsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Shadow DOM Slots - Composition | HelloJavaScript.info</title>
</head>

**Web Components: Shadow DOM Slots - Composition**

<CloseAllAnswers />

---

### What is the HTML named `<slot>` element used for in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The HTML `&#60;slot&#62;` element is used in web development to create placeholder slots in web components where users can insert their own custom markup, enabling content composition.
    </div>
  </div>
</details>

---

### Why are Slots used in Web Components?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Slots allow content composition by letting developers distribute child elements into predefined places in the template of a custom element.
  </div>
  </div>
</details>

---

### How many types of slots are there?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two types of slots: named and default. Named slots are defined by a "slot" attribute, while default slots hold any unassigned content.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template id="myComponent">
  <div>
    <slot name="header"></slot> <!-- named slot -->
    <slot></slot> <!-- default slot -->
  </div>
</template>

<script>
class MyComponent extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('myComponent');
    const node = document.importNode(template.content, true);
    this.attachShadow({mode: 'open'}).appendChild(node);
  }
}
customElements.define('my-component', MyComponent);
</script>

<my-component>
  <h1 slot="header">Hello World</h1> <!-- content for named slot -->
  <p>This is some text.</p> <!-- content for default slot -->
</my-component>
```

In this example, we create a Web Component with a named slot (for a header) and a default slot. We then use the custom element, providing content for both slots.

  </div>
  </div>
</details>

---

### What's the difference between a named slot and a default slot?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named slots are for specific content, while a default slot catches all unassigned or unspecified content.
  </div>
  </div>
</details>

---

### How can you select elements assigned to slots in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the assignedElements() method of the Slot API to select elements assigned to slots in the Shadow DOM.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template id="myComponent">
  <div>
    <slot name="header"></slot> <!-- named slot -->
    <slot></slot> <!-- default slot -->
  </div>
</template>

<script>
class MyComponent extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('myComponent');
    const node = document.importNode(template.content, true);
    this.attachShadow({mode: 'open'}).appendChild(node);

    // After the node is attached
    this.shadowRoot.addEventListener('slotchange', function(e) {
      let slotElement = e.target;
      let nodes = slotElement.assignedElements();
      nodes.forEach(node => console.log(node.tagName));  // Outputs the tag names of the assigned elements
    });
  }
}
customElements.define('my-component', MyComponent);
</script>

<my-component>
  <h1 slot="header">Hello World</h1> <!-- content for named slot -->
  <p>This is some text.</p> <!-- content for default slot -->
</my-component>
```

In this example, after the Shadow DOM is attached, a 'slotchange' event listener is added. Whenever a slot change occurs, it selects the slot that changed (`e.target`), gets all elements assigned to that slot with `slotElement.assignedElements()`, and logs the tag name of each assigned element.

  </div>
  </div>
</details>

---

### What's the difference between assignedNodes and assignedElements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The assignedNodes method returns all assigned nodes, including text nodes, while the assignedElements method only returns element nodes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template id="myComponent">
  <div>
    <slot name="header"></slot> <!-- named slot -->
  </div>
</template>

<script>
class MyComponent extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('myComponent');
    const node = document.importNode(template.content, true);
    this.attachShadow({mode: 'open'}).appendChild(node);

    // After the node is attached
    this.shadowRoot.addEventListener('slotchange', function(e) {
      let slotElement = e.target;
      let nodes = slotElement.assignedNodes();
      let elements = slotElement.assignedElements();
      console.log('assignedNodes: ', nodes);  
      console.log('assignedElements: ', elements);
    });
  }
}
customElements.define('my-component', MyComponent);
</script>

<my-component>
  <span slot="header">Hello </span>World <!-- content for named slot -->
</my-component>
```

In this example, `slotElement.assignedNodes()` returns both the `<span>` element and the following text node ("World"), while `slotElement.assignedElements()` only returns the `<span>` element.

  </div>
  </div>
</details>

---

### Can you change the slot an element is assigned to?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by changing the slot attribute of an element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<template id="myComponent">
  <div>
    <slot name="header"></slot> <!-- named slot -->
    <slot name="footer"></slot> <!-- another named slot -->
  </div>
</template>

<script>
class MyComponent extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('myComponent');
    const node = document.importNode(template.content, true);
    this.attachShadow({mode: 'open'}).appendChild(node);
  }
}
customElements.define('my-component', MyComponent);
</script>

<my-component>
  <h1 slot="header">Hello World</h1> <!-- content for named slot -->
</my-component>

<button onclick="changeSlot()">Change Slot</button>

<script>
function changeSlot() {
  const h1 = document.querySelector('my-component h1');
  h1.setAttribute('slot', 'footer'); // Changes the slot from "header" to "footer"
}
</script>
```

In this example, there's a `<h1>` element initially assigned to the "header" slot. When the "Change Slot" button is clicked, the `changeSlot()` function changes the `slot` attribute of the `<h1>` element from "header" to "footer", thereby changing which slot it is assigned to. After the function runs, the `<h1>` element is assigned to the "footer" slot instead of the "header" slot.

  </div>
  </div>
</details>

---

### What happens when multiple elements have the same slot name?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All elements with the same slot name will be inserted into the named slot in order.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML (Light DOM):

```html
<my-element>
    <p slot="same-slot">First</p>
    <p slot="same-slot">Second</p>
    <p slot="same-slot">Third</p>
</my-element>
```

HTML (Shadow DOM):

```html
<template id="my-element-template">
    <div>
        <slot name="same-slot"></slot>
    </div>
</template>

<script>
class MyElement extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        let template = document.getElementById('my-element-template');
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('my-element', MyElement);
</script>
```

In this case, the shadow DOM has a single slot named `same-slot`. The light DOM of the custom element `my-element` has three `<p>` elements, each also assigned to `same-slot`. When the browser renders this, the content assigned to `same-slot` in the light DOM gets inserted into the `same-slot` slot of the shadow DOM. Since there are multiple elements assigned to `same-slot`, they are inserted in order. So the resulting rendered HTML would look like:

```html
<my-element>
    <div>
        <p slot="same-slot">First</p>
        <p slot="same-slot">Second</p>
        <p slot="same-slot">Third</p>
    </div>
</my-element>
```

So the answer to your question is, when multiple elements have the same slot name, they are inserted into the slot in the order they appear in the light DOM.

  </div>
  </div>
</details>

---

### Can a web component have more than one slot?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a web component can have multiple slots.
  </div>
  </div>
</details>

---

### What happens to elements that don't have a slot attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Elements without a slot attribute are assigned to the default slot.
  </div>
  </div>
</details>

---

### What happens if there is no default slot?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If there's no default slot, elements without a slot attribute will not be displayed.
  </div>
  </div>
</details>

---

### Is it necessary to use slots when creating custom elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, but slots provide a flexible way to customize content in custom elements.
  </div>
  </div>
</details>

---

### What happens when a slot is deleted from the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a slot is removed, the assigned nodes are not displayed but still exist in the Light DOM.
  </div>
  </div>
</details>

---

### Can a slotted element access data from the shadow host?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a slotted element operates in the light DOM and cannot directly access the shadow host's internal state.
  </div>
  </div>
</details>

---

### What is the definition of a flattened DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A flattened DOM refers to the resulting structure when shadow DOM's nodes and light DOM's slotted content are combined, creating a single tree that represents the rendered layout. The combination of the Light DOM and the shadow DOM is considered the flattened DOM result. The flattened DOM is viewable in the developer tools for inspection but unavailable in the source.
    </div>
  </div>
</details>

---

### What is the slot attribute's principal limitation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The slot="..." attribute is only valid for direct children of the shadow host. For nested elements, it gets ignored. If there are multiple elements in light DOM with the same slot name, they append into the slot.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- invalid slot, must be direct child of user-card -->
    <span slot="birthday">01.01.2001</span>
  </div>
</user-card>

<!-- The slots below are appended in order -->
<user-card>
  <span slot="username">John</span>
  <span slot="username">Smith</span>
</user-card>
```

  </div>
  </div>
</details>

---

### Can you explain what slot fallback content is in browser rendering?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we put something inside a &#60;slot&#62;, it becomes the fallback, “default” content. The browser shows it if there is no corresponding filler in light DOM. If the slot is in the shadow DOM it renders if there is no slot available in the light DOM.
    </div>
  </div>
</details>

---

### In the Shadow DOM, what is the default slot?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Shadow DOM, the default slot is the `&#8249;slot&#8250;` element without a `name` attribute, which catches all unassigned or unspecified content from the light DOM.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
    <div>Name:
      <slot name="username"></slot>
    </div>
    <div>Birthday:
      <slot name="birthday"></slot>
    </div>
    <fieldset>
      <legend>Other information</legend>
      <slot></slot>  first unnamed slot
    </fieldset>
    `;
      }
    }
  );
</script>

<user-card>
  <div>I like to swim.</div>
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
  <div>...And play volleyball too!</div>
</user-card>
```

  </div>
  </div>
</details>

---

### What are the three methods that handle HTML slot element assignment?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three methods handling HTML slot assignment are `slot.assignedNodes()`, `slot.assignedElements()`, and the `slotchange` event listener.
    </div><br />
  <div><strong>Technical Response:</strong> The HTML slot element has three main methods, including assignedSlot, assignedNodes, and assignedElements used to handle or assess element node assignment. The assignedSlot method returns the &#8249;slot&#8250; element that the node gets assigned. The assignedElements() method returns a sequence of the nodes assigned to this slot, and if the flatten option sets to true, the assigned nodes of any other slots are descendants of this slot. If no assigned nodes return, the slot's fallback content returns. The assignedSlot method returns an HTMLSlotElement representing the &#8249;slot&#8250; element the node is inserted in. These methods are useful when we need to show the slotted content and track it in JavaScript.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<custom-menu id="menu">
  <span slot="title">Candy menu</span>
  <li slot="item">Lollipop</li>
  <li slot="item">Fruit Toast</li>
</custom-menu>

<script>
  customElements.define(
    'custom-menu',
    class extends HTMLElement {
      items = [];

      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div class="menu">
      <slot name="title"></slot>
      <ul><slot name="item"></slot></ul>
    </div>`;

        // triggers when slot content changes
        this.shadowRoot.firstElementChild.addEventListener(
          'slotchange',
          (e) => {
            let slot = e.target;
            if (slot.name == 'item') {
              this.items = slot
                .assignedElements()
                .map((elem) => elem.textContent);
              alert('Items: ' + this.items);
            }
          }
        );
      }
    }
  );

  // items update after 1 second
  setTimeout(() => {
    menu.insertAdjacentHTML('beforeEnd', '<li slot="item">Cup Cake</li>');
  }, 1000);
</script>
```

  </div>
  </div>
</details>

---
