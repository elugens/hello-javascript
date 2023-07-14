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
  <div><strong>Interview Response:</strong> You can include CSS styles directly inside a Shadow DOM template using a &#60;style&#62; tag. These styles are scoped to the shadow tree and don't leak outside, providing style encapsulation.
    </div><br/>
  <div><strong>Interview Response:</strong> The Shadow DOM may include both &#60;style&#62; and &#60;link rel="stylesheet" href="…"&#62; tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use the same template. As a rule, local styles work only inside the shadow tree, and document styles work outside the shadow tree. But there are few exceptions.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Shadow DOM CSS Example</title>
</head>
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                this.render();
            }

            render() {
                // setting our styles
                this.shadowRoot.innerHTML = `
                    <style>
                        p {
                            color: blue;
                            font-size: 24px;
                        }
                    </style>
                    <template id="my-component-template">
                        <p>This is a Shadow DOM component.</p>
                    </template>
                `;

                const template = this.shadowRoot.querySelector("#my-component-template");
                const node = document.importNode(template.content, true);
                this.shadowRoot.appendChild(node);
            }
        }

        customElements.define('my-component', MyComponent);
    </script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What are CSS custom properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS custom properties, also known as CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document. They follow the syntax `--name: value`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
<!DOCTYPE html>
<html>
<head>
    <title>CSS Custom Properties Example</title>
    <style>
        :root {
            --main-color: #4CAF50;
            --text-light: #FFFFFF;
        }

        body {
            background-color: var(--main-color);
            color: var(--text-light);
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is some text.</p>
</body>
</html>
```

  </div>
  </div>
</details>

---

### How do CSS custom properties work in relation to Shadow DOM styling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CSS custom properties can penetrate Shadow DOM boundaries, enabling style theming. Variables defined outside can be used inside a Shadow DOM and vice versa, allowing effective communication of styles.
  </div><br />
  <div><strong className="codeExample">Here's a brief code example showcasing how CSS custom properties can be used with Shadow DOM:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Shadow DOM and CSS Variables</title>
    <style>
        :root {
            --main-color: #4CAF50;
        }
    </style>
</head>
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = `
                    <style>
                        p {
                            color: var(--main-color);
                        }
                    </style>
                    <p>Hello, world!</p>
                `;
            }
        }

        customElements.define('my-component', MyComponent);
    </script>
</body>
</html>
```

In this example, a CSS custom property `--main-color` is defined in the main document. The shadow DOM in `my-component` uses this custom property to color the paragraph text.

  </div>
  </div>
</details>

---

### Are global styles applied to Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, global styles from the main document do not penetrate the Shadow DOM due to its style encapsulation feature. This ensures component styles are isolated, avoiding conflicts with external styles.
  </div>
  </div>
</details>

---

### Can we style Shadow DOM with external stylesheets?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, external stylesheets can be applied to Shadow DOM by including a &#60;link rel="stylesheet"&#62; element inside the Shadow Root. However, global styles from the main document still won't penetrate the Shadow DOM.
  </div>
  </div>
</details>

---

### What is the ::slotted() pseudo-element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `::slotted()` pseudo-element in CSS targets light DOM children that have been placed into slots in a Shadow DOM. It allows you to style slotted content from within the Shadow DOM.
  </div>
  </div>
</details>

---

### How do you handle browser compatibility with Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To handle browser compatibility with Shadow DOM, you can use polyfills like ShadyDOM and ShadyCSS for non-supporting browsers. Checking compatibility tables and progressively enhancing your features is also a good practice.
  </div>
  </div>
</details>

---

### What are parts and themes in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Parts and themes in Shadow DOM refer to the `part` and `::part` CSS features. They allow developers to style certain elements in a Shadow DOM from the main document, increasing the flexibility of web components.
  </div>
  </div>
</details>

---

### Can you style elements in the  shadow DOM from a light DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, You can't directly style elements in the Shadow DOM from the Light DOM due to the encapsulation provided by the Shadow DOM. CSS styles from the Light DOM won't bleed into the Shadow DOM. However, you can use CSS custom properties or CSS <strong>::part</strong> pseudo-element to style certain properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Styling Shadow DOM Elements from Light DOM</title>
    <style>
        my-component::part(paragraph) {
            color: #4CAF50;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = `
                    <style>
                        p {
                            font-family: Arial, sans-serif;
                        }
                    </style>
                    <p part="paragraph">Hello, world!</p>
                `;
            }
        }

        customElements.define('my-component', MyComponent);
    </script>
</body>
</html>
```

In this example, the paragraph in the Shadow DOM is given a part name of "paragraph". The Light DOM CSS then targets `my-component::part(paragraph)` to apply color and font-size properties.

  </div>
  </div>
</details>

---

### What does @apply do in CSS and Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The @apply rule in CSS was a proposed method for using and reusing blocks of declarations, intended for Shadow DOM styling. However, as of 2021, it's <strong>deprecated</strong> and not recommended for use.
  </div>
  </div>
</details>

---

### How can Shadow DOM be made accessible for screen readers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Shadow DOM content is naturally accessible to screen readers. To enhance accessibility, use semantic HTML, ARIA roles, labels where appropriate, and ensure keyboard navigability within your custom elements.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Accessible Shadow DOM Example</title>
</head>
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                this.render();
            }

            render() {
                // Using Aria Label Here...
                this.shadowRoot.innerHTML = `
                    <style>
                        h1 {
                            color: #4CAF50;
                        }
                    </style>
                    <h1 tabindex="0" aria-label="Greeting">Hello, world!</h1>
                `;
            }
        }

        customElements.define('my-component', MyComponent);
    </script>
