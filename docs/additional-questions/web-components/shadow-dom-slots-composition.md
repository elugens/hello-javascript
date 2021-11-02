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

### What is the HTML named `<slot>` element used for in web development?

**Interview Answer:** The HTML `<slot>` element is part of the Web Components technology suite which acts as a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

Source: <https://javascript.info/slots-composition#named-slots>

### What is the considered the flattened DOM?

**Interview Answer:** The combination of the Light DOM and the shadow DOM are considered the flattened DOM result. This is viewable in the developer tools for inspection, but not available in the source.

Source: <https://javascript.info/slots-composition#named-slots>

### What is the main limitation of the slot attribute?

**Interview Answer:** The slot="..." attribute is only valid for direct children of the shadow host. For nested elements it is ignored. If there are multiple elements in light DOM with the same slot name, they are appended into the slot, one after another.

**Code Example:**

```html
<!-- invalid slot, must be direct child of user-card -->

      <span slot="birthday">01.01.2001</span>

    </div>

</user-card>

<!-- The slots below are appended in order -->

<user-card>

    <span slot="username">John</span>

    <span slot="username">Smith</span>

</user-card>
```

Source: <https://javascript.info/slots-composition#named-slots>

### Can you explain, what slot fallback content is in browser rendering?

**Interview Answer:** If we put something inside a `<slot>`, it becomes the fallback, “default” content. The browser shows it if there is no corresponding filler in light DOM. Basically, if the slot is in the shadow DOM it will render if there is no slot available in the light DOM.

Source: <https://javascript.info/slots-composition#slot-fallback-content>

### What is considered the default slot in the Shadow DOM?

**Interview Answer:** The first `<slot>` in shadow DOM that does not have a name is a “default” slot. It gets all nodes from the light DOM that are not slotted elsewhere.

Code Example:

```html
<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `

      <div>Name:

        <slot name="username"></slot>

      </div>

      <div>Birthday:

        <slot name="birthday"></slot>

      </div>

      <fieldset>

        <legend>Other information</legend>

        <slot></slot> ß first unnamed slot

      </fieldset>

      `;
      }
    }
  );
</script>

<user-card>
  <div>I like to swim.</div>

  <span slot="username">John Smith</span>

  <span slot="birthday">01.01.2001</span>

  <div>...And play volleyball too!</div>
</user-card>
```

Source: <https://javascript.info/slots-composition#default-slot-first-unnamed>

### What are the three methods that handle HTML slot element assignment?

**Interview Answer:** The HTML slot element has three main methods including assignedSlot, assignedNodes, and assignedElements used to handle or assess element node assignment. The assignedSlot method returns the `<slot>` element that the node is assigned to. The assignedElements() method returns a sequence of the nodes assigned to this slot, and if the flatten option is set to true, the assigned nodes of any other slots that are descendants of this slot. If no assigned nodes are found, it returns the slot's fallback content. The assignedSlot method returns an HTMLSlotElement representing the `<slot>` element the node is inserted in. These methods are useful when we need not just show the slotted content, but also track it in JavaScript.

Code Example:

```html
<custom-menu id="menu">
  <span slot="title">Candy menu</span>

  <li slot="item">Lollipop</li>

  <li slot="item">Fruit Toast</li>
</custom-menu>

<script>
  customElements.define(
    'custom-menu',
    class extends HTMLElement {
      items = [];

      connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `<div class="menu">

        <slot name="title"></slot>

        <ul><slot name="item"></slot></ul>

      </div>`;

        // triggers when slot content changes

        this.shadowRoot.firstElementChild.addEventListener(
          'slotchange',
          (e) => {
            let slot = e.target;

            if (slot.name == 'item') {
              this.items = slot
                .assignedElements()
                .map((elem) => elem.textContent);

              alert('Items: ' + this.items);
            }
          }
        );
      }
    }
  );

  // items update after 1 second

  setTimeout(() => {
    menu.insertAdjacentHTML('beforeEnd', '<li slot="item">Cup Cake</li>');
  }, 1000);
</script>
```

Source: <https://javascript.info/slots-composition#slot-api>
