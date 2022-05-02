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

<head>
  <title>Event Delegation | JavaScript Frontend Phone Interview</title>
</head>

**Browser Events: Event Delegation**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

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
