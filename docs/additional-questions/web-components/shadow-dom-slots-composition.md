---
title: Shadow DOM Slots
sidebar_position: 5
---

# Shadow DOM Slots - Composition

**Web Components: Shadow DOM Slots - Composition**

<head>
  <title>Shadow DOM Slots - Composition - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the HTML named &#8249;slot&#8250; element used for in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The HTML &#8249;slot&#8250; element is part of the Web Components technology suite which acts as a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
    </div>
  </div>
</details>

---

### What is the considered the flattened DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The combination of the Light DOM and the shadow DOM are considered the flattened DOM result. This is viewable in the developer tools for inspection, but not available in the source.
    </div>
  </div>
</details>

---

### What is the main limitation of the slot attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The slot="..." attribute is only valid for direct children of the shadow host. For nested elements it is ignored. If there are multiple elements in light DOM with the same slot name, they are appended into the slot, one after another.
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

### Can you explain, what slot fallback content is in browser rendering?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we put something inside a &#8249;slot&#8250;, it becomes the fallback, “default” content. The browser shows it if there is no corresponding filler in light DOM. Basically, if the slot is in the shadow DOM it will render if there is no slot available in the light DOM.
    </div>
  </div>
</details>

---

### What is considered the default slot in the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The first &#8249;slot&#8250; in shadow DOM that does not have a name is a “default” slot. It gets all nodes from the light DOM that are not slotted elsewhere.
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
  <div><strong>Interview Response:</strong> The HTML slot element has three main methods including assignedSlot, assignedNodes, and assignedElements used to handle or assess element node assignment. The assignedSlot method returns the &#8249;slot&#8250; element that the node is assigned to. The assignedElements() method returns a sequence of the nodes assigned to this slot, and if the flatten option is set to true, the assigned nodes of any other slots that are descendants of this slot. If no assigned nodes are found, it returns the slot's fallback content. The assignedSlot method returns an HTMLSlotElement representing the &#8249;slot&#8250; element the node is inserted in. These methods are useful when we need not just show the slotted content, but also track it in JavaScript.
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
