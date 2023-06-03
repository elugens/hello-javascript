---
title: Bubbling and Capturing - Events
description: Bubbling and Capturing Events in JavaScript - The bubbling-up principle is self-explanatory based on its name. - JavaScript Interview Questions & Answers
sidebar_position: 2
sidebar_label: Bubbling / Capturing
keywords:
  - bubbling capturing
  - bubbling events
  - capturing events
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
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BubbleCapSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Bubbling and Capturing | JavaScript Frontend Phone Interview</title>
</head>

**Browser Events: Bubbling / Capturing**

<CloseAllAnswers />

---

### Can you explain event bubbling in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event bubbling is the process where an event triggers on the innermost target element first and then successively triggers on ancestors (parents) in the same nesting hierarchy up to the outermost DOM element.
  </div><br />
  </div>
</details>

---

### What is event capturing in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event capturing is the opposite of bubbling. It's when an event starts at the outermost element and triggers on descendents, moving towards the innermost target element.
  </div><br />
  </div>
</details>

---

### What is the bubble-up principle concerning events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bubbling-up principle is self-explanatory based on its name. In principle, when an event happens on an element, it first runs its handlers, then on its parent, and back up to the other ancestors.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<!-- this will return the p, div and form alerts -->
<form onclick="alert('form')">
  FORM
  <div onclick="alert('div')">
    DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

  </div>
  </div>
</details>

---

### Can you explain what the event target is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most deeply nesting element that created the event is known as a target element, and it may be accessed using event.target. The event target does not change through the bubbling process; JavaScript views it as the initial point of the event.
    </div><br />

:::note
The current target is the precise target at which the current action takes place, where "this = event.currentTarget." It is conceivable that event.target equals either this or the current target.
:::

  </div>
</details>

---

### How can you prevent the default action?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `event.preventDefault()` method is used to prevent the browser from executing the default action of the event.
  </div><br />
  </div>
</details>

---

### Can you capture and bubble events at the same time?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, events in JavaScript first capture down to the target, then bubble up. This process is called event propagation.
  </div><br />
  </div>
</details>

---

### What is the purpose of the third argument in the "addEventListener" method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The third argument in the `addEventListener` method, known as `useCapture`, is an optional parameter that specifies whether the event should be handled during the capturing phase (`true`) or the bubbling phase (`false`, default).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example that demonstrates the use of the third argument, `useCapture`, in the `addEventListener` method.

```html
<div id="outer">
  <div id="inner">
    Click me
  </div>
</div>

<script>
  function handleClick(event) {
    console.log("Target element: " + event.target.id);
    console.log("Current target element: " + event.currentTarget.id);
  }

  var outerElement = document.getElementById("outer");
  var innerElement = document.getElementById("inner");

  // Attaching event listeners with different useCapture values
  outerElement.addEventListener("click", handleClick, false); // Bubbling phase
  innerElement.addEventListener("click", handleClick, true); // Capturing phase
</script>
```

In this example, we have an outer `div` element with the id "outer" and an inner `div` element with the id "inner". Two event listeners are attached to these elements using the `addEventListener` method. The first listener is attached to the outer element with `useCapture` set to `false`, indicating the bubbling phase. The second listener is attached to the inner element with `useCapture` set to `true`, indicating the capturing phase.

When you click on the inner element, both event handlers will be called, but their behavior will differ based on the value of `useCapture`. The console logs will show the difference in `event.target.id` (the clicked element) and `event.currentTarget.id` (the element to which the event listener is attached).

  </div>
  </div>
</details>

---

### Is there a way to stop an event from bubbling up?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If necessary, we can use two methods to explicitly stop the bubbling up process, including the stopPropagation and stopImmediatePropagation. Using these two approaches should be limited because of some drawbacks, such as click event failures.
    </div>
  </div>
</details>

---

### How can you stop event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can stop event propagation in JavaScript by using the `event.stopPropagation()` method, which prevents further propagation of the current event in the capturing and bubbling phases.
  </div><br />
  </div>
</details>

---

### Can we stop all functions from running on a given event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by calling `event.stopPropagation()` in an event handler, you can prevent further propagation of the event, stopping it from triggering other event listeners attached to parent elements during the capturing and bubbling phases.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="outer">
  <div id="inner">
    Click me
  </div>
</div>

<script>
  function outerClick(event) {
    console.log("Outer clicked");
  }

  function innerClick(event) {
    console.log("Inner clicked");
    event.stopPropagation();
  }

  var outerElement = document.getElementById("outer");
  var innerElement = document.getElementById("inner");

  outerElement.addEventListener("click", outerClick);
  innerElement.addEventListener("click", innerClick);
