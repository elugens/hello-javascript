---
title: Event Delegation
description: Event Delegation is a technique that allows you to listen for events on a parent element; then delegate the event to its children. Interview Questions & Answers
sidebar_position: 3
sidebar_label: Event Delegation
keywords:
  - event delegation
  - events delegation
  - delegating events
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
  - event delegation
  - events delegation
  - delegating events
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/EventDelegationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Event Delegation | JavaScript Frontend Phone Interview</title>
</head>

**Browser Events: Event Delegation**

---

<AdSense />

---

<CloseAllAnswers />

### What is event delegation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event delegation is a technique where you bind a single event listener to a parent element that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future dynamically.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Consider a list where we want to handle clicks on any item:

HTML:

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <!-- More items can be dynamically added -->
</ul>
```

JavaScript:

```javascript
document.querySelector("#myList").addEventListener("click", function(e) {
  if(e.target && e.target.nodeName === "LI") {
    console.log("List item ", e.target.textContent, " was clicked");
  }
});
```

In this example, we attach a single event listener to the parent `ul` element, rather than individual listeners to each `li`. This is more efficient and works for dynamically added items as well.

  </div>  
  </div>
</details>

---

### Why would you use event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event delegation improves performance by reducing the number of event handlers needed. It also handles events on future child elements, useful when dynamically adding elements to the DOM.
  </div>
  </div>
</details>

---

### How does event delegation take advantage of event bubbling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event delegation relies on event bubbling since the event triggered on a child element will bubble up to the parent, where the single event listener is placed.
  </div>
  </div>
</details>

---

### How does event delegation handle events on elements that don’t exist at the time of binding?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event delegation handles events on future elements by binding the event listener to a parent element. The event bubbles up from the target to the parent, where it can be intercepted and handled.

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Consider a scenario where list items are added dynamically to a list, and we want to handle clicks on these new items.

HTML:

```html
<button id="add">Add Item</button>
<ul id="myList">
  <!-- Items will be dynamically added here -->
</ul>
```

JavaScript:

```javascript
document.querySelector("#add").addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.querySelector("#myList").appendChild(li);
});

document.querySelector("#myList").addEventListener("click", function(e) {
  if(e.target && e.target.nodeName === "LI") {
    console.log("List item ", e.target.textContent, " was clicked");
  }
});
```

Here, even though new list items ("li") are created after the event listeners are attached, clicks on these new items are still correctly handled. This is because the event listener is attached to the parent ("ul"), and events bubble up.

  </div>
  </div>
</details>

---

### How can you determine which element triggered an event in an event delegation setup?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can determine the triggering element by using the `event.target` property, which refers to the original element where the event was fired.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example where we handle clicks on items in a list using event delegation, and determine which item was clicked.

HTML:

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

JavaScript:

```javascript
document.querySelector("#myList").addEventListener("click", function(e) {
  if(e.target && e.target.nodeName === "LI") {
    console.log("The element that triggered the event is: ", e.target);
  }
});
```

In this scenario, clicking on an item in the list will log the item element to the console. The clicked element is identified using the `event.target` property in the event handler function.

  </div>
  </div>
</details>

---

### How does event delegation affect memory usage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event delegation can reduce memory usage by binding event listeners to a parent element instead of individual child elements. This way, fewer event handlers are created, resulting in efficient memory management.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTML:

```html
<div id="parent">
  <button class="child">Button 1</button>
  <button class="child">Button 2</button>
  <button class="child">Button 3</button>
</div>
```

JavaScript: *We are targeting the `parent` instead of each individual child.*

```javascript
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target.classList.contains('child')) {
    console.log('Button clicked:', event.target.textContent);
  }
});
```

  </div>
  </div>
</details>

---

### What is the role of the "event.target" property in event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `event.target` is crucial in event delegation as it refers to the actual element that triggered the event, allowing us to correctly handle the event even when it bubbles up to a parent element.
  </div>
  </div>
</details>

---

### Can event delegation handle events on elements outside of the element it's bound to?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, event delegation can only handle events on the element it's bound to and its descendants, not on elements outside of this hierarchy.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's consider two lists - one where the event listener is bound, and another separate list.

HTML:

```html
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ul id="otherList">
  <li>Other Item 1</li>
  <li>Other Item 2</li>
</ul>
```

JavaScript:

```javascript
document.querySelector("#myList").addEventListener("click", function(e) {
  if(e.target && e.target.nodeName === "LI") {
    console.log("List item ", e.target.textContent, " was clicked in myList");
  }
});

