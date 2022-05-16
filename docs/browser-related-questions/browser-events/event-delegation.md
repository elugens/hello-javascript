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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/EventDelegationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Event Delegation | JavaScript Frontend Phone Interview</title>
</head>

**Browser Events: Event Delegation**

<CloseAllAnswers />

---

### What is event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a parent element provides event listeners to its children, this is known as event delegation. The event listener activates whenever an event fires on the child element due to event bubbling (event propagation).
    </div><br />  
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

### What exactly is event bubbling/event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When an element triggers an event, the event handler/event listener associated with that event gets called. When an event fires on a parent element, it goes through a "bubbling" phase. The browser checks to determine if the element that caused the event has an event handler registered to it during the "bubbling" phase. If it does, the event handler executes. If it does not, it proceeds to the parent element and checks to see if it has an event handler assigned to it. The browser proceeds up the parent element chain, checking for and executing registered event handlers until it reaches the root element.
    </div><br />  
  </div>
</details>

---

### Is it possible to prevent event bubbling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can add the stopPropagation() method to the event in your event handler.
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
  <div><strong>Interview Response:</strong> Event delegation can be pretty handy when you wish to set an event listener on child elements automatically. Assume you want to add an event listener to all the &#60;li&#62; components in an &#60;ul&#62;. On the other hand, the unordered list gets constructed dynamically based on data obtained from an API call. An event handler could not be attached to each &#60;li&#62; element individually, but it could be attached to the &#60;ul&#62; element and delegated to each of the child &#60;li&#62; elements.
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
  alert(event.type);
});

```

  </div>
  </div>
</details>

---
