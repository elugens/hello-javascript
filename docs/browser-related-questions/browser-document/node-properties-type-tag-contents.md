---
title: Node Properties
sidebar_position: 5
---

# Node Properties

**Browser Document: Node Properties**

<head>
  <title>Node Properties - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you explain the hierarchy in classes of DOM nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each DOM node belongs to the corresponding built-in class. The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it such as text, element, and comment nodes.
</div>
  </div>
</details>

---

### Briefly explain the purpose of the EventTarget abstract class.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> EventTarget is the root “abstract” class. Objects of that class are never created. It serves as a base, so that all DOM nodes support so-called “events”.
</div>
  </div>
</details>

---

### Can you explain the function of the Node abstract class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Node is also an “abstract” class, serving as a base for DOM nodes. It provides the core tree functionality: parentNode, nextSibling, childNodes and so on (they are getters). Objects of Node class are never created. But there are concrete node classes that inherit from it, namely: Text for text nodes, Element for element nodes and more exotic ones like Comment for comment nodes.
</div>
  </div>
</details>

---

### Please explain the purpose of the Element base class.

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
  <div><strong>Interview Response:</strong> To see the DOM node class name, we can recall that an object usually has the constructor property. It references the class constructor, and constructor.name is its name or we can just toString it. We also can use instanceof to check the inheritance, which returns a Boolean value.
    </div>
  </div>
</details>

Example:

```js
// Using the Object constructor

alert(document.body.constructor.name); // HTMLBodyElement
// Built-in toString return value

alert(document.body); // [object HTMLBodyElement]
// Check to see if its a instanceof of an Element

alert(document.body instanceof HTMLBodyElement); // true
alert(document.body instanceof HTMLElement); // true
alert(document.body instanceof Element); // true
alert(document.body instanceof Node); // true
alert(document.body instanceof EventTarget); // true
```

---

### What is the difference between console.dir and console.log when it comes to returning objects in the console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In brief, console.log(elem) shows the element DOM tree and console.dir(elem) shows the element as a DOM object, it is great to explore its properties.</div><br />
  <div><strong>Technical Response:</strong> Most browsers support two commands in their developer tools: console.log and console.dir. They output their arguments to the console. For JavaScript objects these commands usually do the same. But for DOM elements they are different, console.log(elem) shows the element DOM tree. console.dir(elem) shows the element as a DOM object, good to explore its properties.
  </div>
  </div>
</details>

---

### What is an interface description language or IDL in programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An interface description language or interface definition language (IDL), is a specification language used to describe a software component's application programming interface (API). IDLs describe an interface in a language-independent way, enabling communication between software components that do not share one language, for example, between those written in C++ and those written in Java.
    </div>
  </div>
</details>

---

### How are DOM classes described in the specification?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the specification, DOM classes are not described by using JavaScript, but a special Interface description language (IDL), that is easy to understand. In IDL all properties are prepended with their types. For instance, DOMString, boolean and so on.
    </div>
  </div>
</details>

Example:

```js
// Define HTMLInputElement

// The colon ":" means that HTMLInputElement inherits from HTMLElement

interface HTMLInputElement: HTMLElement {

    // here go properties and methods of <input> elements

    // "DOMString" means that the value of a property is a string

    attribute DOMString accept;

    attribute DOMString alt;

    attribute DOMString autocomplete;

    attribute DOMString value;

    // boolean value property (true/false)

    attribute boolean autofocus;

    //...

    // now the method: "void" means that the method returns no value

    void select();

    //...

}
```

---

### What does the nodeType property return JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It has a numeric value that reflects the type of node you are returning for element nodes it is 1, text nodes it is 3, and for the document object 9. There are others listed in the specification: https://dom.spec.whatwg.org/#node
    </div>
  </div>
</details>

Example:

```html
<body>
  <script>
    let elem = document.body;

    // let us examine what it is?

    alert(elem.nodeType); // 1 => element
    // and the first child is...

    alert(elem.firstChild.nodeType); // 3 => text
    // for the document object, the type is 9

    alert(document.nodeType); // 9
  </script>
</body>
```

---

### What is the difference between the nodeName and tagName properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The tagName property exists only for Element nodes. The nodeName is defined for any Node, but for elements it means the same as tagName and for other node types (text, comment, etc.) it has a string with the node type.</div><br />
  <div><strong>Note:</strong> In other words, tagName is only supported by element nodes (as it originates from Element class), while nodeName can say something about other node types.
  </div><br />
  <div><strong>Technical Response:</strong> The difference is reflected in their names but is indeed a bit subtle. The tagName property exists only for Element nodes. The nodeName is defined for any Node, but for elements it means the same as tagName and for other node types (text, comment, etc.) it has a string with the node type. In other words, tagName is only supported by element nodes (as it originates from Element class), while nodeName can say something about other node types.
  </div>
  </div>
</details>

Example:

```html
<body>
  <!-- comment -->

  <script>
    // for comment

    alert(document.body.firstChild.tagName); // undefined (not an element)
    alert(document.body.firstChild.nodeName); // #comment
    // for document

    alert(document.tagName); // undefined (not an element)
    alert(document.nodeName); // #document
  </script>
</body>
```

