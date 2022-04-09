---
title: Memento Design Pattern
description: Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.
sidebar_position: 7
sidebar_label: Memento
---

**Structural: Memento Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the mediator design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Memento pattern provides temporary storage as well as restoration of an object. The mechanism in which you store the object’s state depends on the required duration of persistence, which may vary.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-memento.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Originator** -- In example code: _Person_

- implements interface to create and restore mementos of itself
- in example code: _hydrate and dehydrate_
- the object which state is temporary being saved and restored

**Memento** -- In example code: _JSON representation of Person_

- internal state of the Originator object in some storage format

**CareTaker** -- In example code: _CareTaker_

- responsible for storing mementos
- just a repository; does not make changes to mementos

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

### In what pattern category does the Memento pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Memento pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### What is a good use case for the Memento Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> We can use the Memento pattern when you want to produce snapshots of the object’s state to be able to restore a previous state of the object.<br/><br/>The Memento pattern lets you make full copies of an object’s state, including private fields, and store them separately from the object. While most people remember this pattern thanks to the “undo” use case, it’s also indispensable when dealing with transactions (i.e., if you need to roll back an operation on error).<br/><br/>We can also use this pattern when direct access to the object’s fields/getters/setters violates its encapsulation. The Memento makes the object itself responsible for creating a snapshot of its state. No other object can read the snapshot, making the original object’s state data safe and secure.
    </div><br/>
  </div>
</details>

---

### What are some of the benefits of using the Memento pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Memento Pattern
    </div>
    <br />
    <div></div>

- You can produce snapshots of the object’s state without violating its encapsulation.
- You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Memento pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Memento Pattern.
    </div>
    <br />
    <div></div>

- The app might consume lots of RAM / memory if clients create mementos too often.
- Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.
- Most dynamic programming languages, such as JavaScript, can’t guarantee that the state within the memento stays untouched.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
