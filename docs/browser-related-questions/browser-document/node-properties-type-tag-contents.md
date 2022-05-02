---
title: Node Properties
description: Node Properties are properties of the Node object. They are used to access the Node object. - JavaScript Interview Questions & Answers
sidebar_position: 5
sidebar_label: Node Properties
keywords:
  - node properties
  - node object
  - functions
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
  - node properties
  - node object
  - interview answers
  - interview questions
---

<head>
  <title>Node Properties | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Node Properties**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the hierarchy in classes of DOM nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each DOM node belongs to the corresponding built-in class. The root of the hierarchy is EventTarget, inherited by the node, and other DOM nodes inherit from it, such as text, element, and comment nodes.
</div>
  </div>
</details>

---

### Briefly explain the purpose of the EventTarget abstract class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> EventTarget is the root “abstract” class. Objects of that class do not adhere to an abstract creation process; it serves as a base so that all DOM nodes support so-called “events”.
</div>
  </div>
</details>

---

### Can you describe the Node abstract class's function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Node is also an “abstract” class, serving as a base for DOM nodes. It provides the core tree functionality: parentNode, nextSibling, childNodes, and more (they are getters). Objects of the node class get created. But concrete node classes inherit from it: Text nodes for text nodes, Element nodes for element nodes, and more exotic ones like Comment nodes for comment nodes.
</div>
  </div>
</details>

---

### Can you please explain the purpose of the Element base class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Element is a base class for DOM elements. It provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector. A browser supports not only HTML, but also XML and SVG. The Element class serves as a base for more specific classes: SVGElement, XMLElement and HTMLElement.
</div>
  </div>
</details>

---

### What is the purpose of the HTMLElement base class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HTMLElement is the base class for all HTML elements. It is inherited by concrete HTML elements such as the HTMLInputElement, HTMLBodyElement, and HTMLAnchorElement classes.<br /><br />
  <strong>Additional Information:</strong><br /><br />
  <ul>
    <li>HTMLInputElement is the class for &#8249;input&#8250; elements.</li>
    <li>HTMLBodyElement is the class for &#8249;body&#8250; elements.</li>
    <li>HTMLAnchorElement is the class for &#8249;a&#8250; elements.</li>
  </ul>
</div>
  </div>
</details>

---

### How can you expose the DOM node class name?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To see the DOM node class name, we recall that an object usually has the constructor property. It references the class constructor and constructor.name is its name, or we can toString it. We also can use instanceof to check the inheritance, which returns a Boolean value.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using the Object constructor
alert(document.body.constructor.name); // HTMLBodyElement

// Built-in toString return value
alert(document.body); // [object HTMLBodyElement]

// Check to see if its a instanceof of an Element
alert(document.body instanceof HTMLBodyElement); // true
alert(document.body instanceof HTMLElement); // true
alert(document.body instanceof Element); // true
alert(document.body instanceof Node); // true
alert(document.body instanceof EventTarget); // true
```

  </div>
  </div>
</details>

---

### What is the difference between console.dir and console.log when returning objects in the console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In brief, console.log(elem) shows the element DOM tree and console.dir(elem) shows the element as a DOM object, and it is excellent to explore its properties.</div><br />
  <div><strong>Technical Response:</strong> Most browsers allow two commonly used commands in their development tools: console.log and console.dir. Their arguments get printed on the console. These instructions typically have the same effect on JavaScript objects. However, console.log(elem) displays the element's DOM tree for DOM elements. The element gets shown as a DOM object using console.dir(elem), allowing you to examine its properties.
  </div>
  </div>
</details>

---

### What is an interface description language or IDL in programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An interface description language or interface definition language (IDL), is a specification language used to describe a software component's application programming interface (API). IDLs describe an interface in a language-independent way, enabling communication between software components that do not share one language, such as those written in C++ and those written in Java.
    </div>
  </div>
</details>

---

### How are DOM classes described in the specification?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the specification, DOM classes don’t get described by using JavaScript but a unique Interface description language (IDL) that is easy to understand. In IDL, all properties get prepended with their types. For instance, DOMString, boolean, and so on.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Define HTMLInputElement
// The colon ":" means that HTMLInputElement inherits from HTMLElement
interface HTMLInputElement: HTMLElement {
  // here go properties and methods of <input> elements

  // "DOMString" means that the value of a property is a string
  attribute DOMString accept;
  attribute DOMString alt;
  attribute DOMString autocomplete;
  attribute DOMString value;

  // boolean value property (true/false)
  attribute boolean autofocus;
  //...
  // now the method: "void" means that the method returns no value
  void select();
  //...
}

```

  </div>
  </div>
</details>

---

### What does the nodeType property return in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It has a numeric value that reflects the type of node you are returning. For element nodes, it is 1; for text nodes, it is 3; and for the document object 9. There are others listed in the specification: https://dom.spec.whatwg.org/#node
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <script>
    let elem = document.body;

    // let us examine what it is?
    alert(elem.nodeType); // 1 => element

    // and the first child is...
    alert(elem.firstChild.nodeType); // 3 => text

    // for the document object, the type is 9
    alert(document.nodeType); // 9
  </script>
