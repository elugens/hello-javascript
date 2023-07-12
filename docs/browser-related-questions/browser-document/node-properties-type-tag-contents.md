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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/NodePropsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Node Properties | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Node Properties**

<CloseAllAnswers />

---

### What is a DOM node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A DOM (Document Object Model) node is an object representing a part of an HTML document. This can be elements, attributes, or text. It's the core interface for web page manipulation.
  </div><br />
  <div><strong className="codeExample">Here is a simple JavaScript code example that manipulates DOM nodes:</strong><br /><br />

  <div></div>

```javascript
// Select a DOM node
let node = document.getElementById('myDiv');

// Change its text content
node.textContent = 'New Text';

// Add a new child element
let newElement = document.createElement('p');
newElement.textContent = 'I am a new paragraph!';
node.appendChild(newElement);
```

This code selects a `<div>` element with the id 'myDiv', changes its text, and adds a new `<p>` child node to it.

  </div>
  </div>
</details>

---

### What are some common node properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Common node properties include nodeName, nodeType, nodeValue, parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling.
  </div>
  </div>
</details>

---

### What is the nodeName property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nodeName property returns the name of a specific node in the DOM, like the tag name for HTML elements or '#text' for text nodes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple JavaScript code example showing how to use the `nodeName` property.

```javascript
// Select a DOM node
let node = document.getElementById('myDiv');

// Log its node name
console.log(node.nodeName);  // Logs: 'DIV'
```

This code selects a `<div>` element with the id 'myDiv' and logs its node name, which is 'DIV'.

  </div>
  </div>
</details>

---

### How does nodeValue differ from textContent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The nodeValue property returns or sets the value of a node. For text nodes, it's the text itself, but for elements, it's null. textContent gets or sets the text inside an element, including its descendants.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a JavaScript code example that shows the difference between `nodeValue` and `textContent`:

```javascript
// Create a new text node
let textNode = document.createTextNode('Hello, World!');

console.log(textNode.nodeValue); // Logs: 'Hello, World!'
console.log(textNode.textContent); // Logs: 'Hello, World!'

// Select an element
let elementNode = document.getElementById('myDiv');

console.log(elementNode.nodeValue); // Logs: null
console.log(elementNode.textContent); // Logs: text content of 'myDiv', including any child elements
```

In this code, both `nodeValue` and `textContent` return the same result for a text node. But for an element, `nodeValue` returns null while `textContent` returns the element's text content.

  </div>
  </div>
</details>

---

### Can you explain the hierarchy in classes of DOM nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The DOM hierarchy consists of nodes, organized in a tree structure: Document (root), Element (tags), Text (content), Comment, and Attribute (properties). Parent, child, and sibling relationships connect nodes for traversal and manipulation. Each DOM node belongs to the corresponding built-in class. The root of the hierarchy is EventTarget, inherited by the node, and other DOM nodes inherit from it, such as text, element, and comment nodes.
</div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/dom-class-hierarchy.svg" /><br /><br />

</div>

  </div>
</details>

---

### How can you access an element's attributes using node properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the attributes property to access a live NamedNodeMap of an element's attributes, where each attribute is represented as an Attr node.
</div><br/>

  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<pre test="test"></pre>

<script>
const pre = document.querySelector("pre");
const attrMap = pre.attributes;
const value = attrMap.getNamedItem("test").value;
pre.textContent = `The 'test' attribute contains ${value}.
And 'boum' has ${attrMap["boum"] ? "been" : "not been"} found.`;
</script>
```

  </div>
  </div>
</details>

---

### How do you access an element's class list using node properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can access an element's class list using the classList property. For instance, element.classList returns a DOMTokenList object of the class attributes.
</div><br/>

  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let element = document.querySelector('.example-class');
let classList = element.classList;

classList.forEach(className => {
    console.log(className);
});
```

  </div>
  </div>
</details>

---

### Can you describe the Node abstract class's function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Node abstract class represents a single node in the DOM tree, defining shared properties and methods for various node types, facilitating tree traversal, manipulation, and event handling.
</div><br/>
  <div><strong>Technical Response:</strong> Node is also an “abstract” class, serving as a base for DOM nodes. It provides the core tree functionality: parentNode, nextSibling, childNodes, and more (they are getters). Objects of the node class get created. But concrete node classes inherit from it: Text nodes for text nodes, Element nodes for element nodes, and more exotic ones like Comment nodes for comment nodes.
</div>
  </div>
</details>

---

