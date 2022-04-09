---
title: Mediator Design Pattern
description: Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
sidebar_position: 6
sidebar_label: Mediator
---

**Structural: Mediator Pattern**

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
      <strong>Interview Response:</strong> The Mediator Pattern is a design pattern that allows one object to notify a set of other objects when an event/action occurs. The difference between the Mediator and Observer patterns are that the Mediator pattern allows one object to be notified of events that occur in other objects, while the Observer pattern allows one object to subscribe to multiple events that occur in other objects.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-mediator.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Mediator** -- In example code: _Chatroom_

- defines an interface for communicating with Colleague objects
- maintains references to Colleague objects
- manages central control over operations

**Colleagues** -- In example code: _Participants_

- objects that are being mediated by the Mediator
- each instance maintains a reference to the Mediator

<br/>

```js
let Participant = function (name) {
  this.name = name;
  this.chatroom = null;
};

Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(from.name + ' to ' + this.name + ': ' + message);
  },
};

let Chatroom = function () {
  let participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },

    send: function (message, from, to) {
      if (to) {
        // single message
        to.receive(message, from);
      } else {
        // broadcast message
        for (key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    },
  };
};

function run() {
  let yoko = new Participant('Yoko');
  let john = new Participant('John');
  let paul = new Participant('Paul');
  let ringo = new Participant('Ringo');

  let chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);

  yoko.send('All you need is love.');
  yoko.send('I love you John.');
  john.send('Hey, no need to broadcast', yoko);
  paul.send('Ha, I heard that!');
  ringo.send('Paul, what do you think?', paul);
}

run();

/*

Output:

Yoko to John: All you need is love.
Yoko to Paul: All you need is love.
Yoko to Ringo: All you need is love.
Yoko to John: I love you John.
Yoko to Paul: I love you John.
Yoko to Ringo: I love you John.
John to Yoko: Hey, no need to broadcast
Paul to Yoko: Ha, I heard that!
Paul to John: Ha, I heard that!
Paul to Ringo: Ha, I heard that!
Ringo to Paul: Paul, what do you think?

*/
```

</div>
 </div>

</details>

---

### In what pattern category does the Mediator pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Mediator pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### When should use the Mediator Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> It can be used:
    </div><br/>

- If your system has multiple parts that need to communicate.
- To avoid tight coupling of objects in a system with a lot of objects.
- To improve code readability.
- To make code easier to maintain.
- If communication between objects becomes complex and hinders the reusability of code.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Mediator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Mediator Pattern
    </div>
    <br />
    <div></div>

- Single Responsibility Principle. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.
- Open/Closed Principle. You can introduce new mediators without having to change the actual components.
- You can reduce coupling between various components of a program.
- You can reuse individual components more easily.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Mediator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Iterator Pattern.
    </div>
    <br />
    <div></div>

- Over time a mediator can evolve into a God Object.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
