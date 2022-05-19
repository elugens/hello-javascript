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
  <div><strong>Interview Response:</strong> The HTML &#8249;slot&#8250; element is part of the Web Components technology suite, which acts as a placeholder inside a web component that you can fill with your markup. It lets you create separate DOM trees and present them together.
    </div>
  </div>
</details>

---

### What is the definition of a flattened DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The combination of the Light DOM and the shadow DOM is considered the flattened DOM result. The flattened DOM is viewable in the developer tools for inspection but unavailable in the source.
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
  <div><strong>Interview Response:</strong> If we put something inside a &#8249;slot&#8250;, it becomes the fallback, “default” content. The browser shows it if there is no corresponding filler in light DOM. If the slot is in the shadow DOM it renders if there is no slot available in the light DOM.
    </div>
  </div>
</details>

---

### In the Shadow DOM, what is the default slot?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The first &#8249;slot&#8250; in shadow DOM that does not have a name is a “default” slot. The default slot gets all nodes from the light DOM that are not slotted elsewhere.
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
  <div><strong>Interview Response:</strong> The HTML slot element has three main methods, including assignedSlot, assignedNodes, and assignedElements used to handle or assess element node assignment. The assignedSlot method returns the &#8249;slot&#8250; element that the node gets assigned. The assignedElements() method returns a sequence of the nodes assigned to this slot, and if the flatten option sets to true, the assigned nodes of any other slots are descendants of this slot. If no assigned nodes return, the slot's fallback content returns. The assignedSlot method returns an HTMLSlotElement representing the &#8249;slot&#8250; element the node is inserted in. These methods are useful when we need to show the slotted content and track it in JavaScript.
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
