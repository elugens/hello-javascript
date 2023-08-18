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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WalkingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Walking the DOM | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Walking the DOM**

---

<AdSense />

---

<CloseAllAnswers />

### What does "Walking the DOM" mean in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The term "Walking the DOM" means to navigate the DOM tree by moving through parent, child, and sibling elements in order to read or make changes to the content.
</div><br />
  <div><strong>Interview Response:</strong> We can do anything with elements and their contents thanks to the DOM, but first, we must locate the proper DOM object. This step-by-step procedure is known as walking the DOM. All DOM actions begin with the document object. This point is the primary "entry point" into DOM, and we can reach any node from it.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(document.documentElement); // console.logs [object HTMLHtmlElement] <html> node
```

  </div>
  </div>
</details>

---

### What properties does a node have for "Walking the DOM"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A node has several properties for DOM traversal including the parentNode, firstChild, lastChild, nextSibling, previousSibling, childNodes, and children. These allow navigation between parent, child, and sibling nodes in the DOM tree.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let node = document.body; // Start with the body element

// Traverse through each child node
for(let i = 0; i < node.childNodes.length; i++) {
    console.log(node.childNodes[i]);
}

// Access first and last child
console.log(node.firstChild);
console.log(node.lastChild);

// Access the next sibling
console.log(node.nextSibling);

// Access the previous sibling
console.log(node.previousSibling);
```

This code will output each child node of the body, the first and last child of the body, and the next and previous sibling of the body (if they exist).

  </div>
  </div>
</details>

---

### What is a Node in the context of the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Node in the DOM is a single point in the node tree. Various types of nodes exist, including element nodes, text nodes, and comment nodes. Each node can have parent, child, and sibling nodes.
  </div><br />
  <div><strong className="codeExample">Here's a simple JavaScript code example:</strong><br /><br />

  <div></div>

```javascript
// Access the body element which is a node in the DOM
let node = document.body;

// Log the node type - Element node should return 1
console.log(node.nodeType);

// Log the node name - should return "BODY"
console.log(node.nodeName);

// Access and log first child node - could be an element, text or comment
console.log(node.firstChild);
```

This code will output the type and name of the body element node, as well as the first child node of the body.

  </div>
  </div>
</details>

---

### What are the main types of nodes in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main types of nodes in the DOM are: document nodes, element nodes, text nodes, attribute nodes, comment nodes, and document type nodes. Each represents different parts of the document's structure.
  </div>
  </div>
</details>

---

### What does the parentNode property return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The parentNode property returns the parent node of the specified node in the DOM tree. If the node has no parent, it returns null.
  </div><br />
  <div><strong>Technical Response:</strong> The parentNode property in JavaScript returns the parent node of the specified node as a Node object. The parent of an element is the element or node that directly encloses it in the HTML structure. This could be any kind of node including an element node, the document node, or a document fragment.
  </div><br />
  <div><strong className="codeExample">For example, if you have the following HTML:</strong><br /><br />

  <div></div>

```html
<div id="parent">
  <p id="child">Hello, world!</p>
</div>
```

You can use JavaScript to access the parent node of the `<p>` element like this:

```javascript
var child = document.getElementById("child");
console.log(child.parentNode);
```

This would return the `<div>` element with the id of "parent", because that is the parent node of the `<p>` element.

Remember, the `parentNode` property is read-only, and will return `null` if the node does not have a parent, such as in the case of the `document` node.

  </div>
  </div>
</details>

---

### What is the difference between childNodes and children properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The childNodes property returns all child nodes including text and comment nodes, while the children property returns only child elements, excluding non-element nodes like text and comments.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that illustrates the difference...

```html
<div id="parent">
  <!-- Comment -->
  Text content
  <p>Paragraph</p>
</div>
```

And the corresponding JavaScript:

```javascript
let parent = document.getElementById('parent');

console.log(parent.childNodes);
// Returns a NodeList: [Comment, Text, HTMLParagraphElement]

console.log(parent.children);
// Returns an HTMLCollection: [HTMLParagraphElement]
```

