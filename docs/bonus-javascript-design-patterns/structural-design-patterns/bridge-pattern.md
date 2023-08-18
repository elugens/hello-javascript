---
title: Bridge Design Pattern
description: The bridge pattern is a structural pattern used in web development to decouple an abstraction from its implementation so that the two can vary independently.
sidebar_position: 1
sidebar_label: Bridge
keywords:
  - bridge pattern
  - bridge design pattern
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
  - bridge pattern
  - bridge design pattern
  - design patterns
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BridgeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Bridge Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Bridge Pattern**

---

<AdSense />

---

<CloseAllAnswers />

### What is the Bridge Design Pattern in Modern JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Bridge Design Pattern is a structural design pattern that decouples an abstraction from its implementation, allowing both to vary independently. It enables the separation of a class's interface from its implementation, often for the purposes of providing multiple implementations.
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

  <div><strong className="codeExample">Code Example</strong><br /><br />

<img src="/img/bridge-pattern.png" /><br /><br />

</div><br />

  <div></div>

Here's an example using modern JavaScript (ES6).

```javascript
// The abstraction
class SmartDevice {
  constructor(operatingSystem) {
    this.operatingSystem = operatingSystem;
  }

  turnOn() {
    this.operatingSystem.start();
  }

  turnOff() {
    this.operatingSystem.shutDown();
  }
}

// The implementation
class OperatingSystem {
  start() {
    throw new Error("This method must be overwritten!");
  }

  shutDown() {
    throw new Error("This method must be overwritten!");
  }
}

class Android extends OperatingSystem {
  start() {
    console.log("Starting the Android system...");
  }

  shutDown() {
    console.log("Shutting down the Android system...");
  }
}

class iOS extends OperatingSystem {
  start() {
    console.log("Starting the iOS system...");
  }

  shutDown() {
    console.log("Shutting down the iOS system...");
  }
}

// Using the Bridge Design Pattern
const myAndroidDevice = new SmartDevice(new Android());
myAndroidDevice.turnOn(); // Output: Starting the Android system...

const myIOSDevice = new SmartDevice(new iOS());
myIOSDevice.turnOn(); // Output: Starting the iOS system...
```

In this example, `SmartDevice` is our abstraction that we want to decouple from its implementation (the `OperatingSystem`), allowing each to vary independently. The `SmartDevice` class isn't concerned with how the `OperatingSystem` is implemented, and similarly, the `OperatingSystem` doesn't care how it's used by `SmartDevice`. This makes it easy to add new types of devices and operating systems without modifying existing code.

  </div>
  </div>
</details>

---

### The Bridge pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In software engineering, we define the bridge pattern as a structural design pattern.
    </div>
  </div>
</details>

---

### What is the use case for the Bridge Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Bridge pattern in JavaScript is often used in situations where you need to separate an abstraction from its implementation, allowing for greater flexibility and extensibility in development.
    </div>
  </div>
</details>

---

### What are the objects that participate in the Bridge Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div><strong>Interview Response:</strong> The participating objects in the Bridge pattern are the Abstraction, RefinedAbstraction, Implementor, and ConcreteImplementor, which decouple the interface from the implementation allowing both to vary independently.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Objects that participate in the Bridge pattern include:

**1. Abstraction:** defines the abstraction's interface and maintains a reference to an object of type `Implementor`.

**2. RefinedAbstraction:** extends the interface defined by `Abstraction`.

**3. Implementor**: defines the interface for implementation classes. This interface doesn't have to correspond exactly to `Abstraction`'s interface; in fact, the two interfaces can be quite different.

**4. ConcreteImplementor:** implements the `Implementor` interface and defines its concrete implementation.

Here's a code example in modern JavaScript (ES6) which showcases these components.