</body>
```

  </div>
  </div>
</details>

---

### What is the difference between the nodeName and tagName properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The tagName property exists only for Element nodes. The nodeName gets defined for any Node, but elements mean the same as tagName, and for other node types (text, comment, and more), it has a string with the node type.</div><br />
  <div><strong>Note:</strong> In other words, tagName is only supported by element nodes (as it originates from Element class), while nodeName can say something about other node types.
  </div><br />
  <div><strong>Technical Response:</strong> The contrast gets mirrored in their names, but it is slight. Only Element nodes have the tagName attribute. For each Node, the nodeName gets specified, but elements have the same meaning as tagName, and for other node kinds (text, comment, and more), it has a string with the node type. In other words, tagName only gets used to describe element nodes (since it gets inherited from the Element class), whereas nodeName may be used to describe other node types.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <!-- comment -->

  <script>
    // for comment
    alert(document.body.firstChild.tagName); // undefined (not an element)
    alert(document.body.firstChild.nodeName); // #comment

    // for document
    alert(document.tagName); // undefined (not an element)
    alert(document.nodeName); // #document
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Is there a difference between what gets returned when the tagName attribute gets used on HTML and XML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> YES. The browser may handle documents in two ways: HTML and XML. Typically, HTML mode gets used for web pages. When the browser receives an XML document with the header content-type XML/XHTML, XML-mode is activated. In HTML mode, tagName and nodeName always get capitalized. The case is left "as is" in XML mode.</div><br />
  <div><strong>Note:</strong> Nowadays, XML mode gets rarely used, but you may come across it in older applications.
  </div><br />
  <div><strong>Technical Response:</strong> Although this may seem trivial, the answer is YES. The browser has two modes of processing documents: HTML and XML. Usually, the HTML-mode gets used for web pages. XML-mode is enabled when the browser receives an XML-document with the header: Content-Type: application/xml+xhtml. In HTML mode tagName/nodeName is always uppercased: it is BODY either for &#8249;body&#8250; or &#8249;BoDy&#8250;. In XML mode, the case gets kept “as is”. Nowadays, XML mode rarely gets used, but you may encounter it in older applications.
  </div>
  </div>
</details>

---

### Explain what the innerHTML property does in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The innerHTML property allows us to insert data/HTML inside an element as a string. We can also modify it. So, it is one of the most powerful ways to change the page dynamically.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <p>A paragraph</p>
  <div>A div</div>

  <script>
    alert(document.body.innerHTML); // read the current contents
    document.body.innerHTML = 'The new BODY!';
    // replaces and returns The New Body in the HTML
  </script>
</body>
```

  </div>
  </div>
</details>

---

### What happens when you attempt to insert the script tag using the innerHTML property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If innerHTML inserts a &#8249;script&#8250; tag into the document – it becomes a part of HTML but does not execute.
    </div>
  </div>
</details>

---

### What is the main thing you should know when using “innerHTML+=” syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When using the “innerHTML+=” we should know the property is not an addition but a full overwrite.</div><br />
  <div><strong>Note:</strong> We can append HTML to an element by using elem.innerHTML+="more HTML". But we should be careful about doing it.
  </div>
  </div>
</details>

---

### Explain what the outerHTML property does in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The element's full HTML gets stored in the outerHTML attribute. This structure is equivalent to innerHTML plus the element itself. Be aware that, unlike innerHTML, writing to outerHTML does not affect the element. Instead, it substitutes it in the DOM. We can write to elem.outerHTML, but this does not modify the element we're writing to ('elem'). Instead, it replaces it with the new HTML. By accessing the DOM, we may obtain pointers to the new items.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div>Hello, world!</div>

<script>
  let div = document.querySelector('div');

  // replace div.outerHTML with <p>...</p>
  div.outerHTML = '<p>A new element</p>'; // (*)

  // Wow! 'div' is still the same!
  alert(div.outerHTML); // <div>Hello, world!</div> (**)
</script>
```

  </div>
  </div>
</details>

---

### For element nodes, we can use innerHTML, but what is the recommended for use with the other node types like text nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should use the nodeValue and data properties instead of innerHTML. These two are almost the same for practical use, and there are only minor specification differences. So, we should use the data property; it's shorter to implement.</div><br />
  <div><strong>Technical Response:</strong> The innerHTML attribute applies exclusively to element nodes. Other node kinds, such as text nodes, have an equivalent: nodeValue and data properties. These two are nearly identical in terms of practical usage, with just minor specification changes. As a result, we should utilize the data property because it is easier to implement.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  Hello JavaScript
  <!-- My Comment -->
  <script>
    let text = document.body.firstChild;
    alert(text.data); // returns Hello JavaScript

    let comment = text.nextSibling;
    alert(comment.data); // returns My Comment
  </script>
</body>
```

  </div>
  </div>
</details>

---

### What is a good use case for reading data from comments?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use comments to embed information or template instructions into HTML. Then JavaScript can read it from data property and process embedded instructions.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- if isAdmin -->
<div>Welcome, Admin!</div>
<!-- /if -->
```

  </div>
  </div>
</details>

---

### Explain what the textContent property does in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The textContent provides access to the text inside the element: only text, minus all &#8249;tags&#8250;. In practice, reading such text is rarely needed. Writing to textContent is much more helpful because it allows us to write text the “secure way”.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="elem1"></div>
<div id="elem2"></div>

<script>
  let name = prompt("What's your name?", '<b>Winnie-the-Pooh!</b>');

  elem1.innerHTML = name; // Winnie-the-Pooh!
  elem2.textContent = name; // <b>Winnie-the-Pooh!</b>
</script>
```

  </div>
  </div>
</details>

---

### Explain what the hidden attribute and DOM property does in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “hidden” attribute and the DOM property specifies whether the element is visible or not. Technically, hidden works the same as style="display:none". But it’s shorter to write.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div>Both divs below are hidden</div>

<!-- hidden attribute -->
<div hidden>With the attribute "hidden"</div>

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true; // <- hidden DOM property
</script>
```

  </div>
  </div>
</details>

---
