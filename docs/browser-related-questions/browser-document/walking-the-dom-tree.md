---
title: Walking the DOM
description: Walking the DOM is a process of traversing the DOM tree. What does it mean in JavaScript to walk the DOM? - JavaScript interview questions and answers.
sidebar_position: 3
sidebar_label: Walking the DOM
keywords:
  - walking the dom
  - walking the dom tree
  - traversing the dom
  - tree traversal
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
  - walking the dom
  - walking the dom tree
  - traversing the dom
  - tree traversal
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WalkingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Walking the DOM | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Walking the DOM**

<CloseAllAnswers />

---

### What does it mean in JavaScript to walk the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can do anything with elements and their contents thanks to the DOM, but first, we must locate the proper DOM object. This step-by-step procedure is known as walking the DOM. All DOM actions begin with the document object. This point is the primary "entry point" into DOM, and we can reach any node from it.
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
  <div><strong>Interview Response:</strong> The topmost tree nodes are available directly as document properties, including the HTML, body, and head nodes document nodes.</div><br />
  <div><strong>Technical Response:</strong> The topmost tree nodes, including the HTML, body, and head nodes, are accessible as document properties right away. document.documentElement The uppermost document node is called an element. That is the DOM node for the &#8249;HTML&#8250; element. Another often used DOM component is the &#8249;body&#8250; element — document.body. The &#8249;head&#8250; tag is also known as document.head. Any node that extends beyond this point is a part of the body node.
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
  <div><strong>Interview Response:</strong> The null value in the DOM implies "doesn't exist" or "no such node". A script can't access an element that doesn't exist when it runs. If we include a script within &#8249;head&#8250;, document.body is inaccessible since the browser has not yet read it.
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

### What is the difference between Child nodes and Descendants in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A child node in the DOM is a direct child of the provided parent. Descendants include all components nested within the provided one, such as children and their children.
</div>
  </div>
</details>

---

### Can you explain what the firstChild and lastChild properties do on elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The firstChild and lastChild element properties give fast access to a parent element's first and last children.</div><br />
  <div><strong>Technical Response:</strong> The first and last child element characteristics provide quick access to a parent element's first and last children. The firstChild and lastChild attributes are considered shorthand. We utilize the childNodes property to communicate with nodes using brackets. There is also a specific function elem.hasChildNodes() that we can determine whether or not there are any child nodes.
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
  <div><strong>Interview Response:</strong> Child nodes make up a structure like an Array. In simple terms, it's a unique array-like iterable object that we can loop over.</div><br />
  <div><strong>Technical Response:</strong> The childNodes looks like an array, but it is not an array but rather a collection (a particular array-like iterable object). This object allows us to iterate over the childNodes using a for…of loop, which is consequential. That is because it is iterable (provides the Symbol.iterator property, as required). Since it's an array-like object we do not get all the benefits of arrays like the filter and map methods. However, there is a solution that we can use by invoking Array.from() and turning the childNodes into an array.
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
  <div><strong>Interview Response:</strong> Theoretically, you may use a for...in loop to cycle across collections. However, it is not advised—the for..in loop loops over all enumerable attributes. And collections include several "additional" attributes that seldomly get used, and we usually do not want, such as entries, forEach, and keys.
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
  <div><strong>Interview Response:</strong>
  Siblings are nodes that are the same parent's children. The head and body nodes, siblings, and both offspring of the HTML node are an example. The &#8249;body&#8250; is the "next" or "right" sibling of the &#8249;head&#8250;, while the &#8249;head&#8250; is the "previous" or "left" sibling of the &#8249;body&#8250;.
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

### Are there properties that we can use to access any of the following and previous node siblings (Note: including text and comment nodes)? How do you access the parent node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can access the next sibling via the nextSibling property, and the previous sibling node gets accessed via the previousSibling property. We can access the parent node via the parentNode property. We should note that using these properties allows direct access to all nodes, including the text and comment nodes.
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

### There are times when we do not want to access the text and comment nodes. Is there a property we can use to access the next sibling element node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, when we are interested in only accessing element nodes. Some properties serve that purpose for the previous and the next sibling element nodes. For the next sibling element node, we can use nextElementSibling property, and for the previous element node, we use previousElementSibling property. Web developers commonly referred to this feature as element-only navigation.
</div>
  </div>
</details>

---

### Why parentElement? Can the parent be not an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The parent may not be an element when we call parentElement on the document.documentElement is the first node of the document. It returns null, but we can access it using the parentNode property as an alternative.</div><br />
  <div><strong>Technical Response:</strong> ParentElement returns the "element" parent, whereas parentNode returns the "any node" parent. These characteristics are often the same: they both receive the parent. Except for the document.documentElement refers to the document's initial node without a parent element. This characteristic is because of the root node document.documentElement (&#8249;html&#8250;) is the child of the document. However, because the document is not an element node, parentNode does not return it, and parentElement does not.
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

### Besides the essential DOM elements, do elements provide additional properties based on their specific type?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Several DOM elements provide additional properties. For example, the table element provides the row, caption, tBodies, and other properties that we can access.</div><br />
  <div><strong>Technical Response:</strong> Certain types of DOM elements may provide additional properties specific to their type for convenience. An excellent example of this is table elements that provide table.rows, table.caption, table.tBodies, and additional properties that we can access. The table.rows property is a collection of &#8249;tr&#8250; elements of a table that we can modify via the DOM and highlight or change the text as an example. There are also additional navigation properties for HTML forms.
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