</script>
```

In this example, we have an outer `div` element with the id "outer" and an inner `div` element with the id "inner". Two event listeners are attached to these elements using the `addEventListener` method.

When you click on the inner element, the `innerClick` event handler will be triggered. It logs "Inner clicked" to the console and calls `event.stopPropagation()` to stop the event from propagating further. As a result, the `outerClick` event handler will not be triggered, and "Outer clicked" will not be logged to the console.

  </div>
  </div>
</details>

---

### What's the difference between stopPropagation and stopImmediatePropagation methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The stopPropagation() method prevents further bubbling or capturing of an event, while stopImmediatePropagation() does the same but also prevents other event handlers on the same element from executing.
    </div><br/>
  <div><strong>Technical Response:</strong> If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. In other words, event.stopPropagation() stops the move upwards, but all other handlers run on the current element. To stop the bubbling and prevent handlers on the current element from running, we use event.stopImmediatePropagation(). After it, no other handlers execute.
    </div>
  </div>
</details>

---

### Does stopping event propagation prevent default actions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, stopping event propagation with event.stopPropagation() does not prevent default actions associated with the event. It only prevents the event from triggering additional event listeners on parent elements.
    </div>
  </div>
</details>

---

### How does event delegation relate to event bubbling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event delegation takes advantage of event bubbling. Instead of assigning event handlers to specific nodes, the event handler is added to one parent and because of event bubbling, events on child nodes bubble up to the parent.
    </div>
  </div>
</details>

---

### What is the default direction of event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The default direction of event propagation is from the innermost element to its parent elements, known as the bubbling phase. This allows events to propagate upward (bubbling phase) through the DOM hierarchy unless stopped with `event.stopPropagation()`.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="outer">
  <div id="inner">
    Click me
  </div>
</div>

<script>
  function outerClick(event) {
    console.log("Outer clicked");
  }

  function innerClick(event) {
    console.log("Inner clicked");
  }

  var outerElement = document.getElementById("outer");
  var innerElement = document.getElementById("inner");

  outerElement.addEventListener("click", outerClick);
  innerElement.addEventListener("click", innerClick);
</script>
```

In this example, we have an outer `div` element with the id "outer" and an inner `div` element with the id "inner". Two event listeners are attached to these elements using the `addEventListener` method.

When you click on the inner element, both the `innerClick` and `outerClick` event handlers will be triggered. The events will propagate from the innermost element (inner) to its parent elements (outer) in the default direction of event bubbling. The console logs will show "Inner clicked" followed by "Outer clicked".

  </div>
  </div>
</details>

---

### What are the three phases of event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three phases of event propagation, including the capturing, targeting, and bubbling phases. The capturing phase is the process of the event traveling down to the target element ( &#123;capture: true&#125; ). The targeting phase is when we reach our target element, and the bubbling phase is the process of bubbling up from the target element.
    </div>
  </div>
</details>

---

### How can you determine the phase of event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To determine the phase of event propagation, you can check the `event.eventPhase` property. It will have a value of 1 (capturing phase), 2 (target phase), or 3 (bubbling phase).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<div id="outer">
  <div id="inner">
    Click me
  </div>
</div>

<script>
  function handleClick(event) {
    if (event.eventPhase === Event.CAPTURING_PHASE) {
      console.log("Event capturing phase");
    } else if (event.eventPhase === Event.AT_TARGET) {
      console.log("Event target phase");
    } else if (event.eventPhase === Event.BUBBLING_PHASE) {
      console.log("Event bubbling phase");
    }
  }

  var outerElement = document.getElementById("outer");
  var innerElement = document.getElementById("inner");

  outerElement.addEventListener("click", handleClick, true); // Capturing phase
  innerElement.addEventListener("click", handleClick); // Bubbling phase
</script>
```

In this example, we have an outer `div` element with the id "outer" and an inner `div` element with the id "inner". Two event listeners are attached to these elements, one in the capturing phase and the other in the bubbling phase.

When you click on the inner element, the `handleClick` event handler will be called for both elements. Inside the event handler, we check the `event.eventPhase` property to determine the phase of event propagation. The corresponding message will be logged to the console based on the event phase detected.

  </div>
  </div>
</details>

---

### Can you modify the default direction of event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the default direction of event propagation (bubbling phase) cannot be modified. It always occurs from the innermost element to its parent elements in the DOM hierarchy.
  </div><br />
  </div>
</details>

---

### Is there a straightforward way to invoke capturing an event in the capturing phase?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we need to set the handler capture option to true to catch an event on the capturing phase. There are two possible values of the capture option true and false. If it is false (default), the handler is set to the bubbling phase. If it is true, then the handler is set on the capturing phase.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>
  FORM
  <div>
    DIV
    <p>P</p>
  </div>
</form>

<script>
  for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener(
      'click',
      (e) => alert(`Capturing: ${elem.tagName}`),
      true
    );
    elem.addEventListener('click', (e) => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```

:::note
While there are three phases, the second ("target phase": the event reached the element) is not handled independently in theory: handlers from both the capturing and bubbling phases fire at that time.
:::

  </div>
  </div>
</details>

---
