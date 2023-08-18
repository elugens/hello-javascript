---
title: Selection and Range
description: Selection and Range in JavaScript is a JavaScript API that allows you to select text in a document. - JavaScript Interview Questions & Answers
sidebar_position: 2
sidebar_label: Selection and Range
keywords:
  - selection and range
  - range object
  - selection object
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
  - selection and range
  - range object
  - selection object
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/SelectionSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Selection and Range | JavaScript Frontend Phone Interview</title>
</head>

**Miscellaneous: Selection and Range**

---

<AdSense />

---

<CloseAllAnswers />

### Can you describe the fundamentals of selection in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Selection is an interface that represents user-selected text or the current input cursor position. It's obtained using Window.getSelection() and manipulated using methods like addRange() or removeAllRanges().
    </div><br/>
  <div><strong>Technical Details:</strong> JavaScript may access a current selection, select and deselect DOM nodes whole or partially, delete the selected content from the document, and encapsulate it in a tag. Range is the primary selection idea, and it is just a pair of "border points": range start and range end.
    </div>
  </div>
</details>

---

### Can you please explain the function of the Range Object/interface?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Range interface represents a document fragment that can contain nodes and parts of text nodes. It enables manipulation of document content, supporting complex content operations.
    </div><br />
  <div><strong>Technical Response:</strong> The Range interface represents a document fragment that can contain nodes and parts of text nodes. The `Range()` constructor returns a newly created Range object whose start and the end are the global Document object. A Range object gets created without parameters in its initial state. Then we can set the selection boundaries using `range.setStart(node, offset)` and `range.setEnd(node, offset)`. Surprisingly, the first parameter node in both systems can be either a text node or an element node, and the meaning of the second argument is dependent on this.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let range = new Range();<br /><br />

  <div></div>

```html
<p id="p">Hello</p>
<script>
  let range = new Range();
  range.setStart(p.firstChild, 2);
  range.setEnd(p.firstChild, 4);

  // toString of a range returns its content as text
  console.log(range); // ll
</script>
```

  </div>
  </div>
</details>

---

### Can you explain the function of the Window.getSelection() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Window.getSelection() returns a Selection object representing the text currently selected or the caret's position in the document. It's useful for text manipulation tasks.
    </div><br />
  <div><strong>Technical Response:</strong> The `window.getSelection()` method returns a Selection object representing the range of text selected by the user or the caret's current position. The document selection is represented as a Selection object, which may be accessed by `window.getSelection()` or `document.getSelection()`. A selection may contain 0 or more ranges.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let range = new Range()let selection = window.getSelection();<br /><br />

  <div></div>

```html
<p id="p">Select me: <i>italic</i> and <b>bold</b></p>

From <input id="from" disabled /> – To <input id="to" disabled />
<script>
  document.onselectionchange = function () {
    let selection = document.getSelection();

    let { anchorNode, anchorOffset, focusNode, focusOffset } = selection;

    // anchorNode and focusNode are text nodes usually
    from.value = `${anchorNode?.data}, offset ${anchorOffset}`;
    to.value = `${focusNode?.data}, offset ${focusOffset}`;
  };
</script>
```

  </div>
  </div>
</details>

---

### Can you modify the Range constructor in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the Range constructor in JavaScript provides methods and properties to manipulate and modify the range selection within the document. You can modify the Range constructor by using its various methods and properties, such as setStart, setEnd, deleteContents, insertNode, and more.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a Range object
let range = document.createRange();

// Set the range's start and end points
let startNode = document.getElementById('start');
let endNode = document.getElementById('end');
range.setStart(startNode, 1); // Set the start to the second child of 'startNode'
range.setEnd(endNode, 3); // Set the end to the fourth child of 'endNode'

// Delete the contents of the range
range.deleteContents();

