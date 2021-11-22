---
title: Searching the DOM
sidebar_position: 3
---

# Searching the DOM

**Browser Document: Searching the DOM**

<head>
  <title>Searching the DOM - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How do we gain access to an element by its id attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an element has the id attribute, we can get the element using the method document.getElementById(id), no matter where it is inside of our code. We can also act directly on the element id name (not a recommended approach). It should be noted if the id is an existing variable then its value reference takes precedence.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Get Element by getElementById -->
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // get the element
  let elem = document.getElementById('elem');

  // make its background red
  elem.style.background = 'red';
</script>

<!-- Get it by just ID -->
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // elem is a reference to DOM-element with id="elem"
  elem.style.background = 'red';

  // id="elem-content" has a hyphen inside, so it can't be a variable name
  // ...but we can access it using square brackets: window['elem-content']
</script>
```

  </div>
  </div>
</details>

---

### What is the main rule when it comes to naming an element id attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The id must be unique. There can be only one element in the document with the given id. If there are multiple elements with the same id, then the behavior of methods that use it is unpredictable, e.g. document.getElementById may return any of such elements at random. So please stick to the rule and keep id unique.
</div>
  </div>
</details>

---

### Can you call getElementById on any object/element we choose?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the method getElementById can be called only on document objects. It looks for the given id in the whole document. We should use document.getElementById and avoid using element.getElementById because it is not the proper use of the method.
</div>
  </div>
</details>

---

### Explain the function and syntax of querySelectorAll method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By far, the most versatile method, document.querySelectorAll(css) returns all elements inside of a element matching the given CSS selector. This method is indeed powerful because any CSS selector can be used as a target. We can target groups of CSS selectors easily with querySelectorAll method.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> elementList = parentNode.querySelectorAll(selectors);<br /><br />

  <div></div>

```html
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>
```

  </div>
  </div>
</details>

---

### Can you use pseudo-classes like hover and active in querySelectorAll?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Pseudo-classes in the CSS selector like :hover and :active are also supported. For instance, document.querySelectorAll(':hover') will return the collection with elements that the pointer is over now (in nesting order: from the outermost &#8249;html&#8250; to the most nested one).
</div>
  </div>
</details>

---

### Explain the function and syntax of querySelector method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. <br />
  <strong>Syntax: </strong> elementList = parentNode.querySelector(selectors);<br /><br />
</div>
  </div>
</details>

---

### Explain the function and syntax of element.matches method.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false. The method comes in handy when we are iterating over elements (like in an array or something) and trying to filter out those that interest us.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let result = element.matches(selectorString);<br /><br />

  <div></div>

```html
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert('The archive reference: ' + elem.href);
    }
  }
</script>
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of element.closest method.\*\*

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Ancestors of an element are the parent, the parent of parent, its parent and so on. The ancestors together form the chain of parents from the element to the top. The method elem.closest(css) looks for the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search. In other words, the method closest goes up from the element and checks each of parents. If it matches the selector, then the search stops, and the ancestor is returned.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let closestElement = targetElement.closest(selectors);<br /><br />

  <div></div>

```html
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 1</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of getElementsByTagName method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”. In modern code we use querySelector because it is more powerful and shorter to write, but you may find it in older applications. Similarly, getElementsByClassName and getElementsByName are a few more of the relics you may find. It’s good to be familiar with these methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> elements = element.getElementsByTagName(tagName);<br /><br />

  <div></div>

```html
<table id="table">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked /> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature" /> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior" /> more than 60
      </label>
    </td>
  </tr>
</table>

<script>
  let inputs = table.getElementsByTagName('input');

  for (let input of inputs) {
    alert(input.value + ': ' + input.checked); // alerts young: true
  }
</script>
```

  </div>
  </div>
</details>

---

### Does getElementsByTagName return an element or a collection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The elem.getElementsByTagName(tag) looks for elements with the given tag and returns a collection.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// doesn't work
document.getElementsByTagName('input').value = 5;

// should work (if there's an input)
document.getElementsByTagName('input')[0].value = 5;
```

:::note
Novice developers have tendency to treat the getElementsByTagName return as an element, but this is a mistake. That will not work, because it takes a collection of inputs and assigns the value to it rather than to elements inside it. We should either iterate over the collection or get an element by its index, and then assign it.
:::

  </div>
  </div>
</details>

---

### What is the difference between a live and static collection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> All methods getElementsBy* return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes. In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- LIVE COLLECTION -->
<div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script>

<!-- STATIC COLLECTION -->
<div>First div</div>

<script>
  let divs = document.querySelectorAll('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 1
</script>
```

  </div>
  </div>
</details>

---
