---
title: Attributes / Properties
description: Attributes / Properties are properties of an HTML tag. They are used to add information to the tag and to control the behavior of the tag. Interview Questions
sidebar_position: 6
sidebar_label: Attributes / Properties
keywords:
  - html attributes
  - html properties
  - attributes
  - tags
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
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AttrPropsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Attributes / Properties | JavaScript Frontend Interview</title>
</head>

**Browser Document: Attributes / Properties**

<CloseAllAnswers />

---

### What happens to the HTML when the browser loads the page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The browser fetches the HTML, parses it into the Document Object Model (DOM), applies CSS styles, runs JavaScript, and then renders the final visual representation on the screen.
  </div><br/>
  </div>
</details>

---

### What is the difference between attributes and properties in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Attributes are defined on HTML elements and represent the initial state. Properties are in DOM objects, reflecting the current state of elements and can change over time.
  </div><br />
  </div>
</details>

---

### Can you modify or customize a DOM node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can modify a DOM node. JavaScript allows you to change content, attributes, CSS styles, and even add or remove nodes to and from the DOM tree.</div><br />
  <div><strong>Technical Response:</strong> Because DOM nodes are ordinary JavaScript objects, we can modify them just like any other object. This object may change or add methods and attributes, as well as edit built-in prototypes such as Element.prototype and add new methods to all elements.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Property Creation
document.body.myData = {
  name: 'Caesar',
  title: 'Imperator',
};

alert(document.body.myData.title); // Imperator

// Add new method
document.body.sayTagName = function () {
  alert(this.tagName);
};

document.body.sayTagName();
// BODY (the value of "this" in the method is document.body)