// Insert a new text node within the range
let newNode = document.createTextNode('Inserted text');
range.insertNode(newNode);
```

  </div>
  </div>
</details>

---

### How do you create a Range in Javascript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a Range, one can utilize the Document.createRange() method. This particular method allows for the creation of a new Range object, which can then be used to represent a fragment of a document that can be manipulated independently from the rest of the document.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const range = document.createRange();
```

  </div>
  </div>
</details>

---

### What is the use of cloneRange() method in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method cloneRange() serves the purpose of generating a replica of a specific range. This function may prove to be quite useful in various programming scenarios where duplication of a range is required.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Get a reference to the range you want to clone
var originalRange = document.createRange();
originalRange.selectNode(document.getElementById('myElement'));

// Clone the range
var clonedRange = originalRange.cloneRange();

// Do something with the cloned range
console.log(clonedRange.startContainer);
console.log(clonedRange.endContainer);
console.log(clonedRange.startOffset);
console.log(clonedRange.endOffset);
```

  </div>
  </div>
</details>

---

### What does the collapse() method in JavaScript do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The collapse() method is a useful tool for shortening a Range to either its starting point or its ending point.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a range object
var range = document.createRange();

// Set the range's start and end points
var startNode = document.getElementById('start');
var endNode = document.getElementById('end');
range.setStart(startNode, 1);
range.setEnd(endNode, 2);

// Collapse the range to the end point
range.collapse(false);

// Check the collapsed state and position
console.log(range.collapsed); // Output: true
console.log(range.startContainer); // Output: [object HTMLElement]
console.log(range.startOffset); // Output: 2
console.log(range.endContainer); // Output: [object HTMLElement]
console.log(range.endOffset); // Output: 2
```

  </div>
  </div>
</details>

---

### Can you modify a Selection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modifying a Selection is possible through a range of methods, including but not limited to addRange() and removeAllRanges(). These methods offer users the ability to adjust and tailor their Selection to their specific needs, providing a versatile and customizable experience.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Get the current selection
var selection = window.getSelection();

// Check if there is any text selected
if (selection.rangeCount > 0) {
  // Get the first range of the selection
  var range = selection.getRangeAt(0);

  // Modify the selected text
  var modifiedText = range.toString().toUpperCase();

  // Replace the selected text with the modified text
  range.deleteContents();
  range.insertNode(document.createTextNode(modifiedText));

  // Collapse the selection to the end of the modified text
  range.collapse(false);

  // Clear the existing selection
  selection.removeAllRanges();

  // Add the modified range back to the selection
  selection.addRange(range);
}
```

  </div>
  </div>
</details>

---

### How do you get the current Selection in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To obtain the current Selection, the method Window.getSelection() is utilized. This method serves as a means of retrieving the user's current selection, which can be useful in a variety of scenarios. With this method, you can retrieve and manipulate the selected text as needed, allowing for greater control and flexibility in your application.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Get the current selection
var selection = window.getSelection();

// Check if there is any text selected
if (selection.rangeCount > 0) {
  // Get the first range of the selection
  var range = selection.getRangeAt(0);

  // Do something with the range...
} else {
  // No text selected
}
```

  </div>
  </div>
</details>

---

### What does the removeAllRanges() method in JavaScript do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `removeAllRanges()` method in JavaScript clears the selection of text ranges made using the `getSelection()` method, effectively deselecting any highlighted or selected text on a webpage.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Get the current selection
var selection = window.getSelection();

// Clear the current selection
selection.removeAllRanges();
```

  </div>
  </div>
</details>

---

### What does the isCollapsed property in JavaScript indicate?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `isCollapsed` property in JavaScript indicates whether a selection or range object is collapsed, meaning that the start and end points of the selection or range are at the same position.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you can use the isCollapsed property with a Range object.

```js
// Create a range object
var range = document.createRange();

// Set the range's start and end points
range.setStart(document.body, 0);
range.setEnd(document.body, 1);

