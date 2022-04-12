---
title: Mediator Design Pattern
description: The Mediator Pattern is a design pattern that allows one item to notify another group of objects when an event or action occurs.
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
      <strong>Interview Response:</strong> The Mediator Pattern is a design pattern that allows one item to notify another group of objects when an event or action occurs. The Mediator and Observer patterns vary in that the Mediator pattern allows one object to be alerted of events occurring in other objects. In contrast, the Observer pattern allows one object to subscribe to numerous events occurring in other objects.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-mediator.jpg
" /><br /><br />

**The objects participating in this pattern are:**

**Mediator** -- example code: _Chatroom_

- It specifies an interface for interacting with Colleague objects
- maintains references to Colleague objects
- manages central control over operations.

**Colleagues** -- example code: _Participants_

- objects that the Mediator is mediating
- each instance maintains a connection (reference) to the Mediator

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

### What pattern category does the Mediator belong to?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Mediator pattern is a type of behavioral design pattern.
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

- If your system has several components that must communicate with one another.
- To avoid object tight coupling in a system with many objects.
- To enhance code readability.
- To make it easier to maintain code.
- If communication between objects gets complicated or impedes code reusability.

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Mediator pattern?

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

- Singular Responsibility Principle -- You may consolidate the communications between numerous components into a single location, making them easier to understand and maintain.
- The Open/Closed Principle You can add new mediators without changing the key components.
- You can reduce coupling between software components.
- Individual components can be reused more quickly.

<br />
  </div>
</details>

---

### What are some of the Mediator pattern's drawbacks?

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

- A mediator can evolve into a God Object over time.

<br />
  </div>
</details>

---