// Add new method to all Elements
Element.prototype.sayHi = function () {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

:::note
DOM properties and methods behave just like those of regular JavaScript objects. They can have any value and are case-sensitive (write elem.nodeType, not elem.NoDeTyPe).
:::

  </div>
  </div>
</details>

---

### How can you get the value of an attribute in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can get the value of an attribute using the `getAttribute()` method on the element, passing the attribute name as the argument.
  </div><br />
  </div>
</details>

---

### How can you set an attribute value in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can set an attribute value using the `setAttribute()` method on the element, passing the attribute name and the new value as arguments.
  </div><br />
  </div>
</details>

---

### How do you remove an attribute from an HTML element in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can remove an attribute using the `removeAttribute()` method on the element, passing the attribute name as the argument.
  </div><br />
  </div>
</details>

---

### What is the role of the "className" property in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `className` property gets or sets the value of the `class` attribute, allowing you to manipulate CSS classes of an element.
  </div><br />
  </div>
</details>

---

### What is the "dataset" property in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `dataset` property is an object that holds all the custom data attributes (`data-*`) of an element, allowing easy access and manipulation.
  </div><br />
  </div>
</details>

---

### How can you modify the "src" attribute of an "img" element in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To modify the `src` attribute, you can use the `setAttribute()` method or directly update the `src` property of the `img` element.
  </div><br />
  </div>
</details>

---

### Do different elements have different standard HTML attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, different HTML elements have different standard attributes. For example, an "img" tag has "src" and "alt", while an anchor "a" tag has "href" and "target" attributes. We should note that a standard attribute for one element can be unknown for another. An example is the input element with a standard type attribute used to specify the input type.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body id="body" type="...">
  <input id="input" type="text" />
  <script>
    alert(input.type); // text
    alert(body.type);
    // undefined: DOM property not created, because it is non-standard
  </script>
</body>
```

:::note
The "type" attribute is standard for &#8249;input&#8250; (HTMLInputElement), but not for &#8249;body&#8250; (HTMLBodyElement). Standard attributes are described in the specification for the corresponding element class. So, if an attribute is non-standard, there will not be a DOM-property for it.
:::

  </div>
  </div>
</details>

---

### What happens to non-standard attributes when the browser loads the page? Does it become a DOM property like standard element attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Non-standard attributes don't become DOM properties directly, but they can be accessed via the "getAttribute" method or dataset for data-* attributes. They don't affect rendering unless used by JavaScript or CSS.
    </div><br />
  <div><strong>Technical Response:</strong> In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them. In the case of non-standard attributes, DOM properties are created, and any invocation of those attributes returns undefined.<br /><br />
 The attribute exists, but it does not get defined as DOM property, which inevitably returns undefined.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // non-standard attribute does not yield a property
    alert(document.body.something); // undefined
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Is there a way to access non-standard HTML attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can access non-standard HTML attributes using JavaScript's "getAttribute" method or the "dataset" property for data-* attributes on the corresponding DOM object.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, various JavaScript methods, such as hasAttribute, getAttribute, setAttribute, and removeAttribute, are used to access non-standard HTML attributes. These approaches work with precisely what is written in HTML. Additionally, elem.attributes may be used to read all attributes: a collection of objects that belong to the built-in Attr class, containing name and value properties.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body something="non-standard">
  <script>
    alert(document.body.getAttribute('something')); // non-standard
  </script>
</body>
```

  </div>
  </div>
</details>

---

### What are the two primary features of HTML attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All HTML attributes have two essential features. Their name is case-insensitive (id is the same as ID), and their values are always strings.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <div id="elem" about="Elephant"></div>

  <script>
    alert(elem.getAttribute('About')); // (1) 'Elephant', reading

    elem.setAttribute('Test', 123); // (2), writing

    alert(elem.outerHTML); // (3), see if the attribute is in HTML (yes)

    for (let attr of elem.attributes) {
      // (4) list all
      alert(`${attr.name} = ${attr.value}`);
    }
  </script>
</body>
```

  </div>
  </div>
</details>

---

### What happens to the related property when a standard attribute changes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a standard attribute changes, the corresponding property is auto-updated, and vice versa, maintaining a synchronized state between them, but there are some exceptions to the rule. This behavior gets defined as property-attribute synchronization in JavaScript.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input />

<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('id', 'id');
  alert(input.id); // id (updated)

  // property => attribute
  input.id = 'newId';
  alert(input.getAttribute('id')); // newId (updated)
</script>
```

  </div>
  </div>
</details>

---

### Can you name one exception to the rule of property-attribute synchronization?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One exclusion or exception is input.value can only synchronize from attribute to property, but not back. Changing the attribute value updates the property, but the property change does not affect the attribute.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  let input = document.querySelector('input');

  // attribute => property
  input.setAttribute('value', 'text');
  alert(input.value); // text

  // NOT property => attribute
  input.value = 'newValue';
  alert(input.getAttribute('value')); // text (not updated!)
</script>
```

:::note
That “feature” may come in handy because the user actions may lead to value changes, and then after them, if we want to recover the “original” value from HTML, it is in the attribute.
:::

  </div>
  </div>
</details>

---

### Are DOM properties always strings like HTML attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, DOM properties are not always strings because they have property types. They can be different types like boolean, object, or function, depending on the property. For instance, "classList" is an object, "disabled" is a boolean. For instance, the input.checked property (for checkboxes) is a Boolean (either checked or not checked). There are other examples. The style attribute is a string, but the style property is an object. Most properties are strings, however.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- CHECKBOX EXAMPLE -->
<input id="input" type="checkbox" checked />

<script>
  alert(input.getAttribute('checked')); // the attribute value is: empty string
  alert(input.checked); // the property value is: true
</script>

<!-- STYLE PROPERTY EXAMPLE -->
<div id="div" style="color:red;font-size:120%">Hello</div>

<script>
  // string
  alert(div.getAttribute('style')); // color:red;font-size:120%

  // object
  alert(div.style); // [object CSSStyleDeclaration]
  alert(div.style.color); // red
</script>
```

  </div>
  </div>
</details>

---

### Can you describe a case for the use of non-standard attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use non-standard attributes to pass custom data from HTML to JavaScript or “mark” HTML elements for JavaScript. Non-standard attributes, especially data-* attributes are used to store extra information directly within an HTML element for later use in JavaScript, without affecting the presentation or semantics.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- mark the div to show "name" here -->
<div show-info="name"></div>
<!-- and age here -->
<div show-info="age"></div>

<script>
  // the code finds an element with the mark and shows what's requested
  let user = {
    name: 'Pete',
    age: 25,
  };

  for (let div of document.querySelectorAll('[show-info]')) {
    // insert the corresponding info into the field
    let field = div.getAttribute('show-info');
    div.innerHTML = user[field]; // first Pete into "name", then 25 into "age"
  }
</script>
```

  </div>
  </div>
</details>

---

### Is it possible to style an element with non-standard HTML attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use non-standard HTML attributes to style our elements. This change may be accomplished by acting on an element's class or id and modifying the styles. This approach works for both inline and external style sheets, and this is a much better way to handle the style based on the state of our elements.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  /* styles rely on the custom attribute "order-state" */
  .order[order-state='new'] {
    color: green;
  }

  .order[order-state='pending'] {
    color: blue;
  }

  .order[order-state='canceled'] {
    color: red;
  }
</style>

<div class="order" order-state="new">A new order.</div>

<div class="order" order-state="pending">A pending order.</div>

<div class="order" order-state="canceled">A canceled order.</div>
```

:::warning
We should note that this is not exactly the recommended approach for implementing custom attributes in HTML.
:::

  </div>
  </div>
</details>

---

### Is there a way to avoid conflicts when creating custom attributes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, to avoid conflicts, use the "data-*" prefix when creating custom attributes. This naming convention is specified by HTML standards for user-defined data attributes.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, we should prepend custom attributes with the “data-*” attribute to avoid conflicts in your code. All attributes starting with “data-” are reserved for programmers’ use and available in the dataset property. The main reason to use the data attribute is if the standard attribute specification is updated. You can avoid any conflicts in your code. Using data-* attributes is a proper, safe way to pass custom data.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body data-about="Elephants">
  <script>
    alert(document.body.dataset.about); // Elephants
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Are multi-word attributes case sensitive in dataset properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multi-word "data-*" attributes become camelCase properties in "dataset". For example, "data-my-attribute" becomes "dataset.myAttribute". HTML attributes are case-insensitive, but their dataset properties are not.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  .order[data-order-state='new'] {
    color: green;
  }

  .order[data-order-state='pending'] {
    color: blue;
  }

  .order[data-order-state='canceled'] {
    color: red;
  }
</style>

<div id="order" class="order" data-order-state="new">A new order.</div>

<script>
  // read
  alert(order.dataset.orderState); // new

  // modify
  order.dataset.orderState = 'pending'; // (*) camel case dataset property
</script>
```

  </div>
  </div>
</details>

---

### What is the difference between attributes and properties in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The five primitive wrapper objects in JavaScript are: String, Number, Boolean, Symbol, and BigInt.
  </div><br />
  </div>
</details>

---
