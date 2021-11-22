---
title: Custom Elements
sidebar_position: 2
---

# Custom Elements

**Web Components: Custom Elements**

<head>
  <title>Custom Elements - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the two types of custom elements in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two kinds of custom elements include autonomous custom elements and customized built-in elements. Autonomous custom elements – “all-new” elements, extending the abstract HTMLElement class. Customized built-in elements – extending built-in elements, like a customized button, based on HTMLButtonElement etc.
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

### What is the naming convention for custom elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Custom element name must have a hyphen -, e.g., my-element and super-button are valid names, but myelement is not. That is to ensure that there are no name conflicts between built-in and custom HTML elements.
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

### Can you explain the function of the connectedCallBack method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The connectedCallBack is invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved and may happen before the element's contents have been fully parsed.
    </div>
  </div>
</details>

---

### What happens when a base-element, the one we are customizing, loads before customized element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the browser encounters any elements we are trying to customize before customElements.define, that is not an error. But the element is yet unknown, just like any non-standard tag.<br /><br />
  Such “undefined” elements can be styled with CSS selector :not(:defined).<br /><br />
  When customElement.define is called, they are “upgraded”: a new instance of element we are trying to customize is created for each, and connectedCallback is called. They become :defined.
    </div>
  </div>
</details>

---

### What is the reason for not using the constructor, but opt to use connectedCallBack?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason is simple: when constructor is called, it is yet too early. The element is created, but the browser did not yet process/assign attributes at this stage: calls to getAttribute would return null. So, we cannot really render there. Besides, if you think about it, that is better performance-wise to delay the work until it is really needed.<br /><br />
  The connectedCallback triggers when the element is added to the document. Not just appended to another element as a child but becomes a part of the page. So, we can build detached DOM, create elements, and prepare them for later use. They will only be rendered when they make it into the page.
    </div>
  </div>
</details>

---

### Can you explain how observedAttribute works in conjunction with attributeChangedCallback?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The attributeChangedCallback is invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to notice change for is specified in a static get observedAttributes method.
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

  </div>
  </div>
</details>

---

### Can you explain the rendering order when HTML parser builds the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When HTML parser builds the DOM, elements are processed one after another, parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner>`. That leads to important consequences for custom elements that we should prepare for in our code.
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

### Is there a way to ensure that custom element returns a value on a nested element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When HTML parser builds the DOM, elements are processed one after another, parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner&#8250;. That leads to important consequences for custom elements that we should prepare for in our code. To handle inner elements, we can delay actions using setTimeout to ensure that the DOM has completed loaded our document. If we would like to pass information to custom element, we can use attributes. They are available immediately or, if we really need the children, we can defer access to them with zero-delay setTimeout.
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

### Are there any issues with new or autonomous elements in relation to search engines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a new or autonomous element like &#8249;my-element&#8250; do not give a search engine enough information, like associated semantics. They are not known to search engines and accessibility devices cannot translate them. To fix this, we can extend and customize built-in HTML elements by inheriting from their classes.
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
