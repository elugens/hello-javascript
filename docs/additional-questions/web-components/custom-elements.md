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

### What are Custom Elements in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Custom Elements are a feature of Web Components, allowing developers to define and use new HTML tags in the browser.
  </div>
  </div>
</details>

---

### How are Custom Elements defined in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> They are defined using the customElements.define() method, passing the element name and class.
  </div><br />
  <div><strong>Technical Response:</strong> Custom Elements are defined using the Web Components specification, which allows for the creation of reusable custom elements that encapsulate functionality on an HTML page, beyond the regular HTML elements that are part of the HTML specification. This is a very powerful feature because it allows for the creation of reusable, encapsulated, and modular code.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define your custom element class
class MyCustomElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Write element functionality in here
    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class','wrapper');
    
    const info = document.createElement('span');
    info.setAttribute('class', 'info');
    info.textContent = "Hello, I'm a custom element!";
    
    shadow.appendChild(wrapper);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('my-custom-element', MyCustomElement);
```

To use this element in HTML, you would simply include `<my-custom-element></my-custom-element>` somewhere in your HTML source.

---

:::note
Please keep in mind that not all browsers support Custom Elements and you might need a polyfill for unsupported browsers. As of March 2021, the latest versions of Firefox, Chrome, Safari, and Edge all support Custom Elements.
:::

  </div>
  </div>
</details>

---

### What are the two types of custom elements in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We classify custom elements into two groups: autonomous custom elements and modified built-in components. Autonomous custom elements — elements that are "all-new" and extend the abstract HTMLElement class. Customized built-in elements — extending built-in components, such as a customized button based on HTMLButtonElement.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of an autonomous custom element:

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>I'm an autonomous custom element!</p>";
  }
}

customElements.define('my-element', MyElement);
```

You would use this in your HTML like so:

```html
<my-element></my-element>
```

Here is an example of a customized built-in element:

```javascript
class MyParagraph extends HTMLParagraphElement {
  constructor() {
    super();
    this.style.color = 'blue';
  }
}

customElements.define('my-paragraph', MyParagraph, { extends: 'p' });
```

You would use this in your HTML like so:

```html
<p is="my-paragraph">Hello, world!</p>
```

---

:::note
Please note that as of March 2021, customized built-in elements are not as widely supported as autonomous custom elements. For example, they are not supported in the standard configuration of the Apple Safari browser. Always check the current compatibility status before using this feature.
:::

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
  <div><strong>Interview Response:</strong> The five methods included in the lifecycle callbacks are the constructor(), connectedCallback(), disconnectedCallback(), attributeChangedCallback(), and adoptedCallback().
    </div>

---

:::note
The constructor is used to set up element properties. However, connectedCallback is preferred for setup work because certain attributes may not be defined at construction.
:::

  </div>
</details>

---

### Can you describe the connectedCallBack() method's purpose?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The connectedCallBack() invokes each time the custom element appends into a document-connected element. This action happens each time the node moves and before the element's contents completely propagates. It's ideal for setting up initial state, event listeners or fetching resources.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Custom element added to page.');
    this.innerHTML = "<p>Hello, world!</p>";
  }
}

customElements.define('my-element', MyElement);

```

In the browser console, you'll see the message "Custom element added to page." printed each time a **my-element** is attached to the DOM. The **my-element** will also display "Hello, world!" on the webpage.

  </div>
  </div>
</details>

---

### What is the purpose of the "attributeChangedCallback()" in Custom Elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "attributeChangedCallback" method detects when the element's attributes are added, removed, or changed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['my-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`The attribute ${name} has changed from ${oldValue} to ${newValue}!`);
  }
}

customElements.define('my-element', MyElement);
```

In this example, every time the `my-attribute` attribute of a `my-element` custom element changes, the `attributeChangedCallback` method will be invoked, logging a message to the console about this change.

You can use it in your HTML like so:

```html
<my-element my-attribute="foo"></my-element>
```

Then, if you were to later change the attribute in JavaScript like so:

```javascript
document.querySelector('my-element').setAttribute('my-attribute', 'bar');
```

You would see a message in your console that says: "The attribute my-attribute has changed from foo to bar!"

---

:::note
Remember, `attributeChangedCallback` will only monitor changes for attributes that are included in the array returned by the `observedAttributes` method. If you want to monitor multiple attributes, you can include all of them in this array.
:::

  </div>
  </div>