</body>
</html>
```

These techniques can improve the accessibility of custom elements that use Shadow DOM. It's essential to always consider accessibility when creating web components.

  </div>
  </div>
</details>

---

### Are there any limitations of Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Shadow DOM has limitations: it can complicate event handling, lacks full browser support, can make debugging tricky, and may involve performance cost for creating many shadow roots. Also, its encapsulation can limit styling flexibility.
  </div>
  </div>
</details>

---

### How does the ::part pseudo-element work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `::part` pseudo-element in CSS allows you to style elements in the Shadow DOM from the main document. This is achieved by exposing parts of the Shadow DOM via the `part` attribute, providing selective styling control.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Styling Shadow DOM Elements from Light DOM</title>
    <style>
        my-component::part(paragraph) {
            color: #4CAF50;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = `
                    <style>
                        p {
                            font-family: Arial, sans-serif;
                        }
                    </style>
                    <p part="paragraph">Hello, world!</p>
                `;
            }
        }

        customElements.define('my-component', MyComponent);
    </script>
</body>
</html>
```

In this example, the paragraph in the Shadow DOM is given a part name of "paragraph". The Light DOM CSS then targets `my-component::part(paragraph)` to apply color and font-size properties.

  </div>
  </div>
</details>

---

### What does the CSS "all:" initial rule do in relation to the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The all: initial CSS rule resets all inheritable and non-inheritable properties to their initial values, providing a clean slate for styling inside a Shadow DOM, preventing style leakage.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Shadow DOM and 'all: initial'</title>
    <style>
        body {
            font-size: 20px;
            color: #4CAF50;
        }
    </style>
</head>
<body>
    <my-component></my-component>

    <script>
        class MyComponent extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }

            connectedCallback() {
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            all: initial;
                            font-size: 16px;
                            color: #000000;
                        }
                    </style>
                    <p>Hello, world!</p>
                `;
            }
        }

        customElements.define('my-component', MyComponent);
    </script>
</body>
</html>
```

In this example, the `all: initial` rule in the `:host` pseudo-class selector resets all styles for the Shadow DOM root, effectively isolating it from the external styles. The paragraph text inside `my-component` will be displayed with a font-size of 16px and color of black (#000000), regardless of the styles defined outside the Shadow DOM.

  </div>
  </div>
</details>

---

### How do you debug Shadow DOM in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To debug Shadow DOM in the browser, use browser developer tools like Chrome DevTools. You can inspect, modify Shadow DOM elements, and view encapsulated styles and events directly within these tools.
  </div>
  </div>
</details>

---

### Can you explain what the CSS :host psuedo-class does in the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The CSS `:host` pseudo-class targets the shadow host, allowing you to style the component from within the Shadow DOM. It offers style encapsulation and customizability for custom web components.
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
  <div><strong>Interview Response:</strong> The `:host(selector)` pseudo-class allows you to style the shadow host, but only when it matches the provided selector. It provides conditional styling based on the host's context in the main document, enhancing style encapsulation and customizability.
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

### What's the purpose of the :host-context function in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `:host-context(selector)` pseudo-class applies styles to the shadow host when it or any of its ancestors in the document tree matches the provided selector, allowing context-dependent styling.
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
  <div><strong>Interview Response:</strong> You can style slotted content using the `::slotted()` CSS pseudo-element. It selects elements placed into slots within the Shadow DOM from the light DOM, allowing targeted styling.
    </div><br />
  <div><strong>Technical Response:</strong> There are two choices if we would like to style slotted elements in our component. First, we can style the &#8249;slot&#8250; itself and rely on CSS inheritance. Another option is to use:: slotted(selector) pseudo-class. It matches elements based on two conditions. First, it is a slotted element from the light DOM. Slot name does not matter. Any slotted element suffices, not its offspring, but just the element itself. Second, the element corresponds to the selection. We should notice that the "::slotted" selection cannot go farther inside the slot.
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