---

### Is there a difference on what is returned when using the tagName property on HTML vs XML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> YES. The browser has two modes of processing documents: HTML and XML. Usually the HTML-mode is used for webpages. XML-mode is enabled when the browser receives an XML-document with the header content-type for xml/xhtml. In HTML mode tagName/nodeName is always uppercased. In XML mode the case is kept “as is”.</div><br />
  <div><strong>Note:</strong> Nowadays XML mode is rarely used, but you may come across it in older applications.
  </div><br />
  <div><strong>Technical Response:</strong> Although, this may seem trivial, the answer is YES. The browser has two modes of processing documents: HTML and XML. Usually the HTML-mode is used for webpages. XML-mode is enabled when the browser receives an XML-document with the header: Content-Type: application/xml+xhtml. In HTML mode tagName/nodeName is always uppercased: it is BODY either for &#8249;body&#8250; or &#8249;BoDy&#8250;. In XML mode the case is kept “as is”. Nowadays XML mode is rarely used, but you may come across it in older applications.
  </div>
  </div>
</details>

---

### Explain, what the innerHTML property does in JavaScript.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The innerHTML property allows us to get the HTML inside the element as a string. We can also modify it. So, it is one of the most powerful ways to change the page dynamically.
    </div>
  </div>
</details>

Example:

```html
<body>
  <p>A paragraph</p>

  <div>A div</div>

  <script>
    alert(document.body.innerHTML); // read the current contents
    document.body.innerHTML = 'The new BODY!';

    // replaces and returns The New Body in the HTML
  </script>
</body>
```

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

### What is the main thing you should be aware of when using “innerHTML+=” syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When using the “innerHTML+=” we should know the property does is not an addition, but a full overwrite.</div><br />
  <div><strong>Note:</strong> It should be noted that we can append HTML to an element by using elem.innerHTML+="more html". But we should be careful about doing it.
  </div>
  </div>
</details>

---

### Explain, what the outerHTML property does in JavaScript.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The outerHTML property contains the full HTML of the element. That is like innerHTML plus the element itself. Beware: unlike innerHTML, writing to outerHTML does not change the element. Instead, it replaces it in the DOM. We can write to elem.outerHTML, but should keep in mind that it doesn’t change the element we’re writing to (‘elem’). It puts the new HTML in its place instead. We can get references to the new elements by querying the DOM.
    </div>
  </div>
</details>

Example:

```html
<div>Hello, world!</div>

<script>
  let div = document.querySelector('div');

  // replace div.outerHTML with <p>...</p>

  div.outerHTML = '<p>A new element</p>'; // (*)
  // Wow! 'div' is still the same!

  alert(div.outerHTML); // <div>Hello, world!</div> (**)
</script>
```

---

### For element nodes we can use innerHTML, but what is the recommended for use with the other node types like text nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should use the nodeValue and data properties instead of innerHTML. These two are almost the same for practical use, there are only minor specification differences. So, we should use the data property because it is shorter.</div><br />
  <div><strong>Technical Response:</strong> The innerHTML property is only valid for element nodes. Other node types, such as text nodes, have their counterpart: nodeValue and data properties. These two are almost the same for practical use, there are only minor specification differences. So, we should use the data property, because it is shorter.
  </div>
  </div>
</details>

Example:

```html
<body>
  Hello JavaScript

  <!-- My Comment -->

  <script>
    let text = document.body.firstChild;

    alert(text.data); // returns Hello JavaScript
    let comment = text.nextSibling;

    alert(comment.data); // returns My Comment
  </script>
</body>
```

---

### What is a good use case for reading data from comments?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use comments to embed information or template instructions into HTML. Then JavaScript can read it from data property and process embedded instructions.
    </div>
  </div>
</details>

Example:

```html
<!-- if isAdmin -->

<div>Welcome, Admin!</div>

<!-- /if -->
```

---

### Explain what the textContent property does in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The textContent provides access to the text inside the element: only text, minus all &#8249;tags&#8250;. In practice, reading such text is rarely needed. Writing to textContent is much more useful because it allows to write text the “safe way”.The textContent provides access to the text inside the element: only text, minus all &#8249;tags&#8250;. In practice, reading such text is rarely needed. Writing to textContent is much more useful because it allows to write text the “safe way”.
    </div>
  </div>
</details>

Example:

```html
<div id="elem1"></div>

<div id="elem2"></div>

<script>
  let name = prompt("What's your name?", '<b>Winnie-the-Pooh!</b>');

  elem1.innerHTML = name; // Winnie-the-Pooh!
  elem2.textContent = name; // <b>Winnie-the-Pooh!</b>
</script>
```

---

### Explain what the hidden attribute and DOM property does in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The “hidden” attribute and the DOM property specifies whether the element is visible or not. Technically, hidden works the same as style="display:none". But it’s shorter to write.
    </div>
  </div>
</details>

Example:

```html
<div>Both divs below are hidden</div>

<div hidden>With the attribute "hidden"</div>
<!-- hidden attribute -->

<div id="elem">JavaScript assigned the property "hidden"</div>

<script>
  elem.hidden = true; // hidden DOM property
</script>
```

---