### Can you please explain the purpose of the Element base class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Element base class represents an HTML element, defining methods and properties for manipulation and interaction. It encapsulates attributes, content, and child elements, while providing access and modification capabilities.<br/><br/>Element is a base class for DOM elements. It provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector. A browser supports not only HTML, but also XML and SVG. The Element class serves as a base for more specific classes: SVGElement, XMLElement and HTMLElement.
</div>
  </div>
</details>

---

### What is the purpose of the HTMLElement base class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HTMLElement base class represents an HTML-specific element, inheriting from Element. It is inherited by concrete HTML elements such as the HTMLInputElement, HTMLBodyElement, and HTMLAnchorElement classes. It provides properties and methods for styling, form control, and accessibility, tailored to HTML-specific behaviors and attributes.<br /><br />
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
  <div><strong>Interview Response:</strong> To see the DOM node class name, we recall that an object usually has the constructor property. It references the class constructor and node.constructor.name is its name, or we can toString it. We can also use instanceof to check the inheritance, which returns a Boolean value.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using the Object constructor
console.log(document.body.constructor.name); // HTMLBodyElement

// Built-in toString return value
console.log(document.body); // [object HTMLBodyElement]

// Check to see if its a instanceof of an Element
console.log(document.body instanceof HTMLBodyElement); // true
console.log(document.body instanceof HTMLElement); // true
console.log(document.body instanceof Element); // true
console.log(document.body instanceof Node); // true
console.log(document.body instanceof EventTarget); // true
```

  </div>
  </div>
</details>

---

### What is the difference between console.dir and console.log when returning objects in the console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In brief, console.log displays a string representation of an object, while console.dir presents an interactive, navigable tree view of object properties, making it easier to explore object structure.</div><br />
  <div><strong>Technical Response:</strong> Most browsers allow two commonly used commands in their development tools: console.log and console.dir. Their arguments get printed on the console. These instructions typically have the same effect on JavaScript objects. However, console.log(elem) displays the element's DOM tree for DOM elements. The element gets shown as a DOM object using console.dir(elem), allowing you to examine its properties.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const obj = { name: 'John', age: 30 };

console.log(obj);  // Output: { name: 'John', age: 30 }
console.dir(obj);  // Output: Object: { name: 'John', age: 30, ... }
```

  </div>
  </div>
</details>

---

### What is an interface description language or IDL in programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Interface Description Language (IDL) is a formal language used to define interfaces between software components, specifying data types, methods, and structures, enabling cross-language communication and code generation.
    </div><br/>
  <div><strong>Technical Response:</strong> An interface description language or interface definition language (IDL), is a specification language used to describe a software component's application programming interface (API). IDLs describe an interface in a language-independent way, enabling communication between software components that do not share one language, such as those written in C++ and those written in Java.
    </div>
  </div>
</details>

---

### How are DOM classes described in the specification?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> DOM classes are described in the specification using WebIDL, an interface description language that defines interfaces, methods, properties, and data types, serving as a blueprint for DOM API implementations.
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
  <div><strong>Interview Response:</strong> The nodeType property in JavaScript returns an integer constant representing the node's type, such as Element (1), Attribute (2), Text (3), Comment (8), or Document (9). There are others listed in the specification: https://dom.spec.whatwg.org/#node
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <script>
    let elem = document.body;

    // let us examine what it is?
    console.log(elem.nodeType); // 1 => element

    // and the first child is...
    console.log(elem.firstChild.nodeType); // 3 => text

    // for the document object, the type is 9
    console.log(document.nodeType); // 9
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
    console.log(document.body.firstChild.tagName); // undefined (not an element)
    console.log(document.body.firstChild.nodeName); // #comment

    // for document
    console.log(document.tagName); // undefined (not an element)
    console.log(document.nodeName); // #document
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Is there a difference between what gets returned when the tagName attribute gets used in HTML and XML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> YES. The browser may handle documents in two ways: HTML and XML. Typically, HTML mode gets used for web pages. When the browser receives an XML document with the header content-type XML/XHTML, XML-mode is activated. In HTML mode, tagName and nodeName always get capitalized. The case is left "as is" in XML mode.</div><br />
  <div><strong>Note:</strong> Nowadays, XML mode is rarely used, but you may come across it in older applications.
  </div><br />
  <div><strong>Technical Response:</strong> Although this may seem trivial, the answer is YES. The browser has two modes of processing documents: HTML and XML. Usually, the HTML-mode gets used for web pages. XML-mode is enabled when the browser receives an XML-document with the header: Content-Type: application/xml+xhtml. In HTML mode tagName/nodeName is always uppercased: it is BODY either for &#8249;body&#8250; or &#8249;BoDy&#8250;. In XML mode, the case gets kept “as is”. Nowadays, XML mode rarely gets used, but you may encounter it in older applications.
  </div>
  </div>
