---
title: Attributes / Properties
sidebar_position: 6
---

# Attributes and properties

**Document: Attributes and properties**

### What happens to the HTML when the browser loads the page?

**Interview Answer:** When the browser loads the page, it parses the HTML and generates DOM objects from it.

**Technical Answer:** When the browser loads the page, it “reads” (another word: “parses”) the HTML and generates DOM objects from it. For element nodes, most standard HTML attributes automatically become properties of DOM objects. For instance, if the tag is `<body id="page">`, then the DOM object has body.id="page". But the attribute-property mapping is not one-to-one.

Sources: <https://javascript.info/dom-attributes-and-properties>

### Can you modify or customize a DOM node?

**Interview Answer:** Since DOM nodes are regular JavaScript objects. We can alter them as we would with any other object. This can be used to modify or add methods and create new properties. We can also modify built-in prototypes like Element.prototype and add new methods to all elements.

**Note:** DOM properties and methods behave just like those of regular JavaScript objects. They can have any value and are case-sensitive (write elem.nodeType, not elem.NoDeTyPe).

Example:

```js
// Property Creation

document.body.myData = {
  name: 'Caesar',

  title: 'Imperator',
};

alert(document.body.myData.title); // Imperator
// Add new method

document.body.sayTagName = function () {
  alert(this.tagName);
};

document.body.sayTagName();
// BODY (the value of "this" in the method is document.body)

// Add new method to all Elements

Element.prototype.sayHi = function () {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

Sources: <https://javascript.info/dom-attributes-and-properties#dom-properties>

### Do different elements have different standard HTML attributes?

**Interview Answer:** Yes, it should be noted that a standard attribute for one element can be unknown for another. An example of this is the input element which has a standard type attribute used to specify the input type.

**Note:** The "type" attribute is standard for `<input>` (HTMLInputElement), but not for `<body>` (HTMLBodyElement). Standard attributes are described in the specification for the corresponding element class. So, if an attribute is non-standard, there will not be a DOM-property for it.

Example:

```html
<body id="body" type="...">
  <input id="input" type="text" />

  <script>
    alert(input.type); // text
    alert(body.type);

    // undefined: DOM property not created, because it is non-standard
  </script>
</body>
```

Sources: <https://javascript.info/dom-attributes-and-properties#html-attributes>

### What happens to non-standard attributes when the browser loads the page? Does it become a DOM property like standard element attributes?

**Interview Answer:** In HTML, tags may have attributes. When the browser parses the HTML to create DOM objects for tags, it recognizes standard attributes and creates DOM properties from them. In the case of non-standard attributes, DOM properties are not created, and any invocation of those attributes return undefined.

Basically, the attribute exists but it was not defined as DOM property, which inevitably returns undefined.

Example:

```html
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // non-standard attribute does not yield a property

    alert(document.body.something); // undefined
  </script>
</body>
```

Sources: <https://javascript.info/dom-attributes-and-properties#html-attributes>

### Is there a way to access non-standard HTML attributes?

**Interview Answer:** Yes, there are several JavaScript methods that are used to access non-standard HTML attributes including hasAttribute, getAttribute, setAttribute, and removeAttribute. These methods operate exactly with what is written in HTML. Also one can read all attributes using elem.attributes: a collection of objects that belong to a built-in Attr class, with name and value properties.

Example:

```html
<body something="non-standard">
  <script>
    alert(document.body.getAttribute('something')); // non-standard
  </script>
</body>
```

Sources: <https://javascript.info/dom-attributes-and-properties#html-attributes>

### What are the two basic features of HTML attributes?

**Interview Answer:** All HTML attributes have two basic features. Their name is case-insensitive (id is same as ID) and their values are always strings.

Example:

```html
<body>
  <div id="elem" about="Elephant"></div>

  <script>
    alert(elem.getAttribute('About')); // (1) 'Elephant', reading
    elem.setAttribute('Test', 123); // (2), writing
    alert(elem.outerHTML); // (3), see if the attribute is in HTML (yes)
    for (let attr of elem.attributes) {
      // (4) list all

      alert(`${attr.name} = ${attr.value}`);
    }
  </script>
</body>
```

Sources: <https://javascript.info/dom-attributes-and-properties#html-attributes>

### When a standard attribute changes, what happens to the corresponding property?

**Interview Answer:** When a standard attribute changes, the corresponding property is auto updated, and vice versa, but there are some exceptions to the rule. This behavior can be defined as property-attribute synchronization in JavaScript.

Example:

```html
<input />

<script>
  let input = document.querySelector('input');

  // attribute => property

  input.setAttribute('id', 'id');

  alert(input.id); // id (updated)
  // property => attribute

  input.id = 'newId';

  alert(input.getAttribute('id')); // newId (updated)
