---
title: Mutation Observer
description: Mutation Observer in JavaScript is a JavaScript API that allows you to observe changes in the DOM. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Mutation Observer
keywords:
  - mutation observer
  - javascript mutation observer
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
  - mutation observer
  - javascript mutation observer
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MutationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Mutation Observer | JavaScript Frontend Interview Questions</title>
</head>

**Miscellaneous: Mutation Observer**

---

<AdSense />

---

<CloseAllAnswers />

### What is a Mutation Observer? How does it interact with a DOM tree?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change. It was designed to replace the older Mutation Events feature, part of the DOM3 Events specification.
    </div><br/>
  <div><strong>Technical Details:</strong> To keep your web page up-to-date with any changes made to its structure, you can use a MutationObserver - a DOM observer that registers a callback function that is called whenever the DOM tree is changed. For instance, you can use a MutationObserver to monitor changes to the list of items in a ul element, and update the page accordingly whenever an item is added or removed from the list. This makes MutationObservers a powerful tool, especially when dealing with pages that have a lot of dynamic content.
    </div><br/>
    <strong>Syntax: </strong> let observer = new MutationObserver(callback);<br /><br />
  </div>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Select the target node
const targetNode = document.getElementById('my-element');

// Create an observer instance
const observer = new MutationObserver((mutationsList, observer) => {
  // Handle the mutations
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
});

// Configuration of the observer
const config = {
  attributes: true,
  childList: true,
  subtree: true
};

// Start observing the target node
observer.observe(targetNode, config);

// Later, you can disconnect the observer
// observer.disconnect();

```

  </div>
</details>

---

### How do you create a MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A MutationObserver is created by instantiating a new MutationObserver object and providing a callback function to handle mutations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let observer = new MutationObserver(callback);
```

  </div>
  </div>
</details>

---

### What types of changes can a MutationObserver monitor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A MutationObserver can monitor changes to the DOM, including changes to an element's attributes, text content, or child nodes, as well as addition or removal of elements in the tree.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Select the node that will be observed for mutations
let targetNode = document.getElementById('target');

// Create an observer instance linked to the callback function
let observer = new MutationObserver(function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
});

// Configuration of the observer: 
let config = { attributes: true, childList: true, subtree: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();
```

  </div>
  </div>
</details>

---

### What is a Mutation Record, and how does it interact with a Mutation Observer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A MutationRecord is an object that provides details about a specific DOM change. It's generated by a MutationObserver when a monitored DOM mutation occurs.
    </div><br/>
  <div><strong>Technical Response:</strong> A MutationRecord is an object that provides details about a specific DOM change. It is generated by a MutationObserver when a monitored DOM mutation occurs.</div><br/>
  <div><p><strong>The MutationRecord object has the following properties:</strong></p>
<ul>
<li><strong>type:</strong> The type of mutation that occurred.</li>
<li><strong>target:</strong> The node that was mutated.</li>
<li><strong>addedNodes:</strong> A list of the nodes that were added.</li>
<li><strong>removedNodes:</strong> A list of the nodes that were removed.</li>
<li><strong>changedNodes:</strong> A list of the nodes that were changed.</li>
<li><strong>characterData:</strong> The new character data for the node.</li>
<li><strong>attributeName:</strong> The name of the attribute that was changed.</li>
<li><strong>attributeNamespace:</strong> The namespace of the attribute that was changed.</li>
<li><strong>attributeOldValue:</strong> The old value of the attribute.</li>
<li><strong>attributeNewValue:</strong> The new value of the attribute.</li>
</ul>
    </div>
  </div>
</details>

---

### Can you give a use case for a MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A common use case for MutationObserver is to perform actions when specific changes to the DOM occur. For instance, you might want to trigger a function whenever a certain element is added to the page.
    </div><br/>
  <div><strong>Technical Response:</strong> A good use case is when you need to add a third-party script that contains proper functionality and does something unwanted, like injecting unwanted HTML elements. Naturally, the third-party script provides no mechanisms to remove it. Using MutationObserver, we can detect when the unwanted element appears in our DOM and remove it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Define a callback function to be executed when mutations are observed
let callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            let addedNodes = Array.from(mutation.addedNodes);
            let dynamicElements = addedNodes.filter(node => node.classList && node.classList.contains('dynamic-element'));
            if (dynamicElements.length > 0) {
                console.log('A .dynamic-element node has been added.');
                dynamicElements.forEach(node => {
                    // Perform operations with the new dynamic element
                    node.style.color = 'red';
                });
            }
        }
    }
};

// Create a new observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });

// Later, you can stop observing
// observer.disconnect();

```

  </div>
  </div>
</details>

---

### Is there a way to stop observing or disconnecting the MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can stop or disconnect the observer by calling the `disconnect()` method. It tells the observer to stop watching for mutations. We can reuse the observer by calling its `observe()` method again.
    </div><br />
    <strong>Syntax: </strong> observer.disconnect();<br /><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Select the node that will be observed for mutations
let targetNode = document.getElementById('target');

// Define a callback function to be executed when mutations are observed
let callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
    }
};