As you can see, `childNodes` includes the comment and text nodes, while `children` only includes the `<p>` element. This difference is very important and must be considered when traversing the DOM in your JavaScript code.

  </div>
  </div>
</details>

---

### How would you access the first and last child of a node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can access the first and last child of a DOM node using the firstChild and lastChild properties, or firstElementChild and lastElementChild properties, depending on whether you want to include all node types or just element nodes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="parent">
  <!-- Comment -->
  Text content
  <p>First paragraph</p>
  <p>Second paragraph</p>
</div>
```

And the corresponding JavaScript:

```javascript
let parent = document.getElementById('parent');

console.log(parent.firstChild); 
// Returns a Comment node: <!-- Comment -->

console.log(parent.firstElementChild); 
// Returns an Element node: <p>First paragraph</p>

console.log(parent.lastChild);
// Returns an Element node: <p>Second paragraph</p>

console.log(parent.lastElementChild); 
// Returns an Element node: <p>Second paragraph</p>
```

In most cases, when dealing with HTML elements, you'll probably want to use `firstElementChild` and `lastElementChild` to avoid getting unexpected text or comment nodes. However, it's good to be aware of both sets of properties and their differences.

  </div>
  </div>
</details>

---

### How do you check if a node has child nodes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can check if a node has child nodes using the hasChildNodes() method. It returns true if the node has one or more child nodes, and false otherwise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let parent = document.getElementById('parent');

if (parent.hasChildNodes()) {
  console.log('The parent node has child nodes.');
} else {
  console.log('The parent node does not have child nodes.');
}
```

  </div>
  </div>
</details>

---

### What are the topmost tree nodes available directly as document properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The topmost tree nodes available directly as document properties are: document.documentElement, document.head, document.body, and document.doctype. (HTML, body, and head nodes document nodes)</div><br />
  <div><strong>Technical Response:</strong> The topmost tree nodes, including the HTML, body, and head nodes, are accessible as document properties right away. document.documentElement The uppermost document node is called an element. That is the DOM node for the &#8249;HTML&#8250; element. Another often used DOM component is the &#8249;body&#8250; element — document.body. The &#8249;head&#8250; tag is also known as document.head. Any node that extends beyond this point is a part of the body node.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(document.documentElement); // console.logs [object HTMLHtmlElement] <html> node
```

  </div>
  </div>
</details>

---

### What does null mean or equate to in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the DOM, null represents the absence of a node in a specific location or context. It is commonly used to indicate a missing or invalid object reference.
</div><br />
  <div><strong>Technical Response:</strong> The null value in the DOM implies "doesn't exist" or "no such node". A script can't access an element that doesn't exist when it runs. If we include a script within &#8249;head&#8250;, document.body is inaccessible since the browser has not yet read it.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<html>
  <head>
    <script>
      console.log('From HEAD: ' + document.body); // null, there's no <body> yet
    </script>
  </head>

  <body>
    <script>
     console.log('From BODY: ' + document.body); // HTMLBodyElement, now it exists
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
  <div><strong>Interview Response:</strong> Child nodes are direct offspring of the provided parent node. Descendants are all nodes nested beneath a parent node, including grandchildren, great-grandchildren, etc.
</div>
  </div>
</details>

---

### Can you explain what the firstChild and lastChild properties do on elements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The firstChild and lastChild element properties give fast access to a parent element's first and last children. The firstChild property returns the first child node of an element, while the lastChild returns the last. These nodes could be any type: element, text, or comment.</div><br />
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
  <div><strong>Interview Response:</strong> The childNodes property returns a live NodeList object, which is a collection of all child nodes of an element, represented as a list (array-like object) of Node objects. In simple terms, it's a unique array-like iterable object that we can loop over.</div><br />
  <div><strong>Technical Response:</strong> The childNodes looks like an array, but it is not an array but rather a collection (a particular array-like iterable object). This object allows us to iterate over the childNodes using a for…of loop, which is consequential. That is because it is iterable (provides the Symbol.iterator property, as required). Since it's an array-like object we do not get all the benefits of arrays like the filter and map methods. However, there is a solution that we can use by invoking Array.from() and turning the childNodes into an array.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
for (let node of document.body.childNodes) {
  console.log(node); // shows all nodes from the collection
}

// Doesn't work returns undefined
console.log(document.body.childNodes.filter); // undefined (there's no filter method!)

// Solution: turn childNodes into an array
console.log(Array.from(document.body.childNodes).filter); // function
```

  </div>
  </div>