// Check if the range is collapsed
if (range.isCollapsed) {
  console.log("The range is collapsed.");
} else {
  console.log("The range is not collapsed.");
}
```

In this example, we create a Range object and set its start and end points. We then check the isCollapsed property of the range to determine if it is collapsed or not.

By using the **isCollapsed** property, you can conditionally handle scenarios where no text is selected or when a range is collapsed in your JavaScript code.

  </div>
  </div>
</details>

---

### What is the commonAncestorContainer property in a Range?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `commonAncestorContainer` read-only property in a Range object represents the deepest node that contains both the start and end points of the range, serving as their common ancestor within the document tree.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a range object
var range = document.createRange();

// Set the range's start and end points
var startNode = document.getElementById('start');
var endNode = document.getElementById('end');
range.setStart(startNode, 0);
range.setEnd(endNode, 1);

// Get the common ancestor container
var commonAncestor = range.commonAncestorContainer;

// Output the common ancestor container
console.log(commonAncestor);
```

  </div>
  </div>
</details>

---

### What does the surroundContents() method do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `surroundContents()` method in JavaScript wraps the contents of a Range object with a new element, effectively inserting the new element around the selected content in the document structure.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a range object
var range = document.createRange();

// Set the range's start and end points
var startNode = document.getElementById('start');
var endNode = document.getElementById('end');
range.setStart(startNode, 0);
range.setEnd(endNode, 1);

// Create a <span> element
var spanElement = document.createElement('span');
spanElement.style.backgroundColor = 'yellow';

// Surround the contents of the range with the <span> element
range.surroundContents(spanElement);
```

  </div>
  </div>
</details>

---

### How do you detach a Range in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To detach a Range in JavaScript, you can use the `detach()` method. It removes the Range object from the document, allowing it to be independent of any document structure or selection.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a range object
var range = document.createRange();

// Detach the range from the document
range.detach();
```

  </div>
  </div>
</details>

---

### What does the compareBoundaryPoints() method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `compareBoundaryPoints()` method in JavaScript compares the boundary points of two Range objects, determining their relative position in the document. It returns a value indicating whether one range is before, after, or overlapping the other.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create two range objects
var range1 = document.createRange();
range1.selectNode(document.getElementById('element1'));

var range2 = document.createRange();
range2.selectNode(document.getElementById('element2'));

// Compare the start points of the two ranges
var comparisonResult = range1.compareBoundaryPoints(Range.START_TO_START, range2);

// Output the result
if (comparisonResult === -1) {
  console.log("range1 starts before range2");
} else if (comparisonResult === 0) {
  console.log("range1 starts at the same point as range2");
} else if (comparisonResult === 1) {
  console.log("range1 starts after range2");
}
```

  </div>
  </div>
</details>

---

### What is the purpose of the insertNode() method in a Range?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `insertNode()` method in a Range object is used to insert a node into the document at the start position of the range, effectively adding new content or elements at the specified location within the document structure.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a range object
var range = document.createRange();

// Set the range's start and end points
var startNode = document.getElementById('start');
var endNode = document.getElementById('end');
range.setStart(startNode, 0);
range.setEnd(endNode, 1);

// Create a new element to insert
var newElement = document.createElement('span');
newElement.textContent = 'New Content';

// Insert the new element into the range
range.insertNode(newElement);
```

  </div>
  </div>
</details>

---

### What is the anchorNode property in a Selection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `anchorNode` property in a Selection object refers to the node where the selection starts or the cursor is anchored, representing the starting point of the selected text or range within the document structure.
  </div>
  </div>
</details>

---

### How do you set the Selection to a specific JavaScript Range?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To set the Selection to a specific JavaScript Range, you can use the `addRange()` method of the Selection object, passing the desired Range as an argument to establish the new selection range.
  </div>
  </div>
</details>

---

### What does the containsNode() method in Selection do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `containsNode()` method in Selection checks whether a specified node is fully or partially contained within the selection, returning a Boolean value indicating whether the node is within the selected range.
  </div>
  </div>
</details>

---
