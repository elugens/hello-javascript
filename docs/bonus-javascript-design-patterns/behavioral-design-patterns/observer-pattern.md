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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ObserverSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Observer Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Observer Pattern**

<CloseAllAnswers />

---

### What is the Observer Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Observer pattern is a software design pattern where an object, known as the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Observer is a behavioral JS design pattern that allows you to construct a subscription mechanism that alerts numerous objects (observers) about any events that occur to the object (subject) they're viewing. This pattern is also known as Pub/Sub, which stands for Publication/Subscription. It establishes a one-to-many relationship between items, encourages loose coupling, and aids in effective object-oriented design.<br/><br/>The observer pattern is at the heart of event-driven programming. We create event handler routines that are informed when a specific event occurs.<br/>
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

**In Modern JavaScript, you might implement the Observer pattern like this:**

```javascript
class Observable {
  constructor() {
        this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

// Example usage:

const observable = new Observable();

// Observers
const observer1 = data => console.log(`Observer 1: ${data}`);
const observer2 = data => console.log(`Observer 2: ${data}`);
const observer3 = data => console.log(`Observer 3: ${data}`);

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.notify('notified!');

// Example output:
// Observer 1: notified!
// Observer 2: notified!
// Observer 3: notified!
```

In this example, the `Observable` class represents the subject. It has three primary methods: `subscribe`, `unsubscribe`, and `notify`. `subscribe` adds a new observer to the list, `unsubscribe` removes an observer, and `notify` goes through each observer and calls it with the provided data.

Then we define three observer functions, `observer1`, `observer2`, and `observer3`. Each of these is a function that logs a message to the console.

We create a new instance of `Observable`, subscribe the observers, and then call `notify`, which triggers each of the observers and logs the corresponding messages to the console.

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
      <strong>Interview Response:</strong> The Observer pattern belongs to the behavioral pattern category, which focuses on the interactions and communication between objects in a system.
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
      <strong>Interview Response:</strong> The Observer pattern is useful when you have a one-to-many relationship between objects, and want to notify a group of objects automatically when the state of one object changes.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The Observer pattern is commonly used when there's a need to maintain consistency in state between related components or modules in a software system. A good example is when you have UI components that need to update based on changes in another component or server data.
    </div>
    <br />
    <div></div>

**Use Cases:**

- To improve code management: We break down large programs into a system of loosely connected objects.
- To increase flexibility by allowing a dynamic relationship between observers and subscribers, which would otherwise be impossible due to tight coupling.
- To increase communication between the application's many components.
- To establish a one-to-many dependency between weakly related items.

<br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a practical example of using the Observer pattern in modern JavaScript to handle updates to a user's profile.

```javascript
// Defining the Observable class
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

// User Profile Observable
const userProfileObservable = new Observable();

// Observer 1: Display User Profile
const displayProfile = profile => console.log(`Display Profile: ${profile.name}, ${profile.email}`);

// Observer 2: Update User Menu
const updateUserMenu = profile => console.log(`Update User Menu: ${profile.name}`);

// Observer 3: Send Profile Update Confirmation
const sendConfirmation = profile => console.log(`Send Confirmation Email to: ${profile.email}`);

// Subscribe Observers to the User Profile Observable
userProfileObservable.subscribe(displayProfile);
userProfileObservable.subscribe(updateUserMenu);
userProfileObservable.subscribe(sendConfirmation);

// Simulating a profile update
const updatedProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com'
};

// Notify all observers about the updated profile
userProfileObservable.notify(updatedProfile);

// Example output:
// Display Profile: John Doe, johndoe@example.com
// Update User Menu: John Doe
// Send Confirmation Email to: johndoe@example.com
```

In this example, when a user's profile is updated, several different actions need to take place across the system:

1. The displayed user profile must be updated (`displayProfile`).
2. The user menu must reflect the changes (`updateUserMenu`).
3. A confirmation email should be sent to the updated email (`sendConfirmation`).

---

:::note
By using the Observer pattern, each of these actions can be handled independently as observers that respond to the changes in the observable user profile. This makes the system more flexible and easier to extend (for example, by adding more observers) in the future.
:::

  </div>
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
      <strong>Interview Response:</strong> Advantages of using the Observer pattern include decoupling of objects, flexibility, extensibility, and improved code organization and maintenance.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Observer Pattern
    </div>
    <br />
    <div></div>

- The Open/Closed Principle -- You can add new subscriber classes without modifying the publisher's code (and vice versa if a publisher interface exists).
- At runtime, you can create relationships between objects.