</details>

---

### What is the "observedAttributes" method in Custom Elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "observedAttributes" method is a static getter that returns an array of observed attribute names.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyElement extends HTMLElement {
  // Specify observed attributes so that attributeChangedCallback will work
  static get observedAttributes() {
    return ['my-attribute', 'my-other-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`The attribute ${name} has changed from ${oldValue} to ${newValue}!`);
  }
}

customElements.define('my-element', MyElement);
```

You can use this in HTML like so:

```html
<my-element my-attribute="foo" my-other-attribute="bar"></my-element>
```

Then, if you were to later change these attributes in JavaScript:

```javascript
let element = document.querySelector('my-element');
element.setAttribute('my-attribute', 'newFoo');
element.setAttribute('my-other-attribute', 'newBar');
```

You would see messages in your console saying: "The attribute my-attribute has changed from foo to newFoo!" and "The attribute my-other-attribute has changed from bar to newBar!"

---

:::note
Note that if you add, remove, or change an attribute that is not included in the `observedAttributes` array, the `attributeChangedCallback` will not be invoked.
:::

  </div>
  </div>
</details>

---

### What's the purpose of "adoptedCallback" in Custom Elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "adoptedCallback" is a lifecycle method in Custom Elements used to handle when an element is moved to a new document.
  </div><br />
  <div><strong>Technical Response:</strong> The `adoptedCallback` is a lifecycle hook that is called when the custom element is moved to a new document. It is rarely used but can be very important in specific situations, especially when working with iframe, where a document may have multiple browsing contexts.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  adoptedCallback(oldDocument, newDocument) {
    console.log('Custom element has been moved to a new document.');
  }
}

customElements.define('my-element', MyElement);
```

In this example, every time a `my-element` custom element is moved from one document to another, the `adoptedCallback` method will be invoked, and it will log a message to the console.

To demonstrate `adoptedCallback`, you need two documents: the main document and an iframe. You can create the custom element in the main document and then move it to the iframe document:

```html
<iframe id="my-iframe"></iframe>
<my-element id="my-element"></my-element>

<script>
  let iframe = document.querySelector('#my-iframe');
  let myElement = document.querySelector('#my-element');
  
  // When the iframe is loaded, move myElement to the iframe's document
  iframe.addEventListener('load', () => {
    iframe.contentWindow.document.body.appendChild(myElement);
  });
</script>
```

In this scenario, when the custom element is moved to the iframe's document, the `adoptedCallback` will be called and you will see the message "Custom element has been moved to a new document." in the console.

  </div>
  </div>
</details>

---

### Can Custom Elements extend built-in elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, with the "extends" option. This creates a customized built-in element. Once you have defined the custom element, you can use it in your HTML code just like any other built-in element.
  </div>
  </div>
</details>

---

### Can Custom Elements be used with older browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Custom elements can be used with older browsers like Internet Explorer, but you will need to use a polyfill. A polyfill is a piece of code that adds support for a new feature to an older browser. In this case, the polyfill will add support for custom elements.
  </div>
  </div>
</details>

---

### Can we nest Custom Elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Custom Elements can be nested, like standard HTML elements.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of nested custom elements in JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Nested Custom Elements Example</title>
</head>
<body>
  <my-container>
    <my-heading>Hello, world!</my-heading>
    <my-list>
      <my-list-item>Item 1</my-list-item>
      <my-list-item>Item 2</my-list-item>
      <my-list-item>Item 3</my-list-item>
    </my-list>
  </my-container>

  <script>
    // Define the custom elements
    class MyContainer extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = '<div style="border: 1px solid black; padding: 10px;">' + this.innerHTML + '</div>';
      }
    }

    class MyHeading extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = '<h1>' + this.innerHTML + '</h1>';
      }
    }

    class MyList extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = '<ul>' + this.innerHTML + '</ul>';
      }
    }

    class MyListItem extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = '<li>' + this.innerHTML + '</li>';
      }
    }

    // Register the custom elements
    customElements.define('my-container', MyContainer);
    customElements.define('my-heading', MyHeading);
    customElements.define('my-list', MyList);
    customElements.define('my-list-item', MyListItem);
  </script>
