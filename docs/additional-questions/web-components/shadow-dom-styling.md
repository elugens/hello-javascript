---
title: Shadow DOM Styling
description: Shadow DOM Styling is used to style elements in Shadow DOM. It is used to style elements in Shadow DOM. It is used to style elements in Shadow DOM.
sidebar_position: 6
sidebar_label: Shadow DOM Styling
keywords:
  - shadow dom styling
  - dom styling
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
  - shadow dom styling
  - dom styling
  - shadow dom
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ShadowDOMStylingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Shadow DOM Styling | JavaScript Interview Questions</title>
</head>

**Web Components: Shadow DOM Styling**

<CloseAllAnswers />

---

### Can you include CSS styles in a Shadow DOM template?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the Shadow DOM may include both &#8249;style&#8250; and &#8249;link rel="stylesheet" href="…"&#8250; tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use the same template. As a rule, local styles work only inside the shadow tree, and document styles work outside the shadow tree. But there are few exceptions.
    </div>
  </div>
</details>

---

### Can you explain what the CSS :host psuedo-class does?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The ":host" CSS pseudo-class selector picks the shadow host of the shadow DOM containing the CSS.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

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

  </div>
  </div>
</details>

---

### How does the :host(selector) class function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The ":host(selector)" CSS pseudo-class selector picks the shadow host of the shadow DOM containing the CSS. It is identical to the regular :host pseudo-class (allowing you to select a custom element from inside its shadow DOM) but only gets put in an application (applied) if the selector sent to the function matches the shadow host.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> :host([centered]);<br /><br />

  <div></div>

```html
<template id="tmpl">
  <style>
    :host([centered]) {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-color: blue;
    }

    :host {
      display: inline-block;
      border: 1px solid red;
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

  </div>
  </div>
</details>

---

### How does the CSS - :host-context(selector) work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It works the same as :host, but it is applied only if the shadow host or ancestors in the outer document matches the selector.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> :host-context([selector])<br /><br />

  <div></div>

```html
<body class="dark-theme">
  <!--
    :host-context(.dark-theme) applies to custom-dialogs inside .dark-theme
  -->
  <custom-dialog>...</custom-dialog>
</body>
```

  </div>
  </div>
</details>

---

### What approach can you use to style slotted content?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two choices if we would like to style slotted elements in our component. First, we can style the &#8249;slot&#8250; itself and rely on CSS inheritance. Another option is to use:: slotted(selector) pseudo-class. It matches elements based on two conditions. First, it is a slotted element from the light DOM. Slot name does not matter. Any slotted element suffices, not its offspring, but just the element itself. Second, the element corresponds to the selection. We should notice that the "::slotted" selection cannot go farther inside the slot.
    </div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```html
<user-card>
  <div slot="username"><span>John Smith</span></div>
</user-card>

<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>
      slot[name="username"] { font-weight: bold; }
      </style>
      Name: <slot name="username"></slot>
    `;
      }
    }
  );
</script>
```

  </div><br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

  <div></div>

```html
<user-card>
  <div slot="username">
    <div>John Smith</div>
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
      ::slotted(div) { border: 1px solid red; }
      </style>
      Name: <slot name="username"></slot>
    `;
      }
    }
  );
</script>
```

  </div>
  </div>
</details>

---

### How do we style internal elements of a component from the main document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No selector can directly affect shadow DOM styles from the document. But just as we expose methods to interact with our component, we can expose CSS variables (custom CSS properties) to style it. Custom CSS properties exist on all levels, both in light and shadow.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  user-card {
    --user-card-field-color: green;
  }
</style>

<template id="tmpl">
  <style>
    .field {
      color: var(--user-card-field-color, black);
    }
  </style>
  <div class="field">Name: <slot name="username"></slot></div>
  <div class="field">Birthday: <slot name="birthday"></slot></div>
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
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
</user-card>
```

  </div>
  </div>
</details>

---
