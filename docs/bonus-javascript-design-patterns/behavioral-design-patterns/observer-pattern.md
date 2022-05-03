---
title: Observer Design Pattern
description: The observer pattern allows you to define a subscription mechanism that will notify multiple objects about any events on the object we attempt to observe.
sidebar_position: 8
sidebar_label: Observer
keywords:
  - observer pattern
  - observer design pattern
  - design patterns
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
  - observer pattern
  - observer design pattern
  - design patterns
  - interview answers
  - interview questions
---

<head>
  <title>Observer Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Observer Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the observer design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Observer is a behavioral JS design pattern that allows you to construct a subscription mechanism that alerts numerous objects (observers) about any events that occur to the object (subject) they're viewing. This pattern is also known as Pub/Sub, which stands for Publication/Subscription. It establishes a one-to-many relationship between items, encourages loose coupling, and aids in effective object-oriented design.<br/><br/>The observer pattern is at the heart of event-driven programming. We create event handler routines that are informed when a specific event occurs.

<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-observer.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Subject** -- example code: _Click_

- maintains a list of observers. Any number of Observer objects can observe a single Observer object.
- The subject implements an interface through which observer objects can subscribe and unsubscribe.
- When its state changes, it sends a notification to its observers.

**Observer** -- example code: _clickHandler_

- includes a function signature that gets called when the Subject changes (i.e., an event occurs)

<br/>

```js
function Click() {
  this.observers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    var scope = thisObj;
    this.observers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

function run() {
  var clickHandler = function (item) {
    console.log('Fired:' + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  click.fire('event #1');
  click.unsubscribe(clickHandler);
  click.fire('event #2');
  click.subscribe(clickHandler);
  click.fire('event #3');
}

run();

/* OUTPUT:
 
Fired:event #1
Fired:event #3
 
*/
```

</div>
 </div>

</details>

---

### The Observer pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Observer pattern is a type of behavioral design pattern.
    </div>
  </div>
</details>

---

### Can you explain the Observer Pattern's use case?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Use Cases:
    </div>
    <br />
    <div></div>

- To improve code management: We break down large programs into a system of loosely connected objects.
- To increase flexibility by allowing a dynamic relationship between observers and subscribers, which would otherwise be impossible due to tight coupling.
- To increase communication between the application's many components.
- To establish a one-to-many dependency between weakly related items.

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Observer pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Observer Pattern
    </div>
    <br />
    <div></div>

- The Open/Closed Principle -- You can add new subscriber classes without modifying the publisher's code (and vice versa if a publisher interface exists).
- At runtime, you can create relationships between objects.

<br />
  </div>
</details>

---

### What are some of the Observer pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Observer Pattern.
    </div>
    <br />
    <div></div>

- Sends notifications to subscribers in random order.

<br />
  </div>
</details>

---
