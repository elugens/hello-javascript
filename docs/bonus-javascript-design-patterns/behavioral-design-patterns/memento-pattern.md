---
title: Memento Design Pattern
description: The memento pattern is a behavioral pattern that allows you to save and restore an object's previous state without revealing its implementation details.
sidebar_position: 7
sidebar_label: Memento
keywords:
  - memento pattern
  - memento design pattern
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
  - memento pattern
  - memento design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MementoSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Memento Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Memento Pattern**

<CloseAllAnswers />

---

### Can you explain the memento design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The memento design pattern is a behavioral pattern that allows capturing and restoring an object's internal state without violating encapsulation.
<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> We use the memento pattern to store and restore an object temporarily. The technology used to store the object's state gets determined by the needed persistence period, which can vary.
<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-memento.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Originator** -- example code: _Person_

- implements interface to create and restore mementos of itself
  -- in example code: _hydrate and dehydrate_
- the object whose state is temporary being saved and restored

**Memento** -- example code: _JSON representation of Person_

- the internal state of the Originator object in some storage format

**CareTaker** -- In example code: _CareTaker_

- responsible for storing mementos
- just a repository; it does not make changes to mementos

<br/>

```js
let Person = function (name, street, city, state) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
};

Person.prototype = {
  hydrate: function () {
    let memento = JSON.stringify(this);
    return memento;
  },

  dehydrate: function (memento) {
    let m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  },
};

let CareTaker = function () {
  this.mementos = {};

  (this.add = function (key, memento) {
    this.mementos[key] = memento;
  }),
    (this.get = function (key) {
      return this.mementos[key];
    });
};

function run() {
  var mike = new Person('Mike Foley', '1112 Main', 'Dallas', 'TX');
  var john = new Person('John Wang', '48th Street', 'San Jose', 'CA');
  var caretaker = new CareTaker();

  // save state

  caretaker.add(1, mike.hydrate());
  caretaker.add(2, john.hydrate());

  // mess up their names

  mike.name = 'King Kong';
  john.name = 'Superman';

  // restore original state

  mike.dehydrate(caretaker.get(1));
  john.dehydrate(caretaker.get(2));

  console.log(mike.name);
  console.log(john.name);
}

run();

/*

OUTPUT:

Mike Foley
John Wang

*/
```

</div>
 </div>

</details>

---

### The Memento pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Memento pattern belongs to the behavioral category of design patterns, which are concerned with the interactions and responsibilities between objects.
    </div>
  </div>
</details>

---

### What is a suitable JavaScript use case for the Memento Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Memento pattern can be used in JavaScript to implement features such as "undo" or "rollback" for an application, where a previous state of an object needs to be restored without violating encapsulation. It can also be used in browser-based applications to preserve user data during a session.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> We can use the Memento pattern to create snapshots of an object's state to restore it to a previous state.<br/><br/>The Memento pattern allows you to create complete copies of an object's state, including private fields, and store them independently from the object. While most people remember this pattern because of the "undo" use case, it's also helpful when dealing with transactions (i.e., if you need to roll back an operation on an error).<br/><br/>We can also use this pattern when direct access to an object's fields/getters/setters violates its encapsulation. The Memento makes the object responsible for capturing a snapshot of its current state. Because no other object can read the snapshot, the original object's state data remains safe and secure.
    </div><br/>
  </div>
</details>

---

### What are some of the advantages of employing the Memento pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Some advantages of using the Memento pattern in JavaScript include preserving encapsulation, providing a simple way to undo/redo actions, and improving code maintainability.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Memento Pattern
    </div>
    <br />
    <div></div>

- Without breaking the object's encapsulation, you can take snapshots of its state.
- You can simplify the originator's code by allowing the caretaker to keep track of the originator's state history.

<br />
  </div>
</details>

---

### What are some of the Memento pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Drawbacks of the Memento pattern in JavaScript include increased memory usage for storing snapshots, potential performance issues, and the need for careful management of state transitions.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Memento Pattern.
    </div>
    <br />
    <div></div>

- If clients frequently create mementos, the program may consume a large amount of RAM/memory.
- To be able to destroy outmoded keepsakes, caregivers should track the originator's lifecycle.
- Most dynamic programming languages, such as JavaScript, cannot guarantee that the Memento's state remains unchanged.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Memento pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Alternative approaches to the Memento pattern in JavaScript include using immutability, functional programming concepts, or event sourcing to manage state and changes in an application.
    </div>
    <br />
  </div>
</details>

---
