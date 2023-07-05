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

### What is the Memento Design Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The memento design pattern is a behavioral pattern that allows capturing and restoring an object's internal state without violating encapsulation.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The Memento design pattern is used to capture the state of an object so that it can be restored later. This pattern is particularly useful when you need to provide an undo mechanism. The technology used to store the object's state gets determined by the needed persistence period, which can vary.
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

**Here's an example of the Memento pattern in JavaScript:**

```javascript
class Memento {
  constructor(state) {
    this._state = state;
  }

  get state() {
    return this._state;
  }
}

class Originator {
  constructor(state) {
    this._state = state;
  }

  set state(state) {
    console.log(`Originator: Setting state to ${state}`);
    this._state = state;
  }

  saveToMemento() {
    console.log(`Originator: Saving to Memento.`);
    return new Memento(this._state);
  }

  restoreFromMemento(memento) {
    this._state = memento.state;
    console.log(`Originator: State after restoring from Memento: ${this._state}`);
  }
}

class Caretaker {
  constructor() {
    this._mementos = [];
  }

  addMemento(memento) {
    this._mementos.push(memento);
  }

  getMemento(index) {
    return this._mementos[index];
  }
}

// Usage
let caretaker = new Caretaker();

let originator = new Originator('State1');
caretaker.addMemento(originator.saveToMemento());

originator.state = 'State2';
caretaker.addMemento(originator.saveToMemento());

originator.state = 'State3';
caretaker.addMemento(originator.saveToMemento());

originator.restoreFromMemento(caretaker.getMemento(1));  // Restore to State2
```

In this example, the `Originator` is the object whose state we want to save, `Memento` is the object that stores the saved state, and `Caretaker` stores a list of all saved states. Whenever the state of `Originator` changes, we save the state to a new `Memento` and add it to `Caretaker`. If we want to restore the state of `Originator`, we get a `Memento` from `Caretaker` and restore the state from that `Memento`.

</div>
 </div>

</details>

---

### Why use the Memento Pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's beneficial when you need to save snapshots of an object's state for later restoration, such as in a undo-redo functionality.
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
    </div>
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

### What are the shortcomings of the Memento Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It could lead to high memory usage due to multiple memento objects. Also, it might cause complexity if mementos need to be saved and retrieved across system boundaries.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Memento pattern in JavaScript include increased memory usage for storing snapshots, potential performance issues, and the need for careful management of state transitions.<br/><br/> <strong>Drawbacks of the Memento Pattern.</strong>
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
      <strong>Interview Response:</strong> Yes, other alternatives include using Command Pattern (with undo functionality), database transactions, or snapshotting mechanisms provided by some programming languages and frameworks.
    </div>
  </div>
</details>

---

### How does the Memento Pattern differ from other design patterns?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unlike other design patterns, Memento encapsulates a snapshot of an object's state outside the object, without violating encapsulation.
  </div>
  </div>
</details>

---

### What are the main components of the Memento Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Memento design pattern typically consists of three main components: the Originator (creates a memento of state), Caretaker (stores mementos), and Memento (the object state's snapshot).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a modern JavaScript example using classes and getter/setter methods.

```javascript
class Memento {
  constructor(state) {
    this.state = state;
  }
}

class Originator {
  constructor() {
    this.state = null;
  }

  createMemento() {
    return new Memento(this.state);
  }

  restore(memento) {
    this.state = memento.state;
  }
}

class Caretaker {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

// Usage
let originator = new Originator();
let caretaker = new Caretaker();

originator.state = "State1";
caretaker.addMemento(originator.createMemento());

originator.state = "State2";
caretaker.addMemento(originator.createMemento());

originator.state = "State3";
caretaker.addMemento(originator.createMemento());

originator.restore(caretaker.getMemento(1)); // Restores to State2
console.log(originator.state); // Outputs: State2
```

In this example:

**- Originator:** the object that knows how to save its state in a memento and restore itself from a memento.
**- Memento:** the object that stores the internal state of the Originator. It's a passive object that only Originator can assess.
**- Caretaker:** the object that keeps track of multiple memento. It can store and retrieve stored memento, but cannot operate on them.

  </div>
  </div>
</details>

---

### Can the Memento Pattern create performance issues?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if misused. The pattern can consume lots of memory, as it involves creating and storing the object's state copies.
  </div>
  </div>
</details>

---

### How does Memento Pattern adhere to the Single Responsibility Principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By segregating the responsibility of saving and restoring object states into different objects, it follows the Single Responsibility Principle.
  </div>
  </div>
</details>

---

### What type of applications can benefit from using the Memento Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Applications with operations that may require rollback, like text editors, or games where players can undo moves, can benefit from the Memento Pattern.
  </div>
  </div>
</details>

---

### Is it possible to implement the Memento pattern in other languages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's not exclusive to JavaScript. It can be implemented in any language that supports object-oriented programming, like Python, Java, etc.
  </div>
  </div>
</details>

---

### Can we use the Memento Pattern in combination with other design patterns?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it can be combined with other patterns. For instance, it's often used with the Command Pattern for implementing undo-redo functionality.
  </div>
  </div>
</details>

---
