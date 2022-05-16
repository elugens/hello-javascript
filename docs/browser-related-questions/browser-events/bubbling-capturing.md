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

### Is there a way to stop an event from bubbling up?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If necessary, we can use two methods to explicitly stop the bubbling up process, including the stopPropagation and stopImmediatePropagation. Using these two approaches should be limited because of some drawbacks, such as click event failures.
    </div>
  </div>
</details>

---

### What is the difference between the event stopPropagation and stopImmediatePropagation methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. In other words, event.stopPropagation() stops the move upwards, but all other handlers run on the current element. To stop the bubbling and prevent handlers on the current element from running, we use event.stopImmediatePropagation(). After it, no other handlers execute.
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
