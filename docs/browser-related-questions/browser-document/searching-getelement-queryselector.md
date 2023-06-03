---
title: Searching the DOM
description: Searching the DOM is the process of finding an element in the DOM tree. - JavaScript interview questions & answers
sidebar_position: 4
sidebar_label: Searching the DOM
keywords:
  - searching the dom
  - dom manipulation
  - dom traversal
  - traversing the dom
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function 
  - interview questions
  - interview answers
  - js
tags:
  - searching the dom
  - dom manipulation
  - dom traversal
  - traversing the dom
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/SearchingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Searching the DOM| JavaScript Frontend Phone Interview</title>
</head>

**Browser Document: Searching the DOM**

<CloseAllAnswers />

---

### What does searching the DOM mean?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Searching the DOM means finding specific elements or nodes within the document's tree structure using various methods or selectors.
  </div><br />
  </div>
</details>

---

### What is the purpose of getElementById() in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getElementById() method is used to access a single element in the DOM with a specified ID attribute, returning the first matching element or null if not found.
  </div><br />
  </div>
</details>

---

### How do we gain access to an element by its id attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To access an element by its ID attribute, use the getElementById(id) method on the document object, passing the ID as a string argument: `document.getElementById('elementId')`.
</div><br />
  <div><strong>Technical Response:</strong> If an element has the id attribute, we can access the element using the method document.getElementById(id), no matter where it is inside of our code. We can also act directly on the element id name (not a recommended approach). If the id is an existing variable, its value reference takes precedence.
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

### What is the main rule for naming an element id attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main rule for naming an element's ID attribute is that it must be unique within the document, ensuring each ID refers to only one specific element.
</div><br/>
  <div><strong>Technical Response:</strong> The id has to be unique. In the document, there can only be one element with the supplied id. When there are several elements with the same id, the behavior of methods that use it, such as documents, is unpredictable. getElementById may return an element at random from this list. Please abide by the rules and keep your id unique. In addition, you should avoid
</div>
  </div>
</details>

---

### Can you call getElementById on any object/element we choose?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, getElementById can only be called on the document object. It cannot be called on any arbitrary object or element within the DOM.
</div><br/>
  <div><strong>Technical Response:</strong> No, the method getElementById can be called only on document objects. It looks for the given id in the whole document. We should use document.getElementById, and avoid using element.getElementById because it is not the proper use of the method.
</div>
  </div>
</details>

---

### Can you explain the function of the querySelectorAll() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The querySelectorAll() method returns a static NodeList of all elements matching a specified CSS selector, allowing you to search for and access multiple elements in the DOM.
</div><br />
  <div><strong>Technical Response:</strong> By far, the most versatile method document.querySelectorAll(css) returns all elements inside of a element matching the given CSS selector. This method is powerful because we can target any CSS selector. We can target groups of CSS selectors easily with querySelectorAll method.
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

### Can you use pseudo-classes with querySelectorAll()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, pseudo-classes can be used with querySelectorAll(), but only for static states like :checked or :first-child. Dynamic states like :hover and :active are not supported.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

We use the `:checked` pseudo-class with `querySelectorAll()`:

```javascript
let checkedInputs = document.querySelectorAll('input:checked');

checkedInputs.forEach(input => {
    console.log(input.value);
});
```

This script selects all checked `input` elements and logs their values.

  </div>
  </div>
</details>

---

### Can you explain the function of the querySelector() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The querySelector method finds the first element in the DOM matching a specified CSS selector, returning the matching element or null if not found.
</div><br/>
  <div><strong>Technical Response:</strong> The Document method querySelector() returns the first element within the document that matches the specified selector or group of selectors. If no matches appear, we receive a null value.<br />
  <strong>Syntax: </strong> elementList = parentNode.querySelector(selectors);<br /><br />
</div>
  </div>
</details>

---

### How does querySelectorAll() differ from querySelector()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The querySelectorAll method returns a NodeList of all matching elements based on a specified CSS selector, while querySelector returns the first matching element only.
  </div><br />
  </div>
</details>

---

### How does the matches() method work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The element.matches method checks if an element matches a specified CSS selector, returning true if it matches and false if it doesn't.
</div><br />
  <div><strong>Interview Response:</strong> The elem.matches(css) function does not search for anything; it determines if the element matches the provided CSS-selector. It either returns true or false. This method comes in handy when iterating through items (such as in an array) and seeking to filter results.
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

