---
title: Custom Elements
description: Custom Elements in JavaScript web development are used to create reusable components. - JavaScript Interview Questions and Answers
sidebar_position: 2
sidebar_label: Custom Elements
keywords:
  - custom element
  - custom elements
  - custom javascript elements
  - reusable components
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - custom element
  - custom elements
  - custom javascript elements
  - reusable components
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CustomElementsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Custom Elements | JavaScript Interview Questions</title>
</head>

**Web Components: Custom Elements**

<CloseAllAnswers />

---

### What are the two types of custom elements in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We classify custom elements into two groups: autonomous custom elements and modified built-in components. Autonomous custom elements — elements that are "all-new" and extend the abstract HTMLElement class. Customized built-in elements — extending built-in components, such as a customized button based on HTMLButtonElement.
    </div>
  </div>
</details>

---

### What are the requirements needed to create a custom element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a custom element, we need a class extension, like HTMLElement, and a customElement defined to register the new element. These requirements cover both the customized and autonomous elements. In addition, there are several methods that we can use that are optional, like connectedCallBack, for custom elements.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    // element created
  }
}

// let the browser know that <my-element> is served by our new class
customElements.define('my-element', MyElement);
```

  </div>
  </div>
</details>

---

### What naming standard should be used for custom elements in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Custom element names must have a hyphen (-) e.g., my-element and super-button are valid names, but myelement is not. That is to ensure no name conflicts between built-in and custom HTML elements.
    </div>
  </div>
</details>

---

### What are the five methods in the lifecycle callbacks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The five methods included in the lifecycle callbacks are the connectedCallback, disconnected, adoptedCallback, attributeChangedCallback, and the observedAttributes methods.
    </div>
  </div>
</details>

---

### Can you describe the connectedCallBack method's purpose?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The connectedCallBack invokes each time the custom element appends into a document-connected element. This action happens each time the node moves and before the element's contents completely propagates.
    </div>
  </div>
</details>

---

### What happens when a base element, the one we are customizing, loads before the customized element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the browser encounters any elements we are trying to customize before customElements.define, that is not an error. But the element is yet unknown, just like any non-standard tag.<br /><br /> Such “undefined” elements can be styled with CSS selector :not(:defined).<br /><br /> When customElement.define is called, they are “upgraded”: a new instance of the element we are trying to customize gets created for each, and connectedCallback gets called. They become :defined.
    </div>
  </div>
</details>

---

### What is the reasoning for not utilizing the constructor and instead relying on connectedCallBack?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason is simple: it is too early when the constructor gets called. The element gets created, but the browser did not yet process/assign attributes at this stage: calls to getAttribute would return null. So, we cannot render there. Besides, if you think about it, it is better to delay the work until needed.<br /><br />When the element gets added to the document, the connectedCallback is triggered. It is not just attached to another element as a child but instead becomes a part of the page. As a result, we may construct detached DOM, create elements, and prepare them for subsequent usage. They do not render until they get included on the page.
    </div>
  </div>
</details>

---

### Can you explain how observedAttribute works in conjunction with attributeChangedCallback?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When one of the custom element's attributes gets added, deleted, or updated, the attributeChangedCallback gets called. We may observe attributes by passing a list of them to the observedAttributes() static getter. When such attributes are adjusted, attributeChangedCallback invokes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  class TimeFormatted extends HTMLElement {
    render() {
      // (1)
      let date = new Date(this.getAttribute('datetime') || Date.now());

      this.innerHTML = new Intl.DateTimeFormat('default', {
        year: this.getAttribute('year') || undefined,
        month: this.getAttribute('month') || undefined,
        day: this.getAttribute('day') || undefined,
        hour: this.getAttribute('hour') || undefined,
        minute: this.getAttribute('minute') || undefined,
        second: this.getAttribute('second') || undefined,
        timeZoneName: this.getAttribute('time-zone-name') || undefined,
      }).format(date);
    }

    connectedCallback() {
      // (2)
      if (!this.rendered) {
        this.render();
        this.rendered = true;
      }
    }

    static get observedAttributes() {
      // (3)
      return [
        'datetime',
        'year',
        'month',
        'day',
        'hour',
        'minute',
        'second',
        'time-zone-name',
      ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      // (4)
      this.render();
    }
  }

  customElements.define('time-formatted', TimeFormatted);
</script>

<time-formatted id="elem" hour="numeric" minute="numeric" second="numeric">
</time-formatted>

<script>
  setInterval(() => elem.setAttribute('datetime', new Date()), 1000); // (5)
</script>
```

:::note
It does not trigger unlisted properties (for performance reasons).
:::

  </div>
  </div>
</details>

---

### Can you explain the rendering order when the HTML parser builds the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the HTML parser builds the DOM, elements are processed and parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner&#8250;. That leads to important consequences for custom elements that we should prepare for in our code.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  customElements.define(
    'user-info',
    class extends HTMLElement {
      connectedCallback() {
        alert(this.innerHTML); // alert is empty (*)
      }
    }
  );
</script>

<user-info>John</user-info>
```

  </div>
  </div>
</details>

---

### Is there a way to ensure that custom-element returns a value on a nested element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the HTML parser builds the DOM, elements are processed and parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner&#8250;. That leads to important consequences for custom elements that we should prepare for in our code. To handle inner elements, we can delay actions using setTimeout to ensure that the DOM has completed loading our document. If we want to pass information to custom-element, we can use attributes. They are available immediately, or if we need the children, we can defer access to them with zero-delay setTimeout.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  customElements.define(
    'user-info',
    class extends HTMLElement {
      connectedCallback() {
        setTimeout(() => alert(this.innerHTML)); // John (*)
      }
    }
  );
</script>

<user-info>John</user-info>
```

  </div>
  </div>
</details>

---

### Are there any issues with new or autonomous elements relative to search engines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a new or autonomous element like &#8249;my-element&#8250; does not give a search engine enough information, like associated semantics. The elements are unknown to search engines, and accessibility devices cannot translate them. We can extend and customize built-in HTML elements by inheriting them from their classes to fix this.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  // The button that says "hello" on click
  class HelloButton extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', () => alert('Hello!'));
    }
  }

  customElements.define('hello-button', HelloButton, { extends: 'button' });
</script>

<button is="hello-button">Click me</button>

<button is="hello-button" disabled>Disabled</button>

<user-info>John</user-info>
```

  </div>
  </div>
</details>

---