document.querySelector("#otherList").addEventListener("click", function(e) {
  if(e.target && e.target.nodeName === "LI") {
    console.log("List item ", e.target.textContent, " was clicked in otherList");
  }
});
```

In this scenario, clicking items in `myList` will trigger its own event listener, and clicking items in `otherList` will trigger its own listener. The listener on `myList` won't react to clicks in `otherList` and vice versa because they are outside of each other's hierarchies.

  </div>
  </div>
</details>

---

### What is the main disadvantage of event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main disadvantage is complexity when dealing with specific event types that don't bubble, such as `focus`, `blur`, and `mouseenter` events, which may require different strategies.
  </div><br />
  <div><strong>Technical Details:</strong> In the case of focus, blur, and mouseenter events, event delegation may not work as expected or may have limitations. These events are not capable of bubbling up through the DOM tree, making it difficult to effectively delegate them to parent elements. As a result, handling these events using delegation might not be straightforward or even possible in certain scenarios.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that demonstrates the limitations of event delegation with focus, blur, and mouseenter events:

```html
<div id="parent">
  <input type="text" class="child" placeholder="Input 1">
  <input type="text" class="child" placeholder="Input 2">
  <input type="text" class="child" placeholder="Input 3">
</div>
```

```javascript
document.getElementById('parent').addEventListener('focus', function(event) {
  console.log('Input focused:', event.target.placeholder);
}, true); // Using the "capture" phase

document.getElementById('parent').addEventListener('blur', function(event) {
  console.log('Input blurred:', event.target.placeholder);
}, true); // Using the "capture" phase

document.getElementById('parent').addEventListener('mouseenter', function(event) {
  console.log('Mouse entered:', event.target.placeholder);
});
```

In this example, we attempt to use event delegation with focus, blur, and mouseenter events. However, due to the nature of these events, they don't naturally bubble up through the DOM tree. To capture these events, we need to use the "capture" phase by passing `true` as the third argument to the `addEventListener` method. Even with this approach, event delegation with these events might not work as expected or may require additional workarounds, making it less suitable for delegation compared to other events that naturally bubble up.

  </div>
  </div>
</details>

---

### What is the behavior pattern in terms of event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In events, the behavior pattern has two parts. First, we add a custom attribute to an element that describes its behavior. Second, a document-wide handler tracks events and acts if an event happens on an attributed element.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Counter: -->
<input type="button" value="1" data-counter />

<!-- One more counter: -->
<input type="button" value="2" data-counter />

<script>
  document.addEventListener('click', function (event) {
    if (event.target.dataset.counter != undefined) {
      // if the attribute exists...
      event.target.value++;
    }
  });
</script>
```

  </div>
  </div>
</details>

---

### What exactly is event bubbling/event propagation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event bubbling, or event propagation, is a process in JavaScript where an event triggers on the target element and then successively triggers on its ancestors, moving up through the DOM tree hierarchy.
    </div><br />  
  <div><strong>Technical Response:</strong> When an element triggers an event, the event handler/event listener associated with that event gets called. When an event fires on a parent element, it goes through a "bubbling" phase. The browser checks to determine if the element that caused the event has an event handler registered to it during the "bubbling" phase. If it does, the event handler executes. If it does not, it proceeds to the parent element and checks to see if it has an event handler assigned to it. The browser proceeds up the parent element chain, checking for and executing registered event handlers until it reaches the root element.
    </div>  
  </div>
</details>

---

### Is it possible to prevent event bubbling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, event bubbling can be prevented in JavaScript by using the `event.stopPropagation()` method, which stops the event from continuing to bubble up the DOM tree.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
Element.handleOnClick = (event) => {
  event.stopPropagation();
  // Add code to handle the event here
}
```

  </div>
  </div>
</details>

---

### What is a good use-case for event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>  
  <div><strong>Interview Response:</strong> Event delegation is useful when handling events on many elements, like list items, or on elements dynamically added to the DOM, as it improves performance and reduces memory usage.
    </div><br />
  <div><strong>Technical Response:</strong> Event delegation can be pretty handy when you wish to set an event listener on child elements automatically. Assume you want to add an event listener to all the &#60;li&#62; components in an &#60;ul&#62;. On the other hand, the unordered list gets constructed dynamically based on data obtained from an API call. An event handler could not be attached to each &#60;li&#62; element individually, but it could be attached to the &#60;ul&#62; element and delegated to each of the child &#60;li&#62; elements.
    </div><br />
    <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js

document.getElementById("app").innerHTML = `
<h1>Current Users</h1>
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
</ul>
`;

document.getElementById("itemList").addEventListener("click", (event) => {
  console.log(event.type);
});

```

  </div>
  </div>
</details>

---
