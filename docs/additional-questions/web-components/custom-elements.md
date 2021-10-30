---
title: Custom elements
sidebar_position: 2
---

# Custom elements

**Web components: Custom elements**

### What are the two types of custom elements in web development?

**Interview Answer:** The two kinds of custom elements include autonomous custom elements and customized built-in elements. Autonomous custom elements – “all-new” elements, extending the abstract HTMLElement class. Customized built-in elements – extending built-in elements, like a customized button, based on HTMLButtonElement etc.

Source: <https://javascript.info/custom-elements>

### What are the requirements needed to create a custom element?

**Interview Answer:** To create a custom element, we need a class extension, like HTMLElement, and a customElement defined to register the new element. These requirements cover both the customized and autonomous elements. In addition, there are several methods that we can use that are optional, like connectedCallBack, for custom elements.

Code Example:

```js
class MyElement extends HTMLElement {
  constructor() {
    super();

    // element created
  }
}

// let the browser know that <my-element> is served by our new class

customElements.define('my-element', MyElement);
```

Source: <https://javascript.info/custom-elements>

### What is the naming convention for custom elements?

**Interview Answer:** Custom element name must have a hyphen -, e.g., my-element and super-button are valid names, but myelement is not. That is to ensure that there are no name conflicts between built-in and custom HTML elements.

Source: <https://javascript.info/custom-elements>

### What are the five methods in the lifecycle callbacks?

**Interview Answer:** The five methods included in the lifecycle callbacks are the connectedCallback, disconnected, adoptedCallback, attributeChangedCallback, and the observedAttributes methods.

Source: <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks>

### Can you explain the function of the connectedCallBack method?

**Interview Answer:** The connectedCallBack is invoked each time the custom element is appended into a document-connected element. This will happen each time the node is moved and may happen before the element's contents have been fully parsed.

Source: <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks>

### What happens when a base-element, the one we are customizing, loads before customized element?

**Interview Answer:** If the browser encounters any elements we are trying to customize before customElements.define, that is not an error. But the element is yet unknown, just like any non-standard tag.

Such “undefined” elements can be styled with CSS selector :not(:defined).

When customElement.define is called, they are “upgraded”: a new instance of element we are trying to customize is created for each, and connectedCallback is called. They become :defined.

Source: <https://javascript.info/custom-elements>

### What is the reason for not using the constructor, but opt to use connectedCallBack?

**Interview Answer:** The reason is simple: when constructor is called, it is yet too early. The element is created, but the browser did not yet process/assign attributes at this stage: calls to getAttribute would return null. So, we cannot really render there. Besides, if you think about it, that is better performance-wise to delay the work until it is really needed.

The connectedCallback triggers when the element is added to the document. Not just appended to another element as a child but becomes a part of the page. So, we can build detached DOM, create elements, and prepare them for later use. They will only be rendered when they make it into the page.

Source: <https://javascript.info/custom-elements>

### Can you explain how observedAttribute works in conjunction with attributeChangedCallback?

**Interview Answer:** The attributeChangedCallback is invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to notice change for is specified in a static get observedAttributes method.

Code Example:

```js
<script>

class TimeFormatted extends HTMLElement {

    render() { // (1)

      let date = new Date(this.getAttribute('datetime') || Date.now());

      this.innerHTML = new Intl.DateTimeFormat("default", {

        year: this.getAttribute('year') || undefined,

        month: this.getAttribute('month') || undefined,

        day: this.getAttribute('day') || undefined,

        hour: this.getAttribute('hour') || undefined,

        minute: this.getAttribute('minute') || undefined,

        second: this.getAttribute('second') || undefined,

        timeZoneName: this.getAttribute('time-zone-name') || undefined,

      }).format(date);

    }

    connectedCallback() { // (2)

      if (!this.rendered) {

        this.render();

        this.rendered = true;

      }

    }

    static get observedAttributes() { // (3)

      return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];

    }

    attributeChangedCallback(name, oldValue, newValue) { // (4)

      this.render();

    }

}

customElements.define("time-formatted", TimeFormatted);

</script>

<time-formatted id="elem" hour="numeric" minute="numeric" second="numeric">

</time-formatted>

<script>

setInterval(() => elem.setAttribute('datetime', new Date()), 1000); // (5)

</script>
```

Source: <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks%20>

Source: <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks>

### Can you explain the rendering order when HTML parser builds the DOM?

**Interview Answer:** When HTML parser builds the DOM, elements are processed one after another, parents before children. E.g., if we have `<outer><inner></inner></outer>`, then `<outer>` element is created and connected to DOM first, and then `<inner>`. That leads to important consequences for custom elements that we should prepare for in our code.

Code Example:

```html
<script>
  customElements.define(
    'user-info',
    class extends HTMLElement {
      connectedCallback() {
        alert(this.innerHTML); // alert is empty (\*)
      }
    }
  );
</script>

<user-info>John</user-info>
```

Source: <https://javascript.info/custom-elements#rendering-order>

### Is there a way to ensure that custom element returns a value on a nested element?

**Interview Answer:** When HTML parser builds the DOM, elements are processed one after another, parents before children. E.g., if we have `<outer><inner></inner></outer>`, then `<outer>` element is created and connected to DOM first, and then `<inner>`. That leads to important consequences for custom elements that we should prepare for in our code. To handle inner elements, we can delay actions using setTimeout to ensure that the DOM has completed loaded our document. If we would like to pass information to custom element, we can use attributes. They are available immediately or, if we really need the children, we can defer access to them with zero-delay setTimeout.

Code Example:

```js
<script>

customElements.define('user-info', class extends HTMLElement {

    connectedCallback() {

      setTimeout(() => alert(this.innerHTML)); // John (\*)

    }

});

</script>

<user-info>John</user-info>
```

Source: <https://javascript.info/custom-elements#rendering-order>

### Are there any issues with new or autonomous elements in relation to search engines?

**Interview Answer:** Yes, a new or autonomous element like `<my-element>` do not give a search engine enough information, like associated semantics. They are not known to search engines and accessibility devices cannot translate them. To fix this, we can extend and customize built-in HTML elements by inheriting from their classes.

Code Example:

```html
<script>
  // The button that says "hello" on click

  class HelloButton extends HTMLButtonElement {
    constructor() {
      super();

      this.addEventListener('click', () => alert('Hello!'));
    }
  }

  customElements.define('hello-button', HelloButton, { extends: 'button' });
</script>

<button is="hello-button">Click me</button> ß

<button is="hello-button" disabled>Disabled</button>

<user-info>John</user-info>
```

Source: <https://javascript.info/custom-elements#customized-built-in-elements>
