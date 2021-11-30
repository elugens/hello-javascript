---
title: Selection and Range
sidebar_position: 2
---

# Selection and Range

**Miscellaneous: Selection and Range**

<head>
  <title>Selection and Range - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the basic concept of selection using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript can access an existing selection, select/deselect DOM nodes as a whole or partially, remove the selected content from the document, wrap it into a tag, and so on. The basic concept of selection is Range, that is essentially a pair of “boundary points”: range start and range end.
    </div>
  </div>
</details>

---

### Please explain the function and syntax of the Range Object/interface.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Range interface represents a fragment of a document that can contain nodes and parts of text nodes. The Range() constructor returns a newly created Range object whose start and end is the global Document object. A Range object is created without parameters in its initial state. Then we can set the selection boundaries using range.setStart(node, offset) and range.setEnd(node, offset). The interesting thing is that the first argument node in both methods can be either a text node or an element node, and the meaning of the second argument depends on that.
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

### Explain the function and syntax of the Window.getSelection() method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Window.getSelection() method returns a Selection object representing the range of text selected by the user or the current position of the caret. The document selection is represented by Selection object, that can be obtained as window.getSelection() or document.getSelection(). A selection may include zero or more ranges.
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
