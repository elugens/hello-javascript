---
title: Mutation Observer
description: Mutation Observer in JavaScript is a JavaScript API that allows you to observe changes in the DOM. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Mutation Observer
---

**Miscellaneous: Mutation Observer**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a Mutation Observer? How does it interact with a DOM tree?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change. It was designed to replace the older Mutation Events feature, part of the DOM3 Events specification.
    </div><br/>
    <strong>Syntax: </strong> let observer = new MutationObserver(callback);<br /><br />
  </div>
</details>

---

### What is a Mutation Record, and how does it interact with a Mutation Observer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A MutationRecord represents an individual DOM mutation, and it is the object that gets passed to MutationObserver's callback.
    </div>
  </div>
</details>

---

### Can you give a use case for a MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A good use case is when you need to add a third-party script that contains proper functionality and does something unwanted, like injecting unwanted HTML elements. Naturally, the third-party script provides no mechanisms to remove it. Using MutationObserver, we can detect when the unwanted element appears in our DOM and remove it.
    </div>
  </div>
</details>

---

### Is there a way to stop observing or disconnecting the MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can stop or disconnect the observer by calling the `disconnect()` method. It tells the observer to stop watching for mutations. The observer can get reused by calling its `observe()` method again.
    </div><br />
    <strong>Syntax: </strong> mutationObserver.disconnect();<br /><br />
  </div>
</details>

---

### Is there a way to ensure the processing of changes when there is a disconnect?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we cease observing, it's conceivable that the observer hasn't yet processed some changes. In such instances, we employ the observer. `observer.takeRecords()` returns a list of unprocessed mutation records that occurred but remained handled by the callback.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// get a list of unprocessed mutations
// should be called before disconnecting,
// if you care about possibly unhandled recent mutations
let mutationRecords = observer.takeRecords();

// stop tracking changes
observer.disconnect();
```

  </div>
  </div>
</details>

---

### How does garbage collection work with Observers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Internally, observers employ weak references to nodes. A node can be trash collected if it is deleted from the DOM and becomes inaccessible, and the observation of a DOM node does not stop garbage collection.
    </div>
  </div>
</details>

---
