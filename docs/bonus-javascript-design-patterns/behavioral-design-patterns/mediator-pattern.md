---
title: Mediator Design Pattern
description: The mediator pattern is a structural pattern that enables one item to alert another group of objects when an event or action occurs. Interview Questions
sidebar_position: 6
sidebar_label: Mediator
keywords:
  - mediator pattern
  - mediator design pattern
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
  - mediator pattern
  - mediator design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MediatorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Mediator Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Mediator Pattern**

<CloseAllAnswers />

---

### What is the Mediator Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Mediator design pattern is a behaviorial design pattern in JavaScript allows objects to communicate through a central mediator object, reducing dependencies between objects and improving maintainability and flexibility.
<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Mediator Pattern is a design pattern that allows one item to notify another group of objects when an event or action occurs. The Mediator and Observer patterns vary in that the Mediator pattern allows one object to be alerted of events occurring in other objects. In contrast, the Observer pattern allows one object to subscribe to numerous events occurring in other objects.
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
- Maintains references to Colleague objects
- Manages central control over operations

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

### The Mediator pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Mediator pattern in JavaScript belongs to the behavioral pattern category, which focuses on communication and interaction between objects in a system.
    </div>
  </div>
</details>

---

### When should you utilize the JavaScript Mediator Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Mediator pattern in JavaScript should be utilized when a system has a high degree of object interdependence, or when implementing event-driven architectures.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> We can use it:
    </div><br/>

- If your system has several components that must communicate with one another.
- To avoid tight object coupling in a system with many objects.
- To enhance code readability.
- To make it easier to maintain code.
- If communication between objects gets complicated or impedes code reusability

<br />
  </div>
</details>

---

### What are the advantages of employing the Mediator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The advantages of employing the Mediator pattern in JavaScript include reduced coupling between objects, improved maintainability, and flexibility to change communication behaviors.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Mediator Pattern
    </div>
    <br />
    <div></div>

- Singular Responsibility Principle -- You may consolidate the communications between numerous components into a single location, making them easier to understand and maintain.
- The Open/Closed Principle You can add new mediators without changing the key components.
- You can reduce coupling between software components.
- We can use individual components more efficiently.

<br />
  </div>
</details>

---

### What are some downsides of the Mediator Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It can become complex and it could also potentially become a God object.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Some of the drawbacks of the Mediator pattern in JavaScript include increased complexity due to the central mediator object, and potential performance overhead when handling a large number of events.<br/><br/> <strong>Drawbacks of the Mediator Pattern.</strong>
    </div>
    <br />
    <div></div>

- A mediator can evolve into a God Object over time.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Mediator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, alternatives to the Mediator pattern in JavaScript include using the Observer pattern or event-driven architecture, or implementing direct communication between objects.
    </div>
    <br />
  </div>
</details>

---

### What are the main components of the Mediator Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main components are the mediator, colleagues, and the concrete mediator.
  </div>
  </div>
</details>

---

### What problem does the Mediator Pattern solve?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It reduces dependencies between objects, improving maintainability, flexibility, and testing.
  </div>
  </div>
</details>

---

### How does the Mediator Pattern differ from Observer Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Observer Pattern facilitates broadcast communication, whereas Mediator encapsulates centralized and complex communications.
  </div>
  </div>
</details>

---

### When is the Mediator Pattern most effective?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's effective when working with a set of objects that are tightly coupled.
  </div>
  </div>
</details>

---

### How does the Mediator Pattern promote single responsibility?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each object focuses on its own functionality while the mediator handles communication.
  </div>
  </div>
</details>

---

### Why would you choose the Mediator Pattern over direct communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To reduce dependencies between objects and to simplify updates and modifications.
  </div>
  </div>
</details>

---

### How does the Mediator Pattern influence application performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It may slightly reduce performance due to indirect communication, but it improves maintainability and flexibility.
  </div>
  </div>
</details>

---
