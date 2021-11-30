---
title: Walking the DOM
sidebar_position: 2
---

# Walking the DOM

**Browser Document: Walking the DOM**

<head>
  <title>Walking the DOM - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does it mean to walk the DOM in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The DOM allows us to do anything with elements and their contents, but first we need to reach the corresponding DOM object. This step through process is commonly referred to as walking the DOM. All operations on the DOM start with the document object. That is the main “entry point” to DOM. From it we can access any node.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(document.documentElement); // alerts [object HTMLHtmlElement] <html> node
```

  </div>
  </div>
</details>

---

### What are the topmost tree nodes available direct as document properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The topmost tree nodes are available directly as document properties including the html, body, and head nodes document nodes.</div><br />
  <div><strong>Technical Response:</strong> The topmost tree nodes are available directly as document properties including the html, body, and head nodes document nodes. The topmost document node is document.documentElement. That is the DOM node of the &#8249;html&#8250; tag. Another widely used DOM node is the &#8249;body&#8250; element – document.body. The &#8249;head&#8250; tag is available as document.head. Any node beyond are part of the body node.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(document.documentElement); // alerts [object HTMLHtmlElement] <html> node
```

  </div>
  </div>
</details>

---

### What does null mean or equate to in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the DOM, the null value means “doesn’t exist” or “no such node”. A script cannot access an element that does not exist at the moment of execution. In particular, if a script is inside &#8249;head&#8250;, then document.body is unavailable, because the browser did not read it yet.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<html>
  <head>
    <script>
      alert('From HEAD: ' + document.body); // null, there's no <body> yet
    </script>
  </head>

  <body>
    <script>
      alert('From BODY: ' + document.body); // HTMLBodyElement, now it exists
    </script>
  </body>
</html>
```

  </div>
  </div>
</details>

---

### What is difference between Child nodes and Descendants in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the DOM, a child node is a direct child of the given parent. Descendants are all elements that are nested in the given one, including children, their children and so on.
</div>
  </div>
</details>

---

### Explain, what does the firstChild and lastChild properties do on elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The firstChild and lastChild element properties give fast access to the first and last children of a parent element.</div><br />
  <div><strong>Technical Response:</strong> The firstChild and lastChild element properties give fast access to the first and last children of a parent element. Using the firstChild and lastChild are considered shorthand properties. The childNodes property can also be used to interact with the nodes using the bracket notation. There’s also a special function elem.hasChildNodes() to check whether there are any child nodes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
elem.childNodes[0] === elem.firstChild; // true
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild; // true
```

  </div>
  </div>
</details>

---

### What type of object structure are childNodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Child nodes make of a structure that is like an Array. In simple terms, its a special array-like iterable object that we can loop over.</div><br />
  <div><strong>Technical Response:</strong> The childNodes looks like an array, but it is not an array, but rather a collection (a special array-like iterable object). This allows us to iterate over the childNodes using a for…of loop, which consequential. That is because it is iterable (provides the Symbol.iterator property, as required). Since, its an array like object we do not get all the benefits of arrays like the filter and map methods directly. However, there is a solution that we can use by invoking Array.from() and turning the childNodes into an array.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}

// Doesn't work returns undefined
alert(document.body.childNodes.filter); // undefined (there's no filter method!)

// Solution: turn childNodes into an array
alert(Array.from(document.body.childNodes).filter); // function
```

  </div>
  </div>
</details>

---

### Is it possible to loop over node collections with a for…in loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, technically you can loop over collections with a for…in loop, but it is not recommended. The for..in loop iterates over all enumerable properties. And collections have some “extra” rarely used properties that we usually do not want to get like entries, forEach, and keys.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// shows 0, 1, length, item, values, forEach, and more.
for (let prop in document.body.childNodes) alert(prop);
```

  </div>
  </div>
</details>

---

### Can you define what a sibling is in the DOM structure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Siblings are nodes that are children of the same parent. An example of this is the head and body nodes that are siblings and both children of the html node. The &#8249;body>&#8250; is said to be the “next” or “right” sibling of &#8249;head&#8250;, and the &#8249;head&#8250; is said to be the “previous” or “left” sibling of &#8249;body&#8250;.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

  </div>
  </div>
</details>

---

### Are there properties that we can use to access any of the next and previous siblings of a node (Note: including text and comment nodes)? How do you access the parent node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the next sibling can be accessed via the nextSibling property and the previous sibling node can be accessed via the previousSibling property. The parent node is accessed via the parentNode property. It should be noted that using these properties allows direct access to all nodes including the text and comment nodes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// parent of <body> is <html>
alert(document.body.parentNode === document.documentElement); // true

// after <head> goes <body>
alert(document.head.nextSibling); // HTMLBodyElement

// before <body> goes <head>
alert(document.body.previousSibling); // HTMLHeadElement
```

  </div>
  </div>
</details>

---

### There are times when we do not want to access the text and comment nodes. Is there a property that we can use to access the next sibling element node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes when we are interested in only accessing element nodes. There are properties that serve that purpose for both the previous and the next sibling element nodes. For, the next sibling element node we can use nextElementSibling and the previous element node we use previousElementSibling. This is commonly referred to as element-only navigation.
</div>
  </div>
</details>

---

### Why parentElement? Can the parent be not an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The parent may not be an element when we are calling parentElement on the document.documentElement which is the first node of the document. It will return null, but we can access it using the parentNode property as an alternative.</div><br />
  <div><strong>Technical Response:</strong> The parentElement property returns the “element” parent, while parentNode returns “any node” parent. These properties are usually the same: they both get the parent. With the one exception of document.documentElement that refers to the first node in the document where there is no parent element. The reason is that the root node document.documentElement &#8249;html&#8250; has document as its parent. But document is not an element node, so parentNode returns it and parentElement does not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(document.documentElement.parentNode); // document
alert(document.documentElement.parentElement); // null
```

  </div>
  </div>
</details>

---

### Besides the basic DOM elements, do elements provide additional properties based on their specific type?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several DOM elements that provide additional properties. For example, the table element provides the row, caption, tBodies and other properties that we can access.</div><br />
  <div><strong>Technical Response:</strong> Certain types of DOM elements may provide additional properties, specific to their type, for convenience. A good example of this is table elements that provide table.rows, table.caption, table.tBodies, and additional properties that we can access. The table.rows property is a collection of &#8249;tr&#8250; elements of a table that we can modify via the DOM. We can highlight or change the text as an example. There are also additional navigation properties for HTML forms.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<table id="table">
  <tr>
    <td>one</td>
    <td>two</td>
  </tr>
  <tr>
    <td>three</td>
    <td>four</td>
  </tr>
</table>

<script>
  // get td with "two" (first row, second column)
  let td = table.rows[0].cells[1];
  td.style.backgroundColor = 'red'; // highlight it
</script>
```

  </div>
  </div>
</details>

---