### Can you explain the function of the Element.closest() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The element.closest() method returns the nearest ancestor of an element that matches a specified CSS selector, or null if no matching ancestor is found.
</div><br />
  <div><strong>Technical Response:</strong> An element's ancestors include its parent, the parent of the parent, the parent of the parent, and down the ancestral tree. From the element to the top, the ancestors create a chain of parents. The method elem.closest(css) searches for the closest ancestor to the CSS-selector. The search also includes the element itself. In other words, the nearest method ascends from the element and checks each of the parents. If it matches the selector, the search is terminated, returning the ancestor.
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

### How does the getElementsByTagName() method function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getElementsByTagName() method returns a live HTMLCollection of elements with the specified tag name, allowing you to access multiple elements of the same type in the DOM.
</div><br />
  <div><strong>Technical Response:</strong> The elem.getElementsByTagName(tag) looks for elements with the given tag and returns the collection of them. The tag parameter can also be a star "*" for “any tags”. In modern code, we use querySelector because it is more powerful and shorter to write, but you may find it in older applications. Similarly, getElementsByClassName and getElementsByName are a few more of the relics you may find. It’s good to be familiar with these methods.
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

### Does getElementsByTagName() return an element or a collection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The getElementsByTagName(tag) method returns a live HTMLCollection, which is a collection of elements with the specified tag name, not a single element.
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
Novice coders mistake the getElementsByTagName return for an element, which is incorrect. That fails because it takes a collection of inputs and assigns the value rather than the elements inside it. We should either loop over the collection or retrieve an element by index and assign it.
:::

  </div>
  </div>
</details>

---

### What is the difference between a live and static collection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A live collection automatically updates when the DOM changes, reflecting the current state, while a static collection remains unchanged even if the DOM is modified after creation.
</div><br />
  <div><strong>Technical Response:</strong> All methods "getElementsBy*" return a live collection. Such collections always reflect the document's current state and “auto-update” when it changes. In contrast, querySelectorAll returns a static collection. It’s like a fixed array of elements.
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

### What is the difference between a NodeList and an HTMLCollection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A NodeList is a static or live collection of nodes, while an HTMLCollection is a live collection of elements. The main difference is in their updating behavior.
  </div><br />
  </div>
</details>

---

### What are the advantages of using querySelector() over getElementById()?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The querySelector() method provides more flexibility, allowing selection based on any CSS selector, while getElementById() is limited to selecting elements by their ID attribute.
  </div><br />
  </div>
</details>

---

### Can you use querySelector() to search within a specific element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, querySelector can be used on a specific element to search its descendants, limiting the search scope to that element's subtree in the DOM.
  </div><br />
  </div>
</details>

---

### How can you search the DOM for an element with a specific attribute value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the querySelector() or querySelectorAll() methods with an attribute selector (e.g., "[data-custom-attribute='value']") to search for elements with a specific attribute value.
  </div><br />
  </div>
</details>

---

### Can you chain multiple querySelector() calls together?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can chain querySelector() calls. The subsequent querySelector() is applied on the element found by the first. It only searches within that element's descendants, not the entire document.
  </div><br />
  <div><strong className="codeExample">Sure, here's an example:</strong><br /><br />

  <div></div>

```javascript
let childElement = document.querySelector('.parent-class').querySelector('.child-class');
```

In this example, the script first selects the element with the class `parent-class`. Then, within that element, it selects the element with the class `child-class`.

  </div>
  </div>
</details>

---

### What is the difference between querySelector and getElementById in terms of performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> getElementById is generally faster than querySelector since it's optimized for ID-based searches, while querySelector performs more general CSS selector searches.
  </div><br />
  </div>
</details>

---

### Can you combine multiple selectors in a single querySelector call?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can combine multiple selectors in a single `querySelector()` call. The method accepts any valid CSS selector, including compound selectors.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Example using querySelector
let firstLiInUl = document.querySelector('ul li:first-child');
// selects the first li element that is a child of a ul element.

///////////////////////////////

// Example using querySelectorAlL
let elems = document.querySelectorAll('.sandwich, #contact label');
// Get's any element with the .sandwich class, and all labels inside the #contact element
```

  </div>
  </div>
</details>

---

### How can you find all elements of a specific tag within a specific element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use querySelectorAll() on a specific element, passing in the tag name as the selector. For example, element.querySelectorAll('tag') to find all 'tag' elements within 'element'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let divElement = document.querySelector('div');
let pElementsInDiv = divElement.querySelectorAll('p');

pElementsInDiv.forEach(p => {
    console.log(p.textContent);
});
```

In this example, the script first selects a `div` element. Then, within that `div`, it selects all `p` elements and logs their text content.

  </div>
  </div>
</details>

---