</details>

---

### Is it possible to loop over node collections with a for…in loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, it is possible to loop over node collections with a for...in loop, but it is not recommended, as it may include non-numeric properties and cause unexpected behavior. It is better to use a for...of or forEach loop.
</div><br />
  <div><strong>Technical Response:</strong> Theoretically, you may use a for...in loop to cycle across collections. However, it is not advised, the for..in loop loops over all enumerable attributes. And collections include several "additional" attributes that seldomly get used, and we usually do not want, such as entries, forEach, and keys.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// shows 0, 1, length, item, values, forEach, and more.
for (let prop in document.body.childNodes) console.log(prop);
```

  </div>
  </div>
</details>

---

### Can you define what a sibling is in the DOM structure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Siblings are nodes that are the same parent's children. The head and body nodes, siblings, and both offspring of the HTML node are an example. The &#8249;body&#8250; is the "next" or "right" sibling of the &#8249;head&#8250;, while the &#8249;head&#8250; is the "previous" or "left" sibling of the &#8249;body&#8250;. Siblings can be accessed using properties like nextSibling and previousSibling.
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
  <div><strong>Interview Response:</strong> Yes, we can access the next sibling via the nextSibling property, and the previous sibling node can be accessed via the previousSibling property. We can access the parent node via the parentNode property. We should note that using these properties allows direct access to all nodes, including the text and comment nodes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// parent of <body> is <html>
console.log(document.body.parentNode === document.documentElement); // true

// after <head> goes <body>
console.log(document.head.nextSibling); // HTMLBodyElement

// before <body> goes <head>
console.log(document.body.previousSibling); // HTMLHeadElement
```

  </div>
  </div>
</details>

---

### There are times when we do not want to access the text and comment nodes. Is there a property we can use to access the next sibling element node?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the Element.nextElementSibling property can be used to access the next sibling element node, ignoring any text or comment nodes.
</div><br/>
  <div><strong>Interview Response:</strong> Yes, when we are interested in only accessing element nodes. Some properties serve that purpose for the previous and the next sibling element nodes. For the next sibling element, we can use nextElementSibling property, and for the previous element, we use previousElementSibling property. Web developers commonly referred to this feature as element-only navigation.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how to use nextElementSibling:

```js
<div id="parent">
  <!-- Comment -->
  Text content
  <p id="first">First paragraph</p>
  <p id="second">Second paragraph</p>
</div>
```

And the corresponding JavaScript:

```js
let first = document.getElementById('first');

console.log(first.nextElementSibling);
// Returns an Element node: <p id="second">Second paragraph</p>
```

  </div>
  </div>
</details>

---

### Is it possible that the parent element is not an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The parent may not be an element when we call parentElement on the document.documentElement is the first node of the document. It returns null, but we can access it using the parentNode property as an alternative.</div><br />
  <div><strong>Technical Response:</strong> ParentElement returns the "element" parent, whereas parentNode returns the "any node" parent. These characteristics are often the same: they both receive the parent. Except for the document.documentElement refers to the document's initial node without a parent element. This characteristic is because of the root node document.documentElement (&#8249;html&#8250;) is the child of the document. However, because the document is not an element node, parentNode does not return it, and parentElement does not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(document.documentElement.parentNode); // document
console.log(document.documentElement.parentElement); // null
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