</details>

---

### Can you explain what the innerHTML property does in JavaScript?

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
    console.log(document.body.innerHTML); // read the current contents
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
  <div><strong>Interview Response:</strong> If innerHTML inserts a &#8249;script&#8250; tag into the document – it becomes a part of HTML as text content but does not execute.
    </div>
  </div>
</details>

---

### What is the main thing you should know when using “innerHTML+=” syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When using "innerHTML+=", be aware that it destroys and recreates element content, causing loss of attached event listeners, inefficient performance, and potential security risks from script injection.</div><br />
  <div><strong>Note:</strong> We can append HTML to an element by using elem.innerHTML+="more HTML". But we should be careful about doing it.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**The Problem:**

```js
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <div id="myDiv">
        Initial content
    </div>

    <script>
        let div = document.getElementById('myDiv');
        let items = ['Item 1', 'Item 2', 'Item 3'];

        // Incorrect usage: appending content using innerHTML +=
        for (let item of items) {
            div.innerHTML += '<p>' + item + '</p>';
        }
    </script>
</body>
</html>

```

**The Solution:**

To efficiently append content to an element without the issues of using `innerHTML +=`, you can use the `createElement` and `appendChild` methods. Here's an updated code example that demonstrates the recommended approach:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
</head>
<body>
    <div id="myDiv">
        Initial content
    </div>

    <script>
        let div = document.getElementById('myDiv');
        let items = ['Item 1', 'Item 2', 'Item 3'];

        // Correct usage: appending content using createElement and appendChild
        for (let item of items) {
            let paragraph = document.createElement('p');
            paragraph.textContent = item;
            div.appendChild(paragraph);
        }
    </script>
</body>
</html>
```

In this updated example, instead of using `innerHTML +=`, we create a new `<p>` element for each item in the array using `createElement`. We set the text content of the paragraph element using `textContent`, and then append it to the `myDiv` element using `appendChild`. This approach avoids the performance and event handling issues associated with `innerHTML +=` and provides a more reliable way to append content to the element.

  </div>
  </div>
</details>

---

### Can you explain what the outerHTML property does in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The outerHTML property in JavaScript gets or sets the serialized HTML including the element itself, allowing retrieval and replacement of an element along with its content and attributes.
    </div><br />
  <div><strong>Technical Response:</strong> The element's full HTML gets stored in the outerHTML attribute. This structure is equivalent to innerHTML plus the element itself. Be aware that, unlike innerHTML, writing to outerHTML does not affect the element. Instead, it substitutes it in the DOM. We can write to elem.outerHTML, but this does not modify the element we're writing to ('elem'). Instead, it replaces it with the new HTML. By accessing the DOM, we may obtain pointers to the new items.
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
  console.log(div.outerHTML); // <div>Hello, world!</div> (**)
</script>
```

  </div>
  </div>
</details>

---

### For element nodes, we can use innerHTML, but what is recommended for use with the other node types like text nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For text nodes, we use the nodeValue or textContent properties, which enable getting or setting the content of text and comment nodes, without parsing or rendering HTML.</div><br />
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
    console.log(text.data); // returns Hello JavaScript

    let comment = text.nextSibling;
    console.log(comment.data); // returns My Comment
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
  <div><strong>Interview Response:</strong> A good use case for reading data from comments is extracting metadata, such as version information or instructions, from HTML templates or application source code for diagnostics or documentation.
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

### Can you explain what the textContent property does in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The textContent property in JavaScript gets or sets the text content of a node and its descendants, allowing manipulation of element content without parsing HTML or exposing HTML tags.Writing to textContent is much more helpful because it allows us to write text the “secure way”.
    </div><br />
  <div><strong>Technical Response:</strong> The textContent provides access to the text inside the element: only text, minus all &#8249;tags&#8250;. In practice, reading such text is rarely needed. Writing to textContent is much more helpful because it allows us to write text the “secure way”.
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

### Can you explain what the hidden attribute and DOM property do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The hidden attribute and DOM property in JavaScript control an element's visibility, hiding it from rendering when set to true, without affecting layout or functionality, it's useful for toggling content in the browser. Technically, hidden works the same as style="display:none". But it’s shorter to write.
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
