---
title: Modifying the Document
sidebar_position: 7
---

# Modifying the document

**Document: Modifying the document**

**Question:** **How do you create new DOM nodes in JavaScript?**

**Interview Answer:** To create DOM nodes, there are two methods including the createElement and createTextNode methods. The document.createElement(tag) creates a new element node. The document.createTextNode(‘text’) creates a new text node with the give ‘text’. Most of the time we need to create element nodes, such as a div.

Example:

```js
// 1. Create <div> element

let div = document.createElement('div');

// 2. Set its class to "alert"

div.className = 'alert';

// 3. Fill it with the content

div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
```

Sources: <https://javascript.info/modifying-document#creating-an-element>

**Question:** **How do you place a DOM node into a HTML document using JavaScript?**

**Interview Answer:** There is a special append method used to insert a new DOM node into an HTML document. Additional methods such as the prepend, before, after, and replaceWith that can be used to place the new DOM node into a specific place in the document.

Example:

```html
<ol id="ol">
  <li>0</li>

  <li>1</li>

  <li>2</li>
</ol>

<script>
  ol.before('before'); // insert string "before" before <ol>
  ol.after('after'); // insert string "after" after <ol>
  let liFirst = document.createElement('li');

  liFirst.innerHTML = 'prepend';

  ol.prepend(liFirst); // insert liFirst at the beginning of <ol>
  let liLast = document.createElement('li');

  liLast.innerHTML = 'append';

  ol.append(liLast); // insert liLast at the end of <ol>
</script>

<!-- FINAL OUTPUT -->

// before

<ol id="ol">
  <li>prepend</li>

  <li>0</li>

  <li>1</li>

  <li>2</li>

  <li>append</li>
</ol>

// after
```

Sources: <https://javascript.info/modifying-document#insertion-methods>

**Question:** **How do you insert HTML into a document using JavaScript?**

**Interview Answer:** If you want to insert HTML into a document we use the insertAdjacentHTML(where, html). It has two parameters that we use to specify where and the second parameter of what or the HTML (it must be a string type, just add quotes) to be inserted.

We can also use insertAdjacentText and insertAdjacentElement in a similar fashion.

**Additional Information:**

The insertAdjacentText(where, text) has the same syntax, but a string of text is inserted “as text” instead of HTML.

The insertAdjacentElement(where, element) has the same syntax, but inserts an element.

They exist mainly to make the syntax “uniform”. In practice, only insertAdjacentHTML is used most of the time. Because for elements and text, we have methods append/prepend/before/after – they are shorter to write and can insert nodes/text pieces.

Example:

```html
<div id="div"></div>

<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');

  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>

<!-- OUTPUT RESULT -->

<p>Hello</p>

<div id="div"></div>

<p>Bye</p>
```

Sources: <https://javascript.info/modifying-document#insertadjacenthtml-text-element>

**Question:** **Is there a way to remove a DOM node in JavaScript?**

**Interview Answer:** Yes, to remove a node, there’s a method node.remove(). Please note: if we want to move an element to another place – there is no need to remove it from the old one.

Example:

```html
<style>
  .alert  {
    padding: 15px;

    border: 1px solid #d6e9c6;

    border-radius: 4px;

    color: #3c763d;

    background-color: #dff0d8;
  }
</style>

<script>
  let div = document.createElement('div');

  div.className = 'alert';

  div.innerHTML =
    "<strong>Hi there!</strong> You've read an important message.";

  document.body.append(div);

  setTimeout(() => div.remove(), 1000);
</script>
```

Sources: <https://javascript.info/modifying-document#node-removal>

**Question:** **Can you swap elements using JavaScript?**

**Interview Answer:** Yes, there is a simple approach to doing this in JavaScript. For example, if we want to swap adjacent elements, we can use the after method by specifying what we want to go after a specific element node.

Example:

```html
<div id="first">First</div>

<div id="second">Second</div>

<script>
  // no need to call remove

  second.after(first); // take #second and after it insert #first
</script>
```

Output:

Second

First

Sources: <https://javascript.info/modifying-document#node-removal>

**Question:** **Can you clone an element node in JavaScript?**

**Interview Answer:** Yes, you can clone an element node using the cloneNode method in JavaScript. The cloneNode() method creates a copy of a node, and returns the clone.

**Note:** Once, you have cloned the node you use the appendChild() or insertBefore() method to insert the cloned node to the document. If, you want a deep clone you simply set the deep parameter value to true if you want to clone all descendants (children), otherwise false.

Example:

```html
<style>
  .alert  {
    padding: 15px;

    border: 1px solid #d6e9c6;

    border-radius: 4px;

    color: #3c763d;

    background-color: #dff0d8;
  }
</style>

<div class="alert" id="div">
  <strong>Hi there!</strong> You've read an important message.
</div>

<script>
  let div2 = div.cloneNode(true); // clone the message
  div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone
  div.after(div2); // show the clone after the existing div
</script>
```

Sources: <https://javascript.info/modifying-document#cloning-nodes-clonenode>

**Question:** **Explain the function and syntax of the DocumentFragment Object.**

**Interview Answer:** DocumentFragment is a special DOM node that serves as a wrapper to pass around lists of nodes. We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.

**Note:** DocumentFragment is rarely used explicitly. Why append to a special kind of node, if we can return an array of nodes instead?

Example:

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

  ul.append(getListContent()); // (\*)
</script>

<!-- Output: -->

<ul>
  ` `
  <li>1</li>

  ` `
  <li>2</li>

  ` `
  <li>3</li>
</ul>
```

Sources: <https://javascript.info/modifying-document#document-fragment>

**Question:** **At some point in your career, you will run across older methods of inserting and removing elements. Can you explain what these methods are and why you should know them?**

**Interview Answer:** There are several methods that including appendChild, insertBefore, replaceChild, and removeChild.

**Technical Answer:** There are several methods that were used prior to the more modern methods for inserting and removing nodes. They include appendChild, insertBefore, replaceChild, and removeChild. Although, they aren’t used in modern code we should be aware of their function, use, and syntax, because we may run across them in older applications.

**Note:** These methods come from ancient times. Nowadays, there is no reason to use them, as modern methods, such as append, prepend, before, after, remove, replaceWith, are more flexible. This information helps to understand old scripts, but not needed for new development.

Example:

```html
<ol id="list">
  <li>0</li>

  <li>1</li>

  <li>2</li>
</ol>

<script>
  let newLi = document.createElement('li');

  newLi.innerHTML = 'Hello, world!';

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

Sources: <https://javascript.info/modifying-document#old-school-insert-remove-methods>

**Question:** **Explain the function and syntax of the document.write method.**

**Answer:** The document.write() method writes a string of text to a document stream opened by document.open().

**Note:** Because document.write() writes to the document stream, calling document.write() on a closed (loaded) document automatically calls document.open(), which will clear (overwrite) the document. The method comes from times when there was no DOM, no standards… Old times. It still lives because there are scripts using it. In modern scripts we can rarely see it, because If we call it afterwards, the existing document content is erased. There are some use cases for this, but the are few and far between.

**Syntax:** document.write(markup)

Example:

```html
<p>After one second the contents of this page will be replaced...</p>

<script>
  // document.write after 1 second

  // that's after the page loaded, so it erases the existing content

  setTimeout(() => document.write('<b>...By this.</b>'), 1000);
</script>
```

Sources: <https://javascript.info/modifying-document#old-school-insert-remove-methods>