</body>
</html>
```

In this example, we have four custom elements: `my-container`, `my-heading`, `my-list`, and `my-list-item`. The `my-container` element serves as a container and adds a border and padding to its content. The `my-heading` element wraps its content in an `<h1>` tag, making it a heading. The `my-list` element wraps its content in `<ul>` tags, creating an unordered list, and the `my-list-item` element wraps its content in `<li>` tags, representing each list item.

By nesting these custom elements within each other, you can create a structured hierarchy of elements with customized behavior and appearance.

  </div>
  </div>
</details>

---

### What happens when a base element, the one we are customizing, loads before the customized element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a base element loads before the customized one, it's treated as an unknown element until the defining script for the custom element is loaded and executed.
    </div><br/>
  <div><strong>Technical Response:</strong> If the browser encounters any elements we are trying to customize before customElements.define, that is not an error. But the element is yet unknown, just like any non-standard tag. Such “undefined” elements can be styled with CSS selector :not(:defined). When customElement.define is called, they are “upgraded”: a new instance of the element we are trying to customize gets created for each, and connectedCallback gets called. They become :defined.
    </div>
  </div>
</details>

---

### What is the reasoning for not utilizing the constructor and instead relying on connectedCallBack?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The constructor is used to set up element properties. However, connectedCallback is preferred for setup work because certain attributes may not be defined at construction.
    </div><br/>
  <div><strong>Technical Response:</strong> The reason is simple: it is too early when the constructor gets called. The element gets created, but the browser did not yet process/assign attributes at this stage: calls to getAttribute would return null. So, we cannot render there. Besides, if you think about it, it is better to delay the work until needed.<br /><br />When the element gets added to the document, the connectedCallback is triggered. It is not just attached to another element as a child but instead becomes a part of the page. As a result, we may construct detached DOM, create elements, and prepare them for subsequent usage. They do not render until they get included on the page.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    // Trying to manipulate attributes or children here may not work as expected
  }

  connectedCallback() {
    // It's more reliable to perform setup work here
    this.innerHTML = "<p>I'm a custom element!</p>";
  }
}

customElements.define('my-element', MyElement);
```

You use the custom element in your HTML like so:

```html
<my-element></my-element>
```

In this example, if you tried to set `innerHTML` in the `constructor`, it might not work as expected because the element might not be fully ready and its context might not be completely defined. However, if you set `innerHTML` in `connectedCallback`, it's more likely to work reliably because the element is already in the DOM.

  </div>
  </div>
</details>

---

### Can you explain how observedAttribute works in conjunction with attributeChangedCallback?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When one of the custom element's attributes gets added, deleted, or updated, the attributeChangedCallback() gets called. We may observe attributes by passing a list of them to the observedAttributes() static getter. When such attributes are adjusted, attributeChangedCallback() method is triggered.
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

---

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
  <div><strong>Interview Response:</strong> HTML parser builds the DOM from top to bottom. It pauses when encountering a script to execute it, then resumes parsing, which is called "script blocking".
    </div><br />
  <div><strong>Technical Response:</strong> When the HTML parser builds the DOM, elements are processed and parents before children. E.g., if we have &#8249;outer&#8250;&#8249;inner&#8250;&#8249;/inner&#8250;&#8249;/outer&#8250;, then &#8249;outer&#8250; element is created and connected to DOM first, and then &#8249;inner&#8250;. That leads to important consequences for custom elements that we should prepare for in our code.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  customElements.define(
    'user-info',
    class extends HTMLElement {
      connectedCallback() {
        console.log(this.innerHTML); // console.log is empty (*)
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
        setTimeout(() => console.log(this.innerHTML)); // John (*)
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
  <div><strong>Interview Response:</strong> Yes, a new or autonomous element like &#60;my-element&#62; does not give a search engine enough information, like associated semantics. The elements are unknown to search engines, and accessibility devices cannot translate them. We can extend and customize built-in HTML elements by inheriting them from their classes to fix this.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  // The button that says "hello" on click
  class HelloButton extends HTMLButtonElement {
    constructor() {
      super();
      this.addEventListener('click', () => console.log('Hello!'));
    }
  }

  customElements.define('hello-button', HelloButton, { extends: 'button' });
</script>

<button is="hello-button">Click me</button>

<button is="hello-button" disabled>Disabled</button>
```

  </div>
  </div>
</details>

---
