---
title: Observer Design Pattern
description: The Observer is a behavioral JS design pattern that lets you define a subscription mechanism to notify multiple objects (observers) about any events that happen to the object (subject) they’re observing.
sidebar_position: 8
sidebar_label: Observer
---

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
      <strong>Interview Response:</strong> The Observer is a behavioral JS design pattern that lets you define a subscription mechanism to notify multiple objects (observers) about any events that happen to the object (subject) they’re observing. This pattern is also called Pub/Sub, short for Publication/Subscription. It defines a one-to-many dependency between objects, promotes loose coupling, and facilitates good object-oriented design.<br/><br/>The observer pattern is the foundation of event-driven programming. We write event handler functions that will be notified when a certain event fires.

<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-observer.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Subject** -- In example code: _Click_

- maintains list of observers. Any number of Observer objects may observe a Subject
- implements an interface that lets observer objects subscribe or unsubscribe
- sends a notification to its observers when its state changes

**Observer** -- In example code: _clickHandler_

- has a function signature that can be invoked when Subject changes (i.e. event occurs)

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

### In what pattern category does the Observer pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Observer pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### Can you explain the use case for the Observer Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The observer pattern can be used:
    </div>
    <br />
    <div></div>

- To improve code management by breaking down large applications into a system of loosely coupled objects.
- To provide greater flexibility by enabling a dynamic relationship between observers and subscribers, otherwise, not possible due to tight coupling.
- To improve communication between different parts of the application.
- To create a one-to-many dependency between objects that are loosely coupled.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Observer pattern?

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

- Open/Closed Principle. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).
- You can establish relations between objects at runtime.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Observer pattern?

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

- Subscribers are notified in random order.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
