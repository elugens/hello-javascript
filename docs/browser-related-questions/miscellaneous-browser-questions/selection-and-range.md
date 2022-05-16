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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/SelectionSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Selection and Range | JavaScript Frontend Phone Interview</title>
</head>

**Miscellaneous: Selection and Range**

<CloseAllAnswers />

---

### Can you describe the fundamentals of selection in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript may access a current selection, select and deselect DOM nodes whole or partially, delete the selected content from the document, and encapsulate it in a tag. Range is the primary selection idea, and it is just a pair of "border points": range start and range end.
    </div>
  </div>
</details>

---

### Can you please explain the function and syntax of the Range Object/interface?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Range interface represents a document fragment that can contain nodes and parts of text nodes. The `Range()` constructor returns a newly created Range object whose start and the end are the global Document object. A Range object gets created without parameters in its initial state. Then we can set the selection boundaries using `range.setStart(node, offset)` and `range.setEnd(node, offset)`. Surprisingly, the first parameter node in both systems can be either a text node or an element node, and the meaning of the second argument is dependent on this.
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

### Explain the function and syntax of the Window.getSelection() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `window.getSelection()` method returns a Selection object representing the range of text selected by the user or the caret's current position. The document selection is represented as a Selection object, which may be accessed by `window.getSelection()` or `document.getSelection()`. A selection may contain 0 or more ranges.
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