<br />
  </div>
</details>

---

### What's a disadvantage of the Observer Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It can lead to complexity and unintended side effects if not carefully managed, especially when observers trigger other changes.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Observer pattern can include increased complexity and coupling between objects, potential performance issues with a large number of observers, and difficulty in debugging and tracing event flows.
    </div>
    <br />
    <div></div>

- Sends notifications to subscribers in random order.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Observer pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, alternatives to the Observer pattern include the Publish/Subscribe (Pub/Sub) pattern, the Event Emitter pattern, and using callbacks or promises to handle asynchronous events and updates between objects.
    </div>
  </div>
</details>

---

### What are the key components of the Observer Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Observer Pattern in JavaScript comprises the Subject (stores observers, notifies them), Observers (update when notified), ConcreteSubject (manages state, broadcasts updates), and ConcreteObserver (updates in response to state changes).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The Observer Pattern consists of three key components:

1. **Subject:** This maintains a list of observers, facilitates adding or removing observers, and is responsible for notifying observers of changes.

2. **Observer:** This defines an updating interface for objects that should be notified of changes in the subject.

3. **ConcreteSubject:** This broadcasts notifications to observers on state changes and stores the state of the ConcreteSubject.

4. **ConcreteObserver:** This stores a reference to the ConcreteSubject, implements an update interface for the Observer, and maintains the observer's state.

**Here's a code example demonstrating these components in JavaScript:**

```javascript
// Subject
class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter(obs => obs !== observer);
  }

  fire(change) {
    this._observers.forEach(observer => {
      observer.update(change);
    });
  }
}

// ConcreteSubject
class ConcreteSubject extends Subject {
  constructor() {
    super();
    this._state = {};
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
    this.fire(this._state);
  }
}

// Observer
class Observer {
  constructor(state) {
    this.state = state;
    this.initialState = state;
  }

  update(change) {
    let newState = Object.assign({}, this.state, change);
    this.state = newState;
  }
}

// ConcreteObserver
class ConcreteObserver extends Observer {
  constructor(state) {
    super(state);
  }

  update(change) {
    super.update(change);
    console.log(`ConcreteObserver's new state is ${JSON.stringify(this.state)}`);
  }
}

// Usage
let sub = new ConcreteSubject();

let obs1 = new ConcreteObserver({name: 'Observer 1', state: 'active'});
let obs2 = new ConcreteObserver({name: 'Observer 2', state: 'inactive'});

sub.subscribe(obs1);
sub.subscribe(obs2);

sub.state = {name: 'Changed Name', state: 'active'};

// Output:
// ConcreteObserver's new state is {"name":"Changed Name","state":"active"}
// ConcreteObserver's new state is {"name":"Changed Name","state":"active"}
```

In the example above, the `Subject` class is an abstract representation for our concrete subjects. `ConcreteSubject` maintains the state and notifies the observers of any change.

The `Observer` class provides an update interface that concrete observers (like `ConcreteObserver`) will use to update their state when the subject's state changes. The `ConcreteObserver` receives these updates, applies them to its state, and logs the change to the console.

  </div>
  </div>
</details>

---

### How is the Observer Pattern implemented in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It is implemented using objects which subscribe (or register) to another object (the subject), and then get notified when the subject’s state changes.
  </div>
  </div>
</details>

---

### Can you use the Observer Pattern with React?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, React's Component State and Props can be thought of as a form of the Observer Pattern, where state changes trigger UI updates.
  </div>
  </div>
</details>

---

### When should you use the Observer Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It should be used when a change to one object requires changing others, and you don’t know how many objects need to be changed.
  </div>
  </div>
</details>

---

### What is a practical example of the Observer Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A practical example is event handling in JavaScript, where elements can subscribe to events and get notified when they occur.
  </div>
  </div>
</details>

---

### What's the difference between the Observer and the Publish/Subscribe Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Publish/Subscribe (Pub/Sub), publishers don't need to know subscribers, unlike the Observer pattern. There's typically an event bus handling the notifications.
  </div>
  </div>
</details>

---

### How does Observer Pattern differ from MVC?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In MVC, Model and View are separate but can communicate. The Observer pattern is one way this communication can be implemented.
  </div>
  </div>
</details>

---

### How does Observer Pattern contribute to code modularity?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It allows decoupling of objects, making them independent while still allowing communication, improving code modularity.
  </div>
  </div>
</details>

---
