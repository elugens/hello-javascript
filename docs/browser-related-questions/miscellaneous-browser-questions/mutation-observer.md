---
title: Mutation Observer
sidebar_position: 1
---

# Mutation Observer

**Miscellaneous: Mutation Observer**

<head>
  <title>Mutation Observer - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a Mutation Observer? How does it interact with a DOM tree?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification.
    </div><br/>
    <strong>Syntax: </strong> let observer = new MutationObserver(callback);<br /><br />
  </div>
</details>

---

### What is a Mutation Record and how does it interact with a Mutation Observer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A MutationRecord represents an individual DOM mutation. It is the object that is passed to MutationObserver's callback.
    </div>
  </div>
</details>

---

### Can you give a use case for a MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A good use case is when you need to add a third-party script that contains useful functionality, but also does something unwanted, like injecting unwanted HTML elements. Naturally, the third-party script provides no mechanisms to remove it. Using MutationObserver, we can detect when the unwanted element appears in our DOM and remove it.
    </div>
  </div>
</details>

---

### Is there a way to stop observing or disconnecting the MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can stop or disconnect the observer by calling the disconnect() method. It tells the observer to stop watching for mutations. The observer can be reused by calling its observe() method again.
    </div><br />
    <strong>Syntax: </strong> mutationObserver.disconnect();<br /><br />
  </div>
</details>

---

### Is there a way to ensure processing of changes when there is a disconnect?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we stop the observing, it might be possible that some changes were not yet processed by the observer. In such cases, we use observer.takeRecords() – gets a list of unprocessed mutation records – those that happened, but the callback has not handled them.
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
  <div><strong>Interview Response:</strong> Observers use weak references to nodes internally. That is, if a node is removed from the DOM, and becomes unreachable, then it can be garbage collected. The mere fact that a DOM node is observed does not prevent the garbage collection.
    </div>
  </div>
</details>

---
