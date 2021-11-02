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

### What is a Mutation Observer? How does it interact with a DOM tree?

**Interview Answer:** MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change. It is designed as a replacement for the older Mutation Events feature, which was part of the DOM3 Events specification.

**Syntax:** let observer = new MutationObserver(callback)

Source: <https://javascript.info/mutation-observer>

### What is a Mutation Record and how does it interact with a Mutation Observer?

**Interview Answer:** A MutationRecord represents an individual DOM mutation. It is the object that is passed to MutationObserver's callback.

Source: <https://javascript.info/mutation-observer>

### Can you give a use case for a MutationObserver?

**Interview Answer:** A good use case is when you need to add a third-party script that contains useful functionality, but also does something unwanted, like injecting unwanted HTML elements. Naturally, the third-party script provides no mechanisms to remove it. Using MutationObserver, we can detect when the unwanted element appears in our DOM and remove it.

Source: <https://javascript.info/mutation-observer#usage-for-integration>

### Is there a way to stop observing or disconnecting the MutationObserver?

**Interview Answer:** Yes, you can stop or disconnect the observer by calling the disconnect() method. It tells the observer to stop watching for mutations. The observer can be reused by calling its observe() method again.

**Syntax:** mutationObserver.disconnect()

Source: <https://javascript.info/mutation-observer#additional-methods>

### Is there a way to ensure processing of changes when there is a disconnect?

**Interview Answer:** When we stop the observing, it might be possible that some changes were not yet processed by the observer. In such cases, we use observer.takeRecords() – gets a list of unprocessed mutation records – those that happened, but the callback has not handled them.

Code Example:

```js
// get a list of unprocessed mutations

// should be called before disconnecting,

// if you care about possibly unhandled recent mutations

let mutationRecords = observer.takeRecords();

// stop tracking changes

observer.disconnect();
```

Source: <https://javascript.info/mutation-observer#additional-methods>

### How does garbage collection work with Observers?

**Interview Answer:** Observers use weak references to nodes internally. That is, if a node is removed from the DOM, and becomes unreachable, then it can be garbage collected. The mere fact that a DOM node is observed does not prevent the garbage collection.

Source: <https://javascript.info/mutation-observer#additional-methods>
