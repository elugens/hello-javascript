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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MediatorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Mediator Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Mediator Pattern**

---

<AdSense />

---

<CloseAllAnswers />

### What is the Mediator Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Mediator design pattern is a behaviorial design pattern in JavaScript allows objects to communicate through a central mediator object, reducing dependencies between objects and improving maintainability and flexibility.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Mediator Design Pattern provides a unified interface through which different parts of a system may communicate. This pattern helps to decouple the code, reduce dependencies, and increase the ease of future modification or extension of code.
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

Let's consider an example of a Chat Room where multiple users can send and receive messages.

**Here is a JavaScript implementation of the Mediator Pattern:**

```javascript
class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }

    send(message, to) {
        this.chatRoom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        this.users[user.name] = user;
        user.chatRoom = this;
    }

    send(message, from, to) {
        if (to) {
            // Single user message
            to.receive(message, from);
        } else {
            // Broadcast message
            for (let key in this.users) {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            }
        }
    }
}

// Create users
let brad = new User('Brad');
let jeff = new User('Jeff');
let sara = new User('Sara');

// Create chatroom
let chatroom = new ChatRoom();

// Register users in chatroom
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

// Users send and receive messages
brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best!', brad);
jeff.send('Hello Everyone!');
```

In the above example, `User` objects can send and receive messages from each other but they are doing it using the `ChatRoom` mediator. The `ChatRoom` object knows how to redirect the messages among users and it encapsulates this logic so that the `User` objects don't need to know about the details of each other directly. This makes `User` objects loosely coupled and they can communicate with each other effectively via the `ChatRoom` mediator.

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
      <strong>Interview Response:</strong> Yes, alternatives to the Mediator pattern in JavaScript include using the Observer pattern, event-driven architecture, or implementing direct communication between objects.
    </div>
  </div>
</details>

---

### What are the main components of the Mediator Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main components of the Mediator pattern in JavaScript are the Mediator (which centralizes communication) and Colleagues (which are the components that interact with each other through the Mediator).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example with comments highlighting the main components.

```javascript
// Mediator - central communication hub
class ChatRoom {
    constructor() {
        this.users = {};
    }

    // Register function acts as the means of adding Colleagues
    register(user) {
        this.users[user.name] = user;
        user.chatRoom = this;
    }

    // This is where communication between Colleagues happens
    send(message, from, to) {
        if (to) {
            // Single user message
            to.receive(message, from);
        } else {
            // Broadcast message
            for (let key in this.users) {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            }
        }
    }
}

// Colleague - the components that are communicating via the Mediator
class User {
    constructor(name) {
        this.name = name;
        this.chatRoom = null; // A reference to the Mediator
    }

    send(message, to) {
        // Interact with the Mediator to send messages
        this.chatRoom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

// Creating colleagues
let bob = new User('Bob');
let alice = new User('Alice');
let charlie = new User('Charlie');

// Creating a mediator
let chatroom = new ChatRoom();

// Registering colleagues with the mediator
chatroom.register(bob);
chatroom.register(alice);
chatroom.register(charlie);

// Colleagues interacting with each other via the mediator
bob.send('Hey, Alice', alice);
alice.send('Hi, Bob!', bob);
charlie.send('Hello everyone!');
```

In this example, `ChatRoom` is the Mediator and `User` instances (Bob, Alice, Charlie) are Colleagues. The Colleagues communicate with each other via the Mediator (`ChatRoom`), which handles and routes messages. This reduces the direct communication paths between the Colleagues, leading to a system that's easier to manage and extend.

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
