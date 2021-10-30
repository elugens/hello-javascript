---
title: Shadow DOM Styling
sidebar_position: 6
---

# Shadow DOM styling

**Web components: Shadow DOM styling**

### Can you include CSS styles in a Shadow DOM template?

**Interview Answer:** Yes, the Shadow DOM may include both `<style>` and `<link rel="stylesheet" href="…">` tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use same template. As a rule, local styles work only inside the shadow tree, and document styles work outside of it. But there are few exceptions.

Source: <https://javascript.info/shadow-dom-style>

### Can you explain what the :host() selector class does?

**Interview Answer:** The :host() CSS pseudo-class function selects the shadow host of the shadow DOM containing the CSS it is used inside (so you can select a custom element from inside its shadow DOM), but only if the selector given as the function's parameter matches the shadow host.

Code Example:

```html
<template id="tmpl">
  <style>
    /* the style will be applied from inside to the custom-dialog element */

    :host  {
      position: fixed;

      left: 50%;

      top: 50%;

      transform: translate(-50%,  -50%);

      display: inline-block;

      border: 1px solid red;

      padding: 10px;
    }
  </style>

  <slot></slot>
</template>

<script>
  customElements.define(
    'custom-dialog',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' }).append(
          tmpl.content.cloneNode(true)
        );
      }
    }
  );
</script>

<custom-dialog> Hello! </custom-dialog>
```

Source: <https://javascript.info/shadow-dom-style#host>

### How does the :host(selector) class work?

**Interview Answer:** It works the same as :host, but applied only if the shadow host matches the selector.

**Syntax:** :host([centered])

Code Example:

```html
<template id="tmpl">
  <style>
    :host([centered])  {
      position: fixed;

      left: 50%;

      top: 50%;

      transform: translate(-50%,  -50%);

      border-color: blue;
    }

    :host  {
      display: inline-block;

      border: 1px solid red;

      padding: 10px;
    }
  </style>

  <slot></slot>
</template>

<script>
  customElements.define(
    'custom-dialog',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' }).append(
          tmpl.content.cloneNode(true)
        );
      }
    }
  );
</script>
```

Source: <https://javascript.info/shadow-dom-style#host-selector>

### How does the CSS - :host-context(selector) work?

**Interview Answer:** It works the same as :host, but applied only if the shadow host or any of its ancestors in the outer document matches the selector.

**Syntax:** :host-context([selector])

Code Example:

```html
<body class="dark-theme">
  <!--

      :host-context(.dark-theme) applies to custom-dialogs inside .dark-theme

    -->

  <custom-dialog>...</custom-dialog>
</body>
```

Source: <https://javascript.info/shadow-dom-style#host-context-selector>

### What approach can you use to style slotted content?

**Interview Answer:** If we would like to style slotted elements in our component, there are two choices. First, we can style the `<slot>` itself and rely on CSS inheritance. Another option is to use:: slotted(selector) pseudo-class. It matches elements based on two conditions. First, it is a slotted element, that comes from the light DOM. Slot name does not matter. Just any slotted element, but only the element itself, not its children. Second, the element matches the selector. It should be noted, ::slotted selector can’t descend any further into the slot.

#1 - Code Example:

```html
<user-card>
  <div slot="username"><span>John Smith</span></div>
</user-card>

<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `

        <style>

        slot[name="username"] { font-weight: bold; }

        </style>

        Name: <slot name="username"></slot>

      `;
      }
    }
  );
</script>

#2 - Code Example:

<user-card>
  <div slot="username">
    <div>John Smith</div>
  </div>
</user-card>

<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `

        <style>

        ::slotted(div) { border: 1px solid red; }

        </style>

        Name: <slot name="username"></slot>

      `;
      }
    }
  );
</script>
```

Source: <https://javascript.info/shadow-dom-style#styling-slotted-content>

### How do we style internal elements of a component from the main document?

**Interview Answer:** There is no selector that can directly affect shadow DOM styles from the document. But just as we expose methods to interact with our component, we can expose CSS variables (custom CSS properties) to style it. Custom CSS properties exist on all levels, both in light and shadow.

#1 - Code Example:

```html
<style>
  user-card  {
    --user-card-field-color: green;
  }
</style>

<template id="tmpl">
  <style>
    .field  {
      color: var(--user-card-field-color,  black);
    }
  </style>

  <div class="field">Name: <slot name="username"></slot></div>

  <div class="field">Birthday: <slot name="birthday"></slot></div>
</template>

<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.append(
          document.getElementById('tmpl').content.cloneNode(true)
        );
      }
    }
  );
</script>

<user-card>
  <span slot="username">John Smith</span>

  <span slot="birthday">01.01.2001</span>
</user-card>
```

Source: <https://javascript.info/shadow-dom-style#css-hooks-with-custom-properties>
