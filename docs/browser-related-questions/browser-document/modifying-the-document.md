---
title: Modifying the Document
description: JavaScript allows us to modify the HTML document by using the Document Object Model (DOM). - JavaScript Interview Questions & Answers
sidebar_position: 7
sidebar_label: Modifying the Document
keywords:
  - modifying the document
  - html document
  - document object model
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
  - modifying the document
  - html document
  - document object model
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ModifyingDocSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Modifying the Document | JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Modifying the Document**

---

<AdSense />

---

<CloseAllAnswers />

### How do you create new DOM nodes in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can create new DOM nodes using the document.createElement(tagName) method, and add text with textContent. Then append to an existing node with parentNode.appendChild(newNode).
    </div><br />
  <div><strong>Technical Response:</strong> Two methods, including the createElement and createTextNode methods, are used to create DOM nodes. The document.createElement(tag) creates a new element node. The document.createTextNode(‘text’) creates a new text node with the give ‘text’. We need to create element nodes, such as a div, most of the time.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let newNode = document.createElement('div');
newNode.textContent = 'Hello!';
document.body.appendChild(newNode);
```

  </div>
  </div>
</details>

---

### How do you place a DOM node into an HTML document using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can insert a DOM node into an HTML document by selecting the parent node using document.querySelector(selector) and then using parentNode.appendChild(newNode).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<ul id="menu">
</ul>

<script>
function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('#menu');
// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));
</script>
```

  </div>
  </div>
</details>

---

### How do you insert HTML into a document using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you want to insert HTML into a document, we use the insertAdjacentHTML(where, HTML). We use two parameters to specify where and the second parameter of what or the HTML (it must be a string type, you need to add quotes) that we want to insert.<br /><br />
  <strong>Additional Information:</strong> We can also use insertAdjacentText and insertAdjacentElement in a similar fashion. <br /><br />
  <ol>
    <li>The insertAdjacentText(where, text) has the same syntax, but a string of text is inserted “as text” instead of HTML.</li>
    <li>The insertAdjacentElement(where, element) has the same syntax but inserts an element.</li>
    <li>They exist primarily to make syntax "consistent." In practice, insertAdjacentHTML is the sole method utilized most of the time. Because we have methods append/prepend/before/after for elements and text - they are easy to create and may incorporate nodes/text fragments.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>

<!-- OUTPUT RESULT -->
<p>Hello</p>
<div id="div"></div>
<p>Bye</p>
```

  </div>
  </div>
</details>

---

### Is it possible to remove a DOM node using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, to remove a node, there’s a method node.remove(). Please note: if we want to move an element to another place – there is no need to remove it from the old one.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  .alert {
    padding: 15px;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    color: #3c763d;
    background-color: #dff0d8;
  }
</style>

<script>
  let div = document.createElement('div');
  div.className = 'alert';
  div.innerHTML =
    "<strong>Hi there!</strong> You've read an important message.";

  document.body.append(div);
  setTimeout(() => div.remove(), 1000);
</script>
```

  </div>
  </div>
</details>

---

### Can you swap elements using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there is a simple approach to doing this in JavaScript. For example, if we want to swap adjacent elements, we can use the after method by specifying what we want to go after a specific element node.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="first">First</div>
<div id="second">Second</div>
<script>
  const first = document.getElementById('first');
  const second = document.getElementById('second');
  // no need to call remove
  second.after(first); // take #second and after it insert #first
</script>

<!-- Output: -->
<!-- Second -->
<!-- First -->
```

  </div>
  </div>
</details>

---

### Can you clone an element node in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can clone an element in JavaScript using the cloneNode() method. You can use element.cloneNode(true) to include all child nodes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  .alert {
    padding: 15px;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    color: #3c763d;
    background-color: #dff0d8;
  }
</style>

<div class="alert" id="div">
  <strong>Hi there!</strong> You've read an important message.
</div>

<script>
  let div2 = div.cloneNode(true); // clone the message
  div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone

  div.after(div2); // show the clone after the existing div
</script>
```

---

:::note
Once you have cloned the node, you use the appendChild() or insertBefore() method to insert the cloned node into the document. If you want a deep clone, you set the deep parameter value to true if you want to clone all descendants (children); otherwise, false.
:::

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the DocumentFragment Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A DocumentFragment is a minimal document object that stores nodes. It helps improve performance by limiting reflows and repaints when manipulating multiple nodes simultaneously.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<ul id="ul"></ul>

<script>
  function getListContent() {
    let fragment = new DocumentFragment();

    for (let i = 1; i <= 3; i++) {
      let li = document.createElement('li');
      li.append(i);
      fragment.append(li);
    }

    return fragment;
  }

  ul.append(getListContent()); // (*)
</script>

<!-- Output:
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul> -->
```

---

:::note
We rarely use DocumentFragment explicitly. Why append to a special kind of node if we can return an array of nodes instead?
:::

  </div>
  </div>
</details>

---

### At some point in your career, you run across older methods of inserting and removing elements. Can you explain what these methods are and why you should know them?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Older methods include appendChild(), removeChild(), insertBefore(). Despite being less intuitive than modern methods, they're important to know for understanding, maintaining, and refactoring legacy code.</div><br />
  <div><strong>Technical Response:</strong> Several methods were used before the more modern methods for inserting and removing nodes. They include appendChild, insertBefore, replaceChild, and removeChild. Although they aren’t used in modern code, we should be aware of their function, use, and syntax, because we may run across them in older applications.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<ol id="list">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol>

<script>
  let newLi = document.createElement('li');
  newLi.innerHTML = 'Hello, world!';

  list.appendChild(newLi);
</script>

<!-- 

Output:

1. 0

2. 1

3. 2

4. Hello, world! 

-->
```

---

:::note
These methods come from ancient times. Nowadays, there is no reason to use them, as modern methods, such as append, prepend, before, after, remove, replaceWith, are more flexible. This information helps to understand old scripts, but now we do not need it for new development.
:::

  </div>
  </div>
</details>

---

### Can you explain the function of the document.write() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> document.write() is a JavaScript method used to output string content into the HTML document, typically during page load. It's not recommended for updating content post-rendering due to potentially destructive behavior.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> document.write(markup);<br /><br />

  <div></div>

```html
<p>After one second the contents of this page will be replaced...</p>
<script>
  // document.write after 1 second
  // that's after the page loaded, so it erases the existing content
  setTimeout(() => document.write('<b>...By this.</b>'), 1000);
</script>
```

---

:::note
Because document.write() writes to the document stream, calling document.write() on a closed (loaded) document automatically calls document.open(), which will clear (overwrite) the document. The method comes from times when there was no DOM, no standards… Old times. It still lives because scripts are using it. In modern scripts, we can rarely see it because If we call it afterward, the existing document content gets erased. There are some use cases for this, but very few.
:::

  </div>
  </div>
</details>

---
