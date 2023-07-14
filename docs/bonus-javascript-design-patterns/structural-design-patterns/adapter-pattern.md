---
title: Adapter Design Pattern
description: Adapter is a structural design pattern that facilitates the collaboration of objects having conflicting interfaces.
sidebar_position: 1
sidebar_label: Adapter
keywords:
  - adapter pattern
  - adapter design pattern
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
  - adapter pattern
  - adapter design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AdapterSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Adapter Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Adapter Pattern**

<CloseAllAnswers />

---

### What is an adapter design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> An adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together by creating a middle-layer adapter that translates requests between them. The wrapper pattern is another name for it.
    </div><br />
    <div>
      <strong>Interview Response:</strong> In JavaScript, the adapter design pattern allows objects or classes with incompatible interfaces to work together. Interfaces from different classes or objects connect through an adapter work together despite their incompatible interfaces. The wrapper pattern is another name for it.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-adapter.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- calls into Adapter to request a service

**Adapter** -- In example code: _ShippingAdapter_

- implements the interface that the client expects or knows

**Adaptee** -- In example code: _AdvancedShipping_

- the object being adapted
- has a different interface from what the client expects or knows

</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```js
class SimpleEarphones {
  constructor() {
    this.attach = function () {
      console.log('Use Earphones with Type C phone');
    };
  }
}

// Adapter
class EarPhoneAdapter extends SimpleEarphones {
  constructor(typeCphone) {
    super();
    this.attach = function () {
      typeCphone.attach();
    };
  }
}

class TypeCPhone {
  constructor() {
    this.attach = function () {
      console.log('Earphones attached to Type C phone');
    };
  }
}

let typeCphone = new TypeCPhone();
let adapter = new EarPhoneAdapter(typeCphone);
adapter.attach();

/*

Output:

Earphones attached to Type C phone

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong> ES5 Classical Implementation<br /><br />

<img src="/img/javascript-adapter.jpg" /><br /><br />

  <div></div>

```js
// old interface

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    // ...
    return '$49.75';
  };
}

// new interface

function AdvancedShipping() {
  this.login = function (credentials) {
    /* ... */
  };
  this.setStart = function (start) {
    /* ... */
  };
  this.setDestination = function (destination) {
    /* ... */
  };
  this.calculate = function (weight) {
    return '$39.50';
  };
}

// adapter interface

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

function run() {
  var shipping = new Shipping();
  var credentials = { token: '30a8-6ee1' };
  var adapter = new ShippingAdapter(credentials);

  // original shipping object and interface

  var cost = shipping.request('78701', '10010', '2 lbs');
  console.log('Old cost: ' + cost);

  // new shipping object with adapted interface

  cost = adapter.request('78701', '10010', '2 lbs');

  console.log('New cost: ' + cost);
}

run();

/*
OUTPUT:

Old cost: $49.75
New cost: $39.50

*/
```

  </div>
  </div>
</details>

---

### The Adapter pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Adapter pattern belongs to the Structural Design Patterns category, which deals with object composition and relationships between objects to form larger structures.
    </div>
  </div>
</details>

---

### What problem does the Adapter Pattern solve?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It solves the issue of working with classes or components having incompatible interfaces by encapsulating differences and providing a unified, compatible interface.
  </div>
  </div>
</details>

---

### What is the Adapter Pattern's most noticeable feature?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The most noticeable feature of the Adapter pattern in JavaScript is its ability to allow objects with incompatible interfaces to work together seamlessly by creating a middle layer adapter.
    </div>
  </div>
</details>

---

### What Pros and Cons can you think of regarding the Adapter Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Pros: Enables objects with incompatible interfaces to work together, promotes reusability, improves maintainability. Cons: Increases complexity, can lead to performance issues, adds an extra layer of abstraction.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits vs. Drawbacks
    </div>
    <br />
    <div></div>

**Benefits**

- Based on SOLID principles.
- We can add new adapters without breaking existing code.
- The code is both reusable and adaptable.
- Clean code — because the client/context does not use a different interface in each concrete class and can switch between additional adapters using polymorphism.
- Single Responsibility Principle - The principle of single responsibility. You can separate the interface or data conversion code from the main business logic of the program.
- Open/Closed Principle. If they interact with the adapters via the client interface, you can start introducing new kinds of adapters into the application without having to break the existing client code.

**Drawbacks**

- The overall complexity of the code rises as a result of the addition of new interfaces and classes. Changing the service class to match the rest of your code is sometimes easier.

<br />
  </div>
</details>

---

### When should the Adapter Pattern be used?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Adapter pattern in JavaScript should be used when integrating existing code with new code, connecting incompatible interfaces, or promoting code reuse.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Use Case
    </div>
    <br />
    <div></div>

- There is a class whose interfaces do not match the one you need.
- There are several subclasses, but it’s impractical to adapt their interface by sub-classing every one.

<br />
  </div>
</details>

---

### In JavaScript, Are there any alternatives to using the adapter pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, some alternatives to the Adapter pattern in JavaScript include refactoring the code to use a common interface, using the Facade pattern, or using the Decorator pattern.
    </div>
  </div>
</details>

---

### How does the Adapter Pattern maintain the principle of single responsibility?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Adapter Pattern supports the single responsibility principle by allowing classes to focus on their core functions, while it handles compatibility between different interfaces or systems.
  </div>
  </div>
</details>

---

### Can the Adapter Pattern be used with legacy code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's often used to make legacy code work with newer systems without modifying existing interfaces or code.
  </div>
  </div>
</details>

---

### Is the Adapter Pattern the same as the Decorator Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, while both involve wrapping, Adapter changes the interface for compatibility, Decorator adds behavior without altering the interface.
  </div>
  </div>
</details>

---

### What are the key components of the Adapter Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Key components are the Target interface, the Adaptee (existing incompatible interface), and the Adapter (wraps Adaptee to match Target).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Target Interface
class Target {
  request() {
    throw new Error('request() method must be implemented.');
  }
}

// Adaptee
class Adaptee {
  specificRequest() {
    console.log('Adaptee specific request');
  }
}

// Adapter
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    this.adaptee.specificRequest();
  }
}

// Client
function clientCode(target) {
  target.request();
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter);
```