```javascript
// Implementor
class DrawingAPI {
  drawCircle(x, y, radius) {
    throw new Error('This method must be overridden!');
  }
}

// ConcreteImplementor 1
class DrawingAPI1 extends DrawingAPI {
  drawCircle(x, y, radius) {
    console.log(`API1.circle at ${x}:${y} radius ${radius}`);
  }
}

// ConcreteImplementor 2
class DrawingAPI2 extends DrawingAPI {
  drawCircle(x, y, radius) {
    console.log(`API2.circle at ${x}:${y} radius ${radius}`);
  }
}

// Abstraction
class Shape {
  constructor(drawingAPI) {
    if (this.constructor === Shape) {
      throw new Error('Cannot instantiate abstract class!');
    }

    this.drawingAPI = drawingAPI;
  }

  draw() {
    throw new Error('This method must be overridden!');
  }

  resizeByPercentage(pct) {
    throw new Error('This method must be overridden!');
  }
}

// RefinedAbstraction
class CircleShape extends Shape {
  constructor(x, y, radius, drawingAPI) {
    super(drawingAPI);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    this.drawingAPI.drawCircle(this.x, this.y, this.radius);
  }

  resizeByPercentage(pct) {
    this.radius *= pct;
  }
}

// Usage:
const shapes = [
  new CircleShape(1, 2, 3, new DrawingAPI1()),
  new CircleShape(5, 7, 11, new DrawingAPI2())
];

for (let shape of shapes) {
  shape.resizeByPercentage(2.5);
  shape.draw();
}
```

  </div>
  </div>
</details>

---

### What are some of the advantages of employing the Bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Some advantages of using the Bridge pattern in JavaScript include increased flexibility, extensibility, and code reuse, as well as improved maintainability and reduced complexity.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Bridge Pattern
    </div>
    <br />
    <div></div>

- Loosely coupled code - Because the bridge pattern decouples an abstraction from its implementation, changes to the implementation do not affect the client code. The client code does not need to be compiled when the implementation changes.
- Reduces code duplication while increasing code maintainability and reusability.
- Classes and applications that are platform agnostic can be created.
- Helps to promote the Open-Closed principle, new abstractions and implementations can be developed independently.
- Decoupling abstraction from implementation: bridge pattern can avoid the binding between abstraction and implementation and select the implementation at run time.
- Improved Extensibility – Abstraction and implementation can be extended independently.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Some disadvantages of using the Bridge pattern in JavaScript include increased complexity due to additional layers of abstraction, potential performance overhead, and added development time.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Bridge Pattern
    </div>
    <br />
    <div></div>

- Bridge pattern implementation increases code complexity.
- Interfaces with only a single implementation.
- Using the technique in a highly cohesive class may cause the code to become more complicated.

<br />
  </div>
</details>

### Are there any alternatives to using the bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some alternatives to using the Bridge pattern in JavaScript include the Strategy pattern, the Decorator pattern, and the Adapter pattern, depending on the specific requirements of the project.
    </div>
  </div>
</details>

---

### When is it suitable to use the Bridge Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's suitable when you expect changes in the classes' abstraction and implementation, particularly if they're not tightly related.
  </div>
  </div>
</details>

---

### How does the Bridge Pattern aid in reducing complexity?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Bridge Pattern aids in reducing complexity by splitting complex classes into separate hierarchies, it simplifies and organizes code, making it easier to understand and maintain.
  </div>
  </div>
</details>

---

### Does the Bridge Pattern provide any performance benefits?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Not inherently. Its benefits are structural rather than performance-based. It provides cleaner, more flexible code but doesn't directly improve performance.
  </div>
  </div>
</details>

---

### What's the difference between Adapter and Bridge Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Adapter makes unrelated interfaces work together while Bridge Pattern separates abstraction from implementation to independently manage hierarchies.
  </div>
  </div>
</details>

---

### How does Bridge Pattern facilitate the Open/Closed Principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Bridge Pattern allows adding new abstractions or implementations without changing existing code, thus adhering to the Open/Closed Principle.
  </div>
  </div>
</details>

---