// Create a new observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Configuration of the observer: 
let config = { childList: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
```

  </div>
  </div>
</details>

---

### How can we make sure changes are processed when there is a disconnection?

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
  <div><strong>Interview Response:</strong> An Observer does not prevent garbage collection of its target. If the target or observer is dereferenced and not reachable, it can be garbage collected.
    </div>
  <div><strong>Technical Response:</strong> Internally, observers employ weak references to nodes. A node can be trash collected if it is deleted from the DOM and becomes inaccessible, and the observation of a DOM node does not stop garbage collection. With MutationObserver, it is important to explicitly disconnect the observer when you are done with it, especially when the observer is scoped globally or outside of the function that starts it. If not disconnected, the observer keeps watching for mutations, which could lead to memory leaks.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function observeNode(node) {
    // Create an observer instance
    let observer = new MutationObserver(function() {
        console.log('Node changed!');
    });

    // Start observing the node for configured mutations
    observer.observe(node, { attributes: true, childList: true, subtree: true });

    // Return the observer
    return observer;
}

// Assume someNode is a DOM node
let someNode = document.getElementById('target');

let observer = observeNode(someNode);

// When you're done observing changes, disconnect the observer
// This allows the JavaScript engine to garbage collect the observer instance, avoiding a memory leak
setTimeout(() => {
    observer.disconnect();
}, 5000); // Stop observing after 5 seconds
```

  </div>
  </div>
</details>

---

### What is the purpose of the 'observe' method in MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The observe method in MutationObserver is used to monitor changes to DOM nodes and their descendants. It can be used to detect changes such as insertions, deletions, and modifications of elements.
  </div>
  </div>
</details>

---

### Can a MutationObserver observe changes in multiple elements simultaneously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a MutationObserver can observe changes in multiple elements simultaneously. It does this by registering multiple MutationObservers, each of which observes a different set of elements. When any of the observed elements changes, the MutationObserver will be notified.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, { subtree: true, childList: true });
```

  </div>
  </div>
</details>

---

### How do you stop a MutationObserver from observing changes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By using the `disconnect` method, you can stop a MutationObserver from monitoring changes in the DOM.
  </div>
  </div>
</details>

---

### What parameters does the callback function passed to a MutationObserver take?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The callback function takes two parameters: an array of MutationRecords and the MutationObserver instance itself.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Define a callback function to be executed when mutations are observed
let callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log(`The ${mutation.attributeName} attribute was modified on ${mutation.target.nodeName}`);
        }
    }
};

// Create a new observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Start observing the document with the configured parameters
observer.observe(document.body, { attributes: true, childList: true, subtree: true });

// Later, you can stop observing
// observer.disconnect();
```

  </div>
  </div>
</details>

---

### What information does a MutationRecord provide?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A MutationRecord provides details about a specific mutation, like the type of mutation, target node, and the previous and new values.
  </div>
  </div>
</details>

---

### Can a MutationObserver detect changes in the whole document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by invoking the `observe` method on the document object or the root node of your DOM.
  </div>
  </div>
</details>

---

### How do you specify what types of changes a MutationObserver should observe?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You specify what changes a MutationObserver should observe by passing a configuration object to the `observe()` method. The object can have properties: `childList`, `attributes`, `characterData`, and `subtree`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Select the node that will be observed for mutations
let targetNode = document.getElementById('target');

// Define a callback function to be executed when mutations are observed
let callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create a new observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Configuration of the observer: 
let config = { attributes: true, childList: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();
```

  </div>
  </div>
</details>

---

### Can MutationObserver track old values of mutations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a `MutationObserver` can track old values of mutations. This can be done by setting the `attributeOldValue` or `characterDataOldValue` properties to `true` in the observer's configuration.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a new observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Configuration of the observer:
let config = { attributes: true, attributeOldValue: true };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();
```

  </div>
  </div>
</details>

---

### What is the 'subtree' option in MutationObserver's configuration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'subtree' option, when set to true, directs the MutationObserver to also observe changes in the descendants of the target node.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Configuration of the observer:
let config = { attributes: true, subtree: true };
```

  </div>
  </div>
</details>

---

### How does MutationObserver handle changes that occur in rapid succession?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> MutationObserver batches changes that occur in quick succession and calls the callback function once with all changes.
  </div>
  </div>
</details>

---

### Does using a MutationObserver affect JavaScript performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, MutationObservers can impact performance if used excessively or improperly due to the overhead of monitoring DOM changes.
  </div>
  </div>
</details>

---

### When should you use a MutationObserver?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should use MutationObserver when we need to react to DOM changes that can't be tracked through event handlers or other means.
  </div>
  </div>
</details>

---