In this example, we have a `Target` class representing the target interface. The `Adaptee` class represents the existing object with an incompatible interface. The `Adapter` class extends the `Target` class and internally uses the `Adaptee` object to bridge the gap between the target interface and the adaptee.

When the `clientCode` function is called with the `adapter` object, it calls the `request` method on the `adapter`. Internally, the `adapter` delegates the request to the `Adaptee` object by calling its `specificRequest` method. This allows the client to use the `Adapter` object as if it were a `Target` object, even though the underlying implementation comes from the `Adaptee`.

---

:::note
Note that this is a simplified example to demonstrate the concept of the Adapter Pattern in JavaScript. In a real-world scenario, the Adapter may need to perform additional logic or transformation to adapt the interface of the adaptee to the target interface.
:::

  </div>
  </div>
</details>

---

### What’s the difference between object and class adapter patterns?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, both the Object Adapter Pattern and the Class Adapter Pattern are used to implement the Adapter Pattern. The main difference between the two lies in how they achieve the adaptation between the target interface and the adaptee.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**1. Object Adapter Pattern:**

- In this pattern, the adapter object contains an instance of the adaptee object and implements the target interface. It uses composition to "adapt" the adaptee's interface to the target interface.
- The adapter object wraps the adaptee object and translates the calls from the target interface to the adaptee's interface.

Here's an example:

```javascript
// Target Interface
class Target {
  request() {
    throw new Error('request() method must be implemented.');
  }
}

// Adaptee
class Adaptee {
  specificRequest() {
    console.log('Adaptee specific request');
  }
}

// Object Adapter
class ObjectAdapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    this.adaptee.specificRequest();
  }
}

// Client
function clientCode(target) {
  target.request();
}

// Usage
const adaptee = new Adaptee();
const adapter = new ObjectAdapter(adaptee);

clientCode(adapter);
```

In this example, the `ObjectAdapter` class adapts the `Adaptee` object by containing an instance of it (`this.adaptee`). It implements the `Target` interface and internally delegates the request to the `Adaptee` object.

**2. Class Adapter Pattern:**

- In this pattern, the adapter class extends both the target class and the adaptee class. It uses multiple inheritance to "adapt" the adaptee's interface to the target interface.
- The adapter class directly inherits the functionality and properties from the adaptee class, while also implementing the target interface.

Here's an example:

```javascript
// Target Interface
class Target {
  request() {
    throw new Error('request() method must be implemented.');
  }
}

// Adaptee
class Adaptee {
  specificRequest() {
    console.log('Adaptee specific request');
  }
}

// Class Adapter
class ClassAdapter extends Adaptee {
  request() {
    this.specificRequest();
  }
}

// Client
function clientCode(target) {
  target.request();
}

// Usage
const adapter = new ClassAdapter();

clientCode(adapter);
```

In this example, the `ClassAdapter` class extends both the `Adaptee` class and implements the `Target` interface. It directly inherits the `specificRequest` method from the `Adaptee` class and also implements the `request` method defined by the `Target` interface.

Both the Object Adapter Pattern and the Class Adapter Pattern achieve the same goal of adapting the interface of the adaptee to the target interface. The choice between the two depends on the specific requirements and constraints of your project.

  </div>
  </div>
</details>

---

### Is the Adapter Pattern used frequently in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript frequently uses the pattern due to its dynamic nature, often when integrating with third-party libraries or APIs.
  </div>
  </div>
</details>

---