</script>
```

Sources: <https://javascript.info/dom-attributes-and-properties#property-attribute-synchronization>

### Can you name one exception to the rule of property-attribute synchronization?

**Interview Answer:** One exclusion or exception is input.value can only synchronize from attribute to property, but not back. Changing the attribute value updates the property, but the property change does not affect the attribute.

**Note:** That “feature” may actually come in handy, because the user actions may lead to value changes, and then after them, if we want to recover the “original” value from HTML, it is in the attribute.

Example:

```html
<script>
  let input = document.querySelector('input');

  // attribute => property

  input.setAttribute('value', 'text');

  alert(input.value); // text
  // NOT property => attribute

  input.value = 'newValue';

  alert(input.getAttribute('value')); // text (not updated!)
</script>
```

Sources: <https://javascript.info/dom-attributes-and-properties#property-attribute-synchronization>

### Are DOM properties always strings like HTML attributes?

**Interview Answer:** No, DOM properties are not always strings, because they have property types. For instance, the input.checked property (for checkboxes) is a Boolean (its either checked or not checked). There are other examples. The style attribute is a string, but the style property is an object. Most properties are strings though.

Example:

```html
<!-- CHECKBOX EXAMPLE -->

<input id="input" type="checkbox" checked />

<script>
  alert(input.getAttribute('checked')); // the attribute value is: empty string
  alert(input.checked); // the property value is: true
</script>

<!-- STYLE PROPERTY EXAMPLE -->

<div id="div" style="color:red;font-size:120%">Hello</div>

<script>
  // string

  alert(div.getAttribute('style')); // color:red;font-size:120%
  // object

  alert(div.style); // [object CSSStyleDeclaration]
  alert(div.style.color); // red
</script>
```

Sources: <https://javascript.info/dom-attributes-and-properties#dom-properties-are-typed>

### Can you describe a case for use of non-standard attributes?

**Interview Answer:** We can use non-standard attributes to pass custom data from HTML to JavaScript, or to “mark” HTML-elements for JavaScript.

Example:

```html
<!-- mark the div to show "name" here -->

<div show-info="name"></div>

<!-- and age here -->

<div show-info="age"></div>

<script>
  // the code finds an element with the mark and shows what's requested

  let user = {
    name: 'Pete',

    age: 25,
  };

  for (let div of document.querySelectorAll('[show-info]')) {
    // insert the corresponding info into the field

    let field = div.getAttribute('show-info');

    div.innerHTML = user[field]; // first Pete into "name", then 25 into "age"
  }
</script>
```

Sources: <https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset>

### Is there a way to style an element using non-standard HTML attributes?

**Answer:** Yes, we can use non-standard HTML attributes to style our elements. This can be achieved by acting on the class or id of an element and changing the style via the styles. This works for both inline and external style sheets. This is a much better way to handle the style based on the state of our element.

**Warning:** It should be noted that this is not exactly the recommended approach for implementing custom attributes in HTML.

Example:

```html
<style>
  /* styles rely on the custom attribute "order-state" */

  .order[order-state='new']  {
    color: green;
  }

  .order[order-state='pending']  {
    color: blue;
  }

  .order[order-state='canceled']  {
    color: red;
  }
</style>

<div class="order" order-state="new">A new order.</div>

<div class="order" order-state="pending">A pending order.</div>

<div class="order" order-state="canceled">A canceled order.</div>
```

Sources: <https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset>

### Is there a way to avoid conflicts when creating custom attributes?

**Interview Answer:** Yes, custom attributes should be prepended with the `data-* `attribute to avoid conflicts in your code. All attributes starting with “data-” are reserved for programmers’ use. They are available in the dataset property. The main reason to use the data prepended attribute is if the standard attribute specification is updated. You will avoid any conflicts in your code. Using `data-*` attributes is a valid, safe way to pass custom data.

Example:

```html
<body data-about="Elephants">
  <script>
    alert(document.body.dataset.about); // Elephants
  </script>
</body>
```

Sources: <https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset>

### Are multi-word attributes case sensitive in dataset properties?

**Interview Answer:** Yes, multi-word attributes case sensitive in dataset properties. We should use camel-cased styling when we are using dataset properties.

Example:

```html
<style>
  .order[data-order-state='new']  {
    color: green;
  }

  .order[data-order-state='pending']  {
    color: blue;
  }

  .order[data-order-state='canceled']  {
    color: red;
  }
</style>

<div id="order" class="order" data-order-state="new">A new order.</div>

<script>
  // read

  alert(order.dataset.orderState); // new
  // modify

  order.dataset.orderState = 'pending'; // (\*) camel case dataset property
</script>
```

Sources: <https://javascript.info/dom-attributes-and-properties#non-standard-attributes-dataset>
